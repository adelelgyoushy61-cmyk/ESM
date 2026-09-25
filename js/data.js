window.CONTACT = {
  website: "www.eraasoft.com",
  linkedin: "eraasoft"
};

/* ----------  ( الفلتر ) ---------- */
window.CATEGORIES = [
  { id: "programming", label: "برمجة", color: "#0B35E8", ink: "#0B35E8" },
  { id: "foundation", label: "أساسيات البرمجة", color: "#1E90FF", ink: "#0B62B8" },
  { id: "ai", label: "ذكاء اصطناعي", color: "#1E90FF", ink: "#0B62B8" },
  { id: "data", label: "تحليل بيانات", color: "#1E90FF", ink: "#0B62B8" },
  { id: "security", label: "أمن سيبراني", color: "#1E90FF", ink: "#0B62B8" },
  { id: "design", label: "design", color: "#1E90FF", ink: "#0B62B8" }
];

window.DIPLOMAS = [
  {
    id: "frontend", name: "Front-End", category: "programming", icon: "bi-code-slash",
    url: "https://eraapro.com/frontend", keywords: "فرونت html css js react",
    weeks: 18, hours: 146, projects: 4, tasks: 15
  },
  {
    id: "dotnet", name: "Back-End .NET", category: "programming", icon: "bi-server",
    url: "https://eraapro.com/dotnet", keywords: "باك اند دوت نت c# net",
    weeks: 18, hours: 141, projects: 5, tasks: 17
  },
  {
    id: "php", name: "PHP", category: "programming", icon: "bi-filetype-php",
    url: "https://eraapro.com/php", keywords: "باك اند بي اتش بي laravel",
    weeks: 16, hours: 112, projects: 5, tasks: 32
  },
  {
    id: "nodejs", name: "Node.js", category: "programming", icon: "bi-hdd-network",
    url: "https://eraapro.com/nodejs", keywords: "نود جي اس باك اند javascript",
    weeks: 16, hours: 127, projects: 4, tasks: 16
  },
  {
    id: "java", name: "Back-End Java", category: "programming", icon: "bi-cup-hot",
    url: "https://eraapro.com/java", keywords: "جافا باك اند spring",
    weeks: 32, hours: 300, projects: 9, tasks: 20
  },
  {
    id: "flutter", name: "Flutter", category: "programming", icon: "bi-phone",
    url: "https://eraapro.com/flutter", keywords: "فلاتر موبايل تطبيقات dart",
    weeks: 16, hours: 127, projects: 4, tasks: 16
  },
  {
    id: "cs8", name: "أساسيات البرمجة (CS8)", short: "CS8", category: "foundation", icon: "bi-cpu",
    url: "https://eraapro.com/cs-8", keywords: "cs8 cs 8 اساسيات c++ oop data structure algorithm",
    facts: [
      { icon: "bi-code-square", text: "80% تطبيق عملي" },
      { icon: "bi-braces", text: "C++\u200E و OOP" },
      { icon: "bi-diagram-3", text: "Data Structure & Algorithms" }
    ],
    message:
      `🔹 **دبلومة أساسيات البرمجة – CS8**
الدبلومة بتركز بشكل كبير على التطبيق العملي، بحيث يكون **80% تطبيق عملي و20% شرح نظري**، وهنبدأ معاك من الأساسيات لحد ما يكون عندك قاعدة قوية في البرمجة من خلال:
• Basics
• C++
• OOP
• Data Structure
• Algorithms
🔹 **تقييمات مستمرة طول فترة الدبلومة**
ووفقًا لتقييم مستواك، ممكن تحصل على **Bonus يترجم لخصم** بيحدده الـInstructor ليك على دبلومة التخصص بعد كده.
🔹 **LinkedIn Session**
هتاخد Session مخصصة نساعدك فيها تبني Account احترافي على LinkedIn، وتعرف إزاي ترفع عليه المشاريع اللي بتعملها في الدبلومة
🔹 *Soft Skills + Programs إضافية*
**1️⃣ How To Be Ready?**
هنتكلم عن إزاي تكون جاهز لسوق العمل، وتشتغل على مشاريع حقيقية، وتبني Portfolio، وتستفيد من LinkedIn وتكوّن شبكة علاقات تساعدك في الوصول لفرص شغل مستقبلًا.
**2️⃣ Know Your Track**
برنامج بيساعدك تتعرف على تخصصات البرمجة بشكل مباشر، وتفهم كل Track ومجالاته، عشان تقدر تحدد التخصص الأنسب ليك بناءً على ميولك وقدراتك.

⭐واسأل عن **Golden Guarantee** 
 
🔗 *لينك الدبلومة:*
https://eraapro.com/cs-8`
  },
  {
    id: "da", name: "Data Analysis", category: "data", icon: "bi-bar-chart-line",
    url: "https://eraapro.com/datamindset", keywords: "da داتا تحليل بيانات data mindset",
    weeks: 16, hours: 127, projects: 4, tasks: 16
  },
  {
    id: "ai", name: "AI", category: "ai", icon: "bi-robot",
    url: "https://eraapro.com/ai", keywords: "ذكاء اصطناعي machine learning ai",
    weeks: 28, hours: 210, projects: 10, tasks: 30
  },
  {
    id: "cyber", name: "Cyber Security", category: "security", icon: "bi-shield-lock",
    url: "https://eraapro.com/cybersecurity", keywords: "امن سيبراني سايبر سيكيورتي هاكنج",
    weeks: 16, hours: 127, projects: 4, tasks: 16,
    facts: [
      { icon: "bi-calendar3", text: "16 اسبوع" },
      { icon: "", text: "127 ساعة" },
      { icon: "", text: "4 مشاريع" },
      { icon: "bi-translate", text: "محتاج مستوى الأنجليزي يكون كويس" }
    ],
    duration: "16 اسبوع",
    notes: [" الإنجليزي: لازم يكون مستواك كويس فيه"]
  },
  {
    id: "uiux", name: "UI/UX", category: "design", icon: "bi-vector-pen",
    url: "https://eraapro.com/uiux", keywords: "تصميم واجهات ui ux يو اي يو اكس figma فيجما",
    weeks: 12, hours: 87, projects: 2, tasks: 12
  }
];

