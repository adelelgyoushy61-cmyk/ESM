/* صفحة أول سيشن + LinkedIn الإنستراكتور */
(function () {
  const grid    = document.getElementById("grid");
  const chipsEl = document.getElementById("chips");
  const countEl = document.getElementById("resultCount");
  const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const dipById = Object.fromEntries(DIPLOMAS.map(d => [d.id, d]));
  const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  let cat = "all";

  const initials = name => name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("");

  function linkRow(kind, url, d) {
    const isLI = kind === "li";
    const label = isLI ? "LinkedIn الإنستراكتور" : "افتح أول سيشن";
    const soon = isLI ? "LinkedIn — قريباً" : "أول سيشن — قريباً";
    const icon  = isLI ? "bi-linkedin" : "bi-play-circle-fill";
    const copyMsg = isLI ? `تم نسخ لينك LinkedIn — ${d.name}` : `تم نسخ لينك أول سيشن — ${d.name}`;
    if (!url) {
      return `<div class="link-row">
        <span class="btn-eh ${isLI ? "btn-eh--li" : ""} is-disabled" aria-disabled="true"><i class="bi ${icon}"></i>${soon}</span>
        <button class="btn-icon" type="button" disabled aria-label="نسخ اللينك"><i class="bi bi-clipboard2"></i></button>
      </div>`;
    }
    return `<div class="link-row">
      <a class="btn-eh ${isLI ? "btn-eh--li" : ""}" href="${esc(url)}" target="_blank" rel="noopener"><i class="bi ${icon}"></i>${label}</a>
      <button class="btn-icon" type="button" data-copy="${esc(url)}" data-msg="${esc(copyMsg)}" aria-label="نسخ لينك ${label}"><i class="bi bi-clipboard2"></i></button>
    </div>`;
  }

  function cardHTML(d, i) {
    const s = (window.SESSIONS && SESSIONS[d.id]) || {};
    const c = catById[d.category] || CATEGORIES[0];
    const has = !!(s.instructor && s.instructor.trim());
    const avatar = s.photo
      ? `<img src="${esc(s.photo)}" alt="${esc(s.instructor || "")}" loading="lazy">`
      : (has ? esc(initials(s.instructor)) : '<i class="bi bi-person-fill"></i>');
    return `
    <div class="col-12 col-md-6 col-xl-4" ${EraaUI.aos((i % 3) * 70)}>
      <article class="ses-card" style="--cat:${c.color};--cat-ink:${c.ink}">
        <div class="dip-head mb-0">
          <span class="dip-icon" aria-hidden="true"><i class="bi ${d.icon}"></i></span>
          <div><h2 class="dip-name">${esc(d.name)}</h2><p class="dip-cat">${esc(c.label)}</p></div>
        </div>
        <div class="ses-instr">
          <span class="avatar" aria-hidden="true">${avatar}</span>
          <div>
            <p class="ses-instr-name ${has ? "" : "is-empty"}">${has ? esc(s.instructor) : "اسم الإنستراكتور "}</p>
            <p class="ses-instr-role">إنستراكتور الدبلومة</p>
          </div>
        </div>
        <div class="mt-auto d-grid gap-2">
          ${linkRow("session", s.sessionUrl, d)}
          ${linkRow("li", s.linkedin, d)}
        </div>
      </article>
    </div>`;
  }

  function renderChips() {
    const CHIPS = [{ id: "all", label: "الكل" }, ...DIPLOMAS.map(d => ({ id: d.id, label: d.short || d.name }))];
    chipsEl.innerHTML = CHIPS.map(c =>
      `<button type="button" class="chip" data-dip="${c.id}" aria-pressed="${cat === c.id}"><bdi>${esc(c.label)}</bdi></button>`
    ).join("");
  }

  function render() {
    const list = DIPLOMAS.filter(d => cat === "all" || d.id === cat);
    grid.innerHTML = list.map(cardHTML).join("");
    countEl.textContent = `${list.length} دبلومة`;
    EraaUI.refreshAOS();
  }

  chipsEl.addEventListener("click", e => {
    const b = e.target.closest("[data-dip]"); if (!b) return;
    cat = b.dataset.dip; renderChips(); render();
  });
  grid.addEventListener("click", e => {
    const b = e.target.closest("[data-copy]"); if (!b) return;
    EraaUI.copyWithFeedback(b, b.dataset.copy, b.dataset.msg);
  });

  renderChips(); render();
})();
