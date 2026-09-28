/* About 페이지 "관련 논문" 목록 — publications-data.js에서 제목 일부로 찾아 표시합니다.
 * about.html 의 data-pubs="제목 일부|제목 일부" 를 바꾸면 목록이 바뀝니다. */
(function () {
  var pubs = window.PUBLICATIONS || [];
  document.querySelectorAll('[data-pubs]').forEach(function (ol) {
    ol.dataset.pubs.split('|').forEach(function (q) {
      q = q.trim().toLowerCase();
      var p = pubs.find(function (x) { return x.title.toLowerCase().indexOf(q) !== -1; });
      if (!p) return;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = p.title;
      var v = document.createElement('span');
      v.className = 'v'; v.textContent = p.venue + ' · ' + p.year;
      li.appendChild(a); li.appendChild(v); ol.appendChild(li);
    });
    if (!ol.children.length) ol.parentElement.hidden = true;
  });
})();
