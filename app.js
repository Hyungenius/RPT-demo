(function () {
  const mock = window.RPTMock;
  const resultContainer = document.getElementById("result-container");
  const searchInput = document.getElementById("search-input");
  const searchForm = document.getElementById("search-form");
  const clearButton = document.getElementById("clear-search");
  const suggestionLayer = document.getElementById("suggestion-layer");
  const toast = document.getElementById("toast");

  let toastTimer;
  let selectedBubbleId = null;

  function formatLikes(value) {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
  }

  function setQuestionUrl(id) {
    const params = new URLSearchParams(window.location.search);
    if (id) {
      params.set("question", id);
    } else {
      params.delete("question");
    }
    const search = params.toString();
    const nextUrl = `${window.location.pathname}${search ? `?${search}` : ""}`;
    if (nextUrl !== `${window.location.pathname}${window.location.search}`) {
      window.history.pushState({}, "", nextUrl);
    }
  }

  function renderSuggestions() {
    suggestionLayer.innerHTML = mock.getQuestions()
      .map((question) => `
        <button
          class="suggestion-bubble ${selectedBubbleId === question.id ? "selected" : ""}"
          type="button"
          data-id="${question.id}"
        >
          <span class="suggestion-type">${question.typeLabel}｜</span>${question.label}
        </button>
      `).join("");
  }

  function openSuggestions() {
    renderSuggestions();
    suggestionLayer.classList.remove("hidden");
  }

  function closeSuggestions() {
    suggestionLayer.classList.add("hidden");
  }

  function clearResults() {
    resultContainer.innerHTML = "";
  }

  function renderIdle() {
    clearResults();
    resultContainer.innerHTML = `
      <section class="guide-state">
        <h1 class="state-title">点点 AI搜：如何让真人评论被看见</h1>
        <p>💬 让真人评论的经验与分歧，成为AI回答的依据，被更多用户看见。</p>
        <p>🔍 点击搜索框，选择预设问题，体验三类搜索场景。</p>
        <p>🛠️ 受数据源与时间限制，本 Demo 均使用模拟数据，未接入真实 API 或小红书站内数据，仅供交互演示。</p>
      </section>
    `;
  }

  function renderInvalid() {
    clearResults();
    resultContainer.innerHTML = `
      <section class="invalid-state">
        <h1 class="state-title">当前 Demo 暂未配置此问题</h1>
        <p>请点击下方按钮返回搜索，或选择已有的三个预设问题。</p>
        <button class="state-action" type="button" data-action="back-to-search">返回搜索</button>
      </section>
    `;
  }

  function renderPlanned(question) {
    const placeholderText = question.type === "objective" ? "客观问题的回答页面待设计。" : "过程问题的回答页面待设计。";
    clearResults();
    resultContainer.innerHTML = `
      <section class="placeholder-state">
        <h1 class="state-title">${question.label}</h1>
        <p>${placeholderText}</p>
        <button class="state-action" type="button" data-action="back-to-search">返回搜索 / 切换问题</button>
      </section>
    `;
  }

  // 双列帖子 feed：校招与进站攻略场景共用，date 存在时额外展示日期。
  function feedHtml(posts) {
    return `
      <section class="feed" id="post-feed" aria-label="相关帖子">
        ${posts.map((post, index) => `
          <article class="post-card">
            <img
              class="post-cover"
              src="${post.image}"
              alt="${post.title}"
              style="aspect-ratio: ${post.ratio}"
              loading="${index < 2 ? "eager" : "lazy"}"
            >
            <div class="post-body">
              <h2 class="post-title">${post.title}</h2>
              <div class="post-meta">
                <span class="avatar" style="background:${post.avatarColor}">${post.avatar}</span>
                <div class="post-meta-text">
                  <span class="author">${post.author}</span>
                  ${post.date ? `<span class="post-date">${post.date}</span>` : ""}
                </div>
                <button class="like-button" type="button" data-post-id="${post.id}" aria-label="点赞" aria-pressed="false">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
                  </svg>
                  <span>${formatLikes(post.likes)}</span>
                </button>
              </div>
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderCampus(question) {
    const data = question.data;
    const opinion = mock.getOpinionDistribution(question);
    clearResults();
    resultContainer.innerHTML = `
      <a class="overview-card" id="overview-card" href="${mock.buildDiandianUrl(question.id)}" aria-label="查看点点内容概览并进入点点回复页">
        <p class="overview-summary">${data.overview.summary}</p>
        <section class="opinion-section" aria-label="评论观点分布">
          <div class="opinion-header">
            <span class="opinion-title">评论观点分布</span>
            <span class="all-comments">全部评论 <span aria-hidden="true">›</span></span>
          </div>
          <div class="opinion-bar" role="img" aria-label="积极体验 ${opinion.positivePercent}%，消极体验 ${opinion.negativePercent}%">
            <span class="opinion-positive">积极体验 ${opinion.positivePercent}%</span>
            <span class="opinion-negative">消极体验 ${opinion.negativePercent}%</span>
          </div>
        </section>
        <div class="evidence-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>
          </svg>
          <span>${data.overview.evidence}</span>
        </div>
      </a>
      ${feedHtml(data.feed)}
    `;
  }

  // 搜推结果页的点点缩略卡：地铁与商科转码场景共用，攻略详情是否可用由配置控制。
  function renderGuide(question) {
    const guide = question.data.guide;
    const avatars = question.data.feed
      .slice(0, 2)
      .map((post) => `<img class="summary-avatar" src="${post.image}" alt="">`)
      .join("");

    // detailPending 为 true 时攻略页尚未开放，整卡点击退化为占位提示。
    const cardOpen = guide.detailPending
      ? `<section class="overview-card guide-card" id="overview-card" role="button" tabindex="0" data-action="open-guide" aria-label="攻略详情待完善">`
      : `<a class="overview-card guide-card" id="overview-card" href="${mock.buildDiandianUrl(question.id)}" aria-label="查看完整攻略">`;
    const cardClose = guide.detailPending ? "</section>" : "</a>";
    const entryHtml = guide.entryLabel
      ? `
        <span class="guide-entry" role="button" tabindex="0" data-action="open-guide">
          ${guide.entryLabel} <span aria-hidden="true">›</span>
        </span>
      `
      : "";

    clearResults();
    resultContainer.innerHTML = `
      ${cardOpen}
        <p class="overview-summary">${guide.summary}</p>
        ${entryHtml}
        <div class="guide-preview">
          <p class="guide-next">${guide.nextSectionTitle}</p>
          <span class="guide-fade" aria-hidden="true"></span>
        </div>
        <div class="summary-footer">
          <span>${guide.footerLabel || `总结${guide.summaryCount}篇笔记生成`}</span>
          <span class="summary-footer-avatars">${avatars}</span>
          <span class="summary-footer-arrow" aria-hidden="true">›</span>
        </div>
      ${cardClose}
      ${feedHtml(question.data.feed)}
    `;
  }

  function renderQuestion(question) {
    if (question.status !== "ready") {
      renderPlanned(question);
      return;
    }
    if (question.data?.guide) {
      renderGuide(question);
      return;
    }
    renderCampus(question);
  }

  function renderFromUrl() {
    const question = mock.getQuestionFromUrl();
    const invalidId = mock.getInvalidQuestionFromUrl();

    if (invalidId) {
      searchInput.value = "";
      renderInvalid();
      return;
    }

    if (!question) {
      searchInput.value = "";
      renderIdle();
      return;
    }

    searchInput.value = question.label;
    renderQuestion(question);
  }

  function searchQuestion() {
    const query = searchInput.value.trim();
    if (!query) {
      showToast("请输入搜索内容");
      return;
    }

    const question = mock.getQuestionByText(query);
    if (!question) {
      selectedBubbleId = null;
      setQuestionUrl(null);
      renderInvalid();
      showToast("当前 Demo 暂未配置此问题");
      return;
    }

    selectedBubbleId = question.id;
    setQuestionUrl(question.id);
    renderQuestion(question);
    closeSuggestions();
  }

  function backToSearch() {
    selectedBubbleId = null;
    setQuestionUrl(null);
    searchInput.value = "";
    renderIdle();
    searchInput.focus();
  }

  suggestionLayer.addEventListener("click", (event) => {
    const bubble = event.target.closest(".suggestion-bubble");
    if (!bubble) return;
    const question = mock.getQuestionById(bubble.dataset.id);
    if (!question) return;
    selectedBubbleId = question.id;
    searchInput.value = question.label;
    searchInput.focus();
    closeSuggestions();
  });

  searchInput.addEventListener("focus", openSuggestions);
  searchInput.addEventListener("click", openSuggestions);
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    selectedBubbleId = null;
    searchInput.focus();
  });
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuestion();
  });

  document.addEventListener("click", (event) => {
    const insideSearch = event.target.closest(".search-box");
    const insideSuggestions = event.target.closest("#suggestion-layer");
    if (!insideSearch && !insideSuggestions) {
      closeSuggestions();
    }
  });

  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.category === "问点点") {
        const overview = document.getElementById("overview-card");
        if (overview) {
          overview.click();
        } else {
          searchInput.focus();
        }
        return;
      }
      document.querySelectorAll(".category-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      showToast(`已切换到「${tab.dataset.category}」分类，当前 Demo 仅支持预设问题搜索`);
    });
  });

  resultContainer.addEventListener("click", (event) => {
    const backButton = event.target.closest('[data-action="back-to-search"]');
    if (backButton) {
      backToSearch();
      return;
    }

    const guideEntry = event.target.closest('[data-action="open-guide"]');
    if (guideEntry) {
      // 攻略详情页尚未开发：阻止整卡跳转，仅提示占位文案。
      event.preventDefault();
      const current = mock.getQuestionFromUrl();
      showToast(current?.data?.guide?.entryPlaceholder || "完整攻略待完善");
      return;
    }

    const likeButton = event.target.closest(".like-button");
    if (!likeButton) return;
    const question = mock.getQuestionFromUrl();
    const post = question?.data?.feed.find((item) => item.id === likeButton.dataset.postId);
    if (!post) return;
    const liked = likeButton.getAttribute("aria-pressed") !== "true";
    likeButton.setAttribute("aria-pressed", String(liked));
    likeButton.classList.toggle("liked", liked);
    post.likes += liked ? 1 : -1;
    likeButton.querySelector("span").textContent = formatLikes(post.likes);
  });

  window.addEventListener("popstate", renderFromUrl);

  renderSuggestions();
  renderFromUrl();
})();
