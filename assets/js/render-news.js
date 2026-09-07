(function () {
  var DATA = window.NEWS || [];
  function ko() { return document.documentElement.lang === 'ko'; }
  function title(n) { return ko() && n.titleKo ? n.titleKo : n.title; }
  function paragraphs(n) { return ko() && n.bodyKo ? n.bodyKo : (n.body || []); }
  document.addEventListener('site:languagechange', function () { location.reload(); });

  // --- Home: latest 4 as a simple list ---
  var home = document.getElementById('home-news');
  if (home) {
    home.innerHTML = DATA.slice(0, 4).map(function (n) {
      return '<li><span class="date">' + n.date + '</span><span class="txt">' + title(n) + '</span></li>';
    }).join('');
    return;
  }

  // --- News page: paginated card grid (10 per page) ---
  var grid = document.getElementById('news-grid');
  if (!grid) return;

  var perPage = 10;
  var total = Math.max(1, Math.ceil(DATA.length / perPage));
  var page = Math.min(window.currentPage(), total);
  var start = (page - 1) * perPage;
  var items = DATA.slice(start, start + perPage);

  grid.innerHTML = items.map(function (n) {
    // accept either images:[...] (multiple) or image:"..." (single, old format)
    var imgs = n.images || (n.image ? [n.image] : []);

    var bg = imgs.length ? ' style="background-image:url(\'' + imgs[0] + '\')"' : '';
    var thumbCls = imgs.length ? 'thumb' : (n.logo ? 'thumb logo-thumb' : 'thumb no-img');
    if (!imgs.length && n.logo) { bg = ' style="background-image:url(\'' + n.logo + '\')"'; }
    var logo = '';
    var body = paragraphs(n).map(function (p) { return '<p>' + p + '</p>'; }).join('');

    // extra images (everything after the cover) shown as a small gallery
    var gallery = '';
    if (imgs.length > 1) {
      gallery = '<div class="post-gallery">' + imgs.slice(1).map(function (src) {
        return '<a href="' + src + '" target="_blank" rel="noopener">' +
               '<img src="' + src + '" alt="" loading="lazy" ' +
               'onerror="this.closest(\'a\').style.display=\'none\'"></a>';
      }).join('') + '</div>';
    }

    return '<article class="news-card reveal">' +
      '<div class="' + thumbCls + '"' + bg + '>' + logo + '<div class="ov">' +
      '<div class="d">' + n.date + '</div><h2>' + title(n) + '</h2></div></div>' +
      '<div class="body">' + body + gallery + '</div></article>';
  }).join('');

  window.renderPager('news-pager', page, total);
  if (window.observeReveal) window.observeReveal();

})();
