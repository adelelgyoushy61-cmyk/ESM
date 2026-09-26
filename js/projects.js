document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  const searchInput = document.getElementById('project-search-input');
  const typeChips = document.querySelectorAll('#type-filter-chips .chip');
  const resultsCountText = document.getElementById('results-count-text');

  let activeType = 'all';
  let searchQuery = '';

  // 1. تحديث أعداد الفلاتر على الـ Chips
  function updateCounters() {
    if (!window.STUDENT_PROJECTS) return;
    const all = window.STUDENT_PROJECTS.length;
    const vids = window.STUDENT_PROJECTS.filter(p => p.type === 'video').length;
    const gh = window.STUDENT_PROJECTS.filter(p => p.type === 'github').length;
    const beh = window.STUDENT_PROJECTS.filter(p => p.type === 'behance').length;

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setVal('cnt-all', all);
    setVal('cnt-video', vids);
    setVal('cnt-github', gh);
    setVal('cnt-behance', beh);
  }

  // 2. دالة لاستخراج صورة المصغرة مباشرة من روابط Google Drive و GitHub
  function getProjectThumbnail(project) {
    if (project.thumbnail) {
      return project.thumbnail;
    }

    // فيديوهات Google Drive (استخراج File ID وتوليد صورة الغلاف المصغرة فوراً)
    if (project.type === 'video' && project.url) {
      const driveMatch = project.url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (driveMatch && driveMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${driveMatch[1]}=s600`;
      }
    }

    // مشاريع Front-End عبر GitHub
    if (project.type === 'github' && project.demoUrl) {
      return `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.demoUrl)}?w=600&h=338`;
    }

    return 'assets/projects/default-preview.jpg';
  }

  // 3. بناء هيكل الكارت
  function createProjectCard(project) {
    let actionButtons = '';
    let previewContent = '';

    const tagsHtml = (project.tags || [])
      .map(tag => `<li><i class="bi bi-tag-fill"></i>${tag}</li>`)
      .join('');

    if (project.type === 'video') {
      const previewImage = getProjectThumbnail(project);
      previewContent = `
        <div class="shot mb-3 position-relative overflow-hidden" style="aspect-ratio: 16/9; background: #0c1838; cursor: default;">
          <img src="${previewImage}" alt="${project.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='assets/projects/default-preview.jpg';">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,0.3);">
            <i class="bi bi-play-circle-fill display-4 text-white opacity-90"></i>
          </div>
          <span class="shot-tag"><i class="bi bi-play-btn-fill me-1"></i>Data Analysis</span>
        </div>`;

      actionButtons = `
        <div class="dip-actions w-100">
          <button class="btn-eh open-video-btn" data-url="${project.url}" data-title="${project.title}" style="cursor: pointer;">
            <i class="bi bi-play-fill fs-5"></i> مشاهدة
          </button>
          <button class="btn-eh btn-eh--ghost copy-link-btn" data-link="${project.url}" style="cursor: pointer;">
            <i class="bi bi-link-45deg fs-5"></i> نسخ الرابط
          </button>
        </div>`;

    } else if (project.type === 'behance') {
      previewContent = `
        <div class="shot mb-3 position-relative overflow-hidden d-flex align-items-center justify-content-center" style="aspect-ratio: 16/9; background: #0057ff15; border: 1px solid #1769ff30; border-radius: 8px; cursor: default;">
          <i class="bi bi-behance" style="font-size: 3.5rem; color: #1769ff;"></i>
          <span class="shot-tag" style="background: #1769ff; color: #fff;">UI/UX Design</span>
        </div>`;

      actionButtons = `
        <div class="dip-actions w-100">
          <a href="${project.url}" target="_blank" rel="noopener" class="btn-eh" style="cursor: pointer;">
            <i class="bi bi-box-arrow-up-right"></i> المعاينة
          </a>
          <button class="btn-eh btn-eh--ghost copy-link-btn" data-link="${project.url}" style="cursor: pointer;">
            <i class="bi bi-link-45deg fs-5"></i> نسخ الرابط
          </button>
        </div>`;

    } else if (project.type === 'github') {
      const previewImage = getProjectThumbnail(project);
      previewContent = `
        <div class="shot mb-3 position-relative overflow-hidden" style="aspect-ratio: 16/9; background: var(--brand-tint); cursor: default;">
          <img src="${previewImage}" alt="${project.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='assets/projects/default-preview.jpg';">
          <span class="shot-tag" style="background: var(--gold); color: var(--ink);">Front-End</span>
        </div>`;

      actionButtons = `
        <div class="dip-actions w-100">
          <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn-eh" style="cursor: pointer;">
            <i class="bi bi-globe"></i> المعاينة
          </a>
          <button class="btn-eh btn-eh--ghost copy-link-btn" data-link="${project.demoUrl}" style="cursor: pointer;">
            <i class="bi bi-link-45deg fs-5"></i> نسخ الرابط
          </button>
        </div>`;
    }

    return `
      <div class="col-md-6 col-lg-4">
        <div class="dip-card">
          ${previewContent}
          <div class="dip-head mb-2">
            <div>
              <h3 class="dip-name">${project.title}</h3>
            </div>
          </div>
          ${tagsHtml ? `<ul class="facts my-2">${tagsHtml}</ul>` : ''}
          <div class="dip-foot pt-2 border-top border-line mt-auto">
            ${actionButtons}
          </div>
        </div>
      </div>`;
  }

  // 4. دالة الفلترة والعرض
  function renderProjects() {
    if (!window.STUDENT_PROJECTS || !container) return;

    const filtered = window.STUDENT_PROJECTS.filter(item => {
      const matchType = activeType === 'all' || item.type === activeType;
      const matchSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery)));

      return matchType && matchSearch;
    });

    if (resultsCountText) {
      resultsCountText.textContent = `عرض ${filtered.length} من إجمالي ${window.STUDENT_PROJECTS.length} مشروع`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12">
          <div class="empty">
            <i class="bi bi-folder-x"></i>
            <h2>لم يتم العثور على نتائج</h2>
            <p>جرّب تغيير كلمات البحث أو الفلاتر المحددة</p>
          </div>
        </div>`;
      return;
    }

    container.innerHTML = filtered.map(createProjectCard).join('');
    bindCardEvents();
  }

  // 5. الأحداث والروابط
  function bindCardEvents() {
    const modalEl = document.getElementById('projectVideoModal');
    if (modalEl) {
      const iframe = document.getElementById('projectVideoIframe');
      const titleEl = document.getElementById('projectVideoTitle');

      document.querySelectorAll('.open-video-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const url = btn.getAttribute('data-url');
          const title = btn.getAttribute('data-title');

          if (iframe) iframe.src = url;
          if (titleEl) titleEl.textContent = title;

          const bsModal = new bootstrap.Modal(modalEl);
          bsModal.show();
        });
      });

      modalEl.addEventListener('hidden.bs.modal', () => {
        if (iframe) iframe.src = '';
      });
    }

    // نسخ الرابط
    document.querySelectorAll('.copy-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const link = btn.getAttribute('data-link');
        if (!link) return;

        navigator.clipboard.writeText(link).then(() => {
          const originalText = btn.innerHTML;
          btn.classList.add('is-copied');
          btn.innerHTML = `<i class="bi bi-check2 me-1"></i> تم النسخ!`;

          setTimeout(() => {
            btn.classList.remove('is-copied');
            btn.innerHTML = originalText;
          }, 2000);
        });
      });
    });
  }

  // 6. أحداث الفلترة والبحث
  typeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      typeChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      activeType = chip.getAttribute('data-filter');
      renderProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderProjects();
    });
  }

  // التشغيل المبدئي
  updateCounters();
  renderProjects();
});