# Ibrahim Abu Haraz — Website / الموقع الشخصي

موقع شخصي (عربي/إنجليزي) لمستشار أنظمة أودو — HTML/CSS/JS ثابت، بدون خادم.
Bilingual personal site for an Odoo ERP consultant — static HTML/CSS/JS, no server.

تفتح الصفحات فوراً بدون أي شاشة تحميل.
Pages load instantly with no loading splash.

---

## ⚠️ الأهم عند الرفع / The one thing that matters when uploading

يجب أن يبقى مجلد **`assets`** بجانب ملفات HTML **في نفس المستوى** (جذر المستودع).
The **`assets`** folder MUST stay next to the HTML files, **at the same level** (repo root).

```
repo root/
├── index.html
├── services.html
├── about.html
├── articles.html
├── contact.html
├── article-*.html      (6 files)
├── .nojekyll
└── assets/             ← لا تنقله ولا تعيد تسميته / do NOT move or rename
    ├── shared.css
    ├── home.css
    ├── pages.css
    ├── article.css
    ├── shared.js
    ├── partials.js
    ├── contact-form.js
    └── portrait.png
```

إذا لم يُرفع مجلد `assets`، يظهر الموقع بلا ألوان (هيكل فقط). هذا هو السبب الوحيد.
If `assets` isn't uploaded, the site shows with no colors (skeleton). That's the only cause.

---

## النشر على GitHub Pages

1. في مستودعك: احذف كل الملفات القديمة.
2. ارفع **كل محتويات هذا المجلد** — بما فيه مجلد `assets` كاملاً وملف `.nojekyll`.
   - الأسهل: على صفحة المستودع → **Add file → Upload files** → اسحب كل الملفات + اسحب مجلد `assets` كما هو.
3. Settings → Pages → Source = `main` / root → Save.
4. افتح الرابط مع تحديث قسري: **Ctrl + Shift + R**.

> رفع عبر GitHub Desktop أو Git CLI يحافظ على المجلدات تلقائياً وهو الأضمن.
> Uploading via GitHub Desktop or the Git CLI preserves folders automatically — most reliable.

---

## نموذج التواصل / Contact form

يعمل عبر واتساب والبريد فوراً. لتفعيل وصول الطلبات لبريدك مباشرة، افتح
`assets/contact-form.js` وضع رابط Formspree في أول سطر:
```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXX";
```

## الصورة / Portrait
`assets/portrait.png` — استبدلها بصورة مربعة بنفس الاسم.

© Ibrahim Abu Haraz
