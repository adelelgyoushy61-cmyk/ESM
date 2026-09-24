document.addEventListener("DOMContentLoaded", function () {
    const salesContainer = document.getElementById("salesContent");
    if (!salesContainer) return;

    // 🌟 إضافة تأثيرات الـ Hover المخصصة والمطبقة على ألوان المود الداكن والفاتح
    injectHoverStyles();

    let html = '';

    // 1. كارت باسورد تطبيق البصمة
    if (window.SALES_INFO && window.SALES_INFO.fingerprintPass) {
        html += `
          <div class="col-12" data-aos="fade-up">
            <div class="dip-card js-hover-card">
              <div class="dip-head">
                <div class="dip-icon"><i class="bi bi-fingerprint"></i></div>
                <div>
                  <h3 class="dip-name">باسورد تطبيق البصمة</h3>
                  <p class="dip-cat">بيانات الدخول السريعة</p>
                </div>
              </div>
              <div class="msg-box mb-3" id="passText" style="font-family: monospace; font-size: 1.1rem; font-weight: bold; min-height: auto;">${window.SALES_INFO.fingerprintPass}</div>
              <div class="dip-actions" style="grid-template-columns: 1fr;">
                <button type="button" class="btn-eh" onclick="copySalesText('passText', this)">
                  <i class="bi bi-clipboard"></i><span>نسخ الباسورد</span>
                </button>
              </div>
            </div>
          </div>
        `;
    }

    // 2. كروت رسائل التحويل والرموز
    if (window.SALES_INFO && window.SALES_INFO.paymentMessages) {
        window.SALES_INFO.paymentMessages.forEach((msg, index) => {
            html += `
            <div class="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
              <div class="dip-card js-hover-card">
                <div class="dip-head">
                  <div class="dip-icon"><i class="bi bi-wallet2"></i></div>
                  <div>
                    <h3 class="dip-name">${msg.title}</h3>
                    <p class="dip-cat">${msg.subtitle}</p>
                  </div>
                </div>
                <div class="msg-box mb-3" id="${msg.id}">${msg.text}</div>
                <div class="dip-actions" style="grid-template-columns: 1fr;">
                  <button type="button" class="btn-eh" onclick="copySalesText('${msg.id}', this)">
                    <i class="bi bi-clipboard2"></i><span>نسخ الرسالة بالكامل</span>
                  </button>
                </div>
              </div>
            </div>
          `;
        });
    }

    // 3. كارت منصات التواصل الاجتماعي (Social Media Card)
    if (window.SOCIAL_MEDIA_LINKS) {
        const linksList = window.SOCIAL_MEDIA_LINKS.map(item => `
          <div class="col-12 col-md-6">
            <div class="d-flex align-items-center justify-content-between p-3 rounded social-item-card js-social-hover">
              <div class="d-flex align-items-center gap-3 overflow-hidden">
                <i class="bi ${item.icon} fs-3 social-icon" style="color: ${item.color};"></i>
                <div class="text-truncate">
                  <strong class="d-block text-title">${item.name}</strong>
                  <a href="${item.url}" target="_blank" class="text-decoration-none small text-sub text-truncate d-block">${item.url}</a>
                </div>
              </div>
              <button type="button" class="btn btn-outline-primary btn-sm ms-2 flex-shrink-0" onclick="copyDirectText('${item.url}', this)">
                <i class="bi bi-copy"></i> <span>نسخ</span>
              </button>
            </div>
          </div>
        `).join("");

        html += `
          <div class="col-12 mb-2" data-aos="fade-up">
            <div class="dip-card js-hover-card">
              <div class="dip-head d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div class="d-flex align-items-center gap-2">
                  <div class="dip-icon"><i class="bi bi-share-fill"></i></div>
                  <div>
                    <h3 class="dip-name">منصات التواصل الاجتماعي (Eraa Social Media)</h3>
                    <p class="dip-cat">روابط الصفحات الرسمية</p>
                  </div>
                </div>
                <button type="button" class="btn-eh" onclick="copyFullSocialMsg(this)">
                  <i class="bi bi-clipboard-check-fill"></i><span>نسخ الرسالة كاملة</span>
                </button>
              </div>
              <div class="row g-3 mt-2">
                ${linksList}
              </div>
            </div>
          </div>
        `;
    }

    salesContainer.innerHTML = html;

    // تهيئة AOS بعد إضافة العناصر
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 600, once: true });
    }

    initInteractiveMouseEffects();
});

// دالة حقن الـ CSS الخاصة بالتنسيق والهوفر لجعل الكروت متناسقة تماماً مع الداكن والفاتح
function injectHoverStyles() {
    const style = document.createElement('style');
    style.id = 'js-hover-styles';
    style.innerHTML = `
      /* تأثير الكروت الرئيسية */
      .js-hover-card {
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, border-color 0.3s ease !important;
        will-change: transform, box-shadow;
      }
      .js-hover-card:hover {
        transform: translateY(-5px);
        border-color: rgba(13, 110, 253, 0.5) !important;
      }
      .js-hover-card:hover .dip-icon {
        transform: scale(1.1) rotate(-5deg);
      }
      .dip-icon {
        transition: transform 0.3s ease;
      }

      /* تنسيق كروت السوشيال ميديا الداخلية لتندمج مع الكارت الأب بدون خلفية بيضاء */
      .social-item-card {
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.25s ease-in-out !important;
      }
      
      .social-item-card .text-title {
        color: inherit;
      }
      
      .social-item-card .text-sub {
        opacity: 0.7;
        color: inherit;
      }

      /* هوفر كروت السوشيال ميديا */
      .social-item-card:hover {
        transform: translateX(-4px);
        background-color: rgba(13, 110, 253, 0.15) !important;
        border-color: #0d6efd !important;
      }
      .social-item-card:hover .social-icon {
        transform: scale(1.2);
      }
      .social-icon {
        transition: transform 0.2s ease;
      }

      /* دعم الثيم الفاتح لو لم يكن داكناً */
      html:not([data-bs-theme="dark"]) .social-item-card,
      body:not(.dark-theme):not([data-bs-theme="dark"]) .social-item-card {
        background-color: rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.08);
      }
      html:not([data-bs-theme="dark"]) .social-item-card:hover,
      body:not(.dark-theme):not([data-bs-theme="dark"]) .social-item-card:hover {
        background-color: rgba(13, 110, 253, 0.08) !important;
      }
    `;
    document.head.appendChild(style);
}

function initInteractiveMouseEffects() {
    const cards = document.querySelectorAll('.js-hover-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });
    });
}

function copySalesText(elementId, btn) {
    const text = document.getElementById(elementId).innerText;
    copyDirectText(text, btn);
}

function copyFullSocialMsg(btn) {
    const text = window.SOCIAL_MEDIA_TEXT || "";
    copyDirectText(text, btn);
}

function copyDirectText(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const span = btn.querySelector('span');
        if (span) {
            const originalText = span.innerText;
            span.innerText = 'تم النسخ بنجاح!';
            btn.classList.add('is-copied');

            setTimeout(() => {
                span.innerText = originalText;
                btn.classList.remove('is-copied');
            }, 2000);
        }
    });
}