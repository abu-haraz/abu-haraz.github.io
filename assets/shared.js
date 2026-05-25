/* Shared site behavior: language toggle, nav highlight, reveal */

(function () {
  const STORAGE_KEY = "iah-lang";

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") return stored;
    return "ar"; // default per user spec
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.querySelectorAll(".lang-toggle button").forEach((b) => {
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
    // Update any data-en/data-ar attribute swap nodes
    document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
      const next = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
      if (next != null) el.textContent = next;
    });
  }

  function initLang() {
    setLang(getLang());
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-toggle button");
      if (!btn) return;
      setLang(btn.dataset.lang);
    });
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  function stampYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initReveal();
    stampYear();
  });
})();
