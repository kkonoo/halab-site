(function () {
  function cards(arr) {
    return (arr || []).map(function (it) {
      var external = it.url && it.url.indexOf('http') === 0;
      var attr = external ? ' target="_blank" rel="noopener"' : '';
      return '<a class="link-card reveal" href="' + it.url + '"' + attr + '>' +
        (it.tag ? '<span class="tag">' + it.tag + '</span>' : '') +
        '<h3>' + it.title + '</h3>' +
        (it.desc ? '<p>' + it.desc + '</p>' : '') +
        '<span class="go">Open \u2192</span>' +
      '</a>';
    }).join('');
  }

  var noteGrid = document.getElementById('note-grid');
  if (noteGrid) noteGrid.innerHTML = cards(window.NOTES);

  var resGrid = document.getElementById('resource-grid');
  if (resGrid) resGrid.innerHTML = cards(window.RESOURCES);

  var studyGrid = document.getElementById('study-grid');
  if (studyGrid) studyGrid.innerHTML = cards(window.STUDIES);

  if (window.observeReveal) window.observeReveal();
})();
