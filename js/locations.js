(function () {
  const grid = document.getElementById("grid");
  const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#39;" }[m]));

  const fullAddress = b =>
    `${b.address}${b.floor ? " - " + b.floor : ""}${b.place ? " (" + b.place + ")" : ""}`;

  const buildMsg = b => b.message ||
    [b.name, `العنوان: ${fullAddress(b)}`, `اللوكيشن: ${b.mapUrl}`].join("\n");

  const getImgSrc = item => (typeof item === "string" ? item : (item && item.src ? item.src : ""));

  function cardHTML(b, i) {
    const gold = b.main ? "--cat:#FFB800;--cat-ink:#8A5F00" : "--cat:#0B35E8;--cat-ink:#0B35E8";
    return `
    <div class="col-12 col-lg-6 col-xl-4" ${window.EraaUI && typeof EraaUI.aos === "function" ? EraaUI.aos(i * 70) : ""}>
      <article class="dip-card ${b.main ? "is-main" : ""}" style="${gold}">
        <div class="dip-head">
          <span class="dip-icon" aria-hidden="true"><i class="bi ${b.icon || "bi-geo-alt-fill"}"></i></span>
          <div>
            <h2 class="dip-name">${esc(b.name)}${b.main ? '<span class="badge-main">الفرع الرئيسي</span>' : ""}</h2>
            ${b.place ? `<p class="dip-cat">${esc(b.place)}</p>` : ""}
          </div>
        </div>
        <ul class="loc-lines">
          <li><i class="bi bi-signpost-2" aria-hidden="true"></i><span><span class="lbl">العنوان</span>${esc(b.address)}</span></li>
          ${b.floor ? `<li><i class="bi bi-layers" aria-hidden="true"></i><span><span class="lbl">الدور</span>${esc(b.floor)}</span></li>` : ""}
        </ul>
        <div class="dip-actions">
          <button class="btn-eh" type="button" data-act="copy-all" data-id="${b.id}">
            <i class="bi bi-clipboard2"></i><span>نسخ العنوان واللوكيشن</span>
          </button>
          <a class="btn-eh btn-eh--ghost" href="${esc(b.mapUrl)}" target="_blank" rel="noopener">
            <i class="bi bi-map"></i><span>افتح الخريطة</span>
          </a>
        </div>
        <div class="dip-foot">
          <button class="link-quiet" type="button" data-act="copy-addr" data-id="${b.id}"><i class="bi bi-signpost-2"></i>نسخ العنوان بس</button>
          <button class="link-quiet" type="button" data-act="view-photos" data-id="${b.id}"><i class="bi bi-images"></i>صور الفرع</button>
        </div>
      </article>
    </div>`;
  }

  if (grid) {
    grid.innerHTML = (window.BRANCHES || []).map(cardHTML).join("");
  }
  if (window.EraaUI && typeof EraaUI.refreshAOS === "function") {
    EraaUI.refreshAOS();
  }

  const byId = Object.fromEntries((window.BRANCHES || []).map(b => [b.id, b]));

  /* ----------  صور الفرع  ---------- */
  const lbEl = document.getElementById("lightbox");
  let lbModal = null;
  const getLB = () => (lbModal = lbModal || (window.bootstrap && lbEl ? new bootstrap.Modal(lbEl) : null));
  const lbImg = document.getElementById("lbImg");

  let photoList = [];
  let photoIdx = 0;
  let currentBranchName = "";

  function showPhoto() {
    const src = getImgSrc(photoList[photoIdx]);
    if (!src) return;

    if (lbImg) {
      lbImg.src = src;
      lbImg.alt = `صورة ${currentBranchName}`;
    }

    const lbTag = document.getElementById("lbTag");
    if (lbTag) lbTag.textContent = currentBranchName;

    const lbCount = document.getElementById("lbCount");
    if (lbCount) lbCount.textContent = `${photoIdx + 1} / ${photoList.length}`;

    // Preload //
    [photoIdx - 1, photoIdx + 1].forEach(j => {
      if (photoList[j]) {
        const pSrc = getImgSrc(photoList[j]);
        if (pSrc) new Image().src = pSrc;
      }
    });
  }

  const stepPhoto = d => {
    if (!photoList.length) return;
    photoIdx = (photoIdx + d + photoList.length) % photoList.length;
    showPhoto();
  };

  /*  عشان تجميع كل الصور  كملف واحد ZIP ملف  */
  async function downloadBranchZip(btn) {
    if (typeof JSZip === "undefined") {
      alert("مكتبة الضغط جاري تحميلها، يرجى المحاولة مرة أخرى.");
      return;
    }

    if (!photoList.length) return;

    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري التجميع...`;

    try {
      const zip = new JSZip();
      const folder = zip.folder(currentBranchName);

      const fetchPromises = photoList.map(async (item, idx) => {
        const src = getImgSrc(item);
        if (!src) return;
        try {
          const res = await fetch(src);
          const blob = await res.blob();
          const ext = src.split(".").pop().split("?")[0] || "jpg";
          folder.file(`${currentBranchName}-صورة-${idx + 1}.${ext}`, blob);
        } catch (e) {
          console.error("فشل جلب الصورة للضغط:", src, e);
        }
      });

      await Promise.all(fetchPromises);

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const blobUrl = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `صور-${currentBranchName}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      alert("حدث خطأ أثناء تحميل الملف المضغوط، يرجى المحاولة لاحقاً.");
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  }

  function openBranchPhotos(b) {
    const images = b.images || b.photos || [];
    if (!images.length) {
      if (window.EraaUI && typeof EraaUI.copyWithFeedback === "function") {
        EraaUI.copyWithFeedback(document.activeElement, "", "لا توجد صور متاحة لهذا الفرع حالياً");
      } else {
        alert("لا توجد صور متاحة لهذا الفرع حالياً");
      }
      return;
    }

    photoList = images;
    photoIdx = 0;
    currentBranchName = b.name;

    const m = getLB();
    if (m) {
      showPhoto();
      m.show();
    } else {
      const firstSrc = getImgSrc(photoList[0]);
      if (firstSrc) window.open(firstSrc, "_blank");
    }
  }

  if (grid) {
    grid.addEventListener("click", e => {
      const btn = e.target.closest("[data-act]"); if (!btn) return;
      const b = byId[btn.dataset.id]; if (!b) return;
      const act = btn.dataset.act;

      if (act === "copy-all")    EraaUI.copyWithFeedback(btn, buildMsg(b),    `تم نسخ عنوان ولوكيشن ${b.name}`);
      if (act === "copy-addr")   EraaUI.copyWithFeedback(btn, fullAddress(b), `تم نسخ عنوان ${b.name}`);
      if (act === "view-photos") openBranchPhotos(b);
    });
  }

  const btnPrev = document.getElementById("lbPrev");
  if (btnPrev) btnPrev.addEventListener("click", () => stepPhoto(-1));

  const btnNext = document.getElementById("lbNext");
  if (btnNext) btnNext.addEventListener("click", () => stepPhoto(1));

  const btnDl = document.getElementById("lbDownload");
  if (btnDl) {
    btnDl.addEventListener("click", function () {
      downloadBranchZip(this);
    });
  }

  document.addEventListener("keydown", e => {
    if (!lbEl || !lbEl.classList.contains("show")) return;
    if (e.key === "ArrowRight") stepPhoto(-1);
    if (e.key === "ArrowLeft")  stepPhoto(1);
  });
})();