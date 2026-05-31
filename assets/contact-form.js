/* Contact form: WhatsApp / Email send + optional Formspree.
   To enable real inbox delivery later, set FORMSPREE_ENDPOINT
   to your form URL, e.g. "https://formspree.io/f/abcdwxyz".
   While empty, the form sends via WhatsApp or Email instead. */

(function () {
  const FORMSPREE_ENDPOINT = ""; // ← paste your Formspree URL here
  const WHATSAPP_NUMBER = "966566811799"; // digits only, no +
  const EMAIL_TO = "ibrahimanwer07@gmail.com";

  function val(form, name) {
    const el = form.elements[name];
    if (!el) return "";
    return (el.value || "").trim();
  }
  function radio(form, name) {
    const el = form.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : "";
  }

  function collect(form) {
    return {
      name: val(form, "name"),
      company: val(form, "company"),
      email: val(form, "email"),
      phone: val(form, "phone"),
      industry: radio(form, "ind"),
      stage: radio(form, "stg"),
      message: val(form, "message"),
    };
  }

  function isValid(d) {
    return d.name && d.email;
  }

  function buildText(d) {
    const L = [];
    L.push("New enquiry — ibrahimabuharaz.com");
    L.push("———————————————");
    L.push("Name: " + d.name);
    if (d.company) L.push("Company: " + d.company);
    L.push("Email: " + d.email);
    if (d.phone) L.push("WhatsApp: " + d.phone);
    if (d.industry) L.push("Industry: " + d.industry);
    if (d.stage) L.push("Stage: " + d.stage);
    if (d.message) {
      L.push("———————————————");
      L.push(d.message);
    }
    return L.join("\n");
  }

  function show(form, sel) {
    ["form-error", "form-success"].forEach((c) => {
      const n = form.querySelector("." + c);
      if (n) n.hidden = true;
    });
    const node = form.querySelector("." + sel);
    if (node) node.hidden = false;
  }

  function sendWhatsApp(d) {
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(buildText(d));
    window.open(url, "_blank", "noopener");
  }

  function sendEmail(d) {
    const subject = "Odoo enquiry — " + (d.company || d.name);
    const url = "mailto:" + EMAIL_TO +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(buildText(d));
    window.location.href = url;
  }

  async function sendFormspree(form, d) {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    });
    if (!res.ok) throw new Error("Formspree error " + res.status);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiry-form");
    if (!form) return;

    async function handle(channel) {
      const d = collect(form);
      if (!isValid(d)) {
        show(form, "form-error");
        return;
      }

      // If Formspree is configured, it becomes the primary delivery for
      // both buttons; the chosen channel still opens as a confirmation.
      if (FORMSPREE_ENDPOINT) {
        try {
          await sendFormspree(form, d);
          show(form, "form-success");
          form.reset();
          return;
        } catch (e) {
          // fall through to direct channel if the network call fails
        }
      }

      if (channel === "email") sendEmail(d);
      else sendWhatsApp(d);
      show(form, "form-success");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handle("whatsapp");
    });
    const emailBtn = form.querySelector('[data-send="email"]');
    if (emailBtn) emailBtn.addEventListener("click", () => handle("email"));
  });
})();
