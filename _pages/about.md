---
layout: about
title: about
permalink: /
subtitle: AI Researcher & Creative Thinker

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Seoul, South Korea</p>
    <p>AI & Machine Learning</p>

news: true
selected_papers: true
social: true

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<!-- 전체 화면 대문 섹션 -->
<div class="fullscreen-door-section" role="banner" aria-label="Yellow Gradients 입구">
  <!-- 떠다니는 입자 효과 -->
  <div class="floating-particles">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
  
  <div class="door-overlay">
    <h1 class="door-title">Yellow Gradients</h1>
    <p class="door-subtitle">Where AI meets Creativity</p>
    <div class="door-cta">
      <button class="enter-btn" onclick="scrollToContent()" aria-label="메인 컨텐츠로 이동">
        <i class="fas fa-door-open"></i> Enter
      </button>
    </div>
  </div>
  <div class="scroll-indicator" aria-hidden="true">
    <i class="fas fa-chevron-down"></i>
  </div>
</div>

<!-- 메인 컨텐츠 시작 -->
<div id="main-content" class="main-content-wrapper">
  <div class="hero-section">
    <h1 class="hero-title">안녕하세요, <span class="gradient-text">AI 연구자</span>입니다</h1>
    <p class="hero-subtitle">인공지능과 창의성이 만나는 곳</p>
  </div>

  <div class="main-sections">
    <!-- Portfolio Section -->
    <div class="section-card portfolio-section">
      <h2 class="section-title"><i class="fas fa-briefcase"></i> Portfolio</h2>
      <p class="section-desc">연구 성과와 프로젝트를 확인하세요</p>
      <div class="section-links">
        <a href="{{ '/cv/' | relative_url }}" class="section-link">
          <i class="fas fa-file-alt"></i> CV
        </a>
        <a href="{{ '/publications/' | relative_url }}" class="section-link">
          <i class="fas fa-book"></i> Publications
        </a>
        <a href="{{ '/projects/' | relative_url }}" class="section-link">
          <i class="fas fa-code"></i> Projects
        </a>
      </div>
    </div>

    <!-- Blog Section -->
    <div class="section-card blog-section">
      <h2 class="section-title"><i class="fas fa-feather"></i> Yellow Gradients</h2>
      <p class="section-desc">AI에 대한 따뜻한 이야기와 일상을 담은 블로그</p>
      <div class="section-links">
        <a href="{{ '/blog/' | relative_url }}" class="section-link">
          <i class="fas fa-pen"></i> Blog Posts
        </a>
        <a href="{{ '/gallery/' | relative_url }}" class="section-link">
          <i class="fas fa-camera"></i> Photo Gallery
        </a>
        <a href="{{ '/thoughts/' | relative_url }}" class="section-link">
          <i class="fas fa-brain"></i> AI Thoughts
        </a>
      </div>
    </div>
  </div>
</div>

<div class="recent-highlights">
  <h3 class="highlights-title">Recent Highlights</h3>
  <div class="highlights-grid">
    <!-- 최근 블로그 포스트 미리보기 -->
    <div class="highlight-card">
      <span class="highlight-badge">Blog</span>
      <h4>최신 AI 트렌드 분석</h4>
      <p>GPT-4와 함께하는 창의적인 프로젝트...</p>
    </div>
    <!-- 최근 프로젝트 -->
    <div class="highlight-card">
      <span class="highlight-badge">Project</span>
      <h4>Computer Vision 연구</h4>
      <p>실시간 객체 인식 시스템 개발...</p>
    </div>
  </div>
</div>

Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpeg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.

<script>
function scrollToContent() {
  document.getElementById('main-content').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
</script>
