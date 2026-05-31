/* Reusable header + footer markup, injected at runtime */

(function () {
  const PAGES = [
    { href: "index.html",    ar: "الرئيسية",    en: "Home" },
    { href: "services.html", ar: "الخدمات",    en: "Services" },
    { href: "about.html",    ar: "نبذة",        en: "About" },
    { href: "articles.html", ar: "مقالات",      en: "Notes" },
    { href: "contact.html",  ar: "تواصل",      en: "Contact" },
  ];

  function currentFile() {
    const p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }

  function header() {
    const cur = currentFile();
    return `
<header class="topbar">
  <div class="wrap row">
    <a href="index.html" class="brand">
      <span class="brand-mark">IA</span>
      <span class="brand-name lang-ar block">إبراهيم أبوحراز</span>
      <span class="brand-name lang-en block">Ibrahim Abu Haraz</span>
      <span class="brand-sub">/ <span class="lang-ar">مستشار أودو</span><span class="lang-en">ERP Consultant</span></span>
    </a>
    <nav class="primary">
      ${PAGES.map(p => `
        <a href="${p.href}" ${p.href === cur ? 'aria-current="page"' : ""}>
          <span class="lang-ar">${p.ar}</span><span class="lang-en">${p.en}</span>
        </a>`).join("")}
    </nav>
    <div class="nav-meta">
      <span class="status-dot">
        <span class="lang-ar">متاح للمشاريع</span><span class="lang-en">Available</span>
      </span>
      <div class="lang-toggle" role="group" aria-label="Language">
        <button data-lang="ar" aria-pressed="true">ع</button>
        <button data-lang="en" aria-pressed="false">EN</button>
      </div>
    </div>
  </div>
</header>`;
  }

  function footer() {
    return `
<footer class="site">
  <div class="wrap">
    <div class="grid">
      <div>
        <h4><span class="lang-ar">المستشار</span><span class="lang-en">Consultant</span></h4>
        <div class="mono" style="font-size:14px; line-height:1.7;">
          <div style="color:var(--ink); font-weight:600;">Ibrahim Abu Haraz</div>
          <div style="color:var(--muted);">
            <span class="lang-ar">مستشار أنظمة تخطيط موارد المؤسسات</span>
            <span class="lang-en">ERP Implementation Consultant</span>
          </div>
          <div style="color:var(--muted); margin-top:6px;">Riyadh · KSA</div>
        </div>
      </div>
      <div>
        <h4><span class="lang-ar">روابط</span><span class="lang-en">Navigate</span></h4>
        <ul>
          <li><a href="index.html"><span class="lang-ar">الرئيسية</span><span class="lang-en">Home</span></a></li>
          <li><a href="services.html"><span class="lang-ar">الخدمات</span><span class="lang-en">Services</span></a></li>
          <li><a href="about.html"><span class="lang-ar">نبذة</span><span class="lang-en">About</span></a></li>
          <li><a href="articles.html"><span class="lang-ar">مقالات</span><span class="lang-en">Notes</span></a></li>
          <li><a href="contact.html"><span class="lang-ar">تواصل</span><span class="lang-en">Contact</span></a></li>
        </ul>
      </div>
      <div>
        <h4><span class="lang-ar">تواصل</span><span class="lang-en">Contact</span></h4>
        <ul>
          <li><a href="mailto:ibrahimanwer07@gmail.com">ibrahimanwer07@gmail.com</a></li>
          <li><a href="tel:+966566811799" dir="ltr">+966 56 681 1799</a></li>
        </ul>
      </div>
      <div>
        <h4><span class="lang-ar">ملف الخبرة</span><span class="lang-en">Profile</span></h4>
        <ul class="mono" style="font-family:var(--f-mono); font-size:12px;">
          <li>EXP_9+ <span class="lang-ar">سنوات</span><span class="lang-en">YEARS</span></li>
          <li>IMPL_11+ ERP</li>
          <li>REGION_GULF · MENA</li>
          <li>STACK_ODOO · v14 → v17</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <span>© <span data-year>2026</span> IBRAHIM ABU HARAZ — ALL RIGHTS RESERVED</span>
      <span>
        <span class="lang-ar">صُمم باهتمام · رياض</span>
        <span class="lang-en">CRAFTED WITH CARE · RIYADH</span>
      </span>
    </div>
  </div>
</footer>`;
  }

  // Auto-inject if mount points exist
  document.addEventListener("DOMContentLoaded", () => {
    const h = document.getElementById("site-header");
    const f = document.getElementById("site-footer");
    if (h) h.outerHTML = header();
    if (f) f.outerHTML = footer();
  });
})();
