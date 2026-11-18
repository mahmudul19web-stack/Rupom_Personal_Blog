/* ================================================================
   RUPOM PERSONAL JOURNAL — JAVASCRIPT
   All interactions are grouped and commented for easy editing.
   ================================================================ */

/* 01. SAMPLE JOURNAL CONTENT
   Replace these demo stories with your own titles, summaries and content.
   For a real blog with admin publishing, connect a CMS or backend later. */
const articles = [
  {
    id: 0, category: "development", categoryLabel: "DEVELOPMENT", read: "6 MIN READ",
    title: "Learning to build for the web, one small step at a time",
    excerpt: "Every developer starts somewhere. A reflection on consistency, curiosity, and why understanding the fundamentals matters.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    body: `<p>Learning web development can feel like standing in front of a very large map. There are languages, frameworks, libraries and tools everywhere. It is easy to believe that progress means learning all of them at once.</p><h3>Start with the foundations</h3><p>The web is built on a few important ideas. HTML gives a page its structure, CSS shapes its appearance, and JavaScript brings interaction to life. Understanding how these pieces work together makes every new tool easier to learn.</p><p>Small projects are powerful teachers. Build a page, make a mistake, inspect the result, and try again. Each small improvement adds to your understanding.</p><h3>Consistency beats intensity</h3><p>A little focused practice every day can be more valuable than a long session once in a while. Keep notes about what you learn. When an idea finally makes sense, write it down in your own words. That is one reason this journal exists.</p>`
  },
  {
    id: 1, category: "javascript", categoryLabel: "JAVASCRIPT", read: "5 MIN READ",
    title: "JavaScript becomes easier when you stop memorising",
    excerpt: "A practical reminder to understand the problem first, then choose the right JavaScript concept to solve it.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",
    body: `<p>It is tempting to memorise syntax and expect confidence to follow. But programming is less about remembering every method and more about understanding what a problem is asking.</p><h3>Think in steps</h3><p>Before writing code, describe the input, the expected output and the transformation in between. Then choose a function, condition, loop or array method that fits the task.</p><p>Practice with small examples. Change one value, predict the result and run the code. This habit builds a much stronger foundation than copying a solution without understanding it.</p>`
  },
  {
    id: 2, category: "ai", categoryLabel: "AI & AUTOMATION", read: "7 MIN READ",
    title: "Where AI automation can make everyday work lighter",
    excerpt: "Looking beyond the hype to explore useful workflows, repetitive tasks and thoughtful human-in-the-loop automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",
    body: `<p>Automation is most useful when it removes repetitive work without removing good judgement. A helpful workflow can collect information, organise it and prepare a first draft while a person remains responsible for the final decision.</p><h3>Start with a real problem</h3><p>Instead of adding AI to everything, look for a task that is repeated often, follows clear steps and has a measurable outcome. Email sorting, support drafts and structured data entry are useful examples.</p><p>Good automation needs clear instructions, reliable inputs, sensible error handling and a human review path for uncertain cases.</p>`
  },
  {
    id: 3, category: "learning", categoryLabel: "LEARNING", read: "4 MIN READ",
    title: "Keeping a learning journal changed how I study",
    excerpt: "Why writing down questions, mistakes and small breakthroughs can turn scattered learning into lasting progress.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
    body: `<p>When we learn something new, it often feels clear in the moment. A few days later, the details can become blurry. A learning journal gives those ideas somewhere to live.</p><h3>Record the process, not only the result</h3><p>Write down what you tried, what confused you, what finally worked and what you want to explore next. These notes become a personal reference that is more useful than a folder of copied answers.</p><p>Over time, the journal also shows how far you have travelled. Progress is easier to recognise when you can look back at your earlier questions.</p>`
  },
  {
    id: 4, category: "development", categoryLabel: "DEVELOPMENT", read: "6 MIN READ",
    title: "What makes a website feel thoughtful and easy to use?",
    excerpt: "Good web design is more than decoration. It is the small decisions that help people understand, navigate and trust a page.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    body: `<p>A website can look impressive and still be difficult to use. Thoughtful design begins by understanding what a visitor came to do and making that next step clear.</p><h3>Clarity is a design feature</h3><p>Readable typography, useful spacing, consistent navigation and clear buttons all reduce friction. Motion can add personality, but it should never make basic tasks harder.</p><p>Test the page on a phone, check the contrast, and ask someone unfamiliar with the project to find an important piece of information. Their experience will reveal details you may have missed.</p>`
  },
  {
    id: 5, category: "javascript", categoryLabel: "JAVASCRIPT", read: "5 MIN READ",
    title: "A simple way to become better at solving coding problems",
    excerpt: "Break a big task into smaller questions, test assumptions and build a solution one clear step at a time.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",
    body: `<p>When a coding task looks difficult, the first move is not always to open the editor. Start by rewriting the task in plain language. What information do you have? What should happen? What rules must be followed?</p><h3>Make the smallest working version</h3><p>Solve one part, test it, and then add the next part. Use meaningful variable names and inspect the output when something behaves unexpectedly.</p><p>Debugging is not a sign that you are failing. It is part of how you learn to reason about a system.</p>`
  }
];

/* 02. PAGE LOADER
   Hide the intro screen after the page has loaded. */
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  window.setTimeout(() => loader?.classList.add("is-hidden"), 350);
});

/* 03. THEME SWITCHER
   Day mode is the default. The visitor's choice is saved in localStorage. */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("rupom-journal-theme");

