/* ============================================================
   CARD NEWS 렌더러 — note.html 의 카드뉴스 섹션을 그립니다.
   데이터: assets/js/cards-data.js 의 window.CARDNEWS (최신 주차가 맨 앞)
   - 주차 선택(select) + 분야 필터(chip) + 키워드 검색
   - 기본은 관련도 높은 상위 INITIAL_LIMIT 편만, '더 보기'로 전체 표시
   - 카드는 기본 접힘, 클릭하면 펼쳐짐
   ============================================================ */
(function () {
  /* 처음에 보여줄 논문 수 — 여기 숫자만 바꾸면 됩니다 */
  var INITIAL_LIMIT = 10;

  var DATA = window.CARDNEWS || [];
  var weekSel = document.getElementById('cardnews-week');
  var grid = document.getElementById('cardnews-grid');
  if (!grid || !weekSel) return;

  if (!DATA.length) {
    grid.innerHTML = '<p class="cn-empty">아직 카드뉴스가 없습니다.</p>';
    return;
  }

  var metaEl = document.getElementById('cardnews-meta');
  var chipsEl = document.getElementById('cardnews-chips');
  var searchEl = document.getElementById('cardnews-search');

  // 펼쳤을 때 보여줄 상세 필드 (빈 값은 자동으로 숨김)
  var FIELDS = [
    ['question', '❓ question'],
    ['key_result', '📊 key result'],
    ['why_for_us', '🎯 why for us'],
    ['limitations', '⚠️ limitations'],
    ['reuse', '📦 reuse'],
    ['next_step', '💡 next_step']
  ];

  var activeDomain = 'ALL';
  var showAll = false;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function stars(n) {
    n = Math.max(0, Math.min(5, n | 0));
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }
  function currentWeek() { return DATA[weekSel.selectedIndex] || DATA[0]; }

  function cardHTML(p) {
    var badge = (p.emoji ? p.emoji + ' ' : '') + esc(p.domain || '');
    var metaBits = [p.journal, p.year, p.author].filter(Boolean).map(esc).join(' · ');

    var rows = '';
    if (p.what_they_did && p.what_they_did.length) {
      rows += '<dt>🧪 what they did</dt><dd><ul class="cn-did">' +
        p.what_they_did.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
        '</ul></dd>';
    }
    FIELDS.forEach(function (f) {
      var v = p[f[0]];
      if (v) rows += '<dt>' + f[1] + '</dt><dd>' + esc(v) + '</dd>';
    });

    var concepts = (p.concepts && p.concepts.length)
      ? '<div class="cn-concepts">' + p.concepts.map(function (c) {
          return '<span class="cn-tag">' + esc(c) + '</span>';
        }).join('') + '</div>'
      : '';

    var links = [];
    if (p.pubmed) links.push('<a href="' + esc(p.pubmed) + '" target="_blank" rel="noopener">PubMed ↗</a>');
    if (p.doi) links.push('<a href="' + esc(p.doi) + '" target="_blank" rel="noopener">원문·그림 ↗</a>');
    var linksHTML = links.length ? '<div class="cn-links">' + links.join('') + '</div>' : '';

    // 질문 순서를 위해 question 은 위 FIELDS 에서 먼저 나오도록 배치했지만,
    // 무엇을 했나(목록) 뒤에 오도록 question 을 맨 앞에서 빼고 싶으면 순서만 조정하세요.
    return '<article class="cn-card reveal" data-domain="' + esc(p.domain || '') + '">' +
      '<button class="cn-head" type="button" aria-expanded="false">' +
        '<div class="cn-top">' +
          (badge ? '<span class="cn-badge">' + badge + '</span>' : '') +
          '<span class="cn-stars" title="관련도 ' + (p.rating | 0) + '/5">' + stars(p.rating) + '</span>' +
        '</div>' +
        '<h3 class="cn-title">' + esc(p.title) + '</h3>' +
        (metaBits ? '<div class="cn-metaline">' + metaBits + '</div>' : '') +
        (p.tldr ? '<p class="cn-oneliner">' + esc(p.tldr) + '</p>' : '') +
        '<span class="cn-toggle">자세히 ▾</span>' +
      '</button>' +
      '<div class="cn-detail" hidden>' +
        (rows ? '<dl>' + rows + '</dl>' : '') +
        concepts + linksHTML +
      '</div>' +
    '</article>';
  }

  function filtered() {
    var week = currentWeek();
    var q = (searchEl && searchEl.value || '').trim().toLowerCase();
    return week.papers.filter(function (p) {
      if (activeDomain !== 'ALL' && (p.domain || '') !== activeDomain) return false;
      if (q) {
        var hay = (p.title + ' ' + p.tldr + ' ' + p.why_for_us + ' ' +
                   p.key_result + ' ' + p.question + ' ' + p.journal).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    }).sort(function (a, b) { return (b.rating | 0) - (a.rating | 0); }); // 관련도 높은 순
  }

  function render() {
    var week = currentWeek();
    var list = filtered();
    var shown = showAll ? list : list.slice(0, INITIAL_LIMIT);
    var hidden = list.length - shown.length;

    if (metaEl) {
      metaEl.textContent = week.date + ' · ' +
        (list.length === week.papers.length ? list.length + '편'
                                            : list.length + '/' + week.papers.length + '편');
    }

    var html = shown.length
      ? shown.map(cardHTML).join('')
      : '<p class="cn-empty">조건에 맞는 논문이 없습니다.</p>';

    if (hidden > 0) {
      html += '<button id="cardnews-more" class="cn-more" type="button">' +
        '나머지 ' + hidden + '편 더 보기 ▾</button>';
    } else if (showAll && list.length > INITIAL_LIMIT) {
      html += '<button id="cardnews-more" class="cn-more" type="button" data-collapse="1">' +
        '상위 ' + INITIAL_LIMIT + '편만 보기 ▴</button>';
    }
    grid.innerHTML = html;
    if (window.observeReveal) window.observeReveal();
  }

  function renderChips() {
    if (!chipsEl) return;
    var seen = {}, order = [];
    currentWeek().papers.forEach(function (p) {
      var d = p.domain || '';
      if (!d || seen[d]) return;
      seen[d] = 1; order.push({ d: d, e: p.emoji || '' });
    });
    var chips = ['<button class="cn-chip' + (activeDomain === 'ALL' ? ' on' : '') +
                 '" data-d="ALL">전체</button>'];
    order.forEach(function (o) {
      chips.push('<button class="cn-chip' + (activeDomain === o.d ? ' on' : '') +
        '" data-d="' + esc(o.d) + '">' + (o.e ? o.e + ' ' : '') + esc(o.d) + '</button>');
    });
    chipsEl.innerHTML = chips.join('');
  }

  function reset() { activeDomain = 'ALL'; showAll = false; }

  // 주차 셀렉트 채우기
  weekSel.innerHTML = DATA.map(function (w, i) {
    return '<option value="' + i + '">' + w.date + ' (' + w.papers.length + '편)</option>';
  }).join('');

  weekSel.addEventListener('change', function () { reset(); renderChips(); render(); });

  if (chipsEl) chipsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.cn-chip');
    if (!btn) return;
    activeDomain = btn.getAttribute('data-d');
    showAll = false;
    renderChips(); render();
  });

  if (searchEl) searchEl.addEventListener('input', function () { showAll = false; render(); });

  // 카드 펼침/접힘 + 더보기 (이벤트 위임)
  grid.addEventListener('click', function (e) {
    var more = e.target.closest('.cn-more');
    if (more) { showAll = !more.getAttribute('data-collapse'); render(); return; }

    var head = e.target.closest('.cn-head');
    if (!head) return;
    var card = head.parentNode;
    var detail = card.querySelector('.cn-detail');
    var open = card.classList.toggle('open');
    head.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (detail) detail.hidden = !open;
    var tog = head.querySelector('.cn-toggle');
    if (tog) tog.textContent = open ? '접기 ▴' : '자세히 ▾';
  });

  renderChips();
  render();
})();
