# KNU Genomic Medicine Lab 

GitHub Pages용 정적 사이트. 빌드 과정 없이 HTML/CSS/JS 파일만으로 동작

https://kkonoo.github.io/halab-site/

http://halab.knu.ac.kr

## 파일 구조
```
halab-site/
├── index.html          # Home
├── about.html          # About
├── members.html        # Members
├── publications.html   # Publications
├── news.html           # News
├── contact.html        # Contact
├── CNAME               # 커스텀 도메인 (halab.knu.ac.kr)
├── .nojekyll           # GitHub의 Jekyll 처리 비활성화
└── assets/
    ├── css/styles.css  # 전체 디자인
    ├── js/main.js      # 모바일 메뉴 + 스크롤 애니메이션
    └── img/            # 사진을 여기에 넣으세요
```


## GitHub Pages 켜기
저장소 → **Settings → Pages** →
- Source: **Deploy from a branch**
- Branch: **main** / **/ (root)** → Save

잠시 뒤 `https://kkonoo.github.io/<저장소이름>/` 에서 사이트 열림

## 커스텀 도메인(halab.knu.ac.kr) 연결
1. Settings → Pages → **Custom domain** 에 `halab.knu.ac.kr` 입력 → Save
   (저장소에 포함된 `CNAME` 파일이 이미 있음)
2. **학교 전산원에 DNS 설정을 요청**합니다. halab.knu.ac.kr 은 knu.ac.kr 의 하위 도메인이라 보통 전산원이 관리합니다. 다음 중 하나를 요청
   - **CNAME 레코드**: `halab.knu.ac.kr` → `kkonoo.github.io`
3. DNS가 적용되면 GitHub Pages에서 **Enforce HTTPS** 를 체크

## 사진 넣기
1. 사진 파일을 `assets/img/` 에 추가. (예: `eunji-ha.jpg`)
2. `members.html` 에서 해당 멤버의
   `<div class="photo">EH</div>` 부분을
   `<div class="photo"><img src="assets/img/eunji-ha.jpg" alt="Eunji Ha"></div>` 로 변경

## 내용 수정 (중요)
글/논문은 **HTML이 아니라 데이터 파일만** 수정. 
페이지 나눔(10개씩)과 홈 화면의 최신 뉴스 4개는 자동으로 처리

- **뉴스**: `assets/js/news-data.js` 를 엽니다.
  배열 맨 위에 아래 형식으로 항목 하나를 추가 (최신이 위로)
  ```js
  {
    date: "Jun 2026",
    title: "제목 \uD83C\uDF89",
    image: "assets/img/사진이름.jpg",   // 사진 없으면 ""  (빈 따옴표)
    body: ["첫 문단.", "둘째 문단."]
  },
  ```
  → News 페이지 카드와 Home의 "Latest News"에 자동 반영

- **논문**: `assets/js/publications-data.js` 를 엽니다. 배열 맨 위에 추가
  ```js
  {
    title: "논문 제목",
    url: "https://doi.org/...",
    authors: "First Author, <b>Eunji Ha</b>, ... Last Author<sup>*</sup>",
    venue: "Nature", year: "2026"
  },
  ```
  → 번호(01, 02 …)는 자동으로 매겨지고, 10편이 넘으면 다음 페이지가 생김

> ⚠️ JS 문법 주의: 각 항목은 `{ }` 로 감싸고, **항목 사이에는 쉼표(,)** 
> 따옴표 안에서 따옴표를 쓰려면 `\'` 처럼 역슬래시. 쉼표/따옴표가 빠지면
> 목록이 안 뜰 수 있으니, 기존 항목을 복사해서 내용만 바꾸는 방식을 권장

- 멤버 추가: `members.html` 의 `member-grid` 에 `.member` 블록을 복사해 수정
- 뉴스/논문 추가: `assets/js/*data.js` 수정
- 색상/폰트: `assets/css/styles.css` 상단 `:root` 변수에서 조정

## 카드뉴스 (Note 페이지 · Field updates)
Note 페이지 상단 **Field updates** 섹션은 `lab-wiki` 가 매주 만드는 카드뉴스
(`~/lab-wiki/wiki/cards/YYYY-MM-DD.md`)를 보여줍니다. 데이터 파일
`assets/js/cards-data.js` 는 **자동 생성**되므로 직접 고치지 마세요.

매주 새 카드가 나오면 (이 사이트 폴더와 무관하게) 아래 한 줄만 실행 →
검토 → 커밋/푸시 하면 사이트에 반영됩니다.

```bash
# 1) 최신 카드뉴스(.md)를 사이트 데이터로 변환
python ~/lab-wiki/lab-monitor/publish_to_site.py        # --dry-run 으로 미리보기 가능

# 2) 변경 확인 후 커밋·푸시
cd ~/halab-site
git add assets/js/cards-data.js
git commit -m "cardnews update"
git push
```

- 처음에는 **관련도 높은 상위 10편만** 보이고, "더 보기"로 전체를 펼칩니다.
  몇 편 보일지는 `assets/js/render-cards.js` 의 `INITIAL_LIMIT` 숫자로 조정.
- 과거 주차는 `wiki/cards/` 에 파일이 남아 있는 한 사이트의 **주차 선택**
  드롭다운에서 계속 볼 수 있습니다. 화면에서는 분야 필터·키워드 검색·펼치기 지원.
- 데이터는 `monitor.py` 가 만드는 **`YYYY-MM-DD.json`** 사이드카에서 읽습니다
  (마크다운 서식이 바뀌어도 사이트는 안 깨짐). json 이 없는 옛 주차는 `.md` 를
  자동 파싱합니다. 카드 형식을 크게 바꾸면 `publish_to_site.py` 와
  `render-cards.js` 만 손보면 됩니다.