function applyTheme(theme) {
  const isNight = theme === "night";
  document.body.classList.toggle("night-mode", isNight);
  if (themeIcon) themeIcon.className = isNight ? "bi bi-sun" : "bi bi-moon-stars";
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", isNight ? "Switch to day mode" : "Switch to night mode");
    themeToggle.title = isNight ? "Switch to day mode" : "Switch to night mode";
  }
}
applyTheme(savedTheme === "night" ? "night" : "day");

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("night-mode") ? "day" : "night";
  applyTheme(nextTheme);
  localStorage.setItem("rupom-journal-theme", nextTheme);
});

/* 04. ARTICLE CARD RENDERING
   Cards are created from the articles array so filters and search share one source. */
const articleGrid = document.getElementById("articleGrid");
const articleCount = document.getElementById("articleCount");
const emptyState = document.getElementById("emptyState");
const articleSearch = document.getElementById("articleSearch");
let activeFilter = "all";

function renderArticles() {
  if (!articleGrid) return;
  const query = (articleSearch?.value || "").trim().toLowerCase();
  const visibleArticles = articles.filter((article) => {
    const categoryMatch = activeFilter === "all" || article.category === activeFilter;
    const textMatch = `${article.title} ${article.excerpt} ${article.categoryLabel}`.toLowerCase().includes(query);
    return categoryMatch && textMatch;
  });

  articleGrid.innerHTML = visibleArticles.map((article, index) => `
    <article class="article-card">
      <a href="#article" class="article-thumb article-open" data-article="${article.id}" aria-label="Read ${article.title}">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
        <span class="article-number">0${index + 1} / 06</span>
      </a>
      <div class="article-card-body">
        <div class="article-meta"><span>${article.categoryLabel}</span><i></i><span>${article.read}</span></div>
        <h3><a href="#article" class="article-open" data-article="${article.id}">${article.title}</a></h3>
        <p>${article.excerpt}</p>
        <a href="#article" class="read-link article-open" data-article="${article.id}">Read article <i class="bi bi-arrow-up-right"></i></a>
      </div>
    </article>
  `).join("");

  if (articleCount) articleCount.textContent = `Showing ${visibleArticles.length} ${visibleArticles.length === 1 ? "story" : "stories"}`;
  emptyState?.classList.toggle("d-none", visibleArticles.length !== 0);
}

/* 05. CATEGORY FILTER BUTTONS */
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter || "all";
    renderArticles();
  });
});

/* 06. LIVE ARTICLE SEARCH */
articleSearch?.addEventListener("input", renderArticles);

/* 07. CLEAR SEARCH AND FILTERS */
document.getElementById("resetFilters")?.addEventListener("click", (event) => {
  event.preventDefault();
  activeFilter = "all";
  if (articleSearch) articleSearch.value = "";
  document.querySelectorAll(".filter-btn").forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
  renderArticles();
});

/* 08. TOPIC CARDS: OPEN JOURNAL WITH THE MATCHING CATEGORY */
document.querySelectorAll("[data-topic]").forEach((topic) => {
  topic.addEventListener("click", () => {
    activeFilter = topic.dataset.topic;
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.toggle("active", item.dataset.filter === activeFilter));
    renderArticles();
  });
});

/* 09. ARTICLE READER MODAL
   Opens a readable sample article. Replace demo copy with your own posts. */
const articleModal = document.getElementById("articleModal");
const readerMeta = document.getElementById("readerMeta");
const readerTitle = document.getElementById("readerTitle");
const readerImage = document.getElementById("readerImage");
const readerBody = document.getElementById("readerBody");

function openArticle(articleId) {
  const article = articles.find((item) => item.id === Number(articleId));
  if (!article || !articleModal) return;
  readerMeta.textContent = `${article.categoryLabel}  ·  ${article.read}`;
  readerTitle.textContent = article.title;
  readerImage.src = article.image;
  readerImage.alt = article.title;
  readerBody.innerHTML = article.body;
  articleModal.classList.add("is-open");
  articleModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}
function closeArticle() {
  articleModal?.classList.remove("is-open");
  articleModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}
document.addEventListener("click", (event) => {
  const articleLink = event.target.closest(".article-open");
  if (articleLink) {
    event.preventDefault();
    openArticle(articleLink.dataset.article);
  }
  if (event.target.closest("[data-close-modal]")) closeArticle();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeArticle();
});

/* 10. SCROLL REVEAL
   IntersectionObserver keeps the effect efficient and avoids constant scroll calculations. */
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

/* 11. HEADER STATE, BACK-TO-TOP BUTTON AND ACTIVE NAVIGATION */
const siteHeader = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");
const navLinks = [...document.querySelectorAll(".nav-link")];

function updateScrollUI() {
  const scrollPosition = window.scrollY;
  siteHeader?.classList.toggle("scrolled", scrollPosition > 20);
  backToTop?.classList.toggle("visible", scrollPosition > 550);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("active", active);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

/* 12. MOBILE NAVIGATION
   Close the Bootstrap menu after a visitor chooses a section. */
document.querySelectorAll("#mainNavigation .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNavigation");
    if (menu?.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

/* 13. NEWSLETTER DEMO FEEDBACK
   This front-end form validates the email but does not store or send it.
   Connect Mailchimp, Formspree or your own backend to make it live. */
document.getElementById("newsletterForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("newsletterMessage");
  if (message) message.textContent = "Thanks for your interest! Connect an email service to activate subscriptions.";
});

/* 14. FOOTER YEAR */
const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();

/* 15. INITIAL JOURNAL RENDER */
renderArticles();