/* --------- الرسالة التلقائية للدبلومات  ---------- */
window.buildMessage = function (d) {
  if (d.message) return d.message;
  const lines = [`دبلومة ${d.name} `, ""];
  if (d.projects) lines.push(` ${d.projects} مشاريع عملية خلال الدورة`);
  if (d.weeks && d.hours) lines.push(` المدة وساعات التدريب: ${d.weeks} أسبوع / ${d.hours} ساعة`);
  else if (d.duration) lines.push(` مدة الدبلومة: ${d.duration}`);
  // if (d.tasks) lines.push(`  : ${d.tasks}   `);
  if (d.projects) lines.push(" تطبيق عملي مع متابعة من الـمنتور بشكل اسبوعي خلال فترة الدبلومة");
  (d.notes || []).forEach(n => lines.push(n));
  lines.push(
    "",
    " EraaSoft Impact – مهارات سوق العمل ",
    "1- Freelancing:  تعرف تبدأ Freelancing وتبيع خدمتك. ",
    "2- CV (ATS) & Portfolio:  تعرف تعمل CV مناسب للـATS وتعرض شغلك بشكل احترافي. ",
    "3- LinkedIn & Personal Branding:   تعرف تقدم نفسك وتبني الـPersonal Brand بتاعك. ",
    "4- Presentation & Communication Skills:  تعرف تعرض شغلك وتتواصل بشكل أفضل. ",
    "5- Interview Skills: تتعلم إزاي تقدم نفسك وتتعامل مع الـInterviews. ",
    "6- Business English: تطور الـEnglish اللي محتاجه في بيئة العمل.",
   
    "",
    "🔗 لينك الدبلومة:",
    d.url
  );
  return lines.join("\n");
};


