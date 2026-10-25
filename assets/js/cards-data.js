/* ============================================================
   CARD NEWS 데이터 — 자동 생성 파일. 직접 수정하지 마세요.
   생성: lab-monitor/publish_to_site.py  (소스: wiki/cards/*.json|*.md)
   ============================================================ */
window.CARDNEWS = [
  {
    "date": "2026-10-25",
    "count": 28,
    "papers": [
      {
        "title": "High false sign rates in transcriptome-wide association studies.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42918898/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42918898/",
        "doi": "https://doi.org/10.1038/s41588-026-02796-4",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Gerlach PA",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "혈장 단백질을 대상으로, 유전자 발현 증가 → 단백질 증가라는 기대 방향을 기준으로 TWAS false sign rate를 추정",
          "복잡 형질에 대해서는 기능 손실(LoF) burden test의 효과 방향을 정답 레이블로 삼아 TWAS 부호 일치 여부를 검증",
          "부호 불일치의 메커니즘으로 '비-형질 관련 조직에서 eQTL이 GWAS 연관 변이와 연결된 다른 조절 변이를 태그할 때 발생하는 가성 연관'을 제안"
        ],
        "concepts": [
          "colocalization",
          "cis-regulatory-element-mapping",
          "allele-specific-expression"
        ],
        "tldr": "TWAS는 형질에 영향을 주는 유전자를 올바르게 찾더라도 효과 방향(부호)을 약 23~33% 확률로 반대로 예측하며, 이는 QTL 조직 불일치에서 비롯된 구조적 문제임을 보임.",
        "question": "TWAS가 유전자-형질 연관의 효과 방향을 얼마나 정확하게 추정하는가, 그리고 오류의 원인은 무엇인가?",
        "key_result": "혈장 단백질 대상 TWAS의 false sign rate 23%, 복잡 형질 대상 33%. 유전자를 올바르게 찾더라도 효과 방향은 신뢰하기 어려움.",
        "why_for_us": "우리 랩은 TWAS·eQTL·colocalization을 핵심 도구로 사용하므로, TWAS 효과 방향 추정의 구조적 한계를 인식하는 것은 분석 해석 및 MR/colocalization 후속 작업에 필수적.",
        "limitations": "혈장 단백질과 LoF burden이라는 두 가지 간접 검증 지표만 사용. 형질별·조직별 false sign rate의 변동성은 충분히 특성화되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multiancestry conditional and joint analysis applied to GWAS summary statistics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42901984/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42901984/",
        "doi": "https://doi.org/10.1038/s41588-026-02799-1",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Wang X",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "다조상 조건부-결합(COJO) 분석 방법론인 Manc-COJO 개발",
          "시뮬레이션 및 실제 데이터에서 기존 GCTA-COJO 및 임시방편 다조상 적응 방법들과 성능 비교",
          "조상별 독립 연관 신호를 식별하는 후속 알고리즘 Manc-COJO:FIX 개발",
          "개인 수준 유전자형 데이터 또는 사전 계산 LD 행렬 모두 지원하는 C++ 구현"
        ],
        "concepts": [
          "colocalization",
          "credible-set",
          "cross-ancestry-transferability"
        ],
        "tldr": "다조상 GWAS 메타분석에서 독립 연관 신호를 정확히 식별하는 Manc-COJO 방법 개발. 기존 GCTA-COJO 대비 위양성 감소, 검출력 향상, 120배 이상 속도 향상",
        "question": "다조상 GWAS 요약 통계에서 독립적 연관 신호를 올바르게 식별하는 최적 COJO 전략은 무엇인가?",
        "key_result": "Manc-COJO는 단일조상 COJO 및 임시방편 다조상 적응 대비 독립 신호 검출 향상 및 위양성 감소; GCTA-COJO 대비 120배 이상 빠른 속도",
        "why_for_us": "랩의 핵심 분석인 다조상 GWAS 메타분석 및 fine-mapping의 선행 단계인 독립 신호 식별에 직접 적용 가능. cross-ancestry QTL/colocalization 연구에 필수 도구",
        "limitations": "시뮬레이션 조건의 현실 반영 수준 불명확; 특정 형질에만 실제 데이터 검증",
        "reuse": "C++ 구현체 공개 (초록 기반); LD 참조 행렬 또는 개인 수준 데이터 입력 지원",
        "next_step": ""
      },
      {
        "title": "Genome-wide detection of genotype-environment interactions at biobank scale with fastGxE.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42907526/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42907526/",
        "doi": "https://doi.org/10.1038/s41588-026-02809-2",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Ning C",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "다유전자 효과·다유전자 상호작용·노이즈 이질성을 통제하고 다중 환경 인자에 견고한 GxE 통계 방법 fastGxE 개발",
          "시뮬레이션 및 UK Biobank 실데이터(신체형질 32개, 혈액 바이오마커 67개)에 적용",
          "기존 방법 대비 속도 32.98~126.49배 향상 확인"
        ],
        "concepts": [
          "epistasis",
          "cross-ancestry-transferability"
        ],
        "tldr": "바이오뱅크 규모에서 유전자-환경 상호작용(GxE)을 효율적으로 탐지하는 fastGxE를 개발; UK Biobank 32개 신체형질 및 67개 혈액 바이오마커에 적용해 12개를 포함한 18개 신규 유전체 위치를 발굴.",
        "question": "다유전자적 효과·이질적 분산을 보정하면서 바이오뱅크 규모 GxE 분석을 현실적인 시간 내에 수행할 수 있는가?",
        "key_result": "신체 형질 관련 7개 유전체 위치(4개 신규), 혈액 바이오마커 관련 18개 위치(12개 신규) 발굴; 유전자-환경 동적 상호작용 경로 규명.",
        "why_for_us": "GWAS 방법론(비표준 GxE 분석) 확장; 대규모 QTL/GWAS 연구에서 환경 상호작용 고려 시 직접 활용 가능한 도구.",
        "limitations": "연속형 환경 변수 위주; 희귀 변이 GxE는 다루지 않음; 인과성 해석에는 별도 MR 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Leveraging genomic deep learning models for the prediction of noncoding variant effects.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42907525/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42907525/",
        "doi": "https://doi.org/10.1038/s41588-026-02769-7",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Kathail P",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "sequence-to-activity 지도 학습 모델(크로마틴 상태·유전자 발현 예측) 및 자기지도 genomic language 모델의 비코딩 변이 효과 예측 활용 사례 체계적 리뷰",
          "예측 평가에 사용되는 ground-truth 데이터 유형 분류 및 실무 적용 시 고려사항 정리"
        ],
        "concepts": [
          "cis-regulatory-element-mapping",
          "chromatin-accessibility",
          "caqtl",
          "atac-seq",
          "credible-set",
          "colocalization"
        ],
        "tldr": "비코딩 변이 효과 예측을 위한 게놈 딥러닝 모델(sequence-to-activity 지도 학습 + 자기지도 genomic language model)의 현황과 실용적 고려사항을 체계적으로 리뷰.",
        "question": "게놈 딥러닝 모델이 비코딩 변이의 기능적 효과를 얼마나 잘 예측하며, 어떤 조건에서 가장 유용한가?",
        "key_result": "현재 모델이 가장 유용한 상황(크로마틴 접근성·발현 변화 예측)과 한계(복잡한 조절 문맥, 희귀 변이) 규명; 모델 개발·평가 개선 기회 제시.",
        "why_for_us": "비코딩 변이 기능 해석은 fine-mapping·QTL·cis-regulatory element 연구의 핵심; 딥러닝 기반 in silico 변이 효과 예측이 caQTL·eQTL 우선순위화에 활용 가능.",
        "limitations": "리뷰 논문으로 독자적 실험 데이터 없음; 모델 성능 비교 기준의 이질성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The landscape of gene loss and missense variation across the mammalian tree informs on gene essentiality.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42901987/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42901987/",
        "doi": "https://doi.org/10.1038/s41588-026-02783-9",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Liao C",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "462개 포유류 종 게놈에서 유전자 소실 빈도를 인간까지의 진화 거리로 가중한 GISMO 지표 개발",
          "포유류 전체에서 미스센스 대 동의 변이 비율로 미스센스 제약을 측정하는 GISMO-mis 개발",
          "두 지표를 인간 대규모 시퀀싱 기반 LoF·미스센스·용량 제약 지표와 비교 검증",
          "조현병·자폐·신경발달장애 희귀변이 연관 및 공통변이 유전율 분석에 활용"
        ],
        "concepts": [
          "de-novo-variants",
          "epistasis",
          "cross-ancestry-transferability"
        ],
        "tldr": "462종 포유류 계통에서 유전자 소실·미스센스 변이 패턴을 정량화한 두 진화적 제약 지표(GISMO, GISMO-mis)를 개발하여, 인간 필수 유전자 식별 및 질환 유전자 우선순위화 성능을 향상",
        "question": "포유류 진화 계통에서 유전자 보전 패턴을 활용해 인간 필수 유전자 및 질환 유전자를 더 잘 식별할 수 있는가?",
        "key_result": "GISMO/GISMO-mis는 코딩서열 길이에 독립적이며, 가장 제약된 상위 10분위 유전자는 희귀변이 질환 연관 및 공통변이 유전율에서 강한 농축을 보임; 열성 질환 유전자 우선순위화와 동형접합 선택 신호 포착에서도 기존 지표 대비 향상",
        "why_for_us": "GWAS 유전율 분석, 희귀변이 우선순위화, ASD·SCZ 등 신경 질환 유전자 발굴에 직접 활용 가능한 진화적 제약 지표. 랩의 de novo variant 및 heritability 분석과 연계 가능",
        "limitations": "포유류 계통 데이터 품질 및 어노테이션 완성도에 의존; 비코딩 변이는 다루지 않음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genome-wide analyses identify 60 loci associated with liver triglyceride content.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42907524/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42907524/",
        "doi": "https://doi.org/10.1038/s41588-026-02794-6",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Jamialahmadi O",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "UK Biobank 유럽계 71,488명을 대상으로 MRI 기반 간 중성지방 함량에 대한 GWAS 메타분석 수행",
          "기존 GWAS 대비 약 2배 표본 규모로 분석"
        ],
        "concepts": [
          "cross-ancestry-transferability",
          "colocalization"
        ],
        "tldr": "MRI 기반 간 중성지방 함량에 대한 대규모 GWAS 메타분석으로 60개 유전좌위를 새로 규명한 연구.",
        "question": "간 중성지방 함량(MRI 유래)과 연관된 유전변이를 대규모 GWAS로 얼마나 더 발굴할 수 있는가?",
        "key_result": "간 중성지방 함량과 연관된 60개 유전좌위를 새롭게 동정하였으며, 이전 GWAS 대비 발굴 좌위 수 크게 증가.",
        "why_for_us": "GWAS/QTL 방법론 및 metabolomics·복합형질 유전체학 맥락에서 참고 가능. 간 지질 대사 관련 유전변이 발굴 전략이 랩의 GWAS 방법론 확장에 활용될 수 있음.",
        "limitations": "초록에 명시 없음(유럽계 단일 ancestry 편향 가능성 존재).",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Small variant calling in the era of long-read sequencing.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42902030/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42902030/",
        "doi": "https://doi.org/10.1038/s41576-026-01020-7",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Zheng Z",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "장독형 시퀀싱의 오류 프로파일과 단독형 시퀀싱의 차이를 분석",
          "딥러닝 기반 변이 호출 도구들의 발전 과정 및 현황 리뷰",
          "정렬 기반, 어셈블리 기반, 판게놈 기반 소변이 탐지 전략 비교",
          "T2T 수준 프로파일링을 위한 계산 혁신 과제 제시"
        ],
        "concepts": [
          "ancestral-recombination-graph",
          "allele-specific-expression"
        ],
        "tldr": "장독형(long-read) 시퀀싱 시대의 소변이(small variant) 호출 방법론을 종합 리뷰. 딥러닝 기반 파이프라인, 정렬·어셈블리·판게놈 전략, T2T 프로파일링 방향을 체계적으로 정리",
        "question": "장독형 시퀀싱에서 생식계열·체세포·모자이크 소변이를 정확히 호출하기 위해 어떤 계산 전략이 필요한가?",
        "key_result": "딥러닝 프레임워크가 반복서열·복잡 영역에서의 변이 호출 정확도를 크게 향상시켰으며, 새롭게 접근 가능해진 반복 영역의 벤치마킹 필요성이 강조됨",
        "why_for_us": "WGS 기반 GWAS/QTL 분석의 기초인 변이 호출 파이프라인 업데이트에 참고 가능. 특히 T2T 참조패널 및 pangenome 기반 변이 호출 전략은 랩의 ref_panels_using_T2T 아이디어와 직결됨",
        "limitations": "특정 도구에 대한 벤치마크 수치 없이 리뷰 위주로 서술; 실험적 검증 부재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Deep dynamical models of single-cell multiomic velocities predict loss-of-function and rescue perturbations in B cells.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42907533/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42907533/",
        "doi": "https://doi.org/10.1038/s41587-026-03348-1",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Karbalayghareh A",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "신경 상미분방정식(neural ODE) 기반 생성 모델 DynaVelo 개발: 단세포 멀티오믹 데이터에서 RNA 발현과 TF 모티프 활성의 벡터장 학습",
          "야생형 생쥐 배아중심(GC) B세포 및 Arid1a·Ctcf 이형접합 손실 모델에 적용",
          "In silico 교란으로 예측된 구제 타깃(Ctcf, Stat3, Bcl6)을 이중 이형접합 마우스 in vivo 실험으로 검증"
        ],
        "concepts": [
          "atac-seq",
          "chromatin-accessibility",
          "co-expression-network-analysis",
          "b-cell-development-genetics",
          "caqtl"
        ],
        "tldr": "단세포 멀티오믹(RNA+ATAC) 데이터에서 유전자 발현과 TF 모티프 활성의 공동 역학을 학습하는 신경 ODE 모델 DynaVelo를 개발, B세포 분화 역학과 유전자 조절 네트워크를 in silico 교란으로 예측·검증.",
        "question": "단세포 멀티오믹 속도(velocity) 모델로 세포 상태별 GRN을 추론하고, 후성유전 조절인자 손실의 구제 타깃을 in silico에서 예측할 수 있는가?",
        "key_result": "야생형 GC B세포의 이분화 역학 복원; Arid1aHet 모델에서 GRN 교란 예측; Ctcf·Stat3·Bcl6 구제 시 Arid1aHet dark-zone 표현형이 실제로 회복됨 확인.",
        "why_for_us": "단세포 멀티오믹(RNA+ATAC) 통합 + 궤적/역학 모델링 + GRN 추론 방법론 레퍼런스; B세포 분화·후성유전 조절 연구에 직접 연관.",
        "limitations": "생쥐 GC B세포 모델에 한정; 인간 데이터 적용 검증 미흡; 계산 비용 및 하이퍼파라미터 민감도 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Ravulizumab in IgA Nephropathy - Interim Analysis of a Phase 3 Trial.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42912700/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42912700/",
        "doi": "https://doi.org/10.1056/NEJMoa2607544",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Barratt J",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "eGFR ≥30 ml/min/1.73m² 성인 IgA 신증 환자 485명을 ravulizumab(n=240) 또는 위약(n=245)으로 무작위 배정한 3상 이중맹검 RCT 수행",
          "34주 시점 24시간 소변 단백/크레아티닌 비(uPCR) 변화를 1차 평가지표로 분석(중간분석: 352명)"
        ],
        "concepts": [
          "complement-system",
          "complement-c4",
          "egfr-and-albuminuria"
        ],
        "tldr": "IgA 신증 환자에서 말단 보체 억제제 ravulizumab이 위약 대비 34주 시점 단백뇨를 43.4% 유의하게 추가 감소시킴을 3상 임상 중간분석에서 확인.",
        "question": "말단 보체 경로(C5) 억제가 IgA 신증에서 단백뇨 및 신기능 저하를 유의미하게 개선할 수 있는가?",
        "key_result": "Ravulizumab군 uPCR -46.6% vs 위약군 -5.6%; 조정된 군간 차이 -43.4%(99% CI 30.1–54.2, P<0.001). 중증 이상반응 ravulizumab 4.6% vs 위약 9.0%; 수막구균 감염·사망 없음.",
        "why_for_us": "IgA 신증에서 보체 경로(특히 C5/C5b-9) 억제 임상 근거; 랩의 complement·nephro 관심과 직결. complement-system 및 CKD 관련 연구에 핵심 참고문헌.",
        "limitations": "중간분석이므로 장기 신기능 보호 효과(eGFR slope) 미확정; 오픈라벨 연장 진행 중.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Interim Analysis of a Phase 3 Trial of Povetacicept in IgA Nephropathy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42912669/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42912669/",
        "doi": "https://doi.org/10.1056/NEJMoa2608682",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Barratt J",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "생검 확인 IgA 신증 환자 557명을 povetacicept 80 mg SC q4w(n=372) 또는 위약(n=185)으로 2:1 무작위 배정, 3상 이중맹검 RCT 수행",
          "사전지정 중간분석(첫 199명): 36주 uPCR 변화, gd-IgA1 수치 변화, 혈뇨 해소율 평가"
        ],
        "concepts": [
          "b-cell-depletion-therapy",
          "b-cell-development-genetics",
          "complement-system",
          "egfr-and-albuminuria"
        ],
        "tldr": "BAFF/APRIL 이중 차단제 povetacicept가 IgA 신증 3상 임상 중간분석에서 위약 대비 36주 uPCR을 49.8%p 추가 감소시키고, gd-IgA1을 77.4% 감소, 혈뇨 해소율 85%로 탁월한 효과를 보임.",
        "question": "BAFF와 APRIL을 동시에 차단하는 TACI-Fc 융합 단백질이 IgA 생성 B세포를 억제하여 IgA 신증의 단백뇨·혈뇨를 개선할 수 있는가?",
        "key_result": "uPCR: povetacicept -52.0% vs 위약 -4.3%(조정 차이 -49.8%p, 95% CI -58.6~-39.2, P<0.001). gd-IgA1: -77.4% vs +9.1%(조정 차이 -79.3%p, P<0.001). 혈뇨 해소: 85% vs 23%(조정 차이 62%p, P<0.001). 이상반응 발생률 두 군 유사(75% vs 78%).",
        "why_for_us": "BAFF/APRIL-B세포 축의 IgA 신증 병인 규명; 랩의 B세포 생물학(b-cell-development-genetics, b-cell-depletion-therapy) 및 nephro·autoimmune 관심과 직결. complement-driven IgA nephropathy 연구와 병행 비교 가능.",
        "limitations": "중간분석이므로 장기 eGFR 보호 효과 미확정; 배경치료 이질성 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Sibeprenlimab in IgA Nephropathy - Final Phase 3 Trial Analysis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42911185/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42911185/",
        "doi": "https://doi.org/10.1056/NEJMoa2609127",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Rizk DV",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "IgA 신병증 성인 510명을 sibeprenlimab 400mg 피하주사(4주 간격) 또는 위약에 1:1 무작위 배정",
          "24개월 연간 eGFR 기울기를 핵심 2차 종료점으로, 복합 신기능 감소/신부전을 추가 종료점으로 분석"
        ],
        "concepts": [
          "complement-system",
          "egfr-and-albuminuria"
        ],
        "tldr": "IgA 신병증 환자에서 APRIL 억제제 sibeprenlimab이 24개월에 걸쳐 eGFR 감소를 유의미하게 억제함을 Phase 3 최종 분석에서 확인.",
        "question": "APRIL 선택적 억제가 IgA 신병증 환자의 장기적 신기능(eGFR 기울기)을 보호하는가?",
        "key_result": "연간 eGFR 기울기: sibeprenlimab군 0.3 ml/min/1.73m² vs 위약군 유의미한 감소; 신기능 안정화 확인. 구체적 수치는 본문 참조.",
        "why_for_us": "신장 도메인(CKD·IgA 신병증) 관련 임상 데이터로, 보체·면역 축(APRIL-BAFF 경로) 개입이 eGFR에 미치는 효과를 이해하는 데 참고 가능.",
        "limitations": "단일 용량(400mg)만 시험; 장기 안전성 및 다른 IgA 신병증 표현형에 대한 일반화 제한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Atacicept in IgA Nephropathy - Phase 3 Trial Final Efficacy Analysis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42911181/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42911181/",
        "doi": "https://doi.org/10.1056/NEJMoa2610103",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Barratt J",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "생검 확인된 IgA 신병증 성인 428명을 atacicept 150mg 주 1회 피하주사 또는 위약으로 무작위 배정(214명/군)",
          "52주 eGFR 변화 및 104주 연간 eGFR 기울기를 계층적 2차 종료점으로 분석"
        ],
        "concepts": [
          "complement-system",
          "egfr-and-albuminuria",
          "b-cell-depletion-therapy"
        ],
        "tldr": "APRIL·BAFF 이중 억제제 atacicept가 IgA 신병증 Phase 3 최종 분석에서 52주·104주 eGFR 감소를 위약 대비 유의하게 억제함.",
        "question": "Atacicept가 IgA 신병증 환자의 1~2년 eGFR 기울기를 개선하는가?",
        "key_result": "52주 평균 eGFR 변화: atacicept군 -0.11 ml/min/1.73m²(위약 대비 유의 차이); 104주 eGFR 기울기 안정화 확인.",
        "why_for_us": "IgA 신병증의 면역(BAFF/APRIL) 경로 개입과 eGFR 보호 효과를 보여주는 핵심 임상 데이터; 신장 면역유전체 연구에 배경지식으로 유용.",
        "limitations": "오픈라벨 연장 없이 104주 종료; atacicept 단일 용량만 평가; 동반 면역억제 치료 혼재 가능.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Type I interferon activation in classical monocytes and GZMK+ CD8+ T cells characterises the ultrasound-negative phase of imminent rheumatoid arthritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42918701/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42918701/",
        "doi": "https://doi.org/10.1016/j.ard.2026.09.004",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Tariq F",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "ACPA+ 임박 진행자(n=22)와 비진행자(n=18)의 전향적 혈액 샘플에 scRNA-seq 수행",
          "초음파 음성(USneg, n=11)과 초음파 양성(USpos, n=11) 그룹으로 층화 비교",
          "혈장 단백체(plasma proteomics) 분석으로 innate vs. effector 경로 전환 확인",
          "TCR 클론형 분석으로 GZMK+와 GZMB+ CD8+ T세포의 클론 독립성 확인"
        ],
        "concepts": [
          "cell-type-annotation",
          "cell-clustering",
          "affinity-proteomics",
          "cytokine-signaling-networks",
          "autoinflammatory-interferonopathies"
        ],
        "tldr": "RA로 진행하기 직전인 ACPA+ 고위험군에서, 초음파 음성 단계에는 IFN-I 경로 활성화(CD14+ 단핵구·GZMK+ CD8+ T세포)가 나타나고, 초음파 양성 단계로 넘어가면 IL-1β+ 단핵구 및 GZMB+ 세포독성 T세포 클론 확장으로 전환됨을 단일세포 RNA-seq + 혈장 단백체로 규명.",
        "question": "ACPA 양성 RA 임박 진행자에서 활막염 발생 이전과 이후의 말초 면역 시그니처는 어떻게 다른가?",
        "key_result": "USneg 진행자: CD14+ 단핵구·GZMK+ CD8+ T세포에서 IFN-I 상향; USpos 진행자: IL-1β+ 단핵구로 표현형 전환 + GZMB+ CD8+ T세포 클론 확장; GZMB+와 GZMK+ 세포는 클론형 상 대부분 독립적; 단백체에서 TLR-innate 경로→effector·조직 리모델링 경로로 전환 확인.",
        "why_for_us": "RA 발병 전 면역 전환 단계를 scRNA-seq + 단백체로 규명한 사례로, 자가면역 연구에서 단일세포 다중오믹스(scRNA + 혈장 단백체) 통합 분석 설계에 직접 참고 가능.",
        "limitations": "샘플 수가 각 그룹 11명 내외로 작고, 혈액 기반 분석이라 활막 조직 내 변화는 직접 측정하지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Ianalumab for the Treatment of Patients with Sjögren's Disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42906087/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42906087/",
        "doi": "https://doi.org/10.1056/NEJMoa2601088",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Mariette X",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "활성 쇼그렌병 환자 대상 52주 이중맹검 무작위대조시험 2건(NEPTUNUS-1: n=275, NEPTUNUS-2: n=504) 수행",
          "ianalumab 300 mg 월1회 또는 3개월1회 피하주사 vs 위약 비교",
          "1차 종점: 48주 ESSDAI 변화량; 주요 2차 종점: ESSDAI 반응률, SSSD/ESSPRI 변화"
        ],
        "concepts": [
          "b-cell-depletion-therapy",
          "b-cell-tolerance-autoreactivity"
        ],
        "tldr": "쇼그렌병 환자 대상 2개 무작위대조시험(NEPTUNUS-1·2)에서 B세포 고갈 및 BAFF 수용체 차단 이중 기전의 ianalumab 300 mg 월 1회 투여가 48주째 ESSDAI 점수를 유의하게 감소시켰다.",
        "question": "B세포 고갈(ADCC) + BAFF 수용체 차단 이중 기전 항체 ianalumab이 쇼그렌병 활성도와 증상을 개선하는가?",
        "key_result": "ianalumab 월1회군에서 ESSDAI 점수가 위약 대비 유의하게 더 많이 감소(NEPTUNUS-1: -1.3점, 95% CI -2.6~0.0, P=0.0496; NEPTUNUS-2: -1.0점, 95% CI -2.0~0.0, P=0.04); ESSDAI 반응률 및 환자보고 증상(SSSD/ESSPRI)에서는 유의한 차이 없음; 중증 이상반응 발생률 위약과 유사",
        "why_for_us": "랩의 autoimmune(B세포 고갈·BAFF 차단) 관심 분야와 부합; B세포 고갈 치료 임상 데이터로서 B세포 관련 자가면역 프로젝트에서 임상적 맥락 제공",
        "limitations": "효과크기가 통계적으로 유의하나 임상적 의미는 제한적(-1~-1.3점); 환자보고 결과에서 유의한 개선 없음; 3개월 투여 용량군 결과 불충분",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Proteomic atlas of T cell exhaustion defines proteostatic collapse.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42906538/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42906538/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.051",
        "journal": "Cell",
        "year": "2026",
        "author": "Shuttleworth SL",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "전사체·정량 단백체·회전율 단백체·유비퀴틴 단백체를 통합하여 T세포 소진 멀티오믹스 아틀라스 구성",
          "전사적 조절과 번역 후 조절(분해성·비분해성 유비퀴틴 변형)을 구분하여 pathway 분석",
          "E3 유비퀴틴 리가아제 발현 패턴과 면역치료 임상 결과의 상관 분석",
          "RNF166 과발현 T세포를 in vitro 및 in vivo에서 기능 평가"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "dda-vs-dia",
          "affinity-proteomics"
        ],
        "tldr": "T세포 소진 상태의 다층 오믹스(전사체·단백체·회전율·유비퀴틴) 아틀라스를 구축하여, 단백질 항상성(proteostasis) 붕괴가 소진의 핵심 특징임을 밝히고 E3 리가아제 RNF166 과발현으로 T세포 지속성을 향상시켰다.",
        "question": "T세포 소진 과정에서 전사 이후 단계(번역 후 변형·단백질 회전율)는 어떻게 재편되며, 이를 조작해 면역치료 반응을 개선할 수 있는가?",
        "key_result": "유비퀴틴-프로테아솜 시스템이 광범위하게 변화하며, E3 리가아제 차등 발현이 면역치료 아웃컴과 상관됨; RNF166 과발현 시 T세포 지속성이 in vitro·in vivo 모두에서 향상됨",
        "why_for_us": "랩의 T세포 소진·TME·암 면역치료 관심 영역과 직결되며, 멀티오믹스 통합 방법론(전사체+단백체+유비퀴틴체) 적용 사례로서 프로테오믹스-트랜스크립토믹스 통합 분석 프레임워크 참고 가능",
        "limitations": "소진 모델이 특정 암종 또는 실험계에 국한될 수 있어 범용성 검증 필요; 임상 데이터와의 연계는 상관 수준에 그침",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Perforin triggers iron-induced mitochondrial damage to drive ferroptosis and anti-tumor immunity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42914978/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42914978/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.062",
        "journal": "Cell",
        "year": "2026",
        "author": "Bell HN",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "마우스 종양 모델에서 Prf1-의존적 페롭토시스 기전 규명",
          "Prf1 매개 트랜스페린 수용체 내포→세포 내 철 증가→엔도솜-미토콘드리아 접촉 형성→미토콘드리아 철 축적 및 기능 장애 경로 분석",
          "식이 철 보충이 Prf1-의존 방식으로 종양 진행 억제 여부 확인",
          "암환자 데이터에서 Prf1 발현과 생존율·면역관문억제제 반응 상관 분석"
        ],
        "concepts": [
          "ferroptosis",
          "cancer-immunity-cycle",
          "apoptosis-core-machinery"
        ],
        "tldr": "세포독성 CD8+ T세포와 NK세포의 perforin(Prf1)이 그란자임 독립적으로 트랜스페린 수용체 내포를 유도해 미토콘드리아 철 축적→페롭토시스를 촉발함으로써 종양세포를 살상하는 새로운 기전 발견.",
        "question": "Perforin이 그란자임 독립적으로 종양세포 사멸(페롭토시스)을 유도할 수 있는가?",
        "key_result": "Prf1은 그란자임 없이도 페롭토시스를 직접 실행; 식이 철 보충이 마우스 종양 진행을 Prf1-의존적으로 억제; 암환자에서 높은 Prf1 발현이 향상된 생존율 및 면역관문억제제 반응과 연관.",
        "why_for_us": "암 면역(T세포 기능·TME) 및 페롭토시스와 항종양 면역의 교차점에 관한 기전 논문으로, 암면역 연구 맥락(T cell exhaustion·TME)에서 참고 가능.",
        "limitations": "주로 마우스 모델 기반이며, 인체 임상 적용성 추가 검증 필요; Prf1 발현-생존율 상관은 관찰적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Lifestyle-induced regulatory T cell fragility primes adverse events after immune checkpoint blockade.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42913630/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42913630/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.055",
        "journal": "Cell",
        "year": "2026",
        "author": "Patra D",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "고지방식이 기반으로 대사 변화와 미생물 불균형을 유도한 irAE 감수성 마우스 모델(LISA) 구축",
          "항PD-1 투여 후 다장기 면역침윤·사이토카인 프로파일링으로 irAE 재현 확인",
          "Akkermansia muciniphila 증식과 Treg 기능 변화 간의 연관성 분석",
          "성별, 연령, 치료 방식에 따른 irAE 중증도 비교"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "cancer-immune-escape-hla",
          "b-cell-tolerance-autoreactivity"
        ],
        "tldr": "항PD-1 면역관문억제제(ICI) 부작용(irAE)을 재현하는 생활습관 기반 마우스 모델(LISA)을 개발하고, 장내 미생물 불균형(Akkermansia muciniphila 과증식)이 조절T세포(Treg) 취약성을 유발해 irAE를 일으킴을 규명.",
        "question": "ICI 부작용(irAE)은 왜 일부 환자에서만 발생하며, 생활습관·대사·마이크로바이옴이 이 취약성에 어떻게 기여하는가?",
        "key_result": "Akkermansia muciniphila 과증식을 동반한 장내 미생물 불균형이 Treg 취약성을 야기하고, CD8+ T세포 활성화를 증폭시켜 항PD-1 irAE를 유발함. irAE 중증도는 성별·연령·치료 양식에 따라 달라짐.",
        "why_for_us": "암 면역치료 연구(T세포 소진·TME) 및 자가면역 맥락에서 Treg 기능이상·마이크로바이옴과 irAE 메커니즘을 이해하는 데 관련성 있음. cancer immunology 및 autoimmune 도메인 양쪽에 걸침.",
        "limitations": "마우스 모델이므로 인체 irAE와의 정량적 대응 관계 불명확; 초록에서 구체적 통계수치 미제공.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Intron retention regulates STAT2 function and associates with immunotherapy response in lung cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42912151/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42912151/",
        "doi": "https://doi.org/10.1126/science.aea7156",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Englander RP",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "인간 폐 선암 원발 조직에서 long-read RNA 시퀀싱으로 전장 mRNA isoform 지형도 작성",
          "149,000개 이상의 전장 isoform 확인(절반 이상 미주석)",
          "면역 관련 유전자, 특히 type I 인터페론 반응 경로에서 intron retention 사례 집중 분석",
          "STAT2 intron retention의 기능적 특성 및 면역치료 반응과의 연관성 규명"
        ],
        "concepts": [
          "brain-isoform-diversity",
          "cgas-sting-regulation"
        ],
        "tldr": "폐 선암에서 장독형 long-read RNA-seq으로 intron retention을 포함한 대규모 isoform 지형도를 작성하고, STAT2 intron retention이 면역치료 반응과 연관됨을 기능적으로 규명.",
        "question": "폐 선암 환자에서 면역관문억제제 반응의 분자적 결정인자는 무엇인가? 특히 RNA 이어맞추기(alternative splicing) 변이가 이에 기여하는가?",
        "key_result": "149,000개 이상의 전장 mRNA isoform 식별(반 이상 미주석); 면역 관련 유전자에서 intron retention 다수 발생; STAT2 intron retention이 type I IFN 경로 기능에 영향을 미치며 면역치료 반응과 연관됨.",
        "why_for_us": "sQTL·이소형 다양성·면역치료 반응 예측과 연결되는 RNA splicing 변이 연구와 접점이 있으며, 암 면역 도메인(cancer immunology) 및 long-read 기반 전사체 방법론 측면에서 참고 가능.",
        "limitations": "장독형 시퀀싱의 오류율 및 코호트 규모, 면역치료 반응 데이터와의 연계 범위가 초록에 충분히 기술되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Early lineage divergence segregates sensory and motor-associative identities in the thalamus.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42901979/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42901979/",
        "doi": "https://doi.org/10.1038/s41593-026-02485-9",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Puche-Aroca L",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "배아 마우스 시상의 시공간 단세포 멀티오믹(RNA+ATAC) 아틀라스 생성",
          "공간 전사체(spatial transcriptomics) 데이터와 통합",
          "바코드 기반 계통 추적으로 두 주요 글루타마테르직 계통 동정",
          "In silico 예측 및 in vivo 교란 실험으로 Sp9의 시각 시상 운명 조절 기능 검증"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "brain-cell-type-vocabulary",
          "brain-region-map",
          "atac-seq"
        ],
        "tldr": "마우스 배아 시상의 시공간 단세포 멀티오믹·공간 전사체 아틀라스와 바코드 계통 추적을 결합하여, 감각 및 운동-연합 정체성이 이른 시기에 분기하는 발생학적 원리 규명. Sp9를 시각 시상 운명 조절자로 동정",
        "question": "시상의 감각·운동·연합 기능별 핵이 발생 과정에서 어떻게 분화되는가?",
        "key_result": "감각 계열과 운동-연합 계열의 두 주요 글루타마테르직 계통이 공간·분자적으로 구분된 전구 도메인에서 이른 시기에 분기; 시각 및 체성감각 뉴런은 공통 고차-유사 상태에서 분지; Sp9가 시각 시상 운명의 핵심 조절자로 확인",
        "why_for_us": "랩의 뇌 단세포 멀티오믹 및 공간 전사체 분석 방법론과 직접 연관. 뇌 세포 아틀라스·계통 추적·유전자 조절 네트워크(GRN) 연구의 레퍼런스로 활용 가능",
        "limitations": "마우스 배아 데이터 기반으로 인간 시상 발생에의 직접 적용에 한계; 계통 추적의 해상도 제약",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mitochondrial dysfunction in neurology: biomarkers and clinical implications.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42919989/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42919989/",
        "doi": "https://doi.org/10.1038/s41582-026-01274-z",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Rossini E",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "원발성 미토콘드리아 질환을 proof-of-concept 모델로 삼아, 산화적 인산화 손상 관련 바이오마커 발굴·검증 프레임워크를 제시",
          "체액 바이오마커(대사 변화·스트레스 신호), 유전 바이오마커(mtDNA 완전성·동태), 멀티오믹스(전사체·단백체·대사체 통합), 영상 바이오마커 네 범주로 분류·검토",
          "신경질환 전반에 걸쳐 생체에너지, 산화환원 항상성, 미토콘드리아 게놈 유지, 염증 신호의 공통 교란 패턴을 기술"
        ],
        "concepts": [
          "alpha-synuclein-proteostasis"
        ],
        "tldr": "신경질환 전반에서 공유되는 병인 메커니즘인 미토콘드리아 기능이상의 바이오마커(체액·유전·멀티오믹스·영상)를 체계적으로 정리하고, 정밀의학 적용을 위한 통합 전략을 제안한 리뷰.",
        "question": "다양한 신경질환(ALS, AD, PD, MS 등)에서 미토콘드리아 기능이상을 반영하는 바이오마커는 무엇이며, 임상 활용의 장벽은 무엇인가?",
        "key_result": "TWAS·멀티오믹스 통합이 바이오마커 발굴에 잠재력을 보이지만, 방법론적 이질성·생물학적 변동성·질환 특이성 부족으로 임상 구현이 제한됨. 종단 검증을 포함한 통합 멀티모달 전략 필요.",
        "why_for_us": "우리 랩이 관심 갖는 neuro(AD, PD, MDD) 도메인과 멀티오믹스 통합(전사체·단백체·대사체) 접근이 직접 겹치며, 미토콘드리아 유전체 및 대사체 바이오마커는 향후 관련 프로젝트의 배경 지식으로 활용 가능.",
        "limitations": "리뷰 논문으로 독자적 실험 데이터 없음. 방법론적 이질성과 낮은 질환 특이성 문제가 해결되지 않은 채 제시됨.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The clinical relevance of multiple sclerosis genetics: from susceptibility to disease severity and progression.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42915008/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42915008/",
        "doi": "https://doi.org/10.1016/S1474-4422(26)00356-X",
        "journal": "The Lancet. Neurology",
        "year": "2026",
        "author": "Jensen LT",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "대규모 GWAS로 발굴된 수백 개 MS 위험 유전자좌 및 면역 경로 해석 정리",
          "희귀변이 연구, 중증도·장애 진행 유전학, 후성유전 분석, 유전자-환경 연구, EBV 연구 동향 검토",
          "현재 임상 적용 가능성과 한계(개인 예측력, 집단 일반화 등) 비판적 고찰"
        ],
        "concepts": [
          "drug-target-genetics",
          "colocalization",
          "epistasis",
          "cross-ancestry-transferability",
          "family-history-gwas"
        ],
        "tldr": "다발성경화증(MS) 유전학의 현재(GWAS→희귀변이·중증도·후성유전·EBV)와 한계를 정리하고, 임상적 유용성이 기전 해석·치료 타겟 우선순위·인과추론에 집중됨을 논한 리뷰.",
        "question": "MS GWAS 결과가 감수성을 넘어 질환 중증도·진행·치료반응 예측에 얼마나 기여하는가?",
        "key_result": "MS는 고도로 다유전자적·면역매개 질환임이 확립됨; 감수성 유전학은 면역치료 기전 설명에 유효하나 장애 축적·질환 경과 예측력은 미흡; 향후 가치는 유전적 구조 + 종단 임상·영상·바이오마커·멀티오믹스 통합에 달려 있음.",
        "why_for_us": "GWAS→기전 해석·drug target genetics·PRS 한계에 관한 비판적 시각을 제공하며, 멀티오믹스 통합 전략의 필요성을 뒷받침하는 리뷰로 활용 가능.",
        "limitations": "개별 연구 결과가 아닌 리뷰로, 새로운 데이터 생산 없음; MS에 한정되어 다른 자가면역·신경 질환으로의 직접 일반화 불가.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Progenitor transcriptional alterations link fetal and adult pathology in Huntington's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42910642/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42910642/",
        "doi": "https://doi.org/10.1093/brain/awag364",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Battistella M",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "희귀한 해부학적으로 온전한 인간 HD 태아 뇌(LGE·피질)와 대조군을 단세포 전사체로 프로파일링",
          "HD 마우스 배아 알릭 계열과 비교 분석 및 기존 성인 사후 뇌·뇌 오가노이드 공개 데이터셋과 교차 비교"
        ],
        "concepts": [
          "brain-cell-type-vocabulary",
          "brain-eqtl-grn",
          "cell-type-annotation",
          "allele-specific-expression"
        ],
        "tldr": "헌팅턴병(HD) 태아 뇌의 단세포 전사체 분석을 통해, 신경 전구세포에서 나타나는 초기 전사 변화가 성인 HD 병리와 연속성을 보임을 확인.",
        "question": "HD의 CAG 반복 확장이 태아 발달 중 세포 유형 특이적 전사 변화를 야기하며, 이 변화가 성인 병리까지 지속되는가?",
        "key_result": "신경 전구세포에서 차등 발현 유전자 수가 가장 많음; 시냅스 경로 상향 + 세포 유지 유전자 하향 발현; 이 전사 서명의 일부가 성인 HD 데이터셋에서도 보존됨.",
        "why_for_us": "단세포 전사체 + 신경 질환(HD) 발달 기원 연구 접근법; 세포 유형 특이적 전사 서명 분석 방법론이 신경 도메인 scRNA-seq 프로젝트에 참고 가능.",
        "limitations": "단일 HD 태아 뇌 샘플이므로 개체 간 변이 파악 불가; 마우스 모델과의 전사 서명 일치도가 부분적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Serum β-synuclein predicts dementia conversion and mortality beyond amyloid-β and phospho-tau.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42904923/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42904923/",
        "doi": "https://doi.org/10.1093/brain/awag361",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Oberstein TJ",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "단일기관 메모리클리닉 비치매 환자 259명을 CSF 바이오마커 기반으로 A-T1- 대조군, PASSED, A+T1+ AD 군으로 분류",
          "혈청 β-시뉴클레인을 측정하고 치매 전환(중앙 추적 4.1년), 전체 사망(7.0년), MMSE 궤적, 뇌 용적과의 연관성 분석",
          "CSF pTau181·Aβ42/40 조정 후 효과 감쇠 분석으로 독립성 정량화"
        ],
        "concepts": [
          "alpha-synuclein-proteostasis",
          "affinity-proteomics"
        ],
        "tldr": "비치매 경도인지장애 코호트(n=259)에서 혈청 β-시뉴클레인이 CSF 아밀로이드·타우 독립적으로 치매 전환, 인지 저하, 사망률을 예측하며, 측두엽·해마 위축과 연관됨을 보였다.",
        "question": "혈청 β-시뉴클레인이 기존 CSF 아밀로이드β·pTau181 바이오마커를 넘어 독립적인 예후 정보를 제공하는가?",
        "key_result": "β-시뉴클레인 1 SD 증가 시 치매 전환 HR=1.40(95% CI 1.11-1.77, P=0.005), 사망 HR=1.33(95% CI 1.07-1.65, P=0.010), 인지 저하 -0.11 SD/년(P=0.002); CSF pTau181·Aβ42/40 동시 조정 후 치매·사망 효과 감쇠 ≤13%로 독립성 확인; 양측 측두엽 용적 감소와 유의하게 연관",
        "why_for_us": "랩의 AD 및 신경 바이오마커 관심 분야와 연결; 혈청 단백체 기반 예후 마커 발굴 방법론(효과 감쇠 분석, 생존분석)이 향후 pQTL·단백체 통합 연구에 참고 가능",
        "limitations": "단일기관 코호트로 외부 검증 부재; 혈청 β-시뉴클레인 측정의 표준화 미확립; pTau181/Aβ40 기반 연속 조정 시 효과 감쇠 커짐",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multi-organ imaging genetics: towards an integrated view of brain, body and brain diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42897328/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42897328/",
        "doi": "https://doi.org/10.1038/s41582-026-01276-x",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Fan Z",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "뇌·심장·골격 등 다장기 다중모달 영상과 유전 데이터를 결합한 코호트 자원 및 분석 프레임워크 정리",
          "뇌-신체 상호작용 및 다중이환(multimorbidity) 맥락에서 다장기 영상 유전 연관성 리뷰",
          "다장기 통합 이해를 위한 agentic AI co-scientist 로드맵 제시"
        ],
        "concepts": [
          "brain-body-immune-circuits",
          "brain-cell-atlas",
          "brain-region-map"
        ],
        "tldr": "뇌·신체 다기관 영상유전체학(multi-organ imaging genetics) 분야를 개관하며, 뇌 중심의 다장기 유전적 구조 발견과 뇌-신체 연결고리를 통합적으로 이해하는 로드맵을 제시한 리뷰.",
        "question": "뇌 질환과 전신 질환의 유전적 구조를 다장기 영상과 유전체 데이터를 통합함으로써 어떻게 더 잘 이해할 수 있는가?",
        "key_result": "뇌 중심의 다장기 영상유전체학이 뇌-신체 유전적 연관성을 밝히는 새로운 패러다임으로 부상하며, 단일 장기 중심의 기존 영상유전학 연구를 통합적 시각으로 확장할 필요성이 강조됨.",
        "why_for_us": "GWAS/QTL 및 멀티오믹스 통합, 뇌 질환(AD·PD·MDD 등) 도메인과 겹치며, 다장기 유전적 구조 분석 및 이미징 표현형을 이용한 통합 접근 방법론이 랩 관심사와 부합.",
        "limitations": "리뷰 논문으로 실증 분석 없음; AI co-scientist 로드맵은 아직 구체적 검증 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatiotemporal remodeling in habenula marks the onset of depression-related phenotypes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42897302/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42897302/",
        "doi": "https://doi.org/10.1038/s41593-026-02488-6",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Molina P",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "수컷 마우스 LHb의 공간전사체 아틀라스 생성(만성 스트레스 모델)",
          "종단 in vivo 이광자 칼슘이미징으로 LHb 뉴런의 혐오 자극 반응 추적",
          "케타민 투여 및 화학유전학적 LHb 억제 실험으로 인과관계 검증"
        ],
        "concepts": [
          "brain-eqtl-grn",
          "brain-region-map"
        ],
        "tldr": "공간전사체학과 in vivo 칼슘이미징으로 만성 스트레스 후 외측 고삐핵(LHb)에서 우울증 발현 시점과 연관된 시공간적 유전자 발현 리모델링 및 신경 활성 변화를 규명.",
        "question": "만성 스트레스 이후 우울증 관련 표현형이 시작되는 시점에 외측 고삐핵에서 어떤 분자적·신경적 변화가 일어나는가?",
        "key_result": "만성 스트레스 후 LHb에서 위상학적으로 조직된 유전자 발현 리모델링이 관찰되었고, 뉴런의 흥분성 반응 강화가 우울증 행동 표현형 출현과 시간적으로 일치하며 케타민에 의해 역전됨.",
        "why_for_us": "MDD 발병 메커니즘 연구 관심, 공간전사체학 방법론과 뇌 특이적 유전자 발현 분석이 랩의 single-cell/spatial 및 뇌 eQTL/GRN 관심사와 연결됨.",
        "limitations": "수컷 마우스만 사용하여 성별 일반화 제한; 인간 데이터 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A single-cell atlas of human neutrophils reveals neutrophil heterogeneity across health and disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42907583/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42907583/",
        "doi": "https://doi.org/10.1038/s41590-026-02671-8",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Zheng H",
        "rating": 4,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "43개 독립 데이터셋, 781 샘플, 100만 호중구 전사체 데이터를 통합해 SCAHN 구축",
          "마우스·비인간영장류 호중구를 SCAHN에 크로스-스피시즈 레퍼런스 매핑",
          "40개 데이터셋 17,023개 bulk 혈액 전사체로 SCAHN 유래 서명의 임상 연관성 검증"
        ],
        "concepts": [
          "cell-atlas",
          "batch-integration",
          "cell-type-annotation",
          "differential-abundance",
          "cell-clustering"
        ],
        "tldr": "43개 독립 데이터셋, 78만여 호중구를 통합한 인간 호중구 단세포 아틀라스(SCAHN)를 구축하고, 감염·암·면역억제 등 질환별 서브셋 변화 및 임상 예후 연관 서명을 발굴.",
        "question": "대규모 단세포 통합 아틀라스로 인간 호중구의 조직·질환 특이적 이질성과 임상적 의미를 체계적으로 규명할 수 있는가?",
        "key_result": "복수의 기능적으로 구분되는 호중구 서브셋 확인; 호중구 특이 서명이 급성기 환자 사망률 예측, 암 진단·생존율, 대사 기능장애 및 장기 사망률과 유의하게 연관.",
        "why_for_us": "대규모 단세포 통합(배치 보정, 크로스-종 매핑, 세포 유형 어노테이션) 방법론 및 면역세포 아틀라스 구축의 참고 사례; 신장 AKI-호중구 프로젝트에 직접 활용 가능.",
        "limitations": "공개 데이터셋 통합으로 인한 배치 효과·프로토콜 이질성; 공간적 맥락 정보 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A systems perspective on monoallelic inborn errors of immunity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42901985/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42901985/",
        "doi": "https://doi.org/10.1038/s41588-026-02784-8",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Werner M",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "단일대립 IEI 유전 구조의 복잡성(불완전 침투율, 가변 발현도, 다면발현)을 문헌 기반으로 정리",
          "고전적 유전적 우성 및 다면발현 개념을 분자·세포·면역 시스템 수준에서 재정의·확장",
          "변이가 신호 전달을 제거가 아닌 교란할 때 표현형 발현이 시스템 버퍼링에 의해 결정됨을 논증"
        ],
        "concepts": [
          "autoinflammatory-disease-genetics",
          "epistasis",
          "cytokine-signaling-networks"
        ],
        "tldr": "단일대립 선천면역결핍증(monoallelic IEI)의 유전 구조를 시스템 관점으로 재조명. 변이 중심 이분법적 인과론의 한계를 지적하고, 다면발현·가변 발현도·불완전 침투율을 분자·세포·면역 회로 수준에서 설명하는 프레임 제안",
        "question": "단일대립 선천면역결핍 변이가 어떻게 다양한 표현형을 유발하는가—유전적 우성과 다면발현을 시스템 관점에서 어떻게 재정의해야 하는가?",
        "key_result": "단일대립 변이의 병원성은 allele 단독 속성이 아니라 분자-세포-면역 회로 시스템의 동적 상태에 의해 결정된다는 개념적 프레임 제시",
        "why_for_us": "자가면역·면역결핍 유전 구조 이해에 필요한 이론적 틀. 랩의 autoinflammatory disease genetics 및 epistasis 연구와 개념적으로 연결됨",
        "limitations": "실험적 데이터 없이 개념 리뷰 위주; 구체적 유전자·경로 수준의 정량적 검증 부재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Taurine lowers inflammaging by regulating the NLRP3 inflammasome in macrophages.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42914977/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42914977/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.061",
        "journal": "Cell",
        "year": "2026",
        "author": "Guan C",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "인간·마우스 혈중 타우린 농도와 연령 상관 분석",
          "고령 마우스에 타우린 추가 투여 후 건강 수명·패혈증 사망률·인플라마솜 활성 변화 측정",
          "대식세포에서 NLRP3 danger signal→타우린 유출→trans-Golgi 해체→NLRP3 활성화 경로 기전 규명",
          "타우린 생합성 저하 모델에서 인플라마솜 악화 확인",
          "인간 칼로리 제한 코호트에서 지방 조직 타우린 및 염증 마커 측정"
        ],
        "concepts": [
          "cellular-senescence",
          "activity-metabolomics"
        ],
        "tldr": "타우린이 대식세포에서 NLRP3 인플라마솜 활성화의 근위 단계인 trans-Golgi 네트워크 해체를 억제함으로써 inflammaging을 완화하며, 노화 시 타우린 농도가 오히려 상승하는 enantiostatic 반응임을 규명.",
        "question": "타우린이 노화 관련 만성 염증(inflammaging)을 조절하는 기전은 무엇인가?",
        "key_result": "노화 시 혈중 타우린 상승(enantiostatic); 타우린 보충이 고령 마우스 건강 수명 향상 및 패혈증 사망률 감소; 타우린이 trans-Golgi 해체 억제로 NLRP3 인플라마솜 억제; 칼로리 제한 인간에서 지방 타우린 상승+염증 감소 확인.",
        "why_for_us": "inflammaging 메커니즘(NLRP3·면역대사)과 노화 연구 관점에서 직접 관련; 대사체-면역 교차 분야 통합 연구의 참고 사례.",
        "limitations": "인간 데이터는 칼로리 제한 코호트에 한정되며 인과성 확립 부족; 타우린의 다른 조직·세포 효과는 미탐색.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-10-18",
    "count": 18,
    "papers": [
      {
        "title": "A phenome-wide structural variant map from 467,152 UK Biobank genomes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42880286/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42880286/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.035",
        "journal": "Cell",
        "year": "2026",
        "author": "Atanur SS",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "UK Biobank WGS 467,152명에서 160만 개 SV를 동정",
          "13,322 이진·2,018 정량·2,923 혈장단백 형질에 대한 PheWAS 수행",
          "3,467 SV를 1,690개 단백질에 연결하는 pQTL 분석 실시",
          "기존 GWAS 로커스에서 SV와 기능적 유전체 영역의 중첩 분석"
        ],
        "concepts": [
          "cis-regulatory-element-mapping",
          "colocalization",
          "affinity-proteomics"
        ],
        "tldr": "UK Biobank 전장유전체서열 467,152명에서 160만 개 구조변이(SV)를 발굴해 PheWAS·pQTL 분석을 수행하고, SV가 인간 표현형과 단백질에 미치는 광범위한 영향을 규명한 대규모 SV 지도.",
        "question": "기존 CNV 연구에서 탐지되지 않던 구조변이가 인간 표현형·단백질 발현에 얼마나 기여하는가?",
        "key_result": "28,184개 SV-표현형 연관성 검출; 분석 SV의 82.25%는 기존 CNV 연구에서 탐지 불가 범위; 알려진 GWAS 로커스의 32.21% SV가 기능적 유전체 영역과 중첩; SV 유형·위치에 따라 단백질 발현 효과가 차별화됨.",
        "why_for_us": "pQTL·PheWAS·fine-mapping 파이프라인에 SV를 통합하는 방법론적 참고문헌으로 직접 활용 가능. 신장·자가면역 GWAS 로커스에서 SV 기여도 검토 시 핵심 자료.",
        "limitations": "WGS 기반 SV 동정 정확도는 플랫폼·깊이에 따라 다를 수 있으며, 기능적 검증이 제한적. 희귀 SV의 통계적 검정력 한계.",
        "reuse": "UK Biobank SV 목록 및 pQTL 결과 공개 예정(초록에 명시 없음).",
        "next_step": "초록에 명시 없음."
      },
      {
        "title": "Structural variant detection across sequencing technologies.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42881276/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42881276/",
        "doi": "https://doi.org/10.1038/s41587-026-03332-9",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Li G",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "반복서열 인식 및 시그니처 밀도 기반 중단점 인식과 정밀 반배체 해상 로컬 어셈블리를 결합한 HitSV 알고리즘 개발",
          "HG002 벤치마크에서 장리드, 단리드, 하이브리드 시퀀싱 각각에 대해 기존 SV caller들과 genotype F1 비교",
          "1KGP phase 4 코호트에 적용해 SV callset 31.5% 확장",
          "중국인 장리드 코호트에서 tandem-repeat–mobile-element 복합 배열이라는 새로운 복잡 SV 클래스 발견"
        ],
        "concepts": [
          "ancestral-recombination-graph",
          "cross-ancestry-transferability"
        ],
        "tldr": "다양한 시퀀싱 기술에서 구조변이(SV)를 고정밀도로 탐지·유전형분류하는 새로운 도구 HitSV를 개발하여, 기존 최신 도구 대비 최대 72% 높은 genotype F1 점수를 달성.",
        "question": "장·단·하이브리드 리드 시퀀싱 기술에서 구조변이를 정확하게 탐지하고 유전형을 분류하는 방법은?",
        "key_result": "HG002 벤치마크에서 장리드 15–72%, 단리드 10–36%, 하이브리드 12% 더 높은 genotype F1; 1KGP SV callset 31.5% 확장; tandem-repeat-mobile-element composite array라는 새 SV 클래스 확인.",
        "why_for_us": "GWAS·QTL 분석에서 SV는 중요한 미탐지 변이원이며, HitSV로 WGS 기반 SV 유전형 정확도 향상 시 fine-mapping·reference panel 보강에 활용 가능. T2T 기반 ref panel 및 CNV/SV 관련 랩 아이디어와 직결.",
        "limitations": "벤치마크가 HG002(단일 개체) 중심; 반복서열 비율이 높은 지역에서의 성능은 추가 검증 필요; 계산 비용 정보 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Rare k-mers reveal centromere haplogroups underlying human diversity and cancer translocations.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42869020/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42869020/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.053",
        "journal": "Cell",
        "year": "2026",
        "author": "Shiraishi Y",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "희귀 k-mer를 활용해 중심체 lineage-specific 변이를 정의하고 이산적 하플로그룹을 구성",
          "ascairn 도구를 개발해 단거리 WGS로부터 중심체 하플로그룹 추론",
          ">3,300개 게놈에 적용해 전 세계적 하플로그룹 다양성 및 집단사적 시그니처 확인",
          "142개 oligodendroglioma(1p/19q co-deletion) 샘플에서 중심체 하플로그룹과 염색체 재배열 취약성 관계 분석"
        ],
        "concepts": [
          "ancestral-recombination-graph"
        ],
        "tldr": "희귀 k-mer를 이용해 인간 중심체(centromere) 하플로그룹을 단거리 WGS 데이터에서 추론하는 ascairn 프레임워크를 개발하고, 희귀 중심체 구조가 암 전위와 연관됨을 보임.",
        "question": "반복 서열로 이루어진 중심체 영역의 집단 다양성과 질환 연관성을 단거리 WGS에서 어떻게 포착할 수 있는가?",
        "key_result": "중심체 하플로그룹은 전 세계적으로 광범위한 다양성을 보이며, oligodendroglioma의 1p/19q 절단점이 kinetochore 부착 부위와 명확한 위치 관계를 가지고, 중심체 하플로그룹 구조가 재배열 취약성과 연관됨.",
        "why_for_us": "GWAS/QTL 분석에서 반복 서열·구조변이(SV)가 누락되는 문제와 직결됨. T2T 참조패널 및 SV imputation 관심사와 연관되며, 중심체 변이가 heritability에 기여하는지 추가 탐구 가능.",
        "limitations": "단거리 WGS에서 희귀 k-mer 기반 추론의 정확도가 장거리 시퀀싱 대비 제한적일 수 있음. 중심체 반복 서열의 완전한 해상도는 장거리 시퀀싱 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Somatic epimutations cap genetic determinism in the human diploid chromatin epigenome.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42880232/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42880232/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.034",
        "journal": "Cell",
        "year": "2026",
        "author": "Vollger MR",
        "rating": 4,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "Fiber-seq으로 6 Gbp 이배체 게놈 전반의 크로마틴 접근성을 정량화하는 FIRE 파이프라인 개발",
          "반수체형 선택적 크로마틴 접근성(HSCA) 전장 검출 및 각인(imprinting) 요소, X 염색체 불활성화 탈출 유전자 규명",
          "HLA 유전자좌의 HSCA 분석 및 질환 연관 변이에 의한 TF 결합 교란 동정",
          "체세포 상염색체 크로마틴 epimutation의 클론 증식 양상 분석"
        ],
        "concepts": [
          "chromatin-accessibility",
          "caqtl",
          "allele-specific-expression",
          "cis-regulatory-element-mapping",
          "atac-seq",
          "chip-seq"
        ],
        "tldr": "Fiber-seq 기반 FIRE(Fiber-seq inferred regulatory elements)로 이배체 전체 게놈(6 Gbp)의 크로마틴 접근성을 반수체형 분해 수준에서 포괄적으로 측정하고, HLA 유전자좌에서 면역 세포 내 반수체형 선택적 크로마틴 접근성(HSCA)이 가장 풍부함을 밝힘.",
        "question": "이배체 게놈 전체에서 반수체형별 크로마틴 접근성 차이를 어떻게 포괄적으로 측정하고, 질환 변이가 전사인자 결합에 미치는 영향을 어떻게 해석할 수 있는가?",
        "key_result": "FIRE는 기존 카탈로그 대비 편향 감소·포괄적 조절 요소 검출; HLA 유전자좌가 면역 세포에서 HSCA 최다 부위; 질환 연관 변이가 특정 TF 결합 이벤트 교란; 체세포 epimutation이 클론 확장을 통해 유사분열 안정적으로 전파됨.",
        "why_for_us": "HLA 유전자좌의 allele-specific 크로마틴 접근성은 랩의 caQTL/allele-specific-expression/HLA 관심사와 직결; HSCA는 eQTL·fine-mapping과 통합 가능한 기능 주석으로 활용 가치 높음.",
        "limitations": "Fiber-seq의 비용 및 처리량; 일부 반복 서열·복잡 구조 변이 해석 한계 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Infection-associated acute kidney injury in resource-limited settings.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42881239/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42881239/",
        "doi": "https://doi.org/10.1038/s41581-026-01138-1",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Hawkes MT",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "장관·인수공통·매개체 감염에 의한 AKI 원인 및 기전(저혈량, 염증, 내피 기능장애, 용혈, 직접 신장 침범) 정리",
          "기후 변화·열 노출 등 환경적 스트레스가 AKI 취약성을 높이는 메커니즘 분석",
          "신원 예비력(nephron endowment) 감소와 반복 AKI의 장기 신장 건강 영향 논의",
          "진단 지연·치료 접근 제한 문제와 저비용 확장 가능 신대체 치료법 개발 필요성 제언"
        ],
        "concepts": [
          "complement-system",
          "egfr-and-albuminuria"
        ],
        "tldr": "자원 빈곤 환경에서 감염 관련 급성 신손상(AKI)의 역학·기전·위험인자·관리 전략을 종합 리뷰. 반복 감염과 불완전 회복이 장기 신장 건강에 미치는 영향을 강조.",
        "question": "자원 제한 환경에서 감염 관련 AKI의 주요 기전·위험요인과 개선 전략은 무엇인가?",
        "key_result": "근거 기반 정량적 신규 데이터보다 개념 종합에 초점; 반복 감염·불완전 AKI 회복이 CKD 진행과 생존에 영향을 줄 수 있으나 그 궤적은 불충분하게 규명되어 있음을 지적.",
        "why_for_us": "랩의 nephro 도메인(CKD·AKI) 관련 리뷰로, AKI→CKD 전환 기전 및 감염 관련 신손상 연구 배경지식으로 활용 가능.",
        "limitations": "리뷰 논문으로 신규 실험 데이터 없음; 자원 빈곤 환경에 특화되어 고소득 국가 AKI와 직접 비교 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Trained immunity in chronic, relapsing and low-grade joint inflammation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42864497/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42864497/",
        "doi": "https://doi.org/10.1038/s41584-026-01439-6",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Kischkel B",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA, 통풍, 칼슘 피로인산 침착병, 골관절염에서 trained immunity의 역할 문헌 정리",
          "단핵구/대식세포 및 연골세포·활막 섬유아세포 등 비면역세포에서의 장기 염증 프로그램 유도 기전 설명",
          "trained immunity와 심혈관 위험 등 전신 합병증과의 연결고리 제시",
          "대사·후성유전학적 경로를 표적으로 하는 치료 전략 논의"
        ],
        "concepts": [
          "autoinflammatory-disease-genetics",
          "cytokine-signaling-networks",
          "dna-methylation",
          "cellular-senescence"
        ],
        "tldr": "훈련된 면역(trained immunity)이 류마티스관절염·통풍·골관절염 등 만성 관절 염증에서 어떻게 지속적인 염증을 유지하고 질환 진행을 촉진하는지 검토한 리뷰.",
        "question": "대사적·후성유전적 재프로그래밍에 의한 선천면역 기억이 관절 염증의 만성화와 관련 전신 합병증에 어떻게 기여하는가?",
        "key_result": "염증성 사이토카인, DAMP, 대사 신호가 면역·비면역 세포 모두에서 long-lasting 염증 프로그램을 유도하며, trained immunity가 관절 염증 만성화의 기전적 연결고리로 기능함.",
        "why_for_us": "자가면역(RA) 병리기전 관심사와 직결; epigenetic reprogramming과 면역 기억 교차점이 epigenomics/autoimmune 연구 방향과 일치.",
        "limitations": "리뷰 논문으로 새로운 실험 데이터는 없음. 관절 질환 특이성과 trained immunity 일반 개념 간 경계가 불명확할 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A telomere-to-telomere map of somatic mutation burden and functional impact in a cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42880233/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42880233/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.033",
        "journal": "Cell",
        "year": "2026",
        "author": "Sohn MH",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "공여자 특이적 근-T2T 이배체 어셈블리 생성 후 흑색종 단·장 리드 심층 시퀀싱 수행",
          "체세포 변이의 게놈 분포 분석(위성 반복서열, 센트로미어, 텔로미어 포함)",
          "단일 분자 텔로미어 분석으로 종양 진화 중 텔로미어 침식-텔로머라제 연장 주기 재구성",
          "반수체형 분해 크로마틴 지도로 조절 요소의 체세포 후성유전 돌연변이(epimutation) 확인"
        ],
        "concepts": [
          "chromatin-accessibility",
          "atac-seq",
          "cancer-evolution-single-cell"
        ],
        "tldr": "근-텔로미어-텔로미어(near-T2T) 이배체 어셈블리와 심층 시퀀싱을 결합해 흑색종의 체세포 변이 16%가 GRCh38에 없는 영역에 존재함을 밝히고, 센트로미어·텔로미어 영역의 후성유전적 리모델링이 발암에 특이적임을 보임.",
        "question": "기존 참조 게놈 기반 분석으로 놓치는 체세포 변이 영역은 무엇이며, 반복서열·센트로미어·텔로미어 영역의 변이가 암 진화에서 어떤 역할을 하는가?",
        "key_result": "체세포 변이의 16%가 GRCh38 부재 영역에 존재; 위성 반복서열은 UV 관련 돌연변이 핫스팟; 센트로미어 키네토코어 결합 도메인은 비암 조직에서도 염색체 팔 이수성 절단점 및 변이 집중 부위이나, 후성유전적 리모델링은 암에 특이적.",
        "why_for_us": "T2T 참조 패널 및 반복 서열 영역의 변이 분석은 랩의 ref_panels_using_T2T 및 repeats_using_T2T 관심사와 직결되며, 후성유전 epimutation과 조절 요소 분석은 epigenomics/chromatin-accessibility 방법론과 연관됨.",
        "limitations": "단일 공여자-암 쌍 분석으로 일반화 어려움; 흑색종에 특화되어 다른 암종 적용성 미지수.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Clonal heterogeneity in human pancreatic ductal adenocarcinoma and its impact on tumor progression.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42869988/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42869988/",
        "doi": "https://doi.org/10.1038/s41588-026-02779-5",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Kalfakakou D",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "62개 원발 PDAC 종양에서 단일세포 RNA-seq (443,451개 세포) 수행",
          "11개 종양에서 공간전사체 (53,236 spots) 및 다중 면역형광 매칭",
          "화학요법 전후 6개 종양의 짝지어진 샘플 포함 분석",
          "계통발생 통합으로 8q24(MYC) 증폭과 classical-to-basal 전환 연관성 확인",
          "마우스·인간 일차 모델에서 MYC 녹다운 기능 실험 수행"
        ],
        "concepts": [
          "cancer-evolution-single-cell",
          "cell-cell-communication",
          "cancer-immune-escape-hla"
        ],
        "tldr": "62개 PDAC 원발 종양의 단일세포 RNA-seq + 공간전사체로 클론 이질성·전사 가소성·종양미세환경 상호작용을 고해상도로 규명하고, MYC 증폭이 classical→basal 전환과 면역 억제를 유발함을 밝힘.",
        "question": "PDAC 내 유전적으로 구분되는 클론들이 종양 진행, 표현형 전환, 면역 회피에 어떻게 기여하는가?",
        "key_result": "종양 내 다수의 유전적으로 구분된 클론 공존 확인; 리간드/수용체 증폭·결실이 클론 특이적 세포-세포 상호작용을 조절; MYC 증폭이 classical→basal 전환 및 면역 프로그램 억제와 반복 연관; MYC 녹다운 시 classical 전사 프로그램 및 면역 반응 경로 복원; EMT 활성화 분산 클론이 림프절 전이와 상관.",
        "why_for_us": "단일세포 + 공간전사체 + 클론 진화 통합 분석 파이프라인이 랩의 cancer single-cell 멀티오믹스 관심사와 부합; 세포-세포 커뮤니케이션 및 TME 분석 방법론 참고 가능.",
        "limitations": "원발 종양 중심 코호트로 전이 부위 직접 샘플은 제한적; 화학요법 짝 샘플 수(n=6)가 적음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Intratumoral Bacillus cereus orchestrates stem-like lymphoid niches to potentiate immunotherapy response in hepatocellular carcinoma.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42607676/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42607676/",
        "doi": "https://doi.org/10.1016/j.ccell.2026.07.016",
        "journal": "Cancer cell",
        "year": "2026",
        "author": "Hu C",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "HCC 환자 종양 조직에 공간 멀티오믹스(spatial multi-omics) 분석 적용",
          "기존 TLS와 구별되는 stem-like lymphoid niches(SLN) 구조 동정",
          "SLN과 PD-1/PD-L1 차단 치료 반응 간의 상관관계 분석",
          "CD70+ 세포를 포함한 SLN의 특수 니치 구성 특성 규명",
          "종양 내 Bacillus cereus의 역할 탐색"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "cell-cell-communication"
        ],
        "tldr": "간세포암(HCC)에서 공간 멀티오믹스로 'stem-like lymphoid niches(SLN)'라는 새로운 면역 니치를 발견하고, 이것이 PD-1/PD-L1 차단 치료 반응과 강하게 연관됨을 규명.",
        "question": "HCC에서 기존 TLS(삼차 림프구조)의 기능적 이질성이 면역치료 반응 예측을 어렵게 하는데, 실제로 치료 효능을 결정하는 면역 니치는 무엇인가?",
        "key_result": "SLN은 기존 TLS와 달리 CD70+ 특수 니치를 특징으로 하며, PD-1/PD-L1 차단 치료에 더 강한 반응과 상관관계를 보임. 종양 내 Bacillus cereus가 SLN 형성을 조율하는 것으로 확인.",
        "why_for_us": "암 면역치료 반응의 공간 멀티오믹스 기반 예측, 종양 미세환경(TME) 내 면역 니치 분석은 랩의 cancer immunology(T cell exhaustion·TME·면역치료) 관심사와 직결됨.",
        "limitations": "초록에 샘플 수, 구체적 통계 수치, 검증 코호트 정보가 명시되지 않음. SLN의 인과적 역할 및 Bacillus cereus의 기전이 초록 수준에서 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatiotemporal AI-based modeling of gene regulation and variant effects in the developing human brain using Seal.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42881222/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42881222/",
        "doi": "https://doi.org/10.1038/s41593-026-02470-2",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Hao Y",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "26개 뇌 영역·30개 세포 유형·7개 발달 단계를 아우르는 전이학습 기반 게놈 AI 모델 Seal 개발",
          "Seal을 6개 신경정신질환 GWAS에 적용해 공유 및 질환별 특이적 조절 구조 비교",
          "Simons Simplex Collection ASD 코호트 전장유전체 데이터에서 de novo 조절 변이 부담 분석",
          "변이를 전사 조절인자와 연결하는 시공간적 기전 해석 제공"
        ],
        "concepts": [
          "brain-eqtl-grn",
          "caqtl",
          "cis-regulatory-element-mapping",
          "de-novo-variants",
          "brain-cell-type-vocabulary",
          "brain-region-map",
          "brain-cell-atlas",
          "colocalization",
          "atac-seq",
          "chromatin-accessibility",
          "cell-type-annotation"
        ],
        "tldr": "개발 중인 인간 뇌의 26개 영역·30개 세포 유형·7개 발달 단계에 걸쳐 유전 변이의 유전자 발현 및 조절 효과를 시공간 해상도로 예측하는 해석 가능 AI 전이학습 프레임워크 Seal을 개발.",
        "question": "유전 변이가 발달 중 인간 뇌의 유전자 조절에 미치는 영향을 시공간적으로 어떻게 해석할 수 있는가?",
        "key_result": "ASD 코호트에서 태아 흥분성 뉴런(transient fetal excitatory neurons)에서 de novo 조절 변이의 유의한 부담 확인; 6개 신경정신 질환 간 조절 구조의 공유·차별 패턴 식별; 세포 유형·발달 단계 특이적 변이 효과 해석 가능.",
        "why_for_us": "GWAS-기능유전체 통합, eQTL/caQTL, fine-mapping, 신경발달 단일세포 에피게놈 분석, ASD·SCZ 등 신경정신질환 연구 관심과 정확히 부합. de novo 변이·조절 요소 매핑·세포 유형 특이적 효과 분석 방법론으로 직접 활용 가능.",
        "limitations": "AI 예측 기반이므로 예측 변이 효과의 실험적 검증 필요; 데이터가 제한적인 태아 발달 단계에서 전이학습 일반화 한계 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A microexon regulatory code reveals autism-linked genetic variation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42875502/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42875502/",
        "doi": "https://doi.org/10.1038/s41586-026-11119-w",
        "journal": "Nature",
        "year": "2026",
        "author": "Parada GE",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "광범위한 트랜스크립톰 프로파일링을 통해 수백 개의 새로운 마이크로엑손을 발굴하고, 신경 아형 특이적 스플라이싱 패턴 및 NMD(nonsense-mediated mRNA decay) 활성화 마이크로엑손을 정의",
          "머신러닝 모델로 신경 마이크로엑손 스플라이싱을 예측하는 시퀀스 코드를 구축하고 핵심 조절 요소를 규명",
          "이 코드를 활용해 자폐증 환자 게놈에서 마이크로엑손 스플라이싱을 교란할 것으로 예측되는 희귀 변이를 발굴하고, 자폐 상태와의 연관성 분석 수행"
        ],
        "concepts": [
          "brain-isoform-diversity",
          "allele-specific-expression",
          "de-novo-variants",
          "brain-eqtl-grn"
        ],
        "tldr": "뇌 특이적 마이크로엑손의 전체 목록을 확장하고, 머신러닝으로 신경 마이크로엑손 스플라이싱 조절 코드를 해독한 뒤, 자폐증 환자에서 마이크로엑손 스플라이싱을 변화시킬 것으로 예측되는 희귀 유전 변이를 체계적으로 식별했다.",
        "question": "자폐증 뇌에서 마이크로엑손 스플라이싱이 광범위하게 교란된다고 알려져 있는데, 이를 유발하는 유전 변이와 조절 코드는 무엇인가?",
        "key_result": "희귀 변이가 마이크로엑손 스플라이싱에 가장 강한 영향을 미치는 것으로 추정되었으며, 이 변이들은 주로 특발성(idiopathic) 자폐 개인에서 검출되고 시냅스 유전자 및 기존에 자폐와 연관되지 않은 유전자에 집중되었다.",
        "why_for_us": "ASD 유전 변이 → sQTL(스플라이싱 QTL) 분석과 직결되며, 희귀 변이의 기능 해석, 뇌 특이적 RNA 스플라이싱 조절, fine-mapping과의 연계 측면에서 랩의 neuro/ASD 프로젝트 및 sQTL 방법론에 높은 참고 가치가 있다.",
        "limitations": "예측된 변이 영향은 ML 모델 기반 추정이며 대규모 실험적 검증은 제한적; 트랜스크립톰 프로파일링의 조직·세포 유형 커버리지 한계 가능성",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multi-omic profiling of 85 iPSC lines from familial dementia reveals cellular diversity and regulators of organoid development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42874591/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42874591/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.09.022",
        "journal": "Neuron",
        "year": "2026",
        "author": "Qi L",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "MAPT 변이 및 동질 유전체 대조군 85개 iPSC 라인에 대해 WGS, MAPT 좌위 장거리 시퀀싱, bulk/scRNA-seq, DNA 메틸레이션 어레이를 수행했다.",
          "단일세포 분석으로 4가지 재현성 있는 iPSC 상태와 이를 분리할 수 있는 표면 마커 후보를 확인했다.",
          "WGS로 의도치 않은 게놈 편집 이벤트 및 재발성 20q11.21 중복을 발견하고, 이것이 ID1 발현 증가 및 피질 오가노이드 패터닝 장애와 연관됨을 보였다.",
          "전사체 분석으로 오가노이드 품질과 연관된 경로, 클론 선택 및 편집과 연관된 변화를 규명했다."
        ],
        "concepts": [
          "dna-methylation",
          "batch-integration",
          "cell-type-annotation",
          "ambient-rna-and-doublets",
          "brain-isoform-diversity",
          "brain-cell-atlas"
        ],
        "tldr": "MAPT 변이를 가진 85개 iPSC 라인을 WGS·장거리 시퀀싱·scRNA-seq·DNA 메틸레이션 등 멀티오믹스로 체계적으로 분석해, iPSC의 세포 상태 다양성과 오가노이드 발달 조절인자를 규명했다.",
        "question": "가족성 치매 관련 MAPT 변이 iPSC 라인들 사이의 분자적 이질성이 어느 정도이며, 질환 생물학 시그널을 세포 상태·편집 아티팩트 등 기술적 변이로부터 어떻게 분리할 수 있는가?",
        "key_result": "20q11.21 중복이 ID1 발현 증가 및 오가노이드 피질 패터닝 손상과 연관되었으며, 4개의 재현성 있는 iPSC 상태가 단일세포 수준에서 확인되었다. 비변환 라인을 동질 대조군으로 사용할 필요성이 강조되었다.",
        "why_for_us": "멀티오믹스 통합(scRNA-seq, WGS, DNA 메틸레이션), 단일세포 분석, 신경 질환(familial dementia/AD 관련 MAPT) 도메인이 모두 랩의 핵심 관심사와 직결된다. iPSC 세포 상태 이질성 분석은 scRNA-seq QC·배치보정·세포 유형 어노테이션 방법론 측면에서도 참고 가치가 높다.",
        "limitations": "iPSC 라인이 특정 MAPT 변이에 한정되어 있어 다른 치매 유전자 변이로의 일반화에 제한이 있을 수 있다. 기능적 검증(오가노이드 표현형)은 일부 라인에만 수행된 것으로 보인다.",
        "reuse": "85개 iPSC 라인의 WGS·scRNA-seq·DNA 메틸레이션 데이터가 공개될 경우 MAPT 변이 연구 및 iPSC QC 벤치마킹에 활용 가능. 초록에 데이터 접근 방법 명시 없음.",
        "next_step": ""
      },
      {
        "title": "Genome-wide analysis of common structural variants in Alzheimer's disease identifies a risk-associated regulatory CCG repeat in FAM193B.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42864446/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42864446/",
        "doi": "https://doi.org/10.1038/s41593-026-02481-z",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Cao H",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "장거리 시퀀싱(n=11)과 단거리 시퀀싱(n=3,190) 중국인 코호트 데이터로 AD 관련 SV 게놈 전체 분석 수행",
          "공통 SV가 SNP와 독립적으로 AD 유전율에 기여함을 통계적으로 제시",
          "FAM193B 프로모터의 CCG 반복 확장과 AD 위험 간 게놈 전체 유의 연관(OR=2.20 per 10-repeat, P=5.5×10⁻⁸ 수준) 확인"
        ],
        "concepts": [
          "credible-set",
          "cross-ancestry-transferability",
          "colocalization",
          "cis-regulatory-element-mapping"
        ],
        "tldr": "장거리·단거리 시퀀싱을 결합해 알츠하이머병(AD)에서 구조변이(SV) 기여도를 게놈 전체 수준으로 분석하고, FAM193B 프로모터의 CCG 반복 확장이 AD 위험과 유의하게 연관됨을 발견.",
        "question": "일반 SNP 분석으로 설명되지 않는 AD 유전 위험 중 구조변이(특히 반복 확장)가 얼마나 기여하는가?",
        "key_result": "공통 SV가 SNP 독립적으로 AD 유전율에 기여하며, FAM193B 프로모터 CCG 반복 확장이 AD 위험 증가와 강하게 연관(OR=2.20 per 10-repeat 증가).",
        "why_for_us": "랩의 GWAS/fine-mapping·AD 관심 및 구조변이·반복 서열 분석(T2T 참조패널 관심사)과 직접 연관. SV가 heritability에 기여하는 실증 사례로 활용 가능.",
        "limitations": "중국인 집단에 국한된 분석으로 다른 조상 집단으로의 이전 가능성 불명확. 장거리 시퀀싱 샘플 수(n=11)가 매우 적음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cellular scaling laws in the mammalian brain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42880229/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42880229/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.044",
        "journal": "Cell",
        "year": "2026",
        "author": "Chen F",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "기존 전뇌 단세포 아틀라스 데이터를 재분석하여 영역별 세포 유형 수 vs. 뉴런 수 관계 도식화",
          "피질·소뇌(모듈 복제 방식 스케일링) vs. 시상하부·뇌간(세포 유형 다양화 방식 스케일링)의 이원 구조 이론 수립",
          "AI 모델 스케일링 법칙과의 유비 분석"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-cell-type-vocabulary",
          "brain-region-map",
          "cell-type-annotation"
        ],
        "tldr": "전뇌 세포 아틀라스 데이터를 바탕으로 포유류 뇌의 세포 다양성 분포를 '학습 서브시스템(피질·선조체·소뇌)'과 '조향 서브시스템(시상하부·담창구·뇌간)'으로 구분하는 스케일링 법칙 이론 프레임워크 제안.",
        "question": "뇌 영역별 신경세포 수와 세포 유형 다양성의 불균형을 어떻게 진화·기능적으로 설명할 수 있는가?",
        "key_result": "뇌세포 유형 다양성의 최고점은 피질·소뇌가 아닌 시상하부·뇌간 등 심부 피질하 구조; 학습/조향 서브시스템 이분법이 진화적 분기와 뇌 질환 병인 설명에 유용.",
        "why_for_us": "brain-cell-atlas, brain-cell-type-vocabulary 등 단세포 뇌 아틀라스 관련 개념 페이지와 연결되며, 신경정신질환(ASD, SCZ 등) 세포 유형 특이성 분석의 해석 틀로 활용 가능.",
        "limitations": "이론적 리뷰로 실험적 검증 데이터 제한적; 특정 질환과의 직접 연결은 추론 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Extracellular vesicle α-synuclein topology reveals disease-associated conformers in brain and blood.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42872588/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42872588/",
        "doi": "https://doi.org/10.1093/brain/awag356",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Dutta S",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "PD, DLB, MSA, 정상 대조군의 사후 뇌 조직에서 EV를 분리하고 단백체학(정량 질량분석), 전기화학발광, dSTORM 나노이미징으로 αSyn의 에피토프 노출 패턴과 세포 기원(L1CAM+ 뉴런, 글리아)을 분석함.",
          "혈청에서도 L1CAM+ EV를 분리하여 뇌 소견의 혈액 내 재현 가능성을 검증함."
        ],
        "concepts": [
          "alpha-synuclein-proteostasis",
          "affinity-proteomics"
        ],
        "tldr": "파킨슨병(PD), 루이체 치매(DLB), 다계통 위축증(MSA) 뇌 사후 조직 및 혈액에서 분리한 세포외소포(EV)의 α-시누클레인(αSyn) 에피토프 접근성과 위상(topology)이 질환 유형을 구별하는 분자적 지표임을 제시한다.",
        "question": "EV에 결합된 αSyn의 단순 총량이 아닌 구조적 형태(conformer)와 위상 정보가 시누클레인병증 아형을 감별하는 바이오마커가 될 수 있는가?",
        "key_result": "PD·DLB에서는 CD81 보정 총 αSyn 및 응집형 αSyn 비율이 L1CAM+ EV에서 증가; MSA에서는 총 EV-αSyn 증가 없이 잔기 34-45를 인식하는 N-말단 형태의 αSyn이 L1CAM+ EV 표면에 특이적으로 농축됨. 이 구조적 차이는 혈청 EV에서도 재현되어 혈액 기반 질환 층화에 활용 가능함을 시사.",
        "why_for_us": "프로테오믹스(EV 단백체 정량) 및 단일 소포 이미징 기법이 활용된 신경계 바이오마커 연구로, 랩의 신경질환(PD) 도메인 및 프로테오믹스 관심사와 직접 연결됨. αSyn 구조 기반 층화 개념은 멀티오믹스 통합 관점에서도 참고 가능.",
        "limitations": "사후 뇌 조직 기반이므로 ante-mortem 진행 경과 추적 불가; 혈청 코호트 규모가 초록에 명시되지 않아 검증력 불분명.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Embracing macrophage complexity for research and translation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42887498/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42887498/",
        "doi": "https://doi.org/10.1016/j.immuni.2026.09.015",
        "journal": "Immunity",
        "year": "2026",
        "author": "Ginhoux F",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "대식세포 동일성이 발달 기원·조직 니치·후성유전 이력·환경 신호의 통합에서 나온다는 관점을 제시",
          "단일세포 게놈·공간 프로파일링·후성유전체·in vivo 교란 실험·계산 모델링의 최신 성과를 종합",
          "대식세포 상태를 모듈식 유전자 프로그램의 조합으로 기술하는 프레임워크를 제안"
        ],
        "concepts": [
          "cell-type-annotation",
          "cell-cell-communication",
          "atac-seq",
          "chip-seq",
          "chromatin-accessibility",
          "differential-abundance"
        ],
        "tldr": "단일세포 게놈·공간·후성유전체 기술 발전을 바탕으로, 대식세포의 상태를 고정된 서브셋이 아닌 '모듈식 유전자 프로그램의 가중 조합'으로 이해해야 한다는 개념적 리뷰.",
        "question": "대식세포의 기능적 다양성을 어떻게 정의하고 치료 표적으로 활용할 수 있는가?",
        "key_result": "대식세포 상태는 이산적 라벨이 아닌 프로그램 활성의 연속적 조합으로 표현되며, 치료 개입은 질환 관련 상태 정의→ 표면 접근점 식별→ 공간·시간적 정밀도로 프로그램 재배선을 순서로 설계해야 한다고 주장.",
        "why_for_us": "단일세포 전사체·후성유전체 통합, 세포 상태 어노테이션, 세포-세포 커뮤니케이션 등 랩의 핵심 방법론과 직접 연결되며, 면역·신장·자가면역 도메인의 대식세포 분석 시 개념적 참고자료로 유용.",
        "limitations": "리뷰 논문으로 실험적 신규 데이터 없음; 모듈식 프레임워크의 구체적 계산 구현 방법은 제시되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multidimensional view of immunotherapy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42868990/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42868990/",
        "doi": "https://doi.org/10.1016/j.immuni.2026.09.016",
        "journal": "Immunity",
        "year": "2026",
        "author": "Yu J",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "면역관문억제제 이후 면역치료 혁신 동향을 여러 분야 연구자 관점에서 종합 정리",
          "암, 자가면역, 기타 질환에서의 면역치료 적용 사례 논의"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "car-t-in-autoimmunity",
          "car-t-solid-tumors",
          "b-cell-depletion-therapy"
        ],
        "tldr": "면역관문억제제(ICB) 도입 이후 암·자가면역 등 다양한 맥락에서 면역치료 전략이 어떻게 재구상되고 있는지 다학제적 관점에서 조망한 리뷰.",
        "question": "암과 자가면역을 포함한 다양한 질환 맥락에서 면역치료를 어떻게 재설계할 수 있는가?",
        "key_result": "면역치료 분야가 ICB를 넘어 다양한 질환 맥락으로 급속히 확장 중이며, 새로운 치료 전략들이 활발히 개발되고 있음.",
        "why_for_us": "암 면역(T세포 탈진·TME), 자가면역(RA·루푸스·CAR-T) 관련 랩 관심사와 직접 연결되는 리뷰 자료로 활용 가능.",
        "limitations": "특정 연구 데이터가 아닌 다학제적 논의 형식으로, 개별 전략의 근거 수준 평가가 어려울 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multi-omics atlas of chronic exercise.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42880284/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42880284/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.044",
        "journal": "Cell",
        "year": "2026",
        "author": "Maier G",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "마우스 8주 자발 휠 러닝 후 22개 조직·혈장 수집(활동기·비활동기 각각)",
          "Bulk RNA-seq, 대사체학, 단백질체학, 단핵 RNA-seq 및 단핵 메틸화 시퀀싱 수행",
          "세포유형별 메틸화-전사체 연계 분석으로 근섬유형 전환 추적",
          "머신러닝으로 포유류 종간 보존 운동 시그니처 동정"
        ],
        "concepts": [
          "dna-methylation",
          "bisulfite-sequencing",
          "differential-methylation",
          "co-expression-network-analysis"
        ],
        "tldr": "마우스 8주 자발 운동 모델에서 22개 조직·혈장을 대상으로 bulk RNA-seq, 대사체, 단백질체, 단핵 RNA·메틸화 시퀀싱을 통합해 운동의 전신 분자 지도를 작성한 멀티오믹스 아틀라스.",
        "question": "만성 운동이 조직·성별·일주기 위상에 따라 어떤 분자 경로를 통해 건강 효과를 매개하는가?",
        "key_result": "가장 큰 전사체 변화는 골격근에서 관찰; 시상하부·신장·폐를 제외한 대부분 조직은 활동기에 더 큰 변화; 여성은 더 광범위한 전사 반응과 뚜렷한 하향조절 패턴; 단핵 메틸화-전사체 통합으로 근섬유형 전환 특이적 세포 유형 규명; 근육에서 부분 메틸화 도메인의 성별 편향 후성유전 반응 확인.",
        "why_for_us": "멀티오믹스 통합(RNA-seq+proteomics+metabolomics+snRNA+snMethyl) 방법론과 세포유형별 후성유전 분석 파이프라인 설계에 참고 가능. 신장·노화 조직 데이터 포함.",
        "limitations": "마우스 모델로 인간으로의 직접 외삽 제한; 자발 운동으로 운동량 개체 간 편차 존재; 조직 수집 시점 제한으로 동역학적 변화 추적 한계.",
        "reuse": "초록에 명시 없음.",
        "next_step": "초록에 명시 없음."
      }
    ]
  },
  {
    "date": "2026-10-11",
    "count": 21,
    "papers": [
      {
        "title": "Mapping transcriptional responses to cellular perturbations with RNA fingerprinting.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42854686/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42854686/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.017",
        "journal": "Cell",
        "year": "2026",
        "author": "Grabski IN",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "단일세포 교란 실험 데이터에서 'fingerprint' 표현을 학습하고, 새 실험의 쿼리 세포를 후보 교란에 확률적으로 배정하는 RNA fingerprinting 프레임워크 개발",
          "Ground-truth 데이터셋으로 단일세포 해상도 배정 정확도, 게놈 규모 스크린 확장성, 복합 교란 분해 능력 벤치마크",
          "리보솜 스트레스 하 p53의 맥락 특이적 조절자 규명, 용량 의존 약물 작용 기전 특성화, 2차 인플루엔자 감염 시 사이토카인 구동 B세포 이질성 분석에 적용"
        ],
        "concepts": [
          "cis-regulatory-element-mapping",
          "co-expression-network-analysis",
          "cell-type-annotation",
          "allele-specific-expression"
        ],
        "tldr": "단일세포 수준에서 유전·화학적 교란(perturbation)에 대한 전사 반응을 레퍼런스 딕셔너리에 매핑하는 'RNA fingerprinting' 통계 프레임워크 개발",
        "question": "단일세포 데이터에서 관찰된 세포 상태를 어떤 교란(perturbation)이 유발했는지 확률적으로 추론할 수 있는가?",
        "key_result": "RNA fingerprinting은 단일세포 해상도에서 정확한 교란 배정을 달성하며, 게놈 전체 스크린으로 확장 가능하고 복합 교란도 분해 가능함; p53 조절자, 약물 기전, in vivo B세포 이질성 분석에서 생물학적 유용성 입증",
        "why_for_us": "단일세포 교란 데이터 해석, 특히 유전자 조절 네트워크 추론 및 세포 상태-교란 인과관계 규명에 직접 활용 가능한 방법론; sc-eQTL 또는 CRISPR 스크린 데이터 분석에 응용 가능",
        "limitations": "레퍼런스 딕셔너리의 품질과 커버리지에 크게 의존; 새로운 교란 유형이 레퍼런스에 없으면 배정 불가",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Dynamics of human cardiogenesis and its disruption in trisomy 21.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42844467/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42844467/",
        "doi": "https://doi.org/10.1038/s41586-026-11125-y",
        "journal": "Nature",
        "year": "2026",
        "author": "Cranley J",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "단일세포 + 공간 멀티오믹스를 결합해 발달 심장에서 21개 조직 니체를 정의",
          "컨텍스트 인식 니체 분류 도구 TissueTypist를 개발",
          "고해상도 공간 프로파일링으로 동방결절(sinoatrial node) 세포 아형 3종을 선형 축을 따라 분해",
          "심방·심실 심근세포의 성숙 궤적 및 지질-대사 전환 규명",
          "21번 삼염색체 심장과 정배수체 심장 비교 및 iPSC 유래 심근세포 검증"
        ],
        "concepts": [
          "cell-type-annotation",
          "cell-cell-communication",
          "batch-integration",
          "cell-clustering",
          "differential-abundance"
        ],
        "tldr": "단일세포·공간 멀티오믹스로 발달 중인 인간 심장의 21개 조직 니체를 정의하고, 21번 삼염색체 심장에서 compact 심근세포 결핍과 세포자멸 증가를 확인했다.",
        "question": "발달 중인 인간 심장의 세포 구성 및 공간적 조직은 어떻게 되어 있으며, 21번 삼염색체(다운증후군)에서는 어떻게 교란되는가?",
        "key_result": "21번 삼염색체 심장은 compact 심근세포가 결핍되고 세포자멸이 증가하며, iPSC 동질유전체 쌍에서 이를 재현 확인함.",
        "why_for_us": "단일세포 + 공간 멀티오믹스 통합 파이프라인(TissueTypist), 조직 니체 분류, 세포유형 궤적 분석 등의 방법론이 우리 랩의 멀티오믹스 통합 및 single-cell 분석 방법론에 직접 참고 가능.",
        "limitations": "심장 발달의 특정 시기(주로 1분기)에 초점이 맞춰져 있어 후기 발달 단계 정보가 제한적임.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Epigenetic aging and transposon dysregulation reflect size-related lifespan compression in dogs.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42848887/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42848887/",
        "doi": "https://doi.org/10.1126/science.aeb2986",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Mariner BL",
        "rating": 3,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "894마리 개에서 1640개 혈액 메틸롬을 수집하여 후성유전학적 시계(epigenetic clock) 구축",
          "인간 연령 연관 유전자의 오솔로그에서 개와 인간 간 프로모터 메틸화 변화의 보존성 분석",
          "체형(대형 vs 소형) 및 성별에 따른 메틸화 차이 지도화",
          "전이인자(TE) 부위 메틸화와 수명·체형 연관성 분석"
        ],
        "concepts": [
          "epigenetic-clock",
          "dna-methylation",
          "aging-genetics",
          "bisulfite-sequencing"
        ],
        "tldr": "개 1640개 메틸롬을 이용해 후성유전학적 시계를 개발하고, 체형과 성별에 따른 수명 차이가 전이인자(TE) 메틸화 및 X염색체 메틸화 변화와 연결됨을 보였다.",
        "question": "개에서 체형·성별에 따른 수명 차이가 분자 수준의 노화 속도 차이로 설명될 수 있는가?",
        "key_result": "대형·수컷 개(수명 짧음)에서 후성유전학적 노화 가속이 관찰됨. 성별 의존적 메틸화 변화는 X염색체에 집중, 체형 연관 메틸화 변화는 전이인자 부위에 두드러짐. 면역 경로 리모델링이 인간과 보존됨.",
        "why_for_us": "epigenetic clock, 전이인자 메틸화, aging-genetics 교차점으로, 랩의 DNA 메틸화·노화·후성유전체 관심에 직접 연결됨.",
        "limitations": "혈액 메틸롬만 사용하여 조직 특이적 효과 확인 불가; 인과관계(TE 메틸화 → 수명 단축) 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Shared patterns of human milk composition link mammary gland function to infant growth.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42848910/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42848910/",
        "doi": "https://doi.org/10.1126/science.aee7240",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Jauhal A",
        "rating": 3,
        "emoji": "⚗️",
        "domain": "대사체",
        "what_they_did": [
          "세 코호트 1,543개 샘플에서 HM 메타볼로믹스, 프로테오믹스, 미량·다량영양소, HMO 동시 측정",
          "궤적 모델링 및 멀티오믹 통합으로 HM 조성의 공유 축 도출",
          "Human Protein Atlas 기반 프로테오믹스 + 머신러닝으로 7개 유선 도메인 바이오마커 선정"
        ],
        "concepts": [],
        "tldr": "인간 모유(HM)를 멀티오믹스(메타볼로믹스·프로테오믹스·영양소·올리고당)로 분석하여 유선 기능 상태와 영아 성장을 연결하는 공유 조성 축을 발견하고, ML 기반으로 7개 바이오마커를 도출했다.",
        "question": "모유의 멀티오믹스 조성이 유선 기능 상태를 어떻게 반영하며, 이것이 영아 성장과 어떻게 연결되는가?",
        "key_result": "모성 보충제가 초기 성장 저하로부터의 회복을 개선했고, 모유 합성·장벽 무결성·면역/수복 활성을 반영하는 7개 단백질 바이오마커가 확인됐으며, valerylcarnitine 상승 및 pantothenic acid 감소가 유선 기능 상태와 영아 성장을 연결하는 대사 신호로 부상했다.",
        "why_for_us": "대규모 멀티오믹스 통합(메타볼로믹스+프로테오믹스) 파이프라인 및 머신러닝 바이오마커 선정 방법론이 랩의 멀티오믹스 통합 연구에 방법론적 참고가 될 수 있다.",
        "limitations": "모유라는 특수한 생물학적 매트릭스에 한정되어 있어 다른 조직/질환 컨텍스트로의 일반화가 제한적일 수 있다.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Prehistoric global migration of vanishing gut microbes with humans.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42844483/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42844483/",
        "doi": "https://doi.org/10.1038/s41586-026-11106-1",
        "journal": "Nature",
        "year": "2026",
        "author": "Carter MM",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "선사시대 인류 집단의 이동 경로와 현대 인류 집단의 장내 미생물 데이터를 통합 분석",
          "생활습관(산업화 vs 비산업화)에 따른 미생물 다양성 변화 추적",
          "소실 위기에 처한 장내 미생물 계통 동정"
        ],
        "concepts": [
          "alpha-diversity",
          "beta-diversity",
          "amplicon-vs-shotgun"
        ],
        "tldr": "고대 인류 이동과 함께 전파된 장내 미생물의 역사적 분포와 현대 생활습관에 의한 소실 패턴을 분석한 연구.",
        "question": "인류의 선사시대 이동 경로와 장내 미생물 군집의 진화적 공이동(co-migration) 패턴은 어떻게 연결되어 있는가?",
        "key_result": "초록에 세부 수치 명시 없음. 장내 미생물의 전 지구적 선사시대 이동 패턴 및 현대 생활습관에 의한 소실 경향 확인.",
        "why_for_us": "메타게노믹스·마이크로바이옴 연구 방법론 및 다양성 분석에 관심 있는 랩에서 인류 집단유전학과 마이크로바이옴 공진화 연구의 배경 지식으로 활용 가능.",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Next-generation immune cell engagers for B cell depletion in autoimmune diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42844361/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42844361/",
        "doi": "https://doi.org/10.1038/s41573-026-01534-z",
        "journal": "Nature reviews. Drug discovery",
        "year": "2026",
        "author": "Fu Y",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "CD19·BCMA 등 B세포/형질세포 계열 항원을 표적하는 다양한 ICE 포맷(BiTE, 트리특이적 등) 설계 원리 정리",
          "혈액암에서의 ICE 임상 경험(내성, 독성, CRS)을 자가면역 적용 시 시사점과 연계",
          "CD19·BCMA 지향 T세포 인게이저의 SLE·SSc 등 전신 자가면역질환 초기 임상 결과 검토",
          "CD8 편향 T세포 참여, 공동자극 다중특이적 포맷, NK/γδT세포 동원 등 신흥 전략 논의"
        ],
        "concepts": [
          "b-cell-depletion-therapy",
          "b-cell-tolerance-autoreactivity",
          "car-t-in-autoimmunity",
          "extrafollicular-b-cell-response",
          "cytokine-signaling-networks"
        ],
        "tldr": "자가면역질환에서 병원성 B세포를 제거하기 위한 차세대 면역세포 인게이저(ICE) 기술을 리뷰. T세포·NK세포·γδT세포·골수세포 동원 전략, 타깃 선택, 독성 관리, 임상 초기 결과를 망라함.",
        "question": "CAR-T의 오프더쉘프 대안으로서 ICE가 자가면역질환의 B세포 고갈에 어떻게 적용될 수 있으며, 혈액암 경험에서 무엇을 배울 수 있는가?",
        "key_result": "CD19/BCMA 지향 T세포 인게이저는 여러 전신 자가면역질환에서 지속적인 임상 개선을 초기 보고로 확인; ICE는 CAR-T 대비 오프더쉘프 이점이 있으나 CRS·면역 이펙터 기능부전·불완전 표적세포 제거가 남은 과제.",
        "why_for_us": "autoimmune(RA·루푸스) B세포 고갈 치료 전략과 직결; 랩의 B_cell_in_RA 및 car-t-in-autoimmunity 연구 방향에 핵심 배경.",
        "limitations": "리뷰 논문; ICE의 자가면역 임상 데이터는 아직 소규모 초기 보고 수준; 자가면역 특이적 B세포 이질성 대응 전략은 미성숙.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial omics resolves adrenergic and mesenchymal cell states in neuroblastoma.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42849441/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42849441/",
        "doi": "https://doi.org/10.1016/j.ccell.2026.09.008",
        "journal": "Cancer cell",
        "year": "2026",
        "author": "Patel AG",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "54개 신경모세포종 종양에 sc/snRNA-seq, bulk RNA-seq, 공간전사체학(spatial transcriptomics), 공간단백질체학(spatial proteomics) 수행",
          "기존 세포주 유래 ADRN/MES 시그니처의 환자 종양 적용 한계를 확인하고, 조기 계대 PDX로부터 새 시그니처 개발",
          "전사체·후성유전체·단백질체·초미세구조·기능 검증으로 MES 세포 동정 검증",
          "임상·유전·조직학적 특성에 걸친 종양 내외 세포 이질성 체계적 분석"
        ],
        "concepts": [
          "cancer-evolution-single-cell",
          "cell-type-annotation",
          "cell-clustering",
          "cell-cell-communication"
        ],
        "tldr": "신경모세포종 54개 종양에 scRNA-seq, 공간전사체학, 공간단백질체학을 적용해 ADRN/MES 세포 상태를 재정의하고, PDX 기반 새 시그니처로 환자 종양 내 MES 세포를 처음으로 신뢰성 있게 동정. MES 발현 높을수록 예후 불량.",
        "question": "신경모세포종 환자 종양에서 세포주 기반 ADRN/MES 시그니처가 실제로 작동하는가, 그리고 MES 세포가 실제 환자 종양에 존재하는가?",
        "key_result": "PDX 기반 시그니처로 환자 종양 내 MES 세포 첫 신뢰성 있는 동정 성공; MES 유전자 발현 高 → 무사건생존율·전체생존율 모두 불량; 종양 세포는 면역·기질 세포와 구분된 공간적 니치 점유.",
        "why_for_us": "scRNA-seq + 공간오믹스 + 멀티오믹스 통합(전사체·후성유전체·단백질체) + 암 세포 이질성 분석이 랩 관심 방법론과 직접 부합. cancer single-cell atlas 구축 방법론 참조 가능.",
        "limitations": "PDX 기반 시그니처가 모든 신경모세포종 아형을 포괄하는지 불명확; 공간오믹스 해상도 한계; 인과적 MES 전환 메커니즘은 추가 연구 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "LAG3 checkpoint function and its mechanism of action in therapeutic targeting.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42855599/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42855599/",
        "doi": "https://doi.org/10.1038/s41577-026-01359-2",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "Jiang Y",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "LAG3 하위 신호 전달 경로(tonic signaling, 유비퀴틴화 의존 스위치, TCR 근접 억제)를 종합 정리",
          "T세포 기능 저하(exhaustion)에서 LAG3의 역할 및 다른 억제 수용체와의 관계 분석",
          "현재 임상에서 사용 중이거나 개발 중인 LAG3 표적 치료제 및 바이오마커 전략 검토"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "cancer-immune-escape-hla"
        ],
        "tldr": "LAG3의 신호 전달 기전, T세포 기능 억제 메커니즘, 치료 항체의 작용 원리, 바이오마커 전략을 종합적으로 정리한 리뷰",
        "question": "LAG3는 어떤 분자 기전으로 T세포를 억제하며, LAG3 차단 항체는 어떻게 작동하는가?",
        "key_result": "LAG3는 tonic signaling, 리간드 유도 유비퀴틴화 의존 신호 전환, LAG3-TCR 근접 억제라는 세 가지 핵심 기전으로 T세포를 억제함; 이를 바탕으로 종양 면역 및 자가면역에서의 치료 적용 방향 제시",
        "why_for_us": "T세포 exhaustion 및 암 면역 탈출 메커니즘 연구, 특히 TME에서 면역치료 타깃으로서 LAG3의 역할 이해에 유용한 리뷰",
        "limitations": "리뷰 논문이므로 새로운 실험 데이터는 없음; LAG3 하위 신호의 많은 부분이 아직 미완전하게 규명됨",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A preinvasive regulatory T cell axis for lung cancer interception.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42844481/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42844481/",
        "doi": "https://doi.org/10.1038/s41586-026-11066-6",
        "journal": "Nature",
        "year": "2026",
        "author": "Gamble S",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "자가형광 기관지경·CT로 모니터링한 전침습 폐병변 환자의 다중오믹스 교차조직 면역 프로파일링 수행",
          "고등급 전악성 기도 병변에서 BATF 발현 eTreg 세포 축적 및 혈액 내 클론성 관련성 확인",
          "마우스 발암물질 유도 모델에서 PI3Kδ 억제를 통한 eTreg 축 차단 실험 수행",
          "CT 스크리닝으로 발견된 조기 NSCLC 환자에서 eTreg 회로와 빠른 진행의 연관성 분석"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "cancer-immune-escape-hla",
          "cell-cell-communication"
        ],
        "tldr": "폐암 전침습 단계에서 BATF+ 이펙터 조절 T세포(eTreg)가 혈액·기도·림프절에 걸쳐 클론성 네트워크를 형성하며, PI3Kδ 억제로 이 축을 차단하면 종양 발생을 억제할 수 있음.",
        "question": "비소세포폐암의 전침습(preinvasive) 단계에서 T세포 조절 네트워크는 어떻게 재편되며, 이를 치료적으로 차단할 수 있는가?",
        "key_result": "고등급 전악성 병변에서 BATF+ eTreg 세포 축적 확인; 순환 eTreg이 전침습 진행과 함께 단계적으로 증가; PI3Kδ 억제로 eTreg 풍부 미성숙 삼차 림프구 구조(iTLS) 형성 억제, 폐 종양 발생률 및 크기 감소.",
        "why_for_us": "암 면역학(T세포 소진·TME) 및 단일세포 다중오믹스 방법론에 관심 있는 랩에서 전침습 단계의 면역조절 기전과 theranostic 바이오마커 발굴 전략으로 참고 가능.",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Intestinal epithelial GSK3β governs fumarate-dependent neutrophil reprogramming to promote colorectal cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42839060/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42839060/",
        "doi": "https://doi.org/10.1038/s43018-026-01253-9",
        "journal": "Nature cancer",
        "year": "2026",
        "author": "He XS",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "마우스 대장암 모델과 멀티오믹스 프로파일링(전사체·후성유전체·대사체)을 통해 GSK3β-fumarate-TIN 축 규명",
          "GSK3β의 핵 내 기능: 히스톤 H1FX 인산화 → 프로테아좀 분해 → 해당계 유전자의 크로마틴 접근성 증가",
          "Lactate에 의한 fumarate hydratase lactylation → 종양 내 fumarate 축적 → KDM2B 억제 → H3K36me2 상승 → TIN 면역억제 재프로그래밍",
          "GSK3β 억제제 tideglusib와 checkpoint blockade 병합 전임상 실험"
        ],
        "concepts": [
          "chromatin-accessibility",
          "ferroptosis",
          "cancer-immunity-cycle",
          "cancer-associated-fibroblasts"
        ],
        "tldr": "대장암에서 장 상피 GSK3β가 fumarate 축적을 통해 종양 침윤 호중구(TIN)를 면역억제성 T3 표현형으로 후성유전학적 재프로그래밍시키고, GSK3β 억제제(tideglusib)가 면역관문억제제 병합 효능을 높인다.",
        "question": "대장암 종양 미세환경에서 장 상피 GSK3β가 호중구 극성화를 어떻게 조절하며, 이를 치료적으로 차단할 수 있는가?",
        "key_result": "GSK3β 억제 시 T3 호중구 극성화 감소 및 면역관문억제제 병합 효과 증강(전임상 CRC 모델); T3 TIN은 FTH1·PD-L1 발현으로 페롭토시스 저항 및 면역 회피 부여",
        "why_for_us": "대장암 TME·면역치료 내성 연구와 연결되며, 대사-후성유전 축이 면역세포 상태 전환을 조절한다는 관점은 멀티오믹스 통합 분석 프레임에 활용 가능",
        "limitations": "전임상(마우스) 모델 위주; 인간 CRC에서 동일 축 검증 필요; fumarate 측정의 세포 특이적 해상도 한계",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cancer competition for vitamin B2 creates metabolic checkpoint for T cell ferroptosis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42838046/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42838046/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.020",
        "journal": "Cell",
        "year": "2026",
        "author": "Chen H",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "CareSLCs 플랫폼을 구축하여 T세포 항종양 기능에 필수적인 SLC 수송체 스크리닝 수행",
          "SLC52A3 의존적 VB2 흡수가 T세포 생존에 필수임을 유전자 넉아웃 모델로 검증",
          "VB2 결핍 시 미토콘드리아 호흡 장애 → 글루타티온 재생 억제 → 미토파지/유리철 축적 → 지질 과산화 → 페로토시스 경로 규명",
          "종양이 SLC52A2로 VB2를 선점해 T세포와 경쟁함을 동계 마우스 모델에서 확인",
          "임상 데이터에서 종양 SLC52A2 발현과 T세포 기능 저하·불량 생존 상관관계 분석",
          "VB2 보충 또는 SLC52A3 과발현이 CAR-T세포 효능을 향상시킴을 실증"
        ],
        "concepts": [
          "ferroptosis",
          "cancer-immunity-cycle",
          "cytokine-signaling-networks"
        ],
        "tldr": "종양세포가 비타민 B2(VB2)를 SLC52A2를 통해 선점함으로써 T세포에서 페로토시스를 유발하고 항암면역을 억제하는 대사 체크포인트를 규명한 연구",
        "question": "종양-T세포 간 대사 경쟁에서 비타민 B2 수송체가 T세포 기능 억제의 핵심 매개체인가?",
        "key_result": "종양 SLC52A2 제거 시 면역적격 마우스에서 T세포 기능 향상; 고종양 SLC52A2 발현은 T세포 기능 저하·불량 예후와 연관; VB2 보충/SLC52A3 과발현이 CAR-T 항종양 효능 증대",
        "why_for_us": "암 면역학·T세포 탈진·TME 대사 경쟁 분야에 해당하며, 대사-면역 축 멀티오믹스 연구(대사체학, 면역세포 기능 유전체학)와 접점이 있음",
        "limitations": "주로 마우스 및 in vitro 실험 기반; 임상 VB2 보충 개입의 효능·안전성 미검증",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Decoding epithelial-mesenchymal transitions with multi-omics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42834121/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42834121/",
        "doi": "https://doi.org/10.1038/s41576-026-01015-4",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Narwade N",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "EMT 연구에 적용된 단일세포 및 공간 오믹스 기술의 발전 현황을 정리",
          "머신러닝, 네트워크 모델링, 멀티오믹스 통합 계산 방법론을 리뷰",
          "바이오마커 발굴 및 중개 응용 측면에서의 과제와 기회를 논의"
        ],
        "concepts": [
          "cell-type-annotation",
          "batch-integration",
          "co-expression-network-analysis",
          "differential-methylation",
          "dna-methylation",
          "atac-seq",
          "chip-seq"
        ],
        "tldr": "EMT의 중간 상태와 세포 이질성을 단일세포·공간 오믹스 및 멀티오믹스 통합으로 체계적으로 해석하는 최신 리뷰.",
        "question": "EMT의 연속적·이질적 세포 상태를 전사체·후성유전체·단백질체·대사체 수준에서 어떻게 통합적으로 이해할 수 있는가?",
        "key_result": "단일세포·공간 플랫폼과 계산 프레임워크의 융합이 EMT 연구의 복잡도를 해소하는 핵심 접근임을 제시; 구체적 수치는 리뷰 특성상 제시되지 않음.",
        "why_for_us": "멀티오믹스 통합, 단일세포 기술, 공간전사체 분석 방법론이 랩의 핵심 관심사와 직결되며, 암·섬유화 관련 EMT 맥락은 cancer 및 nephro 분야 응용에도 참고 가능.",
        "limitations": "리뷰 논문으로 원데이터 없음; 특정 질환 맥락에서의 검증 연구는 원문 인용에 의존.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Alzheimer's disease target and drug discovery by leveraging multiomics and electronic health data.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42850312/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42850312/",
        "doi": "https://doi.org/10.1038/s41593-026-02472-0",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Hou Y",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "다수의 AD GWAS 및 기능성 멀티오믹스 데이터셋(eQTL, pQTL 등)에 Mendelian Randomization을 적용해 약물화 가능한 표적을 탐색",
          "EPHX2의 보호 미스센스 변이(p.Arg287Gln)를 발굴하고, AD 환자 유래 iPSC 뉴런 및 대뇌 오가노이드에서 기능 검증 수행",
          "5xFAD 마우스 모델에서 EPHX2 약리학적 억제 후 인지 개선 효과 확인",
          "11만 1,680명의 경도인지장애 환자 EHR을 분석해 AD 발생 감소와 연관된 기존 약물 12개 동정"
        ],
        "concepts": [
          "colocalization",
          "drug-target-genetics",
          "epistasis"
        ],
        "tldr": "AD GWAS + 다중오믹스 데이터에 MR을 적용해 신규 약물 표적 19개(유럽계), 7개(아프리카계)를 발굴하고, EPHX2 억제가 AD 보호적임을 iPSC 뉴런·오가노이드·마우스 모델로 검증. 전자건강기록(EHR) 데이터로 트라조돈 등 12개 기존 약물이 AD 위험 감소와 연관됨을 추가 확인.",
        "question": "AD GWAS 신호를 기능성 멀티오믹스·MR·EHR과 통합하면 실제 임상에서 쓸 수 있는 약물 표적을 찾을 수 있는가?",
        "key_result": "MR로 유럽계 19개, 아프리카계 7개 약물 표적 발굴; EPHX2 억제는 iPSC 뉴런에서 pTau-181 감소 및 5xFAD 마우스 인지 개선; 트라조돈(ADRA1A 표적)·바클로펜(GABBR1 표적) 등 12개 약물이 AD 발생률 감소와 연관.",
        "why_for_us": "GWAS→MR→멀티오믹스(eQTL/pQTL)→기능 검증→EHR 연계의 전형적인 계산유전체학·통계유전학 파이프라인. AD 도메인 + drug target genetics + MR 방법론 모두 랩 핵심 관심사.",
        "limitations": "MR은 인과 추론이지만 교란 변수 완전 배제 불가; EHR 분석은 처방 편향·혼란 변수 존재; 단일 기관 동물 모델에서만 검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Prenatal stress reprograms placental signaling and opposes maternal immune activation effects in the fetal brain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42844313/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42844313/",
        "doi": "https://doi.org/10.1038/s41380-026-03914-8",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Verosky BG",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "마우스 만성 스트레스 모델에서 태반 단일세포 RNA-seq 수행 → 면역세포의 인터페론 신호 억제 및 영양막세포의 산화적 인산화 하향조절 확인",
          "Poly(I:C) MIA 모델과 스트레스 모델을 교차하여 태반-태아 뇌 전사체를 매칭 비교",
          "태아 뇌에서 WGCNA로 DNA 수선·시냅스·번역 네트워크가 스트레스와 MIA에 의해 반대 방향으로 조절됨을 도출",
          "인간 태반 RNA-seq에서 지각 스트레스 수준과 연관된 크로마틴 조절·RNA 대사·세포외기질 모듈 확인"
        ],
        "concepts": [
          "co-expression-network-analysis",
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "cytokine-signaling-networks",
          "brain-body-immune-circuits"
        ],
        "tldr": "산전 심리사회적 스트레스와 모체 면역 활성화(MIA)가 태반을 통해 태아 뇌 발달에 미치는 영향을 마우스 단일세포 RNA-seq·전사체·사이토카인 프로파일링과 인간 태반 RNA-seq으로 해부. 두 자극이 공유 신경발달 경로를 반대 방향으로 조절함을 발견.",
        "question": "산전 스트레스와 MIA는 태반을 통해 태아 뇌에 어떤 분자적 기전으로 영향을 미치며, 두 자극의 효과는 수렴하는가 발산하는가?",
        "key_result": "스트레스는 조기 성숙 시그니처를 촉진하고 MIA는 복제 스트레스를 유도하며, 두 자극이 공유 신경발달 경로(시냅스, DNA 수선)를 반대 방향으로 조절. 인간 태반에서 스트레스-연관 전사 프로그램이 마우스와 보존됨.",
        "why_for_us": "ASD·MDD 등 신경발달/정신질환 관련 산전 환경 요인 연구에 단일세포 전사체 + 매칭 벌크 전사체 + WGCNA 통합 분석 파이프라인 참고. 뇌-면역 상호작용 맥락에서도 관련.",
        "limitations": "마우스 모델 기반; 인간 데이터는 관찰적이며 인과관계 확립 불가; 태반 단일세포 데이터와 태아 뇌 벌크 데이터의 해상도 차이.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Association between polygenic liability to depression and lifetime depression in at-risk adolescents.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42839001/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42839001/",
        "doi": "https://doi.org/10.1038/s41380-026-03917-5",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Byrne EM",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "호주 브리즈번 두 종단 인구집단 코호트 메가분석(MDD 302명, 대조 1,693명)",
          "14세 내면화 증상 상위 10% 집단 정의 후 성인기 평생 MDD(CIDI 기반)와의 연관성 분석",
          "PGC 최신 우울증 GWAS 요약통계(호주 코호트 제외)로 MD-PGS 산출",
          "내면화 고위험군 내에서 PGS 최상위 10%와 나머지 90%를 비교하여 추가적 위험 층화 검증"
        ],
        "concepts": [
          "aging-genetics",
          "family-history-gwas"
        ],
        "tldr": "청소년기에 내면화 증상이 높은 집단에서 주요우울증 다유전자위험점수(MD-PGS)가 성인기 MDD 발병 위험을 추가적으로 층화해 줄 수 있음을 두 종단 코호트 메가분석으로 입증.",
        "question": "청소년기 내면화 증상과 주요우울증 PGS를 결합하면 성인기 MDD 발병 위험을 더 정밀하게 예측할 수 있는가?",
        "key_result": "14세 내면화 증상 상위 10%는 나머지 대비 평생 MDD 오즈비 2.56(95% CI 1.92–3.49, p=5.4×10⁻¹⁰); 해당 고위험군 내에서도 MD-PGS 상위 10%가 추가적으로 MDD 위험을 유의하게 높임",
        "why_for_us": "PRS 기반 위험 층화 방법론이 MDD 도메인에 직접 적용된 사례로, 랩의 PRS·GWAS·MDD 관심 분야와 직접 연결됨",
        "limitations": "호주 단일 민족 코호트 위주로 ancestral diversity 부족; 자기보고 증상 척도와 CIDI 진단 간 이질성; PGS 설명력 제한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Imputation of fluid intelligence scores reduces ascertainment bias and increases power for analyses of common and rare variants.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42834203/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42834203/",
        "doi": "https://doi.org/10.1038/s41588-026-02787-5",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "van den Berg DM",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "UK Biobank 내 다양한 유동 지능 측정치를 통합하고 미측정 개체에 대해 FI를 유전적으로 임퓨테이션",
          "임퓨테이션 표현형과 실측 FI의 유전적 유사성을 extensive validation으로 검증",
          "측정+임퓨테이션 합산 샘플(>455,000명)로 공통 SNP GWAS 수행: 유의 독립 연관 SNP 390→550개로 증가",
          "희귀변이 분석(FDR<1%)으로 26개 유의 유전자 확인, 이 중 8개는 지능·신경발달 연관 선행증거 없는 신규 유전자",
          "외부 코호트에서 희귀변이 집합 복제"
        ],
        "concepts": [
          "family-history-gwas",
          "cross-ancestry-transferability",
          "de-novo-variants"
        ],
        "tldr": "UK Biobank에서 유동 지능(FI) 점수를 미측정 개체에 대해 대리 표현형 대입(imputation)하여 GWAS 표본 크기를 ~27만→45.5만으로 늘리고 희귀변이 분석에서 새로운 신경발달 관련 유전자를 발굴한 연구",
        "question": "표현형 임퓨테이션을 통해 지능 GWAS의 검정력을 높이고 희귀 신경발달 유전자를 추가로 발굴할 수 있는가?",
        "key_result": "유의 공통 SNP 연관 390→550개로 증가; 희귀변이 분석에서 26개 유전자 유의(FDR<1%), 이 중 8개 신규; 표현형 임퓨테이션이 참여자 선택 편향(ascertainment bias) 완화에 기여",
        "why_for_us": "표현형 임퓨테이션을 활용한 GWAS 검정력 증대 전략은 랩의 GWAS/QTL/PRS 방법론에 직접 응용 가능; 신경발달·인지 유전체학 연구와 neuro 도메인 관심사와 연관",
        "limitations": "임퓨테이션 표현형에 비인지적 신호 잔존 가능성; UK Biobank 단일 코호트 기반으로 앤세스트리 다양성 제한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Maternal-fetal type I interferon signaling drives TREM2 dysregulation and synaptic dysfunction in neurodevelopmental disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42190661/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42190661/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.04.043",
        "journal": "Neuron",
        "year": "2026",
        "author": "Bizzotto M",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "poly(I:C) 모체 면역 활성화 마우스 모델에서 자손 해마 단세포 전사체 프로파일링",
          "자손 미세아교세포의 TREM2 발현 및 식세포 기능 분석",
          "조현병 환자 사후 조직에서 IFN-I 시그니처 확인",
          "모체 IFN-I 차단 실험으로 시냅스 결함 및 TREM2 기능 회복 검증"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "cytokine-signaling-networks",
          "autoinflammatory-interferonopathies",
          "cgas-sting-regulation"
        ],
        "tldr": "임신 중 면역 활성화(poly(I:C))로 유발된 모체 1형 인터페론이 자손 해마에서 TREM2 발현 저하와 시냅스 기능 이상을 일으키며, 이를 차단하면 회복 가능함을 밝힘.",
        "question": "임신 중 감염에 의한 모체 1형 인터페론 신호가 자손 뇌 발달과 신경면역 상호작용에 어떤 영향을 미치는가?",
        "key_result": "Poly(I:C) 자손 미세아교세포에서 TREM2 발현 감소 및 IFN-I 반응 억제 확인; 조현병 환자 조직에서도 IFN-I 시그니처 둔화 관찰; 모체 IFN-I 차단 시 시냅스 결함 및 TREM2 기능 회복.",
        "why_for_us": "신경발달장애(ASD, SCZ) 및 뇌 면역(microglia) 관련 단일세포 전사체 분석, 유전자 발현 궤적 분석이 랩의 neuro 관심사와 연결됨. TREM2는 AD와도 연관된 핵심 뇌면역 유전자.",
        "limitations": "마우스 모델 의존; 인간에서 인과관계 직접 검증 어려움; 조현병 외 다른 신경발달 장애로의 일반화 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Hepatic expression of APOE3 Christchurch mitigates APOE4-related Alzheimer's disease pathologies in mice.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42097136/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42097136/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.04.027",
        "journal": "Neuron",
        "year": "2026",
        "author": "Tang JY",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "APP/PS1-APOE4 마우스에 AAV를 이용한 간 특이적 APOE3Ch 또는 APOE3 발현 유도",
          "Aβ 부담, 신경염증 마커, 신경퇴행, 인지 기능을 다양한 assay로 평가",
          "단핵구 및 간세포의 Aβ 클리어런스 용량 분석"
        ],
        "concepts": [
          "brain-body-immune-circuits",
          "aging-genetics",
          "drug-target-genetics"
        ],
        "tldr": "APOE4를 발현하는 AD 마우스 모델에서 간에 AAV 매개 APOE3 Christchurch(APOE3Ch) 변이체를 전달하면 Aβ 부담, 신경염증, 인지 장애가 감소함을 확인.",
        "question": "간 유래 APOE3Ch 단백질이 혈액을 통해 뇌로 전달되어 APOE4 관련 AD 병리를 완화할 수 있는가?",
        "key_result": "간 APOE3Ch 발현 시 뇌 내 Aβ 부담 감소, 신경염증·신경퇴행·인지 손상 약화; 단핵구·간세포의 Aβ 클리어런스 증가가 기전으로 제시.",
        "why_for_us": "APOE4는 AD GWAS의 최대 위험 유전자로, 간-뇌 축과 말초 면역세포(단핵구)를 통한 Aβ 클리어런스 기전은 뇌-체순환 면역 회로(brain-body-immune-circuits) 연구와 연결. AD 병리 모델 유전자 전략 참고 가능.",
        "limitations": "마우스 동물 모델 한계; APOE3Ch의 인간 임상 적용까지 안전성·약동학 검증 필요; AAV 간 전달 효율의 인간 번역 가능성 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Immunoregulatory gene GIMAP6 suppresses lethal atherosclerotic vasculopathy and ischemic heart failure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42849439/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42849439/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.032",
        "journal": "Cell",
        "year": "2026",
        "author": "Xiang C",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "Gimap6 결손 마우스에서 혈관병증·죽상경화·심부전 표현형 규명",
          "미토콘드리아 ROS-PPARγ-CD36 경로를 통한 폼세포 형성 및 IL-6/MCP-1/TNF 염증 메커니즘 분석",
          "인간 GIMAP6 기능저하 변이(아프리카계 V65I 포함)와 단핵구 표현형·ASCVD 연관성 분석"
        ],
        "concepts": [
          "autoinflammatory-disease-genetics",
          "efferocytosis"
        ],
        "tldr": "면역조절 유전자 GIMAP6의 결손이 고지혈증 없이도 혈관 염증·죽상경화증·심부전·조기 사망을 유발함을 마우스 모델에서 규명. 사람에서 GIMAP6 기능저하 변이(아프리카계 V65I 포함)가 단핵구 산화환원 이상 및 CD36 매개 지질 흡수 증가, 조기 ASCVD와 연관.",
        "question": "면역조절 유전자 GIMAP6가 심혈관계 항상성 유지에 어떤 역할을 하며, 인간 유전 변이와 ASCVD 위험이 연관되는가?",
        "key_result": "Gimap6 KO 마우스는 정상 지질 조건에서도 혈관 장벽 손상, 폼세포 형성, 심근경색, 조기 사망 발생; 인간 V65I 변이 보유자에서 CD36 매개 지질 흡수 증가 및 조기 ASCVD 연관 확인.",
        "why_for_us": "인간 유전 변이(기능저하 변이)와 면역세포 표현형·질환 연관을 연결하는 유전체-면역 통합 분석. 조상별(African ancestry) 변이 분석과 GWAS 맥락에서 참고 가능.",
        "limitations": "마우스 모델 결과의 인간 적용 한계; V65I 변이의 인과성 검증을 위한 대규모 유전 연구 부재; 혈관 표현형 세부 기전 일부 미확인.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A guide to B cell metabolism.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42844382/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42844382/",
        "doi": "https://doi.org/10.1038/s41577-026-01355-6",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "Yazicioglu YF",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "B세포 발달(골수 내 commitment → 말초 항상성 → 활성화 → 형질세포/기억세포 분화) 전 과정의 대사 경로 변화를 문헌 기반으로 체계적으로 정리",
          "BCR 신호·PI3K·mTOR 등 신호전달 네트워크와 대사 경로의 연계 기술",
          "B세포 악성종양, 자가면역질환, 선천성 면역 결핍, B세포 친화성 감염에서의 대사 이상 사례 검토"
        ],
        "concepts": [
          "b-cell-development-genetics",
          "b-cell-tolerance-autoreactivity",
          "b-cell-depletion-therapy",
          "cytokine-signaling-networks"
        ],
        "tldr": "B세포의 발달·활성화·분화 전 과정에 걸친 대사 리프로그래밍을 체계적으로 정리한 리뷰. 골수 발달에서 형질세포 분화까지, 그리고 악성종양·자가면역·감염에서의 B세포 대사 이상을 망라한다.",
        "question": "B세포는 발달 및 기능 수행 단계별로 어떤 독자적 대사 전략을 사용하며, 이 대사 조절의 이상이 질환에 어떻게 기여하는가?",
        "key_result": "B세포는 T세포 등 타 면역세포와 구별되는 기계론적으로 독특한 대사 전략(예: 형질세포의 고강도 분비를 위한 ER 스트레스-대사 연계)을 보유하며, 공간·시간적 영양소 환경이 이를 조율함을 보임.",
        "why_for_us": "자가면역(RA·루푸스) B세포 연구 및 B세포 고갈 치료 맥락에서 B세포 대사 이해는 새로운 타깃 발굴에 유용. B_cell_in_RA 및 autoimmune 관련 프로젝트에 배경 지식 제공.",
        "limitations": "리뷰 논문이므로 신규 실험 데이터 없음; 일부 대사 경로는 마우스 모델 기반 증거에 의존.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Temporal assessment of spatial and single-cell transcriptomes identifies CD226-NECTIN2 T cell-cholangiocyte interaction in bile duct inflammation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42833310/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42833310/",
        "doi": "https://doi.org/10.1016/j.jhep.2026.09.021",
        "journal": "Journal of hepatology",
        "year": "2026",
        "author": "Jördens MS",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "10·20·40주령 NOD.c3c4 수컷 마우스 간에서 공간전사체 및 scRNA-seq 수행",
          "CellphoneDB를 이용한 T세포 관련 세포 상호작용 분석",
          "CD226-NECTIN2 상호작용을 in vitro 공배양 실험 및 항체 차단으로 기능 검증",
          "인간 PSC·PBC·ALD 간 explant에서 공간전사체와 면역형광으로 인간 관련성 확인"
        ],
        "concepts": [
          "cell-cell-communication",
          "cell-type-annotation",
          "batch-integration",
          "differential-abundance"
        ],
        "tldr": "NOD.c3c4 마우스 담도 염증 모델에서 공간전사체와 scRNA-seq을 결합해 T세포-담관세포 간 CD226-NECTIN2 상호작용을 발굴하고 인간 PSC/PBC에서 검증.",
        "question": "담도 염증(PSC, PBC)에서 T세포와 담관세포 간 어떤 세포-세포 상호작용이 병인에 핵심적인가?",
        "key_result": "공간전사체와 scRNA-seq 통합으로 CD226-NECTIN2 T세포-담관세포 상호작용 발굴; Nectin2 knockdown 및 항-CD226 차단이 T세포 활성화를 선택적으로 감소시킴; 인간 질환 조직에서 CD226-NECTIN2 공동 위치 확인.",
        "why_for_us": "공간전사체 + scRNA-seq 통합 파이프라인 및 CellphoneDB 기반 세포-세포 상호작용 분석이 랩의 단일세포 멀티오믹스 방법론과 직결. 자가면역/염증 맥락 분석 참고 가능.",
        "limitations": "마우스 모델 중심으로 인과 관계를 인간에서 직접 검증하기 어려움; 수컷 마우스만 사용하여 성별 편향 존재.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-10-06",
    "count": 40,
    "papers": [
      {
        "title": "Human genetics implicates a BACH2-NRF2 axis in fetal haemoglobin activation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816612/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816612/",
        "doi": "https://doi.org/10.1038/s41586-026-11113-2",
        "journal": "Nature",
        "year": "2026",
        "author": "Guo CJ",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "28,279명 다조상 HbF GWAS 수행, 12개 유전체 영역에서 91개 조건부 독립 연관 신호 확인",
          "신규 연관 영역에서 rs1010474-C 변이가 BACH2 발현을 감소시키고 HbF를 증가시킴을 확인",
          "BACH2 직접 교란(perturbation)/억제 실험으로 HbF 발현 증가 확인",
          "NRF2 크로마틴 점유와 γ-글로빈 활성화 촉진 기전 규명",
          "γ-글로빈 프로모터의 BACH2/NRF2 결합 모티프 선택적 편집으로 독립적 조절 확인"
        ],
        "concepts": [
          "colocalization",
          "credible-set",
          "cis-regulatory-element-mapping",
          "allele-specific-expression"
        ],
        "tldr": "28,279명 대규모 다조상 GWAS로 태아 헤모글로빈(HbF) 조절 유전자좌 91개 독립 신호를 발굴하고, BACH2-NRF2 축이 BCL11A와 독립적으로 γ-글로빈을 조절함을 규명했다.",
        "question": "HbF 발현을 조절하는 유전적 변이와 그 기전은 무엇이며, BCL11A 이외의 새로운 치료 표적이 존재하는가?",
        "key_result": "rs1010474-C(BACH2 locus)가 BACH2 발현 감소 및 HbF 증가와 연관됨. BACH2 손실 시 NRF2 크로마틴 점유 증가→γ-글로빈 활성화 촉진. BACH2-NRF2 축은 BCL11A와 독립적으로 작동.",
        "why_for_us": "대규모 다조상 GWAS + 파인매핑 + 기능 검증의 모범 사례; HbF QTL 신호 해석 및 cis-regulatory element 분석 방법론으로 참고 가치 높음.",
        "limitations": "인과 변이의 세포유형 특이적 기능은 추가 검증 필요; 임상 적용 가능성은 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "X and Y chromosomes as determinants of aging and disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42821693/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42821693/",
        "doi": "https://doi.org/10.1126/science.aeh0145",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Dubal DB",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "X염색체 불활성화 탈출, X 재활성화, X 모계 기원 효과, X-skew, Y 소실 등 성염색체 생물학의 최신 기전을 통합 리뷰",
          "마우스 모델, 인간 코호트, 단일세포·후성유전체 등 신기술 데이터를 통합하여 호르몬 효과와 염색체 효과를 분리",
          "노화, 신경질환, 면역, 암, 심대사 질환 영역에서 성염색체의 역할 논의"
        ],
        "concepts": [
          "aging-genetics",
          "epigenetic-clock",
          "dna-methylation"
        ],
        "tldr": "성염색체(XX/XY)가 호르몬과 독립적으로 세포 자율적 방식으로 노화·면역·신경·암·심대사 질환에 미치는 영향을 종합한 리뷰",
        "question": "성별 차이는 성호르몬만으로 설명되는가, 아니면 성염색체 자체가 세포 자율적으로 노화와 질환에 독립적으로 기여하는가?",
        "key_result": "X염색체 불활성화 탈출 유전자, Y 연결 유전자 기능, Y 소실(LOY) 등이 면역 신호, 후성유전 프로그래밍, 대사 스트레스 반응에 독립적으로 영향을 미침이 다수 연구에서 지지됨",
        "why_for_us": "aging-genetics, 후성유전체(epigenetic clock), 면역·자가면역 관련 성차 연구, GWAS에서 성별 층화 분석의 필요성과 직결되며, 랩의 노화·유전·다오믹스 관심사에 부합",
        "limitations": "리뷰 논문으로 개별 연구의 인과관계 한계를 직접 해결하지 않음; 호르몬 효과와 염색체 효과를 완전히 분리하기 어려운 실험적 한계 존재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "ArchMap is a web-based platform for reference-based analysis of single-cell datasets.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816602/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816602/",
        "doi": "https://doi.org/10.1038/s41588-026-02756-y",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Lotfollahi M",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "노코드(no-code) 웹 기반 플랫폼 ArchMap 개발",
          "Human Cell Atlas 등 다수의 공개 레퍼런스 아틀라스와 통합하여 자동 매핑·세포 유형 주석 기능 제공",
          "협업 기능 및 아틀라스 확장 기능 포함"
        ],
        "concepts": [
          "cell-type-annotation",
          "cell-atlas",
          "batch-integration",
          "brain-cell-atlas"
        ],
        "tldr": "ArchMap은 코딩 없이 단일세포 데이터를 공개된 레퍼런스 아틀라스에 매핑하고, 세포 유형 주석 및 협업 분석까지 자동화해 주는 웹 플랫폼이다.",
        "question": "단일세포 레퍼런스 매핑에 필요한 계산 전문 지식을 낮춰 더 많은 연구자가 아틀라스 기반 분석에 접근할 수 있을까?",
        "key_result": "단일세포 데이터를 레퍼런스 아틀라스에 자동 매핑하고 세포 유형을 주석하는 올인원 파이프라인을 웹 인터페이스로 제공, 계산 장벽 제거 및 접근성 민주화 달성",
        "why_for_us": "랩의 단일세포(scRNA/snRNA/ATAC/Multiome) 분석 파이프라인에서 새 데이터를 공개 아틀라스에 매핑하거나 세포 유형을 주석할 때 직접 활용 가능한 도구",
        "limitations": "웹 기반 플랫폼이므로 대규모 데이터 처리 속도나 커스텀 파이프라인 확장성에 한계가 있을 수 있음; 초록에 벤치마크 수치 없음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A human single-cell atlas identifies OLR1",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42806145/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42806145/",
        "doi": "https://doi.org/10.1038/s41588-026-02774-w",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Papachristoforou E",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "건강 42명·CLD 35명의 간 조직에서 649,295개 세포에 대한 단일세포 RNA-seq atlas 구축",
          "125개 전사체 구별 세포 상태(cellular states) 분류",
          "질환 단계에서 확장되는 TREM2+ 대식세포 두 가지 유형 규명",
          "섬유화 연관 세포 OLR1 표지 집단 동정 및 치료 타깃 가능성 제시"
        ],
        "concepts": [
          "cell-atlas",
          "cell-type-annotation",
          "batch-integration",
          "cell-type-deconvolution",
          "differential-abundance"
        ],
        "tldr": "만성 간질환(CLD) 환자 35명 및 건강 대조 42명의 649,295개 세포를 포함한 간 단일세포 atlas를 구축하고, 섬유화 진행을 주도하는 TREM2+ 대식세포 하위 유형과 OLR1 양성 세포 집단을 동정함.",
        "question": "만성 간질환에서 섬유화를 주도하는 특정 대식세포 하위집단은 무엇이며, 이를 어떻게 단일세포 atlas로 규명할 수 있는가?",
        "key_result": "649,295개 세포, 125개 세포 상태에서 두 종류 TREM2+ 대식세포 하위군이 CLD에서 확장되며 OLR1이 섬유화 핵심 마커로 동정됨.",
        "why_for_us": "대규모 단일세포 atlas 구축 방법론(세포 상태 분류, 배치 통합, 세포유형 주석)이 우리 랩의 scRNA-seq 파이프라인에 직접 적용 가능; 멀티오믹스 통합 분석 참고.",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Computational approaches for multimodal lineage tracing.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42151571/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42151571/",
        "doi": "https://doi.org/10.1038/s41576-026-00969-9",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Wang K",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "계통 재구성, 궤적 추론, 조상 상태 추정, 세포 상태 전환 분자 프로그램 식별 등 최신 계산 방법론 종합 조사",
          "멀티오믹스 단일세포 데이터와 계통 정보 통합 분석 접근법 비교 정리",
          "딥러닝 기반 분석 모델 및 고해상도 계통 추적 기술 전망 검토"
        ],
        "concepts": [
          "cell-atlas",
          "cell-type-annotation",
          "batch-integration",
          "differential-abundance",
          "co-expression-network-analysis"
        ],
        "tldr": "단일세포 멀티오믹스와 유전자 계통 추적(lineage tracing)을 결합한 다중모달 분석의 최신 계산 방법론을 종합적으로 리뷰.",
        "question": "다중모달 계통 추적 데이터를 분석하는 계산 프레임워크의 현 수준과 발전 방향은 무엇인가?",
        "key_result": "계통 해상도 단일세포 멀티오믹 데이터 분석을 위한 계산 툴킷이 급속 확장; 딥러닝·고해상도 기술이 세포 운명 결정 연구의 완전한 정량적 이해를 가능하게 할 전망.",
        "why_for_us": "단일세포 멀티오믹스 통합 분석, 궤적 추론, 세포 상태 분석 방법론 전반이 랩 핵심 관심사와 직결.",
        "limitations": "리뷰 논문으로 실험적 검증 없음; 기술 발전 속도로 인해 일부 내용 빠르게 구식화 가능.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Deep learning perturbation models can outperform baselines on calibrated metrics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42823510/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42823510/",
        "doi": "https://doi.org/10.1038/s41587-026-03307-w",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Miller HE",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "14개 데이터셋·18개 메트릭에 걸쳐 기존 벤치마크 메트릭(MSE, Pearson Δ 등)의 calibration 문제를 분석",
          "positive control baseline 및 메트릭 보정 프레임워크를 새로 도입",
          "보정된 메트릭 하에서 DL 섭동 모델과 uninformative baseline 성능을 비교"
        ],
        "concepts": [],
        "tldr": "딥러닝 기반 유전자 섭동 예측 모델이 기존 벤치마크에서 baseline을 못 이긴다고 알려진 문제를, 메트릭 보정(calibration) 프레임워크로 재평가하면 실제로는 DL 모델이 baseline을 능가한다는 것을 보여줌.",
        "question": "딥러닝 유전자 섭동 모델이 uninformative baseline 대비 실제로 예측력이 없는가, 아니면 평가 메트릭이 잘못 설계된 것인가?",
        "key_result": "보정된 메트릭 기준으로 DL 기반 유전자 섭동 모델은 uninformative baseline을 능가함; 기존 벤치마크의 부정적 결론은 메트릭 miscalibration에 기인함.",
        "why_for_us": "single-cell perturbation 예측 및 유전자 기능 분석 관련 DL 도구 선택 시, 벤치마크 결과의 신뢰성 평가에 직접 활용 가능. 섭동 모델 평가 방법론 자체가 랩의 멀티오믹스·QTL 분석 파이프라인 도구 선택에 참고될 수 있음.",
        "limitations": "실제 어떤 생물학적 태스크에서 DL이 얼마나 이기는지 세부 결과 초록에 불충분; 모델 해석 가능성에 대한 논의 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Prefibrotic bone marrow microenvironment is a hallmark of clonal hematopoiesis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816584/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816584/",
        "doi": "https://doi.org/10.1038/s41590-026-02668-3",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Aguilar-Navarro AG",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "신선 분리 골수 샘플에서 단일세포 전사체 프로파일링 수행",
          "조직학적 분석 및 공간전사체 분석 병행",
          "섬유아세포, 중간엽세포, 혈관세포 등 비조혈 세포 집단의 전사 상태 변화 분석"
        ],
        "concepts": [
          "cancer-associated-fibroblasts",
          "cell-cell-communication",
          "differential-abundance",
          "cellular-senescence"
        ],
        "tldr": "클론성 조혈(CHIP)이 골수 미세환경을 섬유-염증 방향으로 리모델링함을 단일세포 전사체+공간전사체 분석으로 밝혔다.",
        "question": "클론성 조혈(CHIP)은 골수 미세환경을 어떻게 변화시키는가?",
        "key_result": "CHIP에서 섬유아세포가 크게 확장되고 암-관련 섬유아세포(CAF) 유사 전사 상태 획득; 중간엽·혈관세포에서 콜라겐 생산 및 세포외기질 리모델링 경로 상향; 공간전사체로 섬유 풍부 구역과 CXCL12 발현 세포 공존 확인",
        "why_for_us": "단일세포 전사체·공간전사체·차등 세포 조성 분석 방법론 모두 랩 관심 영역; 면역-기질 상호작용(cell-cell communication) 및 노화-관련 염증(inflammaging) 맥락에서 참고 가능",
        "limitations": "초록이 일부 잘림; 인과 관계보다 연관성 기반; CHIP 유형별 세부 분석 결과 확인 불가",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-allele nanoscale mapping of regulatory variants.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42827183/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42827183/",
        "doi": "https://doi.org/10.1038/s41588-026-02776-8",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Hamley JC",
        "rating": 5,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "Micro Capture-C를 기반으로 한 variant-to-function 플랫폼(MCCv)을 개발하여 단일 대립유전자 수준의 나노스케일 염색질 3D 구조를 분석",
          "면역 매개 염증 질환 연관 cis-regulatory element 405개를 CD4+ T세포 등 면역세포에서 조사",
          "이형접합 변이들을 위상(phase) 결정하여 조절 변이와 대립유전자 불균형 유전자 발현을 직접 연결",
          "게놈 편집 후 염색질 상호작용 변화를 직접 판독하는 검증 실험 수행"
        ],
        "concepts": [
          "caqtl",
          "allele-specific-expression",
          "cis-regulatory-element-mapping",
          "chromatin-accessibility",
          "colocalization",
          "credible-set",
          "atac-seq"
        ],
        "tldr": "단일 대립유전자 수준의 나노스케일 염색질 구조 분석 기반 플랫폼(MCCv)을 개발하여, 면역 매개 염증 질환 관련 cis-regulatory element 405개에서 변이→표적 유전자 연결 및 대립유전자별 발현 불균형을 직접 규명하였다.",
        "question": "비코딩 게놈에 위치한 수백만 개 유전 변이 중 실제 기능적 인과 변이를 어떻게 단일 대립유전자 수준에서 정확히 동정하고 표적 유전자와 연결할 수 있는가?",
        "key_result": "405개 cis-regulatory element에서 단일 대립유전자 수준의 염색질 구조 변화를 포착하고, 변이가 표적 유전자 발현에 미치는 영향을 대립유전자 특이적으로 규명하는 데 성공함. 게놈 편집 후 염색질 상호작용 변화도 직접 확인.",
        "why_for_us": "caQTL·eQTL fine-mapping 및 cis-regulatory element 기능 규명, allele-specific expression 분석과 직결되는 핵심 방법론. 면역 질환 관련 비코딩 변이의 기능적 해석에 즉시 적용 가능하며, 우리 랩의 GWAS→기능 검증 파이프라인의 중요한 참고 프레임워크.",
        "limitations": "초록에 처리량(throughput) 한계, 비용, 특정 세포 유형 적용 범위 등에 대한 상세 기술 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Written in development and lost in ageing: the grammar of cellular identity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816559/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816559/",
        "doi": "https://doi.org/10.1038/s41586-026-10955-0",
        "journal": "Nature",
        "year": "2026",
        "author": "Yücel AD",
        "rating": 4,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "Waddington의 epigenetic landscape를 확장하여 '세포 정체성 탈정렬(decanalization)' 노화 모델 제안",
          "PRC2 억제와 H3K4/36 메틸화·RNAPII 결합 간 길항적 크로마틴 경로를 분석",
          "체세포 유사분열 조직에서 연령 관련 DNA 메틸화 증가가 PRC2 결합 저메틸화 영역에 집중됨을 보임",
          "범포유류 후성유전체 노화 시계의 보존성을 모델로 설명"
        ],
        "concepts": [
          "epigenetic-clock",
          "dna-methylation",
          "chromatin-accessibility",
          "aging-genetics",
          "cellular-senescence",
          "atac-seq"
        ],
        "tldr": "노화를 발달 과정에서 기록된 크로마틴 문법(PRC2 등 다층적 조절 구조)이 유지 메커니즘의 불완전성으로 인해 점진적으로 소실되는 세포 정체성 탈정렬 현상으로 이론화했다.",
        "question": "노화의 기계론적 기반을 발달-후성유전학적 관점에서 통합적으로 설명할 수 있는가?",
        "key_result": "연령 관련 DNA 메틸화 증가의 대부분이 PRC2 결합 저메틸화 영역에서 발생; 발달 시기와 수명 간 상관, 조직 간 노화 서명 공유를 단일 이론 틀로 설명",
        "why_for_us": "epigenetic clock·DNA methylation·chromatin accessibility·aging genetics 모두 랩 관심 주제; 후성유전체 노화 시계 해석 및 노화-질환 연구의 이론적 배경으로 직접 활용 가능",
        "limitations": "리뷰/이론 논문으로 새로운 실험 데이터 제시 없음; 인과 개입 실험 검증 부재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Sugar-rich foods exacerbate antibiotic-induced microbiome disruption.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816625/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816625/",
        "doi": "https://doi.org/10.1038/s41586-026-11077-3",
        "journal": "Nature",
        "year": "2026",
        "author": "Dai A",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "조혈모세포 이식 입원 환자 173명의 식사 9,419끼를 정밀 기록",
          "158명의 페어드 종단 마이크로바이옴 샘플에 Bayesian inference 적용하여 식이-마이크로바이옴 관계 분석",
          "항생제 노출 중 당류·과자 섭취와 α-diversity 및 Enterococcus 증식 연관성 평가",
          "마우스 실험으로 수크로스 보충이 항생제 유도 Enterococcus 증식에 미치는 영향 검증"
        ],
        "concepts": [
          "alpha-diversity",
          "compositional-data-analysis"
        ],
        "tldr": "조혈모세포 이식 입원 환자 173명의 9,419끼 식사를 정밀 추적하고 장내 마이크로바이옴 변화를 분석하여, 항생제 복용 중 당류 섭취가 마이크로바이옴 교란을 악화시킴을 규명.",
        "question": "항생제 사용 중 식이 구성, 특히 당류 섭취는 장내 마이크로바이옴 교란의 정도에 영향을 주는가?",
        "key_result": "항생제 노출 중 당류·과자류 섭취는 α-diversity 감소 및 병원성 Enterococcus의 더 큰 증식과 연관. 마우스 모델에서도 수크로스 보충이 항생제 유도 Enterococcus 증식을 증가·연장시킴.",
        "why_for_us": "마이크로바이옴 α-diversity, 종단 동태, Bayesian 모델링 접근법은 랩의 metagenomics 관심 영역과 연결. 임상 코호트 기반 식이-마이크로바이옴 연동 분석 설계 참고 가능.",
        "limitations": "단일 기관(이식 환자) 코호트로 일반화 제한. 인과관계 확립을 위해 독립 코호트 검증 필요(저자들도 언급).",
        "reuse": "",
        "next_step": "독립 코호트에서 결과 일반화 및 마이크로바이옴 보호 중재 평가 제안(저자 명시)"
      },
      {
        "title": "Microbiome signatures linked to cancer and treatment adverse events in a real-world cohort.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42810338/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42810338/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.009",
        "journal": "Cell",
        "year": "2026",
        "author": "Yang L",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "Mayo Clinic 실세계 혼합암 코호트(암환자 1,364명, 건강대조 287명)를 구성하고 장내 미생물 메타게놈 분석 수행",
          "동반질환, 인구통계, 임상 변수를 보정하는 프레임워크를 적용해 5개 암 클래스에서 341개 암 연관 종 동정",
          "조기발병 유방암에서 담즙산·C. scindens 감소, 조기발병 대장암에서 젖산·Veillonella parvula 증가 확인",
          "Anaerostipes hadrus의 dihydropyrimidine dehydrogenase 인코딩이 5-FU 유발 설사에 보호적임을 발견"
        ],
        "concepts": [
          "beta-diversity",
          "alpha-diversity",
          "compositional-data-analysis",
          "activity-metabolomics"
        ],
        "tldr": "Mayo Clinic 다암종 코호트(암환자 1,364명+대조 287명)에서 암 유형별 장내 미생물 시그니처와 치료 부작용 관련 종을 체계적으로 규명함.",
        "question": "다양한 암 유형에서 장내 미생물 시그니처가 암 특이적인지, 아니면 동반질환·인구통계 요인에 의한 비특이적 연관인지 어떻게 구분할 수 있는가?",
        "key_result": "5개 암 클래스에서 341개 암 연관 미생물 종 규명; 조기발병 암에서 담즙산·젖산 대사 차이; 5-FU 부작용에 미생물 효소 연관.",
        "why_for_us": "멀티오믹스 통합(미생물+대사체) 및 암-미생물 연관 분석 방법론이 우리 랩의 메타게놈·멀티오믹스 통합 연구에 참고 가능.",
        "limitations": "실세계 코호트 특성상 인과관계 해석의 한계; 다양한 암종 혼재로 암 특이적 효과 해석에 주의 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Targeting the aldosterone-mineralocorticoid receptor pathway in cardiovascular-kidney-metabolic syndrome.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42806023/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42806023/",
        "doi": "https://doi.org/10.1038/s41581-026-01125-6",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Sánchez-Bayuela T",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "CKM 증후군의 병태생리(만성 염증, 산화 스트레스, 섬유화)를 알도스테론-MR 축 과활성 관점에서 통합 정리",
          "스테로이드성 MRA와 비스테로이드성 MRA(피네레논 등)의 기전·안전성·임상 결과를 비교 서술",
          "알도스테론 합성효소 억제제의 전임상·임상 데이터를 요약하고 병용 전략의 가능성을 논의"
        ],
        "concepts": [
          "complement-system",
          "egfr-and-albuminuria"
        ],
        "tldr": "CKM(심혈관-신장-대사) 증후군에서 알도스테론-MR 경로가 핵심 병태생리 드라이버이며, 비스테로이드성 MRA(피네레논) 및 알도스테론 합성효소 억제제가 심신장 보호 효과를 보인다는 리뷰.",
        "question": "CKM 증후군에서 알도스테론-미네랄코르티코이드 수용체(MR) 경로를 표적으로 하는 치료 전략은 어떤 기전과 임상 근거를 갖는가?",
        "key_result": "피네레논은 CKD 및 심부전 환자에서 심혈관·신장 사건을 유의미하게 감소시켰으며, 스테로이드성 MRA 대비 조직 선택성 개선 및 부작용 감소를 보임. 알도스테론 합성효소 억제제는 저항성 고혈압 및 CKD에서 유망한 결과를 보임.",
        "why_for_us": "CKD·신장 도메인 연구(nephro)에 해당하며, CKD 진행의 분자 기전과 치료 표적 이해에 배경 지식으로 활용 가능. 향후 CKD 관련 유전체(GWAS/QTL) 연구에서 알도스테론-MR 경로 유전자를 후보로 검토할 때 참고 가능.",
        "limitations": "리뷰 논문으로 독립적 신규 데이터 없음; 비당뇨성 CKD, 저항성 고혈압 등에서의 병용 효능은 진행 중인 임상시험 결과 대기 중.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "DNA methylation signatures distinguish gout from asymptomatic hyperuricaemia and converge with genetic risk at immune-metabolic loci.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42810907/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42810907/",
        "doi": "https://doi.org/10.1016/j.ard.2026.07.001",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Chen Z",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "통풍(n=124), 무증상 고요산혈증(n=121), 정상 요산 대조군(n=124)의 말초혈액에서 genome-wide targeted bisulfite sequencing으로 DNA 메틸화 프로파일링 수행",
          "발견 코호트(n=83)에서 DMR·DMC 동정 후 GWAS 위험 유전자좌 및 전사인자 결합 부위와 통합 분석",
          "독립 코호트(n=286)에서 targeted amplicon methylation sequencing으로 후보 서명 검증",
          "LASSO 로지스틱 회귀로 메틸화 단독 및 임상·후성유전 통합 분류 모델 구축"
        ],
        "concepts": [
          "dna-methylation",
          "bisulfite-sequencing",
          "differential-methylation",
          "colocalization",
          "cis-regulatory-element-mapping"
        ],
        "tldr": "통풍과 무증상 고요산혈증을 DNA 메틸화 서명으로 구별하고, GWAS 위험 유전자좌와의 수렴을 확인한 후 메틸화 기반 분류 모델을 구축함.",
        "question": "같은 고요산혈증이라도 통풍 발병 여부에 따라 말초혈액 DNA 메틸화 패턴이 어떻게 다르며, 이를 분자적 층화에 활용할 수 있는가?",
        "key_result": "DMR이 HLA-DRB1, TAP2, GNAS 등 통풍/혈청요산 GWAS 위험 유전자좌에 매핑됨; 메틸화 단독 모델의 통풍 vs 정상대조 AUC 0.96, 통풍 vs 비통풍 0.91; 메틸화+임상변수 통합 시 통풍 vs 고요산혈증 AUC 0.67→0.87(DeLong P=0.018).",
        "why_for_us": "DNA 메틸화(mQTL/epigenetic clock 관심)·GWAS 위험 유전자좌와의 colocalization·분류 모델 구축 등 랩의 핵심 방법론이 직접 적용되는 사례. HLA 위험 유전자좌의 메틸화 수렴도 HLA/nephro-autoimmune 관심과 연계됨.",
        "limitations": "말초혈액 메틸화만 측정해 조직-특이적 변화 반영 불가; 전향적 검증이 부재해 임상 적용에 한계; 인과관계(메틸화 → 발병) 미확립.",
        "reuse": "검증된 113개 DMC 목록 및 LASSO 분류기 가중치를 확보하면 다른 자가면역 질환 또는 신장 질환 메틸화 연구에 직접 활용 가능.",
        "next_step": ""
      },
      {
        "title": "A two-hit mechanism triggers autoimmune hair loss.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816609/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816609/",
        "doi": "https://doi.org/10.1038/s41586-026-11098-y",
        "journal": "Nature",
        "year": "2026",
        "author": "Cui J",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "모낭 성장기(anagen) vs 휴지기(telogen)에 Treg 세포 일시 고갈 후 탈모 유도 여부 비교",
          "교감신경 절제 및 광유전학적 교감신경 활성화 실험으로 신경 활성이 취약성 결정에 관여함을 입증",
          "HFSCs에서 ADRB2 매개 노르아드레날린 신호와 ERV 활성화 연관성 규명",
          "Aim2 유전자 결손 및 ERV 역전사 억제제로 질환 예방 가능성 확인"
        ],
        "concepts": [
          "b-cell-tolerance-autoreactivity",
          "cgas-sting-regulation",
          "autoinflammatory-interferonopathies"
        ],
        "tldr": "조절 T세포 고갈과 교감신경 활성화라는 두 가지 타격이 동시에 작용해야 자가면역 탈모가 유발되며, 이 과정에서 모낭줄기세포 내인성 레트로바이러스(ERV) 활성화가 핵심 매개체임을 규명했다.",
        "question": "자가면역 조직 특이 질환이 시작되기 위해 어떤 조건들이 동시에 갖춰져야 하는가?",
        "key_result": "anagen 기간에만 Treg 고갈이 CD8+ T세포 의존적 HFSC 파괴를 유도. 교감신경 활성화→ADRB2→HFSC ERV 활성화→AIM2 선천면역→CD8+ T세포 병리 경로 확인. Aim2 결손 또는 ERV 억제제 투여 시 질환 억제.",
        "why_for_us": "HERV/ERV 재활성화와 자가면역 발병의 직접 연결 고리를 보여주는 기전 연구; 랩의 HERV-자가면역 관심사 및 Treg 생물학과 직결됨.",
        "limitations": "마우스 모델 한정; 인간 원형탈모증에서 동일 기전 여부는 미확인.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Obexelimab for the Treatment of IgG4-Related Disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42233621/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42233621/",
        "doi": "https://doi.org/10.1056/NEJMoa2601337",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Della-Torre E",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "IgG4-RD 활성기 환자 194명을 obexelimab 250 mg 피하주사(주 1회) vs. 위약군으로 1:1 무작위 배정, 52주 추적",
          "글루코코르티코이드를 8주 내 표준 감량·중단 후 첫 재발까지 시간(primary endpoint) 분석",
          "완전 관해율, 글루코코르티코이드 누적 구제 용량 등 주요 이차 지표 평가"
        ],
        "concepts": [
          "b-cell-tolerance-autoreactivity",
          "b-cell-depletion-therapy",
          "antibody-fc-effector-functions"
        ],
        "tldr": "IgG4 관련 질환(IgG4-RD) 환자를 대상으로 한 3상 임상시험에서 obexelimab(CD19×FcγRIIb 이중특이 항체)이 질환 재발을 유의하게 감소시켰다.",
        "question": "B세포를 고갈시키지 않고 활성을 억제하는 obexelimab이 IgG4-RD의 장기 관해 유지에 효과적인가?",
        "key_result": "Obexelimab군 재발률 26.8% vs. 위약군 54.6% (HR 0.44, 95% CI 0.28–0.71, P<0.001); 완전 관해 37.1% vs. 19.6% (P=0.005); 글루코코르티코이드 구제 용량 329.5 mg vs. 929.8 mg (P=0.004).",
        "why_for_us": "FcγRIIb(ITIM 경로)를 통한 B세포 음성 조절 기전은 랩의 자가면역 B세포 내성·자가반응성, FcγRIIB 관련 아이디어와 직접 연결됨; B세포 표적 치료의 임상 증거로 활용 가능.",
        "limitations": "52주 추적으로 장기 안전성·효능 미확인; IgG4-RD에 국한된 결과로 다른 자가면역 질환에 외삽 필요; 관절통 등 이상반응 빈도 차이 존재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Enhanced lipolysis in synovial fibroblasts mark early pathogenic changes in RA-risk individuals.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42215375/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42215375/",
        "doi": "https://doi.org/10.1016/j.ard.2026.05.005",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Jiménez-Martínez M",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA-risk(자가항체 양성 전임상), RA, OA, 비염증 대조군의 SF를 분리하여 전사체 프로파일 비교",
          "지질방울(LD) 함량 및 리폴리시스 속도 측정, 지방분해효소(ATGL) 억제 실험",
          "G0S2 발현 조작(과발현)으로 SF 표현형 변화 확인"
        ],
        "concepts": [
          "cancer-associated-fibroblasts"
        ],
        "tldr": "RA 위험군(자가항체 양성, 임상 발현 전) 활막섬유아세포(SF)에서 지질방울 리폴리시스 항진과 G0S2 발현 저하가 조기 대사 변화로 확인됨.",
        "question": "임상적 관절염이 없는 RA 위험 단계에서 활막섬유아세포의 지질 대사 이상이 이미 존재하는가?",
        "key_result": "RA 및 RA-risk SF 모두 대조군 대비 LD 함량 감소; G0S2 발현 저하에 의한 리폴리시스 항진이 원인; G0S2 과발현 시 골수계 세포 지지 SF 표현형 감소; ATGL 억제로 LD 감소 복원 가능.",
        "why_for_us": "RA 조기 발병 기전 연구(autoimmune 도메인) 및 SF 표현형과 대사 연결 축 이해에 유용. 전사체 분석 방법론도 참고 가능.",
        "limitations": "소규모 환자 코호트; in vitro SF 배양 시스템의 생체 내 대표성 한계; 인과관계 확립 미흡.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Unraveling the tapestry: Lessons from multi-omics and spatial biology in hepatocellular cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41678777/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41678777/",
        "doi": "https://doi.org/10.1097/HEP.0000000000001716",
        "journal": "Hepatology (Baltimore, Md.)",
        "year": "2026",
        "author": "Massoudi D",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "HCC에 적용된 spatial transcriptomics, spatial proteomics, spatial genomics, spatial epigenomics, spatial metabolomics 기술들을 체계적으로 리뷰",
          "침윤 경계부(invasive margin), 대식세포·섬유아세포 니치, 면역 회피 관련 공간적 패턴을 정리",
          "공간적으로 해석된 리간드-수용체 네트워크와 치료 저항성·진행 기전을 기술",
          "공간 시그니처의 위험도 층화, 치료 선택, 임상시험 설계 활용 가능성 논의"
        ],
        "concepts": [
          "cell-cell-communication",
          "cancer-associated-fibroblasts",
          "cancer-immune-escape-hla",
          "cancer-immunity-cycle",
          "cancer-evolution-single-cell"
        ],
        "tldr": "공간 오믹스(spatial transcriptomics, proteomics, epigenomics, metabolomics 등)가 간세포암(HCC)의 종양미세환경 공간 구조, 면역 회피, 치료 저항성 기전을 어떻게 밝혀왔는지를 종합 리뷰한 논문.",
        "question": "공간 오믹스 기술이 HCC에서 기존 bulk/single-cell 분석으로는 포착되지 않던 어떤 생물학적 통찰을 제공하는가?",
        "key_result": "공간 오믹스를 통해 bulk/scRNA-seq 단독으로는 발견되지 않은 종양-기질-면역세포 간 배선된 신호 회로 및 예후·예측 바이오마커가 식별되었으며, 암세포와 기질·실질 세포집단 사이의 새로운 통신 축이 규명됨.",
        "why_for_us": "공간 전사체/멀티오믹스 통합 및 TME 분석이 랩 관심 분야(멀티오믹스 통합, single-cell/spatial, cancer immunology)와 직결되며, 특히 spatial 데이터를 QTL·colocalization과 통합하는 방향에 참고가 됨.",
        "limitations": "리뷰 논문이므로 새 데이터 없음; HCC에 특화되어 있어 다른 암종 일반화에 주의 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genomic alterations and treatment define spatiotemporal patterns of glioblastoma recurrence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42820945/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42820945/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-25-2302",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Artzi SB",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "40명 환자의 수술 절제연·재발 종양·초발 종양을 histology-guided sampling으로 채취",
          "Single-cell 공간 전사체학(spatial transcriptomics)으로 미세환경 및 악성 세포 상태 분석",
          "TP53 변이 여부와 테모졸로미드(TMZ) 치료 노출에 따른 재발 경로 비교",
          "환자 유래 교모세포종 모델에서 TP53 기능 상실과 테모졸로미드 내성 기능 검증"
        ],
        "concepts": [
          "cancer-evolution-single-cell",
          "cell-type-annotation"
        ],
        "tldr": "교모세포종 재발의 공간적·시간적 패턴을 single-cell 공간 전사체학으로 분석하여, TP53 변이 유무와 테모졸로미드 치료가 재발 경로를 결정함을 규명.",
        "question": "교모세포종이 재발할 때 수술 절제연 미세환경과 종양 하위유형은 어떻게 변화하며, 그 분자적 결정인자는 무엇인가?",
        "key_result": "수술 절제연은 상처 치유 미세환경을 형성하며 간엽형 전사 특성을 가진 악성 세포가 풍부한 'stromal' 하위유형이 정의됨. TP53 조기 변이 환자는 TMZ 치료 중 지속 증식 후 stromal 하위유형으로 전환되고 생존기간이 짧음. TP53 야생형 환자는 TMZ 치료 중 재발 시 간엽형으로 전환되며 p53 경로 활성 증가·증식 감소를 보임. TP53 기능 상실은 체외 모델에서 TMZ 내성을 증가시킴.",
        "why_for_us": "Single-cell 공간 전사체학 + 종양 진화 단일세포 분석 방법론이 랩 관심 영역(cancer evolution, TME, single-cell RNA)과 직결. 유전체 컨텍스트(TP53)와 치료 노출이 종양 상태 전환을 결정하는 구조는 QTL·colocalization 관점 적용 가능.",
        "limitations": "환자 수(n=40)가 제한적이며, 공간 전사체학의 해상도·커버리지 한계가 있음. 기능 검증이 단일 시험관 모델에서만 수행됨.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial evolution of a cachexia-promoting microenvironment in pancreatic cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42810340/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42810340/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.012",
        "journal": "Cell",
        "year": "2026",
        "author": "Hu Y",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "인간 비악액질·전악액질·악액질 췌장암 샘플과 마우스 모델을 대상으로 scRNA-seq, Xenium 공간전사체, multiplex IHC, bulk RNA-seq을 통합 분석",
          "악액질 연관 미세환경 니치를 구성하는 핵심 세포 유형(SEMA4A 발현 세포 포함) 규명",
          "기능적 실험을 통해 해당 니치가 전신 소모(wasting)에 미치는 영향 검증"
        ],
        "concepts": [
          "cell-cell-communication",
          "cell-type-annotation",
          "cancer-associated-fibroblasts",
          "cancer-evolution-single-cell"
        ],
        "tldr": "췌장암에서 악액질(cachexia) 발생과 연관된 종양 미세환경 니치를 단일세포 RNA-seq, Xenium 공간전사체, multiplex IHC, bulk RNA-seq을 통합해 정의함.",
        "question": "췌장암 진행 과정에서 악액질을 유도하는 종양 미세환경의 세포 구성과 공간적 배열은 어떻게 형성되는가?",
        "key_result": "악액질 단계에 따라 종양 미세환경 내 특정 세포 니치가 공간적으로 진화하며, SEMA4A 발현 세포 집단이 악액질 연관 신호 허브 역할을 함.",
        "why_for_us": "공간전사체(Xenium)와 scRNA-seq 통합 분석 방법론이 우리 랩의 단일세포·공간 오믹스 파이프라인에 참고 가능하며, 암 TME 세포 구성 연구에 관련됨.",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Opposing functions of gut immunomodulatory metabolites on CAR-T therapy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42805174/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42805174/",
        "doi": "https://doi.org/10.1016/j.cell.2026.09.004",
        "journal": "Cell",
        "year": "2026",
        "author": "Perl M",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "혈액암 CAR-T 치료 환자 129명(독일 3개 센터)을 대상으로 치료 전 샷건 메타지노믹스 및 표적 질량분석 수행",
          "단쇄지방산(특히 발레르산) 감소와 질병 진행 위험 증가 간의 연관성 확인",
          "인돌 대사체(인돌-3-카르복스알데히드, 인돌-3-아세트산) 및 이소발레르산 고농도와 불량 예후 연관성 확인",
          "인간 및 마우스 CAR-T 세포 모델에서 발레르산 보충 시 효능 향상, 인돌-3-카르복스알데히드·이소발레르산 처리 시 효능 저하를 기능적으로 검증"
        ],
        "concepts": [
          "activity-metabolomics",
          "cancer-immunity-cycle",
          "car-t-solid-tumors",
          "beta-diversity",
          "amplicon-vs-shotgun"
        ],
        "tldr": "CAR-T 치료 전 장내 미생물 유래 대사체(발레르산 vs. 인돌·이소발레르산)가 CAR-T 세포 치료 효능에 반대 방향으로 영향을 미침을 코호트 및 기능 실험으로 입증.",
        "question": "CAR-T 세포 치료 결과에 장내 미생물 대사체가 어떤 방향으로, 어떤 기전으로 영향을 미치는가?",
        "key_result": "발레르산은 CAR-T 효능을 증강시키고, 인돌-3-카르복스알데히드 및 이소발레르산은 효능을 저해함. 두 방향의 효과가 동일 미생물 생태계에서 공존하며 치료 결과를 반대 방향으로 조절.",
        "why_for_us": "암 면역치료(CAR-T) 및 장내 미생물-대사체 축이 면역세포 기능에 미치는 영향을 다루며, 랩의 메타지노믹스·대사체 관심사 및 암 면역학(T세포 기능) 연구와 교차됨. 마이크로바이옴-면역 통합 분석의 방법론적 참고 자료.",
        "limitations": "단일 질환(혈액암) 코호트로 고형암 CAR-T 치료로의 일반화 불분명; 항생제 노출 등 교란 인자 통제 수준이 초록 수준에서 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "3D multi-omics tumour atlases: from technology to biology and clinical translation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42298141/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42298141/",
        "doi": "https://doi.org/10.1038/s41568-026-00940-0",
        "journal": "Nature reviews. Cancer",
        "year": "2026",
        "author": "Liu M",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "공간 멀티오믹스(spatial multi-omics) 기술의 최신 동향과 한계를 리뷰",
          "3D 종양 아틀라스 생성 접근법(전악성 병변 → 전이까지)을 정리",
          "아틀라스 기반 바이오마커 발굴, 조기 검출, 치료 전략으로의 임상 번역 가능성 논의"
        ],
        "concepts": [
          "cell-atlas",
          "cell-cell-communication",
          "cancer-evolution-single-cell",
          "cancer-associated-fibroblasts",
          "cancer-immunity-cycle"
        ],
        "tldr": "공간 멀티오믹스 기반 3D 종양 아틀라스 구축 기술과 그 암 생물학·임상 적용 가능성을 종합 리뷰한다.",
        "question": "3D 공간 멀티오믹스 아틀라스가 종양 내 세포 이질성과 미세환경 상호작용을 어떻게 체계적으로 포착할 수 있는가?",
        "key_result": "3D 종양 아틀라스가 종양 진화의 분자·세포 기전 규명과 위험도 층화, 조기 진단, 치료 전략 개발에 실질적 기여 가능성이 있음을 제시; 구체적 수치 결과는 리뷰 특성상 없음.",
        "why_for_us": "공간 트랜스크립토믹스·멀티오믹스 통합 및 암 면역 환경(TME) 분석에 직접 활용 가능한 방법론 및 개념 체계를 제공하며, 랩의 cancer 및 spatial 멀티오믹스 관심과 부합.",
        "limitations": "리뷰 논문으로 독자적 실험 데이터 없음; 3D 재구성 기술의 표준화·재현성 문제는 현재 진행형.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Targeting Oncomucin-Driven Immunosuppression Improves the Efficacy of K-ras",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42191046/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42191046/",
        "doi": "https://doi.org/10.1053/j.gastro.2026.04.041",
        "journal": "Gastroenterology",
        "year": "2026",
        "author": "Bhyravbhatla N",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "단일세포 RNA-seq(n=34) 분석으로 oncoMUC 클론 다양성 및 생존 불이익 확인",
          "다중 면역염색(multiplex/sequential immunostaining)으로 TME 구성 분석",
          "NanoString 프로파일링 및 유전자 침묵으로 면역억제 기전 규명",
          "마우스 모델에서 Istradefylline + K-ras 억제제 병용 효능 평가"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "cancer-immune-escape-hla",
          "cell-cell-communication"
        ],
        "tldr": "췌장암(PDA)에서 oncoMUC(MUC4, MUC16, MUC5AC)이 면역체크포인트 발현을 촉진하고 CD8 T세포 침윤을 억제하며, EGFR/UNC5B 신호를 통해 면역 회피를 유도함; Istradefylline 병용으로 K-ras 억제 효과 강화.",
        "question": "췌장암에서 종양 뮤신(oncoMUC)이 집합적으로 종양미세환경의 면역억제를 어떻게 조절하는가?",
        "key_result": "oncoMUC 고발현 환자 생존 불이익(P=0.00013); oncoMUC4/MUC16 결핍 시 VISTA(P<0.0001), TIM3(P<0.0001, P<0.001) 발현 유의 감소 및 CD8 T세포 증가; EGFR/UNC5B 신호 통해 면역 회피 촉진.",
        "why_for_us": "암 면역 회피(cancer immune escape), TME 내 T세포 기능 분석, 단일세포 전사체 활용 측면에서 랩 관심 주제와 연관.",
        "limitations": "초록에 Istradefylline 병용 결과의 구체적 수치 미기재; 인간 임상 검증 단계 미상.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The immunology of human breast cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42151556/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42151556/",
        "doi": "https://doi.org/10.1038/s41577-026-01307-0",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "García-Torralba E",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "유방암 아형(삼중음성, HR 양성 등)별 면역 특성 및 ICI 반응률 문헌 종합",
          "종양 내재적·미세환경적 면역억제 기전 정리",
          "호르몬 조절과 면역계 상호작용 고찰"
        ],
        "concepts": [
          "cancer-immunity-cycle",
          "cancer-immune-escape-hla",
          "cancer-associated-fibroblasts"
        ],
        "tldr": "유방암 면역학의 최신 지식을 종합 리뷰: 면역체크포인트 억제제(ICI)에 대한 반응성의 아형별 차이, 호르몬 수용체 양성 유방암의 면역억제 미세환경 특성, 치료 전략 함의.",
        "question": "유방암 아형별 면역 환경과 ICI 반응성 차이를 어떻게 이해할 수 있는가?",
        "key_result": "삼중음성 유방암 외 아형은 ICI 반응 불량; HR 양성 유방암은 낮은 면역원성 및 국소·전신 면역억제 환경 구축; 호르몬-면역계 상호작용이 ICI 반응성에 핵심 역할.",
        "why_for_us": "유방암 TME 및 암 면역 회피 기전 이해, BRCA 관련 랩 프로젝트 배경 지식으로 활용 가능.",
        "limitations": "리뷰 논문으로 신규 데이터 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A Spatial Atlas of Muscle-Invasive Bladder Cancer Reveals Lineage-Specific Vulnerabilities and Immune Architecture.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42126225/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42126225/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-26-0099",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Yu K",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "22개 MIBC 종양에서 공간 전사체 데이터를 생성하고 bulk RNA-seq, WES와 통합했다.",
          "개별 종양 내 luminal-to-basal 연속 축을 확인하고 위치별 유전자 발현 패턴을 분석했다.",
          "3,000개 이상의 pan-cohort 종양에서 FGFR3-EGFR lineage 배타성과 관련 면역 프로그램을 검증했다.",
          "공간적 위치에 따른 TLS(Tertiary Lymphoid Structure) 상태 차이를 분석했다."
        ],
        "concepts": [
          "cancer-evolution-single-cell",
          "cancer-immunity-cycle",
          "cell-cell-communication",
          "cell-type-deconvolution"
        ],
        "tldr": "근육침윤성 방광암(MIBC) 22개 종양의 공간 전사체 아틀라스를 구축해 luminal-basal 연속축과 면역 미세환경 구조를 공간적으로 해부했다.",
        "question": "MIBC 내 종양 세포 상태의 공간적 조직은 어떻게 구성되며, 이것이 면역 침윤 및 치료 취약성과 어떻게 연결되는가?",
        "key_result": "Luminal 코어에는 FGFR3/NECTIN4가 농축되고, basal 상태는 침윤 경계부에 위치하며 EGFR 신호, EMT, 면역 침윤, 화학요법 감수성이 높음. Pan-cohort에서 FGFR3-EGFR 배타성 확인.",
        "why_for_us": "공간 전사체와 bulk WES 통합 방법론, 종양 미세환경의 세포 상태 공간 분석이 랩의 single-cell/spatial 멀티오믹스 관심과 일치한다.",
        "limitations": "22개 종양이라는 제한된 샘플 수; 공간 해상도의 한계로 단일세포 수준 세포 유형 구분이 불완전할 수 있다.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-cell profiling and genetic regulation of alternative polyadenylation in the human brain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816601/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816601/",
        "doi": "https://doi.org/10.1038/s41588-026-02758-w",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Nan J",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "알츠하이머 유무 포함 379명 사후 뇌 샘플에서 단일세포 APA 아틀라스 구축(~200만 세포)",
          "전장유전체서열과 통합하여 세포 유형별 3'UTR QTL(3'aQTL) 4,288 유전자에서 발굴",
          "17개 뇌 형질 GWAS와 colocalization 분석으로 168개 좌위에서 3'aQTL 의존적 신호 확인",
          "SNCA 3'UTR 선택이 mRNA 세포 내 위치화를 바꿈을 기능 실험으로 검증"
        ],
        "concepts": [
          "colocalization",
          "brain-eqtl-grn",
          "brain-cell-atlas",
          "brain-isoform-diversity",
          "cis-regulatory-element-mapping",
          "allele-specific-expression"
        ],
        "tldr": "인간 뇌 379명의 200만 세포에서 세포 유형별 alternative polyadenylation(APA) 아틀라스를 구축하고, 3'aQTL을 이용해 APA가 AD·SCZ·PD 등 뇌 질환 GWAS 유전좌위를 eQTL과 독립적으로 설명함을 보였다.",
        "question": "뇌에서 세포 유형별 APA 변이의 유전적 조절(3'aQTL)은 뇌 질환 GWAS 신호를 얼마나, 어떻게 설명하는가?",
        "key_result": "168개 GWAS 좌위가 3'aQTL로 설명되며, 이 중 17.5%만 eQTL과 공유; PLEKHA1·APOC2(AD), PAK6·AP3B2(SCZ), SNCA(PD)가 대표 예시; 3'aQTL은 pQTL과 더 강하게 colocalize",
        "why_for_us": "QTL(eQTL·pQTL·sQTL)·colocalization·뇌 단일세포 분석·fine-mapping 모두 랩 핵심 관심사이며, APA라는 새로운 QTL 레이어가 기존 eQTL 기반 해석을 보완할 수 있음; AD·PD·SCZ 질환 도메인 직결",
        "limitations": "APA 측정의 단일세포 기술적 노이즈 및 커버리지 한계; 기능 검증은 SNCA에만 집중",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Integrating cell-type-specific gene expression and genome-wide associations identifies risk genes for schizophrenia.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42106519/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42106519/",
        "doi": "https://doi.org/10.1038/s41380-026-03652-x",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Lou W",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "4개의 세포 유형별 eQTL 데이터셋과 조현병 GWAS를 개별적으로 MR 분석했다.",
          "8개 뇌 세포 유형(흥분성·억제성 뉴런, 성상교세포, 미세아교세포, 희소돌기아교세포, OPC, 내피세포, 주위세포)에 걸쳐 메타분석을 수행했다.",
          "복수의 증거를 통합해 MAU2, PPP1R13B를 우선순위 인과 유전자로 선별했다.",
          "동정된 유전자들에 대해 약물 타겟 분석을 실시했다."
        ],
        "concepts": [
          "eQTL",
          "colocalization",
          "brain-eqtl-grn",
          "brain-cell-type-vocabulary",
          "cell-type-annotation"
        ],
        "tldr": "세포 유형별 eQTL 데이터와 조현병 GWAS를 MR 및 메타분석으로 통합해, 흥분성 뉴런·억제성 뉴런·교세포 등 8개 세포 유형에서 조현병과 인과적으로 연관된 유전자를 체계적으로 발굴했다.",
        "question": "뇌 세포 유형 특이적 eQTL과 조현병 GWAS를 통합하면 어떤 인과 유전자가 어떤 세포 유형에서 동정되는가?",
        "key_result": "흥분성 뉴런 148개, 억제성 뉴런 71개, 성상교세포 63개, 미세아교세포 48개, 희소돌기아교세포 70개, OPC 39개, 내피세포 20개, 주위세포 7개 유전자가 SCZ와 인과 연관; 뇌 조직 eQTL 기반으로 206개 유전자 추가 동정.",
        "why_for_us": "세포 유형별 eQTL + GWAS MR 통합은 랩의 핵심 방법론(eQTL, MR, single-cell)과 완전히 일치한다. SCZ 질환 도메인도 관심사이며, 세포 유형 특이적 QTL 분석의 실제 응용 예시로 가치가 높다.",
        "limitations": "사용된 세포 유형별 eQTL 데이터셋의 샘플 규모가 bulk 조직 대비 작아 통계력 제한; MR가정(다면발현성 등) 위반 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Lysosomal dysfunction in neurodegenerative disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42811116/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42811116/",
        "doi": "https://doi.org/10.1038/s41582-026-01262-3",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Brooker SM",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "PD, AD, FTD, ALS의 GWAS·희귀변이 유전 연구 결과를 통합하여 리소좀 관련 유전자 목록화",
          "엔도-리소좀 경로의 단백질 응집체 분해 역할 및 신호전달 허브 기능(영양소 감지, 지질대사, 막 복구, 신경염증) 정리"
        ],
        "concepts": [
          "alpha-synuclein-proteostasis",
          "cellular-senescence",
          "cgas-sting-regulation",
          "apoptosis-core-machinery"
        ],
        "tldr": "파킨슨병·알츠하이머병·전두측두엽 치매·ALS 등 주요 신경퇴행 질환에서 리소좀 기능 이상이 공통 병리 기전임을 유전 위험 인자 데이터를 중심으로 리뷰.",
        "question": "신경퇴행 질환에서 리소좀 기능 이상은 어떤 기전으로 신경세포 사멸을 촉진하는가?",
        "key_result": "GWAS/유전 연구가 GBA, LRRK2, PGRN, TMEM106B 등 다수 리소좀 경로 유전자를 신경퇴행 위험 유전자로 지목; 리소좀 기능 이상은 단백질 응집 촉진뿐 아니라 mTOR 신호, 신경염증에도 영향을 미침.",
        "why_for_us": "우리 랩이 다루는 PD·AD·ALS 신경퇴행 도메인과 직접 연결; GWAS hit의 리소좀 경로 수렴 해석, HBV 리소좀 프로젝트와도 교차 관련성 있음. 유전 위험인자 → 기능 경로 연결 방식이 우리의 fine-mapping/colocalization 분석과 시너지.",
        "limitations": "리뷰 논문으로 자체 실험 데이터 없음; 질환별 리소좀 기능 이상의 인과 방향성 확정이 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "OpenFISH enables same-section spatial transcriptomics and MALDI-MSI integration.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42810347/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42810347/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.09.007",
        "journal": "Neuron",
        "year": "2026",
        "author": "Li X",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "오픈소스·저비용·모듈형 공간 전사체 플랫폼 OpenFISH 개발 및 MALDI-MSI 호환 조직 처리 워크플로우 구축",
          "guided registration 파이프라인으로 전사체-대사체 동일 절편 공동 정합",
          "중추신경계에서 세포 유형별 대사 이질성 및 해마의 구획 수준 대사 구역화 확인",
          "5xFAD 알츠하이머 모델에서 미세아교세포 인지질 변화·흥분성 뉴런 대사 변화·희소돌기아교세포 lysophosphatidylethanolamine 변화 등 세포 유형-대사체 연관 변화 탐색",
          "면역 자극 후 트랜스포손 활성화 독립 정량 및 Reeler 돌연변이의 선조체 D1 뉴런 패턴 변화 분석"
        ],
        "concepts": [
          "atac-seq",
          "cell-type-annotation",
          "cell-cell-communication",
          "brain-cell-atlas",
          "brain-region-map"
        ],
        "tldr": "동일 절편에서 공간 전사체(OpenFISH)와 MALDI-MSI 대사체를 동시에 측정하는 오픈소스 멀티오믹스 플랫폼을 개발하고, 뇌 세포 유형별 대사 이질성을 규명함.",
        "question": "단일 조직 절편에서 세포 유형 해상도의 전사체와 대사체 정보를 동시에 얻을 수 있는 실용적인 방법론은 무엇인가?",
        "key_result": "OpenFISH는 기존 상용 플랫폼 대비 저비용으로 동일 절편 공간 전사체+대사체 동시 측정을 가능케 하며, 5xFAD 뇌에서 세포 유형별 인지질·lysophosphatidylethanolamine 변화 등 집합 분석에서는 보이지 않는 대사 변화를 포착함.",
        "why_for_us": "공간 전사체·멀티오믹스 통합·단일세포 대사체 분석이 랩의 핵심 관심사이며, 오픈소스 플랫폼이라 직접 적용 가능. AD·신경계 분석 프로젝트에 즉시 활용 가능한 방법론 논문.",
        "limitations": "초록에 5xFAD 실험은 '탐색적(exploratory)'으로 기술되어 통계적 검증 수준 불명확; 다양한 조직 유형으로의 일반화 가능성 미검증.",
        "reuse": "OpenFISH 코드·프로토콜이 오픈소스로 공개되어 있어 랩에서 직접 구현 가능.",
        "next_step": ""
      },
      {
        "title": "An African ancestry-enriched H1 sub-haplotype challenges MAPT haplotype assignment and reveals distinct tau regulatory programs.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42810345/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42810345/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.09.008",
        "journal": "Neuron",
        "year": "2026",
        "author": "Weitzman SA",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "장독서열(long-read sequencing)로 17q21.31 역위 유전자좌 구조 재분석",
          "사후 인간 뇌 조직 전사체 및 iPSC 유래 뉴런·성상교세포 전사체로 하플로타입별 MAPT 발현·isoform 조성 비교",
          "아프리카 계통에 농축된 비역위 H1 서브-하플로타입(H1_A) 동정; H2 하플로타입 표지 변이 rs8070723이 H1_A에도 존재함을 발견",
          "조상·하플로타입에 따른 세포외기질·면역신호·산화스트레스 경로 차이 분석",
          "성상교세포 이동 및 글루타티온 조절에 대한 기능적 연구 수행"
        ],
        "concepts": [
          "allele-specific-expression",
          "brain-eqtl-grn",
          "brain-isoform-diversity",
          "cross-ancestry-transferability",
          "colocalization",
          "alpha-synuclein-proteostasis"
        ],
        "tldr": "17q21.31 MAPT 유전자좌에서 아프리카 계통에 농축된 새로운 H1 서브-하플로타입(H1_A)을 발견하고, 조상 및 하플로타입에 따른 뇌 세포 유형별 tau 조절 프로그램 차이를 규명함.",
        "question": "비유럽 조상(특히 아프리카 계통)에서 MAPT 하플로타입 분류의 한계는 무엇이며, 조상-의존적 tau 조절 프로그램이 존재하는가?",
        "key_result": "H1_A는 아프리카 계통에서 발견되는 새로운 비역위 H1 서브-하플로타입으로, H2 표지 변이(rs8070723)를 보유해 기존 하플로타입 분류를 무효화함; 뇌 조직 및 신경세포에서 조상·하플로타입에 따라 MAPT 발현, tau isoform 조성, 면역·산화스트레스 경로가 달리 조절됨.",
        "why_for_us": "cross-ancestry 유전체 연구(비유럽 집단에서의 GWAS 위험 변이 해석), allele-specific expression, brain eQTL, 그리고 신경퇴행(PD·AD 관련 tau) 분야 관심과 직결. 하플로타입 미해결 변이 문제는 fine-mapping·colocalization 연구의 중요한 함의를 가짐.",
        "limitations": "H1_A의 빈도 및 기능적 영향이 아프리카 계통에 국한되어 있어 다른 조상 집단에서의 검증 미흡; iPSC 유래 세포 모델이 실제 뇌 조직 복잡성을 완전히 재현하지 못할 수 있음.",
        "reuse": "rs8070723 기반 MAPT 하플로타입 분류를 사용하는 기존 연구(GWAS, QTL, PRS 등)에서 아프리카 계통 샘플에 대한 재해석 필요성 제기.",
        "next_step": ""
      },
      {
        "title": "Assessing the de novo paradigm in sporadic early-onset Alzheimer disease trios.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42215639/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42215639/",
        "doi": "https://doi.org/10.1038/s41380-026-03665-6",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Zarea A",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "전국 모집을 통해 37개 신규 sEOAD 트리오를 구성하고, 기존 12개 트리오와 합쳐 총 49개 트리오 분석",
          "트리오 기반 엑솜 시퀀싱으로 비동의어 코딩 DNM 38개, de novo CNV 4개 식별",
          "16개 트리오에 대해 게놈 시퀀싱을 추가 수행하여 비코딩 DNM 탐색",
          "5,643명 EOAD 케이스 vs. 16,097명 대조군에서 DNM 주변 희귀 변이 부담 분석",
          "GWAS 기반 GRS 분포를 환자와 대조군 비교"
        ],
        "concepts": [
          "de-novo-variants",
          "family-history-gwas",
          "credible-set"
        ],
        "tldr": "산발성 조기 발병 알츠하이머(sEOAD) 환자-부모 트리오 49쌍의 엑솜·게놈 시퀀싱으로 de novo 변이(DNM) 가설을 검증한 결과, 단독 DNM보다 복잡한 다중 유전 위험인자가 주요 원인임을 시사했다.",
        "question": "산발성 조기 발병 알츠하이머의 유전 구조에서 de novo 변이가 차지하는 비중은 얼마이며, GWAS 기반 유전 위험 점수(GRS)로 이를 설명할 수 있는가?",
        "key_result": "APP/PSEN1 병원성 DNM은 3/49명(약 6%)에서만 확인; SPHK2·DDR1 등 AD 관련 유전자에서 추가 DNM 후보 발굴; 희귀 코딩 변이 부담은 유의하지 않음; 48%의 환자가 OR>1.5 이상 유전 위험인자 ≥1개를 보유했으나 GRS 분포는 무작위에 가까움.",
        "why_for_us": "AD 유전 구조(de novo vs. 다중 유전 위험인자), GWAS GRS의 sEOAD 설명력 한계, 엑솜/게놈 기반 희귀 변이 분석 방법론이 랩의 GWAS·fine-mapping·PRS·희귀 변이 부담 분석 관심과 직접 연관됨.",
        "limitations": "트리오 수가 49개로 통계 검정력 제한; 엑솜 기반으로 비코딩 영역 탐색 불완전; DNM 후보 유전자의 기능 검증 미수행; GRS가 sEOAD 유전 구조를 충분히 설명하지 못하는 이유는 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Rethinking schizophrenia: insights from genomics and implications for research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42162224/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42162224/",
        "doi": "https://doi.org/10.1038/s41380-026-03654-9",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Owen MJ",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "GWAS, 희귀변이 연구 등 최근 유전체 연구 결과를 기존 신경생물학 지식과 통합하여 조현병 병인 재검토",
          "인지 결손·구조적 뇌 이상과 가족성 유전적 위험의 상관 분석 고찰",
          "조현병과 다른 신경발달·정신과 질환 간 연속성 검토"
        ],
        "concepts": [
          "brain-eqtl-grn",
          "brain-cell-type-vocabulary",
          "de-novo-variants",
          "epistasis"
        ],
        "tldr": "유전체 연구 결과를 통해 조현병이 발달 전반에 걸친 다중 신경세포 유형·뇌 영역을 아우르는 신경발달 스펙트럼 질환임을 재정의하고, 시냅스 기능 이상이 핵심 병인임을 논증.",
        "question": "최신 유전체 연구가 조현병의 병인론과 연구 방향에 어떤 개념적 전환을 제공하는가?",
        "key_result": "유전적 위험은 태아기부터 성인기까지 발현; 시냅스 기능 이상이 중심 기전; 인지 결손·뇌 구조 이상은 가족성 유전 위험과 약하게 상관하며 신경발달 취약성 마커로 해석해야 함; 비가족성 유전·환경 요인이 중요한 역할; 조현병 내 이질성 및 신경발달 연속체 근거 제시.",
        "why_for_us": "GWAS 및 fine-mapping, 유전 구조 분석, 신경계 질환 도메인(SCZ) 관련 랩 핵심 관심사에 직접 해당.",
        "limitations": "리뷰 논문으로 원자료 분석 없음; 개념적 재해석에 집중하여 구체적 신규 분석 미포함.",
        "reuse": "",
        "next_step": "병인 기전 규명 및 진단 체계 정교화를 위한 후속 연구 필요성 제시."
      },
      {
        "title": "Effects of SSRIs on the spatial transcriptome of dorsal raphe serotonin neurons.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42141080/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42141080/",
        "doi": "https://doi.org/10.1038/s41380-026-03644-x",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Henningson C",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "마우스 DRN 및 인접 중뇌 절편에 공간 전사체학 적용",
          "급성·만성 플루옥세틴 투여 후 유전자 발현 변화 분석",
          "유전자 농축·네트워크 분석으로 주요 경로 확인",
          "in situ hybridization으로 신경펩타이드(Trh, Pdyn) 공간 분포 검증"
        ],
        "concepts": [
          "brain-cell-type-vocabulary",
          "brain-region-map",
          "brain-eqtl-grn"
        ],
        "tldr": "공간 전사체학(spatial transcriptomics)으로 마우스 등쪽솔기핵(DRN)의 6개 세로토닌 신경세포 아집단을 규명하고, SSRI(플루옥세틴)의 급성·만성 투여가 이들에 미치는 유전자 발현 변화를 세포 유형·공간 특이적으로 분석.",
        "question": "SSRI 투여가 세로토닌 뉴런 아집단에 어떤 세포 유형·공간 특이적 전사체 변화를 유발하는가?",
        "key_result": "DRN 내 6개 세로토닌 아집단 식별; Htr1a 발현이 급성 투여 후 증가, 만성 후 감소; Ras/MAPK/cAMP 경로 및 축삭 안내 경로 조절; Trh·Pdyn 신경펩타이드는 투여 조건에 따라 반대 방향 변화 및 공간적 분리 확인.",
        "why_for_us": "MDD 관련 공간 전사체 분석 방법론 및 뇌 세포 유형 특이적 전사 변화 이해에 직결; 랩의 neuro/MDD 프로젝트 및 공간 전사체 방법론 관심에 부합.",
        "limitations": "마우스 모델 기반으로 인간 뇌로의 직접 전환 한계; 단일 약물(플루옥세틴) 집중으로 다른 SSRI로의 일반화 불분명.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Study of blood linear RNA nominates CD55 and DLD as early-stage biomarkers for Parkinson's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41525793/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41525793/",
        "doi": "https://doi.org/10.1093/brain/awag014",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Beric A",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "4개 독립 데이터셋(총 4,343명)의 혈액 전사체 데이터로 차등 발현 분석(differential abundance) 수행",
          "뇌 전사체, CSF 단백체, 혈장 단백체, 게놈(eQTL) 데이터와 통합하여 생물학적 맥락 부여",
          "발굴된 전사체로 PD vs. 건강대조군 분류 예측 모델 3개 개발(AUC 0.727–0.733)",
          "CD55, DLD를 eQTL 분석 및 CSF 단백질 축적 데이터로 검증"
        ],
        "concepts": [
          "alpha-synuclein-proteostasis",
          "brain-eqtl-grn",
          "colocalization"
        ],
        "tldr": "4,343명 규모 혈액 전사체 메타분석으로 PD 연관 전사체를 발굴하고, eQTL·CSF/혈장 단백체와 통합하여 CD55와 DLD를 조기 진단 바이오마커로 제안한 연구.",
        "question": "혈액 전사체 데이터만으로 증상 발현 이전 파킨슨병을 탐지할 수 있는 바이오마커를 찾을 수 있는가?",
        "key_result": "296개 차등 발현 전사체 발굴(그 중 28개는 기존 PD 연관 유전자좌); 예측 모델 AUC 0.727–0.733; 절반 가까이가 증상 발현 전 이미 이상 발현; CD55(추정 eQTL 존재)와 DLD(eQTL 유의)는 CSF 단백질 축적과도 연관되며 모든 모델에 포함됨.",
        "why_for_us": "eQTL 분석과 멀티오믹스 통합(전사체-단백체-유전체)이 랩의 QTL·colocalization·MR 관심과 직결되며, PD 조기 바이오마커 발굴 파이프라인이 참고 자료로 활용 가능.",
        "limitations": "혈액 전사체에 국한되어 조직 특이적 해석에 한계; 예측 모델 AUC가 임상 적용 수준(0.73)으로 높지 않음; 인과성 검증 부족.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Different functional connectivity gradients reflect aging and Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42823476/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42823476/",
        "doi": "https://doi.org/10.1038/s41593-026-02402-0",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Rittmo J",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "BioFINDER-2(N=973), ADNI(N=129) 두 독립 코호트에서 기능적 연결성 그래디언트 분석 수행",
          "AD 병리 축적 및 인지 저하와 기능 변화의 축 정렬 분석",
          "연령 관련 기능 변화와 AD 관련 기능 변화를 각각 대뇌피질 전체 수준에서 비교"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-region-map"
        ],
        "tldr": "노화와 알츠하이머병(AD)에 따른 뇌 기능적 연결성 변화가 각각 서로 다른 독립적 계층 축(sensory-association 축 vs. representation-executive 축)을 따라 발생함을 두 독립 코호트로 규명.",
        "question": "노화와 AD에 의한 뇌 기능적 연결성 변화가 동일한 축을 따르는가, 아니면 별개의 계층적 축을 따르는가?",
        "key_result": "AD 초기 병리 축적 및 인지 저하는 sensory-association 축과 연계; 연령 관련 기능 변화는 representation-executive 축과 연계. 두 변화 축은 서로 직교(orthogonal)함.",
        "why_for_us": "랩의 AD/aging 연구에서 뇌 기능적 연결성과 병리 진행의 관계를 이해하는 데 참고 가능. 특히 AD와 정상 노화를 구분하는 바이오마커 또는 QTL 표현형 설계 시 활용 여지 있음.",
        "limitations": "단면적 분석으로 인과관계 추론에 한계; 기능적 MRI의 confounders(혈관 변화 등) 통제 여부 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatiotemporal clonal architecture of the newborn mouse forebrain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816613/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816613/",
        "doi": "https://doi.org/10.1038/s41586-026-11064-8",
        "journal": "Nature",
        "year": "2026",
        "author": "Yuan G",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "마우스 신생아 전뇌(피질·해마·선조체·시상·후각구)에 렌티바이러스 바코딩 적용",
          "공간 전사체학으로 세포를 해부학적 위치에 등록, 클론-세포유형 지도 작성",
          "복측·배측 중간가시뉴런의 클론 생성 차이 분석",
          "신경발달장애 관련 유전자와 광범위 분산 GABAergic 클론의 연관성 분석"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-region-map",
          "brain-cell-type-vocabulary",
          "cell-type-annotation"
        ],
        "tldr": "렌티바이러스 바코딩과 공간 전사체학을 결합해 신생 마우스 전뇌의 클론 계통 지도를 제작하고, 세포유형별·영역별 발생 원리를 규명했다.",
        "question": "전뇌의 다양한 세포 유형들이 어떤 공통 전구세포 클론에서 유래하며, 뇌 영역 간 이동 및 잔류 패턴은 어떻게 결정되는가?",
        "key_result": "글루타민산성 뉴런·성상교세포는 클론 내 기원 영역에 잔류하는 반면, GABAergic 뉴런은 희소돌기교세포 전구세포와 클론 연관성을 가지면서 뇌 영역을 광범위하게 분산함. 광범위 분산 GABAergic 클론은 신경발달장애 관련 유전자가 농축됨.",
        "why_for_us": "뇌 세포 발생 계통·공간 전사체 데이터가 결합된 레퍼런스 아틀라스로, 뇌 세포 유형 어노테이션 및 신경발달장애(ASD 등) 유전체 연구의 세포 맥락 이해에 활용 가능.",
        "limitations": "마우스 신생아 시점 한 스냅샷에 국한; 인간 전뇌로의 직접 전환 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Autism-associated SCN2A deficiency disrupts cortico-striatal circuitry in human brain assembloids.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42815470/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42815470/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.08.031",
        "journal": "Neuron",
        "year": "2026",
        "author": "Chen X",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 피질-선조체 어셈블로이드 모델 구축",
          "SCN2A 이형접합 단백질 절단 변이(PTV) 도입 후 회로 수준 표현형 분석",
          "피질 축삭 투사, 선조체 척추 밀도, 흥분성 시냅스 전달 측정",
          "CAV-2 벡터를 이용한 SCN2A 유전자 대체 치료 검증"
        ],
        "concepts": [
          "de-novo-variants",
          "basal-ganglia-motor-circuit"
        ],
        "tldr": "자폐 관련 SCN2A 단백질 절단 변이가 인간 피질-선조체 어셈블로이드 모델에서 장거리 피질 축삭 투사 손상, 선조체 수상돌기 밀도 감소, 흥분성 시냅스 전달 약화를 유발하지만, 뉴런 자체는 오히려 흥분성이 증가한다는 역설적 표현형을 보임.",
        "question": "ASD 고위험 단일유전자 SCN2A 결핍이 인간 피질-선조체 회로 기능에 어떤 영향을 미치는가?",
        "key_result": "SCN2A PTV → 피질 축삭 투사 손상 + 선조체 수상돌기 척추 밀도 감소 + 흥분성 시냅스 전달 약화; 반면 뉴런 내재적 흥분성 증가·네트워크 자발 발화 증가라는 역설적 표현형 관찰. CAV-2 기반 SCN2A 유전자 교체로 세포·회로 결손 구제.",
        "why_for_us": "ASD 단일유전자(de novo variant) 기능 연구로, 우리 랩의 de novo 변이 및 ASD 유전체 관심과 연결됨. 인간 오가노이드 모델에서 회로 수준 표현형 판독은 향후 ASD GWAS hit의 기능 검증 전략으로 참고 가능.",
        "limitations": "어셈블로이드 모델이 실제 인간 발달 과정을 완전히 재현하지 못할 수 있음; 이형접합 PTV만 다루어 다른 SCN2A 변이 유형 포괄 불가.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Microglia with distinct origins and non-canonical phenotypes coexist within the border-like niche of the brain's circumventricular organs.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42810333/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42810333/",
        "doi": "https://doi.org/10.1016/j.immuni.2026.09.002",
        "journal": "Immunity",
        "year": "2026",
        "author": "Van Hove H",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "Area postrema(AP)와 median eminence(ME) 두 CVO에서 멀티오믹스 분석 수행",
          "CLEC7A 발현 세포를 포함한 이질적 phenotype의 CVO 미세아교세포 하위 집단 특성 규명",
          "뇌 경계부 유사(brain-border-like) 환경 구조 및 대식세포 구획 분석"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-cell-type-vocabulary",
          "brain-region-map",
          "cell-type-annotation"
        ],
        "tldr": "혈뇌장벽이 없는 뇌 circumventricular organs(CVO)의 면역 환경을 멀티오믹스로 분석해, 독특한 phenotype의 미세아교세포 집단과 뇌 경계부 유사 환경을 규명함.",
        "question": "혈뇌장벽 부재 뇌 영역(CVO)에서 대식세포/미세아교세포의 기원과 표현형은 어떻게 다른가?",
        "key_result": "CVO 미세아교세포는 기원이 다양하고 비전형적 표현형을 가지며, CVO는 독특한 대식세포 구획을 지닌 뇌 경계부 유사 환경임.",
        "why_for_us": "뇌 면역세포 atlas 구축, 단일세포 멀티오믹스 분석, 뇌 영역별 세포유형 분류와 관련해 우리 랩 뇌 오믹스 연구에 참고 가능.",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Unlocking the complex interplay between epigenetics and epitranscriptomics in neuropsychiatric disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42803303/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42803303/",
        "doi": "https://doi.org/10.1093/brain/awag335",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Dwivedi Y",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "DNA 메틸화·히스톤 변형이 크로마틴 구조를 변환하는 고전적 에피제네틱 기전을 정리",
          "m6A 변형이 ncRNA(carRNA, eRNA, miRNA, circRNA)를 통해 크로마틴 접근성·히스톤 변형·게놈 구조에 미치는 영향 기술",
          "eRNA의 R-loop 형성, m6A의 RNA 안정성 조절이 뉴런 신호 및 시냅스 가소성에 연결되는 경로 리뷰",
          "신경계 외 연구 결과를 신경정신 질환 모델에 적용 시 한계점 논의"
        ],
        "concepts": [
          "dna-methylation",
          "chromatin-accessibility",
          "brain-eqtl-grn",
          "atac-seq",
          "bisulfite-sequencing",
          "caqtl"
        ],
        "tldr": "DNA 메틸화·히스톤 변형 등 에피제네틱스와 m6A 기반 에피트랜스크립토믹스가 뇌 발달 및 신경정신 질환 위험에서 상호 조절하는 메커니즘을 종합 리뷰.",
        "question": "에피제네틱과 에피트랜스크립토믹 조절 층위가 어떻게 상호작용하여 신경정신 질환 위험을 결정하는가?",
        "key_result": "에피제네틱-에피트랜스크립토믹 쌍방향 상호작용이 신경정신 질환 위험·회복력의 핵심 결정 인자임을 제안; 구체적 수치 결과는 리뷰 논문이므로 원 연구들에 귀속됨.",
        "why_for_us": "DNA 메틸화(mQTL), 크로마틴 접근성(caQTL, ATAC-seq), 뇌 유전자 발현 조절(eQTL/GRN) 등 랩 관심 주제와 직결되며, 신경정신 질환 멀티오믹스 통합 연구의 배경 지식으로 활용 가능.",
        "limitations": "대부분의 분자 메커니즘 근거가 비신경계 시스템에서 도출되어 신경정신 질환 맥락 적용에 추가 검증 필요; 인과관계보다 상관관계 수준의 증거가 주를 이룸.",
        "reuse": "",
        "next_step": "신경정신 질환 동물/오가노이드 모델에서 에피제네틱-에피트랜스크립토믹 교차 조절의 직접적 인과 실험 필요"
      },
      {
        "title": "Genetic architecture of postpartum psychosis: from common to rare genetic variation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42135523/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42135523/",
        "doi": "https://doi.org/10.1038/s41380-026-03637-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Jung S",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "스웨덴 국가 레지스트리를 활용해 가족력 기반 유전율을 추정(55%)했다.",
          "All of Us Research Program WGS 데이터로 WGS 기반 유전율을 추정(46%)했다.",
          "240,009명(All of Us) 및 58,990명(Mount Sinai BioMe Biobank)에서 희귀 손상 변이 부담 분석을 수행해 HMGCR을 위험 유전자로 동정했다.",
          "상위 200개 후보 유전자가 양극성 장애, 조현병, 자가면역 질환과 공유 유전 경로를 갖는지 분석했다."
        ],
        "concepts": [
          "de-novo-variants",
          "epistasis"
        ],
        "tldr": "산후 정신증의 유전적 구조를 가족력 기반 및 WGS 기반 유전율 추정과 희귀 변이 분석으로 규명하고, HMGCR을 위험 유전자로 발굴했다.",
        "question": "산후 정신증(postpartum psychosis)의 유전적 구조에서 common variant와 rare variant가 각각 어떤 역할을 하는가?",
        "key_result": "가족력 기반 유전율 55%, WGS 기반 유전율 46% 추정; HMGCR 희귀 손상 변이가 산후 정신증 위험과 연관(FDR<0.05); 상위 후보 유전자의 17%가 양극성, 21%가 조현병과 공유.",
        "why_for_us": "희귀 변이 기반 유전율 추정 및 유전자 부담 분석 방법론이 랩의 GWAS/rare variant 분석 파이프라인에 참고 가능하다. 정신과 질환 유전 구조(SCZ 연관)도 관심 영역이다.",
        "limitations": "산후 정신증 자체의 GWAS 기반 common variant 분석이 제한적이며, 표본 규모가 희귀 변이 분석에는 여전히 작다.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Population-scale immune multiome atlas reveals regulatory disease mechanisms.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42816628/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42816628/",
        "doi": "https://doi.org/10.1038/s41586-026-11078-2",
        "journal": "Nature",
        "year": "2026",
        "author": "Kanai M",
        "rating": 5,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "1,108명 핀란드인 PBMC에서 snATAC-seq + snRNA-seq 페어드 측정(총 1,000만 세포)",
          "51,083 cis-eQTL(20,829 유전자), 338,100 cis-caQTL(210,584 피크) 매핑",
          "119,094 추정 인과 변이 및 593,765 peak-gene 연결 식별",
          "크로마틴→발현 연쇄 완성 변이의 질환 colocalization 분석",
          "MPRA(massively parallel reporter assay)로 10,428 fine-mapped QTL 기능 검증",
          "진화적으로 제한된 유전자에서 다층적 조절 완충(regulatory buffering) 메커니즘 분석"
        ],
        "concepts": [
          "caqtl",
          "colocalization",
          "credible-set",
          "cis-regulatory-element-mapping",
          "atac-seq",
          "chromatin-accessibility",
          "cell-type-annotation",
          "allele-specific-expression"
        ],
        "tldr": "1,108명 핀란드인의 면역세포 단일핵 ATAC+RNA 페어드 데이터로 대규모 cis-eQTL·caQTL을 동시에 매핑하고, 크로마틴→발현 연쇄를 통해 면역 질환 변이의 조절 기전을 해상도 높게 규명.",
        "question": "면역세포에서 유전변이가 크로마틴 접근성과 유전자 발현에 미치는 영향을 동시에 측정하면, 비코딩 질환 변이의 조절 기전을 어떻게 추적할 수 있는가?",
        "key_result": "크로마틴→발현 연쇄를 완성하는 변이는 크로마틴 효과만 있는 변이보다 질환 colocalization이 2배 높음. MPRA로 fine-mapped QTL의 조절 활성 확인. 제한된 유전자에서 크로마틴 접근성 변화는 정상 효과크기를 보이지만 발현 전달은 약하고 수많은 인핸서-유전자 연결을 통해 완충됨. TICAM1, RHOH(자가면역), TNRC18, IL21R(핀란드 농축 변이) 등 구체적 카스케이드 제시.",
        "why_for_us": "랩 핵심 관심사(eQTL, caQTL, fine-mapping, colocalization, single-cell multiome, 면역 자가면역)를 모두 포괄하는 플래그십 방법론+분석 논문. MPRA 기반 QTL 검증 + peak-gene 연결 + regulatory buffering 개념은 향후 자가면역 QTL 프로젝트에 직접 응용 가능.",
        "limitations": "핀란드인 단일 집단이라 다집단 transferability 제한. 세포유형별 세부 분석 깊이는 샘플 수에 따라 달라질 수 있음.",
        "reuse": "eQTL·caQTL 카탈로그, peak-gene 연결 데이터, fine-mapped 변이 목록 공개(초록에 명시 없음-데이터 공개 여부는 본문 확인 필요)",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-09-27",
    "count": 21,
    "papers": [
      {
        "title": "Machine learning and statistical methods for molecular quantitative trait loci.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42791384/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42791384/",
        "doi": "https://doi.org/10.1038/s41576-026-00990-y",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Engelhardt BE",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "molQTL 매핑의 통계적 접근법(선형 혼합 모델, fine-mapping, colocalization 등)과 머신러닝 기반 접근법을 체계적으로 분류·비교",
          "대규모 코호트 및 단일세포 플랫폼 등 기술 발전에 따른 새로운 방법론 필요성 논의",
          "유전자 조절 맥락에서 molQTL 하류 분석(예: 인과 추론, 기능 해석)도 포괄"
        ],
        "concepts": [
          "molecular-qtl",
          "fine-mapping",
          "colocalization",
          "single-cell-eqtl",
          "pqtl-proteomics",
          "summary-statistics-methods",
          "mixed-model-association",
          "noncoding-regulatory-variants"
        ],
        "tldr": "molQTL 매핑에 사용되는 통계 모델 및 머신러닝 방법론을 종합 정리한 리뷰. eQTL·caQTL 등 다양한 분자 표현형에 대한 최신 방법론의 흐름과 한계를 정리.",
        "question": "유전 변이가 분자 표현형(유전자 발현, 염색질 접근성 등)에 미치는 효과를 어떻게 더 정확하고 강력하게 매핑할 수 있는가?",
        "key_result": "표준 molQTL 매핑의 한계를 보완하는 ML/통계 방법들이 증가하고 있으며, 단일세포·공간 트랜스크립토믹스 등 새로운 플랫폼과 결합해 분자 기전 이해가 심화되고 있음.",
        "why_for_us": "랩의 핵심 관심사인 eQTL/pQTL/caQTL/sQTL 분석 및 fine-mapping, colocalization 방법론을 모두 포괄하는 핵심 리뷰 논문. 방법론 선택과 파이프라인 설계에 직접 활용 가능.",
        "limitations": "리뷰 논문이므로 새로운 실험 결과나 검증 데이터 없음; 방법론의 실용적 비교 벤치마크 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genetic factor analysis for characterizing phenome-wide patterns of genetic pleiotropy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42778724/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42778724/",
        "doi": "https://doi.org/10.1038/s41588-026-02753-1",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Morrison J",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "GWAS 요약통계 기반으로 cross-trait 공유 유전인자를 추출하는 GFA(Genetic Factor Analysis) 방법론을 개발함.",
          "인자 수를 자동으로 결정하고, 샘플 중복을 보정하며, 인자 간 비직교성을 허용하는 설계를 채택함.",
          "관상동맥질환·2형 당뇨의 22개 공통 위험인자에 GFA를 적용해 15개 다면발현 구성요소로 유전성을 분해함.",
          "혈액세포 조성 표현형의 대규모 집합에 GFA를 적용하고, 결과를 다변수 MR에 활용하여 정밀도를 높임."
        ],
        "concepts": [
          "mendelian-randomization",
          "partitioned-heritability",
          "genetic-correlation",
          "gwas-association-testing",
          "summary-statistics-methods",
          "missing-heritability"
        ],
        "tldr": "다형질 유전인자분석(GFA)을 제안하여 GWAS 요약통계에서 cross-trait 유전적 다면발현 패턴을 자동으로 추출하고, 심혈관·대사 위험인자의 유전성을 15개 다면발현 구성요소로 분해함.",
        "question": "다수의 형질에 걸쳐 공유되는 유전적 연관성 패턴(다면발현)을 어떻게 체계적으로 분해하고, 이를 다변수 멘델리안 무작위화(MVMR)에 활용할 수 있는가?",
        "key_result": "22개 위험인자의 유전성이 15개 다면발현 인자로 분해되었으며, 샘플 중복 보정이 생물학적으로 해석 가능한 결과를 얻는 데 필수적임을 확인함. MVMR에 GFA 도입 시 추정 정밀도가 향상됨.",
        "why_for_us": "GWAS 다면발현 분해, 유전성 분할, 다변수 MR 등 랩의 핵심 관심사(pleiotropy, heritability partitioning, MR)와 직결되는 방법론 논문.",
        "limitations": "초록에 방법의 계산 복잡도·확장성 및 실제 바이오뱅크 적용 한계에 대한 상세 논의 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Clinical Uses of Common Genetic Variants Associated with Common Diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42777243/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42777243/",
        "doi": "https://doi.org/10.1056/NEJMra2413201",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Hunter DJ",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "GWAS가 밝힌 공통 성인 질환의 다유전자 구조를 개관",
          "PRS의 예측력·임상 유용성·현재 한계를 체계적으로 검토",
          "약물유전체학과 PRS를 결합한 임상 적용 시나리오 논의"
        ],
        "concepts": [
          "polygenic-risk-score",
          "gwas-association-testing",
          "drug-target-genetics",
          "missing-heritability",
          "genetic-architecture",
          "cross-ancestry-transferability",
          "summary-statistics-methods"
        ],
        "tldr": "인간 유전체 초안 발표 25주년 시점에서 GWAS·PRS·약물유전체학이 임상에 미친 영향과 앞으로의 활용 가능성을 비판적으로 정리한 리뷰.",
        "question": "수천 개의 소효과 공통 변이로 구성된 다유전자 위험점수(PRS)가 왜 아직 임상 현장에서 널리 쓰이지 못하는가, 그리고 저가 전장유전체 서열분석 시대에 어떻게 활용될 수 있는가?",
        "key_result": "PRS는 위험 예측에 통계적으로 유의미하나, 단독으로 임상 의사결정을 바꾸기에는 효과크기가 작고 조상 다양성·교육 격차·비용 등 장벽이 크다고 결론. 저가 WGS 확산 시 희귀 변이와 공통 변이를 통합한 복합 위험 모델 및 약물유전체학이 실질적 임상 가치를 가질 수 있다.",
        "why_for_us": "랩의 핵심 주제인 PRS, GWAS, drug target genetics, 유전자 구조(missing heritability) 전반을 아우르는 리뷰로, 연구 방향 설정 및 임상 번역 논의에 직접 활용 가능.",
        "limitations": "구체적 신규 데이터 없이 기존 문헌 기반 서술이며, PRS 성능 수치는 특정 형질·조상에 따라 크게 다름.",
        "reuse": "",
        "next_step": "저가 전장유전체 서열분석 시대에서 PRS와 약물유전체학을 결합한 임상 프레임워크 개발이 향후 과제로 제시됨."
      },
      {
        "title": "Genome-wide mapping of common and rare variant effects on adiposity across childhood.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42791368/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42791368/",
        "doi": "https://doi.org/10.1038/s41588-026-02772-y",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Kentistou KA",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "객관적 측정 기반 소아 비만 형질(n=62,276) 및 회고적 소아 비만 형질 데이터를 활용한 연령층별 유전적 연관 분석 수행",
          "흔한 변이(common variant) 및 희귀 변이(rare variant) 효과 모두 분석"
        ],
        "concepts": [
          "genetic-architecture",
          "gwas-association-testing",
          "rare-variant-collapsing",
          "statistical-power-gwas",
          "missing-heritability"
        ],
        "tldr": "소아기 비만 관련 형질에 대해 연령층별 GWAS 및 희귀 변이 분석을 수행하여 성인 기반 결과와의 차이를 탐색한 대규모 유전체 연구.",
        "question": "소아기 비만의 유전적 구조는 성인과 어떻게 다르며, 성장 시기별로 비만 관련 유전 변이가 어떻게 변화하는가?",
        "key_result": "초록이 일부만 제공되어 수치적 결과는 확인 불가; 소아기 비만의 연령별 유전 효과 변화를 GWAS로 포착하려는 시도.",
        "why_for_us": "연령층별 GWAS 설계, rare variant collapsing, 비표준 GWAS 방법론 참고에 유용; 소아 발달 표현형에 대한 유전적 구조 이해에 활용 가능.",
        "limitations": "초록이 중간에 잘려 전체 결과 파악 불가; 소아 비만에 특화된 분석으로 질환 도메인 직접 관련도 낮음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Atlas of cell types and regulatory elements underlying human facial diversity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42786296/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42786296/",
        "doi": "https://doi.org/10.1038/s41588-026-02748-y",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Erickson AG",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "배아 6~11주에 걸쳐 단일세포 전사체(scRNA-seq), 크로마틴 접근성(scATAC-seq), 공간 전사체를 단일세포 해상도로 획득",
          "56개 세포 상태 및 간엽 아형과 이들의 유전자-인핸서 cis-조절 경관(landscape)을 시공간적으로 매핑",
          "안면 특성 GWAS와 유전자 발현 연관 분석, 자기상관(autocorrelation) 분석으로 공간 패터닝 유전자 동정",
          "PAX1 연결 인핸서의 마우스 기능 검증 수행"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "noncoding-regulatory-variants",
          "gwas-association-testing",
          "fine-mapping",
          "molecular-qtl",
          "crispr-enhancer-mapping"
        ],
        "tldr": "인간 안면 발생 6~11주 배아를 대상으로 단일세포 전사체·크로마틴 접근성·공간 전사체를 통합한 멀티모달 아틀라스를 구축하고, 안면 형태 GWAS 변이의 세포-조절 기제를 규명했다.",
        "question": "게놈의 안면 형태 다양성은 어떤 세포 유형과 시공간적 조절 요소를 통해 매개되는가?",
        "key_result": "안면 형태와의 유전자 발현 연관은 초기 간엽 전구세포에서 가장 강하고 발생이 진행될수록 지역 제한적으로 변함. PAX1 인핸서가 마우스 골격 발달에 필수적임을 확인. 말초 신경이 상악(maxilla) 형태를 배아기에 미세 조정함을 세포 신호 상호작용 분석으로 제안.",
        "why_for_us": "단일세포 멀티오믹스(snRNA+snATAC+spatial) 통합 방법론, cis-조절 요소와 GWAS 변이 연결, 세포 유형별 유전자 조절 아틀라스 구축 등이 랩의 단일세포/epigenomics/GWAS fine-mapping 파이프라인과 직접 맞닿아 있음.",
        "limitations": "배아 안면 발생에 특화된 데이터셋으로 성인·질환 조직으로의 일반화 여부 불명확. 인핸서 기능 검증은 일부 유전자(PAX1)에만 국한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The gene-regulatory evolution of the human skeleton.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42778609/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42778609/",
        "doi": "https://doi.org/10.1038/s41586-026-11053-x",
        "journal": "Nature",
        "year": "2026",
        "author": "Yan Y",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "연골세포에서 561,410개의 인간 유래 치환을 프로모터·인핸서 대상 MPRA로 기능 검증",
          "인간-유인원 하이브리드 세포를 골연골 전구세포로 분화시켜 시스-조절 발현 아틀라스 구축",
          "MPRA와 하이브리드 세포 데이터를 통합해 15,077개의 인간 특이적 조절 활성 loci 동정",
          "선택 신호 분석 및 인간 vs 비인간 유인원 관절 GAG 함량 비교"
        ],
        "concepts": [
          "mpra",
          "noncoding-regulatory-variants",
          "fine-mapping",
          "cross-species-cell-type-evolution"
        ],
        "tldr": "MPRA와 인간-유인원 하이브리드 세포를 결합해 인간 골격 진화를 이끈 시스-조절 변이를 게놈 전체 수준에서 지도화하고, 인간 특이적 글리코사미노글리칸(GAG) 억제가 퇴행성 골격 질환 취약성의 핵심임을 밝혔다.",
        "question": "인간 골격의 독특한 형태는 어떤 유전자-조절 변화에 의해 진화했는가?",
        "key_result": "인간 특이적 조절 변화로 세포외기질(ECM) 재편성이 광범위하게 일어났으며, 특히 GAG 생합성이 억제되어 인간 관절의 GAG 함량이 비인간 유인원 대비 약 3~4배 감소; 이 변화에 자연선택의 흔적이 확인됨.",
        "why_for_us": "MPRA를 이용한 대규모 시스-조절 변이 기능 검증 및 인간 특이적 조절 진화 분석 방법론이 우리 랩의 noncoding regulatory variant 해석·fine-mapping 연구에 참고 가능.",
        "limitations": "연골세포·골연골 전구세포 모델에 국한되어 다른 골격 세포 유형에서의 조절 변화는 다루지 못함; 하이브리드 세포 모델이 생체 내 환경을 완전히 재현하지 못할 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Interpreting human genetic variation at atomic resolution.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42768124/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42768124/",
        "doi": "https://doi.org/10.1038/s41588-026-02763-z",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Zimmermann MT",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "계산구조유전체학(CSG)이 지난 20년간 발전해 온 흐름을 정리",
          "서열 정보, 모티프·도메인, 분자구조, 분자동역학 시뮬레이션, 멀티오믹스 주석, AI 도구를 통합하는 프레임워크 제시",
          "변이를 기능장애 메커니즘에 따라 동시에 분류하는 접근법을 기술"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "fine-mapping",
          "variant-to-cell-type",
          "saturation-genome-editing"
        ],
        "tldr": "계산구조유전체학(CSG)을 활용해 개인 유전변이의 기능을 원자 수준에서 해석하는 방법론적 관점 논문.",
        "question": "임상 시퀀싱과 대규모 유전체 이니셔티브로 발견된 변이들을 단순 통계적 주석이 아닌 분자 메커니즘 수준에서 어떻게 해석할 수 있는가?",
        "key_result": "CSG 통합 접근법이 유전변이 효과를 원자 해상도로 예측하고, 단백질·DNA·RNA·소분자 복합체 수준의 메커니즘 분류를 가능하게 한다는 개념적 증거 제시.",
        "why_for_us": "GWAS/fine-mapping 후보 변이의 기능적 해석 및 variant-to-mechanism 연결에 CSG 파이프라인을 참고할 수 있음.",
        "limitations": "Perspective 논문으로 새로운 실험적 검증 데이터는 제한적; 실제 임상 적용 범위 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-nucleus atlas of cell-type specific genetic regulation in the human brain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42778721/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42778721/",
        "doi": "https://doi.org/10.1038/s41588-026-02733-5",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Zeng B",
        "rating": 5,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "1,384명의 다조상 기증자로부터 560만 핵의 snRNA-seq 데이터를 생성하여 전전두피질 단핵 eQTL 아틀라스 구축.",
          "8개 주요 세포 클래스 및 27개 서브클래스 수준에서 다해상도 eQTL 분석을 수행.",
          "eQTL 변이와 알츠하이머병·조현병 등 질환 GWAS 변이의 colocalization 분석 수행.",
          "기증자 연령 범위를 활용한 발달궤적 추론을 통해 동적 eQTL(2,073개 유전자) 동정.",
          "1,655개 유전자의 trans-eQTL 효과를 확인하여 원거리 조절 지도 작성."
        ],
        "concepts": [
          "single-cell-eqtl",
          "molecular-qtl",
          "colocalization",
          "fine-mapping",
          "brain-eqtl-grn",
          "brain-cell-atlas",
          "variant-to-cell-type",
          "noncoding-regulatory-variants",
          "cell-type-deconvolution",
          "neurodevelopmental-trajectory",
          "partitioned-heritability",
          "cross-ancestry-transferability"
        ],
        "tldr": "인간 전전두피질의 140만 핵을 포함하는 단핵 다조상 eQTL 아틀라스를 구축하여 세포유형별·발달궤적별 유전적 조절 구조를 고해상도로 해석함.",
        "question": "인간 뇌에서 유전적 조절이 세포유형별로 어떻게 달라지며, 신경정신·신경퇴행 질환의 GWAS 변이를 어느 세포유형에 귀속시킬 수 있는가?",
        "key_result": "14,258개 유전자의 유전적 조절을 동정했으며, 981개(클래스 수준)·857개(서브클래스 수준)가 세포유형 특이적 조절 효과를 보임. 벌크 분석에서 감지되지 않은 AD·SCZ 관련 세포유형 특이적 유전자 다수 발굴.",
        "why_for_us": "단핵 eQTL, colocalization, 세포유형 특이성, 신경 질환 GWAS 기능 해석 등 랩 핵심 관심사와 완전히 일치하는 대규모 참조 아틀라스.",
        "limitations": "초록에 기능적 검증(CRISPR 등) 실험 결과 없음; 특정 희귀 세포 서브클래스에서의 검정력 한계에 대한 논의 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Photolabile oligonucleotides with topological light gradients enable spatially resolved single-cell transcriptomics and epigenomics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42791355/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42791355/",
        "doi": "https://doi.org/10.1038/s41587-026-03328-5",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Piscopio RA",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "콜레스테롤-접합 광분해성 해시태그 올리고뉴클레오타이드(HTO)를 세포에 부착하는 방법 개발",
          "패턴화된 광노출(light exposure)로 세포 위치에 공간 바코드를 각인(stamp)",
          "표준 단일세포 멀티오믹 시퀀싱(snMultiome)과 결합하여 RNA + ATAC 동시 측정",
          "인간 embryoid에 적용하여 공간-후성유전 상태와 세포 프로그램 간 관계 분석"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "molecular-qtl",
          "noncoding-regulatory-variants"
        ],
        "tldr": "광분해성 해시태그 올리고뉴클레오타이드와 패턴 광조사를 결합한 scSTAMP-seq으로 공간 좌표를 보존하면서 단일세포 멀티오믹스(RNA+ATAC)를 수행하는 새로운 방법론 개발.",
        "question": "표준 단일세포 플랫폼에서 공간 정보를 잃지 않으면서 단일세포 수준의 전사체·후성유전체를 동시에 측정할 수 있는가?",
        "key_result": "scSTAMP-seq을 통해 생세포 및 고정 세포 모두에서 공간 좌표가 인코딩된 단일세포 멀티오믹 데이터 획득 성공; 공간 조직화와 후성유전 상태가 세포 프로그램을 공동 조절함을 확인.",
        "why_for_us": "랩의 단일세포 멀티오믹스(snMultiome), 공간 트랜스크립토믹스, chromatin accessibility 분석 관심과 직접 부합하는 새로운 방법론; 파이프라인에 통합 시 세포 유형별 조절 분석 강화 가능.",
        "limitations": "현재 인간 embryoid에만 적용; 공간 해상도가 현존 spatial transcriptomics 전용 플랫폼 대비 상대적으로 낮을 수 있음; 초록에 상세 벤치마크 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-cell analysis of chromatin accessibility in the human intestine identifies regulatory programs and clarifies genetic associations in Crohn's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42791370/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42791370/",
        "doi": "https://doi.org/10.1038/s41588-026-02755-z",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Zhao Y",
        "rating": 4,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "크론병 환자 23명과 정상인 16명의 장 조직(말단 회장, 상행 결장)에서 단일세포 ATAC-seq 수행",
          "557,310개의 후보 시스-조절 요소(cCRE) 아틀라스 구축",
          "세포 유형별·해부학적 위치별·맥락별 cCRE 특성화 및 GWAS fine-mapped 변이와 cCRE 겹침 분석(30개 변이 확인)",
          "heritability enrichment 분석으로 적응면역(T세포)·선천면역(중성구) 기여도 확인"
        ],
        "concepts": [
          "fine-mapping",
          "partitioned-heritability",
          "noncoding-regulatory-variants",
          "credible-set",
          "molecular-qtl",
          "variant-to-cell-type",
          "colocalization"
        ],
        "tldr": "크론병 환자 및 정상 장 조직에서 단일세포 수준의 chromatin accessibility 아틀라스를 구축하고, 크론병 GWAS 변이의 세포 유형별 조절 기능을 규명.",
        "question": "크론병 유전적 위험 변이가 어떤 세포 유형의 시스-조절 요소에 위치하며, 어떤 세포가 질환 유전적 위험에 주로 기여하는가?",
        "key_result": "크론병 유전적 위험은 주로 적응면역세포(T세포) 및 선천면역세포(중성구)의 chromatin accessibility에 농축되어 있으며, fine-mapped 비코딩 변이 30개가 cCRE 내에 위치.",
        "why_for_us": "caQTL/fine-mapping/partitioned heritability 분석과 직접 연관; 면역세포 유형별 조절 변이 해석 파이프라인 참고 가능. autoimmune 질환에도 응용 가능.",
        "limitations": "크론병에 특화된 아틀라스로 다른 IBD나 자가면역질환으로의 일반화 제한; 샘플 수(23명 환자)가 비교적 소규모.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genetic landscape of an in vivo protein interactome.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42768123/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42768123/",
        "doi": "https://doi.org/10.1038/s41588-026-02747-z",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Besse S",
        "rating": 4,
        "emoji": "🧪",
        "domain": "단백체",
        "what_they_did": [
          "S. cerevisiae 인브레드 균주(~12,000 SNP)에서 61개 reporter PPI를 in vivo 측정",
          "PPI 강도에 연결된 protein-interaction QTL(piQTL) 매핑 수행",
          "trans-/cis-piQTL 비교 및 PPI 네트워크 위상과의 관계 분석",
          "비코딩 RNA, 3'UTR 내 piQTL 동정 및 pQTL·eQTL과의 중첩 비교"
        ],
        "concepts": [
          "molecular-qtl",
          "pqtl-proteomics",
          "noncoding-regulatory-variants",
          "epistasis"
        ],
        "tldr": "효모 인브레드 균주 패널에서 단백질-단백질 상호작용(PPI) 강도를 QTL로 매핑해 piQTL이라는 새로운 분자 QTL 유형을 제시.",
        "question": "자연 유전변이가 세포 내 단백질-단백질 상호작용 강도에 어떤 영향을 미치며, 이를 QTL 분석으로 포착할 수 있는가?",
        "key_result": "trans-acting piQTL이 cis보다 유의하게 풍부하고 효과크기가 더 컸음; piQTL은 eQTL보다 pQTL과 더 많이 중첩되어 전사 후 조절을 반영; 비코딩 RNA·3'UTR 변이도 코딩 SNP에 필적하는 효과 보유.",
        "why_for_us": "pQTL 방법론의 확장판으로서, 단백질 상호작용 수준의 QTL 개념을 인간 멀티오믹스·pQTL 연구에 적용할 수 있는 틀 제공.",
        "limitations": "효모 모델 시스템으로 인간 게놈으로의 직접 전이 가능성 불확실; reporter 기반 PPI 측정의 포화 범위 제한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The role of senescence in kidney ageing, injury and fibrosis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42778710/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42778710/",
        "doi": "https://doi.org/10.1038/s41581-026-01123-8",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Janas PP",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "급성·만성 senescence의 생물학적 특성과 신장 맥락에서의 역할을 구분하여 개념 정리.",
          "신장 노화 및 CKD에서 만성 senescent 세포가 섬유화·백혈구 침윤·근섬유아세포 활성화에 기여하는 증거를 문헌으로 종합.",
          "전임상 senolytic 연구에서 신장 기능 보존 및 수명 연장 효과를 정리."
        ],
        "concepts": [],
        "tldr": "신장 노화·CKD에서 세포 노화(senescence)가 섬유화·기능 손상의 핵심 원인임을 정리하고, senolytic 전략의 치료 가능성을 리뷰함.",
        "question": "세포 노화(senescence)는 신장 노화와 CKD 진행에서 어떤 역할을 하며, senolytic 개입이 치료 전략이 될 수 있는가?",
        "key_result": "전 세계 약 8억 5천만 명이 영향받는 CKD에서 만성 senescent 상피세포 증가가 섬유화 드라이버임을 다중 증거로 지지. Senolytic 전략이 신장을 포함한 다수 장기에서 기능 보존·섬유화 감소를 보임.",
        "why_for_us": "랩 nephro 도메인(CKD)과 aging 관심사가 교차하는 리뷰; 신장 섬유화의 세포 수준 기전 이해에 도움.",
        "limitations": "임상시험 데이터 부족; 리뷰 논문이므로 자체 실험 결과 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Targeting ZMYND8 unleashes IL-2 signalling to override T cell exhaustion.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42778612/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42778612/",
        "doi": "https://doi.org/10.1038/s41586-026-11059-5",
        "journal": "Nature",
        "year": "2026",
        "author": "Wang Y",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "CD8+ T세포 고갈 맥락에서 ZMYND8의 기능적 역할을 조사함.",
          "ZMYND8 표적화가 IL-2 신호전달을 활성화하여 T세포 고갈을 역전시키는지 평가함."
        ],
        "concepts": [],
        "tldr": "ZMYND8을 억제하면 IL-2 신호가 활성화되어 고갈된 CD8+ T세포의 기능이 회복됨을 제시한 연구.",
        "question": "T세포 고갈을 극복하는 후성유전학적 표적으로 ZMYND8이 기능하며, IL-2 신호 경로를 통해 항종양 면역을 강화할 수 있는가?",
        "key_result": "초록이 불완전하게 제공되어 구체적 수치 확인 불가. ZMYND8 억제 → IL-2 신호 해방 → T세포 고갈 극복이라는 기전적 연결고리 제안.",
        "why_for_us": "랩의 cancer immunology(T cell exhaustion·TME) 관심사와 직결되는 후성유전-면역 기전 연구.",
        "limitations": "초록이 잘려 있어 구체적 실험 설계·결과·임상 관련성 평가 불가.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Transcriptomic Plasticity and Its Spatial Architecture Shape Melanoma Response to Immunotherapy and Its Combination With BRAF/MEKi.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42771837/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42771837/",
        "doi": "https://doi.org/10.1200/JCO-25-02766",
        "journal": "Journal of clinical oncology : official journal of the American Society of Clinical Oncology",
        "year": "2026",
        "author": "Shah K",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "IMspire150, BRIM, AVAST-M 등 다수 코호트의 임상·다중오믹스 데이터를 통합하여 전사 상태를 분류",
          "공간전사체 분석으로 종양미세환경(TME) 구조를 검증",
          "CDK7 억제제 전임상 민감도 실험 및 항-VEGF 치료 후향 분석 수행"
        ],
        "concepts": [
          "spatial-transcriptomics"
        ],
        "tldr": "멜라노마 환자에서 다중오믹스·공간전사체 분석으로 ICB 저항성 전사 상태 두 가지를 정의하고, 각 상태별 최적 치료 전략을 제시함.",
        "question": "멜라노마에서 면역관문억제제(ICB) 단독 또는 BRAF/MEK 억제제 병용 치료에 대한 반응/저항성을 결정하는 전사적 상태는 무엇인가?",
        "key_result": "ICB 저항성 상태 두 종류(분화형·미분화형) 식별; 분화형은 BRAF/MEK+ICB 병용에서 개선된 예후, 미분화형은 혈관생성·기질 프로그램 농축 및 항-VEGF 반응성, CDK7 억제에 민감.",
        "why_for_us": "공간전사체 분석 및 TME 다중오믹스 통합 방법론이 랩의 cancer immunology·T cell exhaustion·공간전사체 분석 관심사와 연결됨.",
        "limitations": "후향적 코호트 분석 포함, 인과관계 확립 한계; CDK7 억제는 전임상 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Exploring the shared genetic architecture and causal relationship between childhood maltreatment and psychiatric disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42768143/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42768143/",
        "doi": "https://doi.org/10.1038/s41380-026-03912-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Li N",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "CM 및 10개 정신질환 대규모 GWAS 요약통계를 수집",
          "LD score regression으로 유전상관 추정",
          "복합 귀무가설 하 다면발현(pleiotropy) 분석으로 공유 SNP 식별",
          "두 표본 및 두 단계 MR로 인과 효과 및 매개 경로 평가",
          "다중오믹스 통합으로 12개 다면발현 유전자 우선순위화"
        ],
        "concepts": [
          "genetic-correlation",
          "mendelian-randomization",
          "gwas-association-testing",
          "summary-statistics-methods",
          "partitioned-heritability",
          "fine-mapping",
          "molecular-qtl"
        ],
        "tldr": "아동기 학대(CM)와 10개 정신질환 간의 공유 유전 구조, 잠재적 인과 관계, 매개 경로를 GWAS 요약통계 기반의 유전상관·MR·다중오믹스 통합으로 체계적으로 분석.",
        "question": "아동기 학대는 정신질환 발생 위험을 인과적으로 높이는가, 그리고 이를 공유 유전 변이와 매개 경로 측면에서 어떻게 설명할 수 있는가?",
        "key_result": "CM은 10개 정신질환 모두와 유의한 양의 유전상관; PTSD와 가장 강함(rg=0.71); MR에서 CM→MDD(OR=1.61), 양극성장애(1.70), 조현병(2.33), ADHD(2.40), OCD(1.76), PTSD(1.24) 위험 증가 지지; 4,113개 공유 SNP → 167개 유전자; 12개 다면발현 유전자 신경발달·면역·신경신호 경로 농축; 생활습관·심리사회적 특성이 주요 매개변수로 제안.",
        "why_for_us": "GWAS 요약통계 기반 유전상관·MR·pleiotropy 분석·다중오믹스 통합 전 과정이 랩 핵심 방법론과 정확히 일치; 정신질환(MDD·SCZ·ASD) 도메인 커버.",
        "limitations": "MR 인과 추론은 가정 위반 가능성; 공유 SNP·유전자는 가설 생성 수준; 매개 분석은 직접 개입 연구 아님.",
        "reuse": "GWAS 요약통계(CM, 10개 정신질환) 재활용 가능; 공유 SNP 목록 및 다면발현 유전자 목록",
        "next_step": ""
      },
      {
        "title": "Long-Read sequencing in psychiatric omics: a systematic review of current evidence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42791269/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42791269/",
        "doi": "https://doi.org/10.1038/s41380-026-03909-5",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Real Karia BT",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "PRISMA 가이드라인에 따라 2,166개 문헌 검색 후 14개 논문 최종 선정하여 체계적 리뷰 수행",
          "LRS의 게놈(SV·de novo 변이), 전사체(아이소폼·이배체), 후성유전체(대립유전자 특이적 메틸화) 적용 분야별 증거 종합"
        ],
        "concepts": [
          "missing-heritability",
          "structural-variants-gwas",
          "allele-specific-expression",
          "tandem-repeats",
          "brain-isoform-diversity",
          "de-novo-variants",
          "haplotype-phasing"
        ],
        "tldr": "정신질환(조현병, ASD, MDD 등) 연구에서 장기 읽기 시퀀싱(LRS)의 적용 현황을 PRISMA 기반 체계적 리뷰로 정리. LRS가 SV 검출, 전장 전사체, 대립유전자 특이적 메틸화 분석에서 기존 단기 읽기 대비 우월함을 입증.",
        "question": "장기 읽기 시퀀싱은 정신질환의 유전체·전사체·후성유전체 연구에서 기존 단기 읽기 대비 어떤 추가적 정보를 제공하는가?",
        "key_result": "LRS는 중간 크기 SV 및 반복 서열 내 역위 검출에서 SRS보다 우수; 대뇌 피질의 신규 아이소폼 다양성과 광범위한 alternative splicing 사건 규명; 정신질환 위험은 유전자 총 발현량 변화보다 아이소폼 불균형에서 기인함을 제시; GWAS 유의 loci 내 대립유전자 특이적 메틸화 매핑 가능.",
        "why_for_us": "랩의 neuro(MDD, ASD, SCZ) 연구와 missing heritability, structural variants, allele-specific expression, mQTL 관심사에 직결; LRS 기반 분석 도입 검토에 유용한 참고 자료.",
        "limitations": "최종 포함 논문 수가 14개로 매우 제한적; 기술 비용·접근성 문제로 대규모 코호트 연구 부재; 결과 일반화에 한계.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A pericyte-to-myofibroblast transition links APOE4 to cerebrovascular degeneration.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42785300/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42785300/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.058",
        "journal": "Cell",
        "year": "2026",
        "author": "Schuldt BR",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 뇌혈관 단일세포 전사체 아틀라스를 구축하여 APOE4 보인자와 비보인자를 비교",
          "APOE4 환자 및 마우스 뇌에서 근섬유아세포 유사 세포군 면역형광 확인",
          "TGF-β 신호 억제 실험으로 pericyte 회복 및 섬유화·아밀로이드 감소 효과 검증"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "variant-to-cell-type"
        ],
        "tldr": "APOE4가 뇌혈관 주위세포(pericyte)를 근섬유아세포(myofibroblast)로 전환시켜 혈관 아밀로이드 축적과 섬유화를 유발하며, TGF-β 억제로 이를 되돌릴 수 있다.",
        "question": "APOE4가 어떤 세포 메커니즘을 통해 알츠하이머 뇌혈관 병변을 일으키는가?",
        "key_result": "APOE4 보인자에서 pericyte 수 유의미하게 감소, 근섬유아세포 유사 세포군 출현; APOE4 pericyte가 fibronectin을 분비해 혈관 아밀로이드 축적 촉진; TGF-β 억제 시 pericyte 커버리지 회복 및 섬유화·아밀로이드가 APOE3 수준으로 감소",
        "why_for_us": "단일세포 전사체 아틀라스 기반 세포 유형 특이적 분석과 AD 유전 위험 인자(APOE4) 연구가 랩의 sc-RNA, 뇌 eQTL/GRN, AD 병인 관심과 직결됨",
        "limitations": "TGF-β 억제의 전신 부작용 및 임상 적용 가능성 미검증; 단일 세포 아틀라스의 샘플 다양성 제한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Hippocampal AdipoR1 regulates the microglial response and delays disease progression in a mouse model of Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42778580/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42778580/",
        "doi": "https://doi.org/10.1038/s41380-026-03907-7",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Li J",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "APP/PS1 AD 마우스에서 해마 AdipoR1 발현 변화를 확인하고 knockdown/overexpression 실험을 수행",
          "In vitro·in vivo에서 AdipoR1이 미세아교세포 자가포식 및 지질 방울 축적에 미치는 영향 분석",
          "Aβ 제거, 시냅스 과식작용, 염증 인자 발현을 측정"
        ],
        "concepts": [
          "microglia-neuroimmune"
        ],
        "tldr": "알츠하이머 마우스 모델에서 해마 AdipoR1 과발현이 미세아교세포 자가포식 조절을 통해 지질 항상성을 회복시키고 Aβ 제거를 촉진하며 인지기능을 개선한다.",
        "question": "해마의 아디포넥틴 수용체 1(AdipoR1)이 AD 병태에서 미세아교세포 기능 및 인지기능에 어떤 역할을 하는가?",
        "key_result": "APP/PS1 마우스에서 해마 AdipoR1 발현 감소 확인; AdipoR1 과발현 시 인지기능 개선, 미세아교세포 활성화 억제, Aβ 제거 촉진, 시냅스 과식작용 감소; AdipoR1이 자가포식 조절을 통해 미세아교세포 내 비정상적 지질 방울 축적을 줄이는 메커니즘 규명.",
        "why_for_us": "랩의 microglia-neuroimmune 및 AD 병태생리 관심 영역에 해당하며, 미세아교세포 기능·지질 대사·신경면역 상호작용을 다루는 AD 분자 기전 논문으로 참고 가능.",
        "limitations": "인간 AD 조직 데이터 부재; 말초 아디포넥틴과 중추 AdipoR1 연계 메커니즘의 정량적 근거 부족.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single cell RNA-sequencing reveals neuron type-specific vulnerabilities in a model of STXBP1-related disorder.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42768145/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42768145/",
        "doi": "https://doi.org/10.1038/s41380-026-03869-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Roig Adam A",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "Stxbp1 haploinsufficiency 마우스 체성감각피질에서 단일세포 RNA-seq 수행",
          "퓨로마이신 편입 측정으로 단백질 번역 속도 평가",
          "발작 부담과 번역 관련 유전자 발현 상관분석 수행"
        ],
        "concepts": [
          "single-cell-eqtl",
          "de-novo-variants",
          "neurodevelopmental-trajectory",
          "brain-cell-atlas"
        ],
        "tldr": "STXBP1 반수체기능부전 마우스 모델의 체성감각피질에서 단일세포 RNA-seq을 수행해 세포 유형별 전사체 취약성을 지도화하고, GABAergic 및 흥분성 뉴런의 시냅스·번역 관련 경로 이상을 규명.",
        "question": "STXBP1 haploinsufficiency는 뇌 세포 유형별로 어떻게 다른 전사체 변화를 초래하며, 이것이 E/I 불균형과 STXBP1-RD 표현형을 어떻게 설명하는가?",
        "key_result": "GABAergic(특히 Sncg 인터뉴런)·심층 피라미드 뉴런에서 가장 두드러진 전사체 변화; 흥분성 뉴런에서 억제성보다 시냅스 조절장애 더 심함; 세포 유형 간 DEG 중복 거의 없음; 발작 부담은 아교세포·뉴런의 번역 유전자 발현과 음의 상관 관계.",
        "why_for_us": "단일세포 전사체 분석을 통한 세포 유형별 취약성 매핑 접근법이 랩의 ASD·신경발달장애 관심사 및 sc-RNA 방법론과 직접 연관.",
        "limitations": "마우스 모델 기반 결과로 인간 STXBP1-RD에 대한 직접 번역 제한; 체성감각피질 한 영역에 국한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Switching of transcriptional control from interferon regulatory factor 2 to interferon regulatory factor 1 drives innate immune cell activation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42772280/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42772280/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.049",
        "journal": "Cell",
        "year": "2026",
        "author": "Cadena C",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "Irf2 결핍 마우스에서 피부 염증의 원인을 유전·세포 수준으로 규명",
          "크로마틴 프로파일링(ChIP 등)으로 IRF1·IRF2가 동일한 ISG 조절 부위를 점유함을 확인",
          "TLR 신호 후 Irf1 유도 및 SPOP-프로테아솜 경로에 의한 IRF2 분해 메커니즘 규명"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "crispr-enhancer-mapping"
        ],
        "tldr": "IRF2가 항상성 조건에서 ISG 전사를 IRF1보다 약한 활성화인자로서 제한하지만, TLR 신호에 의해 IRF1이 유도되고 SPOP-프로테아솜 경로로 IRF2가 분해되면 IRF1 주도의 ISG 전사가 강화됨을 밝힘.",
        "question": "IRF2가 일부 염증 유전자를 활성화하면서도 피부 염증을 억제하는 역설적 기능의 분자 기전은 무엇인가?",
        "key_result": "IRF2는 IRF1보다 약한 전사 활성화인자로 동일 ISG 사이트를 경쟁적으로 점유해 ISG 전사를 제한하며, TLR 자극 후 IRF1 증가 및 SPOP 매개 IRF2 분해로 IRF1 주도 ISG 발현이 증폭되어 선천면역·자가염증이 강화됨.",
        "why_for_us": "자가면역(SLE, RA 등)에서 IFN 신호의 전사 조절 계층 구조를 이해하는 데 직접 관련되며, caQTL·ChIP-seq 분석 및 noncoding regulatory variant 해석에 참고할 수 있는 크로마틴 수준 전사인자 경쟁 모델을 제공함.",
        "limitations": "마우스 모델 중심이며 인간 자가면역 질환에서의 직접 검증은 제한적; SPOP 기질 특이성의 전체적 범위는 미규명.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The evolving landscape of drug targets.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42768085/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42768085/",
        "doi": "https://doi.org/10.1038/s41573-026-01530-3",
        "journal": "Nature reviews. Drug discovery",
        "year": "2026",
        "author": "Halip L",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "2000년대 이후 승인 약물의 표적 수·유형 트렌드 분석",
          "소분자·생물제제·유전자치료 등 치료 양식별 표적 분포 정량화",
          "유전체·단백체 데이터가 표적 발굴에 기여한 사례 검토"
        ],
        "concepts": [
          "drug-target-genetics",
          "mendelian-randomization",
          "pqtl-proteomics"
        ],
        "tldr": "지난 25년간 약물 표적 지형의 변화를 정량적으로 추적한 리뷰. 현재 686개 생체분자가 1,702개 약물의 표적으로 파악됨.",
        "question": "유전체학·단백체학·치료 양식의 다양화가 신약 표적 지형을 어떻게 변화시켜 왔는가?",
        "key_result": "현재 1,702개 약물이 686개 생체분자를 표적으로 함; 유전체·단백체 기반 표적 발굴이 지난 25년간 급격히 확장됨.",
        "why_for_us": "MR 및 drug-target genetics 관점에서 인과적 표적 발굴의 배경 지식으로 활용 가능.",
        "limitations": "리뷰 논문으로 새로운 실증 분석 없음; 미래 예측 일부는 투기적.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-09-20",
    "count": 25,
    "papers": [
      {
        "title": "All of Us diversity and scale yield context-dependent improvements in polygenic prediction.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42736379/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42736379/",
        "doi": "https://doi.org/10.1038/s41588-026-02734-4",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Tsuo K",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "All of Us WGS 245,388명과 UK Biobank 데이터를 통합해 32개 형질·질환에 대한 다조상 PRS 훈련",
          "조상별(African, European 등) PRS 성능 지표 비교",
          "meta-analysis(AoU+UKB) vs. AoU 단독 훈련 전략 비교",
          "조상 분기(ancestry divergence)에 따른 PRS 정확도 감쇠 패턴 분석"
        ],
        "concepts": [
          "polygenic-risk-score",
          "cross-ancestry-transferability",
          "genetic-architecture",
          "gwas-association-testing",
          "summary-statistics-methods",
          "statistical-power-gwas",
          "missing-heritability"
        ],
        "tldr": "All of Us 245,388명 전장유전체서열과 UK Biobank를 결합해 32개 형질에 대한 다조상 PRS를 개발하고, 조상·방법론·유전구조가 PRS 성능에 미치는 영향을 체계적으로 평가.",
        "question": "다양한 조상 배경의 대규모 바이오뱅크 데이터가 다조상 PRS 정확도를 향상시키는가? 특히 과소대표 집단에서 어떤 조건(샘플크기 vs. 조상 다양성)이 더 중요한가?",
        "key_result": "다조상 훈련 데이터가 과소대표 집단의 PRS 정확도를 향상; 다각형성(polygenic) 형질에서는 메타분석이 유리하지만, 덜 다각형성인 형질에서는 AoU 단독이 African 조상 참여자에게 더 우수(조상-특이 효과 반영). 개인 PRS 정확도는 발견 GWAS와의 조상 분기에 선형으로 감소하나, 다조상 훈련으로 이 감쇠가 완화됨.",
        "why_for_us": "PRS 방법론·교차조상 이전가능성 연구의 핵심 참고문헌; 다조상 PRS 훈련 전략 선택 시 직접 인용 가능. cross-ancestry-transferability, polygenic-risk-score, genetic-architecture 개념과 직결.",
        "limitations": "AoU 내에서도 일부 조상 집단의 샘플 크기가 제한적; 32개 형질에 한정된 분석으로 모든 형질에 일반화 불확실.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "3D chromatin remodeling during domestication defines novel targets for crop improvement.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42748920/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42748920/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.038",
        "journal": "Cell",
        "year": "2026",
        "author": "Huang X",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "반야생 34개·재배 267개 면화의 집단 규모 Hi-C 프로파일링으로 pan-3D 게놈 아틀라스 구축",
          "Chromatin interactome-wide association study(CIWAS)로 TAD 재구성 105개·루프 재배선 58개 발굴",
          "서열 기반 모델링 및 돌연변이 분석으로 YY1 단백질의 3D 구조 조절 역할 검증"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "partitioned-heritability",
          "gwas-association-testing",
          "credible-set"
        ],
        "tldr": "집단 규모 Hi-C 데이터를 활용해 면화 작물화 과정의 3D 게놈 재구성을 GWAS 방식(chromatin interactome-wide association study)으로 표현형과 연결하고, YY1이 3D 구조의 보존적 조절자임을 규명.",
        "question": "작물화 과정에서 3D 크로마틴 재구성이 어떻게 표현형 혁신에 기여하며, 이를 유전자형과 연결할 수 있는가?",
        "key_result": "CIWAS가 섬유 강도 유전력 추정치를 16%, 섬유 길이를 20% 향상; 작물화 선택 내 57%의 3D 형태 서명이 서열 수준 선택과 분리; YY1이 보존적 3D 게놈 조절자로 확인.",
        "why_for_us": "Hi-C 기반 chromatin interactome GWAS 방법론이 랩의 caQTL·noncoding regulatory variants·partitioned heritability 연구에 방법론적 참고가 됨.",
        "limitations": "식물(면화) 연구로 인간 질환 직접 적용에 한계; Hi-C 집단 분석의 실험 비용과 기술적 복잡성 높음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Type 1 interferon perturbates clonal competition by reshaping human blood development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42745000/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42745000/",
        "doi": "https://doi.org/10.1038/s41588-026-02751-3",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Lama C",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "MPN 환자의 HSC·전구세포·면역세포를 IFNα 치료 전후에 단세포 멀티오믹스(전사체 + 크로마틴 접근성)로 프로파일링",
          "정상 HSC와 돌연변이 HSC를 동시에 구분하여 각각의 분화 궤적, 면역표현형, 크로마틴 변화를 비교",
          "CALR- 및 JAK2-돌연변이별 IFNα 반응 차이를 세포주기 진입률과 분화 방향 측면에서 분석"
        ],
        "concepts": [
          "mosaic-chromosomal-alteration",
          "single-cell-eqtl",
          "caQTL",
          "noncoding-regulatory-variants"
        ],
        "tldr": "myeloproliferative neoplasm(MPN) 환자에서 IFNα 치료 전후 HSC를 단세포 멀티오믹스로 분석해, IFNα가 돌연변이 HSC의 클론 경쟁력을 어떻게 바꾸는지 밝힌 연구.",
        "question": "IFNα는 정상·돌연변이 조혈모세포(HSC) 각각의 분화 방향과 세포주기 진입에 어떤 차별적 영향을 미쳐 클론 경쟁을 변화시키는가?",
        "key_result": "IFNα는 HSC를 ① 항염증성 림프구 전구세포 확장 상태와 ② 염증성 골수 전구세포 상태 두 방향으로 동시에 활성화한다. 림프구 분화 증가가 MPN 특유의 골수 편향을 상쇄해 혈구 수를 정상화한다. CALR·JAK2 돌연변이 HSC는 염증성 골수 전구세포로의 분화에 저항성을 보여 IFNα 노출 시 클론 우위를 유지한다.",
        "why_for_us": "단세포 멀티오믹스(snRNA+ATAC)로 돌연변이·야생형 HSC를 동시 분석하는 방법론, 클론 동태(clonal fitness) 추적, 크로마틴 접근성 변화 해석이 우리 랩의 single-cell epigenomics·multiome 분석 역량과 직결된다. mosaic chromosomal alteration·caQTL·single-cell eQTL 연구에도 참조 가능.",
        "limitations": "단일 치료제(IFNα)에 국한되어 있고, 환자 코호트 규모 및 시계열 시점 수가 초록에 명시되지 않음. 기능적 검증(in vitro/in vivo)의 범위도 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "scBaseCount: An AI agent-curated, standardized, auto-updated single-cell data repository.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42753696/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42753696/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.025",
        "journal": "Cell",
        "year": "2026",
        "author": "Youngblut ND",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "SRA 전체를 마이닝하여 10x Genomics scRNA-seq 데이터셋을 AI 에이전트로 자동 발견·메타데이터 추출",
          "27개 생물체, 75개 조직에 걸쳐 5억 200만 개 세포를 균일한 파이프라인으로 처리",
          "인트론·엑손 reads 및 비코딩 유전자 발현을 모두 측정하도록 정렬 파이프라인 통일",
          "scBaseCount 공개 데이터베이스 및 AI 큐레이션 청사진 공개"
        ],
        "concepts": [
          "brain-cell-atlas",
          "cell-type-deconvolution"
        ],
        "tldr": "SRA 내 10x Genomics 단일세포 RNA-seq 데이터 전체를 AI 에이전트로 자동 탐색·메타데이터 추출·표준화 처리하여 5억 200만 개 세포로 구성된 scBaseCount 데이터베이스를 구축했다.",
        "question": "공개 시퀀싱 리포지터리(SRA)에서 단일세포 데이터를 자동으로 표준화하고 통합하려면 어떤 AI 기반 파이프라인이 필요한가?",
        "key_result": "현존 최대 공개 단일세포 유전자 발현 리포지터리 구축(502M+ 세포). 균일 처리로 실험 간 측정 일관성 향상 및 광범위한 표현형 다양성 확보.",
        "why_for_us": "랩의 단일세포 분석 파이프라인 구축 및 대규모 레퍼런스 데이터 활용 시 직접 참고 가능. 세포 유형 어노테이션, 배치 통합, 멀티오믹스 통합 연구에 유용한 자원.",
        "limitations": "10x Genomics 플랫폼에만 국한되어 있어 다른 단일세포 기술(Smart-seq 등)은 포함되지 않음. 메타데이터 자동 추출 오류 가능성 존재.",
        "reuse": "scBaseCount 데이터베이스 공개. 대규모 단일세포 모델 훈련 및 세포 유형 레퍼런스 구축에 재활용 가능.",
        "next_step": ""
      },
      {
        "title": "A world model of the virtual cell.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42753692/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42753692/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.042",
        "journal": "Cell",
        "year": "2026",
        "author": "Xing EP",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "Virtual Cell World Model(VCWM)의 개념, 아키텍처, 데이터 프레임워크, 학습 전략, 평가 원칙을 제안",
          "기존 생물학 foundation model들을 VCWM의 구성 요소로 활용하는 방안 논의",
          "행동 조건부 시뮬레이션·반사실적 추론·장기 계획을 지원하는 AI 패러다임을 세포 생물학에 적용"
        ],
        "concepts": [
          "perturb-seq",
          "spatial-transcriptomics"
        ],
        "tldr": "가상 세포(Virtual Cell)를 구현하기 위한 world model 아키텍처—세포 상태를 표현하고 유전·화학·환경 개입 하에서 분자·구조·형태적 결과를 시뮬레이션—를 제안한 비전 논문.",
        "question": "세포 생물학 실험의 조합 폭발 문제를 극복하기 위해 AI world model로 세포의 동적 상태와 개입 효과를 디지털로 시뮬레이션할 수 있는가?",
        "key_result": "실험적 결과 없음; VCWM이 특정 엔드포인트 예측 모델과 달리 세포 시스템 자체를 모델링하여 개입이 진화하는 상태를 통해 전파되도록 설계됨을 개념적으로 제시.",
        "why_for_us": "단일세포 RNA/ATAC 및 perturb-seq 데이터를 활용하는 랩에서 세포 상태 예측·개입 설계 연구의 장기 방향으로 참고 가치가 있음.",
        "limitations": "비전 논문으로 실증적 구현·벤치마크 부재; 실제 생물학적 복잡성에서의 한계 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Gene regulatory mechanisms downstream of DNA methylation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42754729/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42754729/",
        "doi": "https://doi.org/10.1038/s41576-026-01008-3",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Buckley TJ",
        "rating": 4,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "메틸화 리더(reader) 단백질의 종류와 기능을 체계적으로 정리",
          "전사인자가 메틸화를 해석해 크로마틴 접근성을 조절하는 기전 검토",
          "포유류와 식물에서 메틸화-의존적 전사 억제·활성화 비교",
          "메틸화와 히스톤 변형 등 병렬 후성유전 시스템 간 상호작용 고찰"
        ],
        "concepts": [
          "molecular-qtl",
          "noncoding-regulatory-variants",
          "allele-specific-expression"
        ],
        "tldr": "DNA 메틸화가 전사 조절에 영향을 미치는 하위(downstream) 기전—리더 단백질, 전사인자, 크로마틴 구조 재편—을 포유류·식물을 아울러 종합 리뷰함.",
        "question": "DNA 메틸화 표지는 어떤 단백질/복합체를 통해 크로마틴 구조와 전사 프로그램을 변화시키는가?",
        "key_result": "전사적·후성유전적 상태는 중첩·계층화된 메틸화 의존 기전들의 부분적 중복으로부터 견고성을 얻음. 리더 단백질이 효과기 복합체를 유도해 메틸화 패턴을 유지하거나 크로마틴 접근성을 조절함.",
        "why_for_us": "mQTL/caQTL 분석 및 메틸화 기반 멀티오믹스 통합 연구의 생물학적 배경 이해에 직접 기여. 자가면역·신경계 질환에서 후성유전 조절 연구와도 연결됨.",
        "limitations": "리뷰 논문으로 원천 실험 데이터 없음. 포유류-식물 간 직접 비교의 해석적 한계.",
        "reuse": "초록에 명시 없음.",
        "next_step": "초록에 명시 없음."
      },
      {
        "title": "Encoded and non-genetic protein variants expand human functional proteome.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42742175/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42742175/",
        "doi": "https://doi.org/10.1038/s41586-026-11124-z",
        "journal": "Nature",
        "year": "2026",
        "author": "Tretyachenko V",
        "rating": 4,
        "emoji": "🧪",
        "domain": "단백체",
        "what_they_did": [
          "29개 건강한 인간 조직 유래 대규모 프로테오게노믹스 데이터셋을 구축·분석",
          "이형접합성, 체세포 돌연변이, 전사 오류, 번역 오류 등 각 단계별 변이 기원을 구분하는 분석 파이프라인 적용",
          "7,215개 고유 단일 아미노산 치환을 포함한 13,910개 변이체를 신뢰도 높게 국소화 및 정량화",
          "변이체의 기능적 결과를 평가하는 방법론 개발"
        ],
        "concepts": [
          "proteomics-quantification",
          "pqtl-proteomics",
          "mass-spectrometry-proteomics",
          "allele-specific-expression",
          "dda-vs-dia"
        ],
        "tldr": "29개 건강한 인간 조직의 대규모 프로테오게노믹스 데이터셋에서 이형접합성·체세포 돌연변이·전사/번역 오류 유래 단일 아미노산 치환 변이체 13,910개를 발굴하여, 인간 기능적 프로테옴이 유전체 서열 이상으로 훨씬 다양함을 보임.",
        "question": "센트럴 도그마의 각 단계(DNA→RNA→단백질)에서 발생하는 변이가 단일 인간 프로테옴 내에 어느 정도의 다양성을 만들어내는가?",
        "key_result": "단일 인간 프로테옴 내에 13,910개의 신뢰도 높은 변이 위치(7,215개 고유 단일 아미노산 치환)가 공존하며, 이는 기존 유전체 서열만으로 예측되던 프로테옴 다양성을 대폭 상회함.",
        "why_for_us": "pQTL 및 프로테오믹스 통합 분석에서 단백질 변이체의 출처(유전적 vs 비유전적)를 구분하는 것이 중요한 랩 연구와 직접 관련; 프로테오게노믹스 방법론 및 proteomics-quantification 개념 확장에 활용 가능.",
        "limitations": "건강한 조직만 분석하여 질환 상태에서의 변이체 다양성 추론이 제한적; 비유전적 변이체(전사/번역 오류)의 기능적 의의 검증이 초록 수준에서 명확히 기술되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Faecalibacterium prausnitzii EXL01 Strain for the prevention of multiple-recurrent Clostridioides difficile Infection.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42753987/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42753987/",
        "doi": "https://doi.org/10.1053/j.gastro.2026.09.002",
        "journal": "Gastroenterology",
        "year": "2026",
        "author": "Benech N",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "마우스 CDI 모델에서 EXL01의 C. difficile 부하 및 장 염증 감소 효과 검증",
          "다기관 오픈라벨 단일군 1상 임상시험(n=6, ≥3회 CDI 삽화 성인)에서 8주 EXL01 경구 투여",
          "종단 분변 샘플에 쇼트건 메타게노믹스 + 대사체학 적용",
          "in vitro에서 EXL01의 담즙산 탈포합(deconjugation) 능력 확인",
          "결과를 매칭된 FMT 코호트와 비교"
        ],
        "concepts": [
          "functional-profiling",
          "strain-level-profiling",
          "amplicon-vs-shotgun"
        ],
        "tldr": "단일 공생균 주(Faecalibacterium prausnitzii EXL01)를 이용해 재발성 C. difficile 감염(rCDI) 6명에서 안전성과 재발 억제(83.3%)를 확인하고, 쇼트건 메타게노믹스+대사체학으로 담즙산·단쇄지방산 복원 기전을 규명.",
        "question": "분류학적 복잡성 없이 단일 균주로 rCDI 생태계 기능을 회복하고 재발을 막을 수 있는가?",
        "key_result": "6명 중 5명(83.3%)이 8주 시점 무재발. 처리 관련 중대 이상반응 없음(grade 1-2만). EXL01 정착은 1차 담즙산 감소·2차 담즙산 증가·부티레이트 생산 증가와 상관. 분류학적 회복이 제한적임에도 기능적 복원 달성.",
        "why_for_us": "쇼트건 메타게노믹스 + 대사체학 통합 분석 방법론이 랩 관심 영역(metagenomics, metabolomics)과 일치. 마이크로바이옴 기능 복원 vs. 분류학적 복원의 해리는 기능적 프로파일링 관련 개념에 유용한 사례.",
        "limitations": "임상 n=6으로 통계적 결론 제한. 오픈라벨 단일군 설계로 위약 효과 배제 불가. 대조 임상시험은 진행 중.",
        "reuse": "초록에 명시 없음.",
        "next_step": "대조 임상시험(NCT06306014) 진행 중."
      },
      {
        "title": "Gut single-microbe landscape in patients with major depressive disorder and bipolar disorder.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42736349/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42736349/",
        "doi": "https://doi.org/10.1038/s41380-026-03882-z",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Chen Y",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "MDD 5명, BD 5명, 건강대조군 5명 장내 미생물 샘플에 droplet 기반 smRNA-seq2 적용",
          "33,174개 단일 미생물 세포를 37개 클러스터로 비지도 군집화",
          "산화 스트레스·대사 유전자(sodB, mdh2, eno2) 및 스트레스 반응 유전자(htpG_1, groL, dnaK, clpB) 발현 차이 분석",
          "ko03110(샤페론·단백질 접힘) 경로의 종 특이적 패턴 분석"
        ],
        "concepts": [
          "functional-profiling",
          "alpha-diversity",
          "compositional-data-analysis",
          "strain-level-profiling"
        ],
        "tldr": "단일 미생물 RNA 시퀀싱(smRNA-seq2)을 MDD·BD·건강대조군 장내 미생물에 적용하여 33,174개 단일 미생물 세포의 전사 아틀라스를 구축한 탐색적 연구.",
        "question": "단일 미생물 수준의 RNA-seq으로 MDD·BD 환자 장내 미생물의 기능적·표현형적 이질성을 포착할 수 있는가?",
        "key_result": "질환군 간 종 조성 및 전사 패턴 차이 확인; Clostridium_Q sp.는 건강군에서 증가, Enterocloster sp.·Fusicatenibacter saccharivorans는 BD에서 상승, Phocaeicola dorei는 MDD에서 감소.",
        "why_for_us": "단일 미생물 RNA-seq이라는 신규 방법론이 메타지노믹스 툴킷 확장에 참고가 되며, MDD 관련 미생물 기능 이질성은 우리 랩 neuro-microbiome 연구와 연계 가능.",
        "limitations": "샘플 수 극소(각 군 5명), 탐색적 연구로 인과 관계 불명, 더 큰 코호트 검증 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Epidemiology, mechanisms and clinical implications of heat-related kidney disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42749859/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42749859/",
        "doi": "https://doi.org/10.1038/s41581-026-01126-5",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "McMullen L",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "고온과 신장 이환율 간의 역학 데이터를 종합 검토",
          "직업적·농업적 코호트에서 열 스트레스 신장 손상과 CKD 연관성 분석 문헌 고찰",
          "열 취약성의 구조적 결정요인(주거 환경, 직업 노출, 냉방 접근성) 및 생리적 취약성(연령, 동반 질환) 정리",
          "CKD 환자 대상 개별화된 열 위험 완화 근거 및 정책 대응 방향 제시"
        ],
        "concepts": [],
        "tldr": "열 노출이 신장 건강에 미치는 역학·기전·임상적 함의를 체계적으로 리뷰하고, 기후변화 맥락에서 CKD 환자군의 이중 위협과 불평등 문제를 조명함.",
        "question": "기후변화로 인한 열 노출이 CKD 발생·진행에 얼마나 기여하며, 고위험군을 어떻게 보호할 수 있는가?",
        "key_result": "고온은 급성 신장 손상 및 CKD 이환율 증가와 일관되게 연관됨. CKD 환자는 열 사건 시 급성 이환과 신기능 가속 감소의 이중 위협에 노출되며, 현재의 임상 근거는 주로 건강한 자원자 연구에서 외삽된 것임.",
        "why_for_us": "신장 도메인(nephro) 연구 맥락에서 CKD의 환경적 위험 인자를 이해하는 배경 리뷰로 활용 가능. 유전-환경 상호작용 연구 및 CKD GWAS 해석 시 환경 공변량 고려에 참고.",
        "limitations": "광범위 인구에서의 CKD 발생·진행에 대한 열 기여도는 아직 불충분하게 규명됨. 임상 근거가 건강한 지원자 데이터에서 외삽된 것으로 CKD 환자 특이적 지침 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Tahoe-100M: Mapping drug-induced molecular phenotypes at single-cell resolution.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42753697/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42753697/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.035",
        "journal": "Cell",
        "year": "2026",
        "author": "Zhang J",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "Mosaic 플랫폼으로 유전적으로 다양한 세포주를 '세포 빌리지'로 다중화하여 배치 효과를 최소화",
          "50개 암 세포주 × 1,100 약물-용량 조건에서 1억 개 단일세포 전사체 생성",
          "증식·세포독성·세포주기·계통 취약성 등 세포 표현형을 정량화",
          "경로 기반 시그니처로 약물 유도 발현 프로그램, 작용 기전 분류, 오프-타겟 활동 및 내성 관련 적응 스트레스 반응 규명"
        ],
        "concepts": [
          "perturb-seq",
          "drug-target-genetics"
        ],
        "tldr": "50개 암 세포주에 1,100가지 약물·용량 조건을 처리한 1억 개 단일세포 전사체 퍼터베이션 아틀라스(Tahoe-100M)를 구축, 약물 작용 기전·내성 기전·세포 운명 이질성을 체계적으로 분석했다.",
        "question": "대규모 단일세포 약물 퍼터베이션 데이터를 통해 약물 반응의 분자적 표현형과 세포 이질성을 어떻게 포괄적으로 특성화할 수 있는가?",
        "key_result": "약물이 세포를 분기된 운명 또는 수렴된 상태로 유도하는지 집단 수준에서 특성화 가능함을 보였으며, 경로 시그니처로 작용 기전 분류 및 내성 관련 스트레스 반응을 노출했다.",
        "why_for_us": "단일세포 퍼터베이션 아틀라스는 랩의 single-cell 멀티오믹스, 암 면역학, 약물 표적 유전학 연구와 직결되며, 대규모 공개 데이터를 재분석하거나 AI 모델 훈련에 활용 가능하다.",
        "limitations": "세포주 기반 데이터라 in vivo 종양 미세환경과의 괴리가 있음. 단일 오믹스(전사체)만 측정하여 단백체·후성유전체 변화는 반영 안 됨.",
        "reuse": "Tahoe-100M 데이터셋 공개. AI 프레임워크 훈련 및 유전자 조절 네트워크 모델링에 재활용 가능.",
        "next_step": ""
      },
      {
        "title": "Viral mimicry escape as a necessary feature of malignant transformation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42744865/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42744865/",
        "doi": "https://doi.org/10.1038/s41568-026-00977-1",
        "journal": "Nature reviews. Cancer",
        "year": "2026",
        "author": "Chen R",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "암 관련 DNA 메틸화·히스톤 변형·스플라이싱·RNA 가공 변화가 TE 재활성화와 면역원성 핵산 축적을 야기하는 기전 정리",
          "암세포의 바이러스 모방 억제 전략(후성유전적 재억제, RNA 편집, 핵산 분해, 인터페론 신호 감쇠) 체계적 리뷰",
          "바이러스 모방 탈출을 암 개시·진행의 보편적 필수 과정으로 개념화하고 면역치료와의 병용 가능성 제시"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "allele-specific-expression"
        ],
        "tldr": "암세포가 정상적으로 침묵된 전이인자(TE)·내인성 레트로바이러스 등을 재활성화해 항바이러스 반응(바이러스 모방)을 유발하고, 이를 억제(탈출)하는 것이 악성 형질전환의 필수 과정임을 주장하는 리뷰.",
        "question": "암세포는 어떻게 transposable element(TE) 유래 면역원성 핵산이 촉발하는 '바이러스 모방(viral mimicry)' 억제 면역 감시를 회피하는가?",
        "key_result": "바이러스 모방 탈출은 암 형질전환의 필수 단계로, DNMT·HDAC 등의 후성유전 경로와 인터페론 신호 억제가 핵심 메커니즘이다. 이를 치료 표적으로 활용하면 면역치료 병용 시 시너지가 기대된다.",
        "why_for_us": "HERV·TE 재활성화와 자가면역(autoimmune) 및 암 면역의 교차점이 우리 랩 HERV 관심사와 일치. 특히 epigenetic dysregulation → HERV reactivation → 면역 활성화 경로가 직접 관련.",
        "limitations": "리뷰 논문으로 독자적 실험 데이터 없음. 특정 암종·TE 서브패밀리에 대한 일반화 가능성 검토 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Targeting BLVRB Overcomes Immunosuppression and Potentiates Immunotherapy in Monocytic Acute Myeloid Leukemia.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42742315/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42742315/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-26-0447",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Mo Z",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "원발성 AML 샘플에 대해 단세포 멀티오믹스(scRNA + 추가 오믹스) 분석을 수행하여 면역억제 지형을 규명",
          "BLVRB를 면역억제성 단핵구성 AML 세포의 마커로 동정",
          "BLVRB 결핍 시 면역조절 유전자 발현 감소 및 T세포 세포독성 감수성 증가를 세포주·PDX 모델에서 검증",
          "BLVRB-MAFB 전사인자 축에 의한 면역억제 유전자 발현 조절 기전을 규명",
          "소분자 Tamibarotene이 BLVRB를 표적으로 CAR-T 및 항-PD-1 효능을 향상시킴을 확인"
        ],
        "concepts": [
          "single-cell-eqtl",
          "variant-to-cell-type"
        ],
        "tldr": "단세포 멀티오믹스로 단핵구성 AML의 면역억제 지형을 해독하고, BLVRB를 핵심 면역억제 마커로 동정하여 CAR-T·항-PD-1 병용 효능을 높이는 치료 타깃으로 제시함.",
        "question": "단핵구성 AML에서 면역억제를 주도하는 분자 드라이버는 무엇이며, 이를 표적화하면 면역치료 효과를 개선할 수 있는가?",
        "key_result": "BLVRB 고발현이 단핵구성 AML의 면역억제 표현형을 규정하며, Tamibarotene 처리 시 CAR-T·항-PD-1 병용 효능이 세포주 및 PDX 모델에서 유의하게 향상됨.",
        "why_for_us": "단세포 멀티오믹스 분석 방법론과 암 면역(T세포 탈진·TME) 관심에 직결되는 논문; 종양 미세환경 내 면역억제 세포 동정에 단세포 오믹스를 활용한 사례로 참고 가능.",
        "limitations": "단핵구성 AML에 국한된 연구로 다른 AML 아형 또는 고형암으로의 일반화 여부 불명확; in vivo 효능 데이터가 PDX 모델에 한정.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial analysis reveals the evolving organization of IDH-mutant glioma.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42735681/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42735681/",
        "doi": "https://doi.org/10.1016/j.ccell.2026.08.005",
        "journal": "Cancer cell",
        "year": "2026",
        "author": "Hoefflin R",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "IDH 돌연변이 신경교종 88개 조직 절편에 공간 전사체(ST) 및 공간 단백체 적용, 3개 시점에 걸쳐 분석",
          "저등급 종양에서 피질-백질 경계부의 기능적 장벽 역할 확인",
          "OPC 유사 악성 세포의 경계 침범 패턴 분석",
          "고등급 종양에서 저산소증 주도 공간 구조 확인(IDH-wild-type 교모세포종과 유사)"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "cell-type-deconvolution"
        ],
        "tldr": "IDH 돌연변이 신경교종에서 공간 전사체·단백체를 결합하여 조직학적 등급별 종양 공간 조직화 원리를 규명한 연구.",
        "question": "IDH 돌연변이 신경교종에서 종양 등급에 따른 공간적 세포 구성과 미세환경 상호작용은 어떻게 달라지는가?",
        "key_result": "저등급 종양: 뇌 해부학 주도 공간 구조 및 피질-백질 기능 경계 존재; 중간 등급: 비조직화; 고등급: 저산소증 주도 구조로 등급-공간 조직화 2축 프레임워크 제시.",
        "why_for_us": "공간 전사체+단백체 통합 방법론 및 종양 미세환경 분석 전략이 우리 랩 멀티오믹스 통합·cancer immunology 연구에 참고가 됨.",
        "limitations": "단일 종양 유형(IDH-mut 신경교종)에 국한, 인과적 기전 미확정.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "APOE-stratified genome-wide association analyses provide insights into the genetic etiology of Alzheimers's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42736378/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42736378/",
        "doi": "https://doi.org/10.1038/s41588-026-02713-9",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Thomassen JQ",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "90개 이상의 기존 AD GWAS 위험 유전자좌를 배경으로 APOE ε2/ε3/ε4 유전형별 층화 분석 수행",
          "APOE 유전형에 따른 유전-환경 상호작용(이형성) 검정",
          "층화 분석으로 새로운 유전자좌 및 APOE 유전형 특이적 효과 확인"
        ],
        "concepts": [
          "gwas-association-testing",
          "fine-mapping",
          "genetic-architecture",
          "credible-set",
          "partitioned-heritability"
        ],
        "tldr": "APOE ε2/ε3/ε4 유전형으로 층화한 GWAS를 수행하여 알츠하이머병의 유전적 이질성과 새로운 위험 유전자좌를 규명한 대규모 연구.",
        "question": "APOE 유전형별로 AD GWAS를 층화하면 전체 분석에서 놓쳤던 유전적 위험 요인을 발굴할 수 있는가?",
        "key_result": "APOE 유전형 층화 GWAS를 통해 APOE-의존적 유전 구조를 해명하였으며, 기존 전체 분석 대비 추가적인 위험 유전자좌 발굴(구체적 수치는 초록에 미기재).",
        "why_for_us": "AD GWAS 층화 전략, fine-mapping, 유전적 이질성 분석은 우리 랩의 GWAS/QTL/fine-mapping 파이프라인과 직접 연결되며, 신경 질환 도메인에서의 방법론적 참고 사례.",
        "limitations": "초록에 구체적인 샘플 수, p값, 새 유전자좌 수 등 수치가 명시되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Transcriptome-based classification in mice with ASD-risk mutations.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42752124/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42752124/",
        "doi": "https://doi.org/10.1126/science.adz6688",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Roh JD",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "17개 ASD 위험 돌연변이 마우스 계통에 대해 성별 균형을 맞춘 1008개 전전두피질 bulk RNA-seq 프로파일을 생성",
          "두 개의 상반된 전사체 상태(그룹1, 그룹2) 분류 체계 수립",
          "그룹 간 성별 편향, 지역 특이성, 발달 안정성, 세포 유형 리모델링, 플루옥세틴/리튬 반응 차이 분석",
          "단핵 RNA-seq(snRNA-seq)으로 세포 유형별 모듈 분석 및 bulk 전사체 패턴과의 대응 확인"
        ],
        "concepts": [
          "de-novo-variants",
          "single-cell-eqtl",
          "neurodevelopmental-trajectory",
          "sex-differences-psychiatric",
          "brain-cell-atlas"
        ],
        "tldr": "ASD 위험 돌연변이를 가진 17개 마우스 계통에서 1008개 전전두엽 RNA-seq 프로파일을 수집해 두 가지 대립적 전사체 상태(그룹1/2)를 발견하고, 단핵 RNA-seq으로 세포 유형 수준의 재편성을 분석함.",
        "question": "1200개 이상의 ASD 위험 유전자가 전사체 수준에서 공통된 분자적 패턴을 가지는가?",
        "key_result": "그룹1은 그룹2보다 더 광범위한 세포 유형 리모델링을 보였으며, 시냅스 방향성이 보존된 하위그룹을 식별함. 독립적인 마우스 계통도 이 분류 체계로 분류 가능.",
        "why_for_us": "ASD 유전 구조와 분자적 계층화(molecular stratification)에 관한 연구로, 단일세포 전사체·유전자 발현 모듈·신경발달 표현형 연계 분석에 직접적으로 연관됨. de novo 변이·세포 유형 특이적 eQTL 해석에도 활용 가능.",
        "limitations": "마우스 모델 기반으로 인간 ASD에 대한 직접 일반화에는 한계가 있음. 분류 기반의 계층화가 임상적 표현형과 어떻게 연결되는지 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The genetic overlap between schizophrenia and major depression with cognitive function.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42749774/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42749774/",
        "doi": "https://doi.org/10.1038/s41380-026-03887-8",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Su Q",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "SCZ(N=175,799), MDD(N=2,622,273), 인지 4종 형질 GWAS 요약 통계량 통합",
          "LD score regression으로 유전 상관 추정",
          "Bayesian colocalization으로 공유 유전 영역 탐색",
          "유전자 매핑 및 과대표현 분석(ORA)으로 경로 분석"
        ],
        "concepts": [
          "genetic-correlation",
          "colocalization",
          "gwas-association-testing",
          "summary-statistics-methods",
          "fine-mapping"
        ],
        "tldr": "SCZ·MDD와 인지 기능 간의 공유 유전 구조를 대규모 GWAS 통계량 통합(LD score regression + Bayesian colocalization)으로 체계적으로 해부.",
        "question": "SCZ·MDD와 인지 기능(반응 시간, 기억력 등) 사이의 공유 유전 변이는 무엇인가?",
        "key_result": "SCZ-반응시간·기억·언어수리추론 간 유의한 음의 유전 상관; SCZ-인지 7개 유전체 영역 colocalization 강한/지지 증거, MD-인지 2개 영역 지지 증거; SCZ 연관 유전자는 수송 경로, MDD 연관 유전자는 신경 발달 경로에 집중.",
        "why_for_us": "GWAS summary statistics 통합, 유전 상관(genetic-correlation), colocalization 방법론이 랩 핵심 방법과 정확히 일치; SCZ·MDD 질환 도메인 해당.",
        "limitations": "GWAS 요약 통계량만 사용해 인과 방향 불분명; 인지 형질 측정 이질성; 동양인 집단 포함 여부 불확실.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Atypical Alzheimer disease: a multi-axis framework toward defining heterogeneity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42760345/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42760345/",
        "doi": "https://doi.org/10.1038/s41582-026-01267-y",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Grinberg LT",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "후방 피질 위축, 언어변이형 원발성 진행성 실어증, 행동·실행기능 AD, 피질기저 증후군 등 비전형 AD 변이형의 임상·신경병리·영상·유전·분자 근거를 종합 리뷰함",
          "임상 표현형 / AD 생물학적 맥락(Aβ·타우·동반 병리) / 네트워크 위상(영역별 패턴) / 진행 속도(tempo) 4축으로 구성된 실용적 분류 체계 제안",
          "선택적 신경회로 취약성에 관여하는 면역-신경교, 혈관, 단백질 처리, 시냅스, 유전 요인들을 검토"
        ],
        "concepts": [
          "genetic-architecture",
          "fine-mapping",
          "partitioned-heritability"
        ],
        "tldr": "비전형(atypical) AD의 임상 변이형들을 통합하는 다축(multi-axis) 분류 체계를 제안하여, 이질적인 AD 스펙트럼을 임상표현형·생물학적 맥락·네트워크 위상·진행 속도 네 축으로 구조화함.",
        "question": "전형적 기억 장애 외 다양한 증상을 보이는 비전형 AD를 어떻게 일관된 틀로 분류하고 병태생리적 이질성을 설명할 수 있는가?",
        "key_result": "비전형 AD는 총 Aβ·타우 부담보다 국소 타우 분포·네트워크 위상이 증상을 더 잘 예측하며, 다축 체계는 진단 불일치 감소·코호트 비교 가능성 향상·맞춤형 임상시험 아웃컴 설계를 지원한다.",
        "why_for_us": "AD 유전체·멀티오믹스 연구 시 비전형 AD 이질성을 고려한 층화(stratification) 전략 설계에 참고할 수 있으며, 신경회로 취약성 관련 유전 인자 발굴(GWAS/QTL) 방향을 제시함.",
        "limitations": "리뷰 논문으로 자체 데이터 없음; 제안된 다축 체계의 임상적 타당성은 전향적 검증 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "De novo variants in the poly(rC)-binding protein gene PCBP1 cause a neurodevelopmental disorder.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42749777/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42749777/",
        "doi": "https://doi.org/10.1038/s41380-026-03877-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Deb W",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "국제 다기관 공동연구로 16개 가계 17명에서 PCBP1 de novo 병원성 변이 16종 발굴",
          "생쥐 해마 신경세포 배양에서 수지상 분지 형성에 미치는 기능 분석 수행",
          "환자 유래 T세포의 RNA-seq으로 엑손 스킵 증가 등 전사체 서명 분석"
        ],
        "concepts": [
          "de-novo-variants",
          "neurodevelopmental-trajectory",
          "brain-isoform-diversity"
        ],
        "tldr": "PCBP1 유전자의 de novo 변이가 지적장애·ASD를 유발하며, 스플라이싱 결함과 수지상 형성 장애가 핵심 기전임을 다국가 코호트에서 규명.",
        "question": "PCBP1 de novo 변이가 어떻게 신경발달장애를 유발하는가?",
        "key_result": "전체 대상자가 지적장애를 보이고 ASD가 두드러지는 표현형을 가짐; PCBP1 변이는 수지상 분지 형성 감소, 환자 T세포에서 엑손 스킵 유의미하게 증가.",
        "why_for_us": "ASD·신경발달 유전학(de novo 변이, 스플라이싱 QTL) 관심 영역과 직결; de-novo-variants 및 neurodevelopmental-trajectory 위키 개념과 연결됨.",
        "limitations": "소규모 환자 코호트(N=17), T세포 기반 전사체 데이터가 뇌 신경세포를 대리하는지 불확실.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Inflection points and transitions in Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42749285/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42749285/",
        "doi": "https://doi.org/10.1038/s41586-026-11110-5",
        "journal": "Nature",
        "year": "2026",
        "author": "De Strooper B",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "아밀로이드 축적→Tau 인산화→신경 퇴행의 기존 선형 모델을 비판적으로 검토",
          "분자·세포·네트워크 수준의 이산 위상과 생물학적 변곡점 개념 제안",
          "아밀로이드 연관 Tau 인산화를 핵심 변곡점으로 제시하는 2단계 모자이크 진행 모델 구성"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "brain-cell-atlas"
        ],
        "tldr": "알츠하이머병을 선형 아밀로이드 캐스케이드가 아닌, 생물학적 변곡점(inflection point)에서 질적 전환이 일어나는 비선형 위상 모델로 재개념화한 리뷰·관점 논문.",
        "question": "알츠하이머병의 병리-증상 해리와 가족성/산발성 공통 구조를 어떻게 통일된 프레임으로 설명할 수 있는가?",
        "key_result": "병리와 증상의 해리, 뇌 내 모자이크 분포, 가족성·산발성 공유 구조를 변곡점 모델로 설명; 항상성 회복력 점진적 소실이 진행 속도를 결정한다고 제안.",
        "why_for_us": "AD 신경유전학·멀티오믹스 연구의 개념적 배경 자료로 활용 가능; 질환 단계 구분이 GWAS/QTL 층화 분석 설계에 참고가 됨.",
        "limitations": "실험 데이터가 없는 관점(Perspective) 논문; 변곡점의 정량적 정의 및 측정 방법 미제시.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Somatic mosaicism in the brain: linking development, ageing and neurodegeneration.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42736451/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42736451/",
        "doi": "https://doi.org/10.1038/s41582-026-01268-x",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Zhou Z",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "체세포 모자이시즘 관련 현재까지의 증거를 체계적으로 종합(리뷰)",
          "벌크·오류보정·단일세포 시퀀싱 등 검출 방법론의 장단점 비교",
          "발생 초기 vs. 노화 관련 변이의 클론 구조 차이 분석",
          "신경발달(ASD 등)과 신경퇴행(AD, PD 등) 표현형과의 연관 데이터 요약"
        ],
        "concepts": [
          "mosaic-chromosomal-alteration",
          "de-novo-variants",
          "variant-calling",
          "single-cell-eqtl"
        ],
        "tldr": "뇌 체세포 모자이시즘의 발생·노화·신경퇴행 전반을 포괄하는 리뷰. 발생 타이밍, 클론 구조, 세포유형별 선택압이 신경질환에 미치는 영향을 정리하고, 단일세포 시퀀싱 기반 검출 기법과 임상 번역 가능성을 논한다.",
        "question": "발생 이후 후접합체적으로 획득된 체세포 변이가 뇌의 구조·기능에 어떤 메커니즘으로 기여하며, 신경발달장애와 신경퇴행 사이를 어떻게 연결하는가?",
        "key_result": "초기 배아 변이는 광역 클론·심각한 표현형을 만들고, 후기 변이는 제한적; 노화 시 DNA 손상 축적으로 세포 회복력 저하. 뇌 체세포 변이가 국소 병변에서 네트워크 수준 기능장애까지 연결되는 통합 프레임워크 제시.",
        "why_for_us": "mosaic-chromosomal-alteration, de-novo-variants 개념과 직접 연결되며, 신경(ASD, AD, PD) 도메인 분석 시 체세포 변이 영향을 이해하는 배경 지식으로 활용 가능.",
        "limitations": "인과성 확립을 위한 종단 코호트 데이터 부족; 단일세포 시퀀싱의 검출 민감도·임상 번역 한계 언급.",
        "reuse": "",
        "next_step": "게놈·세포·생리 분석을 종단 인체 연구에 통합하여 인과관계 정의, 바이오마커 발굴, 표적 치료 개발 방향 제시."
      },
      {
        "title": "Spatiotemporal single-cell profiling reveals T cell clonal dynamics and phenotypic plasticity in human graft-versus-host disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42754741/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42754741/",
        "doi": "https://doi.org/10.1038/s41590-026-02631-2",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Shi L",
        "rating": 4,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "이식 수혜자 31명에서 종단 TCR 시퀀싱 + scRNA-seq/TCR-seq + 공간전사체 데이터를 통합 수집",
          "DecompTCR 계산 도구를 개발해 클론별 시간적 동태를 분해",
          "공간전사체 기반 클론 표현형·니치 매핑 파이프라인 구축",
          "사이클로포스파마이드 처리 전후 동종반응성 클론 변화 분석"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "single-cell-eqtl",
          "variant-to-cell-type"
        ],
        "tldr": "이식편대숙주병(GvHD) 환자 31명을 대상으로 TCR 프로파일링·단일세포 RNA-seq·공간전사체를 통합해 T세포 클론의 시간적 동태와 조직 내 위치를 동시에 추적함.",
        "question": "인간 GvHD에서 동종반응성 T세포 클론은 어떻게 확장·유지되며, 중증도와 어떤 연관이 있는가?",
        "key_result": "사이클로포스파마이드는 동종반응성 클론을 선택적으로 제거하지만, 초기 확장이 불충분하면 불완전 제거로 중증 GvHD가 유발됨. 중증 GvHD는 동종반응성 클론의 지속 확장, 항상성 세포유형의 재배선, 공여자 유래 CD8 T세포의 다양화로 특징지어짐.",
        "why_for_us": "단일세포 eQTL/QTL 연구에서 활용되는 scRNA-seq+TCR 통합 분석 및 공간전사체 방법론이 직접 사용됨. T세포 탈진·상태·클론 동태는 암 면역학 및 자가면역 관심 분야와 일치. DecompTCR 등 새 계산 도구는 재활용 가능.",
        "limitations": "단일군 관찰 연구(n=31)로 인과 추론 제한. 인간 GvHD 특이적 결과의 일반화 한계.",
        "reuse": "DecompTCR 도구 및 scRNA-seq+TCR+공간전사체 통합 파이프라인 재활용 가능성 있음.",
        "next_step": "초록에 명시 없음."
      },
      {
        "title": "An open benchmark and language models for AI in aging biology.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42753698/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42753698/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.026",
        "journal": "Cell",
        "year": "2026",
        "author": "Zhavoronkov A",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "메틸화, 전사체, 단백체, 임상 등 5개 바이오데이터 도메인에서 17개 태스크로 구성된 LongevityBench 오픈 벤치마크를 설계",
          "18개 프론티어 AI 모델(6개 팀)을 LongevityBench로 평가",
          "노화 도메인 특화 데이터로 5종의 Longevity-LLM(멀티태스크, 0.6B~9B) 파인튜닝",
          "노화 연구자용 에이전틱 인터페이스 Longevity Claw 공개"
        ],
        "concepts": [
          "aging-genetics"
        ],
        "tldr": "노화 생물학 AI 평가용 벤치마크 LongevityBench(17개 태스크, DNA 메틸화·전사체·단백체·임상 데이터)를 제시하고, 파인튜닝된 소형 Longevity-LLM(0.6B~9B)이 대형 프론티어 모델을 능가함을 보였다.",
        "question": "현재 AI 시스템이 이종 노화 오믹스 데이터를 얼마나 잘 해석할 수 있는가?",
        "key_result": "단일 프론티어 모델이 모든 태스크를 지배하지 못했으며, 오믹스 기반 연령 예측이 모델 규모와 무관하게 가장 어려운 태스크였음. 소형 Longevity-LLM이 다수 태스크에서 훨씬 큰 범용 모델과 동등하거나 초과하는 성능을 보였다.",
        "why_for_us": "랩에서 멀티오믹스(메틸화, 전사체, 단백체) 데이터를 다루고 aging 관련 연구도 진행하므로, 이 벤치마크는 자체 AI 파이프라인 성능 평가 및 도메인 특화 모델 활용 시 참고 가능하다.",
        "limitations": "벤치마크가 주로 기존 오믹스 모달리티에 국한되어 있으며, LLM의 hallucination 문제나 인과 추론 능력은 충분히 평가되지 않았을 가능성이 있다.",
        "reuse": "LongevityBench, Longevity-LLM, Longevity Claw 모두 공개 배포됨. 노화 오믹스 AI 평가 시 재활용 가능.",
        "next_step": ""
      },
      {
        "title": "World models for biomedicine.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42753693/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42753693/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.032",
        "journal": "Cell",
        "year": "2026",
        "author": "Noori A",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "AI의 world model(행동-조건부 시뮬레이션) 패러다임을 생물의학에 도입하는 개념적 프레임워크를 제안",
          "관찰 데이터와 개입·종단 데이터를 다중 모달리티로 결합하는 방법론적 방향 제시",
          "분자→세포→조직→임상 스케일을 아우르는 멀티스케일 시뮬레이션의 필요성과 구성 원리를 논의"
        ],
        "concepts": [
          "perturb-seq",
          "molecular-qtl"
        ],
        "tldr": "생물의학 분야에 'world model' AI 패러다임을 확장하여 분자·세포·조직·임상 스케일에서 개입(intervention) 후 생물학적 궤적을 시뮬레이션하자는 비전 논문.",
        "question": "AI의 world model 개념을 생물의학에 적용해 복잡한 개입 전에 시스템 반응을 예측할 수 있는가?",
        "key_result": "구체적인 실험 결과 없음; 생물의학 world model의 개념·요구사항·잠재적 활용(새 perturbation 반응 예측, 원하는 상태로 유도하는 개입 탐색, 장기 실험 계획)을 체계화한 전망 논문.",
        "why_for_us": "멀티오믹스 통합 및 perturb-seq 등 개입 데이터를 다루는 랩 입장에서, world model 프레임이 QTL·단일세포·다중오믹스 데이터를 인과적으로 연결하는 미래 방향을 제시함.",
        "limitations": "구체적 구현 방법·벤치마크 없음; 순수 비전/리뷰 논문으로 실증적 검증 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The Virtual Biotech: A multi-agent AI framework for therapeutic discovery and development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42752167/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42752167/",
        "doi": "https://doi.org/10.1126/science.aeg6779",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Zhang HG",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "표적 발굴·안전성 평가·치료 모달리티 선택·임상 개발 부서로 구성된 다중 에이전트 AI 프레임워크 구축",
          "37,000개 에이전트가 55,984건 임상시험 결과를 어노테이션하여 세포 유형 특이적 유전자 표적의 임상 성공률 분석",
          "폐암 치료 전략 제안 및 종료된 궤양성 대장염 임상시험 실패 기전 추론에 적용"
        ],
        "concepts": [
          "drug-target-genetics",
          "cell-type-deconvolution"
        ],
        "tldr": "약물 개발 회사 구조를 모방한 다중 에이전트 AI 시스템(Virtual Biotech)을 구축해, 37,000개 에이전트가 55,984건 임상시험을 분석하고 세포 유형 특이적 표적이 성공률 48% 향상·부작용 32% 감소를 보임을 보인 연구.",
        "question": "약물 개발의 전 단계(표적 발굴→안전성→모달리티→임상)를 AI 에이전트 조직으로 통합해 의사결정을 지원할 수 있는가?",
        "key_result": "세포 유형 특이적 유전자를 표적으로 한 약물은 시장 진입 가능성이 48% 높고 부작용이 32% 적음; 멀티모달 증거 통합으로 새로운 치료 전략 제안 가능.",
        "why_for_us": "drug-target genetics와 cell-type-specific 분석을 결합하는 랩 방향성과 연관; 특히 QTL→약물 표적 연결 연구에 영감 제공.",
        "limitations": "에이전트 기반 시스템의 재현성·환각 문제 미검증; 특정 질환 사례에 국한된 시연.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-09-13",
    "count": 25,
    "papers": [
      {
        "title": "Within-family effect of ancestry on complex traits in a Mexican population.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42717089/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42717089/",
        "doi": "https://doi.org/10.1038/s41586-026-11039-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Wang S",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "멕시코 가족 코호트에서 within-family(형제·부모-자녀) 분석 설계 적용",
          "조상 비율(European/Amerindian ancestry)과 다양한 복합형질 간 연관성 추정",
          "집단 간 환경 교란 및 폴리제닉 예측 편향 문제를 가족 내 설계로 보정"
        ],
        "concepts": [
          "cross-ancestry-transferability",
          "polygenic-risk-score",
          "pca-population-stratification",
          "gwas-association-testing",
          "family-history-gwas",
          "genetic-architecture"
        ],
        "tldr": "멕시코 인구에서 가족 내 비교(within-family) 설계를 활용해 조상(ancestry) 비율이 복합형질에 미치는 유전적 영향을 교란 없이 추정했다.",
        "question": "복합형질의 집단 간 표현형 차이 중 유전적 조상에 의한 기여를 교란 변수 없이 어떻게 정확히 추정할 수 있는가?",
        "key_result": "초록에 수치가 명시되어 있지 않으나, within-family 설계가 조상-표현형 연관의 편향을 제거하는 데 유효함을 보임.",
        "why_for_us": "cross-ancestry 이전 가능성, GWAS 집단 층화, PRS 편향 문제와 직결되며, 랩의 cross-ancestry-transferability 및 통계유전학 방법론 관심과 일치한다.",
        "limitations": "초록이 잘려 있어 표본 크기, 구체적 형질, 결과 수치 등 상세 정보를 확인할 수 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Predicting genome-wide functional constraints with GPN-Star.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42717086/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42717086/",
        "doi": "https://doi.org/10.1038/s41586-026-11005-5",
        "journal": "Nature",
        "year": "2026",
        "author": "Ye C",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "척추동물·포유류·영장류 수준의 전장 유전체 정렬 및 계통수를 학습 데이터로 사용하는 GPN-Star 모델 개발",
          "병원성 변이 우선순위화, GWAS fine-mapped 변이 농축, 복합형질 유전력 분할, 희귀 변이 연관 검정 등 다양한 벤치마크 수행",
          "인간 외 5개 모델 생물(마우스, 닭, 초파리, C. elegans, 애기장대)에도 동일 프레임워크 적용"
        ],
        "concepts": [
          "fine-mapping",
          "noncoding-regulatory-variants",
          "partitioned-heritability",
          "rare-variant-collapsing",
          "gwas-association-testing",
          "credible-set",
          "variant-to-cell-type"
        ],
        "tldr": "계통수 인식 아키텍처를 갖춘 유전체 언어 모델 GPN-Star를 개발하여 코딩·비코딩 영역 변이 효과 예측, GWAS fine-mapping 우선순위 결정, 희귀 변이 연관 검정 파워 향상에서 SOTA 달성.",
        "question": "전장 유전체에서 기능적 제약을 예측하기 위해 진화적 계통 정보를 통합한 유전체 언어 모델이 기존 방법보다 우수한가?",
        "key_result": "GPN-Star는 코딩 및 비코딩 영역 변이 효과 예측에서 기존 방법 대비 SOTA를 달성했으며, GWAS fine-mapped 변이의 유전력 농축 분석과 희귀 변이 연관 검정 파워를 유의하게 개선했다.",
        "why_for_us": "GWAS fine-mapping, 비코딩 조절 변이 기능 해석, 희귀 변이 연관 검정, 유전력 분할 등 랩의 핵심 방법론과 직접 관련되며, 새 변이 우선순위화 도구로 즉시 활용 가능하다.",
        "limitations": "대규모 전장 유전체 정렬 데이터에 의존하므로 데이터 빈약 종/집단에서는 성능 저하 가능성. 초록에서 구체적 한계는 명시되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Caloric restriction modulates genome-wide somatic mutation in mice.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42716011/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42716011/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.013",
        "journal": "Cell",
        "year": "2026",
        "author": "Grońska-Pęski M",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "마우스 간(bulk), 신장(bulk), 간세포, 소뇌 뉴런에 고정밀 duplex DNA 시퀀싱 적용",
          "칼로리 제한 군과 대조군 간 치환·삽입/결실 부담 및 돌연변이 서명(SBS5) 활성 비교",
          "전사 활성 여부에 따른 돌연변이 감소 패턴 분석"
        ],
        "concepts": [
          "aging-genetics",
          "genetic-architecture",
          "mosaic-chromosomal-alteration"
        ],
        "tldr": "고정밀 듀플렉스 DNA 시퀀싱으로 칼로리 제한(CR)이 마우스 다조직에서 체세포 돌연변이 부담을 전반적으로 감소시키며, 특히 전사 비활성 영역에서 가장 큰 효과를 보임을 처음으로 규명했다.",
        "question": "칼로리 제한이 포유류에서 노화 관련 체세포 돌연변이 축적을 늦출 수 있는가?",
        "key_result": "CR은 모든 조직·세포 유형에서 체세포 돌연변이 부담을 감소시켰으며, 포유류 주요 돌연변이 과정인 SBS5 활성도 낮췄다. 전사 비활성 영역에서 돌연변이 감소 효과가 가장 컸다.",
        "why_for_us": "노화 유전체학(aging-genetics) 및 체세포 돌연변이 연구와 직결. 게놈 안정성을 노화의 수정 가능한 축으로 설정한 점이 랩의 aging 및 유전체 연구에 시사점 제공.",
        "limitations": "마우스 모델에 국한되어 인간에서의 적용 가능성 불명확. 기전(메커니즘) 수준의 설명은 충분하지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mechanisms underlying disease-causing variants in promoters and enhancers.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42711518/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42711518/",
        "doi": "https://doi.org/10.1038/s41588-026-02743-3",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Long HK",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "단일유전자 질환을 유발하는 비코딩 변이 카탈로그를 체계적으로 검토",
          "프로모터·인핸서·사일런서에서의 기능 획득·상실 메커니즘을 유형화",
          "병원성 판별의 기술적·개념적 난점을 분석",
          "MPRA, 기계학습, 포화 게놈 편집 등 실험·계산 도구의 역할을 조망"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "mpra",
          "crispr-enhancer-mapping",
          "saturation-genome-editing",
          "fine-mapping",
          "credible-set",
          "molecular-qtl",
          "caQTL"
        ],
        "tldr": "프로모터·인핸서·사일런서 등 시스-조절 요소 내 소규모 비코딩 변이가 단일유전자 질환을 일으키는 메커니즘을 정리한 리뷰. 기능 획득/상실 경로를 유형화하고, 병원성 판별의 어려움과 ML·실험적 접근법의 기회를 논의.",
        "question": "비코딩 시스-조절 영역(프로모터·인핸서·사일런서)의 소형 변이는 어떤 메커니즘으로 단일유전자 질환을 유발하는가?",
        "key_result": "구체적 변이 수치나 코호트 규모는 리뷰 특성상 제시되지 않음. 비코딩 단일유전자 변이의 구체적 사례가 아직 소수이며, 그 이유로 탐지 편향·기능 검증의 어려움을 지목.",
        "why_for_us": "GWAS fine-mapping·noncoding regulatory variants·MPRA·caQTL 연구의 기초 문헌. 비코딩 변이의 병원성 해석 프레임워크는 QTL → 질환 변이 연결(colocalization, credible set 해석)에 직결.",
        "limitations": "리뷰이므로 새로운 실험 데이터 없음. 주로 소수의 잘 검증된 사례에 국한되어 대규모 통계적 분석은 다루지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Integration of proteomic aging clocks in a phase 2a clinical trial supports simultaneous geroprotective assessment.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42706338/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42706338/",
        "doi": "https://doi.org/10.1038/s41587-026-03286-y",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Zhavoronkov A",
        "rating": 4,
        "emoji": "🧪",
        "domain": "단백체",
        "what_they_did": [
          "ProtAge, OrganAge 등 6종의 단백질체 노화 시계를 비교 분석",
          "Phase 2a 임상시험 데이터에 이 시계들을 통합 적용",
          "에피제네틱 시계와의 성능 비교 수행"
        ],
        "concepts": [
          "affinity-proteomics",
          "aging-genetics",
          "pqtl-proteomics",
          "mendelian-randomization",
          "drug-target-genetics"
        ],
        "tldr": "6종의 단백질체 노화 시계를 임상시험(phase 2a)에 통합하여 약물의 geroprotective 효과를 동시에 평가할 수 있는 프레임워크를 제안함.",
        "question": "단백질체 기반 노화 시계가 임상시험에서 노화 자체의 변화를 탐지하는 바이오마커로 작동할 수 있는가?",
        "key_result": "단백질체 시계는 에피제네틱 시계보다 일관성 있는 결과를 제공하며, 생물학적 노화 변화를 임상시험 내에서 동시에 감지하는 데 유망함을 보임.",
        "why_for_us": "랩의 aging 및 proteomics 관심 영역과 직결. pQTL·aging-genetics 연구에서 단백질체 노화 시계를 바이오마커로 활용하거나, MR/drug-target 연구와 연계 가능.",
        "limitations": "초록에서 구체적인 효과크기나 p값 등 수치 정보가 제한적으로 제공됨; 한 개 임상시험에 국한된 검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Metax enables accurate cross-domain taxonomic profiling of metagenomes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42727575/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42727575/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.024",
        "journal": "Cell",
        "year": "2026",
        "author": "Deng ZL",
        "rating": 4,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "커버리지 기반 확률 모델과 EM(기댓값 최대화) 프레임워크를 통합한 Metax 개발",
          "숙주 우세 샘플, 저바이오매스 임상 샘플 포함 600개 이상 샘플에서 벤치마크 수행",
          "구강 마이크로바이옴(페리임플란티티스), 혈장 세포유리 DNA 등 다양한 시료 유형 평가"
        ],
        "concepts": [
          "taxonomic-profiling",
          "amplicon-vs-shotgun",
          "functional-profiling",
          "beta-diversity"
        ],
        "tldr": "Metax는 커버리지 기반 확률 모델과 EM 알고리즘을 결합해 세균·바이러스·진핵생물·고균을 아우르는 크로스도메인 분류체계 프로파일링 도구로, 기존 방법 대비 F1 55% 향상, Bray-Curtis 45% 감소를 달성",
        "question": "다양한 생물학적 도메인(세균·바이러스·진핵생물·고균)을 동시에 정확하게 분류할 수 있는 메타게놈 프로파일러를 만들 수 있는가?",
        "key_result": "기존 방법 대비 평균 F1 점수 55% 향상, Bray-Curtis 비유사도 45% 감소; 구강 마이크로바이옴에서 세균·바이러스 혼합 신호 해상; 혈장 cfDNA에서 시약 오염 및 레퍼런스 조립 오류 식별",
        "why_for_us": "랩의 메타게노믹스 관심 분야에서 크로스도메인 분류 정확도 향상이 중요하며, 특히 저바이오매스 임상 샘플 적용 가능성이 높아 다오믹스 통합 연구에 활용 가치가 큼",
        "limitations": "레퍼런스 데이터베이스가 불완전한 경우 성능의 한계 존재; 도구 런타임·메모리 등 계산 자원 요구사항 초록에 미명시",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mechanisms of regeneration and maladaptive repair in acute kidney injury.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42722810/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42722810/",
        "doi": "https://doi.org/10.1038/s41581-026-01115-8",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Seibt T",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "TEC가 AKI 후 조절된 세포사 프로그램, 세포 증식, 세포 노화 등 여러 운명을 선택하는 기전 정리",
          "면역세포(대식세포 등)가 재생 촉진 또는 염증 지속에 미치는 역할 리뷰",
          "섬유아세포 활성화와 세포외기질 축적(섬유화)으로 이어지는 공통 최종 경로 설명"
        ],
        "concepts": [
          "molecular-qtl",
          "colocalization"
        ],
        "tldr": "AKI 이후 CKD로 진행하는 과정에서 세뇨관 상피세포(TEC), 면역세포, 섬유아세포 간의 상호작용이 어떻게 재생 또는 부적응 수복을 결정하는지를 체계적으로 리뷰",
        "question": "AKI 후 신장이 완전히 회복되지 못하고 CKD로 진행하는 부적응 수복의 세포·분자적 기전은 무엇인가?",
        "key_result": "부적응 수복의 핵심 특징: TEC의 지속적 세포주기 정지·세포 노화·SASP 분비 → 면역세포 활성화 → 섬유아세포 활성화 → 섬유화 → CKD 진행",
        "why_for_us": "랩의 nephro(CKD) 관심 영역과 직결되며, 향후 AKI-CKD 전환에 관여하는 유전·후성유전 변이 연구(eQTL, colocalization 등)의 생물학적 배경 지식으로 유용",
        "limitations": "리뷰 논문으로 신규 데이터 없음; 특정 유전적 위험 인자와 수복 경로의 연결은 다루지 않음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A new humanised TCR transgenic mouse model to study T cells reactive to citrullinated tenascin C, a relevant autoantigen in rheumatoid arthritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42722588/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42722588/",
        "doi": "https://doi.org/10.1016/j.ard.2026.08.007",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Schülein M",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA 환자로부터 citTNC22를 HLA-DRB1*04:01(HLA-DR4) 제한 방식으로 인식하는 TCR을 클로닝",
          "마우스 불변 도메인 + 인간 V(D)J 서열 키메라 TCR을 발현하는 인간화 TCR 형질전환(hTCR-tg) 마우스 개발",
          "H-2 MHC class II 대립유전자에 따른 흉선 선택 차이 및 CD4+ T세포 표현형 분석"
        ],
        "concepts": [
          "protective-alleles",
          "molecular-qtl"
        ],
        "tldr": "RA 환자 유래 시트룰린화 테나신C(citTNC) 반응성 TCR을 마우스에 이식한 인간화 TCR 형질전환 마우스 모델을 개발하고 특성화함.",
        "question": "RA에서 시트룰린화 자기항원을 인식하는 자가반응성 T세포를 생체 내에서 어떻게 기능적으로 연구할 수 있는가?",
        "key_result": "hTCR-tg 마우스의 CD4+ T세포가 항원 특이적·HLA 제한적 반응을 보이며 기능적임을 확인; 두 MHC class II 대립유전자 간 흉선 선택 패턴 차이 관찰.",
        "why_for_us": "RA 자가반응성 T세포 및 HLA-DRB1*04:01 유전자형 관련 연구에 활용 가능한 동물 모델. HLA-GWAS 및 T세포 면역 기전 이해에 참고 자료.",
        "limitations": "마우스 내인성 MHC 환경에서 인간 TCR 반응성 해석 시 종간 차이 존재; 희귀한 자가반응성 T세포 빈도를 실제 환자 수준으로 반영하지 못할 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "An operational perturbation proteomics-based virtual cell model.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42717098/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42717098/",
        "doi": "https://doi.org/10.1038/s41586-026-11001-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Sun R",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "유방암 세포주에서 3,800만 건 이상의 시간-단백질 풍부도 측정값 생성(대규모 섭동 MS 프로테오믹스)",
          "동적 잠재 표현 학습을 위한 사전학습 프레임워크 기반 가상세포 모델 ProteinTalks 개발",
          "약물 효능·병용 효과 예측, 내성 연관 단백질 발굴, 환자 오가노이드·생검으로 전이 적용 및 벤치마크 비교"
        ],
        "concepts": [
          "proteomics-quantification",
          "mass-spectrometry-proteomics",
          "drug-target-genetics"
        ],
        "tldr": "유방암 세포주에서 대규모 시간-해상도 섭동 프로테오믹스 데이터를 생성하고, 이를 기반으로 한 AI 가상세포 모델 ProteinTalks를 개발해 약물 효능 예측·저항성 단백질 발굴·환자 오가노이드 응답 예측까지 수행함.",
        "question": "대규모 동적 섭동 프로테오믹스 데이터와 사전학습 기반 AI를 결합하면, 세포주를 넘어 환자 조직까지 전이 가능한 약물반응 예측 가상세포 모델을 만들 수 있는가?",
        "key_result": "세포주 외 환자 유래 오가노이드 및 임상 생검에서도 선택된 벤치마크 구현 대비 전반적으로 높은 성능 달성; 약물 효능·병용 시너지 예측 및 환자 계층화 수행",
        "why_for_us": "멀티오믹스 통합 및 프로테오믹스 데이터 활용에 관심 있는 랩 관점에서, 대규모 시간-해상도 섭동 프로테오믹스 + AI 가상세포 모델 접근법은 pQTL·약물 타깃 유전체학 연구에 응용 가능한 방법론적 레퍼런스임.",
        "limitations": "유방암 세포주 중심 데이터 생성으로 다른 암종 일반화 여부 불명확; 오가노이드 전이 성능의 구체적 수치가 초록에 제한적으로 제시됨.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Integrated signatures define mutational processes in prostate cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42717097/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42717097/",
        "doi": "https://doi.org/10.1038/s41586-026-10468-w",
        "journal": "Nature",
        "year": "2026",
        "author": "Gruber AJ",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "Pan Prostate Cancer Group 959명의 전립선암 게놈에서 de novo 단일염기치환·삽입결실·복제수 서명 추출",
          "6가지 신규 복잡 구조변이 서명을 추가로 정의하고 기존 서명들과 통합해 8개의 IMF 도출",
          "IMF와 전이까지 시간, 안드로겐 수용체 경로 억제제 감수성과의 임상 연관성 분석; 아프리카계 환자 집단에서의 HRD 변이 양상 분석"
        ],
        "concepts": [
          "genetic-architecture",
          "structural-variants-gwas",
          "cross-ancestry-transferability"
        ],
        "tldr": "전립선암 959명 게놈을 분석해 단일염기치환·삽입결실·복제수·구조변이 서명을 통합한 8가지 IMF(통합 돌연변이 발자국)를 정의하고, 이것이 전이 위험 및 안드로겐 수용체 경로 억제제 감수성을 예측함.",
        "question": "다양한 돌연변이 서명을 통합한 프레임워크로 전립선암의 유전체 이질성과 임상 결과를 동시에 설명할 수 있는가?",
        "key_result": "8개 IMF가 전립선암 1차 게놈의 85%의 돌연변이 과정을 설명; 4개 IMF(37% 종양)가 전이까지 단축 시간과 유의하게 연관; 비정형 HRD가 아프리카계 환자에서 풍부",
        "why_for_us": "구조변이·복제수 서명을 GWAS/유전체 연구와 연결하거나, 암 유전체 이질성 분석에 멀티오믹스 통합 방법론을 적용할 때 참고할 수 있는 대규모 암 유전체 분석 사례임.",
        "limitations": "1차 종양 중심 코호트이며, 메타스타틱 설정으로의 확장이 일부만 제시됨; 집단 다양성 분석이 아프리카계에 집중됨.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "PLA2G2D in tumour-draining lymph nodes regulates anti-tumour immunity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42717091/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42717091/",
        "doi": "https://doi.org/10.1038/s41586-026-10954-1",
        "journal": "Nature",
        "year": "2026",
        "author": "van Krimpen A",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "흑색종 환자 TDLN에 imaging mass cytometry 및 targeted spatial transcriptomics 적용",
          "PLA2G2D 고발현 골수계 세포가 존재하는 면역억제 공간 구획 동정",
          "생쥐 모델에서 Pla2g2d 유전자 결손 및 항체 차단 실험으로 종양 성장 억제 효과 확인",
          "단일세포 전사체 분석으로 Pla2g2d 발현이 림프절 대식세포에 국한됨을 규명",
          "인간화 마우스 모델에서 PLA2G2D 차단 + PD-1 차단 병용 효과 평가"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "single-cell-eqtl",
          "variant-to-cell-type"
        ],
        "tldr": "종양 배액 림프절(TDLN)에서 PLA2G2D를 발현하는 골수계 세포가 CD8+ T세포 증식을 억제하는 새로운 면역관문을 발견하고, 항체 차단 시 PD-1 차단과 상가적 항종양 효과를 확인했다.",
        "question": "종양 배액 림프절 내 어떤 세포·분자 기전이 T세포 활성화를 억제하며, 이를 표적화하면 항종양 면역을 강화할 수 있는가?",
        "key_result": "PLA2G2D 차단은 TDLN 내 종양 특이적 T세포를 확장시키고, 말초혈액 및 종양 내 T세포를 증가시켰으며, PD-1 차단과의 병용 시 상가적·시너지 효과를 보였다.",
        "why_for_us": "T세포 소진·TME·면역치료 분야에 해당하며, 공간 전사체와 단일세포 전사체를 활용한 암 면역관문 발굴 접근법은 랩의 cancer immunology 및 single-cell 연구와 직결된다.",
        "limitations": "인간 TDLN 데이터가 주로 흑색종에 한정되어 있으며, 다른 암종으로의 일반화 여부는 미확인.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A serpin-myeloid axis in pancreatic cancer heterogeneity and immune evasion.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42717081/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42717081/",
        "doi": "https://doi.org/10.1038/s41586-026-11002-8",
        "journal": "Nature",
        "year": "2026",
        "author": "Falcomatà C",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "Perturb-map(공간 기능유전체학)으로 PDAC 클론의 성장 및 면역 미세환경을 공간·시간적으로 분석",
          "SERPINE1(PAI1), SERPINB2(PAI2)의 종양 면역 회피 기능을 유전적·약리적으로 검증",
          "PAI1 또는 CD18 억제와 항PD-1 병용 효과를 마우스 모델에서 평가",
          "환자 종양의 다중모달 공간 분석으로 SPP1+/MARCO+ 대식세포 지배 억제성 니치 확인"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "perturb-seq",
          "noncoding-regulatory-variants"
        ],
        "tldr": "공간 기능유전체학(Perturb-map)으로 췌장암에서 SERPINE1/SERPINB2가 국소 면역억제 니치를 형성하고 항PD-1 치료 내성을 유발함을 규명했다.",
        "question": "췌장암(PDAC)의 종양내 이질성이 어떻게 국소 면역억제 미세환경을 형성하며, 이를 표적화하면 면역치료 반응을 개선할 수 있는가?",
        "key_result": "SERPINE1/B2가 피브린 풍부 ECM 니치를 안정화하여 대식세포를 면역억제 방향으로 프로그래밍하고 세포독성 T세포를 배제함. PAI1 또는 CD18 억제가 항PD-1과 상승 효과를 보임.",
        "why_for_us": "암 면역치료 내성 및 TME 연구에 해당하며, 랩 관심사인 T cell exhaustion·TME·면역치료 분야와 직결. 공간전사체 + 기능유전체 통합 접근법도 참고 가치 있음.",
        "limitations": "마우스 모델 결과이며, 환자 데이터는 관찰적 수준. PAI1 억제제의 임상 효용은 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "UniCure: A multi-modal model for predicting personalized cancer therapy response.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42716007/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42716007/",
        "doi": "https://doi.org/10.1016/j.ccell.2026.07.010",
        "journal": "Cancer cell",
        "year": "2026",
        "author": "Chen Z",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "190만 전사체 퍼터베이션 프로파일(화합물 22,000개↑, 166 세포 유형, 24 조직)로 멀티모달 기반 모델 UniCure 훈련",
          "용량 의존적·병용 반응 예측 및 bulk/단일세포 데이터 간 일반화 검증",
          "환자 유래 종양 클러스터(PTC) 345개로 파인튜닝 후 실제 임상 프로파일 396개에서 성능 평가",
          "세포주·환자 유래 모델에서 실험적 검증 수행"
        ],
        "concepts": [
          "cell-type-deconvolution",
          "spatial-transcriptomics"
        ],
        "tldr": "190만 전사체 퍼터베이션 프로파일로 학습한 멀티모달 AI 모델 UniCure가 환자 개인별 약물 반응을 예측하고, 임상 실제 데이터에서 검증되었다.",
        "question": "세포주 기반 전사체 퍼터베이션 데이터로 학습한 모델이 실제 환자 수준의 약물 반응을 예측할 수 있는가?",
        "key_result": "UniCure는 용량 의존적·병용 반응을 정확히 예측하고, 실제 임상 396개 프로파일에서 환자 수준 반응 예측을 검증. 반응 기반 환자 층화 지원.",
        "why_for_us": "멀티오믹스 통합 및 단일세포 데이터 활용 측면에서 참고 가능. 랩의 암 면역치료·환자 층화 연구 맥락에서 활용성 있음.",
        "limitations": "임상 검증 코호트 규모가 제한적(396명). 전사체 반응 예측이 실제 임상 결과(OS, PFS)와의 연계는 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A single-cell lens into the co-evolution of genotypes and phenotypes in cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42711452/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42711452/",
        "doi": "https://doi.org/10.1038/s41568-026-00970-8",
        "journal": "Nature reviews. Cancer",
        "year": "2026",
        "author": "Izzo F",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "단일세포 멀티오믹스(RNA+DNA+후성유전체)로 동일 세포의 유전형·표현형 동시 측정하는 기술을 리뷰",
          "정상 조직의 클론 모자이크부터 악성 전환 과정의 클론 진화를 계통 재구성으로 시간 매핑하는 방법론 소개",
          "치료 선택압에 의한 저항성 클론 출현 메커니즘을 멀티오믹스 관점에서 정리",
          "변이 특이적 표현형 특성 및 세포 상태 특이적 유전형-표현형 효과 논의"
        ],
        "concepts": [
          "mosaic-chromosomal-alteration",
          "allele-specific-expression",
          "single-cell-eqtl",
          "spatial-transcriptomics"
        ],
        "tldr": "단일세포 멀티오믹스 기술을 이용해 암에서 유전형(genotype)과 표현형(phenotype)의 공진화를 추적하는 최신 접근법을 정리한 리뷰. 건강 조직의 클론성 모자이크부터 악성 종양의 클론 진화·치료 저항성까지를 아우름.",
        "question": "단일세포 멀티오믹스 기술은 암에서 유전형-표현형 공진화와 클론 선택을 어떻게 해명할 수 있는가?",
        "key_result": "리뷰 논문으로 원본 수치 없음. 단일세포 멀티오믹스가 변이 특이적 표현형과 치료 취약성을 1차 인체 시료에서 직접 정의할 수 있음을 강조.",
        "why_for_us": "단일세포 멀티오믹스·클론 진화 분석은 랩의 single-cell RNA/ATAC·multiome 방법론과 직결. 특히 allele-specific expression, mosaic-chromosomal-alteration 개념 및 cancer immunology 관심 영역에 해당.",
        "limitations": "리뷰이므로 새로운 실험 데이터 없음. 기술적 한계(검출 민감도, 계통 재구성 오차)는 간략히만 언급.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Common genetic variants are associated with increased likelihood of latent co-occurring neurodevelopmental and mental health factors among autistic individuals.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42731988/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42731988/",
        "doi": "https://doi.org/10.1038/s41380-026-03880-1",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Okewole A",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "SPARK 코호트(표현형 N=74,204; 유전형 N=17,582)에서 확인적 요인분석으로 세 공존 요인(행동·정서·사고장애) 도출",
          "각 요인의 SNP 기반 유전율(h²_SNP) 추정 및 희귀변이 연관 검정 수행",
          "PGS 및 유전적 상관(r_g) 분석으로 일반 집단 해당 질환과의 공유 유전 구조 평가",
          "가족 내 분석(N=5,236 trio)으로 직접·간접 유전 효과 구분"
        ],
        "concepts": [
          "polygenic-risk-score",
          "genetic-correlation",
          "snp-heritability-grm",
          "missing-heritability",
          "de-novo-variants",
          "sex-differences-psychiatric",
          "liability-threshold-model"
        ],
        "tldr": "SPARK 코호트를 이용해 자폐 개인 내 공존 신경발달·정신건강 요인의 유전 구조를 분석. 세 잠재요인(행동·정서·사고장애)이 자폐와는 독립적인 가산적 다유전자 구조를 가짐을 확인.",
        "question": "자폐 개인에서 빈번히 관찰되는 공존 정신건강 장애들의 유전적 구조는 어떻게 되며, 그 유전적 효과는 자폐 유전자와 중복되는가(pleiotropic) 아니면 독립적으로 더해지는가(additive)?",
        "key_result": "세 요인 모두 유의한 SNP 유전율을 보임; 희귀변이는 연관 없음; PGS·유전적 상관은 일반 집단 해당 질환과 양의 공유를 보이나 자폐와는 공유 없음(가산성 가설 지지); 행동·정서 요인은 직접 유전 효과 확인, 간접(전달) 효과 없음.",
        "why_for_us": "GWAS/PGS, 유전적 상관, 유전율 분해, 가족 내 설계 등 랩 핵심 방법론이 모두 활용된 정신신경 유전 분석 사례. ASD·SCZ·MDD 공존 구조의 다유전자 구조 이해에 직접 관련.",
        "limitations": "희귀변이 검정의 통계적 검정력 부족 가능성; SPARK는 자폐 전문 코호트라 일반화 제한; 표현형 측정이 자가보고 기반.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Contribution of copy number variants to schizophrenia in East Asian populations.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42728386/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42728386/",
        "doi": "https://doi.org/10.1038/s41588-026-02732-6",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Chen Y",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "동아시아인 20,903 사례 vs 23,258 대조 대상 전장 희귀 CNV 부담 분석 수행",
          "EAS 단독 및 EUR 데이터 메타분석으로 게놈 전체 유의 좌위 도출",
          "EAS/EUR 간 효과 크기 교차-집단 비교",
          "CNV 내 유전자의 LoF 내성(pLI 등) 분석"
        ],
        "concepts": [
          "rare-variant-collapsing",
          "structural-variants-gwas",
          "cross-ancestry-transferability",
          "genetic-architecture",
          "de-novo-variants"
        ],
        "tldr": "동아시아 집단(사례 20,903명, 대조 23,258명) 대상 조현병 희귀 CNV 연구. 9개 EAS 유의 좌위 발견, EUR 데이터 메타분석으로 14개 좌위 확정(8개 신규).",
        "question": "지금까지 유럽 집단 중심이었던 조현병 희귀 CNV 연구에서 동아시아 집단 특이 좌위와 교차-집단 일관성은 어떠한가?",
        "key_result": "EAS 사례에서 희귀 CNV 부담 유의하게 증가; EAS 단독 9개, 메타분석 14개(신규 8개) 유의 좌위 확인; 14개 좌위 내 유전자는 LoF 변이에 대해 낮은 내성; 신규 EAS CNV 보인자 빈도 0.38%(EUR 0.0017% 대비 월등히 높음); 대부분의 CNV 효과는 두 집단 간 일관적.",
        "why_for_us": "다집단(cross-ancestry) 희귀변이 분석, CNV 부담 검정, 집단 다양성 확보가 유전 발견에 미치는 영향을 보여주는 사례. 랩의 GWAS/희귀변이·cross-ancestry 관심과 직결.",
        "limitations": "CNV 탐지 기술(SNP array vs WGS) 이질성 가능성; 표현형 정의의 집단 간 차이; 기능적 검증 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Characterizing features of the genetic architecture underlying autism from a multi-ancestry perspective.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42728317/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42728317/",
        "doi": "https://doi.org/10.1038/s41380-026-03886-9",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Mendes M",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "3개 독립 ASD 코호트에서 혼혈 사례(N=1,033) 및 조상 매칭 대조군(N=1,033) 선발",
          "5개 대륙 참조 집단을 이용한 혼혈 매핑(AM) 수행",
          "유의 좌위에 대한 파인매핑으로 연관 변이 동정",
          "라틴아메리카 개인 대상 2차 AM 분석(브라질 대조 6,487명 추가)"
        ],
        "concepts": [
          "fine-mapping",
          "gwas-association-testing",
          "cross-ancestry-transferability",
          "genetic-architecture",
          "credible-set",
          "pca-population-stratification"
        ],
        "tldr": "다중 조상 전장유전체 시퀀싱 코호트에서 혼혈 매핑(admixture mapping)을 통해 ASD 집단 특이적 감수성 좌위 5개(아프리카계 1, 아메리카원주민계 4)를 발견.",
        "question": "유럽 조상 중심 연구에서 포착하기 어려운 집단 특이 ASD 유전 좌위가 다중 조상 혼혈 매핑으로 발굴될 수 있는가?",
        "key_result": "아프리카계 좌위 1p21.2(S1PR1 근방), 아메리카원주민계 11q13.4 좌위 4개(SHANK2, DHCR7 포함) 발견; rs77695321(P=1.52×10⁻⁷), rs7950807(P=5.21×10⁻⁸) 파인매핑 변이; 라틴아메리카 분석에서 7개 게놈 지역 16개 추가 좌위.",
        "why_for_us": "다중 조상 GWAS/혼혈 매핑·파인매핑이 핵심 방법론으로 사용되며, cross-ancestry 이전성, 집단 다양성 확보의 중요성을 보여주는 ASD 유전 분석 사례.",
        "limitations": "혼혈 사례 수가 적어 통계적 검정력 제한; 파인매핑 결과의 기능적 검증 부재; 일부 좌위는 게놈 전체 유의 수준 미달.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Distinct depressive-like behavioural phenotypes in mice exhibit unique patterns of transcriptional perturbations across habenular cell subtypes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42711407/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42711407/",
        "doi": "https://doi.org/10.1038/s41380-026-03843-6",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Narain P",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "CSDS로 유도된 우울 마우스를 행동 표현형(5가지)으로 분류",
          "habenula(LHb, MHb, HbX 포함) 조직에서 단일세포 RNA-seq 수행",
          "9개의 주요 세포 클래스 정의 및 표현형-연관 전사 시그니처 분석",
          "세부 하위영역(oval-medial LHb, HbX) 별 전사체 차이 비교"
        ],
        "concepts": [
          "single-cell-eqtl",
          "brain-eqtl-grn",
          "brain-cell-atlas",
          "variant-to-cell-type"
        ],
        "tldr": "만성 사회적 패배 스트레스(CSDS) 마우스 모델에서 행동 표현형별로 habenula 세포 아형의 전사체 변화를 단일세포 RNA-seq으로 규명함.",
        "question": "MDD의 이질적 행동 표현형(사회적 회피, 무쾌감증, 수동적 대처, 회복력, 취약성)이 뇌 habenula 내 특정 세포 유형의 전사 변화와 어떻게 연결되는가?",
        "key_result": "취약 동물의 LHb 뉴런과 회복 동물의 올리고덴드로사이트에서 표현형 특이적 전사 시그니처 확인; oval-medial LHb가 스트레스 전사 변화의 주요 부위; HbX는 수동적 대처 행동과 연관된 독자적 분자 시그니처 보유.",
        "why_for_us": "MDD 병리의 세포 유형 및 뇌 하위영역 특이적 전사 변화를 단일세포 해상도로 제공하며, 향후 brain eQTL/scQTL 및 정신질환 GWAS 위험 유전자의 세포-유형 맵핑에 활용 가능.",
        "limitations": "마우스 모델 기반으로 인간 MDD로의 직접 번역 제한; 특정 habenula 세포 아형의 기능적 검증 부재.",
        "reuse": "",
        "next_step": "정밀 정신의학적 접근을 위한 표현형별 habenula 세포 타깃 발굴 및 인간 MDD 조직 데이터와의 교차 검증 제안."
      },
      {
        "title": "Chromosome X-wide association study in multiple system atrophy identifies sex-differential risk loci.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41684229/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41684229/",
        "doi": "https://doi.org/10.1093/brain/awag062",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Ray A",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "MSA 888명/대조군 7128명 WGS 데이터로 X 염색체 전역 공통 변이 연관 분석 수행",
          "성별 층화 분석으로 여성/남성 특이적 위험 유전좌 탐색",
          "Xq28 locus에 대해 colocalization 분석으로 FAM3A, PLXNA3 후보 유전자 도출"
        ],
        "concepts": [
          "gwas-association-testing",
          "colocalization",
          "sex-differences-genetics",
          "fine-mapping",
          "credible-set",
          "structural-variants-gwas"
        ],
        "tldr": "MSA 환자 888명 + 대조군 7128명 WGS 데이터로 X 염색체 전체 연관 분석을 수행, Xq28(여성 특이적)과 Xp22.2/TBL1X(남성 특이적) 두 성별 차등 위험 유전좌를 발견하고 colocalization으로 FAM3A·PLXNA3를 후보 유전자로 제시했다.",
        "question": "X 염색체 변이가 MSA 발생 위험에 기여하는가, 그리고 그 효과는 성별 의존적인가?",
        "key_result": "Xq28 여성 위험 변이 rs4898389 (OR=1.69, P=2.43×10⁻⁸); Xp22.2 남성 위험 변이 rs6638956 in TBL1X (OR=1.48, P=9.92×10⁻⁷); colocalization으로 FAM3A·PLXNA3 제안",
        "why_for_us": "X 염색체 GWAS 방법론, 성별 차등 유전 위험 분석, colocalization을 통한 후보 유전자 도출 파이프라인이 랩의 GWAS/QTL/colocalization 방법론 레퍼토리와 직접 연관됨; 신경 퇴행 질환에서 성별 유전 효과 연구에도 참고 가치 높음",
        "limitations": "비교적 소규모 MSA 코호트(희귀 질환 특성); X 염색체 특유의 불활성화 패턴 처리의 방법론적 복잡성; 기능적 검증 미수행",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mapping the causal chain from genetic risk variants to lipid dysmetabolism in Parkinson's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41627849/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41627849/",
        "doi": "https://doi.org/10.1093/brain/awag039",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "De-Paula RB",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "PD 환자 149명 + 대조군 150명의 혈장 대사체 프로파일링 수행",
          "Colocalization 및 summary-data-based Mendelian randomization(smMR)으로 eQTL·mQTL이 PD 위험 변이를 매개하는지 검증",
          "혈액·뇌 차등 대사체·단백질체 통합 분석으로 기전 규명",
          "사후 뇌 조직에서 아실카르니틴 시그니처 복제"
        ],
        "concepts": [
          "colocalization",
          "mendelian-randomization",
          "molecular-qtl",
          "pqtl-proteomics",
          "metabolomics",
          "summary-statistics-methods"
        ],
        "tldr": "PD 유전 위험 변이(특히 SPTSSB 유전자좌)에서 뇌 유전자 발현, 스핑고지질 대사체, 그리고 PD 발병까지 이어지는 인과적 경로를 colocalization·smMR로 규명하고, 미토콘드리아 기능 장애와 연결되는 아실카르니틴 시그니처를 발견.",
        "question": "PD 위험 유전 변이는 어떤 분자 경로(발현 → 대사체)를 통해 PD 발병에 기여하는가?",
        "key_result": "SPTSSB 유전자좌의 공통 변이가 뇌 SPTSSB 발현 증가 및 혈장 세라마이드 상승과 colocalize됨; 다수의 스핑고지질·지방산 유도체가 PD에서 교란됨; AD 대사체와 부분 중첩; 아실카르니틴 시그니처가 Lewy body 병리 전단계 사후 뇌에서 복제됨; 뇌 단백질체에서 베타산화·TCA·산화적 인산화 경로 이상 확인.",
        "why_for_us": "colocalization, smMR(summary MR), eQTL-mQTL 통합, 멀티오믹스(대사체+단백질체+유전체) 분석 파이프라인이 랩의 핵심 방법론과 직결됨; PD 도메인 및 분자 QTL 연구에 직접 참고 가능.",
        "limitations": "혈장 대사체 기반이므로 뇌 국소 변화를 직접 반영하지 못할 수 있음; 단면 코호트로 인과 방향성 보완 필요; 사후 뇌 복제 표본 규모 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Bone marrow myelopoiesis dysfunction in Alzheimer's disease limits monocyte homing to the brain and drives disease progression.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42711429/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42711429/",
        "doi": "https://doi.org/10.1038/s41593-026-02417-7",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Abellanas MA",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "5×FAD 마우스 모델과 AD 환자 말초혈액에서 단핵구 분화 이상 확인",
          "IFN-I 신호가 골수 내 단핵구 분화를 교란함을 기전적으로 규명",
          "중화항체로 IFN-I를 차단하거나 IFNAR 결핍 골수로 이식하여 단핵구 생성·표현형 회복 실험",
          "회복된 단핵구의 뇌 귀소 증가 및 뇌 병리 개선 확인"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "brain-body-immune-circuits"
        ],
        "tldr": "알츠하이머병(AD)에서 골수 단핵구 생성(myelopoiesis)이 I형 인터페론(IFN-I) 신호 과활성으로 손상되어 뇌로의 단핵구 귀소가 제한되고 병리가 악화됨. IFN-I 차단 또는 IFN-I 수용체 결핍 골수 이식으로 이를 교정하면 AD 병리가 호전됨.",
        "question": "AD 환자 및 마우스 모델에서 골수 단핵구 생성 장애의 원인은 무엇이며, 이를 교정하면 뇌 병리가 개선되는가?",
        "key_result": "IFN-I 차단 또는 IFNAR-KO 골수 이식 시 5×FAD 마우스에서 myelopoiesis 정상화, 단핵구 유래 대식세포의 뇌 귀소 증가, AD 병리 완화. 환자 순환 단핵구에서도 유사한 IFN-I 관련 표현형 확인.",
        "why_for_us": "microglia-neuroimmune·AD 병리 관심 영역. 전신 면역-뇌 축(brain-body-immune-circuits) 개념 및 AD 진행의 말초 요인을 이해하는 데 기여.",
        "limitations": "마우스 아밀로이드증 모델(5×FAD) 중심으로, 타우 병리 등 다른 AD 양상은 다루지 않음. 환자 데이터는 말초 단핵구에 국한되어 골수 직접 검증 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Data-driven modelling of tau pathology reveals distinct progressive supranuclear palsy subtypes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41974128/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41974128/",
        "doi": "https://doi.org/10.1093/brain/awag131",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Cullinane PW",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "Queen Square Brain Bank 병리 확인 PSP 241명 코호트 구축(2010-2022)",
          "Illumina NeuroBooster/NeuroChip 배열로 유전자형 분석(MAPT haplotype, APOE, TRIM11, SLC2A13 SNP)",
          "8개 뇌 영역 tau 면역염색 슬라이드를 whole-slide scanning 후 41개 ROI 수동 분절 및 ML 기반 자동 정량화",
          "Cox regression으로 생존-임상/병리 연관 분석, SuStaIn 알고리즘으로 서브타입·스테이지 추론"
        ],
        "concepts": [
          "fine-mapping",
          "gwas-association-testing",
          "sex-differences-genetics",
          "genetic-architecture"
        ],
        "tldr": "PSP 241명의 병리 확인 코호트에서 머신러닝 기반 tau 병리 정량화와 SuStaIn 알고리즘을 이용해 임상·유전·병리 데이터를 통합 분석, 세 가지 tau 전파 서브타입을 규명하고 생존과 연관된 임상·유전 인자를 확인했다.",
        "question": "PSP의 다양한 임상 표현형 차이는 서로 다른 tau 병리 전파 패턴(서브타입)으로 설명될 수 있는가?",
        "key_result": "① PSP 생존과 연관된 임상 예측 인자 및 뇌 영역별 tau 부담 확인; ② MDS 기준 PSP 표현형별 tau 분포 해부학적 참조 표준 제시; ③ 생물학적 성별·MAPT 반수체형·TDP-43 공병리와 표현형/tau 부담의 연관성 발견; ④ SuStaIn으로 세 가지 tau 전파 서브타입 규명",
        "why_for_us": "MAPT 반수체형 등 유전 변이와 표현형·병리 연관 분석 방식, SuStaIn 기반 질환 서브타이핑, 그리고 신경 퇴행 질환에서 유전-병리-표현형 통합 접근법이 랩의 neuro GWAS/QTL 연구에 방법론적 참고가 됨",
        "limitations": "단일 바이오뱅크 기반 코호트로 일반화 가능성 제한; 종단 병리 데이터 부재로 실제 전파 방향 확인 불가; 일부 표현형의 샘플 수가 적음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Synapse-associated neuropathological markers in Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41906816/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41906816/",
        "doi": "https://doi.org/10.1093/brain/awag117",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Barrantes FJ",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "AD 시냅스병증의 핵심 분자(Aβ, tau, 콜레스테롤 대사, APOE) 기전 정리",
          "혈장 프로테오믹스 및 기타 최신 오믹스 방법론의 조기 진단 적용 현황 리뷰",
          "시냅스 마커를 활용한 인지 장애 발병 및 예후 예측 가능성 평가",
          "위험인자·공존질환 개선을 위한 치료 개입 방향 제시"
        ],
        "concepts": [
          "pqtl-proteomics",
          "mass-spectrometry-proteomics",
          "proteomics-quantification",
          "drug-target-genetics"
        ],
        "tldr": "알츠하이머병(AD)에서 시냅스 연관 신경병리 마커를 중심으로, 혈장 프로테오믹스 등 최신 기법을 이용한 조기 진단 가능성과 치료 개입 전략을 종합 리뷰했다.",
        "question": "시냅스 유래 분자 마커들이 AD 임상 증상 발현 이전 조기 진단에 활용될 수 있는가?",
        "key_result": "시냅스 유래 혈장 프로테오믹스 바이오마커가 AD 전임상 단계 시냅스병증을 반영할 수 있으며, APOE ε4 등 유전적 위험인자와 콜레스테롤 대사 이상이 시냅스 손상에 수렴한다는 근거 정리",
        "why_for_us": "랩의 AD 관련 pQTL/프로테오믹스 및 유전-표현형 연구에서 시냅스 바이오마커 관련 맥락 파악에 유용; 혈장 프로테오믹스 조기 진단 접근법은 랩의 proteomics 통합 분석과 연결됨",
        "limitations": "리뷰 논문으로 원본 실험 데이터 부재; 특정 바이오마커의 임상 검증 수준 편차 있음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "α-Synuclein aggregation and brain atrophy in SNCA-A53T transgenic monkeys are correlated with parkinsonism.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41653051/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41653051/",
        "doi": "https://doi.org/10.1093/brain/awag046",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Wei J",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "SNCA-A53T 형질전환 붉은털원숭이에서 인산화 α-synuclein 집적 및 도파민 신경 퇴행 조직학적 분석",
          "운동·인지 기능 및 REM 수면 행동 장애 표현형 장기 추적",
          "4년 종단 MRI로 피질 표면적·두께·용적 발달 패턴 분석",
          "단일세포 전사체 분석으로 뇌 위축 기여 세포 유형 규명"
        ],
        "concepts": [
          "alpha-synuclein-proteostasis",
          "brain-cell-atlas",
          "single-cell-eqtl"
        ],
        "tldr": "SNCA-A53T 형질전환 붉은털원숭이 모델에서 다중 모달 장기 추적(운동·인지·수면·MRI·단일세포 전사체)으로 PD 병리 진행을 체계적으로 특성화하고, 성상세포 특이적 유전자 이상이 뇌 위축에 기여함을 밝혔다.",
        "question": "SNCA-A53T 형질전환 영장류 모델이 PD 병리(α-synuclein 집적, 도파민 신경 퇴행, 행동 결함)를 얼마나 충실히 재현하며, 단일세포 전사체는 어떤 세포 유형의 기여를 드러내는가?",
        "key_result": "형질전환 원숭이는 PD 유사 α-synuclein 집적·도파민 퇴행·운동/인지/수면 결함을 재현; 단일세포 전사체에서 성상세포 특이적 유전자 이상과 세포 소실이 뇌 위축의 주요 기전으로 확인; MRI 피질 용적 감소 영역이 행동 결함과 기능적으로 연관",
        "why_for_us": "단일세포 전사체를 활용한 신경 퇴행 세포 유형 분석 방법론이 랩의 single-cell 분석 접근과 연관; PD 병리 모델에서 glial 세포 역할 규명은 랩의 neuro 도메인 연구에 참고 가치",
        "limitations": "비인간 영장류 모델로 인간 산발성 PD와 차이 있음; 단일 돌연변이(A53T) 중심으로 다른 SNCA 변이나 sporadic PD 일반화 한계; 샘플 수 제한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mouse models of acute and chronic hepatitis E virus infection.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42727860/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42727860/",
        "doi": "https://doi.org/10.1016/j.jhep.2026.08.034",
        "journal": "Journal of hepatology",
        "year": "2026",
        "author": "Liu T",
        "rating": 3,
        "emoji": "💉",
        "domain": "바이러스",
        "what_they_did": [
          "AG129(IFN 수용체 결핍) 및 C57BL/6J(면역정상) 마우스에 HEV-C1 접종 후 감염 확인(RT-PCR, RNAscope)",
          "AG129 마우스에서 13회 계대적응을 통해 면역정상 마우스 감염 가능 균주 개발",
          "단일세포 RNA-seq으로 간내 감염 세포 지형도(atlas) 작성",
          "CD4+ T세포 고갈 실험으로 지속 감염 기전 탐색"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "brain-cell-atlas"
        ],
        "tldr": "HEV-C1(쥐 유래 E형 간염 바이러스)을 이용해 면역결핍(AG129) 및 면역정상(C57BL/6J) 마우스 감염 모델을 최초로 구축하고, 단일세포 RNA-seq으로 간내 바이러스 감염 세포 유형 및 동태를 규명",
        "question": "실험실 마우스에서 HEV 감염 모델을 확립하고, 단일세포 수준에서 간내 바이러스 친화 세포 유형과 면역 반응을 파악할 수 있는가?",
        "key_result": "HEV-C1은 AG129 마우스에서 강건한 감염을 보였으며, 13회 계대 후 C57BL/6J 마우스에도 감염 가능; scRNA-seq으로 간 대식세포·간세포가 주요 감염 표적임을 확인; CD4+ T세포 결핍이 지속 감염에 기여함을 시사",
        "why_for_us": "단일세포 전사체 분석 방법론(scRNA-seq atlas 구축, 바이러스-숙주 상호작용 분석)이 랩의 single-cell 분석 역량과 직결; 바이러스 감염 맥락에서 면역세포 조성 변화 연구에 활용 가능",
        "limitations": "HEV-C1은 사람 주요 genotype(1,2,3,4)이 아닌 쥐 유래 주이므로 임상적 번역 가능성 제한; C57BL/6J 모델에서의 병리학적 세부 특성은 추가 검증 필요",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-09-06",
    "count": 40,
    "papers": [
      {
        "title": "Longitudinal dynamics of gene expression and metabolomics in an aging population cohort.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42691178/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42691178/",
        "doi": "https://doi.org/10.1126/science.aed6452",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "El-Sayed Moustafa JS",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "335명 여성 대상 8년 종단 코호트에서 전혈 전사체(RNA-seq)와 대사체(metabolomics)를 반복 측정",
          "5,061개 유전자 및 181개 대사체의 시간적 변화 궤적을 집단 수준 및 개인 수준에서 분석",
          "유전, 일주기 리듬, 계절성, 환경 오염물질 노출이 종단 궤적에 미치는 영향 정량화",
          "오믹스 간 정적(static) 및 시간 가변적(time-variable) 연결성을 통합 분석"
        ],
        "concepts": [
          "molecular-qtl",
          "mendelian-randomization",
          "aging-genetics",
          "sex-differences-genetics",
          "cell-type-deconvolution"
        ],
        "tldr": "335명 여성 코호트에서 8년간 전혈 유전자 발현·대사체를 종단 프로파일링하여, 시간에 따라 변하는 멀티오믹스 궤적과 이에 영향을 미치는 유전·환경 요인을 규명했다.",
        "question": "인간 집단에서 유전자 발현과 대사체 수준은 노화 과정에서 어떻게 시간적으로 변화하며, 개인 간 궤적 차이는 어떤 요인에 의해 결정되는가?",
        "key_result": "5,061개 유전자와 181개 대사체가 시간에 따라 유의하게 변화했으며, 개인 궤적은 집단 평균 추세와 빈번히 달랐다. 종단 가변 유전자들은 심장대사·신경퇴행 관련 경로에 풍부하게 분포했고, 유전·일주기·계절·환경 요인이 궤적 형성에 기여함을 확인했다.",
        "why_for_us": "노화·멀티오믹스 통합·eQTL/mQTL·개인차 정밀의학 관심과 직접 부합. 종단 유전자 발현-대사체 공동 변화 분석은 랩의 QTL·colocalization·멀티오믹스 통합 연구에 핵심 참고 자원이 됨.",
        "limitations": "여성 단일 성별 코호트로 일반화에 제한. 전혈 기반이므로 세포 유형 조성 변화가 신호에 혼입될 수 있음. 인과관계보다 연관성 수준의 결과.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Robust inference and correlates from genetic associations with personality.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42686911/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42686911/",
        "doi": "https://doi.org/10.1038/s41586-026-10992-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Schwaba T",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "46개 코호트(611,037~1,140,000명) 유럽계·아프리카계 참가자 대상 Big Five 성격 특질 GWAS 메타분석 수행",
          "50,725명 규모 가족 내(within-family) GWAS 분석으로 환경 교란 평가",
          "다각형 예측력, 유전적 상관, 멘델 무작위화를 통한 성격-행동·삶의 결과 간 인과 추론"
        ],
        "concepts": [
          "gwas-association-testing",
          "polygenic-risk-score",
          "mendelian-randomization",
          "genetic-correlation",
          "genetic-architecture",
          "missing-heritability",
          "summary-statistics-methods",
          "cross-ancestry-transferability"
        ],
        "tldr": "61만~114만 명 규모의 다코호트 메타 GWAS로 Big Five 성격 특질의 유전 구조를 분석하여 1,260개 선도 변이를 발견하고, 가족 내 GWAS로 환경 교란 최소화를 확인했다.",
        "question": "Big Five 성격 특질의 유전적 구조는 얼마나 강건하게 일반화되며, 공유 가족 환경에 의한 교란은 어느 정도인가?",
        "key_result": "1,260개 선도 변이 확인(824개 신규). 공통 변이가 각 특질 분산의 4.8~9.3% 설명. 가족 내 GWAS 결과 성격의 유전 연관은 공유 가족 환경에 의한 교란이 최소화됨. 배우자 선택에 의한 유전적 동류혼 미미.",
        "why_for_us": "대규모 GWAS 메타분석, fine-mapping, PRS, MR, genetic correlation 등 우리 랩의 핵심 방법론이 모두 활용된 사례. 비임상 표현형에 대한 유전 구조 분석으로 방법론 학습 및 비교 참고 가능.",
        "limitations": "유럽계 중심 데이터로 다민족 일반화 제한적; 성격 측정 도구 간 이질성 존재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Evolutionary genetics of ageing.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42115756/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42115756/",
        "doi": "https://doi.org/10.1038/s41576-026-00959-x",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Dönertaş HM",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "자연선택의 'shadow' 개념(선택 그늘)에서 축적되는 후기-발현 돌연변이와 길항적 다면발현 이론을 정리",
          "척추동물 간 최대수명 100배 변이의 비교유전체학적 증거 검토",
          "장수 경로(IIS, mTOR, sirtuins 등)의 진화적 보존성 고찰",
          "대규모 인간 유전체 연구(GWAS, 바이오뱅크) 및 멀티오믹스 노화 바이오마커 연구 성과 통합",
          "건강수명 연장을 위한 진화-분자 통합 프레임워크 제안"
        ],
        "concepts": [
          "aging-genetics",
          "genetic-architecture",
          "gwas-association-testing",
          "missing-heritability",
          "partitioned-heritability",
          "genetic-correlation",
          "mendelian-randomization"
        ],
        "tldr": "노화의 진화유전학을 총정리한 리뷰로, 자연선택의 약화가 어떻게 노화를 만들어내는지, 종간 수명 변이, 인간 대규모 유전체 연구 및 멀티오믹스 바이오마커와의 연결을 체계적으로 다룸.",
        "question": "노화는 왜 진화적으로 발생하며, 그 유전적·분자적 기반은 종간·개체간에 어떻게 다른가?",
        "key_result": "노화는 생식 후 자연선택이 약해지는 선택 그늘로 인해 진화하며, 종간 수명 다양성과 노화 관련 질환의 공유된 유전적 구조 모두 이 틀로 설명 가능함. 비교유전체학·인간 GWAS·멀티오믹스 노화 바이오마커가 진화 예측 검증에 활용되고 있음.",
        "why_for_us": "랩의 노화 유전학(aging-genetics), 유전적 구조(genetic-architecture), 멀티오믹스 통합, GWAS 관심과 직접 연결. 노화 관련 질환 도메인(nephro, neuro, autoimmune 등) 연구의 이론적 배경으로 활용 가능.",
        "limitations": "리뷰 논문으로 자체 실험 데이터 없음; 진화 이론과 분자 메커니즘 간 인과적 연결의 실증적 한계를 직접 해결하지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mechanisms and functional implications of long-range enhancer-dependent gene regulation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42680838/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42680838/",
        "doi": "https://doi.org/10.1038/s41588-026-02721-9",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Iliadou M",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "인핸서-프로모터 거리와 조절 활성의 역상관 관계 문헌 정리",
          "장거리 조절을 가능케 하는 다중 기전(3D 게놈 구조, 전사 허브, 크로마틴 루핑 등) 검토",
          "발생 과정에서 장거리 조절의 진화적·기능적 이점에 대한 가설 제시"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "crispr-enhancer-mapping",
          "mpra",
          "molecular-qtl"
        ],
        "tldr": "장거리 인핸서-프로모터 조절의 메커니즘(거리 의존적 활성 감소, 이를 극복하는 다양한 전략)과 발생 유전자 발현 프로그램에서의 기능적 의의를 종합 리뷰함.",
        "question": "장거리 인핸서는 어떤 분자적 기전으로 수십~수백 kb 떨어진 유전자를 정밀하게 조절하는가?",
        "key_result": "인핸서 활성은 선형 거리와 반비례하며, 이를 극복하는 여러 기전이 존재함; 장거리 조절은 발생 유전자 발현 프로그램에서 정밀성·견고성을 제공하는 것으로 제안됨",
        "why_for_us": "noncoding 조절 변이, caQTL, CRISPR 인핸서 매핑, 유전자 조절 네트워크 연구와 직결되는 리뷰로, fine-mapping된 GWAS 변이의 기능 해석 틀로 유용",
        "limitations": "리뷰 논문으로 일부 내용은 추론/가설 수준",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Scalable, generalizable and uncertainty-aware integration of spatial multiomics across diverse modalities and platforms with SCIGMA.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42693183/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42693183/",
        "doi": "https://doi.org/10.1038/s41588-026-02706-8",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Chang S",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "불확실성 인식 대조 학습(uncertainty-aware contrastive learning)과 멀티뷰 그래프 신경망(GNN)을 결합한 SCIGMA 프레임워크 개발",
          "19개 데이터셋(8가지 모달리티, 10개 조직, 9개 플랫폼)에서 벤치마크 평가",
          "Visium HD, Xenium Prime 등 고해상도 플랫폼(100만+ 공간 좌표) 적용 테스트",
          "공간 도메인 탐지, 모달리티 보존, 특징 재건, 재현성 지표 비교"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "snp-heritability-grm",
          "molecular-qtl"
        ],
        "tldr": "공간 멀티오믹스(전사체·단백질체·후성유전체·대사체·이미지) 데이터를 최대 5개 모달리티, 100만 개 이상 공간 위치에서 통합할 수 있는 딥러닝 프레임워크 SCIGMA를 제시.",
        "question": "다양한 플랫폼과 모달리티에 걸친 공간 멀티오믹스 데이터를 확장 가능하고 불확실성을 반영하는 방식으로 통합할 수 있는가?",
        "key_result": "SCIGMA는 벤치마크 가능한 데이터셋에서 기존 방법 대비 공간 도메인 탐지·모달리티 보존·특징 재건·재현성 모두 우수; 공간 해상도별 불확실성 지도를 제공해 생물학적·기술적 이질 영역 식별 가능.",
        "why_for_us": "랩이 추진하는 공간 전사체·멀티오믹스 통합 프로젝트에 직접 활용 가능한 도구; 불확실성 정량화는 QTL·colocalization 해석과 연계 가능.",
        "limitations": "벤치마크 지표가 최적화된 데이터셋에 국한될 수 있으며, 모달리티 수 증가 시 계산 비용 및 하이퍼파라미터 민감도 미보고.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Tabula Sapiens 2.0: A comprehensive transcriptomic atlas of human cell types.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42685689/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42685689/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.010",
        "journal": "Cell",
        "year": "2026",
        "author": "",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "기존 Tabula Sapiens에 9명의 새 공여자, 4개 신규 조직을 추가하여 세포 수 2배 확장",
          "동일 공여자로부터 다중 장기 데이터 확보하여 유전적 배경·나이·후성유전 효과를 통제",
          "거의 모든 인간 전사인자(TF)의 세포유형 특이적 발현 지도 작성",
          "세포 노화(senescence) 마커 발현 세포의 전사체 이질성 분석"
        ],
        "concepts": [
          "brain-cell-atlas",
          "cell-type-deconvolution",
          "single-cell-eqtl",
          "aging-genetics",
          "variant-to-cell-type"
        ],
        "tldr": "인간 다장기 단일세포 전사체 레퍼런스 아틀라스 Tabula Sapiens 2.0을 구축하여 세포유형별 전사인자 활성, 세포 노화 이질성 등을 분석.",
        "question": "다양한 장기·조직을 망라하는 고품질 인간 레퍼런스 단일세포 아틀라스를 어떻게 구성하고, 이를 통해 전사인자 세포유형 특이성과 세포 노화 경로에 대한 무엇을 알 수 있는가?",
        "key_result": "~30개 이상 장기·조직에 걸친 방대한 세포 아틀라스 완성; 거의 모든 인간 TF에 대해 세포유형 특이적 발현 패턴 확인; 세포 노화 세포가 조직·맥락에 따라 이질적 전사 상태를 보임을 발견.",
        "why_for_us": "랩의 single-cell 멀티오믹스 및 세포유형 주석 파이프라인의 레퍼런스로 직접 활용 가능; cell-type deconvolution, eQTL·QTL 분석의 레퍼런스 아틀라스로 사용 가능; aging 및 autoimmune 연구의 세포유형 특이 TF 후보 발굴에 활용.",
        "limitations": "단일세포 전사체 데이터만 포함(ATAC, 단백질 등 멀티오믹스 미포함); 공여자 수가 제한적이어서 집단 유전적 다양성 반영 부족.",
        "reuse": "Tabula Sapiens 2.0 데이터 공개 예정(Cell 논문 기준); 레퍼런스 아틀라스로서 세포유형 주석, deconvolution, eQTL 분석 등에 직접 재사용 가능.",
        "next_step": ""
      },
      {
        "title": "Predicting cellular responses to perturbation across diverse contexts with State.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42673963/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42673963/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.052",
        "journal": "Cell",
        "year": "2026",
        "author": "Adduri AK",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "167M 세포의 단일세포 유전자발현 관측 데이터로 State 모델 학습",
          "유전·신호·화학적 퍼터베이션에 대해 세포 집합 단위로 효과 예측",
          "Cell-Eval이라는 종합 벤치마크 평가 프레임워크 제안",
          "학습 시 퍼터베이션 정보가 없던 세포 맥락에서도 강력한 퍼터베이션 예측 수행"
        ],
        "concepts": [
          "perturb-seq",
          "single-cell-eqtl"
        ],
        "tldr": "단일세포 유전자발현 데이터로 학습된 머신러닝 모델 'State'가 다양한 세포 맥락(167M 세포)에서 유전·신호·화학적 퍼터베이션의 전사체 효과를 예측하며, 기존 베이스라인 대비 30% 이상 향상된 성능을 보임.",
        "question": "다양한 실험 조건과 세포 이질성을 고려하면서 퍼터베이션에 의한 전사체 변화를 범용적으로 예측할 수 있는 AI 모델을 만들 수 있는가?",
        "key_result": "대형 데이터셋에서 퍼터베이션 효과 판별 성능이 기존 대비 30% 이상 향상; 유전·신호·화학적 퍼터베이션 전반에서 차별발현유전자 식별 정확도 유의하게 개선",
        "why_for_us": "perturb-seq 분석 및 단일세포 수준의 조절 네트워크·세포유형별 QTL 연구에 활용 가능한 퍼터베이션 예측 프레임워크로, 랩의 single-cell 및 기능유전체 파이프라인에 참고할 만함.",
        "limitations": "초록에 모델의 세포유형 범위, 학습 데이터 편향, 계산 비용 등에 대한 상세 논의 없음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A genomic catalog of Earth's bacterial and archaeal symbionts.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42675165/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42675165/",
        "doi": "https://doi.org/10.1038/s41587-026-03213-1",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Villada JC",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "다양한 환경 메타게놈 샘플에서 얻은 10만 개 이상의 미생물 유전체에 ML 프레임워크(symclatron) 적용",
          "숙주 연관 또는 의무 세포내 생활 방식을 예측해 공생 유전체 카탈로그(SymGs) 구축",
          "공생 생활 방식과 연관된 유전체 특성(대사 기능 소실, 대사 모듈 차등 존재) 분석"
        ],
        "concepts": [
          "gene-catalogue",
          "functional-profiling"
        ],
        "tldr": "머신러닝 기반 symclatron 프레임워크로 10만여 개 미생물 유전체에서 공생 생활 방식을 예측하고, 지구 세균·고균의 공생 유전체 카탈로그(SymGs)를 구축했다.",
        "question": "배양 불가능한 미생물 유전체에서 공생 생활 방식의 유전체 특성을 대규모로 예측·분류할 수 있는가?",
        "key_result": "배양 불가능 미생물의 15~23%가 공생 관계에 있을 것으로 예측되며, 이는 알려진 세균·고균 문의 절반에 분포함; 공생 특성으로 특정 대사 기능 소실 및 숙주 의존 대사 모듈 확인.",
        "why_for_us": "랩의 메타게놈·마이크로바이옴 관심 영역 중 유전체 카탈로그·기능 프로파일링 측면에서 참고 가능; gene-catalogue 및 functional-profiling 개념과 연결됨.",
        "limitations": "ML 예측 기반으로 실험적 검증 미흡; 환경 메타게놈 유래 초안 유전체의 품질 이종성.",
        "reuse": "symclatron 소프트웨어 및 SymGs 카탈로그 공개 예정(초록에 명시).",
        "next_step": ""
      },
      {
        "title": "Nucleic acid sensing pathways in kidney disease development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42680946/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42680946/",
        "doi": "https://doi.org/10.1038/s41581-026-01120-x",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Andrade-Silva M",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "사구체·세뇨관 구획에서 cGAS-STING, AIM2, 엔도솜 TLR 경로가 활성화되는 기전 문헌 종합",
          "미토콘드리아 기능 이상, 유전독성 스트레스, 후성유전적 조절 이상에 의한 세포질 핵산 축적 과정 정리",
          "급성 신손상(AKI) 및 만성 신장병(CKD) 실험·인간 모델에서 경로별 관여도 비교",
          "치료 표적으로서 핵산 감지 경로 억제제들의 기회와 한계 평가"
        ],
        "concepts": [
          "noncoding-regulatory-variants"
        ],
        "tldr": "미스로컬라이즈된 자기 핵산이 cGAS-STING, AIM2, TLR 등 핵산 감지 경로를 통해 신장 염증·섬유화를 유발하는 기전을 종합 리뷰하고, 치료 표적 가능성을 평가.",
        "question": "세포 손상 시 방출되는 자기 핵산(mtDNA, 핵 DNA 단편, 내인성 레트로엘리먼트 등)이 신장 질환에서 어떤 선천면역 감지 경로를 통해 염증·섬유화를 촉진하는가?",
        "key_result": "cGAS-STING 축이 AKI→CKD 전환의 핵심 매개자로 확인됨; 내인성 레트로엘리먼트(HERV 포함) 재활성화가 신장 스테릴 염증에 기여; 맥락 의존적(context-dependent) 경로 활성화 패턴이 치료 표적화 복잡성 시사.",
        "why_for_us": "랩의 nephro(CKD·complement) 및 HERV 연구와 직접 연관; cGAS-STING/HERV 재활성화 기전은 autoimmune과 nephro 교차 연구 아이디어의 근거 제공; 후성유전적 조절 이상 측면은 methylation 분석 연구와 연결 가능.",
        "limitations": "리뷰 논문으로 새로운 원천 데이터 없음; 인간 CKD에서 각 경로의 상대적 기여도 정량화 미흡; 임상 전환(clinical translation)은 아직 초기 단계.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Inflammation as a therapeutic target to improve kidney and cardiovascular outcomes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42697978/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42697978/",
        "doi": "https://doi.org/10.1038/s41581-026-01117-6",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Tuttle KR",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "hsCRP를 중심으로 CKD와 전신 염증의 연관성 문헌 정리",
          "ASK1 억제제(selonsertib), JAK1/2 억제제(baricitinib), Nrf2 활성제(bardoxolone), IL-1β/IL-6 단클론항체 등 다양한 항염증 임상시험 결과 종합",
          "RAAS 억제제, SGLT2i, GLP-1RA, nsMRA 등 기존 CKD 치료제의 항염증 기전 논의"
        ],
        "concepts": [
          "mendelian-randomization",
          "drug-target-genetics"
        ],
        "tldr": "CKD에서 염증이 신장 기능 저하 및 심혈관 합병증의 핵심 경로임을 정리하고, 주요 항염증 치료 전략(ASK1·JAK·Nrf2 억제제, IL-1β/IL-6 항체 등)의 임상 근거를 리뷰한 논문.",
        "question": "만성 신장질환(CKD) 환자에서 전신 염증을 치료 표적으로 삼으면 신장 및 심혈관 예후를 개선할 수 있는가?",
        "key_result": "CKD는 구조적 친염증 상태이며, hsCRP 상승이 심혈관 사건·CKD 진행 위험 모두와 연관됨; 다수 표적 치료제 임상 결과를 정리하였으나 단일 항염증제로서 명확한 생존 이익을 보인 약제는 제한적.",
        "why_for_us": "랩의 nephro(CKD) 도메인 관심사와 직결되며, CKD의 염증 경로 및 치료 타깃이 향후 MR/drug-target genetics 분석의 배경 지식으로 활용 가능.",
        "limitations": "리뷰 논문으로 개별 임상시험의 음성 결과 원인 분석이 부족하고, 유전체·오믹스 기반 환자 층화 없이 치료 반응 이질성을 설명하기 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The versatile roles of long non-coding RNAs in kidney disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42315910/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42315910/",
        "doi": "https://doi.org/10.1038/s41581-026-01094-w",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Yiu WH",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "lncRNA의 신장 항상성 조절 및 질환(AKI, CKD, 신세포암, 노화 관련 신기능 저하)에서의 역할을 문헌 기반으로 종합.",
          "lncRNA의 작용 기전(RNA 변형, 스캐폴드, 크로마틴 리모델링, 전사·전사후 조절)과 일부 lncRNA의 micropeptide 번역 기능 정리.",
          "체액 내 안정성과 조직 특이적 발현을 바탕으로 한 바이오마커 및 치료제 가능성 논의."
        ],
        "concepts": [
          "molecular-qtl",
          "noncoding-regulatory-variants"
        ],
        "tldr": "신장 질환에서 lncRNA의 역할과 조절 메커니즘, 바이오마커·치료제로서의 가능성을 종합 리뷰한 논문.",
        "question": "lncRNA는 급성 신장 손상, CKD, 신세포암 등 신장 질환에서 어떤 분자적 메커니즘으로 기능하며, 진단·치료 표적으로 활용 가능한가?",
        "key_result": "lncRNA는 염증, 자가포식, 세포증식, 노화, 아폽토시스, 미토콘드리아 기능장애, 혈관신생, 상피-간질 전환, 간질 섬유화 등 신장 질환의 핵심 과정에 관여하며, 일부는 CKD 진행 억제 및 신세포암 약물 내성 극복 표적으로 제시됨.",
        "why_for_us": "랩이 관심 갖는 CKD·신장 도메인과 직접 연결되며, lncRNA 기반 비코딩 조절이 후성유전·QTL(sQTL/eQTL) 분석과 연계 가능성이 있음.",
        "limitations": "리뷰 논문으로 신규 실험 데이터 없음; 개별 lncRNA 기능의 인과적 증거 수준이 연구마다 상이함.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Immune-mediated rheumatoid arthritis: from single-cell genomics to new therapies.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42675115/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42675115/",
        "doi": "https://doi.org/10.1038/s41590-026-02639-8",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Ivashkiv LB",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA에서 단일세포 유전체학으로 발견된 림프구·골수구·섬유아세포 하위 세포군 데이터 정리",
          "공간 전사체, ex vivo 기계론적 연구, 오가노이드, 인간 질환 데이터 기반 동물 모델 활용 방향 논의",
          "새로운 치료 전략과 임상시험 설계를 위한 프레임워크 제시"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "single-cell-eqtl",
          "cell-type-deconvolution"
        ],
        "tldr": "단일세포 유전체학이 류마티스 관절염(RA) 면역 병인 연구에 미친 영향을 정리하고, 공간 전사체·ex vivo 기계론적 연구·오가노이드·동물 모델을 통해 인과관계를 파악하고 새로운 치료 전략을 도출하는 방향을 제시한 퍼스펙티브.",
        "question": "단일세포 유전체학에서 얻은 기술적·기술적 데이터를 어떻게 RA 병인 이해 및 신규 치료 전략 개발로 연결할 수 있는가?",
        "key_result": "초록에 명시 없음(퍼스펙티브 논문으로 수치 결과 없음); RA 병인에서 인과적 세포 서브셋 및 기전 이해를 위한 통합 접근 방향 제안.",
        "why_for_us": "랩의 autoimmune(RA) 도메인 및 단일세포 전사체·공간 전사체 관심과 직결; 단일세포 데이터를 QTL·GWAS 기능 해석에 연결하는 맥락에서 리뷰 참고 가치 높음.",
        "limitations": "퍼스펙티브 형식으로 새로운 데이터 없음; 인과 연구를 위한 방법론 제안 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Lung disease in rheumatoid arthritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42315602/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42315602/",
        "doi": "https://doi.org/10.1038/s41584-026-01394-2",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Bendstrup E",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA 관련 폐 합병증(ILD, COPD, 기관지확장증, 기관지염) 유병률과 임상적 중요성을 문헌 기반으로 정리.",
          "흡연, ACPA 양성, 연령, 성별 등 ILD 위험인자와 고해상도 CT 스크리닝 기준 검토.",
          "관절 염증 치료제와 RA-ILD 치료 간 증거 수준 차이, 현재 치료 가이드라인 부재 문제 논의."
        ],
        "concepts": [],
        "tldr": "RA에서 폐 침범(ILD, 기도폐쇄, 기관지확장증)의 병리 기전, 진단, 치료 현황을 종합한 리뷰.",
        "question": "RA 환자에서 폐 질환이 발생하는 병리생리학적 기전은 무엇이며, 현재 진단·치료 전략의 한계와 향후 방향은?",
        "key_result": "RA 환자에서 폐 침범은 생존율 감소의 주요 원인이며, ILD 스크리닝에 고해상도 CT가 권고됨; RA-ILD에 대한 근거 기반 치료는 아직 제한적.",
        "why_for_us": "랩의 autoimmune(RA) 도메인 및 ACPA/흡연 등 유전-환경 상호작용, 염증 기전 연구와 연관성 있음.",
        "limitations": "리뷰 논문으로 신규 데이터 없음; RA-ILD 치료 근거가 여전히 부족함을 저자들도 인정.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A single-cell atlas of multiple myeloma defines malignant archetypes and proliferative states.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42680839/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42680839/",
        "doi": "https://doi.org/10.1038/s41588-026-02725-5",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Zada M",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "341명 MM 환자(질환·치료 연속체 포괄)의 임상 주석 단일세포 아틀라스 생성",
          "악성 형질세포의 전사 원형 5종 및 직교적 증식 프로그램 동정",
          "독립 CoMMpass 코호트에서 재현성·예후 관련성 검증",
          "악성 세포 농축·세포유형 특이성·조직 제한성 기반 타겟 발굴 파이프라인 적용 → FCRL2 선정",
          "FCRL2 표적 CAR-T 세포 in vitro 항원 특이적 활성 및 in vivo 생존 이익 확인"
        ],
        "concepts": [
          "cell-type-deconvolution",
          "spatial-transcriptomics",
          "variant-to-cell-type"
        ],
        "tldr": "다발성 골수종(MM) 341명 임상 주석 단일세포 아틀라스를 구축해 5가지 악성 전사 원형과 증식 프로그램을 정의하고, FCRL2를 새로운 CAR-T 타겟으로 발굴·검증함.",
        "question": "다발성 골수종의 단일세포 전사 이질성을 어떻게 체계화하고, 이를 정밀 치료 타겟 발굴에 활용할 수 있는가?",
        "key_result": "5종의 재발성 악성 전사 원형과 증식 프로그램이 게놈 특징·치료 저항성·임상 결과와 연관; CoMMpass 코호트에서 예후 관련성 재현; FCRL2 CAR-T는 in vitro·in vivo에서 유의미한 항종양 효과",
        "why_for_us": "대규모 단일세포 아틀라스 구축, 세포유형 특이적 타겟 발굴 파이프라인, 환자 층화 방법론이 랩의 single-cell 및 cancer immunology 관심과 직접 부합; 악성 전사 상태와 게놈 특징 연계도 GWAS/QTL 관점에서 참고 가능",
        "limitations": "형질세포 외 TME 세포 구성 분석이 제한적으로 기술됨; CAR-T 임상 전환 데이터 부재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Tumor-derived antioxidants suppress immunity by depriving T cells of reactive oxygen species.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42691162/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42691162/",
        "doi": "https://doi.org/10.1126/science.adz8203",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Wesolowski AJ",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "종양 간질액의 항산화 활성을 측정하고 PRDX1 단백질의 농축을 확인",
          "세포외 PRDX1이 T세포 ROS를 제거하는 메커니즘 규명",
          "ROS 결핍이 TCR 신호 인산화효소 활성에 미치는 영향 분석"
        ],
        "concepts": [],
        "tldr": "종양이 항산화 효소(PRDX1)를 분비하여 T세포의 ROS를 제거함으로써 TCR 신호전달과 항종양 면역을 억제한다는 기전을 밝혔다.",
        "question": "종양 미세환경의 항산화 활성이 T세포 면역기능을 어떻게 억제하는가?",
        "key_result": "종양 간질액에 PRDX1이 풍부하게 존재하며, 세포외 PRDX1이 T세포 ROS를 고갈시켜 포스파타제 산화적 불활성화를 방해함으로써 TCR 구동 키나제 신호 및 이펙터 기능을 억제한다.",
        "why_for_us": "T세포 탈진 및 종양 면역 억제 메커니즘 연구(TME·T cell exhaustion)에 직결되며, cancer immunology 분야 프로젝트에 참고할 수 있는 ROS-TCR 신호 연결 기전 제공.",
        "limitations": "인간 임상 데이터에서 PRDX1 수준과 T세포 기능/환자 예후 간 직접 연관성은 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Integrated clinicogenomic analysis reveals the evolution and metastatic tropisms of advanced colorectal cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42679811/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42679811/",
        "doi": "https://doi.org/10.1016/j.ccell.2026.08.004",
        "journal": "Cancer cell",
        "year": "2026",
        "author": "Manca P",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "연속 시퀀싱된 7,000개 이상 CRC 샘플의 임상·유전체 데이터 통합 분석",
          "클론 돌연변이, 종양 유전자 돌연변이 대립유전자 불균형 등 유전체 진화 변화 분석",
          "장기별 전이 순서 및 전이 부위 클러스터링 규명",
          "WNT·RAS 경로 활성화가 장기별 전이 위험에 미치는 영향 평가"
        ],
        "concepts": [
          "genetic-architecture",
          "structural-variants-gwas"
        ],
        "tldr": "7,000개 이상의 CRC 샘플 임상-유전체 통합 분석으로 전이 양상, 유전체 진화, 장기별 전이 위험 인자를 체계적으로 규명함.",
        "question": "CRC에서 유전체 진화 패턴이 장기별 전이 경로와 위험도를 어떻게 결정하는가?",
        "key_result": "미세위성 안정(MSS) CRC에서 뇌·부신 전이는 후기 사건; 폐·뼈·뇌 전이는 클러스터링; WNT 경로 활성화는 전반적 전이에 보호적, RAS 경로 활성화는 모든 전이 부위 위험 증가.",
        "why_for_us": "대규모 임상-유전체 통합 분석 및 유전체 변이와 표현형(전이) 연관 방법론이 랩의 GWAS/유전 구조 분석과 방법론적으로 관련됨. CRC 협업 프로젝트(Kang_TROP2_CRC)에 참고 자료로 활용 가능.",
        "limitations": "단일 기관 연속 시퀀싱 코호트로 선택 편향 가능성; 전이 부위 확인의 임상적 이질성; 종양 내 이질성 및 액체생검 데이터 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cellular Neighborhoods Govern Antitumor T-cell Infiltration Following Anti-CTLA-4 in Melanoma with Primary Resistance to Anti-PD-1.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42013417/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42013417/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-25-1745",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Campbell KM",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "SWOG S1616 임상 2상(NCT03033576) 환자 생검에서 공간 프로테오믹스 및 전사체 분석 수행",
          "반응군·비반응군의 기저 및 치료 중 생검 비교",
          "보체 발현(골수세포), 인터페론 경로(내피세포), 산화적인산화·지질대사(흑색종세포) 패턴 분석"
        ],
        "concepts": [
          "spatial-transcriptomics"
        ],
        "tldr": "항PD-1 1차 내성 흑색종에서 anti-CTLA-4 병용 시 반응군은 CD8 T세포-종양세포 근접 네트워크를, 비반응군은 혈장세포 시트를 보이는 세포 neighborhood를 공간 프로테오믹스로 규명.",
        "question": "항PD-1 1차 내성 흑색종에서 anti-CTLA-4 병용 요법의 반응·비반응을 결정하는 TME 세포 neighborhood는 무엇인가?",
        "key_result": "반응군 생검: 활성화 CD8 T세포-흑색종세포 근접 네트워크 또는 T·골수세포 혼재 네트워크 확인. 비반응군 생검: 혈장세포 시트 인접 T세포 침윤 장애. 기저 생검에서 반응군 특이적 보체·IFN·지질대사 전사체 서명 확인.",
        "why_for_us": "TME 내 T세포 상태(소진·활성화), 공간 프로테오믹스, 면역치료 반응 메커니즘은 랩의 cancer immunology(T cell exhaustion·TME) 관심사와 직결됨.",
        "limitations": "단일 임상시험 코호트, 공간 분해능 한계, 인과관계 확립 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial Mapping of the Precancer-to-Cancer Transition in Breast and Prostate.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41997105/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41997105/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-26-0012",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Storrs E",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "51 케이스 319 공간 어세이를 포함하는 멀티모달 연속 절편 워크플로우 개발(라이트시트 현미경+공간 전사체)",
          "전암-침윤 경계 전사체 특징 및 구조적 변화 분석",
          "유방암: MGP·PLAT 소실, 전립선암: GDF15·ALDH1A3·ANPEP·FASN 상향 규명 후 기능적 검증"
        ],
        "concepts": [
          "spatial-transcriptomics"
        ],
        "tldr": "유방암·전립선암 전암-침윤암 경계를 라이트시트 현미경+공간 전사체 멀티모달 방법으로 정밀 매핑, 침윤 전환 드라이버 유전자(MGP, PLAT, GDF15 등)와 TAM 역할을 규명.",
        "question": "유방·전립선 전암에서 침윤암으로의 전환 경계에서 어떤 유전자·세포 변화가 일어나는가?",
        "key_result": "유방암 침윤 전환 시 MGP·PLAT 소실이 종양형성 촉진. 전립선암 침윤 경계에서 GDF15 등 4개 유전자 상향; PC-3 knockdown 시 증식·이동 억제. 비TNBC 유방암 전환부에 SPP1+·MS4A6A+ 종양연관 대식세포 풍부.",
        "why_for_us": "공간 전사체 방법론 및 TME 내 면역세포(TAM) 분석은 랩의 spatial transcriptomics·cancer immunology 관심과 관련.",
        "limitations": "소수 케이스, 전립선·유방 두 암종에 국한, 기능 실험은 세포주 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Developmental and cellular vulnerabilities underlie genetic architecture of schizophrenia.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42693176/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42693176/",
        "doi": "https://doi.org/10.1038/s41380-026-03862-3",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Wu Y",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "5개 피질 영역에서 약 300만 snRNA-seq + snATAC-seq 프로파일을 포함하는 발달 멀티오믹스 아틀라스 구축",
          "SZ GWAS(공통변이) 및 WES(희귀변이) 데이터를 세포 유형·발달 8단계별로 유전적 농축 분석(partitioned heritability 등 다중 통계 프레임워크 적용)",
          "사후 전두엽 피질 snRNA-seq 데이터셋에서 차등 발현 분석으로 유전적 취약 세포 기질 교차 검증"
        ],
        "concepts": [
          "partitioned-heritability",
          "single-cell-eqtl",
          "fine-mapping",
          "gwas-association-testing",
          "rare-variant-collapsing",
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "variant-to-cell-type",
          "noncoding-regulatory-variants",
          "genetic-architecture"
        ],
        "tldr": "조현병(SZ)의 GWAS(공통변이)와 WES(희귀변이) 데이터를 인간 대뇌 피질의 발달 단계별 snRNA-seq·snATAC-seq 멀티오믹스 아틀라스(~300만 핵)와 통합하여, 세포 유형·발달 시기별 유전적 위험 농축을 정밀 지도화한 연구.",
        "question": "조현병의 공통·희귀 유전변이 위험은 인간 대뇌 발달의 어떤 세포 유형과 시기에 집중되어 있는가?",
        "key_result": "공통·희귀 유전 부담 모두 광범위한 흥분성·억제성 뉴런에 수렴; 특히 IT(Intratelencephalic) 투사 뉴런 및 6b층 흥분성 뉴런 네트워크에서 일관된 농축 확인; 희귀 변이는 주로 신경발생·신경이동 초기 단계에 집중.",
        "why_for_us": "랩의 neuro(SCZ) GWAS/QTL·single-cell·partitioned heritability 관심사와 완벽하게 부합; snRNA+snATAC 멀티오믹스로 세포 유형별 GWAS 신호 해석하는 파이프라인이 방법론적으로 직접 참고 가능.",
        "limitations": "단일 민족/코호트 기반 GWAS 데이터 활용 한계; 공간적 맥락(세포 간 상호작용) 미반영; 사후 뇌 조직의 기술적 노이즈 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "3D epigenome of glial cell types in developing human cortex.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42686907/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42686907/",
        "doi": "https://doi.org/10.1038/s41586-026-10987-6",
        "journal": "Nature",
        "year": "2026",
        "author": "Jones IR",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "태생 중기 인간 신피질에서 vRG, oRG, OPC, 미세아교세포 4종 분리 후 유전자 발현(RNA-seq), 염색질 접근성(ATAC-seq), DNA 메틸화, Hi-C 기반 3D 염색질 루프 분석 수행",
          "머신러닝으로 신경교세포 cCRE 내 SCZ 위험 변이 112개 우선순위화",
          "형질전환 마우스 배아로 cCRE 조절 기능 검증",
          "vRG 특이 인핸서의 SCZ 위험 대립유전자(rs4449074)에 의한 기능 교란을 생체 내 확인",
          "oRG cCRE와 인간 가속 영역(HAR) 비교 분석 및 침팬지 오르솔로그와 활성도 비교"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "variant-to-cell-type",
          "brain-eqtl-grn",
          "brain-cell-atlas",
          "single-cell-eqtl",
          "colocalization",
          "fine-mapping",
          "crispr-enhancer-mapping",
          "microglia-neuroimmune"
        ],
        "tldr": "태생 중기 인간 신피질의 vRG, oRG, OPC, 미세아교세포 4종 신경교세포를 대상으로 유전자 발현·염색질 접근성·DNA 메틸화·3D 염색질 상호작용을 통합 분석하여 세포 유형별 cCRE를 규명하고, SCZ 위험 변이 및 인간 가속 영역과 연결했다.",
        "question": "발달 중 인간 피질 신경교세포의 3D 후성유전체 구조는 정신질환 비부호화 변이의 기능적 맥락을 어떻게 제공하는가?",
        "key_result": "신경교세포 유형별 cCRE 규명 및 3D 루프와의 연결. SCZ 위험 변이 112개가 글리아 cCRE 내에서 우선순위화. rs4449074 위험 대립유전자가 vRG 인핸서를 생체 내에서 교란. oRG cCRE가 HAR과 유의미하게 풍부하게 겹침.",
        "why_for_us": "비부호화 변이→세포 유형 특이 cCRE→정신질환 유전 위험 연결 파이프라인은 우리 랩의 SCZ/ASD fine-mapping, caQTL, colocalization, variant-to-cell-type 주제와 직결. 3D 에피게놈 통합 분석 방법론도 핵심 참고 문헌.",
        "limitations": "태생 중기 한 시점의 분석으로 발달 시계열 표현 부족; 형질전환 마우스를 이용한 검증으로 인간 특이적 효과 일부 한계.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cell-type-specific genetic architecture reveals neuronal and immune contributions to neuropsychiatric disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42020718/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42020718/",
        "doi": "https://doi.org/10.1038/s41380-026-03606-3",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Wang X",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "뇌 및 혈액 조직 sc-eQTL 데이터를 SCZ, PD, BP, MDD, ADHD, ASD 6개 GWAS와 연결",
          "Summary-data-based Mendelian Randomization(SMR)을 다양한 신경세포·면역세포 유형에 걸쳐 적용",
          "교차-질환 및 교차-조직 분석으로 공유 및 질환 특이적 경로 탐색"
        ],
        "concepts": [
          "single-cell-eqtl",
          "molecular-qtl",
          "mendelian-randomization",
          "colocalization",
          "gwas-association-testing",
          "fine-mapping",
          "variant-to-cell-type",
          "cell-type-deconvolution"
        ],
        "tldr": "단일세포 eQTL(sc-eQTL) 데이터와 6개 신경정신질환 GWAS를 SMR로 통합해 345개 세포 유형 특이적 위험 유전자를 발굴.",
        "question": "단일세포 해상도에서 뇌와 혈액의 eQTL을 GWAS와 통합하면 신경정신질환의 세포 유형 특이적 인과 유전자를 어디까지 규명할 수 있는가?",
        "key_result": "345개 세포 유형 특이적 위험 유전자 발굴(SCZ·PD 아교세포의 MAPT, SCZ의 APTX in microglia 등 신규 포함); 뇌 유래 위험 유전자가 혈액 유래보다 유의하게 높은 세포 유형 특이성 보임; 시냅스 기능 및 면역 조절 공유 경로 확인.",
        "why_for_us": "sc-eQTL, GWAS 통합, SMR/MR, colocalization, 세포 유형 특이 QTL 등 랩의 핵심 방법론을 모두 포괄하며 neuro 질환 분석의 직접적 참고 논문.",
        "limitations": "SMR은 연관불평형에 의한 위양성 가능성 있음; 단일세포 eQTL 참조 패널의 표본 크기 및 세포 유형 커버리지 제한; 인과관계 검증을 위한 기능 실험 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cross-species single-cell atlas of the striatum defines cell-type and subregion disease vulnerabilities.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42679819/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42679819/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.006",
        "journal": "Cell",
        "year": "2026",
        "author": "Linville RM",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 109개, 마우스 22개 선조체 샘플에 대해 snRNA-seq 수행 (배측·복측 선조체 포함)",
          "희귀 신경세포 아집단 및 등외측-복내측 축을 따른 전사 구배 정의",
          "GWAS(신경정신질환), 약리학 연구와 통합하여 오피오이드 수용체 발현 패턴 및 항정신병약물 작용 부위 규명",
          "단일세포 전사체와 체세포 삼뉴클레오타이드 반복 확장 측정을 paired 분석하여 헌팅턴병 취약 세포 유형 확인"
        ],
        "concepts": [
          "single-cell-eqtl",
          "brain-cell-atlas",
          "gwas-association-testing",
          "variant-to-cell-type",
          "cross-species-cell-type-evolution",
          "tandem-repeats",
          "brain-eqtl-grn"
        ],
        "tldr": "인간·마우스 선조체 109+22개 샘플의 단핵 RNA-seq 아틀라스를 구축하고, 신경세포 아집단·전사 구배를 정의하며 GWAS 및 헌팅턴병 체세포 반복 확장과 통합 분석함.",
        "question": "선조체의 세포 유형별·하위 영역별 전사체 특성이 신경퇴행·신경정신질환 취약성을 어떻게 결정하는가?",
        "key_result": "인간 특이적 오피오이드 수용체 발현 부위 및 복측 편향 항정신병약물 작용 확인; 헌팅턴병에서 하위 영역 및 신경세포 아형별 체세포 반복 확장 취약성 차이 발견; 종간 전사 구배의 주목할 만한 차이 규명.",
        "why_for_us": "GWAS와 단일세포 전사체 통합(variant-to-cell-type), 선조체 세포 유형별 질환 취약성 분석은 랩의 neuro 도메인(PD, MDD 등) 및 single-cell eQTL/QTL 관심사와 직접 연결됨. 종간 아틀라스 비교 및 GWAS 통합 방법론 참고 가능.",
        "limitations": "인간-마우스 종간 비교에서 샘플 수 불균형; 체세포 반복 확장 측정의 기술적 노이즈 가능성; 공간 정보 없이 단핵 데이터만 사용.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Dissecting the shared genetic architecture and biological mechanisms linking sleep traits and suicide attempts: from variants to genes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42675179/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42675179/",
        "doi": "https://doi.org/10.1038/s41380-026-03858-z",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Lu Y",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "11개 수면 특성과 자살 시도 GWAS 요약 통계에 LDSC·GPA로 유전 상관 및 다각형 중첩 평가",
          "PLACO로 다면발현 변이 동정 후 FUMA 기능 주석, Bayesian colocalization 및 SuSiE fine-mapping 적용",
          "MAGMA 유전자 수준 분석과 혈액·뇌 cis-eQTL 통합 SMR로 유전자 우선순위 결정",
          "양방향 MR로 수면 특성→자살 시도 인과 관계 탐색"
        ],
        "concepts": [
          "gwas-association-testing",
          "fine-mapping",
          "colocalization",
          "mendelian-randomization",
          "molecular-qtl",
          "genetic-correlation",
          "partitioned-heritability",
          "credible-set",
          "summary-statistics-methods"
        ],
        "tldr": "GWAS 요약 통계를 이용한 전장유전체 다면발현 분석으로 수면 특성 11개와 자살 시도 사이의 공유 유전 구조를 규명하고, 32개의 다면발현 유전자 및 13개의 약물 표적 후보를 도출했다.",
        "question": "수면 특성과 자살 시도는 공통 유전 변이를 공유하는가, 그리고 그 생물학적 메커니즘과 약물 표적은 무엇인가?",
        "key_result": "6개 수면 특성이 자살 시도와 유의미한 유전 상관을 보였고, 50개 위험 유전좌위에서 2,224개(고유 1,640개) 다면발현 변이 확인; 15개 좌위에서 colocalization 지지; 32개 다면발현 유전자 중 13개(40.63%)가 약물 가능(druggable)이며 5개는 기승인 약물 보유; 아침형 일주기 리듬이 자살 시도 위험 감소와 인과적 연관.",
        "why_for_us": "GWAS 요약 통계 기반 다면발현 분석·fine-mapping·colocalization·MR 파이프라인이 랩 핵심 방법론과 일치; 신경정신 질환(MDD 자살) 도메인에서의 활용 사례로 직접 참고 가능.",
        "limitations": "요약 통계 기반 분석으로 개인 수준 데이터 없음; 기능 검증 부재; 수면 특성 자가보고 측정의 이종성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genetic overlap and shared risk loci between autism spectrum disorder and cardiometabolic traits.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42009985/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42009985/",
        "doi": "https://doi.org/10.1038/s41380-026-03563-x",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Muntané G",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "대규모 GWAS 요약통계를 활용한 MiXeR(이변량 인과혼합모형)으로 다유전자 중첩 정량화",
          "pleioFDR 방법으로 ASD와 심대사 형질 공유 loci 100개 발굴",
          "공유 loci를 124개 유전자에 매핑 및 효과 방향 분석"
        ],
        "concepts": [
          "genetic-architecture",
          "genetic-correlation",
          "gwas-association-testing",
          "summary-statistics-methods",
          "fine-mapping",
          "partitioned-heritability"
        ],
        "tldr": "ASD와 심대사 형질 간 유전적 중첩을 MiXeR·pleioFDR로 분석, 전체 유전상관은 미미하나 공유 성분 내에서는 유의한 양·음의 상관과 100개 공유 loci를 발굴.",
        "question": "ASD와 비만·당뇨·혈압 등 심대사 형질 사이에 공유 유전 구조가 존재하는가?",
        "key_result": "ASD-BMI 공유 성분 내 rg=0.03, ASD-T2D rg=0.23, ASD-총콜레스테롤 rg=0.78(양의 상관). ASD-이완기·수축기혈압 rg=-0.22, ASD-관상동맥질환 rg=-0.90(음의 상관). 공유 loci는 대사 형질과 일치 효과, 심혈관 형질과 불일치 효과 경향.",
        "why_for_us": "GWAS 요약통계 기반 유전 구조 분석(MiXeR, pleioFDR), genetic correlation, fine-mapping/공유 loci 발굴은 랩의 핵심 방법론과 직결. ASD 및 신경 도메인 관심사와도 부합.",
        "limitations": "GWAS 요약통계 기반 간접 추론이므로 인과관계 확립 불가. 공유 loci의 기능적 검증 미비.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-cell transcriptomics of human brain disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42009984/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42009984/",
        "doi": "https://doi.org/10.1038/s41380-026-03573-9",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Arbabi K",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "신경·정신 질환에 걸친 사후 뇌 단일세포 연구 종합 리뷰",
          "CNS 주요 세포 유형별로 질환 연관 발현 변화 및 취약 집단 정리",
          "GWAS 유전 위험과 세포 유형별 변화의 연결고리 논의"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "single-cell-eqtl",
          "variant-to-cell-type",
          "microglia-neuroimmune"
        ],
        "tldr": "사후 뇌 조직 단일세포 유전체 연구들을 뇌 세포 유형별로 종합, 신경·정신 질환별 취약 세포 집단 소실, 질환 연관 세포 상태 출현, 유전 위험과의 연관을 체계적으로 정리한 리뷰.",
        "question": "단일세포 전사체학이 인간 뇌 질환의 세포 병리를 어떻게 규명하고 있는가?",
        "key_result": "다양한 신경·정신 질환에서 취약 세포 집단 소실과 질환 연관 전사 상태(disease-associated states) 출현 패턴 확인. 유전 위험인자가 특정 세포 유형에서 발현 프로그램 조절과 연관됨을 복수 연구가 지지.",
        "why_for_us": "랩의 단일세포 RNA-seq, brain eQTL/GRN, brain cell atlas, 신경 도메인(MDD·ASD·AD·PD·SCZ) 관심사 전반에 걸친 리뷰로 배경 지식 흡수에 유용.",
        "limitations": "리뷰 논문이므로 새로운 데이터 없음. 사후 뇌 조직 기반 연구의 공통 한계(인과관계, 생전 상태 반영 불확실성) 존재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Ethanolamine as a potential biomarker and therapeutic target for depressive disorder.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41986746/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41986746/",
        "doi": "https://doi.org/10.1038/s41380-026-03559-7",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Ogawa S",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "3개 독립 인간 코호트(Set A n=380, Set B n=13, Set C n=66) CSF EA 측정 및 임상지표 연관 분석",
          "LPS 투여 쥐 모델로 CSF EA 저하·우울 행동 재현",
          "EA 경구 투여 4주 쥐 항우울 효과 검증",
          "프로테오믹스·생물정보학으로 CSF EA 연관 단백질 40개 및 axon guidance 경로 발굴"
        ],
        "concepts": [
          "mass-spectrometry-proteomics",
          "proteomics-quantification"
        ],
        "tldr": "MDD 환자 CSF에서 에탄올아민(EA)이 일관되게 감소하며 우울 중증도와 역상관, 전기경련치료 후 증가. 쥐 모델에서 EA 투여 시 항우울 효과 확인. 프로테오믹스로 CSF EA 연관 단백질 40개 발굴.",
        "question": "CSF 에탄올아민이 MDD의 바이오마커 및 치료 표적이 될 수 있는가?",
        "key_result": "Set A: MDD CSF EA 감소(P=0.00047, Cohen's d=-0.59), 우울 중증도 역상관(ρ=-0.29). 중등도-중증: d=-1.27~-1.14. Set B: ECT 후 EA 증가(P=0.0071, d=0.90). Set C 독립 재현(P=0.0037, d=-0.91). 상위 연관 단백질 CHL1(partial r=0.42, P=1.5E-9), axon guidance pathway 최대 농축(P=3.4E-20).",
        "why_for_us": "MDD 도메인, CSF 프로테오믹스, 바이오마커 발굴, 동물모델-인간 전환 연구는 랩의 MDD·프로테오믹스 관심과 부합.",
        "limitations": "관찰 연구 중심으로 인과관계 미확립. Set B는 n=13으로 소규모. 동물모델에서 인간으로의 직접 전환 불확실.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Role of complement and complement-targeted therapeutics in neurological diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42693185/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42693185/",
        "doi": "https://doi.org/10.1038/s41582-026-01261-4",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Dalakas MC",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "보체 고전·렉틴·대체 경로와 말단 경로의 신경계 기능 및 병태생리 문헌 정리",
          "MG, NMOSD 등 항체 관련 질환에서 승인된 보체 억제제 임상 데이터 요약",
          "MS, AD, ALS 등에서 진행 중인 보체 표적 임상시험(phase I-III) 파이프라인 정리"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "drug-target-genetics"
        ],
        "tldr": "보체 시스템의 생물학적 기전을 신경계 자가면역 및 퇴행성 질환(MG, NMOSD, MS, ALS, AD 등)과 연결 지어 정리하고, 보체 표적 치료제(승인·임상 3상)의 효능·위험을 종합한 리뷰.",
        "question": "보체 경로의 이상 조절이 신경계 자가면역 및 퇴행성 질환에서 어떤 역할을 하며, 이를 표적으로 한 치료가 효과적인가?",
        "key_result": "항체-보체 경로 관련 질환(MG, NMOSD)에서 보체 억제제의 임상 이익이 확립되었으며, 신경퇴행성 질환에서도 보체 역할에 대한 근거가 축적 중이나 치료 효과는 아직 검증 단계.",
        "why_for_us": "랩의 complement(HLA·CKD 내 보체) 및 autoimmune·neuro 도메인 관심사와 맞닿아 있으며, C4/보체 관련 프로젝트(05_random_ideas/C4)에 배경 문헌으로 유용.",
        "limitations": "리뷰 논문으로 개별 연구 간 이질성 정량화 없음; 신경퇴행성 질환에서 보체 표적 치료의 효과는 아직 임상적으로 미확립.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Maternal immune activation disrupts epigenomic and functional maturation of cortical excitatory neurons.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42686997/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42686997/",
        "doi": "https://doi.org/10.1038/s41380-026-03856-1",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Lai CY",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "Poly(I:C) 모성면역활성화(PIC-MIA) 마우스 모델을 이용해 출생 전후(태아~성체) 전두피질 흥분성 뉴런의 전사체 변화를 시계열로 분석",
          "흥분성 뉴런 특이적 DNA 메틸화 동태를 출생 시부터 성체까지 추적하여 수천 개의 차등 메틸화 영역(DMR) 규명",
          "DMR 내 전사인자 결합 모티프 분석을 통해 Tbr1 모티프 과다 표현 확인",
          "심층 피질 뉴런의 전기생리학적 특성을 기록하여 발화 특성 장애 확인"
        ],
        "concepts": [
          "maternal-immune-activation",
          "neurodevelopmental-trajectory",
          "noncoding-regulatory-variants"
        ],
        "tldr": "태생 중기 모성면역활성화(MIA)가 피질 흥분성 뉴런의 DNA 메틸화 프로그램과 전사체 성숙을 교란하며, 특히 심층 피질 뉴런에서 Tbr1의 조절 기능을 후성유전학적으로 차단함을 보였다.",
        "question": "모성 염증이 태아 피질 발달 과정에서 흥분성 뉴런의 후성유전체 성숙에 어떤 영향을 미치며, 그 분자적 메커니즘은 무엇인가?",
        "key_result": "PIC-MIA는 출생 시점에서 가장 큰 전사체 변화를 유발하며, 심층 피질 뉴런 특이 영역에서 과메틸화를 통해 Tbr1의 전사 표적 유전자를 억제(Tbr1 자체는 상향 조절됨). 전기생리 기록에서도 심층 뉴런의 발화 활성이 지속적으로 감소.",
        "why_for_us": "신경발달 장애(ASD, SCZ) 관련 후성유전체·단일세포 분석 관심에 부합하며, MIA로 인한 세포 유형 특이적 메틸화 변화는 우리 랩의 methylation/scMethyl 분석 맥락과 연결됨.",
        "limitations": "마우스 모델에 국한되어 인간 데이터 직접 검증 없음; 벌크 수준 분석으로 세포 유형 수준 해상도에 한계 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Intracellular complement factor H protects neurons during CNS inflammation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42686909/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42686909/",
        "doi": "https://doi.org/10.1038/s41586-026-10981-y",
        "journal": "Nature",
        "year": "2026",
        "author": "Mayer C",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "MS 환자 및 대조군 망막신경절세포의 단핵 RNA-seq 분석으로 퇴행 저항성과 상관된 유전자로 CFH 동정",
          "CFH의 세포 내 소포체 국재화 및 지질과산화 억제 메커니즘 확인",
          "CFH의 C-말단 SCR20 도메인 의존성 및 분비 독립성 검증",
          "마우스·인간 CNS 모델에서 CFH 유도와 신경보호 기능 확인"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "variant-to-cell-type"
        ],
        "tldr": "다발성경화증(MS) 망막신경절세포(RGC) 단핵 RNA-seq 분석을 통해 보체인자 H(CFH)가 세포 내에서 산화 스트레스와 지질과산화를 억제하여 신경세포를 보호하는 비정규 기능을 한다는 것을 규명했다.",
        "question": "MS 환경에서 신경세포의 퇴행에 대한 내인성 저항성에 기여하는 세포 자율적 메커니즘은 무엇인가?",
        "key_result": "CFH 발현이 RGC 퇴행 저항성과 강한 상관관계. CFH는 소포체에서 ROS 및 지질과산화를 억제하여 페롭토시스를 억제. 이 보호 기능은 C3 부재 시에도 유지되어 보체계와 독립적.",
        "why_for_us": "우리 랩의 보체/CFH/신장-신경계 관심 주제에 직접 연결됨. 단일세포 RNA-seq으로 세포 유형 특이 CFH 기능을 발굴한 방법론도 참고 가능.",
        "limitations": "망막신경절세포 특이 분석으로 다른 CNS 뉴런으로의 일반화 검증 필요; 인간 MS 뇌 조직 직접 데이터 한정적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Pathogenic tau in the mouse locus coeruleus produces noradrenergic hyperactivity and neuropsychiatric phenotypes reminiscent of early Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42680853/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42680853/",
        "doi": "https://doi.org/10.1038/s41380-026-03852-5",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Korukonda A",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "AAV를 이용해 마우스 LC 뉴런에 인간 P364S mutant tau를 발현시키는 'LC-first' 모델 개발",
          "행동 표현형(불안·강박·수면 방추) 평가 및 전기생리학적 LC 발화율 측정",
          "벌크 전사체 분석으로 Hcn2 상향·Clic6 하향 발견",
          "세포유형 특이적 프로테오믹스로 LC 특이적 tau 병리에서 시냅스·대사 변화 프로파일링"
        ],
        "concepts": [
          "mass-spectrometry-proteomics",
          "proteomics-quantification"
        ],
        "tldr": "LC 뉴런에 병원성 tau(P364S)를 세포유형 특이적으로 발현시킨 마우스 모델에서 초기 AD 유사 신경정신 표현형(불안·강박·수면 방추 감소)과 LC 과흥분성 기전을 규명하고, 세포유형 특이적 프로테오믹스로 시냅스·대사 변화를 확인함.",
        "question": "LC 뉴런에 pTau가 축적되면 어떤 분자·회로 기전으로 AD 전구기 신경정신 증상이 유발되는가?",
        "key_result": "pTau 발현 3개월 후 불안·강박 행동 및 수면 방추 감소 관찰; LC 뉴런의 자발·유발 발화 유의하게 증가; Hcn2 상향/Clic6 하향으로 흥분성 변화 시사; 6·9개월 시점에는 불안 표현형 소실(pTau 지속에도)",
        "why_for_us": "세포유형 특이적 프로테오믹스 방법론이 관련 있으며, AD 신경정신 증상의 분자 기전(tau→LC→NE 회로) 이해는 neuro 도메인 연구에 활용 가능",
        "limitations": "단일 tau 변이(P364S) 바이러스 모델로 인간 AD의 점진적 tau 전파를 완전히 재현하지 못함; 세포유형 특이적 프로테오믹스 방법 상세 검증 미흡",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial mapping of RNA turnover kinetics in the mouse brain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42675226/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42675226/",
        "doi": "https://doi.org/10.1038/s41593-026-02420-y",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Qiu Q",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "전이유전자 없이 대사 RNA 표지(metabolic labeling)와 공간 전사체 플랫폼상의 in situ 화학적 재코딩을 결합한 spatial NT-seq 개발",
          "마우스 뇌 전체에 적용해 뇌 영역별 RNA 턴오버 이종성 지도 작성",
          "전기경련 자극(electroconvulsive stimulation) 전후의 전사·전사 후 반응을 공간적으로 추적",
          "계산 모델링으로 공간·세포 맥락에 따른 mRNA 안정성 결정 서열 특징 및 조절인자 동정"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "brain-cell-atlas"
        ],
        "tldr": "공간 전사체 플랫폼에서 대사 RNA 표지와 in situ 화학적 재코딩을 결합해 마우스 뇌 조직의 RNA 합성·분해 속도를 공간적으로 동시 측정하는 spatial NT-seq을 개발했다.",
        "question": "온전한 조직에서 RNA 합성과 분해의 속도를 공간적 해상도로 동시에 측정할 수 있는가?",
        "key_result": "치상이랑(dentate gyrus)이 기저 RNA 합성·분해 모두 협조적으로 상향 조절된 공간적 핫스팟으로 확인되었고, 전기경련 자극에 대한 뇌 영역 특이적 전사 및 전사 후 반응이 신속하게 관찰됨.",
        "why_for_us": "공간 전사체 방법론의 확장(RNA 역학 측정)으로, 랩의 단일세포·공간 전사체 분석 파이프라인에 RNA 턴오버 레이어를 추가하는 데 참고할 수 있음. 뇌 영역 특이적 전사 조절 연구에도 연결됨.",
        "limitations": "마우스 뇌에만 적용되어 인간 조직으로의 직접 전환 가능성 미검증; 대사 표지 효율과 공간 플랫폼 해상도의 상호 제약이 언급되나 정량적 한계 수치는 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Maternal fasting during early gestation induces epigenetic alterations and schizophrenia-related phenotypes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42120553/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42120553/",
        "doi": "https://doi.org/10.1038/s41380-026-03629-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Wang H",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "임신 마우스를 착상 전후(peri-implantation) 시기에 한정하여 단식 처치하는 새로운 DOHaD 기반 조현병 동물모델을 구축",
          "수컷 자손에서 감각운동 게이팅(PPI), 행동 이상, 전전두피질 수상돌기 가시 밀도를 측정",
          "벌크 RNA-seq, Visium HD 공간 전사체(spatial transcriptomics), DNA 메틸레이션 어레이를 통합한 멀티오믹스 분석 수행"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "molecular-qtl",
          "sex-differences-psychiatric",
          "neurodevelopmental-trajectory"
        ],
        "tldr": "임신 초기 일시적 모체 단식이 자손 마우스에서 조현병 유사 표현형을 유발하며, 이를 벌크 RNA-seq·공간 전사체·DNA 메틸레이션 멀티오믹스로 분자 기전을 규명한 DOHaD 동물모델 연구.",
        "question": "임신 착상기 일시적 영양 결핍이 후대에서 조현병 위험을 높이는 후성유전·전사 기전은 무엇인가?",
        "key_result": "단식 자손에서 시냅스 조직화, 단백질 항상성, 산화 스트레스 경로의 수렴적 전사·메틸레이션 변화가 확인되었고, 전전두피질 수상돌기 가시 밀도 감소와 감각운동 게이팅 장애가 관찰됨.",
        "why_for_us": "공간 전사체(Visium HD), DNA 메틸레이션 어레이, 벌크 RNA-seq 멀티오믹스 통합 파이프라인이 랩의 single-cell/epigenomics/멀티오믹스 관심과 직결되며, 조현병·신경발달 장애 후성유전 기전 연구에 참고 가능.",
        "limitations": "동물모델(마우스)이므로 인간 조현병으로의 직접 전환성 미검증; 수컷 자손만 분석하여 성별 차이 불명확; 단식이라는 단일 환경 자극만 사용.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multiomics analysis identifies VPA-induced changes in neural progenitor cells, ventricular-like regions, and cellular microenvironment in dorsal forebrain organoids.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42032298/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42032298/",
        "doi": "https://doi.org/10.1038/s41380-026-03585-5",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Yentür Z",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 배측 전뇌 오가노이드에 30일간 VPA 처리",
          "조직·세포 수준 형태 분석(ventricular-like region 구조 이상 평가)",
          "벌크 전사체 분석으로 ECM 유전자 발현 변화 확인",
          "단일세포 RNA-seq으로 세포 유형별 mechanosensing 및 Hippo-YAP/TAZ 경로 관련 유전자 변화 동정",
          "단백체 분석으로 ECM 단백질 분비 이상 검증"
        ],
        "concepts": [
          "neurodevelopmental-trajectory",
          "maternal-immune-activation",
          "proteomics-quantification",
          "mass-spectrometry-proteomics"
        ],
        "tldr": "항뇌전증제 발프로산(VPA)에 노출된 인간 배측 전뇌 오가노이드에 대해 벌크 전사체·단일세포 RNA-seq·단백체 멀티오믹스를 적용하여, VPA가 세포외기질(ECM) 및 세포 미세환경 감지 경로를 교란함을 규명.",
        "question": "VPA 산전 노출이 인간 전뇌 발달에서 어떤 분자·세포 수준 변화를 일으키며, 자폐 등 신경발달장애 위험과 어떻게 연결되는가?",
        "key_result": "VPA는 ventricular-like region 구조를 파괴하고, ECM 유전자 발현 및 단백질 분비를 광범위하게 변화시키며, 단일세포 수준에서 mechanosensing·Hippo-YAP/TAZ 경로가 주요 교란 대상임을 확인. 멀티오믹스가 서로 수렴하는 결과를 제시.",
        "why_for_us": "단일세포 RNA-seq + 단백체 멀티오믹스 통합 분석 방법론, ASD 신경발달 병리 관심과 연결. 오가노이드 기반 멀티오믹스 통합 파이프라인 구축 참고 사례.",
        "limitations": "오가노이드 모델의 생체 대표성 한계; VPA 단일 농도·기간 조건; 인과 경로에 대한 기능 검증(CRISPR 등) 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "IL-15 receptor alpha deficiency triggers depressive-like behaviors via enhanced microglial synapse pruning.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42020719/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42020719/",
        "doi": "https://doi.org/10.1038/s41380-026-03593-5",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Tang Y",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "Il15ra 녹아웃 마우스 전전두피질에서 단핵 RNA 시퀀싱(snRNA-seq) 수행",
          "미세아교세포 활성화 상태 및 시냅스 가지치기 관련 마커 분석",
          "행동 표현형(우울 유사 행동) 평가와 분자 변화 연결"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "single-cell-eqtl",
          "glutamate-synapse-depression"
        ],
        "tldr": "IL-15Rα 결핍 마우스에서 미세아교세포의 시냅스 가지치기가 과활성화되어 우울 유사 행동이 유발됨을 snRNA-seq으로 규명.",
        "question": "IL-15Rα 결핍이 전전두피질의 세포 유형별 전사체 변화와 미세아교세포 기능에 어떤 영향을 미쳐 MDD 유사 표현형을 유도하는가?",
        "key_result": "Il15ra KO 마우스에서 미세아교세포의 시냅스 가지치기가 증가하고 우울 유사 행동이 나타남; 전전두피질 전사체에서 신경염증 경로 활성화 확인.",
        "why_for_us": "MDD 병인론, snRNA-seq을 통한 세포 유형별 분석, 미세아교세포-신경면역 축 관련 연구로 랩의 neuro 및 단일세포 오믹스 관심사와 부합.",
        "limitations": "마우스 모델 기반으로 인간 MDD로의 직접 전환 제한; 초록이 불완전하여 세부 결과 파악 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multimodal microglial and kynurenine pathway alterations across the affective-psychosis spectrum: a systematic review of patterns, heterogeneity, and dimensional implications.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42014469/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42014469/",
        "doi": "https://doi.org/10.1038/s41380-026-03614-3",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Nussbaumer M",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 TSPO-PET, CSF 키누레닌 대사체, 사후 미세아교세포 및 KP 연구의 체계적 문헌 검토",
          "MDD vs. SCZ 정량적 합성; BD는 데이터 부족으로 서술적 통합",
          "전두변연 회로, 해마, 전대상피질 등 뇌 영역별 신호 이질성 분석"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "glutamate-synapse-depression"
        ],
        "tldr": "MDD·BD·SCZ에 걸쳐 미세아교세포 활성화와 키누레닌 경로(KP) 변화를 TSPO-PET, CSF 대사체, 사후 뇌 연구를 체계적으로 종합한 리뷰.",
        "question": "주요 정신질환(MDD, BD, SCZ)에서 미세아교세포 관련 변화와 키누레닌 경로 불균형의 패턴은 진단 범주별로 일관성이 있는가, 아니면 생물학적 아형과 증상 차원으로 더 잘 설명되는가?",
        "key_result": "MDD는 전두변연 영역에서 TSPO 결합 증가가 가장 재현 가능하고 이질성이 낮음; SCZ는 TSPO-PET 이질성 높고 사후 연구에서 활성화 마커 증가 또는 항상성 서명 소실; SCZ에서 KYNA 분지 편향(CSF·피질 KYNA 증가)이 일관된 생화학적 신호; 아형·증상 차원이 진단 범주보다 더 나은 설명 단위임을 제안.",
        "why_for_us": "MDD, SCZ 등 neuro 질환의 면역-신경 축 병인론 이해에 유용; 미세아교세포 표현형과 대사체(키누레닌 경로)의 관계는 랩의 멀티오믹스 통합 및 neuro 도메인 관심사와 연관.",
        "limitations": "TSPO-PET의 세포 특이성 낮음; 소표본 코호트; 사후 연구가 일부 피질/변연계 영역에 한정됨; 기술의 이질성으로 정량 합성 제한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Ceruloplasmin deficiency drives a fusiform-centric lipid-myelin pathology underlying a visual subtype in autism.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41998191/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41998191/",
        "doi": "https://doi.org/10.1038/s41380-026-03613-4",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Deng YY",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "288명(ASD-AVP 90명, ASD-nAVP 89명, TD 109명) 멀티모달 MRI(지질·마이엘린 정량)와 혈청 철·납·세룰로플라스민 분석",
          "74개 뇌 영역의 지질 및 마이엘린 함량 정량화",
          "세룰로플라스민-FG 마이엘린 경로 매개분석 수행",
          "BTBR 마우스 모델로 표현형 재현 검증"
        ],
        "concepts": [
          "neurodevelopmental-trajectory"
        ],
        "tldr": "ASD 시각 처리 이상(AVP) 아형에서 세룰로플라스민 결핍이 방추형이랑(fusiform gyrus) 중심 지질-마이엘린 공동 병리를 일으킴을 멀티모달 MRI·혈청 프로테오믹스·마우스 모델로 규명.",
        "question": "ASD 시각 처리 이상 아형의 신경생물학적 기반은 무엇이며 세룰로플라스민이 관여하는가?",
        "key_result": "ASD-AVP에서 방추형이랑 지질-마이엘린 동시 증가(좌 r=0.47, 우 r=0.41). 세룰로플라스민 결핍이 지질 경로를 통해 FG 마이엘린화에 35~55% 영향. ASD-AVP vs TD 구별 AUC=0.93, vs ASD-nAVP AUC=0.87.",
        "why_for_us": "ASD 생물학적 아형 분류와 멀티모달 바이오마커 발굴은 랩의 ASD 도메인 및 멀티오믹스 통합 관심과 관련. 프로테오믹스 분석 포함.",
        "limitations": "횡단면 설계 위주, 소규모 종단 추적, 인과 기전 실험적 검증 제한적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Characterization of the chromosome 7 locus associated with suicidal behavior.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41942773/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41942773/",
        "doi": "https://doi.org/10.1038/s41380-026-03600-9",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Fiori LM",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "SNP rs62474683 주변 1.8Mbp 영역 내 유전자 발현을 우울증-자살 사망자 두 뇌 영역에서 측정",
          "유전형-발현 상관(eQTL-like 분석)을 수행하여 rs62474683과 FOXP2 발현 연관 탐색",
          "단일세포 수준에서 해당 변이의 유전자 발현 및 크로마틴 접근성(caQTL) 효과 분석",
          "Homeobox 전사인자를 rs62474683–FOXP2 축의 잠재적 매개자로 규명"
        ],
        "concepts": [
          "molecular-qtl",
          "single-cell-eqtl",
          "noncoding-regulatory-variants",
          "variant-to-cell-type",
          "fine-mapping",
          "gwas-association-testing"
        ],
        "tldr": "자살 시도와 가장 강하게 연관된 GWAS 신호(chr7 rs62474683)의 기능적 효과를 뇌 조직·단일세포 수준에서 규명하고, FOXP2 발현이 자살·우울증 뇌에서 유전형 의존적으로 변화함을 보고.",
        "question": "자살 행동 GWAS의 최상위 intergenic SNP rs62474683이 어떤 유전자 발현 및 크로마틴 접근성 변화를 통해 자살 취약성과 연결되는가?",
        "key_result": "FOXP2가 자살 사망 뇌에서 가장 일관되게 차등 발현되며, 발현 변화가 rs62474683 유전형과 연관됨. 이 연관은 뇌 영역·세포 유형 특이적이고, 크로마틴 접근성 변화도 동반됨.",
        "why_for_us": "GWAS fine-mapping, eQTL/caQTL, 단일세포 수준 variant-to-cell-type 분석이 핵심 방법론으로 사용됨. 우리 랩의 noncoding regulatory variants → 세포유형 특이 QTL 연구와 직결.",
        "limitations": "샘플 수가 제한적이며, 인과성(SNP → FOXP2 → 자살)을 완전히 입증하지 못함. 자살 vs 우울증 효과를 명확히 분리하기 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Interleukin-33 and its receptor: multifaceted roles and emerging therapeutic potential.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42686822/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42686822/",
        "doi": "https://doi.org/10.1038/s41577-026-01345-8",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "Serve S",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "IL-33의 alarmin·사이토카인으로서의 생물학적 특성과 ST2 수용체 신호전달 기전을 체계적으로 정리",
          "세포유형 및 조직 맥락에 따른 IL-33 감수성의 차등 조절 기전 기술",
          "바이러스 감염, 암, 이식편대숙주병(GvHD), 대장염, 자가면역, COPD, 천식/알레르기 등 다양한 질환에서의 IL-33 역할 기술",
          "지방조직 생물학·조직 재생 등 생리적 맥락에서의 IL-33 기능 포함"
        ],
        "concepts": [
          "molecular-qtl",
          "single-cell-eqtl",
          "noncoding-regulatory-variants"
        ],
        "tldr": "IL-33과 그 수용체 ST2의 생물학, 세포유형별 감수성 조절, 그리고 다양한 질환에서의 역할 및 치료 표적으로서의 잠재력을 종합 정리한 리뷰.",
        "question": "IL-33/ST2 축은 어떤 면역세포·조직에서 어떻게 다르게 작동하며, 자가면역·암·감염 등 질환에서 치료 표적이 될 수 있는가?",
        "key_result": "IL-33/ST2 신호는 다양한 면역세포(ILC2, Treg, 비만세포, 대식세포 등)에 광범위하게 작용하며, 질환 맥락에 따라 병인 촉진 또는 보호 기능을 모두 가짐. 치료 표적으로서 항IL-33 및 항ST2 항체 임상 개발 진행 중.",
        "why_for_us": "자가면역(RA·SLE) 및 암 면역 연구에서 IL-33/ST2 축이 유전적 연관성(GWAS loci) 및 세포유형별 eQTL 분석 대상이 될 수 있고, 신장·신경 질환과의 연결 고리도 있어 멀티오믹스 통합 시 참고 자료로 활용 가능.",
        "limitations": "리뷰 논문으로 자체 실험 데이터 없음; 인과관계보다 상관관계 중심 기술이 다수.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "The long-lived immune system of centenarians.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42026253/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42026253/",
        "doi": "https://doi.org/10.1038/s41577-026-01291-5",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "Plaza-Florido A",
        "rating": 3,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "centenarian·semi-supercentenarian·supercentenarian의 선천 및 적응 면역 구획에 걸쳐 면역 노화 지표를 문헌 검토",
          "NLRP3 인플라마솜 활성, 자가포식(autophagy), SASP 조절 등 염증노화 억제 기전 정리",
          "전사체, 후성유전체, 장내 미생물 오믹스 데이터를 통합하여 장수 관련 분자 서명 분석"
        ],
        "concepts": [
          "aging-genetics",
          "differential-abundance",
          "alpha-diversity"
        ],
        "tldr": "100세 이상 장수인(centenarian)의 면역계가 어떻게 정상 노화와 다르게 유지되는지를 오믹스 증거와 함께 정리한 리뷰.",
        "question": "장수인은 어떤 면역학적·분자생물학적 메커니즘을 통해 면역노화(immunosenescence)와 염증노화(inflammageing)를 억제하고 기능적 독립성을 유지하는가?",
        "key_result": "장수인의 면역세포에서 청년 유사 유전자 발현 패턴 확인; 장내 미생물군 구성의 유익한 변화; NLRP3 인플라마솜 활성 감소 및 자가포식 증가가 염증노화 억제와 연관됨.",
        "why_for_us": "aging 및 inflammaging 도메인, 멀티오믹스(전사체·후성유전체·메타게노믹스) 통합 접근이 랩 관심사와 직접 겹침. aging-genetics, 면역 조절 관련 개념 연결 가능.",
        "limitations": "관찰적 리뷰이므로 인과관계 불명확; 코호트 간 이질성 및 장수인 모집의 어려움으로 재현성 제한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-nucleus profiling reveals hepatocyte identity and immune features associated with corticosteroid response in severe alcohol-related hepatitis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42019631/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42019631/",
        "doi": "https://doi.org/10.1016/j.jhep.2026.04.002",
        "journal": "Journal of hepatology",
        "year": "2026",
        "author": "Van Melkebeke L",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "sAH 환자(n=17), 알코올성 간경변 급성 악화(n=5), 건강 대조군(n=4) 간 생검에 snRNA-seq 수행",
          "8명 환자에서 치료 전후(기저 vs. 8일차) 페어드 생검 비교",
          "172명 다기관 코호트에서 면역조직화학 및 공간 프로테오믹스로 결과 검증"
        ],
        "concepts": [
          "cell-type-deconvolution",
          "spatial-transcriptomics",
          "differential-abundance"
        ],
        "tldr": "중증 알코올성 간염 환자의 간 생검에서 snRNA-seq과 공간 프로테오믹스를 통해 코르티코스테로이드 반응과 연관된 세포 변화(S100A8+ 단핵구, SULT2A1 양성 간세포)를 규명.",
        "question": "중증 알코올성 간염에서 코르티코스테로이드 치료 반응 여부를 사전에 예측할 수 있는 세포 유형별 전사체·단백체 마커가 존재하는가?",
        "key_result": "코르티코스테로이드 반응군(sAH-R)이 기저 시점에 S100A8+ 단핵구 비율이 유의하게 높음; 비반응군(sAH-NR)은 성숙 간세포(SULT2A1+) 비율이 낮고 재생 능력 저하; 기저 SULT2A1+ 간세포 ≥50%가 치료 반응의 강력한 예측 인자.",
        "why_for_us": "snRNA-seq 분석 방법론, 세포 유형 구성 변화, 공간 프로테오믹스 적용 사례로 단일세포 및 멀티오믹스 분석 파이프라인 참고 가능.",
        "limitations": "비교적 소규모 발견 코호트(n=17); 알코올성 간질환이라는 특수 맥락으로 다른 간질환에의 일반화 제한.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-08-30",
    "count": 21,
    "papers": [
      {
        "title": "Bridging precision agriculture and human medicine through comparative genetics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42665668/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42665668/",
        "doi": "https://doi.org/10.1038/s41576-026-01000-x",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Liu X",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "최신 게놈 어셈블리 개선과 집단 규모 멀티오믹스가 다종에서 고해상도 유전·기능 변이 지도를 제공한 경과를 리뷰",
          "농업 동물(소·돼지·닭 등)의 풍부한 유전 다양성과 전 생애·범조직 기능 주석 가능성을 인간 연구와 비교",
          "인간·동물 오믹스 데이터를 양방향으로 연계하는 통합 비교 프레임워크를 제안"
        ],
        "concepts": [
          "genetic-architecture",
          "molecular-qtl",
          "fine-mapping",
          "noncoding-regulatory-variants",
          "cross-species-cell-type-evolution",
          "partitioned-heritability"
        ],
        "tldr": "농업 동물과 인간의 비교유전체학·멀티오믹스를 통합하는 프레임워크를 제안하여, 복잡형질의 유전·분자 기반 해명과 정밀농업·바이오메디신 동반 발전을 추구하는 리뷰.",
        "question": "농업 동물의 유전적 다양성과 전 생애·전 조직 기능 주석 데이터를 인간 오믹스와 어떻게 통합하면 통계적 연관에서 인과 메커니즘으로 도약할 수 있는가?",
        "key_result": "농업 동물은 인간보다 체계적인 전 생애·다조직 기능 주석이 가능하며, 인간과 생리적 유사성 및 공유 선택 환경을 고려하면 GWAS 신호의 인과 해석과 정밀의학 발전에 직접 기여할 수 있음을 논증.",
        "why_for_us": "멀티오믹스 통합·QTL·fine-mapping 연구에서 다종 비교 기능 주석을 참조 전략으로 활용할 수 있으며, cross-species 기능 데이터로 noncoding 변이 해석 및 유전 구조 이해를 강화할 수 있음.",
        "limitations": "리뷰 논문으로 실증 데이터 없음; 종 간 표현형·환경 차이를 통제하는 구체적 방법론은 다뤄지지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Prediction of human missense variant effects from functional evidence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649388/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649388/",
        "doi": "https://doi.org/10.1038/s41588-026-02727-3",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Kayaalp B",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "다양한 기능적 assay 데이터를 학습에 활용한 미센스 변이 효과 예측 모델 군(FuncVEP) 개발",
          "48개 기존 예측 도구와 기능적·임상적 벤치마크에서 성능 비교",
          "UK Biobank 및 Mount Sinai Million Health Discoveries Program에서 선천성 면역결핍 관련 유전자 발굴에 FuncVEP 적용"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "rare-variant-collapsing",
          "fine-mapping",
          "saturation-genome-editing"
        ],
        "tldr": "다양한 기능적 실험 데이터로 학습한 미센스 변이 효과 예측 모델 FuncVEP을 개발하여 기존 48개 예측 도구를 능가하고 UK Biobank에서 새로운 유전자-표현형 연관성 210개를 발굴했다.",
        "question": "임상 결과나 집단 패턴 대신 직접적인 기능 데이터로 학습한 미센스 변이 효과 예측기가 기존 방법보다 얼마나 우수한가?",
        "key_result": "기능 벤치마크 정확도 78.8% → 84.6%, 임상 벤치마크 90.1% → 92.4%로 향상. 494개 유전자에서 210개 새로운 유전자-표현형 연관성 발굴.",
        "why_for_us": "희귀 변이 해석, variant effect prediction, fine-mapping 후보 변이 기능 주석에 활용 가능. 랩의 rare variant 분석 및 GWAS 기능 해석 파이프라인과 연계 가능.",
        "limitations": "미센스 변이에 특화된 모델로 noncoding 변이나 구조변이에는 직접 적용 불가. 기능 데이터의 편향이 일반화 성능에 영향을 줄 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Predictive design of tissue-specific mammalian enhancers that function in the mouse embryo.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42642514/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42642514/",
        "doi": "https://doi.org/10.1038/s41588-026-02729-1",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Chen S",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "큐레이션된 크로마틴 접근성(ATAC-seq) 데이터로 compact CNN 학습",
          "검증된 인간·마우스 인핸서 데이터로 전이학습(transfer learning) 수행",
          "심장·사지·CNS 조직용 합성 인핸서 15개 in silico 설계",
          "마우스 배아에서 조직 특이적 활성 검증"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "crispr-enhancer-mapping",
          "mpra",
          "credible-set"
        ],
        "tldr": "딥러닝(CNN)을 ATAC-seq 데이터에 학습시키고 검증된 인핸서 데이터로 파인튜닝하여, 마우스 배아 심장·사지·CNS에서 모두 활성화된 15개의 조직 특이적 합성 인핸서를 de novo 설계하는 데 성공.",
        "question": "DNA 서열만으로 포유류 조직 특이적 인핸서 기능을 예측하고, 실제 생체 내(마우스 배아)에서 기능하는 합성 인핸서를 설계할 수 있는가?",
        "key_result": "설계된 15개 합성 인핸서 모두 의도한 조직에서 활성화 확인; 소규모 학습 데이터(modest training set)로도 일반화 가능함을 증명.",
        "why_for_us": "랩의 ATAC-seq 기반 caQTL·noncoding regulatory variant 연구와 직결; 인핸서 활성 예측 모델 프레임워크는 MPRA 설계 및 기능성 변이 우선순위화에 응용 가능.",
        "limitations": "마우스 배아 15개 사례로 제한적; 성체 조직 또는 질환 상태에서의 일반화 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cell-type-specific eQTLs underlie the genetic architecture of complex traits.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649298/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649298/",
        "doi": "https://doi.org/10.1038/s41586-026-10577-6",
        "journal": "Nature",
        "year": "2026",
        "author": "Chen M",
        "rating": 5,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "OneK1K 코호트의 population-scale 단일세포 RNA-seq(말초혈액단핵구) 데이터에 분산 성분(variance component) 모델 적용",
          "세포 유형 특이적 eQTL과 공유 eQTL을 비편향적으로 구분",
          "복잡형질 유전율에 대한 enrichment 분석 및 두 번째 scRNA-seq 데이터셋으로 재현성 검증",
          "trans eQTL 대 cis eQTL에서의 세포 유형 특이성 비율 비교 및 다중 조상에서의 일관성 확인"
        ],
        "concepts": [
          "single-cell-eqtl",
          "molecular-qtl",
          "partitioned-heritability",
          "genetic-architecture",
          "missing-heritability",
          "colocalization",
          "noncoding-regulatory-variants"
        ],
        "tldr": "단일세포 RNA-seq 데이터에 분산 성분 모델을 적용해 세포 유형 특이적 eQTL을 체계적으로 규명하고, 이들이 복잡형질 유전율을 더 잘 설명함을 보임.",
        "question": "세포 유형 특이적 eQTL은 복잡형질의 유전적 구조와 어떻게 연결되며, 기존 세포 유형 공유 eQTL과 어떻게 다른가?",
        "key_result": "세포 유형 특이적 eQTL은 복잡형질 유전율에 enrichment를 보인 반면 공유 eQTL은 그렇지 않았음. Trans eQTL의 60%, cis eQTL의 30%가 세포 유형 특이적이었음. 세포 유형 특이적 eQTL은 선택적 제약이 강한 유전자, enhancer 복잡성, 유전자 네트워크 연결성과 연관됨.",
        "why_for_us": "랩의 핵심 관심사인 single-cell eQTL, 복잡형질 유전율 분할(partitioned heritability), 세포 유형 특이적 QTL 분석에 직접 적용 가능한 방법론 및 결과를 제공함.",
        "limitations": "말초혈액단핵구에 국한되어 조직 특이적 eQTL로의 일반화 필요; 모델이 세포 유형 비율 변동의 교란 효과를 얼마나 잘 보정하는지 추가 검증 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Ultrafast and reference-free sequence discovery in single-cell data.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649290/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649290/",
        "doi": "https://doi.org/10.1038/s41586-026-10975-w",
        "journal": "Nature",
        "year": "2026",
        "author": "León-Periñán D",
        "rating": 4,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "단일세포·공간 전사체 데이터에서 reference-free, ultra-fast RNA 서열 발견 알고리즘 개발",
          "Human Cell Atlas 등 대규모 컨소시엄 데이터(페타바이트급)에 적용 가능한 확장성 설계"
        ],
        "concepts": [
          "brain-isoform-diversity",
          "reference-genome",
          "read-alignment",
          "spatial-transcriptomics"
        ],
        "tldr": "단일세포·공간 전사체 데이터에서 레퍼런스 게놈 없이 초고속으로 RNA 서열을 탐색·발견하는 새 방법론을 제시한다.",
        "question": "기존 레퍼런스에 의존하지 않고 단일세포/공간 전사체 데이터에서 RNA 서열 다양성(스플라이싱, 이소폼, 변형 등)을 빠르게 발견할 수 있는가?",
        "key_result": "초록에 수치 미공개; reference-free 방식으로 RNA 서열·발현·스플라이싱·이소폼 정보를 단일세포 수준에서 동시 탐색 가능함을 시연.",
        "why_for_us": "랩의 단일세포 RNA/멀티오믹스 파이프라인에서 레퍼런스 의존성 없이 이소폼·스플라이싱 다양성(sQTL 등)을 포착할 수 있는 업스트림 도구로 활용 가능.",
        "limitations": "초록에 구체적 벤치마크 수치 미제시; 방법 세부사항 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Virtual Cell Challenge 2026: Benchmarking zero-shot generalization across cellular contexts.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42648290/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42648290/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.004",
        "journal": "Cell",
        "year": "2026",
        "author": "Goodarzi H",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "Arc 생성 데이터셋(미관측 세포주의 유전자 knockdown 반응)을 새롭게 구성",
          "zero-shot 조건에서 다수 모델의 예측 성능을 비교하는 챌린지 설계",
          "전임상 예측과 인간 생물학 간 격차 정량화를 목표로 설정"
        ],
        "concepts": [
          "perturb-seq",
          "single-cell-eqtl"
        ],
        "tldr": "2026 Virtual Cell Challenge는 유전자 knockdown 반응을 새로운 세포주(미관측 맥락)에 대해 zero-shot으로 예측하는 모델의 일반화 능력을 벤치마킹하는 대회.",
        "question": "단일세포 유전자 교란 반응을 미관측 세포주에 대해 zero-shot으로 예측할 수 있는 foundation model이 가능한가?",
        "key_result": "챌린지 결과(최고 모델의 성능 수치 등)는 초록에 명시되지 않음; 다양한 세포 맥락 간 zero-shot 일반화 벤치마크 프레임워크를 제시.",
        "why_for_us": "랩의 perturb-seq 관련 관심 및 single-cell foundation model 활용 가능성 평가에 직접적으로 연관됨; 교란 예측 모델의 zero-shot 일반화는 향후 QTL·유전자 기능 연구에 활용 가능.",
        "limitations": "초록 단계에서 구체적 모델 성능 및 데이터 규모 미공개; Arc 데이터셋 세부 사항 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Integrative spatial profiling of 3D genome organization and gene expression in tissue.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42641604/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42641604/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.039",
        "journal": "Cell",
        "year": "2026",
        "author": "Guo P",
        "rating": 4,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "단일 조직 절편에서 게놈-와이드 크로마틴 접촉(Hi-C)과 전사체(RNA-seq)를 동시에 측정하는 Spatial Hi-C-RNA 플랫폼 개발",
          "마우스 뇌, 발생 중 배아, 인간 흑색종 조직에 적용하여 멀티모달 공간 지도 생성",
          "A/B 컴파트먼트, TAD, 크로마틴 루프 등 다중 스케일 크로마틴 구조를 세포 유형·영역별 전사 프로그램과 연결",
          "마우스 배아에서 뉴런 성숙 과정의 크로마틴-전사 리모델링 추적",
          "인간 흑색종에서 RNA만으로는 감지 못한 종양 내 서브 영역을 크로마틴 구조로 구별"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "noncoding-regulatory-variants",
          "molecular-qtl",
          "single-cell-eqtl"
        ],
        "tldr": "동일 조직 절편에서 3D 유전체 구조(Hi-C)와 전사체(RNA)를 동시에 공간적으로 측정하는 Spatial Hi-C-RNA 플랫폼을 개발하고, 마우스 뇌·배아·인간 흑색종에서 크로마틴 구조와 유전자 발현의 공간적 협응을 규명했다.",
        "question": "온전한 조직 내에서 3D 유전체 구조와 전사체를 동시에 공간적으로 측정할 수 있는가?",
        "key_result": "Spatial Hi-C-RNA는 단일 조직 절편에서 A/B 컴파트먼트, TAD, 루프를 공간 해상도로 측정 가능하며, 흑색종 내 종양 상태 전환이 크로마틴 컴파트먼트·도메인 경계 변화와 연동됨을 보였다.",
        "why_for_us": "공간 전사체 + 에피게노믹스(Hi-C) 동시 측정은 랩의 single-cell 멀티오믹스·공간 전사체·크로마틴 접근성 연구 방향과 직결되며, caQTL/eQTL 기능 검증 맥락에서 조직 내 3D 조절 구조를 규명하는 데 활용 가능하다.",
        "limitations": "근단일세포 해상도이나 진정한 단일세포 수준 Hi-C는 아님; 조직 유형별 프로토콜 최적화 필요 여부 미언급",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Improved spike-in normalization clarifies the relationship between active histone modifications and transcription.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42642513/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42642513/",
        "doi": "https://doi.org/10.1038/s41588-026-02728-2",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Patel L",
        "rating": 3,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "이중 스파이크인 정규화 파이프라인 ChIP-wrangler 개발 및 파라미터 최적화",
          "RNAPII 급성 고갈 실험 후 H3K27ac ChIP-seq 신호 정량 분석",
          "프로모터 vs. 인핸서 위치별 아세틸화 변화 비교"
        ],
        "concepts": [
          "noncoding-regulatory-variants"
        ],
        "tldr": "ChIP-seq 이중 스파이크인(dual spike-in) 정규화 방법 ChIP-wrangler를 개발하고, 이를 이용해 RNAPII 급성 고갈이 H3K27ac 수준에 미치는 영향이 생각보다 작음을(피크의 6%만 유의미하게 변화) 재입증함.",
        "question": "ChIP-seq 스파이크인 정규화를 최적화하면, 활성 히스톤 변형이 전사(RNAPII 활동)에 의존하는지에 대한 기존 주장이 달라지는가?",
        "key_result": "RNAPII 고갈 후 H3K27ac가 유의미하게 변하는 피크는 전체의 6%에 불과; 감소 피크의 82%가 인핸서 관련 모티프를 가진 프로모터 원위 부위에 위치.",
        "why_for_us": "랩의 ChIP-seq·ATAC-seq 분석 시 정규화 방법론 선택에 직접적 참고 자료; H3K27ac 기반 인핸서 활성 해석 시 전사 의존성 가정에 주의 필요.",
        "limitations": "특정 세포주 및 조건에서만 검증; 다른 활성 히스톤 마크(H3K4me3 등)로의 일반화 미확인.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Megascale microbiome analysis with DartUniFrac.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42665683/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42665683/",
        "doi": "https://doi.org/10.1038/s41587-026-03260-8",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Zhao J",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "DartUniFrac 알고리즘 개발: UniFrac 계산을 weighted Jaccard 유사도와 연결하고 스케치 알고리즘(근사 최적)을 적용",
          "GPU 가속 구현으로 기존 UniFrac 대비 최대 1,000배 속도 향상 달성",
          "수백만 샘플 쌍 및 수십억 분류군 규모에서 확장성 검증"
        ],
        "concepts": [
          "beta-diversity",
          "alpha-diversity",
          "compositional-data-analysis"
        ],
        "tldr": "마이크로바이옴 간 계통발생학적 거리(UniFrac)를 GPU 가속과 스케치 알고리즘으로 수백만 샘플·수십억 분류군 규모까지 1000배 빠르게 계산하는 DartUniFrac 알고리즘 제안",
        "question": "기존 UniFrac은 대규모 마이크로바이옴 데이터에서 연산이 병목이 되는데, 어떻게 수백만 샘플 규모로 확장할 수 있는가?",
        "key_result": "DartUniFrac은 기존 UniFrac보다 최대 3 orders of magnitude(1,000배) 빠르며, 수백만 샘플 쌍 규모에서 실용적 계산이 가능함",
        "why_for_us": "메타게노믹스 다양성 분석(beta-diversity)을 대규모 코호트에 적용할 때 직접 활용 가능한 도구; 마이크로바이옴 관련 GWAS·QTL 연구의 전처리 파이프라인에 통합 가능",
        "limitations": "근사 알고리즘(sketching) 기반이므로 정확도 손실 수준에 대한 체계적 벤치마크가 초록에 자세히 제시되지 않음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A distinct effector B cell population drives autoantibody production in SARS-CoV-2 infection.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42664960/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42664960/",
        "doi": "https://doi.org/10.1016/j.immuni.2026.08.002",
        "journal": "Immunity",
        "year": "2026",
        "author": "Yuan D",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "INCOV 코호트에서 자가항체 풍부도가 다른 12명을 연령·성별 매칭하여 선별",
          "B세포 단세포 RNA-seq + ATAC-seq 통합 분석으로 B세포 하위집단 특성화",
          "혈장 프로테오믹스 및 프로테옴 규모 자가항체 프로파일링 수행",
          "TLR7/8 자극 조건에서 AtM의 시험관 내 자가항체 분비세포 분화 실험"
        ],
        "concepts": [
          "allele-specific-expression",
          "molecular-qtl",
          "snMultiome",
          "spatial-transcriptomics"
        ],
        "tldr": "SARS-CoV-2 감염 코호트에서 단세포 RNA+ATAC-seq, 혈장 프로테오믹스, 자가항체 프로파일링을 통합하여, 자가항체 생성을 주도하는 특이적 비정형 기억 B세포(AtM) 집단을 규명.",
        "question": "SARS-CoV-2 감염 시 자가항체를 생산하는 세포 기원은 무엇이며, 어떤 B세포 하위집단이 자가항체 생성을 주도하는가?",
        "key_result": "자가항체 풍부도는 중화 IgG와 역상관; 비정형 기억 B세포(AtM)가 수축하면서 자가항체가 감소; in vitro에서 AtM은 TLR7/8 자극 시 자가항체 분비세포로 우선적 분화; CD11c+ AtM 집단이 핵심 이펙터로 확인.",
        "why_for_us": "자가면역(루푸스·RA) 연구에서 B세포 하위집단과 자가항체 생성의 단세포 멀티오믹스 통합 분석 전략; TLR 경로·HERV 관련 면역 활성화와의 연결고리로 활용 가능; 단세포 RNA+ATAC 통합 방법론 참조.",
        "limitations": "표본 수 소규모(n=12); SARS-CoV-2 맥락에 한정되어 다른 자가면역 질환으로 일반화에 주의 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Epigenetic regulation of B cell tolerance and dysfunction in autoimmune disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42660989/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42660989/",
        "doi": "https://doi.org/10.1038/s41577-026-01344-9",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "Zhang S",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "B세포 발달·분화·활성화 단계별 후성유전체 조절 기전(DNA 메틸화, 히스톤 변형, 크로마틴 리모델링, ncRNA, RNA 변형) 문헌 종합",
          "중추 관용(골수)→말초 관용(GC·extrafollicular) checkpoint별 후성유전체 이상 분석",
          "miRNA-PI3K 신호, DNA 탈메틸화-히스톤 탈아세틸화 균형, X염색체 연관 선천성 면역 수용체 축 등 구체적 축 기술",
          "후성유전체 표적 치료 전략(DNMT 억제제, HDAC 억제제 등) 검토"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "molecular-qtl",
          "allele-specific-expression"
        ],
        "tldr": "B세포 자기관용 유지에서 DNA 메틸화·히스톤 변형·크로마틴 리모델링·ncRNA 등 다층 후성유전체 조절의 역할을 체계적으로 정리한 리뷰. 자가면역질환에서 이 조절이 무너질 때 자기반응성 B세포가 출현하는 기전과 치료 전략을 논의한다.",
        "question": "후성유전체 조절은 어떻게 B세포 자기관용 checkpoint를 유지하며, 그 붕괴가 어떻게 전신 자가면역질환으로 이어지는가?",
        "key_result": "DNA 메틸화·히스톤 변형 등 다층 후성유전체 붕괴가 자기반응성 B세포의 tolerance checkpoint 실패와 자가항체 생산에 직접 기여함을 다수의 SLE·RA 등 사례와 함께 정리. 후성유전체 기반 치료제가 B세포 프로그램 조절의 유망 표적임을 제시.",
        "why_for_us": "랩의 autoimmune(B세포·SLE·RA) 및 epigenomics 관심 영역과 직접 부합. B세포 관용의 후성유전체 조절은 caQTL/mQTL 분석과 연결 가능하며, HERV 재활성화의 에피제네틱 기전과도 연계됨.",
        "limitations": "리뷰 논문으로 신규 실험 데이터 없음; 인과관계보다 연관성 중심 기술.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Pharmacodynamic analysis of TYK2 inhibition by deucravacitinib: results from the phase 2 PAISLEY SLE trial in patients with active systemic lupus erythematosus.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42660739/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42660739/",
        "doi": "https://doi.org/10.1016/j.ard.2026.07.013",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Kahlenberg JM",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "PAISLEY SLE 2상 임상의 363명 SLE 환자 전혈 전사체(51개 면역 유전자), 혈청 단백질(75종), 혈액 세포 아형, 항체 프로파일 분석",
          "CLPA(Chemical ligation-dependent probe amplification) 방법으로 4개 독립 연구에서 유전자 발현 측정",
          "IFN-high/IFN-low 서브그룹별 분석, 건강한 대조군(60명)과 비교"
        ],
        "concepts": [
          "drug-target-genetics",
          "mendelian-randomization"
        ],
        "tldr": "SLE 임상 2상(PAISLEY) 363명을 대상으로 TYK2 억제제 deucravacitinib의 약력학적 효과를 평가. IFN 서명 점수, B세포 경로 바이오마커, 혈청 단백질, 자가항체 등이 치료 후 빠르고 지속적으로 감소함을 확인.",
        "question": "TYK2 억제가 SLE 환자에서 IFN 및 B세포 경로 등 면역 바이오마커에 어떤 약력학적 변화를 일으키는가?",
        "key_result": "스크리닝 시 SLE 환자는 건강인 대비 42개 유전자·75개 단백질에서 차등 발현. Deucravacitinib 치료 후 IFN 수준, IFN 반응 유전자, IFN 유도 단백질, B세포 경로 마커, 혈청 바이오마커 신속·지속 감소; C3·C4 발현 증가. IFN-high 서브그룹에서 항-dsDNA 항체 역가 감소.",
        "why_for_us": "SLE 분야의 면역 바이오마커 연구로 complement(C3·C4) 및 IFN 경로 변화 분석이 랩의 nephro(complement·HLA) 및 autoimmune(SLE) 관심과 연결됨. 다중 오믹스(전사체+단백질+항체) 통합 분석 설계도 참고 가능.",
        "limitations": "모든 분석이 기술적(descriptive)이며 무작위 비교 효능 평가가 아님; 건강인 대조군 수가 최대 60명으로 소규모.",
        "reuse": "",
        "next_step": "POETYK SLE-1(NCT05617677), POETYK SLE-2(NCT05620407) 3상 결과 대기"
      },
      {
        "title": "Hepatic control of immunometabolism: implications for the pathogenesis, diagnosis and treatment of rheumatic diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649250/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649250/",
        "doi": "https://doi.org/10.1038/s41584-026-01421-2",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Perl A",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "SLE, 항인지질증후군 등 자가면역 류마티스 질환에서 간의 면역대사(immunometabolism) 역할을 문헌 종합",
          "간세포의 산화·당화·지질화에 의한 자가항원 변형 기전 기술",
          "보체·응고인자·아포지단백 생산, 장내미생물-간 축, 환경 독소 대사 등을 포괄적으로 검토"
        ],
        "concepts": [
          "mendelian-randomization",
          "microbiome"
        ],
        "tldr": "SLE·항인지질증후군 등 류마티스 자가면역질환에서 간이 대사·면역 허브로서 자가항원 생성, 보체·응고인자 분비, 장내미생물 연결을 통해 전신 자가면역을 증폭한다는 면역대사 기전을 종설한다.",
        "question": "간의 대사·면역 조절 기능이 류마티스 자가면역질환의 발병·진단·치료에 어떻게 관여하는가?",
        "key_result": "간이 자가면역의 개시·증폭에서 중심 조절자임을 제시; 산화·당화 변형 자가항원, 보체 및 응고 경로가 핵심 연결고리.",
        "why_for_us": "랩의 SLE 유전체학(HLA, 보체 C4) 및 자가면역 멀티오믹스 연구와 보체·대사 경로 측면에서 교차점이 있음.",
        "limitations": "리뷰 논문으로 신규 데이터 없음; 인과관계보다 연관성 중심 기술.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Dissecting pleiotropy between major depressive disorder and physical disease comorbidities.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649390/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649390/",
        "doi": "https://doi.org/10.1038/s41588-026-02735-3",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Woodward DJ",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "심혈관·대사·위장관·면역 4개 질환 클러스터를 정의하고 MDD와의 유전적 관계를 genomic SEM으로 분석",
          "세 클러스터(심혈관·대사·면역)가 MDD와 독립적으로 연관되어 MDD 유전 분산의 47%를 설명함을 확인",
          "클러스터별 공유 유전 성분과 MDD 고유 유전 성분의 기능·세포 유형 특성 비교 분석"
        ],
        "concepts": [
          "genetic-correlation",
          "partitioned-heritability",
          "gwas-association-testing",
          "mendelian-randomization",
          "missing-heritability",
          "sex-differences-psychiatric"
        ],
        "tldr": "MDD와 4개 신체질환 클러스터(심혈관·대사·위장관·면역) 사이의 플레이오트로피 구조를 유전체 구조방정식 모델링으로 분해하고, MDD 고유 유전 성분 및 공유 성분의 기능적 특성을 규명했다.",
        "question": "MDD와 흔한 신체질환 동반이환의 유전적 공유(플레이오트로피) 구조는 무엇이며, 어떤 세포·조직 유형이 이를 매개하는가?",
        "key_result": "심혈관·대사·면역 클러스터가 MDD h²의 47%를 공유. 각 공유 성분은 서로 다른 세포·조직 유형에서 기능적 풍부화를 보여 플레이오트로피 메커니즘이 클러스터마다 다름을 시사.",
        "why_for_us": "MDD GWAS 분석, 플레이오트로피/유전적 상관 연구, genomic SEM·partitioned heritability 방법론 모두 랩 핵심 관심사. MDD 동반이환의 유전 구조 해석에 직접 활용 가능.",
        "limitations": "초록에서 개별 변이 수준 fine-mapping 결과나 인과성 검증(MR) 결과가 상세히 제시되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A multiancestry polygenic risk score for Alzheimer's disease is associated with cognitive decline and neuropathological hallmarks in diverse populations.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42661068/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42661068/",
        "doi": "https://doi.org/10.1038/s41588-026-02722-8",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Kurniansyah N",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "유럽·아프리카계 미국인·카리브 히스패닉·동아시아 코호트의 GWAS 요약 통계를 이용해 APOE-독립 다중조상 AD PRS를 구축",
          "대규모 독립 다중조상 데이터셋에서 PRS 성능을 평가하고 추가 다중조상 코호트에서 재현 검증",
          "PRS와 인지 기능(기억·실행·언어), AD 관련 신경병리 부담, 해마 부피, CSF 아밀로이드-β 등 바이오마커와의 연관성 분석"
        ],
        "concepts": [
          "polygenic-risk-score",
          "cross-ancestry-transferability",
          "gwas-association-testing",
          "genetic-architecture",
          "summary-statistics-methods"
        ],
        "tldr": "유럽·아프리카계·히스패닉·동아시아 등 다중 조상 집단을 포괄하는 APOE-독립 AD 다중조상 PRS를 개발하고, 인지 저하·신경병리·뇌 영상 바이오마커와의 연관성을 검증하였다.",
        "question": "기존 유럽 단일 조상 기반 AD PRS는 다양한 인종에서 성능이 불균일한데, 다중 조상 GWAS 요약 통계를 활용한 PRS가 다양한 집단에서도 일관되게 작동하는가?",
        "key_result": "유럽·아프리카계 미국인·카리브 히스패닉·원주민 히스패닉 집단에서 PRS 1 SD 증가 당 보정 OR 1.14–1.52; 재현 코호트에서 OR 1.21–1.65. PRS는 인지 저하, 신경병리 부담 증가, 해마 부피 감소, CSF 아밀로이드-β 감소와 유의하게 연관.",
        "why_for_us": "PRS 방법론(다중조상 PRS, cross-ancestry transferability), AD 유전 구조, 바이오마커 연관성 검증이 랩의 PRS·GWAS·신경질환 관심과 직결된다.",
        "limitations": "APOE를 의도적으로 제외해 가장 강력한 AD 위험 유전자의 효과를 반영하지 못하며, 일부 조상 집단의 샘플 크기가 제한적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "AGG repeat expansion and aggregation of BIN1 in multiple system atrophy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42663379/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42663379/",
        "doi": "https://doi.org/10.1093/brain/awag194",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Kume K",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "가족성 MSA 환자에서 전장유전체 시퀀싱 수행 → BIN1 1번 인트론 AGG 반복 확장 발견",
          "임상 MSA 224명, 병리 확인 MSA 67명, 대조군(혈액 574명, 뇌 65명)에서 반복 확장 스크리닝",
          "long-read 시퀀싱으로 반복 확장 정밀 분석",
          "병리 MSA 뇌와 대조군에서 BIN1 단백질 면역조직화학·면역블롯 분석"
        ],
        "concepts": [
          "tandem-repeats",
          "structural-variants-gwas",
          "rare-variant-collapsing",
          "alpha-synuclein-proteostasis"
        ],
        "tldr": "전장유전체 시퀀싱으로 BIN1 1번 인트론 내 AGG 반복 서열 확장을 다계통 위축증(MSA) 환자에서 발견하고, BIN1 단백질 응집이 MSA 병인에 관여함을 병리·생화학적으로 규명.",
        "question": "다계통 위축증(MSA)의 유전적 원인을 전장유전체 시퀀싱으로 찾을 수 있으며, BIN1 반복 확장이 MSA 발병에 실질적으로 기여하는가?",
        "key_result": "80회 초과 반복 확장 빈도: 병리 MSA 13.4% vs 뇌 대조군 0% (OR=∞; 95% CI 2.1~∞; P=0.003). 반복 확장 보유 환자 뇌에서 BIN1 양성 GCI 증가; MSA 전체에서 반복 유무 무관하게 불용성 BIN1 증가.",
        "why_for_us": "신경계 질환에서 tandem repeat 확장이 병인에 미치는 영향 연구의 실증 사례; α-synuclein 관련 파킨슨 스펙트럼 병인 연구 및 structural variant·repeat 관련 GWAS/rare variant 분석에 참조.",
        "limitations": "임상 MSA군에서는 통계적 유의성 미달(P=0.16); 산발성 MSA에서 반복 확장의 기여 크기 불분명; 소규모 코호트.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Autism mutations rewire protein interaction networks to drive neurodevelopmental pathology.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42658940/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42658940/",
        "doi": "https://doi.org/10.1126/science.ady4523",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Wang B",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "친화성 정제-질량분석(AP-MS)으로 ASD 고신뢰 유전자 100개에 대해 1,800개 이상의 PPI를 체계적으로 맵핑",
          "AlphaFold를 활용해 병원성 미스센스 변이의 PPI 영향을 예측·검증",
          "FOXP1의 독립적 환자 유래 변이가 FOXP4와의 상호작용을 손상시키는 것을 뇌 오가노이드에서 검증",
          "다수의 독립 변이가 동일한 단백질 복합체에 수렴함을 확인"
        ],
        "concepts": [
          "de-novo-variants",
          "neurodevelopmental-trajectory",
          "affinity-proteomics"
        ],
        "tldr": "ASD 고신뢰 유전자 100개의 단백질 상호작용 네트워크를 체계적으로 구축하고, 병원성 변이가 이 네트워크를 어떻게 재배선(rewire)하는지 규명함",
        "question": "ASD 원인 유전자들의 변이는 단백질 상호작용 네트워크를 어떻게 변화시키며, 그 수렴적 메커니즘은 무엇인가?",
        "key_result": "ASD 원인 변이들은 야생형에서 공유 단백질 복합체로 수렴하며, 독립 변이들이 동일한 PPI를 수렴적으로 재배선함; FOXP1 변이는 FOXP4 상호작용 소실 → 피질 신경발생 및 신경 활동 이상을 야기",
        "why_for_us": "ASD de novo 변이와 단백질 네트워크 수렴 메커니즘은 랩의 ASD 유전체학·멀티오믹스 통합 연구에 기능적 해석 프레임을 제공; de novo 변이→네트워크 rewiring→신경발생 표현형 축은 랩의 ASD/neuro 프로젝트에 직접 참고 가능",
        "limitations": "100개 ASD 유전자에 한정되어 전체 ASD 유전적 배경을 커버하지 못함; AP-MS는 약한/일시적 상호작용 검출에 한계",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Aberrant excitatory neuronal ERBB4 promotes Alzheimer's disease pathology.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649291/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649291/",
        "doi": "https://doi.org/10.1038/s41586-026-10964-z",
        "journal": "Nature",
        "year": "2026",
        "author": "Lee SY",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "AD 마우스 모델에서 snRNA-seq으로 초기반응 흥분성 뉴런(EREN) 세포군을 발견하고 ERBB4 이소발현을 확인",
          "흥분성 뉴런 특이적 Erbb4 조건부 녹아웃으로 AD 표현형(시냅스 소실, 신경교증, 아밀로이드, 인지저하) 구제",
          "야생형에서 Erbb4 과발현으로 아밀로이드 없이 AD 유사 표현형 재현",
          "mTOR 신호를 하위 기전으로 규명",
          "인간 AD 전사체 데이터에 directed mediation analysis 적용하여 ERBB4→아밀로이드→타우→인지저하 경로 지지"
        ],
        "concepts": [
          "brain-eqtl-grn",
          "microglia-neuroimmune",
          "brain-cell-atlas"
        ],
        "tldr": "알츠하이머병(AD) 진행 과정에서 흥분성 뉴런에 이소성으로 발현되는 ERBB4가 시냅스 소실·반응성 신경교증·아밀로이드 플라크·타우 전파·인지저하를 유발하는 초기 병리 드라이버임을 마우스 모델과 인간 전사체 데이터로 규명했다.",
        "question": "AD에서 흥분성 뉴런의 이소성 ERBB4 발현이 시냅스 손실 및 AD 병리의 인과적 원인인가?",
        "key_result": "ERBB4 조건부 결손 시 비정상 신경망 활동, 시냅스 소실, 아밀로이드 플라크, 반응성 신경교증, 인지 결손이 모두 소실; 과발현 시 아밀로이드 없이도 동일 표현형 유도; 하위 기전은 mTOR 신호.",
        "why_for_us": "snRNA-seq 기반 세포유형 특이적 전사체 분석 및 인간 AD 전사체 데이터의 mediation analysis 접근법이 랩의 단일세포·뇌 eQTL/GRN 연구와 연결되며, AD 병리의 신경세포 자율적 기전을 유전체학적으로 추적하는 데 참고 가능.",
        "limitations": "마우스 모델 중심; 인간 데이터는 관찰적 mediation에 그침; ERBB4 이소발현의 상위 유발 원인은 미규명.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cognitive and synaptic impairment induced by deficiency of autism risk gene Smarcc2 and its rescue by histone deacetylase inhibition.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42649243/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42649243/",
        "doi": "https://doi.org/10.1038/s41380-026-03848-1",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Li P",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "ASD 환자 사후 전전두엽 피질(PFC)에서 SMARCC2 발현량 측정",
          "청소년기 마우스 PFC에 Smarcc2 결핍 모델 구축 후 행동·전기생리 평가",
          "RNA-seq 및 ChIP-seq으로 SMARCC2 표적 유전자 및 히스톤 아세틸화(H3K9ac) 변화 분석",
          "ASD 환자 유래 hiPSC-N에서 SMARCC2 knockdown 후 시냅스 유전자 발현 확인",
          "HDAC 억제제 romidepsin 처리로 표현형 구제 실험 수행"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "de-novo-variants",
          "neurodevelopmental-trajectory"
        ],
        "tldr": "ASD 위험 유전자 SMARCC2(BAF170) 결핍이 전전두엽 피질에서 시냅스 유전자 히스톤 아세틸화를 감소시켜 인지·시냅스 기능 저하를 유발하며, HDAC 억제제(romidepsin)로 이를 회복시킬 수 있음을 마우스 및 hiPSC 모델에서 규명.",
        "question": "SMARCC2 반수체 결핍이 어떤 분자 기전으로 ASD의 인지·시냅스 표현형을 초래하며, 이를 히스톤 아세틸화 복원으로 구제할 수 있는가?",
        "key_result": "Smarcc2 결핍 마우스는 작업 기억 저하 및 GABAergic·glutamatergic 시냅스 전류 감소를 보임; 시냅스 유전자 프로모터에서 H3K9ac 감소 확인; romidepsin 처리 후 히스톤 아세틸화·작업 기억·시냅스 기능이 정상화됨.",
        "why_for_us": "ASD 위험 유전자의 chromatin remodeling → 시냅스 유전자 조절 경로를 ChIP-seq + RNA-seq으로 규명한 연구로, 랩의 ASD 관련 epigenomics·noncoding regulatory variant 분석에 기계론적 배경을 제공함.",
        "limitations": "마우스 모델에서 사회적 행동 표현형이 뚜렷하지 않아 ASD의 핵심 증상 재현에 한계; romidepsin의 HDAC 비선택성으로 인한 off-target 가능성 논의 부족.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "De novo chromatin remodelling variants in sporadic Chiari 1 malformation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42640505/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42640505/",
        "doi": "https://doi.org/10.1093/brain/awag282",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Mehta NH",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "다세대 CM1 가족에서 whole-exome sequencing(WES)으로 CHD3 LoF 변이 동정",
          "산발성 CM1 proband-parent trio 1,585쌍(최대 규모) + 대조군 비영향 형제 1,798명 WES 분석",
          "CHD1, CHD3, CHD4, CHD8에서 단백질-손상 DNV 유의 농축 확인(p=1.3×10⁻⁹)",
          "단일세포 전사체(발달 중인 인간 소뇌) 데이터와 통합하여 퍼킨제 세포·억제 뉴런에서 CHD 유전자 발현 풍부 확인"
        ],
        "concepts": [
          "de-novo-variants",
          "rare-variant-collapsing",
          "noncoding-regulatory-variants",
          "neurodevelopmental-trajectory"
        ],
        "tldr": "희귀 산발성 Chiari 1 기형(CM1) 환자 1,585명의 trio WES를 통해 CHD1/3/4/8 등 크로마틴 리모델링 유전자에 de novo 변이가 유의미하게 농축됨을 발견하고, 소뇌 발달 장애를 CM1의 핵심 기전으로 제시했다.",
        "question": "산발성 Chiari 1 기형에서 드 노보 변이(DNV)가 특정 유전자 경로에 농축되는가?",
        "key_result": "CHD 패밀리 유전자의 단백질-손상 DNV 농축 p=1.3×10⁻⁹, LoF DNV p=8.6×10⁻⁵; 환자들은 신경발달 지연 공병 빈번",
        "why_for_us": "de novo 변이 분석, trio 기반 희귀 변이 풍부화, 단일세포 전사체 통합이 랩의 rare-variant·single-cell 연구 방법론과 겹치며, 신경발달 질환 유전체 분석 사례로 참고 가능하다.",
        "limitations": "trio 설계이나 CM1 대조군은 비영향 형제만 사용; 기능적 검증(세포·동물 모델)은 제한적",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genome-scale perturb-seq in primary human CD4",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42664972/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42664972/",
        "doi": "https://doi.org/10.1016/j.cell.2026.08.002",
        "journal": "Cell",
        "year": "2026",
        "author": "Zhu R",
        "rating": 5,
        "emoji": "⚔️",
        "domain": "면역",
        "what_they_did": [
          "1차 인간 CD4 T세포에서 게놈 규모 perturb-seq 수행 (약 2,200만 세포)",
          "발현되는 모든 유전자를 CRISPR로 교란하고 단세포 RNA-seq으로 전사체 변화 측정",
          "획득한 교란-전사 반응 데이터로 유전자 조절 네트워크(GRN) 재구성"
        ],
        "concepts": [
          "perturb-seq",
          "single-cell-eqtl",
          "brain-eqtl-grn",
          "noncoding-regulatory-variants",
          "crispr-enhancer-mapping",
          "molecular-qtl"
        ],
        "tldr": "전체 발현 유전자를 대상으로 한 게놈 규모 perturb-seq을 1차 인간 CD4 T세포 2200만 개에 적용하여, 인간 자가면역·면역 관련 T세포 유전자 조절 네트워크를 체계적으로 지도화.",
        "question": "인간 CD4 T세포에서 모든 발현 유전자를 개별 교란했을 때 나타나는 전사 조절 네트워크 전체 구조는 어떠하며, 이것이 면역·자가면역 질환 GWAS 신호와 어떻게 연결되는가?",
        "key_result": "초록이 잘려 세부 수치 미확인; 인간 CD4 T세포의 게놈 규모 GRN 지도 및 면역 관련 조절 로직 체계적 규명.",
        "why_for_us": "T세포 관련 자가면역(RA·루푸스) 및 cancer immunology 연구에서 GWAS eQTL 신호의 인과 유전자·조절 회로를 기능적으로 검증하는 perturb-seq 전략의 핵심 레퍼런스; single-cell eQTL 및 GRN 연구와 직결.",
        "limitations": "초록 잘림으로 세부 결과·한계 미확인; 1차 세포 기반이지만 특정 활성화 상태에 한정될 수 있음.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-08-23",
    "count": 16,
    "papers": [
      {
        "title": "Distinguishing different psychiatric disorders using DDx-PRS.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42625058/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42625058/",
        "doi": "https://doi.org/10.1038/s41588-026-02684-x",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Peyrot WJ",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "SCZ·BIP·MDD 및 대조군의 분산-공분산 구조를 모델링하여 각 진단 범주의 사후확률을 동시 추정하는 DDx-PRS 개발",
          "PGC GWAS 요약통계(훈련: n=41,917~173,140 cases; 전체 n=1,048,683)와 독립 테스트 코호트(n=11,460) 적용",
          "보정(캘리브레이션), 통계적 검정력, 타 방법과 비교 검증"
        ],
        "concepts": [
          "polygenic-risk-score",
          "summary-statistics-methods",
          "genetic-correlation",
          "gwas-association-testing",
          "liability-threshold-model",
          "statistical-power-gwas",
          "cross-ancestry-transferability"
        ],
        "tldr": "SCZ·BIP·MDD·대조군을 동시에 유전적으로 감별하는 DDx-PRS 방법을 개발. 다범주 사후확률을 추정하여 기존 이분법적 PRS의 한계를 극복.",
        "question": "임상적으로 유사한 여러 정신과 진단을 유전 정보로 동시에 감별하는 PRS 방법을 만들 수 있는가?",
        "key_result": "DDx-PRS는 잘 보정되고 검정력이 높으며, 별도 튜닝 데이터 없이도 유사 방법들과 동등한 성능 달성. 예측 확률 상위 10분위에서 실제 진단 비율이 사전 확률 대비 현저히 높아 임상 활용 가능성 시사.",
        "why_for_us": "랩의 핵심 관심사인 PRS 방법론 발전, 정신질환(SCZ/BIP/MDD) 유전체 연구와 직결. 다범주 PRS 설계 및 요약통계 기반 방법 개발에 직접 참고 가능.",
        "limitations": "현재 4개 범주(SCZ/BIP/MDD/대조)에 국한; 임상 환경에서의 실제 유용성은 추가 검증 필요; 훈련-테스트 코호트 간 인구집단 차이 잠재적 문제",
        "reuse": "PGC GWAS 요약통계 사용; DDx-PRS 소프트웨어 공개 여부는 초록에 명시 없음",
        "next_step": ""
      },
      {
        "title": "Rare variant effect estimation and polygenic risk prediction.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42608548/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42608548/",
        "doi": "https://doi.org/10.1038/s41588-026-02705-9",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Nam K",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "분산 성분 모델 기반 유전자/지역 단위 헤리터빌리티 추정 후 변이별 효과 크기를 경험적 베이즈로 추정하는 RareEffect 개발",
          "케이스-컨트롤 불균형 보정을 위한 Firth 편향 보정 고속 구현 적용",
          "UK Biobank WES 데이터 100개 형질로 시뮬레이션 및 실제 분석 수행",
          "추정된 효과 크기를 기존 희귀변이 PRS 방법들과 성능 비교"
        ],
        "concepts": [
          "rare-variant-collapsing",
          "polygenic-risk-score",
          "snp-heritability-grm",
          "missing-heritability",
          "statistical-power-gwas",
          "summary-statistics-methods"
        ],
        "tldr": "희귀변이 효과 크기를 유전자/지역 단위 경험적 베이즈 방식으로 추정하는 RareEffect를 개발하고, UK Biobank WES 100개 형질에 적용해 희귀변이 PRS 성능을 개선.",
        "question": "낮은 빈도 탓에 효과 추정이 어려운 희귀변이를 더 정확하게 효과 크기를 추정하고 다유전자 점수에 활용할 수 있는가?",
        "key_result": "RareEffect는 유전자 수준 및 변이 수준 2단계 효과 크기를 제공; 시뮬레이션 및 실데이터에서 기존 최신 희귀변이 PRS 방법 대비 폴리제닉 점수 예측 성능 향상; 100개 UK Biobank 형질에서 계산 효율성과 정확성 입증.",
        "why_for_us": "희귀변이 QTL·heritability·PRS는 랩 핵심 연구 주제. rare-variant-collapsing, polygenic-risk-score, snp-heritability-grm, missing-heritability와 직결. UK Biobank WES 분석 방법론으로 즉시 활용 가능.",
        "limitations": "WES 기반으로 WGS 대비 희귀변이 커버리지 제한; 유전자/지역 단위 헤리터빌리티 모델 가정에 의존; 케이스 수가 극히 적은 희귀 질환에서 성능 미검증.",
        "reuse": "RareEffect 소프트웨어(공개 시) UK Biobank WES 100개 형질 효과 크기 추정값 재활용 가능.",
        "next_step": ""
      },
      {
        "title": "Toward the clinical application of long-read sequencing in repeat-expansion disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42625059/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42625059/",
        "doi": "https://doi.org/10.1038/s41588-026-02694-9",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Benarroch L",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "REDs에서 LRS의 최근 발견, 방법론적·생물정보학적 발전, 신흥 진단 응용 사례를 체계적으로 검토(Perspective)",
          "STR 복잡성(비정규 이차구조, 소마틱 불안정성, 반복 중단, 대립유전자 특이 메틸화)에 대한 LRS의 해상도 우위 논의",
          "새로운 병원성 반복 확장 발견 사례와 환자 계층화 가능성 제시"
        ],
        "concepts": [
          "tandem-repeats",
          "structural-variants-gwas",
          "allele-specific-expression",
          "variant-calling",
          "sequencing-strategies"
        ],
        "tldr": "단단반복 확장 질환(REDs)에서 롱리드 시퀀싱(LRS)이 STR의 복잡한 특성(소마틱 불안정성, 반복 중단, 대립유전자별 메틸화)을 단일 분석으로 해결하고 진단·임상 연구에 혁신을 가져올 가능성을 논의한 Perspective.",
        "question": "롱리드 시퀀싱이 단반복 확장 질환의 진단 및 임상 연구에 어떻게 기여할 수 있는가?",
        "key_result": "LRS는 수 킬로베이스를 초과하는 STR 확장을 단일 분석으로 정확히 파악하며, 대립유전자별 메틸화 등 기존 기술로 해결 불가능했던 특성을 규명 가능; 임상 진단과 임상시험 환자 계층화에 활용 잠재력 높음.",
        "why_for_us": "랩의 관심 영역인 tandem repeats, structural variants, allele-specific 분석, 그리고 신경질환(REDs 다수가 신경계)과 직결. 롱리드 기반 STR·SV·메틸화 통합 분석 전략 수립에 참고.",
        "limitations": "현재 LRS 비용과 처리량 한계; 바이오인포매틱스 표준화 미흡; 임상 검증 사례 아직 제한적",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Family genetic designs in MoBa provide insights into health and functioning.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42618792/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42618792/",
        "doi": "https://doi.org/10.1038/s41586-026-10926-5",
        "journal": "Nature",
        "year": "2026",
        "author": "Corfield EC",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "MoBa 코호트(모-부-자 트리오 포함 ~23만 명)의 유전형 데이터를 가족 구조에 맞춘 QC 파이프라인으로 처리",
          "트리오 설계를 이용해 직접 유전 효과(within-family)와 간접 유전 효과(부모 넌트랜스미티드 allele)를 분리 추정",
          "신장, 교육 성취, 우울 증상, 수면 시간 4가지 표현형에 대한 가족 기반 분석 예시 제시"
        ],
        "concepts": [
          "gwas-association-testing",
          "family-history-gwas",
          "polygenic-risk-score",
          "mendelian-randomization",
          "pca-population-stratification",
          "missing-heritability",
          "statistical-power-gwas"
        ],
        "tldr": "노르웨이 MoBa 코호트(~23만 명)의 트리오 유전체 데이터를 활용해 직접·간접 유전 효과 및 구조적 교란을 분리하는 가족 기반 유전체 설계의 장점을 실증함.",
        "question": "대규모 인구 기반 GWAS 추정치에 내재된 집단 층화·간접 유전 효과(뉘르처링 등) 교란을 가족 트리오 설계로 어떻게 분리·보정할 수 있는가?",
        "key_result": "가족 트리오 데이터로 직접/간접 유전 효과와 구조적 교란을 분리할 수 있음을 실증; 표준 GWAS 추정치가 간접 효과(예: 부모의 교육적 넌트랜스미티드 allele)에 의해 편향될 수 있음을 확인.",
        "why_for_us": "랩의 GWAS/QTL·MR·PRS 연구에서 indirect genetic effect와 population stratification 교란 문제는 핵심 이슈이며, 가족 기반 설계(within-family GWAS, transmitted/non-transmitted allele 분석)는 fine-mapping 및 인과 추론 파이프라인 보완에 직접 적용 가능.",
        "limitations": "트리오 샘플은 인구 기반 샘플에 비해 표본 수가 적어 희귀 변이 분석 통계력 제한; 노르웨이 단일 코호트로 일반화 제약.",
        "reuse": "MoBa 트리오 유전형 데이터 및 QC 파이프라인 방법론은 공개 예정으로 언급되나, 구체적인 데이터 접근 방식은 초록에 명시 없음.",
        "next_step": "초록에 명시 없음."
      },
      {
        "title": "An Icelandic pangenome reference.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42618781/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42618781/",
        "doi": "https://doi.org/10.1038/s41586-026-10924-7",
        "journal": "Nature",
        "year": "2026",
        "author": "Holley G",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "Emblask(하이브리드 장·단독 리드 하플로타입 해상도 이중 조립 파이프라인)로 698개 아이슬란드 하플로타입을 조립",
          "HPRC 판게놈에 아이슬란드 하플로타입을 추가해 HPRC-ICE 구축(5,141만 소변이 포함)",
          "57,630명 아이슬란드인의 단독 리드를 HPRC-ICE에 Weaver로 매핑하여 9,896만 변이 호출",
          "UK Biobank 429,193명 재매핑으로 GBA1 연관(조기발병 파킨슨병)과 CBS 미스센스 변이(호모시스틴뇨증) 복제"
        ],
        "concepts": [
          "reference-genome",
          "genotype-imputation",
          "haplotype-phasing",
          "structural-variants-gwas",
          "variant-calling",
          "gwas-association-testing"
        ],
        "tldr": "아이슬란드 698개 하플로타입을 기반으로 구축한 판게놈 참조(HPRC-ICE)와 대규모 단독 매핑 도구(Weaver)를 이용해 참조 편향을 줄이고 새 변이를 발굴함.",
        "question": "선형 참조 게놈의 참조 편향(reference bias) 문제를 판게놈으로 해결할 수 있는가, 그리고 이를 수만 명 규모 코호트에 실용적으로 적용할 수 있는가?",
        "key_result": "선형 참조 대비 변이 발굴 6.17% 증가; 저매핑성 영역에서 GBA1 병원성 SNP 및 CBS 미스센스 SNP 신규 발굴·복제.",
        "why_for_us": "GWAS·QTL·fine-mapping 분석의 기반인 변이 호출 정확도와 참조 패널 품질에 직접 관련. 특히 복잡 반복 구간(GBA1 등) 변이 발굴은 신경질환(PD), NCF1 등 랩 관심 영역과 맞닿아 있음.",
        "limitations": "아이슬란드 단일 집단 기반이라 다른 집단으로의 전이성 제한; 장독 어셈블리 비용 및 trio 데이터 필요.",
        "reuse": "HPRC-ICE 판게놈과 Emblask/Weaver 도구가 공개되어 다른 코호트 재매핑에 활용 가능.",
        "next_step": ""
      },
      {
        "title": "Bonsai reconstructs tree representations for distortion-free visualization and exploration of high-dimensional data.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42629500/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42629500/",
        "doi": "https://doi.org/10.1038/s41587-026-03220-2",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "de Groot DH",
        "rating": 3,
        "emoji": "🔬",
        "domain": "단일세포",
        "what_they_did": [
          "임의의 이종 측정 노이즈를 가진 고차원 객체를 연결하는 최대우도 트리를 재구성하는 Bonsai 알고리즘 개발",
          "혈액세포 데이터에 적용하여 알려진 계통 관계 복원 및 새로운 NK 세포 아형 발견",
          "Bonsai-scout를 통한 하위 탐색 분석 통합, 조정 파라미터 없음"
        ],
        "concepts": [
          "neurodevelopmental-trajectory"
        ],
        "tldr": "고차원 단일세포 데이터를 트리로 표현하는 새로운 시각화·탐색 방법 Bonsai를 제안. 이종적 측정 노이즈를 자동으로 정규화하고 분화 궤적을 왜곡 없이 복원.",
        "question": "단일세포 오믹스 데이터의 고차원 구조를 왜곡 없이 시각화·탐색할 수 있는 방법은 무엇인가?",
        "key_result": "Bonsai는 기존 방법 대비 고차원 거리를 보존하고 최근접 이웃 식별 정확도를 높이며, 혈액 데이터에서 골수 계통 유래 NK 세포 아형을 새롭게 발견.",
        "why_for_us": "단일세포 RNA/ATAC 데이터의 궤적 분석 및 세포 계통 복원 시 활용 가능한 노이즈-강건 시각화 도구로서 랩의 sc 분석 파이프라인에 참고 가치 있음.",
        "limitations": "트리 구조 가정이 실제 복잡한 세포 운명(네트워크, 수렴 분화 등)을 표현하기 어려울 수 있음; 혈액 데이터 위주 검증",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Proteogenomics in human populations.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42625025/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42625025/",
        "doi": "https://doi.org/10.1038/s41576-026-00998-4",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Zhai R",
        "rating": 5,
        "emoji": "🧪",
        "domain": "단백체",
        "what_they_did": [
          "대규모 바이오뱅크 + 고처리량 프로테오믹스(Olink/SomaScan 등) 플랫폼을 이용한 pQTL 연구 급성장 동향 정리",
          "pQTL을 eQTL·mQTL 등 다른 분자 QTL과 통합하여 질환 유전자 우선순위화 방법론 소개",
          "MR·colocalization을 이용한 단백질→질환 인과 추론 및 약물 타겟 검증 사례 리뷰",
          "크로스-코호트 메타분석과 교차 조상 이전 가능성 문제 논의"
        ],
        "concepts": [
          "pqtl-proteomics",
          "molecular-qtl",
          "mendelian-randomization",
          "colocalization",
          "drug-target-genetics",
          "affinity-proteomics",
          "cross-ancestry-transferability",
          "fine-mapping",
          "summary-statistics-methods"
        ],
        "tldr": "인간 집단에서 프로테오제노믹스(pQTL 중심)의 최신 진전과 질환 해석·개인화 치료로의 응용을 종합 리뷰한 논문.",
        "question": "pQTL 매핑과 멀티오믹스 통합이 인간 질환의 분자 기전 규명과 신약 개발에 어떻게 기여하는가?",
        "key_result": "pQTL 규모가 수천 명에서 수십만 명 코호트로 확대되며 발견 수가 급증; cis-pQTL과 trans-pQTL의 생물학적 의미 차이 강조; 약물 타겟 검증에 MR 활용이 성과를 내고 있음.",
        "why_for_us": "랩의 핵심 관심사(pQTL, MR, colocalization, 멀티오믹스 통합)를 정면으로 다루는 리뷰. pQTL 파이프라인 구축과 질환 도메인 적용 시 필수 참고문헌.",
        "limitations": "리뷰 논문; 플랫폼 간 단백질 측정 편차, 항체 특이성 문제, 교차 조상 이전 가능성 한계 언급.",
        "reuse": "",
        "next_step": "개인 맞춤 치료 및 건강 결과 개선을 위한 프로테오제노믹스 활용 방향 제안."
      },
      {
        "title": "The private truncating Toll-like receptor 7 p.Glu834* variant associates with juvenile-onset systemic lupus erythematosus and pathological cytokine expression in vitro.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42632785/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42632785/",
        "doi": "https://doi.org/10.1016/j.ard.2026.07.024",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Renaudineau Y",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "319명의 소아 발병 SLE 환자에서 TLR7 coding 변이를 차세대 시퀀싱으로 탐색",
          "신규 private 변이 p.Glu834*(이형접합)의 분자적 기능 연구: UNC93B1 샤페론 결합, 엔도리소좀 통합, TLR8과의 이종이량체 형성 확인",
          "분자 모델링으로 TLR8:TLR7 p.Glu834* 이종이량체의 구조적 가능성 분석",
          "환자 말초혈액에서 IFN 시그니처 측정"
        ],
        "concepts": [
          "rare-variant-collapsing",
          "noncoding-regulatory-variants",
          "protective-alleles"
        ],
        "tldr": "소아 발병 SLE 환자에서 새로운 TLR7 절단 변이(p.Glu834*)를 발견하고, 이 변이가 TLR8과 비정규 이종이량체를 형성해 염증성 사이토카인 및 IFN 신호를 증폭시킴을 규명.",
        "question": "희귀 TLR7 coding 변이가 소아 SLE의 발병 기전에 어떻게 기여하는가?",
        "key_result": "TLR7 p.Glu834* 변이는 UNC93B1에 지속적으로 결합하고 TLR8과 비정규 이종이량체를 형성하여 TLR7/8 자극 시 친염증성 사이토카인 발현을 증폭시키며, 환자 말초혈액에서도 IFN 시그니처가 상승함.",
        "why_for_us": "SLE 관련 희귀 변이의 기능적 해석 사례이며, 유전적 위험 계층화 및 autoimmune 도메인(SLE) 연구와 직결됨. TLR7 ultra-rare 변이의 표현형-유전형 연결 방식은 rare-variant 분석 프레임워크에 참고 가능.",
        "limitations": "단일 환자 사례 기반 기능 연구로 재현성 검증이 제한적; 319명 코호트에서 이 변이는 1명에서만 발견(private variant)",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Synthetic transcription factors designed by domain recombination enhance CAR T cell antitumor function.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42617595/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42617595/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.054",
        "journal": "Cell",
        "year": "2026",
        "author": "Takacsi-Nagy O",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "단백질 패밀리 내 도메인을 재조합하는 DESynR(domain engineered via synthesis and recombination) 방법론 개발",
          "DESynR AP-1 전사인자를 1차 인간 T 세포에 도입하여 in vitro/in vivo 항종양 어세이 수행",
          "전사체·후성유전체 리프로그래밍 분석으로 T 세포 상태(exhaustion, effector, cytotoxic, persistence) 특성화",
          "ETS·FOX 패밀리로 DESynR 방법 일반화 가능성 검증"
        ],
        "concepts": [
          "noncoding-regulatory-variants"
        ],
        "tldr": "단백질 도메인 재조합으로 설계한 합성 전사인자(DESynR AP-1)가 CAR T 세포의 항종양 기능을 크게 향상시킨다.",
        "question": "단백질 도메인 재조합으로 진화적으로 존재하지 않는 새로운 전사인자를 설계하면, T 세포 소진을 극복하고 항종양 효능을 높일 수 있는가?",
        "key_result": "DESynR AP-1 TF는 자연 AP-1 TF 대비 in vitro·in vivo 항종양 기능 모두 유의하게 우월하며, 소진·효과기·세포독성·지속성 특성을 동시에 최적화하는 비자연적 T 세포 상태를 유도한다. 리프로그래밍은 주로 기존 AP-1 결합 조절 요소의 차등 조절에 의해 구동됨.",
        "why_for_us": "T 세포 소진·TME·암 면역치료 관심 분야에서 전사인자 기반 T 세포 상태 조작의 후성유전체·전사체 메커니즘을 이해하는 데 참고할 수 있다.",
        "limitations": "인간 임상 데이터 부재; 합성 TF의 면역원성·안전성 미검토; 초록에서 구체적인 in vivo 모델 조건 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "WNT-driven immune evasion promotes malignant transformation of BRAF-mutant colorectal cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42612882/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42612882/",
        "doi": "https://doi.org/10.1053/j.gastro.2026.07.035",
        "journal": "Gastroenterology",
        "year": "2026",
        "author": "Mastel M",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "BRAF-돌연변이 MSS CRC의 다수 유전자조작 마우스 모델(GEMM) 및 오가노이드 이식 모델 구축",
          "APC, CTNNB1, RNF43 돌연변이 등 WNT 구성요소 기능적 분석",
          "Bulk RNA-seq, scRNA-seq, CITE-seq로 종양 발생 및 면역 미세환경 변화 분석",
          "WNT 활성화에 의한 CCL20 억제 및 면역억제성 골수 세포 집단 증가 메커니즘 규명"
        ],
        "concepts": [
          "single-cell-eqtl",
          "spatial-transcriptomics"
        ],
        "tldr": "BRAF-돌연변이 MSS 대장암에서 WNT 경로 활성화가 면역 회피를 통해 악성 전환을 주도한다는 것을 다중 마우스 모델과 단세포 오믹스로 규명.",
        "question": "BRAF-돌연변이 MSS 대장암의 악성 전환에서 WNT 신호 활성화는 면역 미세환경을 어떻게 재편하여 면역 회피를 유발하는가?",
        "key_result": "APC 또는 CTNNB1 돌연변이에 의한 WNT 활성화(RNF43 소실은 불충분)가 종양 개시에 필수적이며, WNT는 CCL20을 억제하고 면역억제성 골수 집단 증가·T 세포 상태 변화를 유도해 면역 회피를 촉진한다.",
        "why_for_us": "T 세포 소진·TME 면역치료 관심과 맞닿아 있으며, scRNA-seq/CITE-seq 기반 TME 분석 방법론 및 암 면역 회피 유전학 연구에 활용 가능.",
        "limitations": "인간 임상 코호트 검증 부재; MSS 외 다른 CRC 아형 적용 가능성 미언급; 초록에서 CITE-seq 세포 수·해상도 등 세부 정보 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Maternal sleep deprivation reshapes offspring hippocampal development through a Trem2-centered microglial program revealed by single-nucleus and spatial transcriptomics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42629379/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42629379/",
        "doi": "https://doi.org/10.1038/s41380-026-03831-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Wu X",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "쥐 모델에서 임신 후기 모체 수면 박탈(LSD) 시행, 자손을 P1/P7/P14/P56에서 단핵 RNA-seq + 공간전사체로 분석하여 해마 세포 아틀라스 구축",
          "LSD 유발 전사체 변화를 올리고덴드로사이트, 별아교세포, 흥분/억제 신경세포, 미세아교세포에서 계통 추적",
          "AAV 매개 Trem2 복원 실험으로 신경염증, LTP, 행동 표현형 구제 검증",
          "Morris water maze, open field, elevated plus maze로 행동 평가; LTP 전기생리학적 측정"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "microglia-neuroimmune",
          "brain-cell-atlas",
          "maternal-immune-activation",
          "neurodevelopmental-trajectory"
        ],
        "tldr": "임신 후기 모체 수면 박탈(LSD)이 자손의 해마 발달에서 Trem2 중심의 미세아교세포 프로그램을 재편하여 장기적 인지·행동 결손을 유발함을 단핵 RNA-seq과 공간전사체로 규명.",
        "question": "임신 중 수면 박탈이 자손의 해마 미세아교세포 상태와 신경회로 발달에 미치는 영향은 무엇인가?",
        "key_result": "LSD는 Trem2 하향조절 및 인간 신경정신·신경퇴행 위험 유전자 모듈 농축을 특징으로 하는 미세아교세포 상태 변화를 유도; 자손은 공간 기억, 불안, 탐색 행동 결손 및 LTP 손상을 보임. Trem2 AAV 복원 시 일부 표현형 개선.",
        "why_for_us": "단핵 RNA-seq + 공간전사체를 조합한 신경 발달 아틀라스 구축 방법론과 미세아교세포 상태 분석이 랩의 뇌 단일세포 분석 및 신경정신 질환 연구와 직접 관련. Trem2 유전 위험 loci와 전사체 변화의 연결도 참고 가능.",
        "limitations": "설치류 모델 기반으로 인간 임상 적용에 한계; AAV 구제가 부분적 효과만 보임; 수면 박탈의 정확한 분자적 상류 기전 미규명",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multimodal brain cell atlas across the adult macaque lifespan.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42612631/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42612631/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.045",
        "journal": "Cell",
        "year": "2026",
        "author": "Zhang X",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "23마리 암컷 시노몰구스 마카크(성체 전 생애)에서 8개 뇌 영역, 2,955,873핵을 snRNA-seq 및 snATAC-seq으로 프로파일링",
          "세포 아형·지역별 노화 관련 전사 변화 및 크로마틴 리모델링 프로그램 동정",
          "폰스·연수에서 멀티셀룰러 네트워크를 노화 핫스팟으로 규명",
          "인간 뇌 노화·신경퇴행 데이터셋과 교차 비교하여 공유·차이 메커니즘 분석"
        ],
        "concepts": [
          "brain-cell-atlas",
          "aging-genetics",
          "single-cell-eqtl",
          "brain-eqtl-grn",
          "spatial-transcriptomics",
          "cross-species-cell-type-evolution"
        ],
        "tldr": "성체 마카크 원숭이 8개 뇌 영역에서 약 300만 핵의 전사체+크로마틴 접근성 멀티오믹스 아틀라스를 구축하여 영장류 뇌 노화의 세포형·지역 특이적 분자 메커니즘을 규명함.",
        "question": "영장류 뇌 노화는 세포 유형별·뇌 영역별로 어떻게 다른 분자 변화를 보이며, 이것이 인간 신경퇴행과 어떻게 연결되는가?",
        "key_result": "시냅스 신호전달, 축삭 수초화 관련 세포 아형 특이적 노화 변화 확인; 폰스·연수의 백질 취약성이 영장류 뇌 노화의 핵심 특징으로 제안됨; 장수 및 신경퇴행과 연관된 전사인자 및 노화 크로마틴 리모델링 프로그램 동정.",
        "why_for_us": "snRNA+snATAC 멀티오믹스 통합, 뇌 세포 아틀라스 구축, 노화 유전체학, 신경퇴행 질환 도메인 모두 랩의 핵심 관심사와 직결됨. 특히 brain-cell-atlas, aging-genetics, 크로마틴 접근성 QTL 연구 등과 연계 가능.",
        "limitations": "암컷 마카크만 포함(성별 편향 가능); 단일 종(마카크)으로 인간 뇌 노화 추론에 한계; 인과관계보다 상관관계 기반.",
        "reuse": "아틀라스 데이터(전사체+크로마틴) 공개 시 뇌 노화·신경퇴행 연구의 레퍼런스 데이터셋으로 활용 가능; TF 및 크로마틴 리모델링 프로그램 목록 재사용 가능.",
        "next_step": ""
      },
      {
        "title": "Early life experiences, the neural epigenome and affective disorder risk.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42625033/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42625033/",
        "doi": "https://doi.org/10.1038/s41583-026-01074-w",
        "journal": "Nature reviews. Neuroscience",
        "year": "2026",
        "author": "Cunningham AM",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "동물 모델과 인간 연구를 망라해 초기 스트레스→에피게놈 변화→신경회로 성숙→정신질환 취약성의 경로를 리뷰",
          "DNA 메틸화, 히스톤 PTM, 3D 크로마틴 구조, non-coding RNA의 역할을 세포 유형·뇌 영역·발달 단계별로 정리",
          "말초 에피게놈 바이오마커의 접근 가능성과 치료 응용 가능성 논의"
        ],
        "concepts": [
          "molecular-qtl",
          "noncoding-regulatory-variants",
          "brain-eqtl-grn",
          "neurodevelopmental-trajectory",
          "sex-differences-psychiatric"
        ],
        "tldr": "초기 생애 스트레스가 DNA 메틸화·히스톤 변형·크로마틴 구조 재편을 통해 뇌 발달과 정신질환 취약성을 어떻게 프로그래밍하는지를 종합 리뷰한 논문.",
        "question": "초기 생애 역경이 뇌 에피게놈을 어떻게 재형성하며, 이것이 정동장애(우울·불안 등) 위험을 어떻게 높이는가?",
        "key_result": "초기 역경에 의한 에피게놈 변화는 세포 유형(뉴런 vs 글리아)·뇌 영역·발달 시기에 따라 고도로 특이적이며, 비코딩 RNA도 스트레스 유도 유전자 발현 조절에 기여함이 부각됨.",
        "why_for_us": "랩의 메틸화·단일세포 에피게노믹스·MDD/ASD 관심 영역과 직결. 세포 유형 특이적 메틸레이션 변화와 뇌 eQTL/GRN 연구의 배경 지식으로 활용 가능.",
        "limitations": "리뷰 논문이므로 새로운 데이터 없음; non-coding RNA의 장기적 역할은 아직 불명확하다고 저자 스스로 인정.",
        "reuse": "",
        "next_step": "에피게노믹스·전사체·회로·행동 수준의 통합 접근이 필요하다고 제안."
      },
      {
        "title": "Neurodegeneration as a dysregulation of neuroimmune crosstalk.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42624075/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42624075/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.015",
        "journal": "Cell",
        "year": "2026",
        "author": "Bennett FC",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "신경-면역 크로스토크와 신경퇴행 연결에 관한 기존 연구를 종합 정리",
          "면역세포(미세아교세포 포함)가 뇌 기능과 신경 취약성에 미치는 역할 리뷰",
          "후성유전학적 면역 상태 조절을 치료 표적으로 제안"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "brain-body-immune-circuits"
        ],
        "tldr": "신경퇴행성 질환을 신경-면역 크로스토크의 붕괴로 재해석하는 리뷰. 면역세포가 신경 회복력과 취약성을 능동적으로 조절하며, 면역 항상성 회복이 치료 전략이 될 수 있음을 제안.",
        "question": "신경퇴행성 질환은 단순 뉴런 손상이 아니라 신경-면역 시스템 간 소통 실패인가?",
        "key_result": "신경퇴행성 질환이 보호적 신경-면역 신호의 소실과 부적응적 염증 반응의 활성화에서 비롯된다는 통합 모델을 제시. 면역 항상성 복원, 염증 조절, 후성유전체 표적 치료가 퇴행 지연 및 회복 촉진 가능성을 가짐.",
        "why_for_us": "랩의 neuro(AD·PD·MDD) 및 autoimmune, microglia-neuroimmune 관심과 맞닿으며, 면역-후성유전학 규제를 통한 치료 접근은 멀티오믹스 연구와 연결 가능.",
        "limitations": "리뷰 논문으로 실험적 검증 없음. 구체적 메커니즘보다 광범위한 패러다임 제시에 집중.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Macrophage-mediated refinement of the dural lymphatic regulates social behavior.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42034056/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42034056/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.03.019",
        "journal": "Neuron",
        "year": "2026",
        "author": "Tavares GA",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "마우스 출생 후 배측 경막 림프관의 발달 과정을 시계열로 추적하여, 주변부 림프관과 달리 postnatal critical window 동안 세포사와 대식세포 탐식을 통한 'refinement' 과정이 일어남을 확인",
          "ASD 마우스 모델(BTBR)에서 경막 림프관 refinement 패턴을 야생형과 비교",
          "경막 림프관 refinement 변화와 BTBR 마우스의 ASD 유사 사회성 행동 결함의 연관성을 분석"
        ],
        "concepts": [
          "maternal-immune-activation",
          "microglia-neuroimmune",
          "brain-body-immune-circuits",
          "neurodevelopmental-trajectory"
        ],
        "tldr": "출생 후 경막 림프관은 뇌막 대식세포가 매개하는 정교한 세포사·탐식 과정으로 조각(refinement)되며, 이 과정의 이상이 자폐 스펙트럼 장애(ASD) 마우스 모델에서 사회성 행동 결함과 연관됨을 보임.",
        "question": "경막 림프관은 어떻게 발달 초기에 적절한 구조로 형성되며, 이 과정의 이상이 ASD 표현형과 관련이 있는가?",
        "key_result": "배측 경막 림프관은 출생 후 특정 시기에 뇌막 대식세포에 의한 세포사·탐식으로 정교하게 조각됨; BTBR ASD 모델 마우스에서 이 refinement가 비정상적이며, 이것이 ASD 유사 사회성 행동을 조절하는 새로운 경로임을 시사.",
        "why_for_us": "ASD 병인 연구 중 뇌-면역 접점(뇌막 면역세포-림프계)을 다루는 논문으로, 랩의 ASD·신경발달·microglia/뇌 면역 관심과 연결됨. 멀티오믹스 기반 ASD 병인 연구의 세포생물학적 맥락 제공.",
        "limitations": "인간 데이터 없이 마우스 모델에 국한; BTBR은 ASD의 단일 유전적 모델로 일반화에 한계; 인과관계(refinement 이상 → 행동 결함)의 직접 조작 실험 상세 기술이 초록에 제한적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multimodal evidence for bone lymphatics in skeletal health and repair.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42624078/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42624078/",
        "doi": "https://doi.org/10.1016/j.cell.2026.06.026",
        "journal": "Cell",
        "year": "2026",
        "author": "Yang Y",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "마우스 및 인간 뼈 조직에서 공간 전사체학과 단일세포 RNA 시퀀싱을 통합 적용",
          "이미징 기법으로 뼈 림프관의 공간적 분포와 세포 구성 분석",
          "뼈 림프관을 골 손실 관련 인자가 아닌 골량·재생의 긍정적 조절자로 재규명"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "cell-type-deconvolution"
        ],
        "tldr": "공간 전사체학·단일세포 RNA 시퀀싱·이미징을 통합해 뼈 내 림프관이 골량 유지와 뼈 재생의 긍정적 조절자임을 마우스·인간에서 종합적으로 규명.",
        "question": "뼈의 림프관은 골격 미세환경에서 어떤 역할을 하며, 골량 및 뼈 재생에 어떻게 기여하는가?",
        "key_result": "공간 전사체학으로 Prox1+ 림프관 내피세포가 골격 미세환경 내에 존재함을 확인; 뼈 림프관이 골 재생 과정에서 긍정적 역할을 함을 다중 증거로 제시.",
        "why_for_us": "공간 전사체학 + 단일세포 RNA-seq 통합 분석 방법론 측면에서 파이프라인 참고 가능. 질환 도메인으로는 뼈 관련이라 간접적이나, 멀티모달 오믹스 통합 접근 사례로 유용.",
        "limitations": "초록이 잘려 있어 전체 결과 및 한계 파악 불가.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-08-17",
    "count": 23,
    "papers": [
      {
        "title": "Correlations between causal effect sizes of proximal SNPs vary with functional annotations and implicate stabilizing selection.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42595902/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42595902/",
        "doi": "https://doi.org/10.1038/s41588-026-02712-w",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Zhang MJ",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "SNP 쌍 효과 크기 상관을 LD 기반으로 추정하는 LDSPEC 방법 개발",
          "시뮬레이션으로 방법의 강건성 검증",
          "UK Biobank 70개 질환/형질(평균 N=305,646)에 적용",
          "기능 주석 별 효과 상관 차이 분석",
          "안정화 선택(stabilizing selection) 시뮬레이션으로 패턴 재현"
        ],
        "concepts": [
          "snp-heritability-grm",
          "fine-mapping",
          "partitioned-heritability",
          "genetic-architecture",
          "missing-heritability",
          "credible-set",
          "summary-statistics-methods"
        ],
        "tldr": "인접 SNP 쌍의 인과 효과 크기 상관(SNP-pair effect correlation)을 추정하는 새 방법 LDSPEC을 개발하여 UK Biobank 70개 형질에서 기능 주석과 안정화 선택의 역할을 규명.",
        "question": "같은 염색체 위치 근방 SNP들의 인과 효과 크기는 서로 독립적인가, 아니면 체계적으로 상관되어 있으며 그 패턴은 무엇인가?",
        "key_result": "저빈도 양의 LD SNP 쌍(0-100 bp)에서 -0.37 ± 0.09의 유의한 음의 효과 크기 상관 검출. 동일 기능을 공유하는 SNP 쌍은 더 강한 상관이 더 넓은 거리까지 지속. SNP 유전율 추정치가 실제 인과 효과 분산 합보다 작음. 연결 마스킹(linkage masking)을 통한 안정화 선택으로 패턴 재현.",
        "why_for_us": "SNP 유전율, 파인매핑, LD 구조, 기능 주석 기반 유전율 분할 등 랩의 핵심 방법론과 직결. 인접 SNP 독립성 가정에 의문을 제기하여 fine-mapping 및 heritability 추정에 중요한 시사점.",
        "limitations": "UK Biobank 중심으로 다양한 조상 집단 검증 미흡. 인과 방향성(선택 vs 다른 요인) 완전 구별 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Trans-regulatory gene mapping prioritizes disease drivers in asthma.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42580338/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42580338/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.034",
        "journal": "Cell",
        "year": "2026",
        "author": "Salamone IM",
        "rating": 5,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "트랜스 조절 효과를 매개 분석(mediation) 기반으로 통합하는 통계 프레임워크 DANDELION 개발",
          "질환 관련 조직의 trans-eQTL 효과와 전장 엑솜 시퀀싱(WES) 유전자 부담을 결합",
          "천식에 DANDELION 적용하여 기존 방법으로 탐지 불가능한 신규 DPG 발굴",
          "상피세포·T세포 CRISPR 스크린으로 DPG의 기능적 역할 검증",
          "SLC27A3, SCD 유전자 결손이 마우스 알레르기성 천식 모델에서 염증 및 기도 리모델링에 미치는 영향 확인"
        ],
        "concepts": [
          "molecular-qtl",
          "fine-mapping",
          "rare-variant-collapsing",
          "summary-statistics-methods",
          "noncoding-regulatory-variants",
          "drug-target-genetics"
        ],
        "tldr": "GWAS trans-eQTL 효과와 전장 엑솜 시퀀싱 유전자 부담을 통합하는 DANDELION 프레임워크로 질환 근위 유전자(DPG)를 우선순위화하고, 천식 적용 시 신규 DPG를 발굴·검증.",
        "question": "GWAS 신호의 대부분이 소수의 핵심 질환 유발 유전자를 간접 조절한다는 가설 하에, 이 핵심 유전자를 어떻게 체계적으로 발굴할 수 있는가?",
        "key_result": "DANDELION이 기존 방법 대비 신규 천식 DPG를 다수 발굴. CRISPR 검증에서 대부분 DPG가 천식 관련 세포 표현형 조절. SLC27A3·SCD 결손은 마우스 모델에서 염증·기도 리모델링에 영향.",
        "why_for_us": "trans-eQTL 통합, fine-mapping, 유전자 우선순위화 등 랩 핵심 관심사와 직결. GWAS-to-gene 방법론 및 QTL 통합 분석의 핵심 레퍼런스. WES 부담 분석과 eQTL 결합 접근법은 다양한 질환에 응용 가능.",
        "limitations": "천식이라는 단일 질환에만 적용하여 다른 질환 범용성 검증 필요. trans-eQTL 신호는 인과관계 방향 추론이 어려움.",
        "reuse": "DANDELION 프레임워크는 다른 질환 GWAS+trans-eQTL+WES 데이터에 적용 가능.",
        "next_step": ""
      },
      {
        "title": "AI-based multimodal integration of genomics and electronic health records.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42576006/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42576006/",
        "doi": "https://doi.org/10.1038/s41576-026-00992-w",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Venkatesh R",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "EHR-유전체 통합을 위한 머신러닝·딥러닝 방법론 문헌 리뷰",
          "바이오뱅크 연계 EHR 개발 현황, 데이터 표준화, 모델 아키텍처 평가",
          "임상 적용 및 한계 논의"
        ],
        "concepts": [
          "polygenic-risk-score",
          "phewas",
          "summary-statistics-methods"
        ],
        "tldr": "EHR과 유전체·멀티오믹스 데이터를 통합하는 AI/ML 프레임워크 전반을 리뷰하며, 질환 이질성 이해·바이오마커 발굴·임상 의사결정 지원에서의 가능성과 한계를 평가.",
        "question": "AI/ML이 EHR과 유전체 데이터를 어떻게 통합해 임상·연구적 가치를 높일 수 있는가?",
        "key_result": "고차원·노이즈·시간 불규칙 데이터 처리에서 AI/ML이 전통 통계보다 우수; EHR-유전체 통합이 질환 바이오마커·치료 타깃 발굴과 위험도 예측 개선에 기여함을 체계적으로 정리.",
        "why_for_us": "GWAS/PRS·멀티오믹스 통합 관심사와 직결; EHR 연계 바이오뱅크 활용 연구 설계에 방법론적 참고 자료.",
        "limitations": "리뷰 논문으로 개별 방법론의 실증 성능 직접 비교 없음; 데이터 표준화·개인정보 이슈 상세 논의 부족 가능성.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Simultaneous single-cell profiling of chromatin, transcriptome and surface markers with OneCell CUT&Tag captures epigenomic reprogramming.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42587135/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42587135/",
        "doi": "https://doi.org/10.1038/s41587-026-03259-1",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Schwager A",
        "rating": 4,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "단 1개 세포에서도 작동하는 CUT&Tag 기반 멀티모달 단일세포 방법론(OneCell CUT&Tag) 개발",
          "유방샘 기저세포의 에피게노믹 프라이밍 및 기저→루미날 전환 중 에피게놈·전사체 리모델링 비동기성 분석",
          "접합자(zygotic) 발현 프로그램에서 H3K27me3의 역할 규명",
          "메타셀 집계 없이 세포당 매칭된 멀티모달 데이터 생성"
        ],
        "concepts": [
          "single-cell-eqtl",
          "molecular-qtl",
          "noncoding-regulatory-variants",
          "caQTL"
        ],
        "tldr": "단일 세포 수준에서 히스톤 변형(CUT&Tag), 전사체, 표면 마커를 동시에 측정하는 OneCell CUT&Tag 기법을 개발하여 희귀 세포 집단의 에피게노믹 리프로그래밍을 추적함.",
        "question": "단일 세포 수준에서 크로마틴 상태·전사체·표면 마커를 동시에 고해상도로 측정할 수 있는가?",
        "key_result": "단 1개 세포 입력으로 크로마틴·전사체·표면 마커를 동시 측정; 기저-루미날 전환 중 에피게노믹·전사체 리모델링이 완전히 동기화되지 않음을 실험적으로 입증; H3K27me3가 접합자 발현 프로그램 형성에 기여함을 확인.",
        "why_for_us": "sc-epigenomics와 멀티오믹스 통합에 직접 활용 가능한 방법론; 단일세포 eQTL/caQTL 연구 및 세포 상태별 조절 분석을 위한 데이터 레이어 확장에 핵심 참조 논문.",
        "limitations": "현재 유방샘 및 초기 발생 맥락에서만 검증; 대규모 코호트 적용 가능성 및 멀티플렉싱 성능은 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Characterization of microbial dark matter at scale with MetaSBT and taxonomy-aware Sequence Bloom Trees.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42595818/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42595818/",
        "doi": "https://doi.org/10.1038/s41587-026-03245-7",
        "journal": "Nature biotechnology",
        "year": "2026",
        "author": "Cumbo F",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "Sequence Bloom Tree(SBT)와 Bloom filter 기반 k-mer 인덱싱으로 190,000+ 바이러스 게놈 데이터베이스 구축",
          "7단계 분류학적 수준에서 서열 일관성 클러스터 정의 → 40,000+ 후보 종 식별",
          "기존 정량 메타게노믹 프로파일러와 통합 및 Galaxy 플랫폼 배포"
        ],
        "concepts": [
          "gene-catalogue",
          "taxonomic-profiling",
          "strain-level-profiling",
          "functional-profiling"
        ],
        "tldr": "MetaSBT는 Sequence Bloom Tree를 이용해 19만여 바이러스 게놈을 7단계 분류학적 수준으로 클러스터링하고, 알려지지 않은 미생물(암흑 물질)을 대규모로 동정·정량하는 오픈소스 도구.",
        "question": "메타게놈 조립 게놈(MAG)을 포함한 대규모 미생물 참조 데이터베이스를 효율적으로 인덱싱하고 미지 미생물을 탐지할 수 있는가?",
        "key_result": "정의된 후보 바이러스 종의 약 80%가 기존 참조 데이터베이스에 등록되지 않은 신규 종. 기존 프로파일러와 통합 시 미지 미생물 탐지·정량이 가능해짐.",
        "why_for_us": "메타게노믹스 파이프라인(strain-level profiling, 미지 미생물 카탈로그 구축)에 활용 가능한 도구; gene-catalogue 및 taxonomic-profiling 개념과 직결.",
        "limitations": "현재 시연은 바이러스에 한정; 세균·진균 등 다른 계로 확장 시 성능 검증 필요. 어셈블리 오류·오염 문제가 클러스터 품질에 영향.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Maternal influences on infant gut microbiome and health.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42587158/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42587158/",
        "doi": "https://doi.org/10.1038/s41586-026-10922-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Sinha T",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "714쌍 모자의 임신 12주~출생 후 1년 종단 대변 샘플(4,526개) 메타게놈 시퀀싱",
          "모유·질 마이크로바이옴 초심층 시퀀싱 추가 수행",
          "474개 임상·노출 변수와 통합 분석",
          "균주 수준(strain-level) 전달 추적으로 모자 간 전파 양상 규명",
          "영아 습진 예측 모델로서 모체 장내 마이크로바이옴 평가"
        ],
        "concepts": [
          "strain-level-profiling",
          "functional-profiling",
          "alpha-diversity",
          "beta-diversity"
        ],
        "tldr": "네덜란드 Lifelines NEXT 코호트에서 714쌍의 모자(母子) 대변·모유·질 메타게놈 데이터 4,526개를 종단 분석하여, 모체 장내 마이크로바이옴이 영아 장 마이크로바이옴 형성의 주요 공급원임을 밝혔다.",
        "question": "모체 및 초기 환경 요인이 영아 장내 마이크로바이옴 구성과 건강에 미치는 영향은 어느 정도인가?",
        "key_result": "모체 장내 마이크로바이옴은 영아 장 균주의 주요 공급원이며, 균종 풍부도가 높을수록 전달 가능성이 증가한다. 분만 방식·수유 방식이 영아 마이크로바이옴에 가장 큰 영향을 미쳤다. 모체 장내 마이크로바이옴은 영아 습진 예측인자였다.",
        "why_for_us": "균주 수준 전달 분석 및 종단 메타게놈 통합 방법론이 랩의 metagenomics 분석 파이프라인 구축에 참고 사례가 될 수 있다.",
        "limitations": "단일 코호트(네덜란드 백인 위주)로 일반화에 한계가 있음. 인과관계보다 연관성 수준의 분석.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A cross-organ single-cell analysis of hypertension.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42594205/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42594205/",
        "doi": "https://doi.org/10.1126/science.aea6187",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Qiu Q",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "앤지오텐신 II 처치 마우스, Dahl 소금 민감성 쥐, 자발고혈압 쥐 3종 모델에서 6개 장기·조직의 단일세포 전사체 분석 수행",
          "혈압 및 신장 손상과 연관된 세포 유형별 유전자 프로그램 식별(혈관 평활근세포 보존 프로그램, 신세관 프로그램, 내피세포 적응 등)",
          "인간 유전체 데이터(GWAS)와 통합하여 모델 특이적·공유 세포 유형-형질 연관 우선순위화",
          "비코딩 변이 rs28451064를 게놈 편집으로 검증, 생체내 혈압 및 대립유전자 특이적 유전자 발현 효과 확인"
        ],
        "concepts": [
          "single-cell-eqtl",
          "allele-specific-expression",
          "noncoding-regulatory-variants",
          "variant-to-cell-type",
          "molecular-qtl",
          "gwas-association-testing"
        ],
        "tldr": "고혈압과 말단 장기 손상을 단일세포 수준에서 여섯 개 장기에 걸쳐 분석하고, 인간 GWAS 데이터와 통합해 혈압 조절 세포 유형 및 비코딩 변이를 규명한 멀티모달 연구.",
        "question": "고혈압은 어떤 세포 유형과 유전자 프로그램을 통해 다양한 장기에 손상을 일으키며, 인간 GWAS 변이는 어떤 세포 유형에서 기능하는가?",
        "key_result": "보존된 혈관 평활근세포 프로그램과 신세관 간 조율 프로그램이 고혈압 공통 경로로 확인됨; 비코딩 SNP rs28451064의 생체내 혈압 조절 및 allele-specific 발현 효과를 in vivo 게놈 편집으로 입증.",
        "why_for_us": "단일세포+GWAS 통합(caQTL/eQTL 맥락), allele-specific 발현, 비코딩 변이 기능 검증, 신장(nephro) 세포유형 매핑이 랩의 핵심 관심사인 QTL·fine-mapping·신장 도메인과 직접 연결됨.",
        "limitations": "동물 모델 기반이라 인간 고혈압에 대한 직접적 일반화에 제한이 있음; 일부 결과는 모델 특이적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Shared genetic architecture and therapeutic targets across paediatric immune-mediated diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42575758/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42575758/",
        "doi": "https://doi.org/10.1016/j.ard.2026.07.007",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Li J",
        "rating": 5,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "24개 소아 IMID를 자가면역·폴리제닉자가염증·혼합·알레르기 4개 카테고리로 분류",
          "18,086 케이스 / 131,019 대조군(유럽 혈통) GWAS 수행",
          "SNP 기반 유전력 추정(LDSC), 유전 상관 및 폴리제닉 중첩 분석",
          "부분집합 기반 메타분석으로 39개 MHC 외 게놈 유의 loci 도출 (15개 신규)",
          "기능 주석·유전자 우선순위화·경로·단백질 네트워크 분석",
          "성인 IMID와의 비교 및 Priority Index 기반 약물 타깃 178개 우선순위화"
        ],
        "concepts": [
          "gwas-association-testing",
          "snp-heritability-grm",
          "genetic-correlation",
          "fine-mapping",
          "partitioned-heritability",
          "polygenic-risk-score",
          "drug-target-genetics",
          "credible-set",
          "mixed-model-association",
          "cross-ancestry-transferability"
        ],
        "tldr": "소아 면역매개 염증질환(IMID) 24종에 걸쳐 18,086명 환자와 131,019명 대조군으로 GWAS를 수행, SNP 기반 유전력·유전 상관·폴리제닉 중첩·약물 타깃을 통합 분석해 소아 IMID의 공유 및 카테고리 특이적 유전 구조를 규명.",
        "question": "소아 자가면역·자가염증·알레르기성 IMID 간에 유전 구조가 어떻게 공유되고 분기되며, 이를 치료 타깃으로 어떻게 연결할 수 있는가?",
        "key_result": "알레르기 IMID SNP 유전력 28.9% ~ 자가면역 IMID 61.9%; MHC 외 39개 유의 loci(15개 신규, 19개 카테고리 공유); MHC 중심 항원제시 네트워크·보체·JAK-STAT·PD-1/PD-L1 경로 부각; 178개 고점수 유전자 중 43개가 기승인/임상시험 중 IMID 약물 타깃.",
        "why_for_us": "GWAS·파인매핑·유전력·유전 상관·PRS·약물 타깃 유전학이 랩의 핵심 방법론과 완벽히 일치; 소아 자가면역 및 보체 경로는 랩의 HLA·nephro·autoimmune 관심사와도 연결됨.",
        "limitations": "유럽 혈통에 국한되어 이식성 제한; 소아 연령대의 고품질 데이터 수집 어려움; 기능 검증 실험 미수행.",
        "reuse": "39개 유의 loci 요약통계, 178개 약물 타깃 우선순위 리스트를 후속 colocalization·MR 분석에 활용 가능.",
        "next_step": "다민족 코호트 확장 및 소아 특이적 eQTL과의 colocalization; 기능 검증 실험."
      },
      {
        "title": "Spatially distinct macrophage subsets drive myofibroblast heterogeneity and maladaptive fibrosis in lupus nephritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42595656/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42595656/",
        "doi": "https://doi.org/10.1016/j.ard.2026.07.014",
        "journal": "Annals of the rheumatic diseases",
        "year": "2026",
        "author": "Raparia C",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "AMP-SLE 코호트 156명 LN 바이오프시 + 30명 건강 대조군 단일세포 RNA-seq 분석",
          "6명 LN 환자 바이오프시 공간전사체(spatial transcriptomics) 분석으로 세포 공간 배치 확인",
          "마우스 모델 in vitro 공동배양으로 대식세포→섬유아세포 기능적 영향 검증",
          "세포-세포 통신(CCC) 분석으로 Spp1/integrins, Sema4/PlexinB, NAMPT/INSR 등 주요 리간드-수용체 쌍 동정"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "cell-type-deconvolution",
          "single-cell-eqtl",
          "differential-abundance"
        ],
        "tldr": "루푸스 신염(LN) 인체 바이오프시 156건의 단일세포 RNA-seq와 공간전사체 분석으로 두 근섬유아세포 서브셋(Myofib1/2)이 공간적으로 서로 다른 대식세포와 상호작용하며 신장 섬유화를 조율함을 규명.",
        "question": "루푸스 신염에서 대식세포-섬유아세포 상호작용은 어떻게 신장 섬유화를 공간적으로 다르게 구동하는가?",
        "key_result": "Myofib1(tubulointerstitium 위치, 친염증)은 활성화 상주 대식세포와, Myofib2(사구체 위치, 섬유화/리모델링)는 질환 연관 침윤 대식세포와 공간적으로 공존. 두 서브셋 모두 조직학적 만성지수와 상관. 신염 상주 대식세포는 상처 치유를 저해하는 Myofib1-유사 프로그램 유도.",
        "why_for_us": "랩의 SLE/LN 관심(autoimmune)과 단일세포+공간전사체 멀티오믹스 분석 역량 모두에 해당. 세포유형 디컨볼루션·세포간통신 방법론 적용 사례로 활용 가능.",
        "limitations": "in vitro 공동배양 모델이 복잡한 in vivo 신장 미세환경을 완전히 재현하지 못함; 횡단면 바이오프시 설계로 인과성 한계.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Epigenetic modulation of stromal cell states underpins pathological tissue niches in Crohn's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42587037/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42587037/",
        "doi": "https://doi.org/10.1038/s41590-026-02617-0",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Koplev S",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "인간 크론병 장 전층에서 scRNA-seq, snATAC-seq, 공간 전사체 통합 분석(~250만 세포)",
          "18종 기질세포 상태 동정 및 시토카인 신호 환경과의 공간적 매핑",
          "IF 상태를 안정화하는 전사인자(GLI3, TWIST1, ETV4, PRDM1, RELB) 규명",
          "히스톤 탈아세틸화효소(HDAC) 억제제로 IF 상태를 불안정화시키는 실험 수행"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "spatial-transcriptomics",
          "single-cell-eqtl"
        ],
        "tldr": "크론병 장벽 전층에서 ~250만 세포의 단일세포 공간 전사체·ATAC-seq을 통해 18종 기질세포 상태를 매핑하고, 염증성 섬유아세포(IF) 상태가 후성유전적으로 안정화됨을 규명.",
        "question": "크론병의 병리적 조직 니치에서 기질세포 상태는 어떻게 후성유전적으로 유지되며, 치료적으로 조절 가능한가?",
        "key_result": "IF는 면역세포 풍부 점막 궤양에 위치하며 자발적 복귀가 없는 후성유전적으로 안정화된 상태임; IF와 섬유성 수축성 기질은 별개의 오픈 크로마틴 구성을 가짐; HDAC 억제로 IF 상태 불안정화 및 호중구 활성화 억제 확인.",
        "why_for_us": "단일세포 ATAC-seq과 공간 전사체 통합 분석 방법론; 크론병 기질세포의 후성유전적 조절이라는 주제는 autoimmune 분야와 caQTL/epigenomics 연구에 참조 가능.",
        "limitations": "인간 조직 샘플 기반으로 인과관계 확립에 제한; 치료적 HDAC 억제의 in vivo 효능은 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "In vivo genome-wide CRISPR screens of human T cells in solid tumours.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42587162/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42587162/",
        "doi": "https://doi.org/10.1038/s41586-026-10906-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Liu Q",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "종양 내 인간 T세포 회수율을 높인 새로운 in vivo 이종이식 모델 개발",
          "게놈-와이드 CRISPR KO 스크린 2종 수행: ①종양 내 T세포 abundance 조절인자, ②효과기 기능 조절인자",
          "P2RY8-Gα13 축이 T세포 종양침윤의 음성 조절자임을 확인",
          "GNAS(Gαs 인코딩) KO가 다수의 억제성 GPCR 신호에 대한 T세포 저항성을 부여함을 CAR-T 및 TCR-T 시스템 여러 모델에서 검증",
          "P2RY8 + GNAS 이중 KO로 종양 억제 시너지 확인"
        ],
        "concepts": [
          "molecular-qtl",
          "perturb-seq"
        ],
        "tldr": "인간 T세포를 고형암 마우스 모델에 이식해 종양 내 회수율을 크게 높인 뒤, 게놈-와이드 CRISPR KO 스크린 두 가지를 수행하여 T세포 종양침윤과 효과기 기능의 핵심 조절인자(P2RY8-Gα13, GNAS)를 발굴했다.",
        "question": "고형암 환경에서 인간 T세포의 종양 침윤과 효과기 기능을 제한하는 유전적 조절인자는 무엇인가?",
        "key_result": "GNAS KO는 복수의 억제성 리간드(다중 GPCR 하류 수렴 노드)에 저항성을 부여하며, P2RY8-GNAS 이중 KO는 단독 KO 대비 종양 제어 효능이 유의하게 향상되었다.",
        "why_for_us": "T세포 소진(exhaustion) 및 TME 내 면역억제 기전 연구에 직접 활용 가능한 유전자 목록과 기능 검증 플랫폼을 제공한다. 랩의 cancer immunology(T cell exhaustion·TME) 관심사와 직결된다.",
        "limitations": "마우스 이종이식 모델 기반이라 인간 종양 TME의 복잡한 면역 환경을 완전히 재현하지 못할 수 있음. 스크린이 KO에 한정되어 있어 과발현·조절 전략은 별도 검증 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial analysis of head and neck cancer identifies two ecosystems with distinct modes of epithelial-to-mesenchymal transition.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42601456/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42601456/",
        "doi": "https://doi.org/10.1038/s41588-026-02723-7",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Simkin D",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "HPV 양성/음성 HNSCC 26개 종양에 공간 전사체학 적용",
          "p-EMT edge(침윤 전선 섬유모세포·TGFβ) vs p-EMT core(면역억제 대식세포·호중구·Oncostatin M) 두 생태계 식별",
          "동일 종양 내 여러 샘플 간 패턴 일관성 확인"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "noncoding-regulatory-variants"
        ],
        "tldr": "공간 전사체학으로 두경부암(HNSCC) 26개 샘플의 종양 미세환경 구조를 지도화하고, p-EMT가 두 가지 공간적 패턴(edge vs core)으로 발생함을 발견.",
        "question": "HPV 양성/음성 HNSCC에서 부분 상피-중간엽 전환(p-EMT)이 어떤 세포 상호작용과 공간적 맥락에서 발생하는가?",
        "key_result": "HPV 양성 종양은 과세포밀도·림프구 증가·저산소증·낮은 p-EMT를 보임. p-EMT는 TGFβ 경유 edge형과 Oncostatin M 경유 core형 두 가지 구별되는 공간 패턴으로 존재.",
        "why_for_us": "공간 전사체학 기반 TME 분석 파이프라인 및 암세포·면역세포 상호작용 연구의 방법론 참고 사례. 랩의 cancer immunology/spatial-transcriptomics 관심과 직결.",
        "limitations": "샘플 수 n=26으로 제한적; 기능적 인과관계 검증 미흡.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Rb-driven transcription limits its tumour-suppressive effects in breast cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42587147/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42587147/",
        "doi": "https://doi.org/10.1038/s41586-026-10886-w",
        "journal": "Nature",
        "year": "2026",
        "author": "Watt AC",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "CDK4/6 억제(CDK4/6i) 처리 후 HR+ 유방암 세포에서 비인산화 Rb의 전장 크로마틴 결합 패턴(ChIP-seq)을 분석",
          "Rb가 ER 전사 허브에 통합되는 현상을 환자 유래 이종이식(PDX) 및 임상 HR+ 유방암 샘플에서 검증",
          "KDM5A와 Rb의 상호작용이 ER 표적 유전자 활성화에 기여함을 확인",
          "ESR1 돌연변이(내분비 저항성) 모델에서 Rb 구동 ER 전사 프로그램의 지속 여부 및 CDK4/6i 효능 제한 분석"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "drug-target-genetics"
        ],
        "tldr": "CDK4/6 억제 시 Rb가 세포주기 유전자 억제 외에 에스트로겐 수용체(ER) 전사 허브에 합류해 증식 촉진 유전자 발현을 오히려 활성화하며, 이 현상이 내분비 저항성에서 치료 효능을 제한함",
        "question": "CDK4/6 억제제로 활성화된 비인산화 Rb는 크로마틴과 전사를 어떻게 재편하며, 이것이 유방암 치료 반응에 어떤 영향을 미치는가?",
        "key_result": "CDK4/6i 처리 시 Rb는 세포주기 유전자 프로모터를 억제하는 동시에 ER 풍부 전사 허브에서 에스트로겐 반응 유전자 발현을 촉진함. 이 Rb 구동 ER 전사 프로그램은 증식 촉진성이며, 내분비 민감성 종양에서는 항에스트로겐 병용으로 억제 가능하나, ESR1 돌연변이 내분비 저항성 모델에서는 지속되어 CDK4/6i 효능을 제한함",
        "why_for_us": "ChIP-seq 기반 크로마틴 재편 분석, 전사 조절 메커니즘, 암 유전체 연구 방법론이 랩의 ChIP/ATAC-seq 분석 및 암 도메인 관심과 부합함. 또한 약물 표적 유전학(drug-target genetics) 측면에서 CDK4/6i 내성 기전 이해에 활용 가능",
        "limitations": "기계론적 연구 중심으로 대규모 임상 코호트 검증은 제한적; KDM5A 외 다른 Rb 상호작용 인자 역할은 미탐색",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A novel CAF population coordinates hyper-suppressive regulatory T cell recruitment and localization in lung cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42581185/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42581185/",
        "doi": "https://doi.org/10.1038/s41590-026-02607-2",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Ringham OR",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "원발성 폐 선암종 및 폐 전이 조직에서 단일세포 전사체 분석 수행",
          "CHL1+ imCAF 집단을 신규 동정하고 면역조절·케모카인 신호 프로그램 특성화",
          "공간 전사체로 imCAF와 CXCR3+ Treg의 공간적 공존 확인"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "single-cell-eqtl",
          "cell-type-deconvolution"
        ],
        "tldr": "폐 선암종과 폐 전이암에서 CHL1을 표지로 하는 신규 면역조절 CAF(imCAF) 집단을 단일세포·공간 전사체로 동정하고, 이들이 과억제성 Treg의 모집·위치화를 조율함을 규명",
        "question": "폐암 종양미세환경에서 CAF 서브집단이 어떻게 억제성 면역세포 조율을 통해 면역 억제에 기여하는가?",
        "key_result": "CHL1+ imCAF는 면역조절 및 케모카인 신호 프로그램이 농축된 신규 CAF 서브집단으로, 과억제성 Treg와 공간적으로 공존하며 그 모집·위치화를 조율함",
        "why_for_us": "랩의 암 면역학(TME·T cell exhaustion·면역치료) 관심과 연관; 단일세포·공간 전사체 기반 세포 상태 및 세포 간 상호작용 분석 방법론이 랩 분석 파이프라인과 직결됨",
        "limitations": "초록이 미완성(절단)되어 세부 기능 검증 실험 및 임상적 함의 정보가 불완전함",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Immune surveillance and immune evasion of senescent cells.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42581082/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42581082/",
        "doi": "https://doi.org/10.1038/s41577-026-01335-w",
        "journal": "Nature reviews. Immunology",
        "year": "2026",
        "author": "Garcia-Baucells P",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "노화(senescence) 세포의 면역 감시·제거 메커니즘을 기존 문헌 기반으로 포괄적으로 정리",
          "면역억제 세포 모집, 면역 체크포인트 분자 발현, 항원 제시 억제 등 면역 회피 전략을 분류",
          "조직 특이적·맥락 특이적 면역 감시 과정을 비교 분석",
          "노화 세포 면역 감시의 치료적 조절 가능성 논의"
        ],
        "concepts": [
          "aging-genetics",
          "microglia-neuroimmune"
        ],
        "tldr": "노화 세포(senescent cell)에 대한 면역 감시와 면역 회피 메커니즘을 조직·맥락 특이적으로 정리한 리뷰. 면역 감시 실패가 암·노화 관련 질환을 유발하며, 이를 치료 표적으로 활용할 수 있음을 논함.",
        "question": "노화 세포는 어떻게 면역 감시를 피하고, 이 과정이 노화·암 발병에 어떤 역할을 하는가?",
        "key_result": "노화 세포가 면역억제 세포 모집, 체크포인트 분자 발현, 항원 제시 억제를 통해 면역 회피를 달성하며, 이의 치료적 조절이 암 및 노화 관련 질환 예방·치료에 효과적일 수 있음.",
        "why_for_us": "aging genetics 및 cancer immunology(T cell exhaustion·TME) 관심 분야와 교차. 노화 세포의 면역 회피는 inflammaging, 면역치료 내성 등 랩 관심 주제와 직결됨.",
        "limitations": "리뷰 논문으로 직접 실험 데이터 없음. 일부 면역 세포 집단 및 특정 조직 맥락에서의 노화 감시 연구가 부족함을 저자 스스로 지적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Prevalence and chronology of colibactin-associated mutational processes and their microbiome spectra in Japanese colorectal cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42576026/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42576026/",
        "doi": "https://doi.org/10.1038/s41588-026-02692-x",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Shiba S",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "CRC 조직에 대해 WGS 및 전사체 프로파일링 수행",
          "분변 샘플의 전장 메타게노믹 시퀀싱 수행",
          "해석 가능한 AI를 적용해 마이크로바이옴 기반 CRC 4개 아형 분류",
          "돌연변이 시그니처 SBS88·ID18 분석 및 출생 코호트별 빈도 비교"
        ],
        "concepts": [
          "functional-profiling",
          "taxonomic-profiling",
          "structural-variants-gwas"
        ],
        "tldr": "일본 대장암 코호트에서 WGS+메타게노믹스+AI를 통합해 colibactin 관련 돌연변이 시그니처(SBS88·ID18)가 비과돌연변이 환자의 44.8%에서 조기 클론 사건임을 확인하고, 마이크로바이옴 기반 4가지 CRC 아형을 분류.",
        "question": "일본인 CRC에서 장내 미생물(특히 colibactin 생성균)이 실제로 조기 체세포 돌연변이를 일으키는 원인 인자인가?",
        "key_result": "비과돌연변이 환자의 44.8%에서 SBS88·ID18 시그니처 검출; 1960년대 이후 출생자에서 유의하게 더 빈번; 마이크로바이옴 아형별 임상·분자적 특성 차이 확인.",
        "why_for_us": "메타게노믹스-WGS 통합 분석 및 마이크로바이옴 기반 환자 층화 방법론이 랩의 메타게노믹스·멀티오믹스 통합 관심사와 연결됨. CRC 질환 도메인 협력 과제와도 관련.",
        "limitations": "일본 단일 민족 코호트로 일반화 제한; 인과성 확립을 위한 실험적 검증 부족.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Plasticity of human microglia and brain perivascular macrophages in aging and Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42581323/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42581323/",
        "doi": "https://doi.org/10.1038/s41588-026-02716-6",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Lee D",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "1,607명 기증자의 전전두엽 피질 조직에서 832,505개 골수계 세포를 snRNA-seq으로 프로파일링",
          "6개 서브클래스·13개 전사 서브타입 정의 및 노화·AD 연관 세포 상태 변화 규명",
          "GPNMB 고발현 disease-associated microglia(DAM) 서브타입이 AD 다유전자위험점수와 연관됨을 확인",
          "MITF를 DAM 상태 유지의 상위 조절인자로 동정",
          "APOE-SORL1, APOE-TREM2 신호 쌍을 세포 간 상호작용 분석으로 우선순위 결정",
          "인간 및 마우스 모델에서 TREM2 의존성 신경보호 효과 검증"
        ],
        "concepts": [
          "single-cell-eqtl",
          "brain-cell-atlas",
          "microglia-neuroimmune",
          "partitioned-heritability",
          "polygenic-risk-score",
          "brain-eqtl-grn",
          "variant-to-cell-type"
        ],
        "tldr": "인간 전전두엽 피질에서 83만 개 이상의 골수계 세포를 단일세포 전사체 수준에서 프로파일링하여 노화·AD 진행에 따른 미세아교세포·뇌혈관 주위 대식세포의 세포 상태 변화 및 조절 기전을 규명",
        "question": "노화와 AD 병리 진행에 따라 인간 미세아교세포 및 뇌혈관 주위 대식세포는 어떻게 적응적으로 변화하며, 그 상위 조절자와 세포 간 신호는 무엇인가?",
        "key_result": "GPNMB+ DAM 서브타입은 AD 병리와 함께 확장되고 탐식 활성이 증가하며 AD 다유전자위험에 농축됨; TREM2 제거 시 신경보호 효과 소실; MITF가 해당 미세아교세포 상태 유지의 핵심 전사인자로 확인됨",
        "why_for_us": "단일세포 전사체로 AD 관련 세포 서브타입을 발굴하고 GWAS 다유전자위험(partitioned heritability/fine-mapping)과 연결한 구조가 랩의 single-cell eQTL·colocalization·neuro 관심과 직접 맞닿음. DAM-AD PRS 연관성은 cell-type-specific partitioned heritability 분석의 레퍼런스로 활용 가능",
        "limitations": "단면적 스냅샷 설계로 인과 방향 추론 제한; 전전두엽 피질 단일 뇌 영역에 국한; 공간적 세포 배치 정보 부분적",
        "reuse": "832,505개 골수계 세포 단일세포 전사체 데이터(1,607명)가 공개될 경우 세포유형별 eQTL·partitioned heritability 분석에 재활용 가능; 초록에 데이터 공개 여부 명시 없음",
        "next_step": ""
      },
      {
        "title": "PLCG2 downregulation impairs synaptic function and increases Alzheimer's disease hallmarks in neuronal cultures.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42601455/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42601455/",
        "doi": "https://doi.org/10.1038/s41588-026-02709-5",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Coulon A",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "쥐 1차 신경세포 배양에서 Plcg2 발현 억제 후 수상돌기 형태·시냅스 기능 평가",
          "인간 신경세포 배양(hNCs)에서 PLCG2 LoF의 Aβ 및 Tau 인산화 효과 측정",
          "PLCG2 매우 희귀 LoF 변이와 AD 위험(OR ~10)의 연관성 분석",
          "snRNA-seq으로 PLCG2 발현 감소 시 경로 변화(뉴렉신 경유 시냅스 기능) 확인"
        ],
        "concepts": [
          "rare-variant-collapsing",
          "de-novo-variants",
          "single-cell-eqtl",
          "dendritic-spine-plasticity",
          "noncoding-regulatory-variants"
        ],
        "tldr": "PLCG2 기능상실 변이가 신경세포 시냅스 기능 손상 및 아밀로이드-β·Tau 인산화 증가를 통해 알츠하이머병 위험을 약 10배 높임을 다층적으로 입증.",
        "question": "AD 유전 위험 유전자 PLCG2의 기능상실이 시냅스 및 Aβ/Tau 병리에 어떤 영향을 미치는가?",
        "key_result": "PLCG2 LoF 보유자는 AD 위험 약 10배 증가. LoF 돌연변이(R953*)는 hNCs에서 시냅스 기능 손상 및 Aβ·Tau 병리 악화. snRNA-seq에서 시냅스 관련 경로 하향 조절.",
        "why_for_us": "AD GWAS 유전 위험 유전자의 기능 검증, 희귀 변이 분석, single-cell RNA-seq 활용이 랩의 GWAS/rare variant/single-cell/neuro 관심과 직결.",
        "limitations": "동물·배양 세포 모델 기반으로 인체 뇌 in vivo 검증 미흡. 샘플 수 제한.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genetic clusters of BMI reveal symptom-specific causal effects on depression.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42595834/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42595834/",
        "doi": "https://doi.org/10.1038/s41380-026-03830-x",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Sheir S",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "324개 BMI 연관 SNP를 PheWAS 기반 클러스터링으로 6개 유전적 클러스터로 분류",
          "PHQ-9 9개 우울 증상 GWAS 메타분석(N=224,535~308,421)에 대해 클러스터별 MR 수행",
          "다중 MR 추정량(IVW, pleiotropy-robust) 비교 및 FDR 보정"
        ],
        "concepts": [
          "mendelian-randomization",
          "phewas",
          "gwas-association-testing",
          "genetic-correlation",
          "summary-statistics-methods"
        ],
        "tldr": "BMI의 우울증 증상에 대한 인과효과를 PheWAS 기반 MR 클러스터링(PWC-MR)으로 분해한 결과, BMI→우울증 효과의 핵심은 식욕 변화이며, 우울한 기분·자살 관념에는 효과가 없거나 일관되지 않음.",
        "question": "BMI는 어떤 우울 증상을 인과적으로 유발하는가, 그리고 다면발현(pleiotropic) 편향은 어느 정도인가?",
        "key_result": "6개 클러스터 모두에서 BMI→식욕변화 효과가 가장 크고 일관됨(β=0.19~0.34). 집중력·피로·무쾌감·수면 변화에는 소규모 효과가 있으나 클러스터 간 이질적이고 다면발현-강건 추정량에서 약화됨. 우울한 기분·자살 관념에는 효과 증거 없음.",
        "why_for_us": "PWC-MR은 MR 도구변수를 표현형 유사성으로 클러스터링하여 수평 다면발현을 탐지하는 방법론으로, 랩의 MR·fine-mapping·PheWAS 파이프라인에 직접 적용 가능.",
        "limitations": "PHQ-9 기반 증상 정의의 한계; 클러스터 구성 자체가 완벽하지 않을 수 있으며 exclusion restriction 위반 가능성 존재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Senescent microglia with shortened telomeres secrete soluble DLK1 to induce aging-associated hypomyelination and neuronal dysfunction.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42580340/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42580340/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.07.021",
        "journal": "Neuron",
        "year": "2026",
        "author": "Liu B",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "텔로미어 단축 마우스 뇌에서 snRNA-seq으로 세포 유형별 노화 경로 분석",
          "iPSC 유래 인간 미세아교세포 노화 모델에서 DLK1을 신규 노화 관련 리간드로 동정",
          "마이크로글리아 제거(depletion) 실험으로 sDLK1 분비의 미세아교세포 기원 확인",
          "in vivo sDLK1 과발현 실험으로 수초화 저해 및 희소돌기아교세포 계통 진행 차단 확인",
          "인간 iPSC 시스템에서 sDLK1이 희소돌기아교세포 성숙 저해 및 흥분성 뉴런 칼슘 신호 변화 확인"
        ],
        "concepts": [
          "aging-genetics",
          "microglia-neuroimmune",
          "brain-cell-atlas"
        ],
        "tldr": "텔로미어 단축 마우스에서 노화된 미세아교세포가 분비하는 sDLK1이 수초화 장애와 신경세포 기능 저하를 유발함을 snRNA-seq 및 iPSC 모델로 규명.",
        "question": "생리적 뇌 노화와 신경퇴행 사이를 잇는 세포·분자 메커니즘은 무엇인가?",
        "key_result": "sDLK1은 텔로미어 단축·자연 노화 마우스 뇌척수액에서 증가하며, 미세아교세포 제거 시 소실됨. sDLK1 과발현은 수초화 저해 및 희소돌기아교세포 성숙 차단을 유발하고 뉴런 칼슘 신호에도 영향을 미침.",
        "why_for_us": "single-cell RNA-seq(snRNA-seq) 분석, 미세아교세포-신경면역 축, 뇌 노화·신경퇴행 메커니즘 연구와 직결. neuro 도메인 및 aging-genetics, microglia-neuroimmune 위키 개념과 연관.",
        "limitations": "텔로미어 단축 마우스는 가속 노화 모델로 자연 노화와 완전히 동일하지 않을 수 있음. sDLK1의 직접 수용체 및 신호 전달 경로가 완전히 규명되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Brain perivascular macrophages regulate endothelial cell function via a cMAF-dependent transcriptional program in mouse and human.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42600613/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42600613/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.043",
        "journal": "Cell",
        "year": "2026",
        "author": "Brioschi S",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "단일세포 멀티오믹스(scRNA+ATAC)로 혈관주위 대식세포 전사인자 cMAF 동정",
          "마우스에서 cMAF 조건부 결손 후 뇌동맥 전사 변화 분석",
          "인간 혈관주위 대식세포에서 cMAF 보존성 확인",
          "AD 환자 및 APOE4 보유자에서 cMAF-IGF1 반응 변화 분석",
          "cMAF 다형성과 AD 보호 효과 탐색"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "single-cell-eqtl",
          "protective-alleles",
          "brain-eqtl-grn"
        ],
        "tldr": "단일세포 멀티오믹스로 뇌 혈관주위 대식세포의 핵심 전사인자 cMAF를 규명하고, cMAF-IGF1 축이 뇌혈관 기능 조절 및 AD 보호에 기여함을 마우스·인간에서 확인.",
        "question": "뇌 혈관주위 대식세포의 전사 프로그램과 뇌혈관 기능 조절, 알츠하이머병에서의 역할은 무엇인가?",
        "key_result": "cMAF는 혈관주위 대식세포 표현형 유지 핵심 인자. cMAF→IGF1→내피세포 통신 축 확인. AD에서 cMAF·IGF1 상향조절되나 APOE4 보유자에선 이 반응 소실. cMAF 다형성이 AD 보호 증거 제시.",
        "why_for_us": "단일세포 멀티오믹스, 뇌 면역세포(미세아교세포 유사 맥락), AD 유전변이 기능 해석이 랩의 관심 영역과 겹침.",
        "limitations": "인과관계 확인을 위한 APOE4 메커니즘 미규명. cMAF 다형성 분석은 예비적 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A novel method to disentangle tightly linked risk and resilience genes for brain disorders: application to Alzheimer's disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42587009/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42587009/",
        "doi": "https://doi.org/10.1038/s41380-026-03814-x",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Barnett EJ",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "고위험 미발병 개인을 발병 개인과 구분하면서 저위험 패턴은 역학습(adversarial learning)하는 멀티태스크 신경망 모델 개발",
          "시뮬레이션 데이터 및 기존 AD 데이터셋에 적용하여 회복력 마커 우선순위화",
          "회복력 점수를 생성하고 다유전자위험점수(PRS)와의 연관성 분석",
          "회복력 연관 SNP 5개 동정"
        ],
        "concepts": [
          "polygenic-risk-score",
          "protective-alleles",
          "genetic-architecture",
          "missing-heritability"
        ],
        "tldr": "적대적 멀티태스크 신경망을 이용해 알츠하이머병(AD)에서 위험도와 분리 가능한 유전적 회복력(resilience) 마커를 식별하는 새로운 방법을 개발함.",
        "question": "높은 유전적 위험도를 가지면서도 발병하지 않는 개인에서 저위험과 구별되는 유전적 회복력 마커를 어떻게 찾을 수 있는가?",
        "key_result": "시뮬레이션에서 기존 접근법 대비 민감도·특이도 유의하게 향상; AD 데이터에서 PRS와 독립적인 유전적 회복력 점수 생성; 기존 AD 연관 변이 포함 5개 SNP가 회복력과 연관; 고위험군에서 PRS 예측을 회복력 점수가 수정 가능함 확인.",
        "why_for_us": "PRS와 보호 변이 연구에 직접 연관되는 방법론; AD 유전 위험도 정밀화 및 protective allele 탐색과 맞닿는 연구.",
        "limitations": "소규모 AD 데이터셋 적용 결과로 일반화 제한; 회복력 SNP의 기능적 검증은 초록에 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Modeling maternal immune activation in 3D ex vivo human fetal brain cerebroids reveals IL-17A-driven disruption of cortical development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42581194/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42581194/",
        "doi": "https://doi.org/10.1038/s41593-026-02400-2",
        "journal": "Nature neuroscience",
        "year": "2026",
        "author": "Assir MZK",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 태아 전전두엽 피질 조직으로 3D ex vivo cerebroid 배양 시스템 개발",
          "IL-17A 처리 후 피질 구조·두께·신경발생·신경성숙 변화 관찰",
          "세포외기질·프로테오글리칸 경로 전사체 분석",
          "신경줄기세포에서 NF-κB 신호 활성화 확인 및 parthenolide 억제 효과 검증"
        ],
        "concepts": [
          "maternal-immune-activation",
          "neurodevelopmental-trajectory",
          "microglia-neuroimmune"
        ],
        "tldr": "인간 태아 전전두엽 피질 유래 3D ex vivo 'cerebroid' 모델에서 IL-17A가 NF-κB 신호를 통해 피질 발달을 교란함을 보여줌으로써 모체 면역 활성화(MIA)의 인간 피질 발달 영향 기전을 규명",
        "question": "모체 면역 활성화 시 IL-17A가 인간 피질 발달을 어떻게 교란하며, 그 분자적 기전은 무엇인가?",
        "key_result": "IL-17A는 조기 피질 주름 형성, 피질 두께 증가, 신경발생 가속을 유도하며, 세포외기질 관련 유전자(프로테오글리칸 등) 상향조절과 NF-κB 지속 활성화를 통해 이를 매개함; parthenolide 투여로 이상 표현형 역전",
        "why_for_us": "MIA-ASD/신경발달장애 연결고리를 인간 조직 모델로 검증한 연구로, 랩의 maternal-immune-activation 및 neurodevelopmental-trajectory 관심 영역과 부합; 향후 ASD GWAS 신호의 세포·발달 단계 매핑에 참고 가능",
        "limitations": "ex vivo 태아 조직 모델로 in vivo MIA 전체 복잡성을 재현하지 못할 수 있음; 샘플 수·공여자 이질성 정보가 초록에 구체적으로 명시되지 않음",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-08-09",
    "count": 29,
    "papers": [
      {
        "title": "FNIP1 variants are associated with favourable metabolism in 1 million humans.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557317/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557317/",
        "doi": "https://doi.org/10.1038/s41586-026-10864-2",
        "journal": "Nature",
        "year": "2026",
        "author": "Hindy G",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "미국·유럽·아시아 1,032,116명 엑솜 시퀀싱 데이터로 TG:HDL 비율과 희귀 단백질 코딩 변이의 연관분석 수행",
          "유의미한 59개 독립 유전자 동정 (P < 5×10⁻⁷)",
          "FNIP1 초희귀 단백질 절단 변이 보유자의 심대사질환 위험 추정 (allele frequency 0.01%)",
          "FNIP1 knockdown 인간 일차 간세포 실험 및 마우스 Fnip1/Fnip2/Flcn 복합 knockdown 고지방식이 모델 기능 실험"
        ],
        "concepts": [
          "rare-variant-collapsing",
          "drug-target-genetics",
          "mendelian-randomization",
          "genetic-architecture"
        ],
        "tldr": "100만 명 엑솜 시퀀싱으로 에너지 대사 지표(TG:HDL)와 연관된 희귀 단백질 코딩 변이를 발굴하고, FNIP1 기능소실 변이가 심대사질환 위험을 ~60% 낮춘다는 것을 유전체·기능 실험으로 규명했다.",
        "question": "희귀 엑솜 변이가 인간 에너지 대사에 어떤 영향을 미치며, 새로운 치료 표적을 제공하는가?",
        "key_result": "FNIP1 단백질 절단 변이 보유자는 TG:HDL 비율·간 지방·혈당이 낮고 심대사질환 오즈비가 ~60% 감소; 59개 연관 유전자 중 23개(39%)가 이미 승인·임상단계 약물 표적; 마우스 실험에서 Fnip1 복합 knockdown은 체중 증가 억제, 간 지방 감소, 인슐린 감수성 향상 확인.",
        "why_for_us": "희귀 변이 기반 대규모 엑솜 연관분석(rare-variant collapsing) 방법론과 drug-target genetics, mendelian-randomization 응용 사례; 심대사 표현형 QTL-MR 연구 설계 참고 가능.",
        "limitations": "TG:HDL이 에너지 대사의 대리 지표라는 가정에 의존; FNIP1 초희귀 변이 보유자 수가 적어 통계적 불확실성 존재; 마우스 모델이 인간 생리를 완전히 반영하지 않을 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A complete diploid human genome benchmark for personalized genomics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42561913/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42561913/",
        "doi": "https://doi.org/10.1016/j.cell.2026.06.016",
        "journal": "Cell",
        "year": "2026",
        "author": "Hansen NF",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "HG002 이배체 게놈의 T2T 완전 벤치마크 생성(기존 대비 +701.4 Mb 상염색체 + 216.8 Mb 성염색체)",
          "모계·부계 각 하플로타입에 단백질코딩 유전자 주석(19,956 / 19,190개)",
          "리드 정확도·페이즈드 변이 콜셋·어셈블리 정확도를 이배체 참조에 대해 평가하는 새로운 방법 개발",
          "de novo 어셈블리 vs. 변이 호출 정확도 전장유전체 비교"
        ],
        "concepts": [
          "reference-genome",
          "haplotype-phasing",
          "structural-variants-gwas",
          "variant-calling"
        ],
        "tldr": "HG002 게놈의 텔로미어-to-텔로미어(T2T) 완전 이배체 벤치마크를 구축해 기존 벤치마크에서 빠졌던 701.4 Mb 서열을 포함시키고, de novo 조립이 변이 호출 정확도를 1-2 자릿수 수준으로 능가함을 보였다.",
        "question": "반복서열·구조다형 영역 포함 전체 게놈에 걸쳐 정확한 변이 호출·어셈블리 평가를 가능케 하는 이배체 벤치마크를 어떻게 만들 수 있는가?",
        "key_result": "de novo 어셈블리는 기존 변이 호출 대비 2~7% 더 많은 서열을 해결하고 정확도를 한 자릿수 수준으로 능가함; 벤치마크가 전체 게놈의 99.4%를 커버",
        "why_for_us": "T2T 참조패널 및 CNV/SV 임퓨테이션 아이디어(ref_panels_using_T2T)와 직결되며, GWAS·QTL 분석에서 반복·구조다형 영역 변이 호출의 한계를 극복하는 기반이 됨",
        "limitations": "단일 샘플(HG002) 기반이라 집단 다양성 반영 부족; 모든 분석 파이프라인이 T2T 벤치마크와 호환되지 않을 수 있음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Why studying females reveals more about aging: The reproductive resilience hypothesis for the evolution of sex-specific aging.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42561912/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42561912/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.013",
        "journal": "Cell",
        "year": "2026",
        "author": "Singh P",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "길항적 다면발현(AP)·소모성 체세포(DST) 이론의 성별 특이적 한계 검토",
          "생식 탄력성 가설(RRH) 제안: 장기 생존·돌봄이 생식 성공에 필요할 때 자연선택이 생식과 체세포 유지를 함께 강화",
          "성숙 연령·임신·수유·폐경을 노화 연구에 통합해야 한다는 생애사적 프레임 제시",
          "'생식 탄력성 상실'을 암컷 노화의 성별 특이적 특징(hallmark)으로 규정"
        ],
        "concepts": [
          "aging-genetics",
          "sex-differences-genetics",
          "liability-threshold-model"
        ],
        "tldr": "기존 노화 진화이론(길항적 다면발현, 소모성 체세포)이 암컷의 장수를 설명하지 못한다는 점을 지적하고, 생식과 장수가 함께 선택된다는 '생식 탄력성 가설(RRH)'을 제안한다.",
        "question": "왜 암컷은 더 큰 생식 투자에도 불구하고 수컷보다 오래 사는가, 그리고 생식 사건은 성별 특이적 노화를 어떻게 조율하는가?",
        "key_result": "진사회적(eusocial) 여왕 사례처럼 높은 생식력과 장수가 공존하는 현상을 RRH로 설명; 생식 감퇴 후 전신 노화가 가속된다는 관찰 기반 논증 제시",
        "why_for_us": "성별 차이 유전학(sex-differences-genetics)·노화 유전학(aging-genetics) 연구 관심과 맞닿으며, 노화 관련 질환 GWAS·PRS 설계 시 성별 층위를 고려해야 한다는 시각을 제공",
        "limitations": "경험적 실험 데이터 없이 이론·관찰 기반 가설 논문; 인과 메커니즘에 대한 직접 검증 부재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Embracing non-linearity in human ageing.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42547527/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42547527/",
        "doi": "https://doi.org/10.1038/s41576-026-00993-9",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Grolaux R",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "노화 연구에서 선형 모델의 한계를 개념적으로 검토",
          "발달, 청소년기, 고령기 등 생애 주기별 생물학적 재편 사건의 증거를 정리",
          "비선형 노화 과정을 포착하기 위한 기존 분석 방법론(예: 전환 상태 모델, 동적 시스템) 개요 제시",
          "향후 노화 연구를 위한 방법론적 고려사항 논의"
        ],
        "concepts": [
          "aging-genetics",
          "genetic-architecture"
        ],
        "tldr": "노화 과정의 비선형적 전환 상태(transition state)를 포착하기 위한 분석 프레임워크와 연구 방향을 제안하는 Perspective.",
        "question": "선형 모델로는 포착하지 못하는 노화의 비선형적 전환 상태를 어떻게 식별하고 분석할 수 있는가?",
        "key_result": "노화는 선형적 감퇴가 아니라 생물학적 재편이 집중되는 특정 전환 창(window)으로 구성되며, 개입(intervention)이 효과적인 시기가 존재함을 강조.",
        "why_for_us": "랩의 aging 관심 영역과 직결. 멀티오믹스·통계유전학 분석 시 비선형 모델 적용 가능성 및 aging GWAS/QTL 설계에 시사점.",
        "limitations": "Perspective 논문으로 실증 데이터 없음; 구체적 분석 방법론보다 개념 정리에 집중.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "An expanded codebook of human transcription factor DNA-binding specificity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557334/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557334/",
        "doi": "https://doi.org/10.1038/s41586-026-10798-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Jolma A",
        "rating": 3,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "332개의 추정·미특성화 인간 TF를 대상으로 4,000건 이상의 in vitro 및 in vivo 실험 수행",
          "복수의 실험적 접근법(여러 체외·세포내 assay)을 통해 결합 모티프 결정",
          "확인된 모티프를 세포 내 ChIP/ATAC 등 결합 부위 데이터와 대조하여 in vitro 모티프의 세포 내 예측력 검증",
          "프로모터 영역 집중도 및 유전자 발현 예측력 분석"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "crispr-enhancer-mapping",
          "mpra",
          "caQTL"
        ],
        "tldr": "332개의 미지·미특성화 인간 전사인자(TF)의 DNA 결합 서열 특이성을 대규모 체계적 실험('Codebook')으로 결정하여, 약 130개의 새로운 결합 모티프를 발굴하고 인간 게놈 수만 곳의 미지 보존 TF 결합 부위를 규명.",
        "question": "수백 개의 미특성화 인간 TF의 DNA 결합 서열 특이성을 체계적으로 어떻게 결정할 수 있는가?",
        "key_result": "332개 TF 중 177개(53%)에 대해 모티프를 확보하여 인간 TF 서열 인식 사전을 ~130개 신규 모티프만큼 확장. In vitro 모티프는 세포 내 결합 부위에서 강력히 농축되며, 수만 곳의 새로운 보존 TF 결합 부위(주로 프로모터)가 유전자 발현과 연관됨.",
        "why_for_us": "noncoding 조절 변이, caQTL, ATAC-seq/ChIP-seq 분석, cis-regulatory element 해석 등 랩의 규제 유전체학 연구에서 TF 모티프 데이터베이스는 핵심 참고 자원. 새로운 Codebook은 fine-mapping 후 기능 주석 및 MPRA 해석에 직접 활용 가능.",
        "limitations": "전체 TF의 절반 수준만 모티프 확보 성공(47% 미확보). 세포 유형·맥락 의존적 TF 결합의 역동성은 충분히 포착되지 않을 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Multidisciplinary Delphi consensus statement on minimal standards for clinical metadata and end points in microbiome studies.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42547826/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42547826/",
        "doi": "https://doi.org/10.1038/s41575-026-01229-1",
        "journal": "Nature reviews. Gastroenterology & hepatology",
        "year": "2026",
        "author": "Schierwagen R",
        "rating": 3,
        "emoji": "🦠",
        "domain": "마이크로바이옴",
        "what_they_did": [
          "Horizon Europe HMA 컨소시엄 내 2라운드 Delphi 설문 진행(1라운드 72명, 2라운드 61명 전문가 참여, 85% 참여율)",
          "메타데이터 수집, 샘플링 절차, 데이터 생성·공유, 표준 운영 절차 영역에서 합의 도출"
        ],
        "concepts": [
          "amplicon-vs-shotgun",
          "functional-profiling",
          "taxonomic-profiling"
        ],
        "tldr": "Horizon Europe HMA 컨소시엄의 72명 전문가 Delphi 합의로 도출한 장내 마이크로바이옴 임상 연구 표준화를 위한 15개 권고안",
        "question": "마이크로바이옴 임상 연구에서 메타데이터·샘플링·데이터 생성·공유의 최소 표준을 어떻게 정의할 수 있는가?",
        "key_result": "15개 핵심 권고안 도출; 주로 장내 마이크로바이옴 및 위장관·장기축 관련 질환에 초점; 연구 간 일관성·재현성 향상을 위한 최소 메타데이터 세트 및 표준 프로토콜 제시",
        "why_for_us": "랩의 메타게노믹스·마이크로바이옴 연구 설계 및 데이터 수집 시 참고할 수 있는 커뮤니티 표준 제공",
        "limitations": "컨센서스 기반으로 실제 구현 가이드라인은 각 기관이 별도로 마련해야 함; 장내 마이크로바이옴 중심으로 다른 신체 부위 마이크로바이옴은 범위 제한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Finerenone in Persons with Chronic Kidney Disease without Diabetes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42246672/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42246672/",
        "doi": "https://doi.org/10.1056/NEJMoa2604625",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Heerspink HJL",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "eGFR 25~90 ml/min/1.73m² 범위의 당뇨병 없는 CKD 성인 1,584명을 finerenone군(793명) vs. 위약군(791명)으로 무작위 배정",
          "32개월 추적 후 eGFR 변화율을 1차 결과지표로 분석"
        ],
        "concepts": [],
        "tldr": "당뇨병 없는 CKD 성인에서 finerenone(비스테로이드성 미네랄코르티코이드 수용체 길항제)이 위약 대비 eGFR 감소 속도를 유의하게 늦춘 32개월 RCT 결과.",
        "question": "당뇨병이 없는 CKD 환자에서 finerenone이 신장 보호 효과를 나타내는가?",
        "key_result": "finerenone군이 위약군 대비 eGFR 감소 속도가 유의하게 느렸음(구체적 수치는 초록에 일부 생략); 기저 평균 eGFR 46.8±16.2 ml/min/1.73m².",
        "why_for_us": "CKD 랩 관심 영역에 직결되는 임상시험으로, 신장 보호 약물의 효과 및 기저 유전·오믹스 바이오마커와의 연계 가설 수립에 참고 자료로 활용 가능.",
        "limitations": "당뇨병 없는 CKD 환자 한정이므로 일반화에 주의; 장기 결과(5년 이상) 데이터 부재; 초록에 세부 위험비 수치 일부 미기재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Tissue-resident immune cells drive genetic risk in autoimmune and lung diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42547572/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42547572/",
        "doi": "https://doi.org/10.1038/s41590-026-02596-2",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Schmiedel BJ",
        "rating": 5,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "폐 조직에서 분리한 29개 면역세포 아형에 대해 단일세포 eQTL 분석 수행",
          "폐 질환(천식·COPD 등) 및 전신·장기 특이적 자가면역 질환 GWAS 신호와 eQTL colocalization 분석",
          "ZFP57 등 복수 자가면역 질환에 공유된 coloc 유전자 식별",
          "결과를 lung.dice-database.org 공개 데이터베이스로 제공"
        ],
        "concepts": [
          "single-cell-eqtl",
          "colocalization",
          "molecular-qtl",
          "fine-mapping",
          "gwas-association-testing",
          "noncoding-regulatory-variants",
          "variant-to-cell-type"
        ],
        "tldr": "폐 조직 상주 면역세포 29개 아형에서 단일세포 eQTL 분석을 수행하고, 폐 질환·자가면역 질환 GWAS 신호와 coloc하여 질환 변이가 세포 유형 특이적으로 작동함을 규명.",
        "question": "폐 조직 상주 면역세포의 eQTL과 자가면역·폐 질환 GWAS 신호를 colocalize하면, 질환 위험 변이가 어떤 세포 유형에서 어떤 유전자에 작용하는가?",
        "key_result": "질환 연관 변이는 대부분 단일 혹은 소수 세포 유형에서만 eQTL 효과 보임. ZFP57이 복수 자가면역 질환과 유의한 coloc → 공유 유전 기전 시사. 폐 조직 면역세포가 자가면역 GWAS 위험 변이의 주요 기능적 맥락임을 실증.",
        "why_for_us": "랩의 핵심 관심사(single-cell eQTL, colocalization, autoimmune GWAS, 세포 유형 특이적 QTL)를 정면으로 다루는 논문; 방법론·데이터베이스 모두 직접 활용 가능.",
        "limitations": "폐 조직 상주 면역세포에 한정되어 다른 조직 또는 순환 면역세포로의 일반화 필요; 단일세포 eQTL의 통계적 검정력이 세포 수 적은 아형에서 제한적일 수 있음.",
        "reuse": "lung.dice-database.org에서 폐 면역세포 eQTL 데이터 공개 활용 가능",
        "next_step": ""
      },
      {
        "title": "Sex-dependent mechanisms in rheumatic diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42547810/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42547810/",
        "doi": "https://doi.org/10.1038/s41584-026-01405-2",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Volkmann ER",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "류마티스 질환에서 성별 차이에 관여하는 면역세포 및 비면역세포의 기능 차이를 문헌 종합",
          "성호르몬, 성염색체(X-inactivation 포함), 항바이러스 면역반응, 장내 미생물, 유전·후성유전 변이가 성별 차이에 미치는 영향을 체계적으로 정리",
          "성별 특이적 예방·치료 전략 가능성 논의"
        ],
        "concepts": [
          "sex-differences-genetics",
          "molecular-qtl",
          "noncoding-regulatory-variants"
        ],
        "tldr": "류마티스 질환에서 성별 차이를 유발하는 면역·비면역 세포 메커니즘, 성호르몬, 성염색체, 장내 미생물, 유전·후성유전 변이의 역할을 종합 리뷰한 논문.",
        "question": "류마티스 질환에서 여성과 남성 간의 유병률·임상표현형·치료반응 차이를 만드는 생물학적 기전은 무엇인가?",
        "key_result": "성호르몬과 장내 미생물 축이 류마티스 질환의 성별 차이를 매개하는 핵심 경로로 부각; 면역조절 외에 호르몬 경로·마이크로바이옴을 표적으로 한 예방적 치료 전략이 제안됨.",
        "why_for_us": "랩의 autoimmune(RA·lupus) 및 sex-differences-genetics/sex-differences-psychiatric 관련 연구에 배경 지식을 제공; 유전·후성유전 변이와 성별 상호작용은 GWAS/eQTL 연구 설계 시 교란 변수 및 층화 변수로 중요.",
        "limitations": "리뷰 논문으로 새로운 실험 데이터 없음; 인과 기전 규명보다 상관 관계 정리에 초점.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Interplay between genetic and environmental risk factors in multiple sclerosis: what have we learned?",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41889330/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41889330/",
        "doi": "https://doi.org/10.1093/brain/awag111",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Jacobs BM",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "230개 이상 MS 관련 GWAS 변이를 포함한 기존 문헌 종합 리뷰",
          "MR 및 colocalization 연구 결과(비타민D, BMI→MS) 평가",
          "EBV 감염·흡연·비타민D 결핍의 에피유전체 변화(DNA 메틸화, 히스톤 아세틸화) 증거 정리",
          "전사체 기반 MS 위험 실현 경로 분석"
        ],
        "concepts": [
          "gwas-association-testing",
          "mendelian-randomization",
          "colocalization",
          "noncoding-regulatory-variants",
          "partitioned-heritability",
          "molecular-qtl"
        ],
        "tldr": "다발성경화증(MS)에서 GWAS, MR, colocalization, 후성유전학, 전사체학을 통합한 유전-환경 상호작용 리뷰; 비타민D·BMI·EBV 등 환경 요인과 유전 위험의 세포유형 특이적 에피유전체 접점을 조망함.",
        "question": "MS에서 유전적 위험 변이와 환경 요인(비타민D, 비만, EBV 등)이 어떻게 상호작용하여 발병 위험을 조절하는가?",
        "key_result": "MS 위험과 비타민D·BMI 간 MR 기반 인과적 연관성 확립; EBV·흡연·비타민D 결핍이 MS 관련 유전자 좌의 에피유전체를 세포유형 특이적으로 변형함. MHC를 제외한 유전-환경 통계적 상호작용은 여전히 제한적.",
        "why_for_us": "GWAS/MR/colocalization 방법론, 에피유전체(메틸화), 세포유형 특이적 규제 변이 분석 모두 랩 핵심 관심사와 직결; autoimmune 도메인 MS 사례로 방법론 벤치마킹 가능.",
        "limitations": "GxE 상호작용 통계 검증력 부족; MHC 이외 유전-환경 상호작용은 대부분 유의 미달; 에피유전체 연구는 인과관계 확정 어려움.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Antigen presentation by CD40",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557325/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557325/",
        "doi": "https://doi.org/10.1038/s41586-026-10860-6",
        "journal": "Nature",
        "year": "2026",
        "author": "Lee JH",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "rabies barcode interaction detection + 시퀀싱(RABID-seq) 및 scRNA-seq으로 성상세포-T세포 상호작용 발굴",
          "시험관 내 공동배양 및 세포 특이적 in vivo CRISPR-Cas9 유전자 교란으로 CD40·MHC-II 발현 성상세포의 역할 규명",
          "LIPSTIC(universal labelling immune partnerships by SorTagging intercellular contacts)으로 성상세포-상호작용 CD4+ T세포의 Th17 반응 증폭 확인",
          "in vivo 서브프로테오믹스 및 AlphaFold-Multimer로 CD40→PLIN4+ 지질 방울→p65 아세틸화→NF-κB 기전 규명",
          "다발성 경화증 환자 snRNA-seq 및 면역조직화학으로 CD40+MHC-II+LD+ 성상세포 확인"
        ],
        "concepts": [
          "single-cell-eqtl",
          "brain-cell-atlas",
          "microglia-neuroimmune"
        ],
        "tldr": "성상세포(astrocyte)가 CD40–MHC-II 발현을 통해 CD4+ T세포와 직접 상호작용하고, CD40 활성화→지질 방울 축적→NF-κB 활성화 경로로 항원 제시 및 CNS 자가면역을 촉진함을 규명.",
        "question": "성상세포가 CD4+ T세포와 직접 상호작용하여 CNS 자가면역(다발성 경화증)을 어떻게 조절하는가?",
        "key_result": "성상세포의 CD40 활성화가 지질 방울 내 아세틸-CoA를 통해 p65 아세틸화·NF-κB 활성화를 유도하여 항원 제시 능력을 획득; EAE 모델 및 MS 환자 조직에서 해당 세포 집단 검증.",
        "why_for_us": "자가면역 뇌질환(MS/EAE) 맥락에서 성상세포-T세포 상호작용을 scRNA-seq 및 단백질체학으로 규명한 멀티오믹스 접근이 랩의 autoimmune·neuro 분야 및 단일세포 분석 연구와 관련됨.",
        "limitations": "주로 EAE 마우스 모델 기반이며 인간 MS 조직 검증은 관찰적 수준에 그침; 다른 CNS 자가면역 질환으로의 일반화 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Metabolic exhaustion and immune ageing in rheumatoid arthritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42547808/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42547808/",
        "doi": "https://doi.org/10.1038/s41584-026-01402-5",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Weyand CM",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA T세포에서 미토콘드리아 손상 → 미토콘드리아-리소좀-소포체 연결 붕괴 → gasdermin D 의존성 염증성 세포사 경로 분석",
          "활막 MerTK⁺ 복구 대식세포에서 autocrine C1q → 미토콘드리아 SARM1 활성화 → NAD⁺ 분해·ATP 고갈·PANoptosis 경로 정리",
          "50세 이상 RA 고위험군에서 노화 관련 대사 취약성과 면역 재편성의 연관성 문헌 종합"
        ],
        "concepts": [
          "aging-genetics"
        ],
        "tldr": "RA에서 노화 관련 면역세포 대사 고갈—NAD⁺·ATP 부족, 미토콘드리아 손상, pyroptosis/PANoptosis—이 조직 손상 효과기로의 전환을 유도하는 기전을 리뷰.",
        "question": "노화에 따른 면역세포 대사 취약성이 RA 발병 및 진행에 어떻게 기여하는가?",
        "key_result": "RA에서 NAD⁺·ATP 부족과 미토콘드리아 기능 손상이 면역세포를 염증성 사멸 경로로 유도하는 핵심 결함으로 확인; C1q-SARM1 축이 대식세포 PANoptosis의 새로운 치료 표적으로 제시됨.",
        "why_for_us": "랩의 RA·aging 연구와 직결; complement(C1q) 경로는 nephro/autoimmune 프로젝트(C4 포함)와 기전적으로 연관되며, inflammaging 도메인에도 적용 가능.",
        "limitations": "리뷰 논문으로 원데이터 없음; 제시된 기전 대부분 세포주·마우스 모델 기반으로 인간 in vivo 검증 제한적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Cerebrospinal fluid-driven ependymal motile cilia defects are implicated in multiple sclerosis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41277219/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41277219/",
        "doi": "https://doi.org/10.1093/brain/awaf440",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Bigotte M",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "MS 환자 및 비MS 대조군의 신선한 뇌실주위 뇌 조직 단일세포 RNA 시퀀싱",
          "MS CSF를 배양 설치류 뇌실막 세포에 노출하여 섬모 기능 평가",
          "EAE 동물 모델에서 뇌실막 섬모 유전자/단백질 발현 분석",
          "성체 마우스 Ccdc39 조건부 결실 모델로 섬모 손상 행동·조직 표현형 분석"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "brain-cell-atlas"
        ],
        "tldr": "MS 환자 뇌실주위 조직의 단일세포 RNA 시퀀싱으로 뇌실막 섬모 유전자 대규모 이상 발현을 발견하고, MS CSF 노출 및 IFNγ가 섬모 기능을 손상시킴을 실험적으로 확인함.",
        "question": "MS에서 뇌실막 세포의 운동성 섬모가 이상 조절되며, 이것이 CSF 내 독성 인자와 연계되어 뇌실주위 병리를 유발하는가?",
        "key_result": "MS 뇌실막 세포에서 섬모 유전자 대규모 이상 발현; MS CSF 및 IFNγ 노출 후 섬모 박동 빈도 감소; Ccdc39 결실 마우스에서 일시적 뇌실 확장, 뇌실주위 미세아교세포 밀도 증가, 둥지 짓기 행동 변화.",
        "why_for_us": "단일세포 RNA-seq 분석 방법론 및 microglia-neuroimmune·autoimmune 교차 도메인 관련; MS 병리 기전의 세포유형 특이적 전사체 근거 제공.",
        "limitations": "인과 방향성 확정 어려움(섬모 손상이 MS 병리의 원인인지 결과인지 불명확); 마우스 모델의 인간 MS 전환 한계.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Follicular Lymphoma Transformation is Characterized by Cytokine-associated Remodeling of Stromal and Macrophage Compartments.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42550967/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42550967/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-25-1104",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Haradhvala NJ",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "95개 FL 및 tFL 샘플로 단일세포 RNA-seq, 벌크 RNA-seq, 공간전사체학, 단백체학 다중모달 분석 수행",
          "독립 FL-tFL 쌍에서 발견 결과 검증",
          "비침습적 혈장 단백체학으로 기질·대식세포 분비 신호 분석"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "cell-type-deconvolution",
          "affinity-proteomics",
          "mass-spectrometry-proteomics"
        ],
        "tldr": "여포성 림프종(FL)의 공격적 형질전환(tFL) 과정에서 기질·대식세포 구획의 사이토카인 매개 재편성을 단일세포·공간전사체·단백체학 다중모달 분석으로 규명",
        "question": "FL에서 tFL로의 조직학적 형질전환을 구동하는 종양미세환경 세포 및 분자 변화는 무엇인가?",
        "key_result": "형질전환 시 섬유아세포와 GPNMB+ 대식세포 증가, 림프절 구조화 세포(여포 수지상세포, CCL21+ 세망세포) 소실; 사이토카인 공간 분포 변화가 T세포 침윤과 대식세포 분화에 영향; 혈장 단백체학에서도 이 신호 포착",
        "why_for_us": "멀티오믹스 통합(scRNA+공간+단백체) 분석 방법론, TME 내 세포 유형별 역할 규명 프레임이 랩의 암 면역·단백체·단일세포 연구와 직접 연관",
        "limitations": "후향적 코호트; 혈장 단백체학의 진단 마커로서의 임상 검증은 초록에 명시 없음",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Same-Slide Spatial Multiomics Integration with IN-DEPTH Reveals Tumor Virus-Linked Spatial Reorganization of the Tumor Microenvironment.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41874448/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41874448/",
        "doi": "https://doi.org/10.1158/2159-8290.CD-25-0775",
        "journal": "Cancer discovery",
        "year": "2026",
        "author": "Yiu SPT",
        "rating": 4,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "단백질 우선 염색 후 전사체 캡처를 같은 슬라이드에서 수행하는 IN-DEPTH 프로토콜 개발",
          "공간 단백질-전사체 교차 상관 분석 프레임워크 SGCC(Spectral Graph Cross-Correlation) 개발",
          "DLBCL EBV+ vs EBV- 비교: 종양-대식세포-CD4 T세포 상호작용 분석",
          "IL27-STAT3 신호축 후보 발굴 및 C1Q 대식세포·CD4 T세포 기능이상 확인"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "affinity-proteomics",
          "cell-type-deconvolution",
          "proteomics-quantification"
        ],
        "tldr": "동일 조직 절편에서 공간 프로테오믹스와 공간 전사체를 통합하는 IN-DEPTH 워크플로우와 SGCC 분석 프레임워크를 개발, DLBCL에서 EBV 양성 종양의 면역 미세환경 재편성 기전 규명.",
        "question": "동일 슬라이드에서 공간 프로테오믹스와 전사체를 RNA 손실 없이 통합하여 종양 미세환경의 기능적 상태 변화를 해상도 높게 파악할 수 있는가?",
        "key_result": "IN-DEPTH는 RNA 신호 손실 없이 단일세포 해상도 공간 멀티오믹스 구현; EBV/LMP1 양성 DLBCL에서 C1Q 면역억제 대식세포 농축 및 CD4 T세포 기능 저하, IL27-STAT3 축 확인.",
        "why_for_us": "공간 전사체+프로테오믹스 통합 방법론은 랩의 멀티오믹스·spatial transcriptomics·cancer immunology 관심사와 직접 연관; SGCC 알고리즘은 세포유형 간 조율된 상태 변화 탐지에 재사용 가능.",
        "limitations": "DLBCL 단일 암종 적용; 상업 플랫폼 의존성; 공간 해상도 및 처리량 제한 미기술.",
        "reuse": "SGCC 프레임워크와 IN-DEPTH 프로토콜은 다른 조직/암종 공간 멀티오믹스에 적용 가능하다고 언급.",
        "next_step": ""
      },
      {
        "title": "The Virtual Tissues foundation model resolves spatial proteomics across scales.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557331/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557331/",
        "doi": "https://doi.org/10.1038/s41586-026-10884-y",
        "journal": "Nature",
        "year": "2026",
        "author": "Wenckstern J",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "멀티플렉스 이미징 데이터에서 단백질·세포·니치·조직 수준의 다중 스케일 표현을 학습하는 파운데이션 모델 VirTues 개발",
          "마커 재구성, 세포 분할·유형 분류, 니치 주석, 공간 바이오마커 발굴, 환자 층화 등 다양한 다운스트림 태스크를 단일 백본으로 지원",
          "TNBC 코호트에서 항PD-L1 병용면역요법 반응 예측 및 독립 코호트 무병생존율 층화 수행"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "proteomics-quantification",
          "cell-type-deconvolution"
        ],
        "tldr": "공간 단백질체학(다중 이미징) 데이터를 위한 범용 파운데이션 모델 VirTues를 제안하고, 삼중음성유방암(TNBC)에서 항PD-L1 치료 반응 예측 및 생존 층화에 활용함.",
        "question": "다양한 마커 패널·프로토콜로 생성된 공간 단백질체학 데이터를 단일 사전학습 모델로 통합·분석하고, 암 바이오마커를 발굴할 수 있는가?",
        "key_result": "VirTues 유래 바이오마커가 동일 데이터셋의 최신 바이오마커 및 현행 임상 층화 기준을 능가; 제로샷 주석으로 이종 패널·데이터셋 간 지식 전이 달성.",
        "why_for_us": "공간 단백질체학 파운데이션 모델 아키텍처는 멀티오믹스 통합 및 환자 층화 연구에 방법론적 참고가 되며, 암 면역치료 반응 예측 연구와도 연결됨.",
        "limitations": "다중 이미징 기반으로 시퀀싱 기반 공간 전사체학과 직접 호환되지 않을 수 있음; 다른 암종으로의 일반화 검증이 제한적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial biology reveals altered macrophage states in immunosuppressed non-melanoma skin cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42556334/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42556334/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.031",
        "journal": "Cell",
        "year": "2026",
        "author": "Naara S",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "면역정상 및 면역억제 종양에서 단일세포 RNA-seq, 공간 전사체학, 다중 면역형광, 공간 후성유전체 프로파일링 통합 수행",
          "종양 내 면역세포 조성·분포·공간 조직화·T세포 클론성 분석",
          "다중 코호트 검증으로 면역억제 시 선천-적응 면역 조직 변화의 일관성 확인"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "cell-type-deconvolution",
          "single-cell-eqtl"
        ],
        "tldr": "면역억제 비흑색종 피부암에서 단일세포·공간전사체·공간후성유전체 통합 분석으로 대식세포 상태 변화 및 T세포 클론 다양성 감소 등 종양 면역 미세환경(TME) 재편을 규명.",
        "question": "전신 면역억제는 비흑색종 피부암의 종양 면역 미세환경을 어떻게 바꾸는가?",
        "key_result": "면역억제 종양에서 전체 면역세포 조성은 유지되나, 종양 내 대식세포 밀도 감소, T세포 클론 다양성 감소, 항원제시세포-T세포 공간 상호작용 변화, 섬유아세포·대식세포 관련 공간 니치 변화 확인.",
        "why_for_us": "단일세포+공간전사체+공간후성유전체 멀티오믹 통합 방법론, TME 내 세포형 조성·상호작용 분석이 랩의 single-cell 및 cancer immunology 관심사에 해당.",
        "limitations": "비흑색종 피부암에 국한; 면역억제 원인의 이질성; 인과관계보다 연관성 수준의 결론.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "CCR7",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42551427/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42551427/",
        "doi": "https://doi.org/10.1016/j.immuni.2026.07.002",
        "journal": "Immunity",
        "year": "2026",
        "author": "Koufaki MA",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "단일세포 전사체학으로 cDC1·cDC2 공통의 actDC 상태(T세포 자극·억제 분자 공동발현)를 규명",
          "CCR7 발현을 이용해 생쥐에서 actDC를 조건부 표지 또는 제거하는 마우스 모델 개발",
          "actDC 제거 시 자발적 종양 억제, 면역관문억제제, 입양 T세포 치료 반응을 평가"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "variant-to-cell-type"
        ],
        "tldr": "단일세포 전사체학으로 규명한 활성화 수지상세포(actDC) 상태가 항종양 CTL 면역의 핵심 결정인자임을 생쥐 모델로 증명한 연구",
        "question": "CCR7 발현으로 정의되는 활성화 cDC(actDC) 상태가 항종양 세포독성 T림프구(CTL) 반응에 어떤 기능적 역할을 하는가?",
        "key_result": "CTL을 자극하는 cDC의 능력은 actDC 상태에 국한됨; cDC1-actDC는 교차제시, cDC2-actDC는 교차드레싱으로 CTL 프라이밍; actDC 제거 시 종양-배액 림프절에서 미경험 CTL 활성화와 종양 내 효과기 CTL 기능이 손상되어 면역관문억제제·입양치료 반응도 저하됨",
        "why_for_us": "암 면역 TME 및 T세포 소진 관련 연구와 직접 연관; 단일세포 전사체학을 활용한 세포 상태 정의 방법론이 랩의 single-cell 파이프라인과 접점을 가짐",
        "limitations": "생쥐 모델 중심으로 인간 종양에서의 actDC 기능적 검증이 부족; 암 유형별 cDC2-actDC의 교차드레싱 의존성이 다름",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Sex-aware causal inference assessment of the immune system in complex neurodegenerative diseases.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41437896/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41437896/",
        "doi": "https://doi.org/10.1093/brain/awaf474",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Lona-Durazo F",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "혈장 단백질체(n=33,477)에서 932개 면역 관련 단백질 cis-pQTL 도출(FDR<0.01)",
          "ALS·PD·AD 성별 층화 대규모 GWAS 데이터로 2-sample MR 수행",
          "colocalization 분석 및 성차 효과 추정 실시",
          "CSF 단백질 cis-pQTL(n=971) 탐색적 분석 추가",
          "독립 pQTL 데이터셋으로 유의 결과 검증"
        ],
        "concepts": [
          "mendelian-randomization",
          "pqtl-proteomics",
          "colocalization",
          "sex-differences-genetics",
          "drug-target-genetics",
          "molecular-qtl",
          "summary-statistics-methods"
        ],
        "tldr": "932개 면역 관련 혈장 단백질의 cis-pQTL을 도구변수로 삼아 성별 층화 GWAS 데이터(ALS·PD·AD)에 2-sample MR을 적용, 성차별적 단백질-신경퇴행 인과 관계를 체계적으로 평가함.",
        "question": "면역계 단백질이 ALS·PD·AD에 미치는 인과 효과에 성별에 따른 차이가 존재하는가?",
        "key_result": "FCGR2A→PD, CD2AP/MAMDC2/PCDH17/CSF3→AD에서 성별 차별적 인과 관계 확인; OMG→PD, GRN/SERPINF2/TREM2→AD 인과 관계 검증; CSF pQTL에서 ADGRE2/GPNMB/COLEC11→PD, CD33→AD 추가 발굴.",
        "why_for_us": "pQTL 기반 MR, colocalization, 성차 분석(sex-differences-genetics)이 랩 핵심 방법론과 정확히 일치; 면역 단백질-신경퇴행 인과 경로 발굴은 drug-target-genetics 관점에서도 가치 높음.",
        "limitations": "혈장 pQTL 사용으로 뇌 내 단백질 수준 반영 한계; FDR 다중검정 보정 후 일부 결과 약화 가능; 성별 층화 GWAS 표본 크기 불균형.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Distinct cellular phenotypes of language and executive decline in amyotrophic lateral sclerosis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42551425/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42551425/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.008",
        "journal": "Cell",
        "year": "2026",
        "author": "Petrescu J",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인지 수준으로 계층화된 ALS 환자 코호트에서 전전두엽 피질 영역을 공간전사체학과 단일핵 RNA-seq으로 통합 맵핑",
          "다중화 이미징으로 발견된 서명을 공간적으로 검증",
          "운동·인지 표현형에 걸쳐 공유되는 다세포 신경교증 반응 서명 분석"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "single-cell-eqtl"
        ],
        "tldr": "ALS 환자 전전두엽 피질의 공간·단일핵 전사체학 통합으로, 언어 vs 실행기능 인지장애가 서로 다른 세포 표현형을 가짐을 밝힌 연구",
        "question": "ALS의 언어 결핍과 실행기능 저하가 전전두엽 피질에서 어떤 세포 유형·공간적 패턴 차이로 나타나는가?",
        "key_result": "실행기능 장애는 심층 배측전전두엽 피질 뉴런의 미토콘드리아·시냅스 활성 감소와 연관; 언어 결핍은 신경교·혈관 이상을 포함하는 범영역 반응과 연관; 운동·인지 표현형에 공통된 다세포 신경교증 반응 서명 존재",
        "why_for_us": "단일세포·공간전사체학 통합 분석 방법론, 인지 표현형별 세포 유형 특이적 해석 프레임이 랩의 neuro single-cell 연구에 직접 활용 가능",
        "limitations": "사후 조직 기반이라 인과관계 확립 한계; 코호트 크기 미명시; ALS에 특화된 분석으로 타 신경계 질환으로의 직접 일반화 제한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Subtypes of neurons in the cerebellar cortex.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42567161/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42567161/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.07.017",
        "journal": "Neuron",
        "year": "2026",
        "author": "Regehr WG",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "소뇌 피질 내 주요 세포 유형(과립세포, 골지세포, MLI, 퍼킨지세포, 단극성 솔세포 등)의 snRNA-seq 기반 서브타입 분류 연구들을 체계적으로 리뷰함",
          "분자층 억제성 뉴런(MLI)의 서브타입이 퍼킨지세포 발화와 수상돌기 칼슘 신호를 상반되게 조절한다는 기능적 증거를 정리함",
          "전사체 다양성 → 회로 기능 특화 → 복잡 행동 지원으로 이어지는 '멀티모달 플레이북'을 제안함"
        ],
        "concepts": [
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "single-cell-eqtl"
        ],
        "tldr": "snRNA-seq을 통해 소뇌 피질의 모든 주요 뉴런 클래스가 전사체적으로 구분되는 서브타입으로 이루어짐을 밝히고, 이 다양성이 소뇌 회로의 계산 기능에 미치는 영향을 논한 리뷰 논문.",
        "question": "snRNA-seq로 발견된 소뇌 피질 뉴런의 전사체적 서브타입 다양성은 회로 기능과 행동에 어떻게 연결되는가?",
        "key_result": "MLI는 전사체적으로 두 서브타입으로 나뉘며, 각각 퍼킨지세포 발화 조절과 수상돌기 칼슘 신호 조절이라는 반대되는 계산 역할을 수행함. 소뇌의 모든 주요 뉴런 클래스에서 snRNA-seq 기반 서브타입이 확인됨.",
        "why_for_us": "뇌 세포 아틀라스 구축 및 단일세포 전사체 분석(brain-cell-atlas, single-cell eQTL)에 직결되는 소뇌 세포 서브타입 분류 체계를 제공하며, 신경 질환 관련 세포 유형 특이적 유전자 조절 연구에 참고 자료가 됨.",
        "limitations": "주로 설치류 모델 데이터 기반이며, 인간 소뇌에서의 검증은 아직 제한적임. 리뷰 논문이므로 신규 실험 데이터 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Maternal NKG2D-mediated immune activation shapes fetal neural development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42562938/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42562938/",
        "doi": "https://doi.org/10.1038/s41380-026-03809-8",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Liu R",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인플루엔자 A 바이러스(IAV) 감염 과거력이 있는 여성에서 CD56 양성 NK 세포 집단의 농축을 확인함",
          "NKG2D 매개 모체 면역 활성화가 모체-태아 계면의 면역 항상성을 교란하는 기전을 분석함",
          "MIA와 태아 신경 발달 이상(ASD 포함) 간의 연관성을 면역학적 관점에서 탐색함"
        ],
        "concepts": [
          "maternal-immune-activation",
          "brain-body-immune-circuits",
          "neurodevelopmental-trajectory"
        ],
        "tldr": "인플루엔자 A 바이러스 감염 경력이 있는 임산부에서 NKG2D 매개 면역 활성화가 태아 신경 발달에 영향을 미쳐 ASD 관련 이상으로 이어질 수 있음을 제시한 연구.",
        "question": "모체 면역 활성화(MIA) 시 NKG2D 경로가 태아 신경 발달 이상 및 ASD 위험에 어떻게 기여하는가?",
        "key_result": "IAV 감염 경력 여성에서 CD56 양성 세포 집단의 농축이 관찰되었으며, NKG2D 경로를 통한 모체 면역 활성화가 태아 신경 발달에 영향을 줄 수 있음을 제시함.",
        "why_for_us": "ASD의 모체 면역 활성화(MIA) 병인 연구와 직결되며, 랩의 신경발달 질환(ASD) 및 뇌-면역 회로 관심사와 부합함.",
        "limitations": "초록이 불완전하게 제공되어 상세한 연구 설계 및 결과 파악에 한계가 있음. 인과관계 확립을 위한 추가 실험 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Neuroinflammation as molecular landscape of post-operative delirium revealed by live human brain multi-omics profiling.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557393/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557393/",
        "doi": "https://doi.org/10.1038/s41380-026-03804-z",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Ishii T",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "신경외과 수술 환자의 생체 뇌 조직에서 단핵 RNA 시퀀싱(snRNA-seq) 수행",
          "DNA 메틸화 프로파일링(bulk)을 통해 후성유전학적 변화 분석",
          "snRNA-seq과 bulk 메틸화 데이터를 통합하여 세포 유형별 유전자 발현·후성유전학 연계 분석",
          "Upstream/downstream 경로 분석으로 사이토카인 등 외부 신호와 뇌염·치매 연관성 도출"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "brain-cell-atlas",
          "brain-eqtl-grn"
        ],
        "tldr": "신경외과 수술 환자의 생체 뇌 조직을 대상으로 멀티오믹스(단핵 RNA-seq + DNA 메틸화)를 수행하여, 수술 후 섬망(POD)의 병리 기전이 미세아교세포 중심의 신경염증 및 면역 관련 후성유전학적 변화임을 최초로 규명.",
        "question": "수술 후 섬망(POD)의 분자적 병리 기전은 무엇이며, 어떤 세포 유형이 주도하는가?",
        "key_result": "POD 환자 미세아교세포에서 신경염증 시그니처가 강화되고, 성상세포는 시냅스·이동 경로 변화를 보였다. DNA 메틸화 분석에서 면역 관련 후성유전학적 변화가 확인되어 POD 신경염증의 후성유전 조절 역할이 시사되었다.",
        "why_for_us": "snRNA-seq·DNA 메틸화 멀티오믹스 통합 방법론이 랩의 단일세포+후성유전체 파이프라인과 직접 연관되며, 미세아교세포 신경면역(microglia-neuroimmune) 및 뇌 세포 아틀라스 연구에 참고 가능한 실제 인간 뇌 조직 데이터.",
        "limitations": "환자 수가 제한적(수술 코호트)이고, 인과관계 입증보다는 연관성 분석 수준. bulk 메틸화와 snRNA-seq의 통합이 세포 유형 수준까지 완전히 해상되지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Stimulation modulates gene-linked cell assemblies in the human brain.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557314/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557314/",
        "doi": "https://doi.org/10.1038/s41586-026-10879-9",
        "journal": "Nature",
        "year": "2026",
        "author": "Moore H",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "신경외과 수술 환자의 절제 측두엽 조직에서 microelectrode array 자극과 동시 기록, 단핵 유전체 분석을 통합한 ex vivo 플랫폼 개발",
          "자극에 의해 강화되는 세포 어셈블리를 확인하고 세포형별 유전자 조절 네트워크(GRN)와 연계",
          "생체 내(in vivo) 자극 후 인간 피질의 공통 세포형 특이적 유전자 발현 서명을 확인하여 결과를 일반화"
        ],
        "concepts": [
          "brain-eqtl-grn",
          "brain-cell-atlas",
          "variant-to-cell-type"
        ],
        "tldr": "인간 측두엽 절제 조직에 microelectrode array 자극 + 단핵 RNA-seq을 결합한 ex vivo 플랫폼으로, 뇌 자극이 세포형 특이적 유전자 조절 네트워크를 통해 세포 어셈블리를 강화함을 규명.",
        "question": "인간 뇌 자극(neuromodulation)이 어떤 분자·세포형 수준 기전으로 피질 회로를 재편하는가?",
        "key_result": "뇌 자극은 세포 어셈블리를 강화하며, 이 효과는 세포형 특이적 GRN과 연결됨; in vivo 자극에서도 동일한 세포형 특이적 유전자 발현 서명이 재현됨.",
        "why_for_us": "단핵 RNA-seq 기반 GRN 분석, 세포형 특이적 유전자 발현 등이 랩의 single-cell 및 brain eQTL/GRN 관심사와 겹침; 신경 질환 치료 타깃 발굴 관점에서도 참고 가능.",
        "limitations": "소규모 수술 환자 코호트, ex vivo 환경의 생리적 한계, 인과관계 확립 불충분.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Metabolic atlas of early human cortex reveals glycolytic remodeling and pentose phosphate pathway control of cell fate transitions.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42551423/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42551423/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.023",
        "journal": "Cell",
        "year": "2026",
        "author": "Mil J",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "1차 조직 및 줄기세포 유래 대뇌피질 오가노이드로 초기 인간 대뇌피질의 대사 아틀라스 생성",
          "포도당 가용성 조작 및 PPP 효소의 약리학적·유전적 억제 실험 수행",
          "리보스 구제 실험으로 방사상 아교세포 유전자 발현 변화 복구 여부 확인"
        ],
        "concepts": [
          "neurodevelopmental-trajectory",
          "brain-cell-atlas"
        ],
        "tldr": "초기 인간 대뇌피질의 대사 아틀라스를 구축하여 후기 신경발생 시 해당분해·오탄당인산경로(PPP) 활성이 방사상 아교세포 운명 결정에 핵심적 역할을 함을 밝힌 연구",
        "question": "인간 대뇌피질 발달 과정에서 핵심 대사 프로그램, 특히 PPP가 세포 운명 전환을 어떻게 조절하는가?",
        "key_result": "후기 신경발생 시 해당분해와 PPP 활성이 예상 외로 증가; 포도당 제한은 outer radial glia 및 억제성 뉴런 비율을 증가시킴; PPP 억제는 방사상 아교세포 유전자 발현 변화·세포 유형 조성 변화·ATP·hypotaurine 감소를 초래하며 리보스가 이를 구제",
        "why_for_us": "신경발달 궤적(neurodevelopmental-trajectory) 및 뇌 세포 아틀라스(brain-cell-atlas) 연구와 연관; 오가노이드 기반 대사-세포 운명 관계는 ASD·MDD 등 신경발달 장애의 대사 기전 탐색에 유용한 자원",
        "limitations": "오가노이드 모델은 생체 내 피질 발달을 완전히 재현하지 못함; 대사 아틀라스의 단일세포 해상도 여부가 초록에 불분명",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Next-generation precision medicine for mood disorders: reproducible blood biomarkers enable objective diagnostics, subtyping, and targeted therapeutics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42547801/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42547801/",
        "doi": "https://doi.org/10.1038/s41380-026-03736-8",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Balducci J",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "우울 및 조증 두 표현형을 별도로, 마이크로어레이와 RNA-seq 두 플랫폼·복수 독립 코호트로 이중 재현성 검증 설계로 연구 수행",
          "플랫폼 간 수렴·재현되는 혈액 유전자 발현 바이오마커를 polyevidence score로 우선순위화",
          "발굴 바이오마커를 입원 예측 및 치료 표적(약물 재창출) 연결에 적용"
        ],
        "concepts": [
          "polygenic-risk-score"
        ],
        "tldr": "기분장애(우울·조증)를 혈액 유전자 발현 바이오마커로 객관적으로 진단·아형 분류하고 치료 표적을 제시하는 정밀의학 연구.",
        "question": "혈액 전사체에서 재현 가능한 기분장애 바이오마커를 발굴하고 이를 진단·치료 연결에 활용할 수 있는가?",
        "key_result": "우울 상태 top 바이오마커: FKBP1A, FOSL2; 양극성: CTSB; 조증: ATP6V1C2. 우울의 주요 경로: 면역반응; 양극성: 세포자사; 조증: necroptosis. 치료 후보: 우울-오메가3·리튬·vortioxetine, 양극성 우울-리튬·valproate·clozapine.",
        "why_for_us": "랩의 MDD·양극성 유전체 연구에 혈액 전사체 바이오마커 발굴 전략과 재현성 설계 방법론 참고 가능; polyevidence score 접근이 PRS/멀티오믹스 통합과 연계될 수 있음.",
        "limitations": "혈액 전사체 기반으로 뇌 특이적 기전 직접 반영에 한계; 약물 표적 연결은 생물정보학적 추론 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Deletion of SPI1 in microglia exacerbates amyloid pathology by impairing microglial response in Alzheimer's disease models.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41928507/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41928507/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.03.011",
        "journal": "Neuron",
        "year": "2026",
        "author": "Kim B",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "미세아교세포 특이적 Spi1 조건부 결실 아밀로이드 마우스 모델 구축",
          "아밀로이드 침착, 신경교증, 이영양성 신경돌기 정량 분석",
          "프로테오믹스와 기능 분석을 통해 식세포 작용 경로 규명",
          "Syk, Lyn, Fcgr1 직접 활성화로 Aβ 흡수 회복 실험 수행"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "noncoding-regulatory-variants",
          "variant-to-cell-type"
        ],
        "tldr": "미세아교세포에서 SPI1(PU.1)을 선택적으로 결실시키면 아밀로이드 마우스 모델에서 AD 병리가 악화되며, 그 기전은 Syk/Lyn/Fcgr1 축을 통한 식세포 작용 손상임을 제시함.",
        "question": "미세아교세포 특이적 SPI1 결실이 AD 아밀로이드 병리에 어떤 영향을 미치며, 그 분자 기전은 무엇인가?",
        "key_result": "Spi1 미세아교세포 결실 시 아밀로이드 플라크 증가, 반응성 미세아교세포 감소; Syk/Lyn/Fcgr1 직접 활성화로 Aβ 흡수 결손 구제 확인.",
        "why_for_us": "SPI1은 AD GWAS 위험 유전자이며, 미세아교세포 특이적 기전 규명은 microglia-neuroimmune 및 noncoding-regulatory-variants 연구와 연계 가능. 프로테오믹스 데이터도 활용 여지 있음.",
        "limitations": "마우스 모델 기반 결과로 인간 AD에 대한 직접적 전환 가능성은 제한적; 타우 병리 모델에서의 검증 미실시.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Virus-induced deconjugation of ISG15 dysregulates innate immunity and cellular metabolism.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42561937/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42561937/",
        "doi": "https://doi.org/10.1016/j.immuni.2026.07.007",
        "journal": "Immunity",
        "year": "2026",
        "author": "Zhu J",
        "rating": 3,
        "emoji": "💉",
        "domain": "바이러스",
        "what_they_did": [
          "SARS-CoV-2 PLpro의 deISGylation 활성을 유전적으로 제거한 변이 바이러스를 인간 세포 및 마우스 모델에서 검증",
          "ISGylome 프로테오믹스로 PLpro의 직접 표적 단백질 동정",
          "대사체학(metabolomics) 분석으로 해당작용·펜토스인산경로·산화환원 항상성 변화 추적"
        ],
        "concepts": [
          "proteomics-quantification",
          "mass-spectrometry-proteomics"
        ],
        "tldr": "SARS-CoV-2의 PLpro가 ISG15 탈결합(deISGylation)을 통해 숙주의 선천면역과 대사 방어를 동시에 억제함을 유전적·대사체·단백질체 분석으로 규명",
        "question": "코로나바이러스가 인코딩하는 탈ISGylation 효소(PLpro)는 숙주 면역 및 대사에 어떤 영향을 미치는가?",
        "key_result": "PLpro deISGylation 결손 시 선천면역 활성 증가, 바이러스 복제 감소, 바이러스 제거 촉진; ISGylation이 해당작용·PPP·산화환원 핵심 효소를 직접 조절하여 바이러스 감염에 대한 대사적 제한을 부과함을 확인",
        "why_for_us": "ISGylome 프로테오믹스 및 대사체학 통합 분석 방법론이 멀티오믹스 연구에 참고 가능; 면역-대사 연계 기전 이해에 활용 가능",
        "limitations": "주로 SARS-CoV-2 PLpro 대상이며 다른 코로나바이러스·병원체에 대한 일반화 필요; 생체 내(in vivo) 대사 변화의 인과관계 검증 추가 필요",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Virus reactivation in acute and long COVID-19.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42557313/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42557313/",
        "doi": "https://doi.org/10.1038/s41586-026-10740-z",
        "journal": "Nature",
        "year": "2026",
        "author": "Maguire C",
        "rating": 3,
        "emoji": "💉",
        "domain": "바이러스",
        "what_they_did": [
          "IMPACC 코호트(입원 COVID-19 환자 1,154명)의 면역표현형·전사체·대사체 멀티오믹 종단 데이터 분석",
          "Herpesviridae 및 Anelloviridae 재활성화의 시간적 동역학과 질환 중증도·임상 결과 상관관계 분석",
          "회복기(convalescence)에서의 바이러스 재활성화 지속성 및 롱코비드와의 연관성 평가"
        ],
        "concepts": [
          "mendelian-randomization"
        ],
        "tldr": "COVID-19 입원 환자 1,154명의 멀티오믹 종단 데이터를 분석해 급성기 및 롱코비드에서 헤르페스바이러스·아넬로바이러스 재활성화의 동역학, 면역 영향, 임상 결과 연관성을 규명.",
        "question": "SARS-CoV-2 감염 중 만성 바이러스 재활성화의 전체 범위·시간적 패턴·면역학적 영향은 어떠한가?",
        "key_result": "급성 COVID-19에서 Herpesviridae·Anelloviridae가 유의하게 재활성화되며 중증도와 상관; 면역정상인에서도 재활성화 빈번; Anelloviridae는 롱코비드와 연관; 바이러스 재활성화의 면역·전사체·대사체 서명 도출.",
        "why_for_us": "멀티오믹 통합(전사체+대사체+면역표현형), 종단 코호트 설계, 바이러스-면역 상호작용 분석이 랩의 바이러스 및 멀티오믹스 관심사와 연관.",
        "limitations": "바이러스 재활성화와 임상 결과 간 인과관계 미확립; 입원 코호트로 선택 편향 가능.",
        "reuse": "",
        "next_step": ""
      }
    ]
  },
  {
    "date": "2026-08-02",
    "count": 44,
    "papers": [
      {
        "title": "Genome-wide association analyses of gestational phenotypes identify context-specific genetic effects.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42509370/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42509370/",
        "doi": "https://doi.org/10.1038/s41588-026-02677-w",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Liu S",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "중국 임산부 코호트(중위 n=78,535)에서 111개 임신 표현형에 대한 대규모 GWAS 수행",
          "7.8% 변이에서 임신 특이적 효과 확인, 24개 혈액 형질에서 genotype-by-gestational-timing 상호작용 분석",
          "BioBank Japan 여성 80개 질환·약물 형질과의 유전적 상관 및 MR 분석"
        ],
        "concepts": [
          "gwas-association-testing",
          "mendelian-randomization",
          "genetic-correlation",
          "molecular-qtl",
          "genetic-architecture"
        ],
        "tldr": "중국 임신 코호트(최대 121,579명)에서 111개 임신 표현형 GWAS를 수행, 4,688개 독립 신호(1,703개 신규)를 발굴하고 임신 특이적·타이밍 의존적 유전 효과를 규명했다.",
        "question": "임신 기간 중 다양한 표현형의 유전적 구조는 어떠하며, 임신 중 유전 효과는 시간에 따라 어떻게 달라지고 모성 후기 건강과 어떤 인과관계를 갖는가?",
        "key_result": "4,688개 독립 GWAS 신호(1,703개 신규); 7.8% 변이가 임신 특이적 효과; 18.7% 신호가 임신 시기별 상호작용; 동적 유전 효과는 성장·호르몬 조절 경로에 농축; 임신 표현형과 모성 중·후기 건강 간 인과적 연결 확인",
        "why_for_us": "대규모 GWAS/MR/유전적 상관 분석 및 문맥 의존적(context-specific) QTL 개념이 랩의 핵심 관심사와 직결; genotype-by-context interaction은 molecular QTL 연구에 방법론적 시사점 제공",
        "limitations": "중국 단일 민족 코호트 중심으로 다민족 일반화 제한; 임신 특이적 기능 주석 부족",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Tools and tactics for studying alternative splicing.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41998316/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41998316/",
        "doi": "https://doi.org/10.1038/s41576-026-00952-4",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Sousa-Luís R",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "장독해 시퀀싱(PacBio·ONT)으로 이소형 분해능 스플라이싱 지도 작성 방법론 검토",
          "단일세포 및 공간 해상도 스플라이싱 분석 기술 소개",
          "CRISPR 기반 스플라이싱 기능 검증 어세이(포화 게놈 편집, MPRA 유사 접근) 정리",
          "집단 수준 유전 변이와 스플라이싱(sQTL) 연관 연구 및 질환 위험 해석 논의",
          "딥러닝 기반 스플라이싱 코드 해독 모델 동향 소개"
        ],
        "concepts": [
          "molecular-qtl",
          "single-cell-eqtl",
          "noncoding-regulatory-variants",
          "saturation-genome-editing",
          "mpra",
          "brain-isoform-diversity",
          "variant-to-cell-type",
          "fine-mapping"
        ],
        "tldr": "대안적 스플라이싱 연구의 최신 기술 총람 리뷰. 장독해 시퀀싱, CRISPR 기반 기능 검증, 집단유전체 sQTL, 딥러닝 스플라이싱 모델을 포괄적으로 다룸.",
        "question": "대안적 스플라이싱을 게놈 전체 수준에서 지도화하고 기능적으로 해석하는 데 현재 어떤 기술적 진전이 있으며, 질환 위험 변이와 어떻게 연결되는가?",
        "key_result": "장독해 시퀀싱과 CRISPR 기능 어세이의 결합으로 스플라이싱 이소형의 기능적 결과를 직접 검증할 수 있게 됨. 집단 연구 기반 sQTL은 스플라이싱 조절 변이와 질환 위험을 잇는 핵심 도구로 부상. 딥러닝 모델이 스플라이싱 코드 해독에 기여하기 시작.",
        "why_for_us": "랩의 sQTL 분석, noncoding regulatory variants 기능 해석, single-cell QTL, fine-mapping 파이프라인에 직접 활용 가능한 방법론 개관. CRISPR 기능 검증 및 딥러닝 스플라이싱 모델은 랩의 variant-to-cell-type 및 MPRA 방향과도 연결.",
        "limitations": "리뷰 논문이므로 새로운 실험 데이터 없음. 개별 도구 간 성능 벤치마크 없이 서술적 소개에 머무름.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genetic influences on haematopoiesis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41872543/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41872543/",
        "doi": "https://doi.org/10.1038/s41576-026-00947-1",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Poeschla M",
        "rating": 4,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "멘델리안 혈액 질환의 유전적 특성화부터 집단 규모 GWAS/QTL 연구까지 조혈 유전학 전반을 리뷰",
          "단일세포 게노믹스와 variant-to-function 매핑 방법론의 최신 발전 소개",
          "조혈줄기세포의 체세포 변이 축적 및 clonal haematopoiesis 메커니즘 정리",
          "단일유전자 혈액 질환 치료 적용 및 향후 방향 논의"
        ],
        "concepts": [
          "genetic-architecture",
          "mosaic-chromosomal-alteration",
          "fine-mapping",
          "gwas-association-testing",
          "molecular-qtl",
          "variant-to-cell-type",
          "single-cell-eqtl",
          "noncoding-regulatory-variants"
        ],
        "tldr": "조혈(haematopoiesis)에 대한 유전적 영향을 멘델리안 혈액질환부터 단일세포 게노믹스, 체세포 변이(clonal haematopoiesis)까지 폭넓게 정리한 리뷰.",
        "question": "유전 변이는 어떤 메커니즘으로 조혈 세포 발달과 혈액 질환 위험을 조절하는가?",
        "key_result": "조혈은 유전 변이→생리 영향의 패러다임적 시스템으로, clonal haematopoiesis는 노화 과정에서 보편적으로 발생하며 조혈 기능 및 질환 위험에 이질적인 영향을 미침. 치료 전환이 단일유전자 혈액 질환에서 이미 실현됨.",
        "why_for_us": "GWAS/QTL·fine-mapping·single-cell 방법론, mosaic chromosomal alteration, variant-to-function 매핑 등 랩 핵심 관심사를 조혈 계통에서 통합 정리한 자료. 체세포 변이 유전학 및 질환 유전적 구조 이해에 직접 활용 가능.",
        "limitations": "리뷰 논문으로 새로운 데이터 없음; 특정 방법론의 기술적 세부 사항은 제한적.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Recovering signatures of archaic hominin introgression using ancestral recombination graphs.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42531349/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42531349/",
        "doi": "https://doi.org/10.1126/science.aef8874",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Zhang Y",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "ARG 기반 고대 혼혈 탐지 알고리즘 TRACE를 개발함(참조·외집단 프리)",
          "시뮬레이션으로 TRACE의 정밀도·낮은 위양성률을 검증함",
          "1000 Genomes Project 데이터에 적용해 Neanderthal, Denisovan, 유령 호미닌 혼혈 서열을 탐지함"
        ],
        "concepts": [
          "haplotype-phasing",
          "cross-ancestry-transferability",
          "structural-variants-gwas"
        ],
        "tldr": "TRACE라는 참조 패널·외집단 없이 조상 재조합 그래프(ARG) 특징을 이용해 고대 호미닌 혼혈 서열을 탐지하는 방법론을 개발하고, 1000 Genomes에 적용해 Neanderthal·Denisovan 외에 미확인 유령(ghost) 호미닌 혼혈 신호를 발견함.",
        "question": "참조 패널이나 외집단 없이도 ARG를 이용해 현대인 게놈 속 고대 호미닌 혼혈 흔적을 정확하게 복원할 수 있는가?",
        "key_result": "TRACE는 시뮬레이션에서 높은 정밀도와 낮은 FDR을 보였으며, 아프리카인·비아프리카인 모두에서 미확인 유령 호미닌으로부터의 혼혈 신호를 발견했다. 유령 조상 서열은 기존 Neanderthal·Denisovan ancestry desert 구간에 잔존하여 해당 구간의 해석에 새로운 의문을 제기한다.",
        "why_for_us": "ARG는 본 랩이 관심 갖는 PRS·파인매핑·하플로타입 기반 분석의 기반 구조이며, ARG를 이용한 조상 추적 방법론은 cross-ancestry GWAS 및 희귀 변이 분석에 응용 가능성이 있다.",
        "limitations": "실제 고대 DNA 검증이 제한적이고, 계산 비용 및 ARG 추론 자체의 불확실성이 결과에 영향을 줄 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Translating genomic data into healthcare practice with the Singapore National Precision Medicine program.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42527559/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42527559/",
        "doi": "https://doi.org/10.1038/s41588-026-02687-8",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Seow SW",
        "rating": 3,
        "emoji": "🧬",
        "domain": "유전학·GWAS",
        "what_they_did": [
          "PRECISE-SG100K 다조상 아시아인 인구 코호트 구축",
          "가족성 고콜레스테롤혈증(FH)을 사례로 유전체 연구결과의 임상 전환 시연",
          "공공-민간 파트너십 확립",
          "NPM 3단계(2025-2031) 계획 제시: 전장유전체서열분석(WGS)을 인구 10%의 평생 의료기록에 통합"
        ],
        "concepts": [
          "cross-ancestry-transferability",
          "polygenic-risk-score",
          "genotype-imputation"
        ],
        "tldr": "싱가포르 국가 정밀의료(NPM) 2단계(2020-2025) 성과를 정리하고, WGS 기반 3단계 계획을 소개하는 국가 규모 정밀의료 이니셔티브 보고.",
        "question": "소규모 다조상 아시아 국가가 전 국민 대상 정밀의료 플랫폼을 어떻게 구축하고 임상에 적용할 수 있는가?",
        "key_result": "다조상 아시아 인구 대상 SG100K 코호트 완성; FH 스크리닝 임상 전환 성공; WGS 기반 국가 정밀의료 3단계 로드맵 수립",
        "why_for_us": "다조상 유전체 데이터 구축 및 임상 전환 전략, cross-ancestry 분석의 실제 사례로 참고 가능",
        "limitations": "구체적인 유전체 분석 방법론이나 통계 결과는 초록에 미기재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Toward generalizable and interpretable AI in regulatory genomics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42509369/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42509369/",
        "doi": "https://doi.org/10.1038/s41588-026-02670-3",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Nagai M",
        "rating": 3,
        "emoji": "🧫",
        "domain": "후성유전·크로마틴",
        "what_they_did": [
          "seq2func 모델 아키텍처(CNN, Transformer 등)와 학습 데이터 설계가 모델 행동에 미치는 영향 분석",
          "해석 가능성 방법(attribution maps 등)과 cis-regulatory 조직 이해에의 기여 정리",
          "체계적 평가 프레임워크 및 AI-실험 피드백 루프 제안"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "mpra",
          "crispr-enhancer-mapping",
          "fine-mapping"
        ],
        "tldr": "DNA 서열→규제 기능 예측 모델(seq2func)의 아키텍처·학습 데이터·해석법·평가 방식을 종합 리뷰하며, 일반화 실패 원인과 AI-실험 피드백 루프 기반 자기개선 프레임워크를 제안한다.",
        "question": "seq2func 모델이 새로운 유전 변이 및 세포 맥락에서 일반화에 실패하는 이유는 무엇이며, 어떻게 개선할 수 있는가?",
        "key_result": "예측 정확도가 높아도 규제 메커니즘 이해로 이어지지 않는 체계적 실패 모드 규명; 모델 일반화를 위해 타깃 perturbation 실험과 반복적 모델 업데이트가 필요함",
        "why_for_us": "noncoding 변이 기능 주석 및 MPRA·CRISPR 검증과 결합 시 GWAS fine-mapping 후보 변이 해석에 활용 가능; caQTL·eQTL 관련 variant-to-function 파이프라인에 참고",
        "limitations": "리뷰 논문으로 독립 실험 검증 없음; 모델 비교가 체계적 벤치마크가 아닌 문헌 서술 중심",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Single-cell spatial mapping of human kidney development implicates the microenvironment in guiding cell fate decisions.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42533102/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42533102/",
        "doi": "https://doi.org/10.1038/s41588-026-02665-0",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Levinsohn J",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "인간 발달 신장에서 단일세포 RNA 시퀀싱과 공간전사체를 결합하여 700,000개 이상 세포 분석",
          "유전자 발현 및 분화 궤적을 공간 좌표에 매핑하여 신장 발달의 공간적 조직 구조 정의",
          "게놈 전체 규모의 공간 인식(spatially-aware) 세포-세포 상호작용 분석으로 리간드 신호와 세포 운명 결정 연계",
          "세포외 신호 집합 기반의 세포 이웃(cellular neighborhoods) 정의"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "single-cell-eqtl",
          "cell-type-deconvolution",
          "neurodevelopmental-trajectory",
          "noncoding-regulatory-variants"
        ],
        "tldr": "인간 신장 발달 과정을 단일세포 RNA-seq + 공간전사체로 70만 개 이상 세포를 분석하여, 세포 운명 결정의 가소성과 미세환경 신호(리간드-수용체)의 역할을 게놈 전체 규모로 규명.",
        "question": "인간 신장 발달에서 세포 운명은 어떻게 공간적으로 조율되며, 주변 미세환경 신호가 세포 계보 결정에 어떤 역할을 하는가?",
        "key_result": "초기 패터닝에서 확립된 세포 운명이 이후 단계에서 재조정될 수 있다는 가소성(plasticity)을 발견. 국소적 리간드 신호가 세포 운명 결정에 직접 연결됨을 공간적으로 증명.",
        "why_for_us": "신장(nephro) 도메인 + 단일세포/공간전사체 통합 분석 방법론이 우리 랩 CKD 연구와 직결. 세포-세포 커뮤니케이션 분석 및 발달 궤적 방법론은 랩 파이프라인에 바로 적용 가능.",
        "limitations": "발달 신장에 특화된 분석으로 성체 신장 병리(CKD 등)에 대한 직접적 적용 한계. 기능 검증 실험 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Insights from integrative spatial transcriptomics in sepsis-associated acute kidney injury.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42521826/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42521826/",
        "doi": "https://doi.org/10.1038/s41581-026-01107-8",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Uhlig M",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "벌크·단일세포 전사체학 및 단백질체학의 한계(공간 맥락 부재) 정리",
          "고해상도 공간 전사체학 + scRNA-seq + 멀티오믹스 통합 전략 제안",
          "SA-AKI에서 염증·혈관·세관 니치(niche) 간 신호 전달 및 druggable pathway 논의",
          "임상 적용을 위한 endotype 정의·검증 및 표준화 파이프라인 필요성 강조"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "cell-type-deconvolution",
          "molecular-qtl"
        ],
        "tldr": "패혈증 연관 급성 신손상(SA-AKI)의 병태생리를 공간 전사체학과 단일세포 RNA-seq 등 멀티오믹스 통합으로 해석하는 방법론적 접근을 제시하는 리뷰.",
        "question": "공간 전사체학을 비롯한 통합 멀티오믹스 접근이 SA-AKI의 세포·분자 구조 이해와 치료 표적 발굴에 어떻게 기여할 수 있는가?",
        "key_result": "공간 전사체학이 SA-AKI에서 조직 이질성과 니치-특이적 크로스토크를 해상하여 기존 병기 분류보다 예후와 더 잘 일치하는 mechanistic endotype 식별에 기여함.",
        "why_for_us": "랩의 nephro(CKD·신장 병리) 및 spatial transcriptomics, 멀티오믹스 통합 관심사와 직접 연관되는 핵심 리뷰 자료.",
        "limitations": "리뷰 논문으로 원본 데이터 없음; 임상 적용을 위한 표준화 파이프라인 및 장기 생존 이득은 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Epigenetic regulation of kidney development.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42521825/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42521825/",
        "doi": "https://doi.org/10.1038/s41581-026-01105-w",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "El-Dahr SS",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "DNA 메틸화·히스톤 메틸화·아세틸화·인산화·유비퀴틴화 등 에피제네틱 변형 유형 정리",
          "NPC의 자기재생 및 nephron 분화 관련 유전자 loci의 크로마틴 접근성 변화 기술",
          "발생 관련 전사인자가 NPC 분화에 미치는 에피제네틱 영향 논의",
          "NPC 노화, nephrogenesis 종료, nephron endowment와의 관계 설명"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "molecular-qtl"
        ],
        "tldr": "신장 발생 과정에서 에피제네틱 조절(DNA 메틸화, 히스톤 변형, 크로마틴 접근성)이 nephron progenitor cell의 자기재생·분화·노화에 미치는 영향을 정리한 리뷰.",
        "question": "에피제네틱 기전이 신장 발생 시 nephron progenitor cell의 운명 결정 및 nephrogenesis 종료에 어떻게 기여하는가?",
        "key_result": "크로마틴 접근성 변화와 히스톤 변형이 NPC 자기재생→nephron 분화 전환의 핵심 스위치이며, 에피제네틱 시계가 NPC 노화 및 nephron 수 결정에 영향을 미침.",
        "why_for_us": "랩의 nephro 관심사(CKD, 신장 발생)와 epigenomics(메틸화, ATAC-seq, 크로마틴 접근성) 방법론 연구와 긴밀히 연관됨.",
        "limitations": "리뷰 논문으로 원본 실험 데이터 없음; 인간 신장 발생에서의 에피제네틱 조절 메커니즘은 동물 모델 기반 추론이 많음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Iptacopan in IgA Nephropathy - Final 24-Month Data.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41910396/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41910396/",
        "doi": "https://doi.org/10.1056/NEJMoa2600743",
        "journal": "The New England journal of medicine",
        "year": "2026",
        "author": "Barratt J",
        "rating": 4,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "eGFR ≥30 ml/min/1.73m² 성인 IgA 신증 환자 477명(iptacopan 238명, 위약 239명)을 대상으로 한 무작위 이중맹검 3상 임상시험(APPLAUSE-IgAN) 24개월 최종 데이터 분석",
          "연간 총 eGFR 기울기를 1차 장기 결과로 평가; 단백뇨 감소는 중간 분석(9개월)에서 이미 보고됨"
        ],
        "concepts": [
          "genetic-architecture"
        ],
        "tldr": "IgA 신증 환자 477명을 대상으로 한 3상 임상시험 24개월 최종 분석에서, 보체 대체경로 인자B 억제제 iptacopan이 위약 대비 eGFR 감소 속도를 유의하게 늦췄다.",
        "question": "보체 대체경로 억제제 iptacopan이 IgA 신증 환자의 신기능 보호에 24개월간 효과적이고 안전한가?",
        "key_result": "Iptacopan군의 연간 eGFR 기울기는 -3.10 ml/min/1.73m²로, 위약군 대비 유의하게 완만한 신기능 감소를 보였다. 9개월 중간분석에서 단백뇨(uPCR) 38.3% 감소 확인. 안전성 프로파일 수용 가능.",
        "why_for_us": "IgA 신증은 보체 활성화(대체경로)와 HLA/유전 요인이 관여하는 nephro 핵심 질환이며, 랩의 신장 보체·HLA 연구(C4/complement) 아이디어와 직접 연관된다. 임상 결과 데이터로 보체 경로 차단의 치료적 타당성을 확인할 수 있다.",
        "limitations": "단일 임상시험 결과이며 장기(24개월 이상) 안전성 및 효능 데이터 미비; 유전체 바이오마커 분석 미포함.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Gene-disease relationships for glomerular phenotypes: expert recommendations from ClinGen.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42168382/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42168382/",
        "doi": "https://doi.org/10.1038/s41581-026-01087-9",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Byrne AB",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "ClinGen 사구체병증 유전자 큐레이션 전문가 패널(GCEP)을 구성하여 56개 유전자에서 유래한 57건의 유전자-질환 관계를 평가",
          "유전적·실험적 증거를 종합하여 definitive/moderate/limited/insufficient 4단계로 임상 유효성 분류",
          "진단 유전자 검사 패널에 포함될 유전자 기준 프레임워크 수립"
        ],
        "concepts": [
          "rare-variant-collapsing",
          "genetic-architecture"
        ],
        "tldr": "ClinGen 사구체병증 전문가 패널이 56개 유전자-질환 관계 57건을 체계적으로 큐레이션하여 34개 유전자를 확정적(definitive) 증거 수준으로 분류하고, 나머지를 보통/제한/불충분으로 등급화했다.",
        "question": "사구체 표현형과 관련된 유전자-질환 관계의 임상적 유효성을 표준화된 근거 기반으로 어떻게 분류할 수 있는가?",
        "key_result": "57건 중 34개 유전자가 definitive 수준, 10개 moderate, 11개 limited, 2개 insufficient 판정. 총 56개 유전자 중 명확히 임상 진단에 활용 가능한 유전자 목록 확립.",
        "why_for_us": "신장(nephro) 도메인 GWAS/희귀변이 분석 시 사구체 질환 관련 유전자 목록 및 유전자-질환 근거 수준을 참조 자원으로 활용 가능. 희귀변이 코딩 분석이나 드라이버 유전자 우선순위화에 직접 연결됨.",
        "limitations": "큐레이션은 현재까지 공개된 문헌에 기반하므로 미발표 또는 신규 발견 변이는 반영되지 않음. 기능 실험 증거가 충분치 않은 유전자는 여전히 limited로 남을 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Anti-neutrophil cytoplasmic antibody-associated vasculitis: biological insights and biomarker-guided disease management.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42120751/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42120751/",
        "doi": "https://doi.org/10.1038/s41581-026-01081-1",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Antonelou M",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "AAV의 최신 생물학적 병태생리 연구를 종합 리뷰",
          "소변 CD163, CCL2, T세포 수치 등 동적 바이오마커 후보 검토",
          "레지스트리·임상시험 데이터베이스를 이용한 신장 질환 패턴·진행 분석 결과 정리",
          "단일세포 분자 분석이 AAV 이해에 기여한 내용 기술"
        ],
        "concepts": [
          "molecular-qtl",
          "single-cell-eqtl"
        ],
        "tldr": "ANCA 연관 혈관염(AAV)의 생물학적 이해 및 바이오마커 기반 맞춤 치료 전략을 정리한 리뷰. 단일세포 분자 분석과 임상 코호트 데이터를 통합해 신장 질환 진행·재발 예측 바이오마커를 제시.",
        "question": "AAV 환자에서 치료 반응과 신장 질환 진행을 실시간으로 예측할 수 있는 바이오마커는 무엇인가?",
        "key_result": "요중 CD163·CCL2·T세포 수와 혈청 면역 바이오마커가 질환 활성도의 동적 지표로 유망하나 추가 검증 필요; 신장 질환 진행 패턴의 다양성과 재발 예측의 미해결 과제 제시.",
        "why_for_us": "단일세포 분석과 멀티오믹스가 신장 질환 바이오마커 발굴에 활용되는 사례로, 랩의 nephro + single-cell/multiomics 연구 방향과 직접 연관.",
        "limitations": "바이오마커 대부분이 소규모 연구 기반으로 대규모 검증 미완료; 치료 맞춤화를 위한 면역학적 안정화 정의 불명확.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Salt and chronic kidney disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42009842/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42009842/",
        "doi": "https://doi.org/10.1038/s41581-026-01076-y",
        "journal": "Nature reviews. Nephrology",
        "year": "2026",
        "author": "Murray J",
        "rating": 3,
        "emoji": "🫘",
        "domain": "신장",
        "what_they_did": [
          "CKD에서 나트륨 과부하가 혈역학, RAAS 활성화, 조직 나트륨 축적, 내피 기능 장애, 염증 반응 등 다면적 기전으로 신장 손상을 악화시키는 증거를 문헌 검토",
          "유전적 소인 및 CKD 표현형 이질성이 나트륨 관련 손상 민감도와 치료 반응 변동성을 어떻게 형성하는지 논의",
          "식이 나트륨 제한을 포함한 현행 CKD 관리 전략의 근거와 한계를 정리"
        ],
        "concepts": [
          "genetic-architecture",
          "gwas-association-testing",
          "polygenic-risk-score"
        ],
        "tldr": "소금(나트륨) 과잉 섭취가 CKD 발생·진행에 미치는 병태생리 기전을 종합 정리한 리뷰. 유전적 소인과 표현형 이질성이 나트륨 민감도를 결정한다는 점을 강조.",
        "question": "나트륨 항상성 교란이 CKD 발생·진행에 어떤 기전으로 기여하며, 개인별 위험 계층화와 치료 전략을 어떻게 정교화할 수 있는가?",
        "key_result": "나트륨 항상성은 단일 경로가 아닌 혈역학·RAAS·조직 축적·내피 기능·염증이 얽힌 다차원 드라이버로 작동하며, 유전적 배경에 따라 개인별 민감도 차이가 존재함. 식이 나트륨 제한은 여전히 핵심 관리법이나, 정밀의료 기반 위험 계층화가 필요함.",
        "why_for_us": "랩의 nephro(CKD) 및 유전적 소인·위험 계층화 연구와 연결되며, CKD 표현형 이질성과 유전체-환경 상호작용(GWAS·PRS) 연구 설계 시 배경 지식으로 유용.",
        "limitations": "실험 데이터 없는 서술적 리뷰이며, 유전적 소인 부분은 구체적 변이나 GWAS 결과를 상세히 다루지 않음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "BCAT2 links branched-chain amino acids metabolism to interferon signaling to sustain macrophage inflammation.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42538461/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42538461/",
        "doi": "https://doi.org/10.1038/s41590-026-02604-5",
        "journal": "Nature immunology",
        "year": "2026",
        "author": "Meng X",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "활성 RA vs 관해 환자 대상 멀티오믹스(전사체, 대사체, 조직병리) 분석",
          "IRF1-BCAT2 축이 인터페론-γ에 의해 전사 유도됨을 확인",
          "BCAT2가 미토콘드리아 ROS를 높여 SHP-1 억제→STAT1/2 인산화 지속→염증 사이토카인 생산 기전 규명",
          "골수세포 특이적 Bcat2 KO 마우스에서 콜라겐 항체 유발 관절염 경감 확인",
          "텔미사르탄(BCAT2 억제제)으로 MTX 처치 마우스 지속성 관절염 억제"
        ],
        "concepts": [
          "molecular-qtl"
        ],
        "tldr": "RA 활성 질환에서 미토콘드리아 효소 BCAT2가 분지쇄 아미노산(BCAA) 이화작용을 통해 인터페론 신호를 지속시켜 대식세포 만성염증을 구동함을 멀티오믹스로 규명.",
        "question": "류마티스 관절염에서 BCAA 대사 경로가 대식세포의 인터페론 매개 만성 염증을 어떻게 유지하는가?",
        "key_result": "활성 RA에서 전신 BCAA 감소, 활막 분지쇄 케토산 축적, BCAT2 발현 상승이 관찰됨; Bcat2 KO 및 텔미사르탄이 실험 관절염을 완화.",
        "why_for_us": "RA 병인의 대사-면역 교차점을 멀티오믹스로 규명한 연구로, 랩의 autoimmune(RA) 및 멀티오믹스 통합 관심과 직결됨.",
        "limitations": "주로 마우스 모델 및 시험관 실험 기반; 인간 임상 적용을 위한 prospective 검증 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "From psoriatic plaque to synovium: decoding the skin-joint axis in psoriatic arthritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42538408/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42538408/",
        "doi": "https://doi.org/10.1038/s41584-026-01412-3",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Raimondo MG",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "scRNA-seq, 이미징 질량 세포측정, 미토콘드리아 DNA 계통 추적으로 피부 유래 골수 전구세포의 활막 이주 증명",
          "TCR 분석으로 건선 피부와 염증 관절 간 클론 연관 T세포 공유 확인",
          "피부-관절 축 모델(고위험 피부 병변 + 전신 면역세포 이동 + 관절 간질 니치)을 종합 제시"
        ],
        "concepts": [
          "single-cell-eqtl",
          "cell-type-deconvolution",
          "variant-to-cell-type"
        ],
        "tldr": "건선에서 건선관절염(PsA)으로의 진행을 이끄는 피부-관절 축을 single-cell RNA-seq, 미토콘드리아 DNA 계통 추적, TCR 분석으로 규명한 리뷰.",
        "question": "건선 피부 병변에서 기원한 면역세포가 어떻게 활막 조직으로 이동하여 관절염을 유발하는가?",
        "key_result": "scRNA-seq 및 mtDNA 추적으로 피부 유래 골수 전구세포가 초기 PsA 환자 활막에 존재함을 직접 확인; T세포 클론 공유도 피부-관절 연결 지지.",
        "why_for_us": "랩의 autoimmune 관심(T/B세포, 단일세포 분석)과 관련; scRNA-seq 기반 세포 이동 추적 방법론이 활용 가능.",
        "limitations": "리뷰 논문; 인과관계 완전 확립에는 추가 기능 연구 필요; 조기 PsA 환자 샘플 수 제한.",
        "reuse": "",
        "next_step": "바이오마커 발굴, 위험도 층화, 질환 차단 전략 개발을 향후 방향으로 제시."
      },
      {
        "title": "Multi-ancestry genome-wide association analyses provide insights into the genetic basis of Hashimoto's thyroiditis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42527560/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42527560/",
        "doi": "https://doi.org/10.1038/s41588-026-02704-w",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Bujnis MN",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "48,694명 하시모토 갑상선염 환자와 1,044,134명 대조군을 포함한 다조상 GWAS 메타분석 수행",
          "정밀한 증례 정의(precise case definition) 적용",
          "155개 유의 유전자좌(P < 5×10⁻⁸) 동정"
        ],
        "concepts": [
          "gwas-association-testing",
          "fine-mapping",
          "genetic-correlation",
          "cross-ancestry-transferability",
          "colocalization",
          "credible-set"
        ],
        "tldr": "하시모토 갑상선염에 대한 다조상 GWAS 메타분석으로 155개 유의 유전자좌를 발굴하고, 자가면역 유전 구조를 규명했다.",
        "question": "다조상 대규모 GWAS를 통해 하시모토 갑상선염의 유전적 기반을 어떻게 더 정밀하게 파악할 수 있는가?",
        "key_result": "155개 게놈-와이드 유의 유전자좌 동정; 다조상 분석을 통한 유전적 구조 및 자가면역 공유 유전구조 인사이트 제공",
        "why_for_us": "자가면역 GWAS fine-mapping, 다조상 분석, colocalization, 공유 유전구조(genetic correlation) 연구에 직접 활용 가능한 대규모 자가면역 GWAS 사례",
        "limitations": "초록에 세부 fine-mapping 결과 및 기능 주석 내용 미기재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "TLR7 in systemic lupus erythematosus: genetics and emerging therapies.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42321474/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42321474/",
        "doi": "https://doi.org/10.1038/s41584-026-01388-0",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Vinuesa CG",
        "rating": 4,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "TLR7 및 UNC93B1 gain-of-function 변이, 리간드 가용성·하위 신호 조절 단백질의 희귀 변이 문헌 정리",
          "B세포 내성 붕괴, 자가항체 생성, I형 인터페론 분비 등 병인 기전 고찰",
          "경구 TLR7-TLR8 이중 길항제 2상 임상 결과 및 기존 치료(CAR-T, anifrolumab)와의 비교"
        ],
        "concepts": [
          "fine-mapping",
          "rare-variant-collapsing",
          "drug-target-genetics",
          "genetic-architecture"
        ],
        "tldr": "SLE에서 TLR7의 유전적 gain-of-function 변이 및 조절 단백질 희귀 변이의 병인 기여를 정리하고, TLR7-TLR8 이중 길항제의 2상 임상 결과 등 치료 함의를 리뷰한다.",
        "question": "TLR7 경로가 SLE 병인에서 어떤 역할을 하며, 이를 치료 표적으로 활용할 수 있는가?",
        "key_result": "경구 TLR7-TLR8 길항제가 모든 환자에서 인터페론 시그니처를 지속 억제; SLE 및 피부 루푸스에서 임상적 이점 확인(피부 루푸스에서만 1차 평가변수 달성); TLR7/8이 SLE 인터페론 시그니처의 주요 드라이버임을 시사",
        "why_for_us": "SLE 유전학(희귀 변이, gain-of-function), autoimmune B세포 관련 연구, HLA·TLR7 유전적 변이 fine-mapping 관심사와 직접 연관; drug-target genetics 관점에서도 활용 가능",
        "limitations": "리뷰 논문; 2상 임상 결과로 효능 확정 미흡; TLR7 변이 빈도의 인종별 다양성 미고려",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Diagnostic, prognostic and therapeutic biomarkers in rheumatoid arthritis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42298194/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42298194/",
        "doi": "https://doi.org/10.1038/s41584-026-01391-5",
        "journal": "Nature reviews. Rheumatology",
        "year": "2026",
        "author": "Szekanecz Z",
        "rating": 3,
        "emoji": "🛡️",
        "domain": "자가면역",
        "what_they_did": [
          "RA 진단·예후·치료 반응 예측에 활용 가능한 유전·단백·영상·멀티오믹스 바이오마커 문헌을 체계적으로 정리",
          "심혈관질환, 간질성 폐질환, 골다공증, 악성종양 등 주요 동반질환 바이오마커 발전도 함께 검토"
        ],
        "concepts": [
          "molecular-qtl",
          "pqtl-proteomics",
          "mendelian-randomization",
          "drug-target-genetics"
        ],
        "tldr": "RA의 진단·예후·치료 바이오마커 현황을 유전체, 단백체, 영상, 멀티오믹스 관점에서 종합한 리뷰",
        "question": "현재 RA 환자 관리에서 진단 지연·치료 선택 불확실성을 줄이기 위해 어떤 바이오마커가 실용화 가능한가?",
        "key_result": "현재 지속 관해 달성률이 소수에 그치며, 조기 개입·정밀 치료를 위한 강력한 바이오마커 패널 개발이 시급하다는 결론 도출",
        "why_for_us": "랩의 RA GWAS/QTL·멀티오믹스 통합 연구에 맥락 제공; pQTL·eQTL 기반 바이오마커 발굴 방향성 참고",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatiotemporal multiomics uncover tumor ecosystem dynamics during metastatic colonization.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42531396/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42531396/",
        "doi": "https://doi.org/10.1126/science.adz7928",
        "journal": "Science (New York, N.Y.)",
        "year": "2026",
        "author": "Sun Y",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "간암 마우스 모델과 인간 전이 조직을 사용해 단일세포 멀티오믹스 프로파일링 수행",
          "공간 전사체 기법과 단일세포 데이터를 통합해 전이 군집화의 시공간적 동태 분석",
          "단일세포 씨딩 단계부터 명백한 폐 전이까지 DTC 및 주변 미세환경 변화 추적"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "molecular-qtl"
        ],
        "tldr": "단일세포·공간 멀티오믹스를 결합해 전이성 종양세포(DTC)가 간·폐 미세환경과 어떻게 상호작용하며 전이 군집화를 이루는지 시공간적 동태를 추적한 연구",
        "question": "전이성 종양세포가 단일세포 수준에서 조직 미세환경과 어떻게 상호작용하며 명백한 전이로 발전하는가?",
        "key_result": "휴면(quiescent) 잔존 DTC 세포 집단이 식별되었으며, 종양세포와 조직 미세환경 간의 시공간적 상호작용 동태가 규명됨 (상세 수치는 초록에 명시 없음)",
        "why_for_us": "단일세포 및 공간 멀티오믹스 통합 방법론, 종양 미세환경(TME) 분석 파이프라인이 랩의 cancer immunology(T cell exhaustion·TME) 및 멀티오믹스 통합 연구 방향과 직접적으로 연관됨",
        "limitations": "",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "CRISPR screens identify targets to rescue age-related T cell dysfunction in cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42526438/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42526438/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.016",
        "journal": "Cell",
        "year": "2026",
        "author": "Chen ACY",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "노화 마우스 종양 모델에서 단일세포 CRISPR 스크린 수행",
          "Dusp5와 Zfp219를 노화 CD8 T세포 기능 이상의 핵심 조절인자로 동정",
          "이들 유전자 결손 시 노화 T세포의 항종양 기능 회복 여부 기능적으로 검증"
        ],
        "concepts": [
          "perturb-seq",
          "single-cell-eqtl"
        ],
        "tldr": "노화된 T세포의 종양 내 기능 이상을 극복할 유전적 표적을 단일세포 CRISPR 스크린으로 발굴—Dusp5, Zfp219가 노화 CD8 T세포 기능 회복의 핵심 조절인자임을 규명.",
        "question": "면역 노화로 인한 T세포 기능 저하가 종양 면역 및 면역치료 반응에 미치는 영향의 핵심 드라이버는 무엇인가?",
        "key_result": "Dusp5 및 Zfp219가 노화된 종양 침윤 CD8 T세포의 기능 이상을 조절하는 핵심 인자로 확인됨; 이들을 표적으로 하면 노화 관련 T세포 기능 저하를 구제 가능.",
        "why_for_us": "T세포 소진(exhaustion) 및 종양 미세환경(TME) 연구, 그리고 aging-genetics 맥락에서 CRISPR 기반 기능 스크린 접근법이 랩 관심사와 교차함.",
        "limitations": "초록에 마우스 모델 결과가 인간에게 직접 전환 가능한지 여부 명시 없음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Paired mutation calling and spatial transcriptomics identify cellular neighborhoods associated with the neoplastic outcome of mouse colitis.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42521760/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42521760/",
        "doi": "https://doi.org/10.1038/s41588-026-02673-0",
        "journal": "Nature genetics",
        "year": "2026",
        "author": "Moutin EB",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "마우스 대장염 연관 종양 형성 모델에서 in vivo 계통 추적(lineage tracing) 수행",
          "In silico 모델링으로 클론 운명 예측",
          "돌연변이 프로파일링으로 염증 유전자→암 드라이버 돌연변이 전환 패턴 분석",
          "공간 전사체(spatial transcriptomics)로 상피·면역 세포 풍부화 neighborhood 식별"
        ],
        "concepts": [
          "spatial-transcriptomics"
        ],
        "tldr": "마우스 대장염 모델에서 공간 전사체와 돌연변이 프로파일링을 결합하여, 염증→종양 진행 시 클론 돌연변이의 운명이 주변 세포 환경(neighborhood)에 따라 결정됨을 규명.",
        "question": "대장염 관련 종양 형성에서 클론 돌연변이의 선택·확장은 주변 세포 미세환경에 의해 어떻게 결정되는가?",
        "key_result": "상피 풍부화 및 면역 풍부화 neighborhood 확인. 회복 조직 환경이 친종양 클론 선택 및 확장을 촉진하고 비종양 클론 포함 염증 저항 neighborhood를 축소시키는 모델 제안.",
        "why_for_us": "공간 전사체 기반 세포 환경 분석이 랩의 single-cell/spatial 관심사와 연관. 암 면역학 및 TME 연구에도 관련성 있음.",
        "limitations": "마우스 모델에 국한되어 인간 IBD-암 전환에 대한 직접 적용 한계. 공간 해상도 및 클론 추적의 기술적 제약.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Beyond sex determination: the Y chromosome in male cancers.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42168613/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42168613/",
        "doi": "https://doi.org/10.1038/s41568-026-00935-x",
        "journal": "Nature reviews. Cancer",
        "year": "2026",
        "author": "Abdel-Hafiz HA",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "Y염색체의 진화·구조·유전자 목록 및 전사·면역·안드로겐 신호 기능 정리",
          "혈액암 감수성부터 고형암 예후에 이르는 LOY-암 연관성 문헌 종합",
          "CRISPR 유도 LOY 세포주·마우스 모델 및 대규모 코호트 바이오인포매틱스 분석 결과 검토",
          "단세포·벌크 시퀀싱 기반 LOY 정량 알고리즘 및 비침습적 샘플링 기술 소개"
        ],
        "concepts": [
          "mosaic-chromosomal-alteration",
          "structural-variants-gwas",
          "genetic-architecture",
          "single-cell-eqtl"
        ],
        "tldr": "남성에서 가장 흔한 체세포 유전체 변이인 Y염색체 소실(LOY)이 다양한 암 유형의 감수성·진행·예후에 미치는 역할을 종합한 리뷰",
        "question": "Y염색체 소실(LOY)은 암 발생·진행에서 인과적 역할을 하는가, 아니면 단순 동반 현상인가?",
        "key_result": "LOY는 면역 감시 약화, DNA 손상 수복 저하, 대사 변화, 종양 면역미세환경 리모델링에 기여하지만, 인과성·협력성·승객 변이 여부는 아직 미해결",
        "why_for_us": "mosaic chromosomal alteration, 체세포 변이 및 암 면역 연구와 직결; LOY를 GWAS/단세포 통합으로 분석하는 접근에 방법론적 참고",
        "limitations": "LOY의 인과성 여부가 아직 불명확하며, 기능 연구 대부분이 세포주·모델 동물에 국한",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Emerging trends in the global burden of colorectal cancer.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42050153/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42050153/",
        "doi": "https://doi.org/10.1038/s41571-026-01149-8",
        "journal": "Nature reviews. Clinical oncology",
        "year": "2026",
        "author": "Lee DJ",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "CRC 발병률과 사망률의 전 세계 지리적 패턴 분석 및 리뷰",
          "1960년대 출생 코호트부터 시작된 조기 발병 CRC 증가의 출생 코호트 효과 확인",
          "식이·생활습관·장내 미생물 변화·환경 오염물질 등 위험 인자 검토",
          "CRC의 유전체·에피게노믹스·마이크로바이옴 프로파일링 연구 동향 정리"
        ],
        "concepts": [
          "genetic-architecture",
          "noncoding-regulatory-variants"
        ],
        "tldr": "대장암(CRC)의 전 세계 역학 트렌드를 리뷰. 특히 50세 미만 조기 발병 CRC의 증가 추세와 그 원인 후보(식이·생활습관·장내 미생물·환경 오염물질), 그리고 유전체·에피게노믹스·마이크로바이옴 연구의 조기 발견 가능성을 다룸.",
        "question": "CRC 발병률의 전 세계적 변화, 특히 조기 발병 CRC 증가를 설명하는 유전적·환경적·마이크로바이옴 요인은 무엇인가?",
        "key_result": "CRC는 전 세계 3위 암·2위 암 사망 원인; 조기 발병 CRC는 서구 외 지역에서도 증가; 1960년대생부터의 출생 코호트 효과는 유전적 소인이나 검진 변화만으로는 설명 불가; 비서구 집단의 연구 참여 부족이 격차 심화 우려.",
        "why_for_us": "CRC의 에피게노믹스·마이크로바이옴 연구가 랩의 멀티오믹스 통합 및 암 면역학 관심사와 연결되며, 특히 유전체·장내 미생물 통합 분석 방법론 적용 가능성 있음.",
        "limitations": "비서구 집단의 연구 데이터 부족으로 글로벌 일반화 제한; 인과 관계 입증보다 연관성 수준에 머무는 위험 인자 증거.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Distinct gut microbiota but common metabolomic signatures between viral and MASLD HCC contribute to outcomes of combination immunotherapy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40587824/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/40587824/",
        "doi": "https://doi.org/10.1097/HEP.0000000000001446",
        "journal": "Hepatology (Baltimore, Md.)",
        "year": "2026",
        "author": "Lee PC",
        "rating": 3,
        "emoji": "🎗️",
        "domain": "암",
        "what_they_did": [
          "2021~2024년 1차 병용 면역치료를 받는 V-HCC 77명, MASLD-HCC 25명 전향적 등록",
          "치료 전 분변 미생물·대사체(SCFA, UDCA 등) 및 혈청 사이토카인/케모카인 분석",
          "지속 반응자(DR) vs 비반응자 간 미생물·대사체 비교 및 생존(OS, PFS) 연관성 분석"
        ],
        "concepts": [
          "alpha-diversity",
          "beta-diversity",
          "compositional-data-analysis",
          "functional-profiling"
        ],
        "tldr": "MASLD-HCC와 바이러스성 HCC 환자에서 장내 미생물 구성은 다르지만 공통 대사체(특히 아세트산)가 병용 면역치료 반응과 생존을 예측함.",
        "question": "MASLD-HCC와 바이러스성 HCC의 장내 미생물/대사체 차이가 면역치료 효과와 어떻게 연관되는가?",
        "key_result": "MASLD-HCC DR은 Mediterraneibacter gnavus 및 SCFA(아세트산·프로피온산·부티르산·이소부티르산)·UDCA 풍부; V-HCC DR은 Bifidobacterium 및 SCFA 풍부. 양 군 공통으로 분변 아세트산이 DR·PFS·OS의 유의한 예측인자: 아세트산 고농도군 OS 중앙값 25.2개월 vs 11.3개월(p<0.001), PFS 15.3 vs 4.2개월(p<0.001).",
        "why_for_us": "마이크로바이옴 조성·대사체 통합 분석 및 면역치료 반응 바이오마커 발굴 관련 메타게노믹스/대사체학 방법론이 랩 관심 메타게노믹스·멀티오믹스 통합 영역과 연결됨.",
        "limitations": "단일 기관 전향 코호트로 샘플 수 소규모(N=102); 인과관계 미입증; 아세트산 기전 미규명.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genetically informed dissection of multimodal brain aging and ten major psychiatric disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42521761/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42521761/",
        "doi": "https://doi.org/10.1038/s41380-026-03783-1",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Zhao Q",
        "rating": 5,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "UK Biobank 신경영상 데이터로부터 도출된 멀티모달 BAG 표현형 GWAS 요약통계와 PGC·FinnGen의 10개 정신질환 GWAS 데이터를 통합 분석",
          "유전 상관(genetic correlation) 및 다유전자 중첩(Dice coefficient) 정량화",
          "BAG-정신질환 공동 연관 98개 유전체 좌위에서 변이 위치 및 유전자 매핑 수행",
          "양방향 멘델리안 무작위화로 BAG와 정신질환 간 인과 방향성 검증"
        ],
        "concepts": [
          "gwas-association-testing",
          "genetic-correlation",
          "mendelian-randomization",
          "polygenic-risk-score",
          "partitioned-heritability",
          "fine-mapping",
          "summary-statistics-methods",
          "aging-genetics"
        ],
        "tldr": "뇌 나이 격차(BAG) 표현형 GWAS와 10개 주요 정신질환 GWAS를 통합하여 뇌 노화와 정신질환 간의 공유 유전 구조를 체계적으로 규명.",
        "question": "신경영상 기반 뇌 나이 격차(BAG)와 주요 정신질환은 유전적으로 얼마나 중첩되며, 인과 관계가 존재하는가?",
        "key_result": "7개 BAG-질환 쌍에서 유의한 유전 상관 확인. 최대 Dice coefficient 58.3%의 광범위한 다유전자 중첩. 98개 공동 연관 좌위 변이 대부분이 조절 영역에 위치. 풍부화 경로: 시냅스 신호전달, 신경 발달, 미토콘드리아 기능. 양방향 MR에서 BAG↔정신질환 간 강력한 인과 관계 증거 없음.",
        "why_for_us": "GWAS/fine-mapping, 유전 상관, MR, 다유전자 중첩 분석이 핵심 방법론으로 활용됨. 뇌 노화+정신질환 공유 유전구조가 랩의 neuro(MDD, SCZ 등) 및 aging-genetics 관심사와 직접 연관.",
        "limitations": "BAG가 뇌 노화의 완전한 대리 지표가 될 수 없음. 교차-정신질환 공유 유전 구조로 인해 특이적 인과 경로 식별 어려움. MR 결과 해석 시 다면 발현 가능성 고려 필요.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Spatial atlas of the human brain vasculature reveals specialized cell ensembles.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42537647/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42537647/",
        "doi": "https://doi.org/10.1016/j.cell.2026.07.007",
        "journal": "Cell",
        "year": "2026",
        "author": "Wang JC",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "내피세포·벽세포·섬유아세포·혈관주위 대식세포 등 314,535개 전사체를 통합한 뇌혈관 세포 아틀라스 구축",
          "인간 측두엽과 해마에서 공간전사체(spatial transcriptomics)로 1,529,740개 세포를 매핑",
          "동맥-정맥 축 기반 '혈관세포 앙상블' 정의 및 기능(뉴로바스큘러 커플링, BBB 수송, 면역 감시 등) 규명",
          "소혈관병·뇌졸중 등 신경질환 유전위험 및 약리적 반응성을 앙상블별로 오버레이"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "brain-cell-atlas",
          "brain-eqtl-grn",
          "variant-to-cell-type",
          "partitioned-heritability",
          "cell-type-deconvolution"
        ],
        "tldr": "인간 뇌혈관 세포 31만여 개의 트랜스크립톰 아틀라스와 측두엽·해마 공간전사체(150만 세포)를 구축하여, 동맥-정맥 축을 따라 배열된 '혈관세포 앙상블(vascular cell ensemble)'을 발견하고 신경질환 유전위험을 이 앙상블에 매핑.",
        "question": "인간 뇌혈관 세포들은 공간적으로 어떻게 조직되어 있으며, 특정 세포 군집이 신경질환 유전 위험과 약리 반응에서 어떤 역할을 하는가?",
        "key_result": "동맥-정맥 위치에 따라 특화된 혈관세포 앙상블이 정형화된 패턴으로 존재하며, 소혈관병 및 뇌졸중 관련 유전 위험이 특정 앙상블에 농축됨을 확인.",
        "why_for_us": "공간전사체 + 단일세포 아틀라스 + 질환 유전위험 매핑 파이프라인이 우리 랩의 single-cell/spatial 분석 및 brain eQTL/GWAS 통합 연구와 직접적으로 연관. 뇌 세포유형별 유전위험 분할(partitioned heritability) 분석에 활용 가능한 세포유형 레퍼런스 제공.",
        "limitations": "측두엽·해마에 한정된 공간전사체 분석으로 다른 뇌 영역 일반화 제한. 단일 시점 스냅샷으로 동적 변화 파악 불가.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Transcriptional regulation of disease-relevant microglial activation programs.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42526428/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42526428/",
        "doi": "https://doi.org/10.1016/j.neuron.2026.07.001",
        "journal": "Neuron",
        "year": "2026",
        "author": "McQuade A",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "iPSC 유래 미세아교세포 두 가지 모델에서 6개 활성화 상태에 대한 CRISPRi 스크린 수행",
          "31개 조절인자를 단일세포 전사체(scRNA-seq)와 세포표면 단백질체 수준에서 특성화",
          "ZNF532, PRDM1 knockdown → 질환 연관·지질 풍부 시그니처 강화 및 탐식 증가, 항원 제시 서명에는 반대 효과 관찰",
          "DNMT1 knockdown → DNA 메틸화 광범위 소실 → 인터페론 신호 억제인자 활성화"
        ],
        "concepts": [
          "microglia-neuroimmune",
          "perturb-seq",
          "single-cell-eqtl",
          "noncoding-regulatory-variants",
          "brain-cell-atlas"
        ],
        "tldr": "iPSC 유래 미세아교세포에서 6가지 활성화 상태를 타겟으로 CRISPRi 스크린을 수행, 31개의 전사 조절인자를 발굴하고 ZNF532·PRDM1·DNMT1의 다중 상태 조절 기능을 단일세포 전사체 및 세포표면 단백질체 수준에서 규명.",
        "question": "미세아교세포의 다양한 활성화 상태(질환 연관, 인터페론 반응 등)를 조절하는 전사 인자는 무엇이며, 이를 어떻게 선택적으로 제어할 수 있는가?",
        "key_result": "ZNF532·PRDM1이 질환 연관 미세아교세포 상태(DAM-like)를 구동하며, DNMT1은 메틸화를 통해 인터페론 신호를 억제 조절함. 각 상태의 단백질 마커도 규명.",
        "why_for_us": "미세아교세포-신경면역 연관성, 뇌 질환 단일세포 스크린, DNA 메틸화 조절이 랩의 neuro/epigenomics/single-cell 관심사와 직접 연결됨.",
        "limitations": "iPSC 유래 세포 모델이므로 실제 뇌 내 미세아교세포 생체내 상태와 차이가 있을 수 있음.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Parkinson's disease genetics across diverse ancestries: an observational genetic study of causal and risk variants with translational implications.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42456684/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42456684/",
        "doi": "https://doi.org/10.1016/S1474-4422(26)00198-5",
        "journal": "The Lancet. Neurology",
        "year": "2026",
        "author": "Lange LM",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "GP2 release 11 데이터(11개 유전적 조상 집단, 99,783명) 활용",
          "GBA1, LRRK2, SNCA 등 18개 PD 관련 유전자의 원인·위험 변이(copy number variant 포함) 분석",
          "MDS 태스크포스 명명 기준에 따른 변이 분류 및 조상별 대립 유전자 빈도 산출"
        ],
        "concepts": [
          "cross-ancestry-transferability",
          "rare-variant-collapsing",
          "genetic-architecture",
          "protective-alleles",
          "polygenic-risk-score"
        ],
        "tldr": "GP2 코호트 99,783명(PD 58,559명)의 다민족 유전체 데이터를 분석해 PD 원인 변이 및 임상시험 관련 위험 변이의 민족별 분포를 규명, 유럽 중심 연구의 한계를 극복했다.",
        "question": "파킨슨병 관련 원인·위험 변이의 민족별 분포는 어떻게 다르며, 임상 적용 가능성 있는 변이들이 다양한 집단에서 어떤 빈도로 존재하는가?",
        "key_result": "약 29%(29,001/99,783)가 비유럽·비아슈케나지 유대인 집단; 조상 간 공유된 유전 기여와 동시에 변이 빈도·스펙트럼의 민족 특이성 확인; PD 환자 2.1%(1,217명)가 원인 변이 보유",
        "why_for_us": "다민족 유전 분석, cross-ancestry 변이 빈도 비교, rare variant 분석 방법론이 랩의 GWAS·PRS·통계유전학 관심사와 일치; PD 유전 구조 데이터베이스로도 활용 가능",
        "limitations": "단면 관찰 연구; 일부 집단의 샘플 수가 적어 희귀 변이 검출력 제한; 초록 기준으로 functional annotation 미흡",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Convergent coexpression reveals shared biological mechanisms underlying common and rare variant risk in six neuropsychiatric disorders.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41946833/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41946833/",
        "doi": "https://doi.org/10.1038/s41380-026-03571-x",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Abe H",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "933개 사후 뇌 샘플 전사체 데이터를 이용해 6개 뇌 질환(GWAS + 희귀변이 버든)의 위험 유전자와 공발현하는 유전자를 체계적으로 동정",
          "공통변이와 희귀변이 위험 유전자 양쪽과 공발현하는 '수렴 공발현 유전자' 집합을 정의하고 중첩도 분석",
          "수렴 유전자의 공통/희귀변이 유전력 농축도, 세포 유형 마커, 진화적 제약, 약물 타깃 과다 표현 분석 수행"
        ],
        "concepts": [
          "gwas-association-testing",
          "rare-variant-collapsing",
          "partitioned-heritability",
          "missing-heritability",
          "brain-eqtl-grn",
          "drug-target-genetics"
        ],
        "tldr": "6개 신경정신질환에서 GWAS 공통변이와 희귀변이 버든 위험 유전자들이 사후 뇌 전사체 데이터에서 '수렴 공발현' 패턴을 공유하며, 이 수렴 유전자들이 약물 타깃으로서 높은 잠재력을 보인다.",
        "question": "신경정신질환에서 공통변이(GWAS)와 희귀변이 버든 위험 유전자들이 공유하는 전사체 수준의 생물학적 메커니즘이 존재하는가?",
        "key_result": "GWAS와 희귀변이 버든 위험 유전자 집합 자체는 크게 달랐으나, 이들과 공발현하는 유전자(수렴 유전자)는 유의미하게 중첩됨. 수렴 유전자는 공통·희귀변이 유전력 모두에 농축되었고, 단일 변이 클래스 공발현 유전자보다 진화적 제약이 강하고 알려진 약물 타깃 비율이 높음.",
        "why_for_us": "GWAS fine-mapping, 유전력 분할, 유전자-수준 통합(eQTL/colocalization)과 직접 연결되는 프레임워크. 신경정신질환 공통·희귀변이 통합 분석에 활용 가능하며, 공발현 기반 유전자 우선순위 지정 전략이 랩의 QTL·colocalization 파이프라인과 시너지를 낼 수 있음.",
        "limitations": "사후 뇌 전사체라 인과 방향 해석에 한계. 공발현이 기능적 관계를 직접 증명하지 않음. 6개 질환 이외로의 일반화 여부 미검증.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Towards scalable biomarker discovery in posttraumatic stress disorder: triangulating genomic and phenotypic evidence from a health system biobank.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41946832/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41946832/",
        "doi": "https://doi.org/10.1038/s41380-026-03553-z",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Lee YH",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "MGB 바이오뱅크 유럽 조상 23,743명을 대상으로 PTSD GWAS 기반 PRS를 Bayesian 방법으로 산출",
          "EHR에서 PTSD 임상 진단 코드(≥2회) 확인",
          "241개 검사실 형질의 역정규 변환 중앙값을 결과 변수로 PRS 및 임상 진단과의 연관성 검정(PheWAS 유사 설계)"
        ],
        "concepts": [
          "polygenic-risk-score",
          "phewas",
          "gwas-association-testing",
          "summary-statistics-methods"
        ],
        "tldr": "PTSD PRS와 임상 PTSD 진단을 EHR 바이오뱅크에 적용해 241개 검사실 바이오마커와의 연관성을 체계적으로 스캔하여 PTSD의 확장 가능한 바이오마커를 탐색한 연구.",
        "question": "PTSD 다유전자위험점수(PRS)와 임상 PTSD 진단이 전자 의무기록 기반 바이오뱅크에서 혈액·검사실 바이오마커와 어떻게 연관되는가?",
        "key_result": "초록이 중간에 잘려 구체적 수치 미제공. PRS와 임상 진단 양쪽을 이중 노출로 활용해 PTSD 관련 검사실 바이오마커를 삼각측량(triangulating)하는 방법론적 프레임워크 제시.",
        "why_for_us": "PRS를 EHR 바이오뱅크에 적용한 PheWAS 설계는 랩의 PRS 및 MR 파이프라인과 직접 관련. PTSD 이외 질환(CKD, 자가면역 등)에도 동일 접근법 적용 가능. EHR 기반 표현형과 유전체 데이터 통합 방법론 참고 가치 높음.",
        "limitations": "유럽 조상에 국한되어 다조상 일반화 어려움. 초록이 잘려 전체 결과 확인 불가. EHR 진단 코드 기반 표현형의 정확도 한계.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "SETDB1 modulates neuroinflammation in the mouse cortex by regulating neuronal P2rx7 expression.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41935187/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41935187/",
        "doi": "https://doi.org/10.1038/s41380-026-03584-6",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Zhu Y",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "흥분성 뉴런 특이적 Setdb1 조건부 결손 마우스(Setdb1-CK-cKO) 제작",
          "scRNA-seq으로 반응성 별세포 집단 및 염증 시토카인/케모카인 발현 변화 분석",
          "P2rx7 첫 번째 인트론 내 신규 인핸서를 ATAC-seq 기반으로 동정, 마우스-인간 보존성 확인",
          "P2rx7 이중 결손(Setdb1-CK-cKO × P2rx7 KO) 마우스에서 ERV 활성화 및 시냅스 기능 부분 회복 검증"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "microglia-neuroimmune"
        ],
        "tldr": "흥분성 뉴런에서 SETDB1 결손이 ERV(내재성 레트로바이러스) 활성화와 신경염증을 유발하며, P2rx7 인트론 내 새로운 인핸서를 통한 후성유전적 기전을 규명.",
        "question": "뉴런 내 H3K9me3 메틸전달효소 SETDB1 소실이 어떻게 ERV 활성화와 신경염증을 유도하는가?",
        "key_result": "SETDB1 소실 → ERV 활성화 → 반응성 별세포 출현 및 염증 유발; P2rx7 인트론 인핸서가 SETDB1에 의해 억제되며 P2rx7 KO로 ERV 활성화와 시냅스 기능장애 부분 역전.",
        "why_for_us": "HERV/ERV 활성화가 면역 반응과 신경정신 질환을 연결하는 기전에 관심 있는 랩에 직접 해당. H3K9me3 기반 ERV 침묵화 실패 → 신경염증 축은 autoimmune·neuro 연구 아이디어와 연결.",
        "limitations": "마우스 모델 기반; 인간 뇌에서 동일 기전의 in vivo 검증 부재. P2rx7 결손이 표현형을 부분적으로만 역전시켜 추가 기전 존재 가능.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Integrative GWAS identifies novel loci and genetic links between psychiatric and metabolic factors in anorexia nervosa.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41927769/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41927769/",
        "doi": "https://doi.org/10.1038/s41380-026-03591-7",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Song Y",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "유럽·핀란드 AN GWAS 메타분석으로 신규 유전자좌(SOX5) 발견",
          "유전적 상관 분석 및 Mendelian Randomization으로 AN과 정신·대사 형질 간 공유 및 인과 관계 분석",
          "국소 유전적 상관 분석으로 185개 유의 게놈 영역 식별, 100개 다면발현 유전자좌 확인",
          "MTAG 분석으로 86개 유의 유전자좌(25개 신규: VAMP2, LPL, BDNF 포함) 동정",
          "WGCNA로 대사·신경 경로 연관 유전자 모듈 발굴",
          "단일세포 전사체 분석으로 변연계·선조체 GABAergic 뉴런에 유전적 위험 농축 확인"
        ],
        "concepts": [
          "gwas-association-testing",
          "genetic-architecture",
          "mendelian-randomization",
          "genetic-correlation",
          "fine-mapping",
          "summary-statistics-methods",
          "partitioned-heritability",
          "single-cell-eqtl"
        ],
        "tldr": "신경성 식욕부진증(AN) GWAS 메타분석으로 SOX5 근처 신규 유전자좌 발견, 유전적 상관·MR·MTAG으로 정신-대사 경로 연결 고리를 규명하고 단일세포 분석으로 GABAergic 뉴런에 유전적 위험 집중 확인.",
        "question": "AN의 유전적 구조에서 정신 증상과 대사 요인을 연결하는 유전자좌와 기전은 무엇인가?",
        "key_result": "SOX5 근처 신규 genome-wide significant 유전자좌 발견; MTAG에서 86개 유전자좌(25개 신규); 100개 다면발현 유전자좌; GABAergic 뉴런에 위험 집중; LPL, BDNF, VAMP2 등 대사-신경 허브 유전자 발굴.",
        "why_for_us": "GWAS, 유전적 상관, MR, fine-mapping, 단일세포 전사체 통합 분석 파이프라인의 전형적 사례. 신경-대사 공유 유전구조 연구와 직결되며 방법론(MTAG, 국소 유전 상관) 참고 가능.",
        "limitations": "유럽·핀란드 집단 위주로 교차집단 일반화 제한. AN의 이질성으로 인한 유전구조 복잡성. 단일세포 분석은 기존 데이터 재분석 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Molecular regulatory mechanisms of schizophrenia-associated functional non-coding variants.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41927765/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41927765/",
        "doi": "https://doi.org/10.1038/s41380-026-03566-8",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Dai SS",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "ChIP-seq과 position weight matrix(PWM)를 통합하여 SCZ 위험 유전자좌 내 전사인자 결합 영향 변이 249개(99개 유전자좌) 동정",
          "뇌 eQTL 데이터로 207개 TF결합 영향 SNP의 유전자 발현 연관성 주석",
          "기능 변이 미동정 92개 유전자좌에서 fine-mapping + motifbreakR 적용으로 잠재적 인과 변이 발굴",
          "MPRA 데이터로 35개 기능 변이의 조절 효과 검증",
          "SCZ 환자 대 대조군 발현 분석으로 기능 변이 연관 유전자의 발현 이상 확인"
        ],
        "concepts": [
          "noncoding-regulatory-variants",
          "fine-mapping",
          "molecular-qtl",
          "mpra",
          "credible-set",
          "brain-eqtl-grn"
        ],
        "tldr": "SCZ GWAS 위험 유전자좌에서 ChIP-seq + PWM 통합으로 249개 전사인자 결합 영향 기능적 변이를 동정하고, MPRA 및 eQTL 주석으로 뇌 유전자 발현 조절 기전을 체계적으로 해석.",
        "question": "SCZ GWAS의 비코딩 위험 변이들이 어떤 전사인자 결합과 유전자 발현 조절 기전을 통해 기능하는가?",
        "key_result": "249개 기능적 비코딩 변이 동정(99개 유전자좌), 207개가 뇌 eQTL과 유의 연관; MPRA로 35개 변이 조절 효과 검증; SCZ 환자에서 연관 유전자 발현 이상 확인.",
        "why_for_us": "noncoding-regulatory-variants, fine-mapping, eQTL, MPRA 통합 워크플로우의 구체적 SCZ 적용 사례. 기능 유전체 접근법으로 GWAS 신호를 질환 생물학으로 연결하는 전략 직접 참고 가능.",
        "limitations": "뇌 eQTL 데이터의 세포 타입 해상도 제한. MPRA는 세포 맥락에 따라 조절 효과가 달라질 수 있음. 기능 검증의 in vivo 부재.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A longitudinal DNA methylation atlas and its link to brain structure and mental health.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41917495/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41917495/",
        "doi": "https://doi.org/10.1038/s41380-026-03554-y",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Chen D",
        "rating": 4,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "IMAGEN 코호트(n=506, 14-19세)에서 372,582 CpG 에피게놈 전반 메틸화 및 전뇌 구조 MRI 종단 측정",
          "공동 조절 DNAm 클러스터 18개 도출, 뇌 발현 유전자 농축 분석",
          "PPMI(n=513), ADNI(n=606) 성인 샘플에서 클러스터 재현성 검증",
          "DNAm 변화와 피질-피질하 성숙(전두-변연-선조체 축) 간 다변량 커플링 분석",
          "우울 증상, 대마 사용, 폭음 증가와 DNAm 변화 연관 및 매개 분석",
          "클러스터 C1·C7의 우울·음성 정신병 증상 연관, PPMI에서 복제"
        ],
        "concepts": [
          "molecular-qtl",
          "neurodevelopmental-trajectory",
          "sex-differences-psychiatric"
        ],
        "tldr": "청소년 종단 코호트(IMAGEN, n=506, 14-19세)에서 DNA 메틸화 변화가 뇌 피질-피질하 성숙, 우울 증상, 물질 사용과 연결됨을 보이며, DNAm이 행동-뇌 변화의 후성유전적 매개체임을 제시.",
        "question": "청소년기 종단 DNA 메틸화 변화가 뇌 구조 성숙 및 정신건강 결과와 어떻게 연관되는가?",
        "key_result": "18개 DNAm 클러스터 중 10개가 신경 발달 관련 유전자 농축; 뇌 관련 클러스터 DNAm 감소 → 피질 얇아짐·피질하 체적 변화 동반; 클러스터 C1·C7이 우울 및 음성 정신병 증상과 연관, PPMI에서 재현; DNAm이 행동과 뇌 변화 사이의 매개체로 기능.",
        "why_for_us": "종단 메틸화 분석, 에피게놈 클러스터링, 뇌 구조 MRI-DNAm 통합, 정신건강 표현형 연관 분석 방법론이 랩의 methylation·neuro 연구에 직접 관련. MDD, ASD 등 신경정신 질환의 후성유전적 기반 연구 참고.",
        "limitations": "사춘기 유럽계 코호트 위주로 일반화 제한. 혈액 유래 DNAm이 뇌 조직 반영에 한계. 인과 방향성은 매개 모델에 의존.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Advancing Alzheimer's disease research in China: insights, innovations, and future directions from the chinese preclinical Alzheimer's disease study (CPAS).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42542440/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42542440/",
        "doi": "https://doi.org/10.1038/s41380-026-03797-9",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Wang J",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "2019년 시작된 CPAS 코호트 설계 및 주요 결과 리뷰",
          "인지 정상~MCI~치매에 이르는 스펙트럼 참가자 대상 Aβ-PET, 혈장 바이오마커, 시냅스 PET 마커 분석",
          "멀티오믹스 접근법을 AD 이해·치료에 적용하는 미래 방향 제시"
        ],
        "concepts": [
          "mendelian-randomization",
          "polygenic-risk-score"
        ],
        "tldr": "중국 전임상 알츠하이머 연구(CPAS) 코호트를 기반으로 AD 조기 진단 바이오마커, PET 영상, 멀티오믹스 접근법 등의 성과를 리뷰한 논문.",
        "question": "CPAS 코호트에서 얻은 혈장 바이오마커·PET 영상·멀티오믹스 데이터가 AD 조기 진단과 치료 개발에 어떻게 기여하는가?",
        "key_result": "Aβ-PET이 진단·치료 결정에 영향을 미치며, 아밀로이드 병리 위험 인자가 규명되었고, 혈장 바이오마커 패널 확장이 AD 조기 진단 정밀도를 높임.",
        "why_for_us": "AD 멀티오믹스 및 바이오마커 연구 방향과 맞닿아 있으며, 랩의 neuro(AD) 및 멀티오믹스 통합 관심사와 연결됨.",
        "limitations": "리뷰 논문으로 원데이터 분석 없이 기존 연구 요약에 한정; 중국 단일 코호트 기반이라 일반화 한계 있음.",
        "reuse": "",
        "next_step": "질환 수정 치료법 탐색 및 멀티오믹스 기반 개인화 의학 적용을 향후 방향으로 제시."
      },
      {
        "title": "Alzheimer disease in the computational era: from a deterministic disease to a multifaceted disorder.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42530031/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42530031/",
        "doi": "https://doi.org/10.1093/brain/awag248",
        "journal": "Brain : a journal of neurology",
        "year": "2026",
        "author": "Benbaji M",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "1908년 Kraepelin 정의부터 2024년 Alzheimer's Association 개정 기준까지 AD 정의의 역사적 변천을 체계적으로 검토",
          "AD의 조기 인지·행동 변화, 핵심 병리·공존 병리·위험인자, 피질 및 피질하 뇌영역 변화, 복잡한 유전 지형 등 다면적 임상 양상 기술",
          "부분 모델→확률적 대리 모델→확률적 결합 레이어로 이어지는 메타모델링 계산 프레임워크 설계 제안"
        ],
        "concepts": [
          "genetic-architecture",
          "polygenic-risk-score",
          "missing-heritability"
        ],
        "tldr": "알츠하이머병(AD)의 정의 변천사를 검토하고, 다차원 임상·병리·유전 데이터를 통합하는 메타모델링 기반 계산 프레임워크를 제안하여 AD를 단일 범주가 아닌 층화된 노소학으로 재개념화함.",
        "question": "AD의 복잡한 임상·병리·유전 이질성을 어떻게 계산적으로 통합·층화할 수 있는가?",
        "key_result": "다양한 데이터 하위집합으로 부분 모델을 구축하고 공유 변수·파라미터를 통해 연결함으로써, 개별 환자의 궤적 예측·병기 결정·임상 층화·귀인 지도를 생성하는 프레임워크를 개념적으로 제시.",
        "why_for_us": "랩에서 진행하는 AD GWAS/멀티오믹스·PRS 연구와 연결되며, 유전·후성유전·단세포 데이터를 통합하는 계산 전략 참고에 유용. 환자 층화 및 유전적 복잡성 논의가 관련.",
        "limitations": "구체적인 실험 데이터 없이 개념적 프레임워크만 제시; 메타모델링의 실제 구현 및 검증 결과 미제시.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Convergent neuroimmune signaling underlying rapid antidepressant response to ketamine and psychedelics.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42521762/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42521762/",
        "doi": "https://doi.org/10.1038/s41380-026-03777-z",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Jones GH",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "건강 자원자 CSF 프로테오믹스(케타민 정맥 투여) 수행",
          "치료저항성 우울증(TRD) 및 건강 자원자로부터 유래한 iPSC에 케타민·(2R,6R)-HNK·LSD·사이로사이빈 처리 후 전사체 분석",
          "TRD vs 건강 자원자 코호트에서 케타민 단회 투여 전후 전혈 전사체(n=16 TRD, 11 HV), MEG(n=30 TRD, 25 HV), 혈장 사이토카인(n=39 TRD, 25 HV) 멀티모달 측정"
        ],
        "concepts": [
          "brain-body-immune-circuits"
        ],
        "tldr": "케타민과 사이키델릭스의 빠른 항우울 효과가 공통된 신경면역 신호 경로(IL-15, MCP-1)로 수렴함을 CSF 프로테오믹스·iPSC 전사체·혈장 사이토카인 멀티모달 분석으로 밝힘.",
        "question": "케타민과 사이키델릭스는 수용체 표적이 다름에도 왜 빠른 항우울 반응을 공유하는가? 공통 하위 분자 메디에이터가 존재하는가?",
        "key_result": "CSF 및 iPSC 뉴런에서 IL-15와 MCP-1이 공통 면역 경로 핵심 허브로 도출됨. 케타민 반응군은 기저 IL-15 감소·B세포 신호 증가 패턴이 치료 후 역전됨. 혈장 IL-7(B세포 주요 드라이버)이 기저 MEG 감마 파워와 상관(전체 참가자 뇌 전체 유의, main effect p값 명시 미완료)",
        "why_for_us": "MDD 병태생리에서 신경면역 교차점 연구 관련성 있음. 프로테오믹스+전사체+사이토카인 멀티오믹스 통합 접근 방식이 랩 관심 방법론과 일치.",
        "limitations": "초록 내 일부 p값 수치가 잘림. iPSC 모델이 생체 내 환경을 완전히 반영하지 못할 수 있음. 코호트 규모가 비교적 소규모.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Narcolepsy is (not) an autoimmune disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42321519/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42321519/",
        "doi": "https://doi.org/10.1038/s41582-026-01232-9",
        "journal": "Nature reviews. Neurology",
        "year": "2026",
        "author": "Vassalli A",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "HLA-DQB1*06:02 연관성 및 자가반응성 면역 반응 증거 검토",
          "사후 뇌 조직에서 HCRT 유전자 후성유전적 변화 문헌 정리",
          "두 모델(자가면역 파괴 vs. 후성유전적 침묵)의 치료적 함의 비교"
        ],
        "concepts": [
          "fine-mapping",
          "noncoding-regulatory-variants"
        ],
        "tldr": "기면증 1형(NT1)의 자가면역 파괴 모델과 후성유전적 HCRT 유전자 침묵 모델을 비교 검토하고, HLA-DQB1*06:02 연관성의 기전적 의미와 치료 함의를 비판적으로 고찰한다.",
        "question": "NT1에서 HCRT 결핍은 자가면역에 의한 뉴런 파괴로 발생하는가, 아니면 면역 유발 후성유전적 유전자 침묵으로 발생하는가?",
        "key_result": "NT1은 HLA와 강하게 연관되나 자가면역 파괴가 원인인지 결과인지 불명확; 후성유전적 침묵 모델은 HCRT 뉴런 보존 가능성을 시사하며 다른 치료 전략을 요구함",
        "why_for_us": "HLA 유전학, 자가면역 질환 후성유전학(methylation), neuro-autoimmune 교차 관심사와 부합; HLA fine-mapping 및 autoimmune epigenomics 연구에 배경 지식 제공",
        "limitations": "Perspective 논문으로 원 데이터 없음; 두 모델 모두 결정적 증거 부재",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Liver-derived complement component 3 promotes the susceptibility to stress-induced depression by impairing blood-brain barrier integrity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41942771/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41942771/",
        "doi": "https://doi.org/10.1038/s41380-026-03551-1",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Deng T",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "마우스 3종 우울증 모델에서 간 C3 발현 및 NAc BBB 투과성 측정",
          "간 특이적 C3 유전자 결실·재발현·과발현 실험으로 행동 및 BBB 표현형 인과 관계 검증",
          "C3a 수용체-C/EBPα 신호 경로와 NF-κB에 의한 코르티코스테론-C3 축 규명"
        ],
        "concepts": [
          "mendelian-randomization",
          "colocalization",
          "brain-body-immune-circuits"
        ],
        "tldr": "간 유래 보체 C3가 만성 스트레스 하에 혈뇌장벽(BBB) claudin-5를 억제하여 NAc BBB 투과성을 높이고 우울증 취약성을 증가시킨다는 동물 실험 연구.",
        "question": "간에서 분비되는 C3가 만성 스트레스 유발 우울증에서 어떤 말초-뇌 경로로 우울 행동을 촉진하는가?",
        "key_result": "간 C3 결실 시 CSDS 유발 NAc BBB 투과성 증가 및 우울 행동 개선; 간 C3 과발현만으로도 역치하 스트레스 후 우울 행동 유발. 기전: 간 C3 → C3a 수용체 → C/EBPα → claudin-5 억제 → BBB 파괴.",
        "why_for_us": "랩의 보체(C3/C4) 및 신경정신질환 관심 영역과 교차. MDD 병리기전에서 보체-BBB 축 이해에 기여. C3 유전변이(QTL, GWAS)와 MDD 위험의 연결 고리를 탐색하는 MR/colocalization 연구의 생물학적 배경으로 활용 가능.",
        "limitations": "마우스 동물 실험에 국한되어 인간 MDD 직접 적용에 한계. 간 외 조직 C3 기여도 완전히 배제 안 됨. NAc 이외 뇌 영역 BBB 효과 미검토.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Neuronal HDAC9: A key regulator of cognitive and synaptic aging, rescuing Alzheimer's disease-related phenotypes.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41935184/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41935184/",
        "doi": "https://doi.org/10.1038/s41380-026-03556-w",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Lei Y",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "인간 및 마우스 뇌에서 HDAC9 발현의 연령별 변화 분석",
          "HDAC9 전신 결손 및 해마 CA1 뉴런 선택적 결손 마우스에서 인지·시냅스 가소성 표현형 평가",
          "전뇌 글루타마테르직 뉴런에 HDAC9 과발현 바이러스 투여 후 노화 마우스 인지 기능 보존 검증",
          "AD 마우스 모델에서 HDAC9 발현 저하 확인 및 과발현을 통한 인지·시냅스 결함, Aβ 침착 완화"
        ],
        "concepts": [
          "aging-genetics",
          "dendritic-spine-plasticity"
        ],
        "tldr": "뉴런 특이적 HDAC9가 인지·시냅스 노화를 조절하며, HDAC9 과발현이 노화 마우스 및 알츠하이머 마우스 모델에서 인지 기능과 Aβ 침착을 개선.",
        "question": "HDAC9가 노화 및 알츠하이머 맥락에서 인지·시냅스 기능 유지에 필수적인가?",
        "key_result": "HDAC9는 노화에 따라 발현 감소; 결손 시 인지·시냅스 장애 유발; 과발현 시 노화 마우스 인지 기능 보존 및 AD 마우스에서 인지·시냅스 결함과 Aβ 침착 감소.",
        "why_for_us": "aging-genetics 및 AD 후성유전적 기전 관심 영역. 구체적 HDAC 아이소폼의 뇌 세포 타입별 역할 규명은 neuro 도메인 연구와 연관.",
        "limitations": "마우스 모델에 국한; 인간 AD 환자 조직에서의 직접 검증 부재. HDAC9의 구체적 크로마틴 타깃 미기술.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "A key gene modulating oxytocin efficacy in autism: genome-wide discovery and verification in randomized controlled trials datasets.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41904269/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41904269/",
        "doi": "https://doi.org/10.1038/s41380-026-03562-y",
        "journal": "Molecular psychiatry",
        "year": "2026",
        "author": "Kuwabara H",
        "rating": 3,
        "emoji": "🧠",
        "domain": "신경",
        "what_they_did": [
          "옥시토신 단회 투여 RCT 데이터로 전장유전체연관분석(GWAS) 수행: 내측 전전두피질 활성화 변화량을 표현형으로 사용",
          "세 건의 독립 RCT(반복 투여, ADOS 사회적 상호성 영역 개선 평가)에서 발굴된 SNP를 검증"
        ],
        "concepts": [
          "gwas-association-testing",
          "fine-mapping",
          "molecular-qtl"
        ],
        "tldr": "ASD 환자 대상 옥시토신 무작위대조시험 데이터로 GWAS를 수행해, RYR2 유전자 내 SNP(rs1871303)가 옥시토신 치료 반응성에 유의하게 관련됨을 발견·검증했다.",
        "question": "ASD에서 옥시토신 치료 반응의 개인차를 설명하는 유전 변이가 존재하는가?",
        "key_result": "rs1871303(RYR2)이 전장유전체 유의수준 달성(β=2.37, t=7.82, P=3.47×10⁻⁹). 독립 검증 코호트(n=135)에서 ADOS 상호성 개선과 유의한 연관(β=0.194, P=0.023). 위약 반응과는 무관(P>0.1).",
        "why_for_us": "약물유전체학 GWAS 설계·검증 파이프라인 사례로, 랩의 GWAS/pharmacogenomics 방법론 관심과 부합. ASD 유전체 연구에도 관련. 표현형으로 뇌 영상-행동 지표를 사용하는 점이 참신하다.",
        "limitations": "발견 GWAS의 표본 크기가 소규모(df=72); 검증 코호트도 n=135로 제한적. 기능 메커니즘(칼슘 채널 신호) 은 추정 수준.",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Mitochondrial metabolism and epigenetic crosstalk drive SASP.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42527602/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42527602/",
        "doi": "https://doi.org/10.1038/s41586-026-10791-2",
        "journal": "Nature",
        "year": "2026",
        "author": "Martini H",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "노화 세포에서 미토콘드리아 피루빈산-구연산-아세틸-CoA 축의 상향 조절을 확인",
          "아세틸-CoA 공급이 SASP 유전자 좌위의 히스톤 아세틸화를 뒷받침함을 증명",
          "SLC25A1(미토콘드리아 구연산 수송체) 억제가 크로마틴 접근성 감소 및 SASP 완화 효과를 나타냄을 in vivo 마우스 모델에서 검증",
          "미토콘드리아 DNA 신호(innate immune 활성화)와 아세틸-CoA 가용성이 SASP의 두 층위 조절자임을 규명"
        ],
        "concepts": [
          "aging-genetics",
          "noncoding-regulatory-variants"
        ],
        "tldr": "노화 세포의 SASP(노화연관 분비표현형)가 미토콘드리아 대사(피루빈산-구연산-아세틸-CoA 축)와 후성유전학적 히스톤 아세틸화의 협력으로 조절되며, SLC25A1 억제가 염증을 줄이고 마우스 건강 수명을 개선한다는 것을 보였다.",
        "question": "미토콘드리아 대사와 후성유전체 변화가 SASP 유전자 발현을 어떻게 함께 조절하는가?",
        "key_result": "SLC25A1 억제 시 SASP 유전자 좌위의 히스톤 아세틸화 및 크로마틴 접근성 감소, 전신 염증 감소, 노령 마우스의 건강 수명 개선 확인",
        "why_for_us": "노화-유전체 및 에피지놈 통합 연구(aging, epigenomics, ChIP/ATAC-seq)와 inflammaging에 직결. ATAC-seq 기반 크로마틴 접근성 변화와 히스톤 아세틸화를 멀티오믹스 맥락에서 해석하는 프레임워크로 활용 가능.",
        "limitations": "인간 세포/조직에 대한 직접적 검증 부재; SLC25A1 억제의 장기 독성 및 오프-타겟 효과 미평가",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Genomic, epigenomic and transcriptomic regulation of cellular senescence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42527539/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/42527539/",
        "doi": "https://doi.org/10.1038/s41576-026-00982-y",
        "journal": "Nature reviews. Genetics",
        "year": "2026",
        "author": "Salekeen R",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "세포 노화를 유발하는 DNA 손상 반응, 비유전독성 스트레스 경로, 후성유전 변화, 세포간 커뮤니케이션 등을 문헌 종합",
          "SASP(노화 관련 분비 표현형)의 조절 기전 정리",
          "단일세포·공간 멀티오믹스 및 새로운 유전 모델의 적용 가능성 논의"
        ],
        "concepts": [
          "aging-genetics",
          "spatial-transcriptomics",
          "noncoding-regulatory-variants"
        ],
        "tldr": "세포 노화(senescence)의 유전체·후성유전체·전사체 조절 기전을 리뷰하며, 단일세포·공간 멀티오믹스 및 머신러닝을 활용한 연구 방향을 제시.",
        "question": "세포 노화를 유도·유지·전파·다양화하는 유전적·후성유전적 경로는 무엇이며, 어떻게 정밀하게 측정할 수 있는가?",
        "key_result": "세포 노화의 유전체·후성유전체·전사체 조절 체계를 체계적으로 정리; 차세대 바이오마커 및 노화세포 추적 기술의 필요성 강조",
        "why_for_us": "aging genetics, 후성유전체(methylation/ATAC), 단일세포 멀티오믹스가 교차하는 노화 분야 리뷰로, 랩의 aging·epigenomics·single-cell 관심사와 부합",
        "limitations": "리뷰 논문으로 신규 실험 데이터 없음; 특정 질환 맥락 분석 미포함",
        "reuse": "",
        "next_step": ""
      },
      {
        "title": "Chromatin remodeling in pericentral hepatocytes modulates MASH through CYP450 activity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41935542/",
        "pubmed": "https://pubmed.ncbi.nlm.nih.gov/41935542/",
        "doi": "https://doi.org/10.1016/j.jhep.2026.03.035",
        "journal": "Journal of hepatology",
        "year": "2026",
        "author": "Zhang Z",
        "rating": 3,
        "emoji": "📄",
        "domain": "기타",
        "what_they_did": [
          "Lgr5 트랜스제닉 C57BL/6J 마우스에 fructose-palmitate-cholesterol 또는 choline-deficient 고지방 식이를 투여해 MASLD/MASH 유도",
          "scRNA-seq, spatial transcriptomics, ATAC-seq, CUT&Tag, CUT&RUN 멀티모달 분석으로 Cyp2 유전자의 후성유전적·전사 조절 분석",
          "Lgr5 양성 세포에서 DPF2 조건부 결손 마우스 제작 및 표현형 분석"
        ],
        "concepts": [
          "spatial-transcriptomics",
          "noncoding-regulatory-variants"
        ],
        "tldr": "간 pericentral 간세포에서 DPF2 크로마틴 리모델러가 CYP2 효소 발현을 조절하며 MASH 진행에 관여함을 멀티모달 단일세포 분석으로 규명.",
        "question": "MASH(대사이상 지방간염) 진행에서 pericentral 간세포의 크로마틴 리모델링이 어떤 역할을 하는가?",
        "key_result": "DPF2가 Lgr5 양성 pericentral 간세포에서 CYP450 Cyp2 유전자 발현을 크로마틴 수준에서 조절하며, DPF2 결손 시 MASH 관련 표현형이 변화함.",
        "why_for_us": "scRNA-seq + spatial transcriptomics + ATAC-seq 멀티모달 분석 파이프라인 사례로서 방법론 참고 가능. 직접적 질환 관련성은 낮으나 단일세포 후성유전체 통합 분석 전략 학습에 유용.",
        "limitations": "마우스 모델 기반 연구로 인간 MASH에 대한 직접적 검증 필요. 초록에 세부 수치 미제시.",
        "reuse": "",
        "next_step": ""
      }
    ]
  }
];
