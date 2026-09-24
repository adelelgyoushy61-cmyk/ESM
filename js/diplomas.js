(function () {
  const grid    = document.getElementById("dipGrid");
  const chipsEl = document.getElementById("chips");
  const search  = document.getElementById("dipSearch");
  const countEl = document.getElementById("resultCount");
  const emptyEl = document.getElementById("emptyState");

  const CHIPS = [{ id: "all", label: "الكل" }, ...DIPLOMAS.map(d => ({ id: d.id, label: d.short || d.name }))];
  const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const dipById = Object.fromEntries(DIPLOMAS.map(d => [d.id, d]));
  let state = { dip: "all", q: "" };

  const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  function factsOf(d) {
    if (d.facts) return d.facts;
    const f = [];
    if (d.weeks)    f.push({ icon: "bi-calendar3",     text: `${d.weeks} أسبوع` });
    if (d.hours)    f.push({ icon: "bi-clock",         text: `${d.hours} ساعة` });
    if (d.projects) f.push({ icon: "bi-kanban",        text: `${d.projects} مشاريع` });
    if (d.tasks)    f.push({ icon: "bi-check2-square", text: `${d.tasks} تطبيق عملي` });
    return f;
  }

  function cardHTML(d, i) {
    const cat = catById[d.category] || CATEGORIES[0];
    return `
    <div class="col-12 col-md-6 col-xl-4" ${EraaUI.aos((i % 3) * 70)}>
      <article class="dip-card" style="--cat:${cat.color};--cat-ink:${cat.ink}">
        <div class="dip-head">
          <span class="dip-icon" aria-hidden="true"><i class="bi ${d.icon}"></i></span>
          <div>
            <h2 class="dip-name">${esc(d.name)}</h2>
            <p class="dip-cat">${esc(cat.label)}</p>
          </div>
        </div>
        <ul class="facts">
          ${factsOf(d).map(f => `<li><i class="bi ${f.icon}" aria-hidden="true"></i>${esc(f.text)}</li>`).join("")}
        </ul>
        <div class="dip-actions">
          <button class="btn-eh" type="button" data-act="copy-msg" data-id="${d.id}">
            <i class="bi bi-clipboard2"></i><span>نسخ رسالة المحتوي</span>
          </button>
          <button class="btn-eh btn-eh--ghost" type="button" data-act="copy-link" data-id="${d.id}">
            <i class="bi bi-link-45deg"></i><span>نسخ لينك المحتوي</span>
          </button>
        </div>
        <div class="dip-foot">
          <button class="link-quiet" type="button" data-act="preview" data-id="${d.id}">
            <i class="bi bi-eye"></i>شوف الرسالة
          </button>
          <a class="link-quiet" href="${esc(d.url)}" target="_blank" rel="noopener">
            صفحة الدبلومة <i class="bi bi-box-arrow-up-left"></i>
          </a>
        </div>
      </article>
    </div>`;
  }

  function matches(d) {
    if (state.dip !== "all" && d.id !== state.dip) return false;
    const q = state.q.trim().toLowerCase();
    if (!q) return true;
    const hay = `${d.name} ${d.keywords || ""} ${(catById[d.category] || {}).label || ""}`.toLowerCase();
    return q.split(/\s+/).every(w => hay.includes(w));
  }

  function renderChips() {
    chipsEl.innerHTML = CHIPS.map(c =>
      `<button type="button" class="chip" data-dip="${c.id}" aria-pressed="${state.dip === c.id}"><bdi>${esc(c.label)}</bdi></button>`
    ).join("");
  }

  function render() {
    const list = DIPLOMAS.filter(matches);
    grid.innerHTML = list.map(cardHTML).join("");
    countEl.textContent = `${list.length} من ${DIPLOMAS.length} دبلومة`;
    emptyEl.hidden = list.length > 0;
    EraaUI.refreshAOS();
  }

  /* ---------- الأحداث ---------- */
  chipsEl.addEventListener("click", e => {
    const b = e.target.closest("[data-dip]");
    if (!b) return;
    state.dip = b.dataset.dip;
    renderChips(); render();
  });

  search.addEventListener("input", () => { state.q = search.value; render(); });

  const modalEl = document.getElementById("msgModal");
  let modal = null;
  const getModal = () => (modal = modal || (window.bootstrap ? new bootstrap.Modal(modalEl) : null));
  let currentId = null;

  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const d = dipById[btn.dataset.id];
    if (!d) return;
    const act = btn.dataset.act;
    if (act === "copy-msg")  EraaUI.copyWithFeedback(btn, buildMessage(d), `تم نسخ رسالة ${d.name}`);
    if (act === "copy-link") EraaUI.copyWithFeedback(btn, d.url,           `تم نسخ لينك ${d.name}`);
    if (act === "preview") {
      currentId = d.id;
      document.getElementById("msgModalTitle").textContent = d.name;
      document.getElementById("msgBox").textContent = buildMessage(d);
      const m = getModal();
      if (m) m.show(); else EraaUI.toast("المعاينة محتاجة ملفات الموقع كاملة — فك الضغط عن الفولدر");
    }
  });

  document.getElementById("msgCopy").addEventListener("click", e => {
    const d = dipById[currentId]; if (!d) return;
    EraaUI.copyWithFeedback(e.currentTarget, buildMessage(d), `تم نسخ رسالة ${d.name}`);
  });
  document.getElementById("msgCopyLink").addEventListener("click", e => {
    const d = dipById[currentId]; if (!d) return;
    EraaUI.copyWithFeedback(e.currentTarget, d.url, `تم نسخ لينك ${d.name}`);
  });

  renderChips();
  render();
})();
