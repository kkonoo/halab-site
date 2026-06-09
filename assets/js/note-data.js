/* ============================================================
   NOTE 페이지 데이터 — 아이디어 노트(LLM-Wiki)와 수업 자료(Resources).
   카드를 추가하려면 해당 배열에 항목 하나를 추가하면 됩니다.
   각 항목: { tag: "분류", title: "제목", desc: "한 줄 설명", url: "주소" }
   - url 이 http 로 시작하면 새 탭에서 열립니다.
   - 항목 사이는 쉼표(,)로 구분합니다.
   ============================================================ */

/* ── 위쪽 섹션: 아이디어 / LLM-Wiki ── */
window.NOTES = [
  {
    tag: "LLM-Wiki",
    title: "Lab Idea Wiki",
    desc: "연구실의 아이디어와 노트를 LLM-Wiki 형식으로 정리한 공간입니다. (업데이트 예정)",
    url: "#"   /* TODO: 실제 LLM-Wiki 주소로 바꾸세요 (예: https://kkonoo.github.io/...) */
  }
];

/* ── 아래쪽 섹션: 수업 자료 / Resources ── */
window.RESOURCES = [
  {
    tag: "융합형 의사과학자 양성 사업",
    title: "Introduction to Bioinformatics: bulk RNA-seq Analysis",
    desc: "MD-PhD 과정을 위한 bulk RNA-seq 분석 실습 자료",
    url: "https://kkonoo.github.io/BI_for_MD_PhD_KNUmed/"
  },
 {
    tag: "융합형 의사과학자 양성 사업 II",
    title: "Advanced Bioinformatics",
    desc: "MD-PhD 과정을 위한 고급 생물정보학 분석 실습 자료",
    url: "https://kkonoo.github.io/advanced_BI_for_MD_PhD_KNUmed/"
  },
  {
    tag: "의과학과",
    title: "Introduction to Bioinformatics",
    desc: "의과학 연구를 위한 생물정보학",
    url: "https://kkonoo.github.io/BI_for_Biomed_KNUmed/"
  },
  {
    tag: "의학과 4",
    title: "Omics data analysis practice (bulk RNA-seq)",
    desc: "분자의학 선택연구: 오믹스 데이터 분석 실습",
    url: "https://kkonoo.github.io/Omics_for_Molecular_Med_KNUmed/"
  },
  {
    tag: "의예과 2",
    title: "Introduction to Bioinformatics",
    desc: "의학연구를 위한 생물정보학",
    url: "https://kkonoo.github.io/BI_for_MD_KNUmed/"
  },
  {
    tag: "의학연구 OT",
    title: "R script 활용하기",
    desc: "효율적인 연구를 위한 R script 활용하기",
    url: "https://kkonoo.github.io/edu_KNUmed/"
  }
];

/* ── 아래쪽 섹션: 공부 자료 / Study ── */
window.STUDIES = [
  {
    tag: "pre-HaLab",
    title: "Linux / R / Python",
    desc: "연구 환경 익히기",
    url: "https://kkonoo.github.io/edu_KNUmed/"
  },
  {
    tag: "HaLab 1",
    title: "Human Genetics (from KASRA)",
    desc: "유전학",
    url: "https://chaek.org/books/human-genetics"
  },
  {
    tag: "HaLab 1",
    title: "Basic statistics (from KASRA)",
    desc: "기초통계",
    url: "https://chaek.org/books/basic-stats-omics-labs/README"
  },
  {
    tag: "HaLab 1",
    title: "Basic machine learning",
    desc: "머신러닝",
    url: "https://kkonoo.github.io/1_Basic_Machine_Learning/"
  },
  {
    tag: "HaLab 2",
    title: "Writing My First Paper (from KASRA)",
    desc: "첫 논문 쓰기",
    url: "https://chaek.org/books/how-to-write-paper/README"
  },
  {
    tag: "HaLab 2",
    title: "Linear algebra",
    desc: "선형대수",
    url: "https://kkonoo.github.io/2_linear_algebra/"
  },
  {
    tag: "HaLab 2",
    title: "Immunology",
    desc: "면역학",
    url: "https://kkonoo.github.io/1_Immunology/"
  },
  {
    tag: "HaLab 3",
    title: "Linear regression",
    desc: "선형회귀",
    url: "https://kkonoo.github.io/3_linear_regression/"
  },
  {
    tag: "HaLab 3",
    title: "Neural network",
    desc: "신경망",
    url: "https://kkonoo.github.io/3_neural_network/"
  },
  {
    tag: "HaLab 4",
    title: "Bayesian statistics",
    desc: "베이지안 통계",
    url: "https://kkonoo.github.io/4_Bayes/"
  },
  {
    tag: "HaLab 4",
    title: "Graph theory",
    desc: "그래프 이론",
    url: "https://kkonoo.github.io/4_graphs/"
  }
];
