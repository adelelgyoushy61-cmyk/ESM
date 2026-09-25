(function () {
  const grid    = document.getElementById("grid");
  const chipsEl = document.getElementById("chips");
  const countEl = document.getElementById("resultCount");
  const emptyEl = document.getElementById("emptyState");

  const dipById = Object.fromEntries((typeof DIPLOMAS !== "undefined" ? DIPLOMAS : []).map(d => [d.id, d]));
  const dipName = id => (dipById[id] ? dipById[id].name : id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  /* ---------- تجهيز الفيديوهات ---------- */
  function parseVideo(url) {
    let m;
    if (!url) return { kind: "file", src: "", download: null };
    if ((m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/))) {
      return { 
        kind: "youtube", 
        embed: `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`, 
        thumb: `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`, 
        download: `https://www.youtube.com/watch?v=${m[1]}` 
      };
    }
    if ((m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/)) || (m = url.match(/drive\.google\.com\/(?:open|uc)\?(?:[^#]*&)?id=([\w-]+)/))) {
      return {
        kind: "drive",
        embed: `https://drive.google.com/file/d/${m[1]}/preview`,
        thumb: `https://drive.google.com/thumbnail?id=${m[1]}&sz=w640`,
        download: `https://drive.google.com/uc?export=download&id=${m[1]}`
      };
    }
    return { kind: "file", src: url, download: url };
  }

  const images = ((typeof FEEDBACK !== "undefined" && FEEDBACK.images) || []).map((it, i) => ({
    ...it, alt: `فيدباك طالب من دبلومة ${dipName(it.diploma)} — رقم ${i + 1}`
  }));
  const videos = ((typeof FEEDBACK !== "undefined" && FEEDBACK.videos) || []).map(v => ({ ...v, ...parseVideo(v.url) }));

  /* ---------- (فصل الفلاتر لكل تاب) ---------- */
  let state = {
    tab: "images",
    imageDip: "all",
    videoDip: "all"
  };

  const currentItems = () => (state.tab === "images" ? images : videos);
  const currentDip = () => (state.tab === "images" ? state.imageDip : state.videoDip);

  const setCurrentDip = (dipId) => {
    if (state.tab === "images") {
      state.imageDip = dipId;
    } else {
      state.videoDip = dipId;
    }
  };

  const filtered = () => {
    const items = currentItems();
    const activeDip = currentDip();
    return items.filter(x => activeDip === "all" || x.diploma === activeDip);
  };

  function renderChips() {
    const all = currentItems();
    const activeDip = currentDip();
    const uniqueDipIds = [...new Set(all.map(x => x.diploma))].filter(Boolean);

    if (activeDip !== "all" && !uniqueDipIds.includes(activeDip)) {
      setCurrentDip("all");
    }

    if (uniqueDipIds.length === 0) {
      chipsEl.innerHTML = "";
      return;
    }

    const chip = (id, label, n) =>
      `<button type="button" class="chip" data-dip="${esc(id)}" aria-pressed="${currentDip() === id}"><bdi>${esc(label)}</bdi><span class="n">${n}</span></button>`;

    chipsEl.innerHTML = chip("all", "الكل", all.length) +
      uniqueDipIds.map(id => {
        const count = all.filter(x => x.diploma === id).length;
        return chip(id, dipName(id), count);
      }).join("");
  }

  function shotHTML(x, i) {
    return `
    <div class="col-6 col-md-4 col-lg-3" ${window.EraaUI ? EraaUI.aos((i % 4) * 60) : ''}>
      <div class="d-flex flex-column gap-2 h-100">
        <button type="button" class="shot" data-open="${i}" aria-label="تكبير الصورة: ${esc(dipName(x.diploma))}">
          <img src="${esc(x.src)}" alt="${esc(x.alt)}" loading="lazy" decoding="async">
          <span class="shot-zoom" aria-hidden="true"><i class="bi bi-arrows-fullscreen"></i></span>
          <span class="shot-tag">${esc(dipName(x.diploma))}</span>
        </button>
        <button type="button" class="btn-eh btn-eh--ghost btn-eh--sm w-100" data-copylink="${i}"
                aria-label="نسخ لينك صورة فيدباك ${esc(dipName(x.diploma))}">
          <i class="bi bi-link-45deg"></i><span>نسخ اللينك</span>
        </button>
      </div>
    </div>`;
  }

  function vidHTML(v, i) {
    let thumb = "";
    if (v.kind === "file") {
      thumb = `<video class="vc-thumb" src="${esc(encodeURI(v.src))}#t=0.5" preload="metadata" muted playsinline tabindex="-1" aria-hidden="true"></video>`;
    } else if (v.thumb) {
      thumb = `<img src="${esc(v.thumb)}" alt="" loading="lazy" onerror="this.remove()">`;
    }
    return `
    <div class="col-12 col-sm-6 col-lg-4" ${window.EraaUI ? EraaUI.aos((i % 3) * 70) : ''}>
      <button type="button" class="vid" data-play="${i}">
        <span class="vid-thumb">${thumb}<span class="vid-play" aria-hidden="true"><i class="bi bi-play-fill"></i></span></span>
        <span class="vid-body d-block">
          <span class="vid-title d-block">${esc(v.title || "فيدباك طالب")}</span>
          <span class="vid-dip d-block">${esc(dipName(v.diploma))}</span>
        </span>
      </button>
    </div>`;
  }

  function render() {
    document.getElementById("cnt-images").textContent = images.length;
    document.getElementById("cnt-videos").textContent = videos.length;

    document.querySelectorAll("[data-tab]").forEach(b => {
      b.setAttribute("aria-selected", b.dataset.tab === state.tab);
    });

    renderChips();

   
    const list = filtered();
    grid.innerHTML = list.map(state.tab === "images" ? shotHTML : vidHTML).join("");
 
    countEl.textContent = list.length ? `${list.length} ${state.tab === "images" ? "صورة" : "فيديو"}` : "";
 
    const none = currentItems().length === 0 || list.length === 0;
    emptyEl.hidden = !none;
    if (none) {
      emptyEl.querySelector("h2").textContent = state.tab === "videos" ? "لسه مفيش فيديوهات هنا" : "لسه مفيش صور هنا";
      emptyEl.querySelector("p").textContent = "أول ما يتضاف محتوى هيظهر في الصفحة دي.";
    }
 
    if (window.EraaUI && typeof EraaUI.refreshAOS === "function") {
      EraaUI.refreshAOS();
    }
  }


  /* ---------- الأحداث ---------- */
  document.querySelector(".seg").addEventListener("click", e => {
    const b = e.target.closest("[data-tab]");
    if (!b) return;
    state.tab = b.dataset.tab;
    render();
  });
 
  chipsEl.addEventListener("click", e => {
    const b = e.target.closest("[data-dip]");
    if (!b) return;
    setCurrentDip(b.dataset.dip);
    render();
  });
 
  /* ---------- عارض الصور (Lightbox) ---------- */
  const lbEl = document.getElementById("lightbox");
  let lbModal = null;
  const getLB = () => (lbModal = lbModal || (window.bootstrap ? new bootstrap.Modal(lbEl) : null));
  const lbImg = document.getElementById("lbImg");
  let list = [], idx = 0;

  /* ---------- عرض الصورة الحالية داخل الـ Lightbox ---------- */
  function showLB() {
    const it = list[idx];
    if (!it) return;

    lbImg.src = it.src;
    lbImg.alt = it.alt || "";

    document.getElementById("lbTag").textContent = dipName(it.diploma);
    document.getElementById("lbCount").textContent = `${idx + 1} / ${list.length}`;

    const dl = document.getElementById("lbDownload");
    if (dl) {
      dl.href = it.src;
      dl.setAttribute("download", `feedback-${it.diploma || "eraasoft"}-${idx + 1}`);
    }
  }

  /* ---------- التنقل بين الصور (السابق / التالي) ---------- */
  function step(dir) {
    if (!list.length) return;
    idx = (idx + dir + list.length) % list.length;
    showLB();
  }

 
  /* ---------- دالة تحويل الرابط لرابط كامل ---------- */
  function absUrl(url) {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return new URL(url, window.location.href).href;
  }

 grid.addEventListener("click", e => {
  const c = e.target.closest("[data-copylink]");
  if (c) {
    const it = filtered()[+c.dataset.copylink];
    if (it) {
      // يقرأ الرابط الخارجي لو موجود ومكتوب، وإلا ينسخ مسار الصورة المحلي المباشر
      const link = (it.externalUrl && it.externalUrl.trim() !== "") ? it.externalUrl : absUrl(it.src);
      
      if (window.EraaUI && typeof EraaUI.copyWithFeedback === "function") {
        EraaUI.copyWithFeedback(c, link, `تم نسخ لينك صورة ${dipName(it.diploma)}`);
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => {
          const span = c.querySelector("span");
          if (span) {
            const originalText = span.innerText;
            span.innerText = "تم النسخ!";
            c.classList.add("is-copied");
            setTimeout(() => {
              span.innerText = originalText;
              c.classList.remove("is-copied");
            }, 2000);
          }
        });
      }
    }
    return;
  }


    const o = e.target.closest("[data-open]");
    if (o) {
      list = filtered();
      idx = +o.dataset.open;
      const m = getLB();
      if (m) { showLB(); m.show(); } else { window.open(list[idx].src, "_blank"); }
      return;
    }
    const p = e.target.closest("[data-play]");
    if (p) openVideo(filtered()[+p.dataset.play]);
  });
 
   const btnPrev = document.getElementById("lbPrev");
  if (btnPrev) btnPrev.addEventListener("click", () => step(-1));
 
  const btnNext = document.getElementById("lbNext");
  if (btnNext) btnNext.addEventListener("click", () => step(1));
 
  document.addEventListener("keydown", e => {
    if (!lbEl || !lbEl.classList.contains("show")) return;
    if (e.key === "ArrowRight") step(-1);
    if (e.key === "ArrowLeft")  step(1);
  });
 
  let sx = null;
  const stage = document.getElementById("lbStage");
  if (stage) {
    stage.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", e => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) step(dx > 0 ? -1 : 1);
      sx = null;
    });
  }

 
  /* ---------- مشغل الفيديو وتعيين التحميل ---------- */
  const vmEl = document.getElementById("videoModal");
  let vmModal = null;
  const getVM = () => (vmModal = vmModal || (window.bootstrap ? new bootstrap.Modal(vmEl) : null));
  const vmFrame = document.getElementById("vmFrame"); 
  const vmDownloadBtn = document.getElementById("vmDownloadBtn");
 
  function openVideo(v) {
    if (!v) return;
    document.getElementById("vmTitle").textContent = `${v.title || "فيدباك طالب"} — ${dipName(v.diploma)}`;
    vmFrame.innerHTML = "";
    
    // إعداد التشغيل
    if (v.kind === "file") {
      const el = document.createElement("video");
      el.src = v.src; el.controls = true; el.autoplay = true; el.playsInline = true;
      vmFrame.appendChild(el);
    } else {
      const f = document.createElement("iframe");
      f.src = v.embed; f.allow = "autoplay; fullscreen; encrypted-media"; f.allowFullscreen = true;
      f.title = v.title || "فيديو";
      vmFrame.appendChild(f);
    }
 
    // إعداد زر التحميل
    if (vmDownloadBtn) {
      if (v.download) {
        vmDownloadBtn.style.display = "inline-flex";
        vmDownloadBtn.href = v.download;
        
        if (v.kind === "youtube") {
          vmDownloadBtn.removeAttribute("download");
          vmDownloadBtn.target = "_blank"; // فتح يوتيوب في تبويب جديد لأن يوتيوب يمنع التنزيل المباشر
        } else {
          vmDownloadBtn.setAttribute("download", `video-feedback-${v.diploma || 'eraasoft'}.mp4`);
          vmDownloadBtn.removeAttribute("target");
        }
      } else {
        vmDownloadBtn.style.display = "none";
      }
    }
 
    const m = getVM();
    if (m) m.show(); else window.open(v.url, "_blank");
  }
 
  if (vmEl) {
    vmEl.addEventListener("hidden.bs.modal", () => { vmFrame.innerHTML = ""; });
  }
 
  render();
})();
 
