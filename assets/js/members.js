// Render member content from members-data.js, including language changes.
(function () {
  function render() {
    var ko = document.documentElement.lang === 'ko';
    function value(item, key) { return ko && item[key + 'Ko'] != null ? item[key + 'Ko'] : item[key]; }
    function element(tag, text, className) {
      var el = document.createElement(tag);
      if (text != null) el.textContent = text;
      if (className) el.className = className;
      return el;
    }
    document.querySelectorAll('[data-member]').forEach(function (card) {
      var item = window.MEMBERS.find(function (m) { return m.id === card.dataset.member; });
      if (!item) return;
      var photo = element('div', item.photoText, 'photo');
      if (item.photoStyle) photo.style.cssText = item.photoStyle;
      if (item.image) {
        var img = element('img');
        img.src = item.image;
        img.alt = item.imageAlt || value(item, 'name');
        photo.appendChild(img);
      }
      var body = element('div', null, 'body');
      body.appendChild(element('h4', value(item, 'name')));
      body.appendChild(element('div', value(item, 'role'), 'role'));
      if (item.description) body.appendChild(element('p', value(item, 'description')));
      if (item.education) {
        var list = element('ul');
        value(item, 'education').forEach(function (line) { list.appendChild(element('li', line)); });
        body.appendChild(list);
      }
      if (item.interests) {
        var interests = element('p', value(item, 'interests'));
        interests.style.marginTop = '10px';
        body.appendChild(interests);
      }
      if (item.email) {
        var contact = element('p');
        contact.style.marginTop = '8px';
        var link = element('a', item.email);
        link.href = 'mailto:' + item.email;
        contact.appendChild(link);
        body.appendChild(contact);
      }
      card.replaceChildren(photo, body);
    });
    document.querySelectorAll('[data-member-label]').forEach(function (el) {
      var label = window.MEMBER_LABELS.find(function (l) { return l.id === el.dataset.memberLabel; });
      if (label) el.textContent = ko ? label.ko : label.en;
    });
  }
  render();
  document.addEventListener('site:languagechange', render);
})();
