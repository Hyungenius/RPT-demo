(function () {
  const mock = window.RPTMock;
  const chatScroll = document.getElementById("chat-scroll");
  const backLink = document.getElementById("back-link");
  const composer = document.getElementById("composer");
  const composerInput = document.getElementById("composer-input");

  const question = mock.getQuestionFromUrl();
  const rawQuestionId = new URLSearchParams(window.location.search).get("question");
  const isValid = question && question.status === "ready";

  backLink.href = mock.buildSearchUrl(question ? question.id : rawQuestionId);

  const formatLikes = (value) => (value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value));
  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  const heartIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
    </svg>
  `;

  const commentIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 9 9 0 0 1-3.8-.8L3 21l1.9-5.6a8.4 8.4 0 0 1-.9-3.9A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5Z"/>
    </svg>
  `;

  // 评论卡片：有 href 时为可跳转样式，否则渲染为纯静态展示。
  function commentBubble(comment, href) {
    const inner = `
      <span class="bubble-text">${escapeHtml(comment.excerpt)}</span>
      <span class="bubble-like">
        ${heartIcon}
        ${formatLikes(comment.likes)}
      </span>
    `;

    if (!href) {
      return `<div class="comment-bubble ${comment.sentiment} is-static">${inner}</div>`;
    }

    return `
      <a
        class="comment-bubble ${comment.sentiment}"
        href="${href}"
        aria-label="${comment.sentiment === "positive" ? "积极" : "消极"}评论：${escapeHtml(comment.excerpt)}，${comment.likes} 赞，查看原帖"
      >
        ${inner}
      </a>
    `;
  }

  // 观点分布组件：全岗位与算法场景共用，通过配置控制数据、是否展示「全部评论」及是否可点击。
  function opinionBlockHtml({ opinion, positiveComments, negativeComments, allCommentsHref, getHref }) {
    const header = allCommentsHref
      ? `
        <div class="opinion-header">
          <span class="opinion-title">评论观点分布</span>
          <a class="all-comments" href="${allCommentsHref}">
            全部评论 <span aria-hidden="true">›</span>
          </a>
        </div>
      `
      : `
        <div class="opinion-header">
          <span class="opinion-title">评论观点分布</span>
        </div>
      `;

    const barInner = `
      <span class="opinion-positive" style="width:${opinion.positivePercent}%">积极体验 ${opinion.positivePercent}%</span>
      <span class="opinion-negative" style="width:${opinion.negativePercent}%">消极体验 ${opinion.negativePercent}%</span>
    `;
    const barLabel = `积极体验 ${opinion.positivePercent}%，消极体验 ${opinion.negativePercent}%`;

    const bar = allCommentsHref
      ? `<a class="opinion-bar" href="${allCommentsHref}" aria-label="${barLabel}，查看全部评论">${barInner}</a>`
      : `<div class="opinion-bar is-static" role="img" aria-label="${barLabel}">${barInner}</div>`;

    const renderColumn = (comments) =>
      comments.map((comment) => commentBubble(comment, getHref ? getHref(comment) : null)).join("");

    return `
      <section class="opinion-section" aria-label="评论观点分布">
        ${header}
        ${bar}
        <div class="comment-columns">
          <div class="comment-column">${renderColumn(positiveComments)}</div>
          <div class="comment-column">${renderColumn(negativeComments)}</div>
        </div>
      </section>
    `;
  }

  // 引用示意：内联在句末，仅做视觉标记，不绑定跳转或点击。
  function citationChipHtml(extra) {
    return `
      <span class="citation-chip" aria-hidden="true">
        <span class="citation-avatars">
          <span class="citation-avatar is-warm"></span>
          <span class="citation-avatar is-green"></span>
        </span>
        <span class="citation-more">+${extra}</span>
      </span>
    `;
  }

  // 按配置在指定句子后插入引用示意。
  function sectionItemTextHtml(item) {
    const text = escapeHtml(item.text);
    if (!item.citation) return text;
    const anchor = escapeHtml(item.citation.after);
    const index = text.indexOf(anchor);
    if (index === -1) return text;
    const cut = index + anchor.length;
    return `${text.slice(0, cut)}${citationChipHtml(item.citation.extra)}${text.slice(cut)}`;
  }

  // 详细文字回复：全岗位与算法场景共用，沿用点点正文样式。
  function sectionsHtml(sections) {
    return sections.map((section) => `
      <section class="reply-section">
        <h2 class="section-title">${escapeHtml(section.title)}</h2>
        <ul class="section-list">
          ${section.items.map((item) => `
            <li class="section-item">
              <strong class="section-item-label">${escapeHtml(item.label)}：</strong>${sectionItemTextHtml(item)}
            </li>
          `).join("")}
        </ul>
      </section>
    `).join("");
  }

  function renderFallback(message) {
    chatScroll.innerHTML = `
      <section class="chat-fallback">
        <h1>暂无可展示的点点回复</h1>
        <p>${escapeHtml(message)}</p>
        <a class="fallback-link" href="index.html">返回搜索</a>
      </section>
    `;
    composer.style.display = "none";
  }

  // 分块正文：次级标题、段落与带加粗关键词的要点列表。
  function guideBlockHtml(block) {
    if (block.type === "subheading") {
      return `<h3 class="guide-subtitle">${escapeHtml(block.text)}</h3>`;
    }
    if (block.type === "list") {
      return `
        <ul class="section-list">
          ${block.items.map((item) => `
            <li class="section-item">
              <strong class="section-item-label">${escapeHtml(item.label)}：</strong>${escapeHtml(item.text)}
            </li>
          `).join("")}
        </ul>
      `;
    }
    return `<p class="section-paragraph">${escapeHtml(block.text)}</p>`;
  }

  // 攻略正文的分段渲染：items 用要点列表，steps 用编号步骤并支持插图，blocks 用标题分层。
  function guideSectionHtml(section) {
    if (section.blocks) {
      return `
        <section class="reply-section">
          <h2 class="section-title guide-section-heading">${escapeHtml(section.title)}</h2>
          ${section.blocks.map(guideBlockHtml).join("")}
        </section>
      `;
    }

    if (!section.steps) return sectionsHtml([section]);

    const steps = section.steps.map((step, index) => `
      <li class="guide-step">
        <span class="guide-step-index">${index + 1}.</span>
        <div class="guide-step-body">
          <p class="guide-step-text">${escapeHtml(step.text)}</p>
          ${step.image ? `
            <button class="guide-figure" type="button" data-role="guide-zoom" data-src="${step.image}" aria-label="放大查看示意图">
              <img src="${step.image}" alt="${escapeHtml(step.imageAlt || "")}">
            </button>
          ` : ""}
        </div>
      </li>
    `).join("");

    return `
      <section class="reply-section">
        <h2 class="section-title">${escapeHtml(section.title)}</h2>
        ${section.intro ? `<p class="section-paragraph">${escapeHtml(section.intro)}</p>` : ""}
        <ol class="guide-steps">${steps}</ol>
      </section>
    `;
  }

  function openLightbox(src) {
    const overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    const image = document.createElement("img");
    image.src = src;
    image.alt = "攻略示意图大图";
    overlay.appendChild(image);

    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  }

  // 点击“快速进站攻略”标题后弹出的精选帖子浮窗。
  function guideSheetHtml(question) {
    const guide = question.data.guide;

    const statsHtml = (post) => `
      <span class="sheet-post-stats">
        ${post.comments != null ? `<span class="sheet-stat">${commentIcon}${post.comments}</span>` : ""}
        <span class="sheet-stat">${heartIcon}${formatLikes(post.likes)}</span>
      </span>
    `;

    const cards = guide.sheetPosts.map((post) => {
      // 评论贴：头像、用户名、帖子名同一行，正文为评论原文。
      if (post.type === "comment") {
        return `
          <article class="sheet-post">
            <div class="sheet-comment-head">
              <span class="sheet-avatar" style="background:${post.avatarColor}">${escapeHtml(post.avatar)}</span>
              <span class="sheet-author-name">${escapeHtml(post.author)}</span>
              <h3 class="sheet-comment-title">${escapeHtml(post.title)}</h3>
              <span class="sheet-origin-link">
                查看原帖
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
            <p class="sheet-comment-body">${escapeHtml(post.commentText)}</p>
            <div class="sheet-post-footer">
              <span class="sheet-post-source">来自评论</span>
              ${statsHtml(post)}
            </div>
          </article>
        `;
      }

      const galleryClass = post.imageWidth ? ` is-${post.imageWidth}` : "";
      return `
        <article class="sheet-post">
          <div class="sheet-post-author">
            <span class="sheet-avatar" style="background:${post.avatarColor}">${escapeHtml(post.avatar)}</span>
            <span class="sheet-author-name">${escapeHtml(post.author)}</span>
          </div>
          <h3 class="sheet-post-title">${escapeHtml(post.title)}</h3>
          <p class="sheet-post-excerpt">${escapeHtml(post.excerpt)}</p>
          <div class="sheet-gallery${galleryClass}">
            <img src="${post.image}" alt="${escapeHtml(post.title)}" loading="lazy">
          </div>
          <div class="sheet-post-footer">
            <span class="sheet-post-source">来自笔记 ${escapeHtml(post.date)}</span>
            ${statsHtml(post)}
          </div>
        </article>
      `;
    }).join("");

    return `
      <div class="guide-sheet" role="dialog" aria-modal="true" aria-label="${escapeHtml(guide.answer.title)} · 精选相关帖子">
        <div class="guide-sheet-backdrop" data-role="sheet-close"></div>
        <section class="guide-sheet-panel">
          <span class="guide-sheet-handle" aria-hidden="true"></span>
          <h2 class="guide-sheet-title">${escapeHtml(guide.answer.title)} · 精选相关帖子</h2>
          <div class="sheet-search" aria-disabled="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/>
              <path d="m17 17 4 4"/>
            </svg>
            <span>为您更细致的搜索本话题下感兴趣的评论和帖子内容</span>
          </div>
          <div class="guide-sheet-list">${cards}</div>
        </section>
      </div>
    `;
  }

  function openGuideSheet(question) {
    if (document.querySelector(".guide-sheet")) return;

    const holder = document.createElement("div");
    holder.innerHTML = guideSheetHtml(question);
    const sheet = holder.firstElementChild;
    document.body.appendChild(sheet);

    sheet.addEventListener("click", (event) => {
      if (event.target.closest('[data-role="sheet-close"]')) {
        sheet.remove();
      }
    });
  }

  // 虹桥进站攻略场景：复用点点对话结构，展示攻略正文。
  function renderGuideReply(question) {
    const guide = question.data.guide;
    const avatars = question.data.feed
      .slice(0, 2)
      .map((post) => `<img class="summary-avatar" src="${post.image}" alt="">`)
      .join("");

    // 商科场景使用黄色精选入口；地铁场景保留“总结 N 篇笔记生成”一行与蓝色标题入口。
    const sourceHtml = guide.sourceEntry
      ? `
        <button class="guide-source-box" type="button" data-role="cluster-link">
          <span>${escapeHtml(guide.sourceEntry)}</span>
          <span class="guide-source-arrow" aria-hidden="true">›</span>
        </button>
      `
      : `
        <div class="summary-chain">
          <span>总结${guide.summaryCount}篇笔记生成</span>
          <span class="summary-chain-avatars">${avatars}</span>
          <span class="summary-chain-circle" aria-hidden="true">›</span>
        </div>
      `;

    const headingHtml = guide.sourceEntry
      ? ""
      : `
        <button class="guide-heading" type="button" data-role="cluster-link">
          ${escapeHtml(guide.answer.title)} <span aria-hidden="true">›</span>
        </button>
      `;

    chatScroll.innerHTML = `
      <div class="user-row">
        <div class="user-bubble">${escapeHtml(question.label)}</div>
      </div>

      <article class="reply-card guide-reply">
        ${sourceHtml}
        <p class="reply-overview">${escapeHtml(guide.summary)}</p>
        ${headingHtml}
        ${guide.answer.sections.map(guideSectionHtml).join("")}
      </article>
    `;

    composer.style.display = "";

    // 底栏与校招场景保持一致，继续提问时沿用简单的演示回复。
    composer.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = composerInput.value.trim();
      if (!value) return;

      appendUserBubble(value);
      appendAssistantText(value === question.label ? guide.summary : "此问题暂未配置演示回答");
      composerInput.value = "";
      chatScroll.scrollTop = chatScroll.scrollHeight;
    });

    chatScroll.addEventListener("click", (event) => {
      const clusterLink = event.target.closest('[data-role="cluster-link"]');
      if (clusterLink) {
        openGuideSheet(question);
        return;
      }

      const figure = event.target.closest('[data-role="guide-zoom"]');
      if (figure) {
        openLightbox(figure.dataset.src);
      }
    });
  }

  if (!isValid) {
    renderFallback("当前 Demo 只支持“校招生在小红书体验怎么样？”场景，请回到搜索页选择该问题。");
    return;
  }

  // 虹桥进站攻略场景与校招场景的回复结构不同，先分流处理。
  if (question.data?.guide?.answer) {
    renderGuideReply(question);
    return;
  }

  // 其余攻略场景（如商科转码）的完整攻略页尚未设计，不借用校招或地铁内容。
  if (question.data?.guide) {
    renderFallback("该问题的完整攻略页暂未开放，请返回搜索页查看相关帖子。");
    return;
  }

  const reply = question.data.reply;
  const opinion = mock.getOpinionDistribution(question);
  const featured = mock.getFeaturedComments(question);
  const sections = mock.getReplySections(question);
  const algorithmReply = mock.getAlgorithmReply();
  let algorithmAppended = false;

  const sectionHtml = sectionsHtml(sections);

  const followUpChips = reply.followUp.options.map((option) => {
    const disabled = !option.enabled;
    return `
      <button
        class="follow-up-chip${disabled ? " is-disabled" : ""}"
        type="button"
        ${disabled ? "disabled" : `data-action="${option.replyId}"`}
      >${escapeHtml(option.label)}</button>
    `;
  }).join("");

  chatScroll.innerHTML = `
    <div class="user-row">
      <div class="user-bubble">${escapeHtml(question.label)}</div>
    </div>

    <article class="reply-card">
      <div class="summary-chain">
        <span>${escapeHtml(reply.summaryChain)}</span>
        <span class="summary-chain-icon" aria-hidden="true">🐻</span>
        <span class="summary-chain-arrow" aria-hidden="true">›</span>
      </div>
      <p class="reply-overview">${question.data.overview.summary}</p>

      ${opinionBlockHtml({
        opinion,
        positiveComments: featured.positive,
        negativeComments: featured.negative,
        allCommentsHref: mock.buildCommentsUrl(question.id),
        getHref: (comment) =>
          comment.id === reply.clickableCommentId
            ? mock.buildPostUrl(question.id, comment.postId, comment.id)
            : null
      })}

      ${sectionHtml}

      <section class="follow-up">
        <p class="follow-up-text">${reply.followUp.text}</p>
        <div class="follow-up-options">${followUpChips}</div>
      </section>
    </article>
  `;

  function appendUserBubble(text) {
    const row = document.createElement("div");
    row.className = "user-row";
    const bubble = document.createElement("div");
    bubble.className = "user-bubble";
    bubble.textContent = text;
    row.appendChild(bubble);
    chatScroll.appendChild(row);
  }

  function appendAssistantText(text) {
    const block = document.createElement("div");
    block.className = "assistant-plain";
    block.textContent = text;
    chatScroll.appendChild(block);
  }

  // 追加算法专属回复；连续点击同一岗位时不重复追加。
  function appendAlgorithmReply() {
    if (algorithmAppended || !algorithmReply) return;
    if (chatScroll.querySelector('[data-role="algorithm-reply"]')) return;

    appendUserBubble(algorithmReply.userQuestion);

    const holder = document.createElement("div");
    holder.innerHTML = `
      <article class="reply-card" data-role="algorithm-reply">
        <p class="reply-overview">${escapeHtml(algorithmReply.overview)}</p>
        ${opinionBlockHtml({
          opinion: algorithmReply.opinion,
          positiveComments: algorithmReply.positiveComments,
          negativeComments: algorithmReply.negativeComments,
          allCommentsHref: null,
          getHref: null
        })}
        ${sectionsHtml(algorithmReply.sections)}
        <p class="section-paragraph algorithm-closing">${escapeHtml(algorithmReply.closing)}</p>
      </article>
    `;

    const card = holder.firstElementChild;
    chatScroll.appendChild(card);
    algorithmAppended = true;

    // 将新增回复的开头滚动到可见位置。
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function sendQuestion(text) {
    const value = String(text || "").trim();
    if (!value) return;
    appendUserBubble(value);

    if (value === reply.userQuestion) {
      appendAssistantText(question.data.overview.summary);
    } else {
      appendAssistantText("此问题暂未配置演示回答");
    }

    composerInput.value = "";
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }

  composer.addEventListener("submit", (event) => {
    event.preventDefault();
    sendQuestion(composerInput.value);
  });

  chatScroll.addEventListener("click", (event) => {
    const chip = event.target.closest(".follow-up-chip");
    if (!chip || chip.disabled) return;
    if (chip.dataset.action === "algorithm") {
      appendAlgorithmReply();
    }
  });
})();
