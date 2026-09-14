// ---- Theme + language preferences (shared by every page) ----
(function () {
  var root = document.documentElement;
  var THEME_KEY = 'halab-theme';
  var LANG_KEY = 'halab-language';

  var UI = {
    'menu': { en: 'Menu', ko: '메뉴' },
    'theme.dark': { en: 'Use dark mode', ko: '다크 모드 사용' },
    'theme.light': { en: 'Use light mode', ko: '라이트 모드 사용' },
    'language': { en: 'Language', ko: '언어' },
    'pager.prev': { en: '\u2039 Prev', ko: '\u2039 이전' },
    'pager.next': { en: 'Next \u203a', ko: '다음 \u203a' },
    'open': { en: 'Open \u2192', ko: '열기 \u2192' },
    'search': { en: 'Search by keyword', ko: '키워드 검색' },
    'papers.none': { en: 'No papers match these filters.', ko: '조건에 맞는 논문이 없습니다.' },
    'cards.none': { en: 'No field updates yet.', ko: '아직 카드뉴스가 없습니다.' },
    'details.open': { en: 'Details \u25be', ko: '자세히 \u25be' },
    'details.close': { en: 'Close \u25b4', ko: '접기 \u25b4' },
    'filter.all': { en: 'All', ko: '전체' },
    'paper.unit': { en: ' papers', ko: '편' }
  };

  var TRANSLATIONS = [
    ["Home","Home","홈"],
    ["About","About","연구실"],
    ["Members","Members","구성원"],
    ["Publications","Publications","논문"],
    ["News","News","소식"],
    ["Note","Note","자료"],
    ["Contact","Contact","연락처"],
    ["Explore","Explore","둘러보기"],
    ["Connect","Connect","연결"],
    ["Kyungpook National University","Kyungpook National University","경북대학교"],
    ["Department of Molecular Medicine","Department of Molecular Medicine","분자의학교실"],
    ["School of Medicine","School of Medicine","의과대학"],
    ["Research Output","Research Output","연구 성과"],
    ["Selected","Selected","주요"],
    ["publications","publications","연구 논문"],
    ["first authors","first authors","공동 제1저자"],
    ["corresponding authors","corresponding authors","교신저자"],
    ["For the full list, see","For the full list, see","전체 목록은"],
    ["Lab Updates","Lab Updates","연구실 소식"],
    ["News &","News &","연구실 소식 &"],
    ["milestones","milestones","주요 성과"],
    ["Notes & Resources","Notes & Resources","노트 & 자료"],
    ["Weekly · 카드뉴스","Weekly · Research cards","Weekly · 카드뉴스"],
    ["주차","Week","주차"],
    ["Field updates, ideas, &","Field updates, ideas, &","분야 동향, 아이디어 &"],
    ["teaching","teaching","교육"],
    ["Latest research updates, teaching and course resources, plus study materials.","Latest research updates, teaching and course resources, plus study materials.","최신 연구 동향과 강의·수업 자료, 학습 자료를 공유합니다."],
    ["Field updates","Field updates","분야별 최신 동향"],
    ["관련 분야 최신 논문을 정리한 위클리 카드뉴스입니다.","Weekly research cards summarizing the latest papers in our fields.","관련 분야 최신 논문을 정리한 위클리 카드뉴스입니다."],
    ["분야로 거르거나 키워드로 찾고, 카드를 누르면 자세히 펼쳐집니다.","Filter by field or search by keyword, then select a card to see details.","분야로 거르거나 키워드로 찾고, 카드를 누르면 자세히 펼쳐집니다."],
    ["Teaching & course materials","Teaching & course materials","강의 & 수업 자료"],
    ["수업 자료와 실습 자료입니다.","Lecture notes and hands-on course materials.","수업 자료와 실습 자료입니다."],
    ["Study materials  (will be updated)","Study materials (more coming soon)","학습 자료 (계속 업데이트됩니다)"],
    ["질병 유전체 연구를 위한 기반 공부 자료입니다.","Foundational study materials for disease genomics research.","질병 유전체 연구를 위한 기반 공부 자료입니다."],
    ["Resources","Resources","자료"],
    ["Open →","Open →","열기 →"]
  ];

  var pageMeta = {
    'index.html': { en: ['KNU Genomic Medicine Lab', 'Genomic Medicine Lab at Kyungpook National University — exploring the genetic architecture of human diseases through multi-omics and systems biology.'], ko: ['경북대학교 유전체의학 연구실', '멀티오믹스와 시스템생물학으로 인간 질환의 유전적 구조를 연구하는 경북대학교 유전체의학 연구실입니다.'] },
    'about.html': { en: ['About · KNU Genomic Medicine Lab', 'Mission, vision, research focus and values of the KNU Genomic Medicine Lab.'], ko: ['연구실 소개 · 경북대학교 유전체의학 연구실', '경북대학교 유전체의학 연구실의 목표, 비전, 연구 분야와 가치를 소개합니다.'] },
    'members.html': { en: ['Members · KNU Genomic Medicine Lab', 'People of the KNU Genomic Medicine Lab — PI, graduate students, interns and alumni.'], ko: ['구성원 · 경북대학교 유전체의학 연구실', '경북대학교 유전체의학 연구실의 책임연구자, 대학원생, 인턴과 동문을 소개합니다.'] },
    'publications.html': { en: ['Publications · KNU Genomic Medicine Lab', 'Selected publications from the KNU Genomic Medicine Lab.'], ko: ['논문 · 경북대학교 유전체의학 연구실', '경북대학교 유전체의학 연구실의 주요 연구 논문입니다.'] },
    'news.html': { en: ['News · KNU Genomic Medicine Lab', 'News and updates from the KNU Genomic Medicine Lab.'], ko: ['소식 · 경북대학교 유전체의학 연구실', '경북대학교 유전체의학 연구실의 새로운 소식과 주요 성과입니다.'] },
    'note.html': { en: ['Note · KNU Genomic Medicine Lab', 'Research updates, teaching resources and study materials from the KNU Genomic Medicine Lab.'], ko: ['자료 · 경북대학교 유전체의학 연구실', '경북대학교 유전체의학 연구실의 연구 동향, 강의 자료와 학습 자료입니다.'] },
    'contact.html': { en: ['Contact · KNU Genomic Medicine Lab', 'Contact the KNU Genomic Medicine Lab.'], ko: ['연락처 · 경북대학교 유전체의학 연구실', '경북대학교 유전체의학 연구실 연락처입니다.'] }
  };

  var translationBySource = {};
  TRANSLATIONS.forEach(function (entry) {
    translationBySource[entry[0]] = { en: entry[1], ko: entry[2] };
  });

  function preference(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function remember(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }
  function language() { return root.lang === 'ko' ? 'ko' : 'en'; }
  function t(key) {
    var item = UI[key];
    return item ? item[language()] : key;
  }
  window.siteT = t;

  function translateTextNode(node, lang) {
    if (!node.parentNode || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(node.parentNode.nodeName)) return;
    if (node.parentElement && node.parentElement.closest('[data-page-text], [data-member], [data-member-label]')) return;
    if (!Object.prototype.hasOwnProperty.call(node, '_halabOriginal')) {
      var trimmed = node.nodeValue.trim();
      if (!translationBySource[trimmed]) return;
      node._halabOriginal = trimmed;
      node._halabPrefix = node.nodeValue.slice(0, node.nodeValue.indexOf(trimmed));
      node._halabSuffix = node.nodeValue.slice(node.nodeValue.indexOf(trimmed) + trimmed.length);
    }
    var item = translationBySource[node._halabOriginal];
    if (item) node.nodeValue = node._halabPrefix + item[lang] + node._halabSuffix;
  }

  function translateTree(scope) {
    var lang = language();
    // Page-owned copy is keyed explicitly, so editing English never breaks Korean.
    document.querySelectorAll('[data-page-text]').forEach(function (el) {
      var item = (window.PAGE_CONTENT || {})[el.dataset.pageText];
      if (item && el.textContent !== item[lang]) el.textContent = item[lang];
    });
    var walker = document.createTreeWalker(scope || document.body, NodeFilter.SHOW_TEXT);
    var nodes = [], node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (n) { translateTextNode(n, lang); });

    var file = location.pathname.split('/').pop() || 'index.html';
    var meta = pageMeta[file] && pageMeta[file][lang];
    if (meta) {
      document.title = meta[0];
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta[1]);
    }
    var search = document.getElementById('cardnews-search');
    if (search) {
      search.setAttribute('placeholder', t('search'));
      search.setAttribute('aria-label', t('search'));
    }
    var menu = document.querySelector('.nav-toggle');
    if (menu) menu.setAttribute('aria-label', t('menu'));
  }
  window.translatePage = translateTree;

  function updateLanguageButtons() {
    document.querySelectorAll('[data-set-language]').forEach(function (button) {
      var active = button.getAttribute('data-set-language') === language();
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    var group = document.querySelector('.language-switch');
    if (group) group.setAttribute('aria-label', t('language'));
  }

  function setLanguage(lang, save) {
    root.lang = lang === 'ko' ? 'ko' : 'en';
    if (save) remember(LANG_KEY, root.lang);
    translateTree(document.body);
    updateLanguageButtons();
    updateThemeButton();
    if (save) document.dispatchEvent(new CustomEvent('site:languagechange', { detail: { language: root.lang } }));
  }

  function theme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function updateThemeButton() {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    var dark = theme() === 'dark';
    button.textContent = dark ? '\u2600\ufe0f' : '\ud83c\udf19';
    button.setAttribute('aria-label', dark ? t('theme.light') : t('theme.dark'));
    button.setAttribute('title', dark ? t('theme.light') : t('theme.dark'));
  }
  function setTheme(next, save) {
    root.setAttribute('data-theme', next === 'dark' ? 'dark' : 'light');
    if (save) remember(THEME_KEY, theme());
    updateThemeButton();
  }

  function addControls() {
    var nav = document.querySelector('.nav');
    if (!nav || nav.querySelector('.nav-actions')) return;
    var actions = document.createElement('div');
    actions.className = 'nav-actions';
    actions.innerHTML = '<div class="language-switch" role="group">' +
      '<button type="button" data-set-language="en">EN</button>' +
      '<button type="button" data-set-language="ko">KO</button></div>' +
      '<button class="theme-toggle" type="button"></button>';
    var menu = nav.querySelector('.nav-toggle');
    nav.insertBefore(actions, menu || null);
    actions.addEventListener('click', function (event) {
      var langButton = event.target.closest('[data-set-language]');
      if (langButton) setLanguage(langButton.getAttribute('data-set-language'), true);
      if (event.target.closest('.theme-toggle')) setTheme(theme() === 'dark' ? 'light' : 'dark', true);
    });
  }

  var savedTheme = preference(THEME_KEY);
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (systemDark ? 'dark' : 'light'), false);
  root.lang = preference(LANG_KEY) === 'ko' ? 'ko' : 'en';

  document.addEventListener('DOMContentLoaded', function () {
    addControls();
    setLanguage(root.lang, false);
    updateThemeButton();

    var queued = false;
    new MutationObserver(function (mutations) {
      if (queued || !mutations.some(function (m) { return m.addedNodes.length; })) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; translateTree(document.body); });
    }).observe(document.body, { childList: true, subtree: true });
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
      if (!preference(THEME_KEY)) setTheme(event.matches ? 'dark' : 'light', false);
    });
  }
})();

