# KNU Genomic Medicine Lab — 홈페이지

GitHub Pages용 정적 사이트입니다. 빌드 과정 없이 HTML/CSS/JS 파일만으로 동작합니다.

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

## 1) GitHub에 올리기
연구실 GitHub 계정(kkonoo)에 새 저장소를 만들거나 기존 `HaLab` 저장소를 사용합니다.

```bash
cd halab-site
git init
git add .
git commit -m "Lab website"
git branch -M main
git remote add origin https://github.com/kkonoo/<저장소이름>.git
git push -u origin main
```

## 2) GitHub Pages 켜기
저장소 → **Settings → Pages** →
- Source: **Deploy from a branch**
- Branch: **main** / **/ (root)** → Save

잠시 뒤 `https://kkonoo.github.io/<저장소이름>/` 에서 사이트가 열립니다.

## 3) 커스텀 도메인(halab.knu.ac.kr) 연결
1. Settings → Pages → **Custom domain** 에 `halab.knu.ac.kr` 입력 → Save
   (저장소에 포함된 `CNAME` 파일이 이미 이 값을 갖고 있습니다.)
2. **학교 전산원에 DNS 설정을 요청**합니다. halab.knu.ac.kr 은 knu.ac.kr 의 하위 도메인이라 보통 전산원이 관리합니다. 다음 중 하나를 요청하세요:
   - **CNAME 레코드**: `halab.knu.ac.kr` → `kkonoo.github.io`
   - (또는 A 레코드로 GitHub Pages IP 4개 지정:
     185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153)
3. DNS가 적용되면 GitHub Pages에서 **Enforce HTTPS** 를 체크합니다.

> 참고: 현재 그 IP 서버에 직접 접속 권한이 없어도, 위 방식대로 GitHub Pages에 올리고 도메인만 GitHub 쪽으로 연결하면 됩니다.

## 사진 넣기
1. 사진 파일을 `assets/img/` 에 넣습니다. (예: `eunji-ha.jpg`)
2. `members.html` 에서 해당 멤버의
   `<div class="photo">EH</div>` 부분을
   `<div class="photo"><img src="assets/img/eunji-ha.jpg" alt="Eunji Ha"></div>` 로 바꿉니다.

## 내용 수정 (중요)
글/논문은 **HTML이 아니라 데이터 파일만** 고치면 됩니다. 페이지 나눔(10개씩)과
홈 화면의 최신 뉴스 4개는 자동으로 처리됩니다.

- **뉴스**: `assets/js/news-data.js` 를 엽니다.
  배열 맨 위에 아래 형식으로 항목 하나를 추가하세요 (최신이 위로).
  ```js
  {
    date: "Jun 2026",
    title: "제목 \uD83C\uDF89",
    image: "assets/img/사진이름.jpg",   // 사진 없으면 ""  (빈 따옴표)
    body: ["첫 문단.", "둘째 문단."]
  },
  ```
  → News 페이지 카드와 Home의 "Latest News"에 자동 반영됩니다.

- **논문**: `assets/js/publications-data.js` 를 엽니다. 배열 맨 위에 추가하세요.
  ```js
  {
    title: "논문 제목",
    url: "https://doi.org/...",
    authors: "First Author, <b>Eunji Ha</b>, ... Last Author<sup>*</sup>",
    venue: "Nature", year: "2026"
  },
  ```
  → 번호(01, 02 …)는 자동으로 매겨지고, 10편이 넘으면 다음 페이지가 생깁니다.

> ⚠️ JS 문법 주의: 각 항목은 `{ }` 로 감싸고, **항목 사이에는 쉼표(,)** 를 넣습니다.
> 따옴표 안에서 따옴표를 쓰려면 `\'` 처럼 역슬래시를 붙이세요. 쉼표/따옴표가 빠지면
> 목록이 안 뜰 수 있으니, 기존 항목을 복사해서 내용만 바꾸는 방식을 권장합니다.

- 멤버 추가: `members.html` 의 `member-grid` 에 `.member` 블록을 복사해 수정합니다.
- 논문 추가: `publications.html` 의 `pub-list` 에 `.pub` 블록 복사
- 색상/폰트: `assets/css/styles.css` 상단 `:root` 변수에서 조정
