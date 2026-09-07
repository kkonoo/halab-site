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
    ['Home', 'Home', '홈'], ['About', 'About', '연구실'], ['Members', 'Members', '구성원'],
    ['Publications', 'Publications', '논문'], ['News', 'News', '소식'], ['Note', 'Note', '자료'],
    ['Contact', 'Contact', '연락처'], ['Explore', 'Explore', '둘러보기'], ['Connect', 'Connect', '연결'],
    ['Kyungpook National University', 'Kyungpook National University', '경북대학교'],
    ['Department of Molecular Medicine', 'Department of Molecular Medicine', '분자의학교실'],
    ['School of Medicine', 'School of Medicine', '의과대학'],
    ['Multi-omics & Systems Biology', 'Multi-omics & Systems Biology', '멀티오믹스 & 시스템생물학'],
    ['Exploring the genetic architecture of', 'Exploring the genetic architecture of', '우리는'],
    ['human diseases', 'human diseases', '인간 질환의 유전적 구조를 탐구합니다'],
    ['We decode the genetic and epigenetic mechanisms underlying complex diseases — with a special focus on immune-related or chronic conditions — by integrating large-scale multi-omics data with advanced computational methods.', 'We decode the genetic and epigenetic mechanisms underlying complex diseases — with a special focus on immune-related or chronic conditions — by integrating large-scale multi-omics data with advanced computational methods.', '대규모 멀티오믹스 데이터와 첨단 계산 방법을 통합하여, 면역 관련 질환과 만성 질환을 중심으로 복합 질환의 유전적·후성유전적 기전을 밝힙니다.'],
    ['About the lab', 'About the lab', '연구실 소개'], ['View publications', 'View publications', '논문 보기'],
    ['What we do', 'What we do', '주요 연구'], ['From genetic variants', 'From genetic variants', '유전 변이에서'],
    ['to disease mechanisms', 'to disease mechanisms', '질병 기전까지'],
    ['The Genomic Medicine Lab integrates genomics and other multiomics (epigenomics, transcriptomics, proteomics, and metagenomics) to discover novel regulatory elements and therapeutic targets for complex human diseases.', 'The Genomic Medicine Lab integrates genomics and other multiomics (epigenomics, transcriptomics, proteomics, and metagenomics) to discover novel regulatory elements and therapeutic targets for complex human diseases.', '유전체의학 연구실은 유전체학과 후성유전체학, 전사체학, 단백체학, 메타유전체학 등 멀티오믹스를 통합해 복합 질환의 새로운 조절 요소와 치료 표적을 발굴합니다.'],
    ['Multi-omics Integration', 'Multi-omics Integration', '멀티오믹스 통합'],
    ['Integrating data across the genome, epigenome, transcriptome, proteome, and microbiome — spanning bulk, single-cell, and spatial resolution — to map how regulation drives disease.', 'Integrating data across the genome, epigenome, transcriptome, proteome, and microbiome — spanning bulk, single-cell, and spatial resolution — to map how regulation drives disease.', '벌크·단일세포·공간 해상도에서 유전체, 후성유전체, 전사체, 단백체, 마이크로바이옴 데이터를 통합해 조절 기전이 질환으로 이어지는 과정을 규명합니다.'],
    ['GWAS Integration', 'GWAS Integration', 'GWAS 통합'],
    ['Linking complex-trait variants to regulatory elements and their target genes to reveal the biology behind disease risk.', 'Linking complex-trait variants to regulatory elements and their target genes to reveal the biology behind disease risk.', '복합 형질 관련 변이를 조절 요소 및 표적 유전자와 연결해 질병 위험의 생물학적 기반을 밝힙니다.'],
    ['Disease Mechanisms', 'Disease Mechanisms', '질병 기전'],
    ['Studying how genetic regulation drives disease across a broad range of conditions — from cancer and autoimmune disease to neurodevelopmental, neuropsychiatric, and infectious disorders.', 'Studying how genetic regulation drives disease across a broad range of conditions — from cancer and autoimmune disease to neurodevelopmental, neuropsychiatric, and infectious disorders.', '암과 자가면역질환부터 신경발달·신경정신·감염 질환까지, 다양한 질환에서 유전 조절이 질병을 유발하는 방식을 연구합니다.'],
    ['Latest News', 'Latest News', '최근 소식'], ["What's happening in the lab", "What's happening in the lab", '연구실의 새로운 소식'],
    ['All news', 'All news', '소식 전체 보기'],

    ['About us', 'About us', '연구실 소개'], ['Bridging', 'Bridging', '유전체학과'], ['genomics', 'genomics', '의학을'],
    ['and medicine', 'and medicine', '연결합니다'],
    ['We aim to uncover the genetic and epigenetic mechanisms underlying complex human diseases, and to translate those discoveries toward precision healthcare.', 'We aim to uncover the genetic and epigenetic mechanisms underlying complex human diseases, and to translate those discoveries toward precision healthcare.', '복합 인간 질환의 유전적·후성유전적 기전을 밝히고, 그 발견을 정밀 의료로 이어가는 것을 목표로 합니다.'],
    ['Our Mission', 'Our Mission', '연구 목표'],
    ['We aim to uncover the genetic and epigenetic mechanisms underlying complex human diseases. By integrating large-scale multi-omics datasets with advanced computational and systems-biology approaches, we seek to understand how genetic variants shape molecular regulation and contribute to disease risk.', 'We aim to uncover the genetic and epigenetic mechanisms underlying complex human diseases. By integrating large-scale multi-omics datasets with advanced computational and systems-biology approaches, we seek to understand how genetic variants shape molecular regulation and contribute to disease risk.', '대규모 멀티오믹스 데이터와 첨단 계산·시스템생물학 방법을 통합해, 유전 변이가 분자 조절에 미치는 영향과 질병 위험에 기여하는 방식을 밝히고자 합니다.'],
    ['Our Vision', 'Our Vision', '연구 비전'],
    ['Our research is grounded in basic medical science, but we aim to extend our findings toward medical applications and precision healthcare. By bridging genomics and medicine, we hope to identify novel biomarkers and therapeutic targets for human diseases.', 'Our research is grounded in basic medical science, but we aim to extend our findings toward medical applications and precision healthcare. By bridging genomics and medicine, we hope to identify novel biomarkers and therapeutic targets for human diseases.', '기초 의과학을 바탕으로 연구 성과를 의료 응용과 정밀 의료로 확장하고자 합니다. 유전체학과 의학을 연결해 새로운 바이오마커와 치료 표적을 발굴합니다.'],
    ['Research Focus', 'Research Focus', '연구 분야'], ['Where we concentrate our efforts', 'Where we concentrate our efforts', '우리가 집중하는 연구'],
    ['Multi-omics integration', 'Multi-omics integration', '멀티오믹스 통합'],
    ['— genomics, epigenomics, transcriptomics, proteomics, and metagenomics, spanning bulk, single-cell, and spatial resolution.', '— genomics, epigenomics, transcriptomics, proteomics, and metagenomics, spanning bulk, single-cell, and spatial resolution.', '— 벌크·단일세포·공간 해상도의 유전체학, 후성유전체학, 전사체학, 단백체학, 메타유전체학.'],
    ['GWAS integration', 'GWAS integration', 'GWAS 통합'], ['— linking complex-trait variants to regulatory elements and their target genes.', '— linking complex-trait variants to regulatory elements and their target genes.', '— 복합 형질 관련 변이를 조절 요소와 표적 유전자에 연결.'],
    ['Disease Mechanism', 'Disease Mechanism', '질병 기전'], ['— studying genetic regulation across cancer, neurodevelopmental and neuropsychiatric disorders, viral infection, and autoimmune disease.', '— studying genetic regulation across cancer, neurodevelopmental and neuropsychiatric disorders, viral infection, and autoimmune disease.', '— 암, 신경발달·신경정신 질환, 바이러스 감염, 자가면역질환의 유전 조절 연구.'],
    ['Our Values', 'Our Values', '연구실의 가치'],
    ['We value an open and collaborative environment where curiosity, creativity, and persistence drive discovery. We welcome students and researchers who are eager to learn, explore, and contribute to a vibrant academic community.', 'We value an open and collaborative environment where curiosity, creativity, and persistence drive discovery. We welcome students and researchers who are eager to learn, explore, and contribute to a vibrant academic community.', '호기심과 창의성, 끈기가 발견을 이끄는 개방적이고 협력적인 환경을 소중히 합니다. 배우고 탐구하며 활기찬 학문 공동체에 기여하고 싶은 학생과 연구자를 환영합니다.'],
    ['Join us / Get in touch', 'Join us / Get in touch', '함께하기 / 문의하기'],

    ['Our People', 'Our People', '연구실 구성원'], ['The team', 'The team', '과학을 함께 만드는'], ['behind the science', 'behind the science', '우리 연구팀'],
    ['Principal Investigator', 'Principal Investigator', '책임연구자'], ['Current Members', 'Current Members', '현재 구성원'], ['Lab Alumni', 'Lab Alumni', '연구실 동문'],
    ['Assistant Professor', 'Assistant Professor', '조교수'], ['Graduate student', 'Graduate student', '대학원생'], ['Graduate Student', 'Graduate Student', '대학원생'],
    ['Graduate Students & Researchers', 'Graduate Students & Researchers', '대학원생 & 연구원'], ['Undergraduate Interns', 'Undergraduate Interns', '학부 인턴'],
    ['We are hiring!', 'We are hiring!', '새 구성원을 모집합니다!'], ['Always welcome', 'Always welcome', '언제나 환영합니다'],
    ['Motivated students interested in disease genomics are welcome to join the lab.', 'Motivated students interested in disease genomics are welcome to join the lab.', '질병 유전체학에 관심 있는 열정적인 학생의 지원을 환영합니다.'],
    ['Curious about research? Undergraduate interns are always welcome to explore hands-on experience in disease genomics.', 'Curious about research? Undergraduate interns are always welcome to explore hands-on experience in disease genomics.', '연구가 궁금한 학부생이라면 누구나 환영합니다. 질병 유전체학 연구를 직접 경험해 보세요.'],
    ['Research interests: Genomics, gene regulation, multi-omics, complex diseases, immunology', 'Research interests: Genomics, gene regulation, multi-omics, complex diseases, immunology', '연구 관심 분야: 유전체학, 유전자 조절, 멀티오믹스, 복합 질환, 면역학'],
    ['Research interests: cancer genomics', 'Research interests: cancer genomics', '연구 관심 분야: 암 유전체학'], ['Research interests: neuroscience', 'Research interests: neuroscience', '연구 관심 분야: 신경과학'],
    ['Department of Molecular Medicine, School of Medicine, Kyungpook National University', 'Department of Molecular Medicine, School of Medicine, Kyungpook National University', '경북대학교 의과대학 분자의학교실'],
    ['2023–2025 | Postdoctoral Researcher, University of Pennsylvania', '2023–2025 | Postdoctoral Researcher, University of Pennsylvania', '2023–2025 | 펜실베이니아대학교 박사후연구원'],
    ['2018–2023 | Ph.D. in Biomedical Science, Kyung Hee University', '2018–2023 | Ph.D. in Biomedical Science, Kyung Hee University', '2018–2023 | 경희대학교 의생명과학 박사'],
    ['2014–2018 | B.S. in Biology, Kyung Hee University', '2014–2018 | B.S. in Biology, Kyung Hee University', '2014–2018 | 경희대학교 생물학 학사'],
    ['2026- | Department of Biomedical Science, KNU', '2026- | Department of Biomedical Science, KNU', '2026– | 경북대학교 의과학과'],
    ['2024–2025 | Research Intern, KRIBB', '2024–2025 | Research Intern, KRIBB', '2024–2025 | 한국생명공학연구원 연구 인턴'],
    ['2019–2024 | B.S. in Molecular Genetics & Computer Engineering (double major), Dong-A University', '2019–2024 | B.S. in Molecular Genetics & Computer Engineering (double major), Dong-A University', '2019–2024 | 동아대학교 분자유전공학·컴퓨터공학 학사(복수전공)'],
    ['2020– | Department of Biomedical Covergence Science & Technology, KNU', '2020– | Department of Biomedical Covergence Science & Technology, KNU', '2020– | 경북대학교 의생명융합공학과'],

    ['Research Output', 'Research Output', '연구 성과'], ['Selected', 'Selected', '주요'], ['publications', 'publications', '연구 논문'],
    ['first authors', 'first authors', '공동 제1저자'], ['corresponding authors', 'corresponding authors', '교신저자'], ['For the full list, see', 'For the full list, see', '전체 목록은'],
    ['Lab Updates', 'Lab Updates', '연구실 소식'], ['News &', 'News &', '연구실 소식 &'], ['milestones', 'milestones', '주요 성과'],

    ['Notes & Resources', 'Notes & Resources', '노트 & 자료'], ['Weekly · 카드뉴스', 'Weekly · Research cards', 'Weekly · 카드뉴스'], ['주차', 'Week', '주차'],
    ['Field updates, ideas, &', 'Field updates, ideas, &', '분야 동향, 아이디어 &'], ['teaching', 'teaching', '교육'],
    ['Latest research updates, teaching and course resources, plus study materials.', 'Latest research updates, teaching and course resources, plus study materials.', '최신 연구 동향과 강의·수업 자료, 학습 자료를 공유합니다.'],
    ['Field updates', 'Field updates', '분야별 최신 동향'],
    ['관련 분야 최신 논문을 정리한 위클리 카드뉴스입니다.', 'Weekly research cards summarizing the latest papers in our fields.', '관련 분야 최신 논문을 정리한 위클리 카드뉴스입니다.'],
    ['분야로 거르거나 키워드로 찾고, 카드를 누르면 자세히 펼쳐집니다.', 'Filter by field or search by keyword, then select a card to see details.', '분야로 거르거나 키워드로 찾고, 카드를 누르면 자세히 펼쳐집니다.'],
    ['Teaching & course materials', 'Teaching & course materials', '강의 & 수업 자료'], ['수업 자료와 실습 자료입니다.', 'Lecture notes and hands-on course materials.', '수업 자료와 실습 자료입니다.'],
    ['Study materials  (will be updated)', 'Study materials (more coming soon)', '학습 자료 (계속 업데이트됩니다)'], ['질병 유전체 연구를 위한 기반 공부 자료입니다.', 'Foundational study materials for disease genomics research.', '질병 유전체 연구를 위한 기반 공부 자료입니다.'],
    ['Resources', 'Resources', '자료'], ['Open \u2192', 'Open \u2192', '열기 \u2192'],

    ['Get in Touch', 'Get in Touch', '연락하기'], ['Come', 'Come', '우리와'], ['join us', 'join us', '함께해요'],
    ['We are always looking for motivated people to join our team. If you are interested in undergraduate internships or graduate research, feel free to reach out. \u2728', 'We are always looking for motivated people to join our team. If you are interested in undergraduate internships or graduate research, feel free to reach out. \u2728', '우리 팀과 함께할 열정적인 분을 언제나 찾고 있습니다. 학부 인턴십이나 대학원 연구에 관심이 있다면 편하게 연락해 주세요. \u2728'],
    ['Email', 'Email', '이메일'], ['Address', 'Address', '주소'], ['Telephone', 'Telephone', '전화'], ['Affiliation', 'Affiliation', '소속'],
    ['680 Gukchaebosang-ro, N121, Jung-gu,', '680 Gukchaebosang-ro, N121, Jung-gu,', '대구광역시 중구 국채보상로 680, N121'], ['Daegu, 41944, South Korea', 'Daegu, 41944, South Korea', '대한민국 41944'],
    ['Drop by our lab meeting', 'Drop by our lab meeting', '연구실 미팅에 들러보세요'],
    ['We hold a lab meeting every Friday at 10 AM, where we discuss recent papers and ongoing projects. Anyone curious about genomics research is welcome to sit in. If you would like to join, just email', 'We hold a lab meeting every Friday at 10 AM, where we discuss recent papers and ongoing projects. Anyone curious about genomics research is welcome to sit in. If you would like to join, just email', '매주 금요일 오전 10시에 최근 논문과 진행 중인 프로젝트를 논의하는 연구실 미팅을 엽니다. 유전체 연구가 궁금한 분은 누구나 참관할 수 있습니다. 참여하려면'],
    ['and come along any week.', 'and come along any week.', '에게 이메일을 보내고 편한 주에 방문해 주세요.']
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