// ---- Scroll reveal (reusable; also runs on dynamically added .reveal) ----
function observeReveal() {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); });
}
window.observeReveal = observeReveal;

// ---- Pagination helpers (shared by news + publications) ----
function currentPage() {
  var p = parseInt(new URLSearchParams(location.search).get('page'), 10);
  return (p && p > 0) ? p : 1;
}
function renderPager(elId, page, total) {
  var el = document.getElementById(elId);
  if (!el || total <= 1) { return; }
  var base = location.pathname.split('/').pop() || 'index.html';
  function cell(p, label, state) {
    if (state === 'disabled') return '<span class="disabled">' + label + '</span>';
    if (state === 'current') return '<span class="current">' + label + '</span>';
    return '<a href="' + base + '?page=' + p + '">' + label + '</a>';
  }
  var html = cell(page - 1, window.siteT ? window.siteT('pager.prev') : '\u2039 Prev', page <= 1 ? 'disabled' : '');
  for (var i = 1; i <= total; i++) { html += cell(i, i, i === page ? 'current' : ''); }
  html += cell(page + 1, window.siteT ? window.siteT('pager.next') : 'Next \u203a', page >= total ? 'disabled' : '');
  el.innerHTML = html;
}
window.currentPage = currentPage;
window.renderPager = renderPager;

// ---- Mobile nav + year ----
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  observeReveal();
});
