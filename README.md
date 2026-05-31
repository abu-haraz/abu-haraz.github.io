# Ibrahim Abu Haraz — Personal Website / الموقع الشخصي

موقع شخصي متعدد الصفحات (عربي/إنجليزي) لمستشار أنظمة أودو.
A bilingual (Arabic/English) multi-page personal website for an Odoo ERP consultant.

---

## المحتوى / Contents

```
index.html            الرئيسية / Home
services.html         الخدمات / Services
about.html            نبذة / About
articles.html         المقالات / Notes index
contact.html          تواصل / Contact (+ working form)
article-*.html        6 full articles / ٦ مقالات كاملة
assets/               CSS, JS, portrait.png
```

الموقع بالكامل HTML/CSS/JS ثابت — لا يحتاج خادماً أو قاعدة بيانات.
Entirely static HTML/CSS/JS — no server or database required.

---

## النشر / Publishing

ارفع **محتويات هذا المجلد** (وليس المجلد نفسه) إلى أي استضافة. الصفحة الرئيسية هي `index.html`.
Upload the **contents of this folder** (not the folder itself) to any host. The home page is `index.html`.

خيارات مجانية سهلة / Easy free options:

- **Netlify** — اسحب المجلد إلى app.netlify.com/drop / drag the folder onto app.netlify.com/drop
- **Cloudflare Pages** / **GitHub Pages** / **Vercel** — اربط مجلداً أو مستودعاً / connect a folder or repo
- أي استضافة تدعم HTML (cPanel, ...) — ارفع عبر FTP إلى مجلد public_html

---

## نموذج التواصل / Contact form

يعمل النموذج فوراً عبر **واتساب** و**البريد**.
The form works out of the box via **WhatsApp** and **Email**.

لتفعيل وصول الطلبات لصندوق بريدك مباشرة / To deliver submissions straight to your inbox:

1. أنشئ نموذجاً مجانياً على / create a free form at https://formspree.io
2. افتح `assets/contact-form.js` وضع الرابط في أول سطر / open `assets/contact-form.js` and set the first line:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXX";
   ```

---

## الصورة الشخصية / Portrait

الصورة في `assets/portrait.png`. لاستبدالها، ضع صورة مربعة بنفس الاسم.
The portrait is `assets/portrait.png`. To replace it, drop a square image with the same name.

© Ibrahim Abu Haraz