/* ---------- الفيدباكس ----------*/
window.FEEDBACK = {
  images: [
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-01.jpg", externalUrl: "https://www.facebook.com/share/1DWYg4AwRR/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-02.jpg", externalUrl: "https://www.facebook.com/share/1DeKG5Qx67/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-03.jpg", externalUrl: "https://www.facebook.com/share/1EvWNBNZgf/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-04.jpg", externalUrl: "https://www.facebook.com/share/1DocESVXJz/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-05.jpg", externalUrl: "https://www.facebook.com/share/1c5wLFnXwF/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-06.jpg", externalUrl: "https://www.facebook.com/share/1cjKPuEt5q/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-07.jpg", externalUrl: "https://www.facebook.com/share/19nhPuEM7v/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-08.jpg", externalUrl: "https://www.facebook.com/share/1cjKPuEt5q/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-09.jpg", externalUrl: "https://www.facebook.com/share/19nhPuEM7v/" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-10.jpeg", externalUrl: "https://lnkd.in/p/eS-xez7H" },

    { diploma: ".net", src: "assets/feedback/dot net/dot-1.jpg", externalUrl: "https://www.facebook.com/share/19U7pmYPXe/" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-2.jpg", externalUrl: "https://www.facebook.com/share/19aCv5eS1r/" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-3.jpg", externalUrl: "https://www.facebook.com/share/1BF8CCJou4/" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-4.jpeg", externalUrl: "https://lnkd.in/p/efsVMP_Y" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-5.jpeg", externalUrl: "https://lnkd.in/p/e2mVtiUy" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-6.jpeg", externalUrl: "https://lnkd.in/p/enMUAfdX" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-7.jpeg", externalUrl: "https://lnkd.in/p/ey_jFZe9" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-8.jpeg", externalUrl: "https://lnkd.in/p/eY87JYxy" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-9.jpeg", externalUrl: "https://lnkd.in/p/eh74xgQD" },
    { diploma: ".net", src: "assets/feedback/dot net/dot-10.jpeg", externalUrl: "https://lnkd.in/p/ey72HPyd" },

    { diploma: "da", src: "assets/feedback/DA/DA-1.jpeg", externalUrl: "https://www.facebook.com/share/1EVB66esC5/" },
    { diploma: "da", src: "assets/feedback/DA/DA-2.jpeg", externalUrl: "https://www.facebook.com/share/1A6jwaRQKi/" },
    { diploma: "da", src: "assets/feedback/DA/DA-3.jpeg", externalUrl: "https://www.facebook.com/share/19KtjCXhyz/" },
    { diploma: "da", src: "assets/feedback/DA/DA-4.jpeg", externalUrl: "https://www.facebook.com/share/18HtASw34P/" },
    { diploma: "da", src: "assets/feedback/DA/DA-5.jpeg", externalUrl: "https://www.facebook.com/share/18Vn9RRrVR/" },
    { diploma: "da", src: "assets/feedback/DA/DA-6.jpeg", externalUrl: "https://www.facebook.com/share/1JkGEYhnFq/" },
    { diploma: "da", src: "assets/feedback/DA/DA-7.jpeg", externalUrl: "https://www.facebook.com/share/1FPFWmwH7M/" },
    { diploma: "da", src: "assets/feedback/DA/DA-8.jpeg", externalUrl: "https://www.facebook.com/share/18drdA17cD/" },
    { diploma: "da", src: "assets/feedback/DA/DA-9.jpeg", externalUrl: "https://www.facebook.com/share/1Ey2FfC5ct/" },
    { diploma: "da", src: "assets/feedback/DA/DA-10.jpeg", externalUrl: "https://www.facebook.com/share/1FV1ZH3pdQ/" },

    { diploma: "cs8", src: "assets/feedback/CS8/cs8-01.jpg", externalUrl: "https://www.facebook.com/share/189M1NhaSP/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-02.jpg", externalUrl: "https://www.facebook.com/share/1BzYgvFqPm/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-03.jpg", externalUrl: "https://www.facebook.com/share/1GSpNuWVBH/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-04.jpg", externalUrl: "https://www.facebook.com/share/1cWZW48H2r/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-05.jpg", externalUrl: "https://www.facebook.com/share/1HpbkyYYep/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-06.jpg", externalUrl: "https://www.facebook.com/share/19NruN1MeX/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-07.jpg", externalUrl: "https://www.facebook.com/share/19Jou1if2n/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-08.jpg", externalUrl: "https://www.facebook.com/share/1DpGsjf1DZ/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-09.jpg", externalUrl: "https://www.facebook.com/share/19Ki9A9QWv/" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-10.jpg", externalUrl: "https://www.facebook.com/share/1C5GDffJM6/" },

    { diploma: "Front End", src: "assets/feedback/front/Front-1.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-2.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-3.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-4.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-5.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-6.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-7.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-8.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-9.jpeg", externalUrl: "" },
    { diploma: "Front End", src: "assets/feedback/front/Front-10.jpeg", externalUrl: "" },

    { diploma: "PHP", src: "assets/feedback/PHP/PHP-1.jpeg", externalUrl: "https://lnkd.in/p/euqZywnD" },
    { diploma: "PHP", src: "assets/feedback/PHP/PHP-2.jpeg", externalUrl: "https://lnkd.in/p/eQCBF4m8" },
    { diploma: "PHP", src: "assets/feedback/PHP/PHP-3.jpeg", externalUrl: "https://lnkd.in/p/eW6JRze6" },
    
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-1.jpeg", externalUrl: "https://lnkd.in/p/esyACFrp" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-2.jpeg", externalUrl: "https://lnkd.in/p/e-nMRN_2" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-3.jpeg", externalUrl: "https://lnkd.in/p/e-ngh2ZV" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-4.jpeg", externalUrl: "https://lnkd.in/p/eFS6VwR4" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-5.jpeg", externalUrl: "https://lnkd.in/p/eq-UCWKE" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-6.jpeg", externalUrl: "https://lnkd.in/p/e9PZFTAn" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-7.jpeg", externalUrl: "https://lnkd.in/p/e36MMeGs" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-8.jpeg", externalUrl: "https://lnkd.in/p/ekTQQ-GB" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-9.jpeg", externalUrl: "https://lnkd.in/p/eseUNbAN" },
    { diploma: "UIXU", src: "assets/feedback/UIUX/UIUX-10.jpeg", externalUrl: "https://lnkd.in/p/euBWZF84" }
  ],


/* ---- أول سيشن + الإنستراكتور -----*/

window.SESSIONS = {
  frontend: { sessionUrl: "https://docs.google.com/document/d/1K7Y8tdIT2lBwkIpFW59vZ1OKJ69aIrJTKtB82GO-GrY/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/1Xf8gAR6hpgglHQQ5DKKbLs49lH0R4fcT-QmfNi0EWeM/edit?usp=drive_link", photo: "" },
  dotnet: { sessionUrl: "https://docs.google.com/document/d/1ElmQ77RKUMait2CMRCNdXwDFbZKniO1D6luIAQBHFh8/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/1KDZlSNQSm1V8Q4rmkNhvpCAdayZnVbtpHLGOEblWiUk/edit?usp=drive_link", photo: "" },
  php: { sessionUrl: "https://docs.google.com/document/d/15HCeE6L29fQkvQEkGR78xGenDoP3R_R_OdOIhmDgvUA/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/1kpNiGvkKKZ3n-yTWPnqo88EtzhP0RCOBJtl3E6Wu_tc/edit?usp=drive_link", photo: "" },
  nodejs: { sessionUrl: "", instructor: "", linkedin: "", photo: "" },
  java: { sessionUrl: "https://docs.google.com/document/d/1yzx318380NNFxMW4DyWs4B3zWd9dqfB1-fKvpVW4gxw/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/1nMI3O4vSoKS5hHMgjF7PYDTpUuzm_ngR3KWezlz5V6A/edit?usp=drive_link", photo: "" },
  flutter: { sessionUrl: "https://docs.google.com/document/d/1yjrks_mhipO6B0IF_BAbLQ5bSNOM4DKy3hVVFECD5uI/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/18zeTvq4EXNArVzxymntktDD9fWTMJp-kjRoycfkLNH0/edit?usp=drive_link", photo: "" },
  cs8: { sessionUrl: "https://docs.google.com/document/d/1GN4PTfz8UppPlsQgzdZhAN66g64FIW2vGWeLq9VegQ8/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/1YgItvyRh0-UBmiS8RhbmHp6pyLv2RrxjuBo-U-PUGlI/edit?usp=drive_link", photo: "" },
  da: { sessionUrl: "https://docs.google.com/document/d/1wsQ1UjsyeI7ewWm6wKJP7qKYZwRjj7h6xdhMc6MtFTE/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/165As6vkWH4gJ8ppPzmbIi0l9eafIn3AQeKS6p5VSVRs/edit?usp=drive_link", photo: "" },
  ai: { sessionUrl: "https://docs.google.com/document/d/1QvDF73eya_3xg1gcwg3qIIkb1Ob_pneTPikQ5R8hv9M/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/1m4xkALLl8apn3MqyT7sj2y6jTaR0L-r5nwHvGLMYqfQ/edit?usp=drive_link", photo: "" },
  cyber: { sessionUrl: "", instructor: "", linkedin: "", photo: "" },
  uiux: { sessionUrl: "https://docs.google.com/document/d/1cl0dijCa81qoAF6jbmlA0sjM1saQNapzrZZ1MrwqoLQ/edit?usp=drive_link", instructor: "", linkedin: "https://docs.google.com/document/d/17JbtwqqutIDFuC2pDsR4ui5S3VUyj8RwC3Yom8jlAQ0/edit?usp=drive_link", photo: "" }
};

/* ---------- الفروع ----------*/
window.BRANCHES = [
  {
    id: "dokki",
    name: "فرع الدقي",
    icon: "bi-building-fill",
    address: "5 شارع مصدق، الدقي",
    floor: "الدور الثالث",
    mapUrl: "https://maps.app.goo.gl/xUcbeTQoMcUY8wMEA",
    images: [
      "photos - location/Dokki/WhatsApp Image 2026-07-16 at 6.11.43 PM.jpeg",
      "photos - location/Dokki/WhatsApp Image 2026-07-16 at 6.11.44 PM.jpeg",
      "photos - location/Dokki/WhatsApp Image 2026-07-16 at 6.11.45 PM (1).jpeg",
      "photos - location/Dokki/WhatsApp Image 2026-07-16 at 6.11.45 PM (2).jpeg",
      "photos - location/Dokki/WhatsApp Image 2026-07-16 at 6.11.45 PM (3).jpeg",
      "photos - location/Dokki/WhatsApp Image 2026-07-16 at 6.11.45 PM.jpeg"
    ]
  },
  {
    id: "abbas",
    name: "فرع مدينة نصر ",
    icon: "bi-geo-alt-fill",
    address: "عمارة 4 شارع عماد الدين كامل أول عباس العقاد، بجوار كشري التحرير أعلى مطعم الحاتي",
    floor: "الدور السادس",
    mapUrl: "https://maps.app.goo.gl/uq1kAU6kxqszKZMp6",
    images: [
      "photos - location/Nassr/WhatsApp Image 2026-09-21 at 2.24.29 PM.jpeg",
      "photos - location/Nassr/WhatsApp Image 2026-09-21 at 2.24.30 PM.jpeg",
      "photos - location/Nassr/WhatsApp Image 2026-09-21 at 2.24.31 PM.jpeg",
      "photos - location/Nassr/WhatsApp Image 2026-09-21 at 2.25.08 PM (1).jpeg",
      "photos - location/Nassr/WhatsApp Image 2026-09-21 at 2.25.08 PM.jpeg",
    ]
  },
  {
    id: "alex",
    name: "فرع الإسكندرية",
    icon: "bi-geo-alt-fill",
    place: "O Space",
    address: "لوران، شارع أبوقير، عمارة بي تك، قبل شارع شعراوي",
    floor: "الدور الأول",
    mapUrl: "https://goo.gl/maps/Lwg6f1vCVkRbGp7aA",
    images: [
      "assets/branches/alex-1.jpg"
    ]
  }
];

    document.addEventListener("DOMContentLoaded", function () {
      // الانتظار لحين تحميل الناف بار من layout.js
      setTimeout(() => {
        const navbarBrand = document.querySelector("#site-nav .navbar-brand");
        const template = document.getElementById("theme-toggle-template");

        if (navbarBrand && template) {
          // إضافة الزرار بجانب اللوجو مباشرة
          const toggleNode = template.content.cloneNode(true);
          navbarBrand.parentNode.insertBefore(toggleNode, navbarBrand.nextSibling);

          // إعطاء أمرين الضغط والتغيير
          const toggleBtn = document.getElementById("theme-toggle");
          toggleBtn.addEventListener("click", () => {
            let isDark = document.documentElement.getAttribute("data-theme") === "dark";
            if (isDark) {
              document.documentElement.removeAttribute("data-theme");
              localStorage.setItem("theme", "light");
            } else {
              document.documentElement.setAttribute("data-theme", "dark");
              localStorage.setItem("theme", "dark");
            }
          });
        }
      }, 100);
    });
  
   
    // تفعيل الـ Theme المحفوظ فوراً لتجنب الـ Flickering عند التحميل
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }


    /* ---------- ارقام التحويل الخاصه بالحجز ---------- */
window.SALES_INFO = {
  fingerprintPass: "Mmm123@#$m",
  paymentMessages: [
    {
      id: "account1",
      title: "رسالة التحويل (الحساب الأول)",
      subtitle: "فودافون كاش / انستاباي",
      wallet: "01000143085",
      instapay: "01027285688",
      rulesUrl: "https://cutt.ly/ht2OyEbt",
      text: `*دى قواعد الدبلومة ، هستأذنك تقرأها قبل التحويل https://cutt.ly/ht2OyEbt*

محفظة الكترونية / Wallet علي الرقم 01000143085
او من خلال انستاباي / Instapay على الرقم 01027285688

وهنتظر من حضرتك بعد التحويل:

💻 صورة التحويل 
💻 الرقم اللى اتحول منه
💻 الاسم ثلاثى 
💻 ال Gmail 
💻 حضرتك طالب ولا خريج ؟
💻 هتحضر اونلاين ولا اوفلاين ؟
💻 جامعه ايه؟
💻 كليه ايه ؟`
    },
    {
      id: "account2",
      title: "رسالة التحويل (الحساب الثاني)",
      subtitle: "فودافون كاش / انستاباي",
      wallet: "01044880209",
      instapay: "01129913325",
      rulesUrl: "https://cutt.ly/ht2OyEbt",
      text: `*دى قواعد الدبلومة ، هستأذنك تقرأها قبل التحويل https://cutt.ly/ht2OyEbt*

محفظة الكترونية / Wallet علي الرقم 01044880209
او من خلال انستاباي / Instapay على الرقم 01129913325

وهنتظر من حضرتك بعد التحويل:

💻 صورة التحويل 
💻 الرقم اللى اتحول منه
💻 الاسم ثلاثى 
💻 ال Gmail 
💻 حضرتك طالب ولا خريج ؟
💻 هتحضر اونلاين ولا اوفلاين ؟
💻 جامعه ايه؟
💻 كليه ايه ؟`
    }
  ]
};



   document.addEventListener("DOMContentLoaded", function () {
      const salesContainer = document.getElementById("salesContent");
      
      if (!window.SALES_INFO) return;

      let html = '';

      // 1. إضافة بطاقة باسورد البصمة
      if (window.SALES_INFO.fingerprintPass) {
        html += `
          <div class="col-12" data-aos="fade-up">
            <div class="dip-card">
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

      // 2. إضافة رسائل التحويل والرموز
      if (window.SALES_INFO.paymentMessages && window.SALES_INFO.paymentMessages.length > 0) {
        window.SALES_INFO.paymentMessages.forEach((msg, index) => {
          html += `
            <div class="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
              <div class="dip-card">
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

      salesContainer.innerHTML = html;

      // تهيئة AOS بعد إضافة العناصر
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 600, once: true });
      }
    });

    // وظيفة النسخ
    function copySalesText(elementId, btn) {
      const text = document.getElementById(elementId).innerText;
      navigator.clipboard.writeText(text).then(() => {
        const span = btn.querySelector('span');
        const originalText = span.innerText;
        span.innerText = 'تم النسخ بنجاح!';
        btn.classList.add('is-copied');
        
        setTimeout(() => {
          span.innerText = originalText;
          btn.classList.remove('is-copied');
        }, 2000);
      });
    }

    // Social media  //

    /* ---------- بيانات رسالة السوشيال ميديا ---------- */
