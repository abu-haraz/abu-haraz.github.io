# Ibrahim Abu Haraz — Website (self-contained build)
# الموقع الشخصي — نسخة مكتفية بذاتها

كل صفحة في هذا المجلد **ملف واحد مكتمل** — التنسيقات والخطوط والصورة كلها مدمجة بداخله.
لا حاجة لمجلد `assets`. هذا يحل مشكلة ظهور الموقع «كهيكل بدون ألوان» على GitHub Pages.

Each page here is a **single self-contained file** — all CSS, fonts, and the portrait
are embedded inside it. No `assets` folder needed. This fixes the "unstyled skeleton"
problem on GitHub Pages.

---

## النشر على GitHub Pages / Publish on GitHub Pages

1. ارفع **كل ملفات هذا المجلد** إلى المستودع (root) — including the `.nojekyll` file.
   Upload **all files in this folder** to the repo root.
2. Settings → Pages → Source = `main` branch, folder = `/ (root)` → Save.
3. افتح / open: `https://<username>.github.io/<repo>/`

> تأكد أن `index.html` و `.nojekyll` في جذر المستودع مباشرة، لا داخل مجلد فرعي.
> Make sure `index.html` and `.nojekyll` sit at the repo root, not inside a subfolder.

الروابط بين الصفحات تعمل تلقائياً ما دامت كل الملفات في نفس المجلد.
Inter-page links work automatically as long as all files stay in the same folder.

---

## نموذج التواصل / Contact form

يعمل عبر واتساب والبريد فوراً. لتفعيل Formspree لاحقاً عدّل المصدر `contact.html`
في مجلد المشروع الأصلي ثم أعد البناء.
Works via WhatsApp & Email out of the box. To enable Formspree later, edit the
source `contact.html` in the original project and rebuild.

© Ibrahim Abu Haraz
