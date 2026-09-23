/* الناف بار + الفوتر + دوال النسخ والتنبيه — مشتركة بين كل الصفحات */
(function () {
  const page = document.body.dataset.page;

const NAV = [
  { id: "diplomas", href: "index.html", label: "الدبلومات", icon: "bi-mortarboard-fill" },
  { id: "feedback", href: "feedback.html", label: "الفيدباكس", icon: "bi-chat-heart-fill" },
  { id: "sessions", href: "sessions.html", label: "أول سيشن والإنستراكتورز", icon: "bi-play-circle-fill" },
  { id: "locations", href: "locations.html", label: "الفروع", icon: "bi-geo-alt-fill" },
  { id: "sales-info", href: "sales-info.html", label: "معلومات المبيعات", icon: "bi-receipt-cutoff" }
];

  const navHost = document.getElementById("site-nav");
  if (navHost) {
    navHost.innerHTML = `
    <nav class="navbar navbar-expand-lg eh-nav on-dark sticky-top" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand eh-brand" href="index.html" aria-label="EraaSoft Sales Hub">
          <span class="eh-brand-mark">Eraa</span><span class="eh-brand-soft">Soft</span><span class="eh-brand-tag">Sales Hub</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
                aria-controls="navMenu" aria-expanded="false" aria-label="فتح القائمة">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto gap-lg-1 pt-2 pt-lg-0">
            ${NAV.map(n => `
              <li class="nav-item">
                <a class="nav-link ${n.id === page ? "active" : ""}" href="${n.href}" ${n.id === page ? 'aria-current="page"' : ""}>
                  <i class="bi ${n.icon}"></i>${n.label}
                </a>
              </li>`).join("")}
          </ul>
        </div>
      </div>
    </nav>`;
  }

  const footHost = document.getElementById("site-footer");
  if (footHost) {
    const c = window.CONTACT || {};
    footHost.innerHTML = `
    <footer class="eh-footer on-dark">
      <div class="container wrap">
        <span>EraaSoft Professional Academy — أداة داخلية لفريق السيلز</span>
        <ul>
          ${c.website  ? `<li><a href="https://${c.website}" target="_blank" rel="noopener"><i class="bi bi-globe2"></i>${c.website}</a></li>` : ""}
          ${c.phone    ? `<li><a href="tel:${c.phone}"><i class="bi bi-telephone-fill"></i><span dir="ltr">${c.phone}</span></a></li>` : ""}
          ${c.linkedin ? `<li><span><i class="bi bi-linkedin"></i>${c.linkedin}</span></li>` : ""}
        </ul>
      </div>
    </footer>`;
  }

  /* ---------- أنيميشن AOS (تحسين اختياري — الكروت بتظهر حتى لو مش شغال) ---------- */
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionOK = !!window.AOS && !reduceMotion;
  if (motionOK) {
    try {
      AOS.init({ duration: 520, once: true, offset: 30, easing: "ease-out-cubic" });
      document.documentElement.classList.add("aos-on");
    } catch (e) { /* لو حصل أي خطأ الكروت هتفضل ظاهرة عادي */ }
  }
  /* بيرجّع خصائص الأنيميشن للكارت، أو نص فاضي لو الأنيميشن مش متاح */
  function aos(delay) {
    return document.documentElement.classList.contains("aos-on")
      ? `data-aos="fade-up" data-aos-delay="${delay || 0}"` : "";
  }
  function refreshAOS() {
    if (document.documentElement.classList.contains("aos-on")) { try { AOS.refreshHard(); } catch (e) {} }
  }

  /* ---------- التنبيه (Toast) ---------- */
  let toastHost;
  function toast(message) {
    if (!toastHost) {
      toastHost = document.createElement("div");
      toastHost.className = "toast-container position-fixed bottom-0 start-50 translate-middle-x p-3";
      toastHost.style.zIndex = 2000;
      document.body.appendChild(toastHost);
    }
    const el = document.createElement("div");
    el.className = "toast eh-toast align-items-center animate__animated animate__fadeInUp animate__faster";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.innerHTML = `<div class="d-flex align-items-center gap-2 px-3 py-2">
        <i class="bi bi-check-circle-fill"></i><div class="toast-body p-0"></div></div>`;
    el.querySelector(".toast-body").textContent = message;
    toastHost.appendChild(el);
    el.classList.add("show");                       // شغال من غير أي مكتبة
    setTimeout(() => el.remove(), 2300);
  }

  /* ---------- النسخ ---------- */
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) { /* نكمل على الطريقة البديلة */ }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;opacity:0;pointer-events:none";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  }

  /* بينسخ النص ويغيّر شكل الزرار لحظياً + يطلع تنبيه */
  async function copyWithFeedback(btn, text, toastMessage, doneLabel) {
    const ok = await copyText(text);
    if (!ok) { toast("تعذّر النسخ — جرّب تنسخ يدوي"); return false; }
    if (btn) {
      if (!btn.dataset.orig) btn.dataset.orig = btn.innerHTML;
      const iconOnly = btn.classList.contains("btn-icon");
      btn.classList.add("is-copied");
      btn.innerHTML = iconOnly
        ? '<i class="bi bi-check2"></i>'
        : `<i class="bi bi-check2-circle"></i><span>${doneLabel || "تم النسخ"}</span>`;
      clearTimeout(btn._t);
      btn._t = setTimeout(() => {
        btn.classList.remove("is-copied");
        btn.innerHTML = btn.dataset.orig;
      }, 1700);
    }
    if (toastMessage) toast(toastMessage);
    return true;
  }

  window.EraaUI = { toast, copyText, copyWithFeedback, aos, refreshAOS };
})();