window.SOCIAL_MEDIA_TEXT = `Eraa-social media

🔹 الموقع الرسمي:
🌐 https://www.eraasoft.com
🔹 فيسبوك:
📘 https://facebook.com/eraasoft
🔹 جروب الفيسبوك (مجتمع المتعلمين):
👥 https://www.facebook.com/share/g/1AsLEkxjXx/
🔹 انستجرام:
📸 https://instagram.com/eraasoft1
🔹 قناة واتساب:
💬 https://whatsapp.com/channel/0029VatAmJmBadmhpf2zZb47
🔹 تليجرام:
📢 https://t.me/et3lembarmagah
🔹 يوتيوب:
▶️ https://youtube.com/@eraasoft
🔹 لينكد إن:
💼 https://linkedin.com/company/eraasoft/posts`;

window.SOCIAL_MEDIA_LINKS = [
  { name: "الموقع الرسمي", url: "https://www.eraasoft.com", icon: "bi-globe", color: "#0d6efd" },
  { name: "صفحة فيسبوك", url: "https://facebook.com/eraasoft", icon: "bi-facebook", color: "#1877f2" },
  { name: "جروب الفيسبوك (Community)", url: "https://www.facebook.com/share/g/1AsLEkxjXx/", icon: "bi-people-fill", color: "#1877f2" },
  { name: "انستجرام", url: "https://www.instagram.com/eraa_soft?stkn=MXJvb284aXNicDc4Nw==", icon: "bi-instagram", color: "#e4405f" },
  { name: "قناة واتساب", url: "https://whatsapp.com/channel/0029VatAmJmBadmhpf2zZb47", icon: "bi-whatsapp", color: "#25d366" },
  { name: "تليجرام", url: "https://t.me/et3lembarmagah", icon: "bi-telegram", color: "#24a1de" },
  { name: "يوتيوب", url: "https://youtube.com/@eraasoft", icon: "bi-youtube", color: "#ff0000" },
  { name: "لينكد إن", url: "https://linkedin.com/company/eraasoft/posts", icon: "bi-linkedin", color: "#0a66c2" }
];


/* ---------- كود زرار العودة للأعلى ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  if (!backToTopBtn) return;

  // إظهار وإخفاء الزرار عند السكرول
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  })

  // العودة للأعلى بسلاسة
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
