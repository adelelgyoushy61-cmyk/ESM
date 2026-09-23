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
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-01.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-02.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-03.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-04.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-05.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-06.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-07.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-08.jpg" },
    { diploma: "flutter", src: "assets/feedback/Flutter/flutter-09.jpg" },
    { diploma: ".net", src: "assets/feedback/dot net/dotnet-02.jpg" },
    { diploma: ".net", src: "assets/feedback/dot net/dotnet-03.jpg" },
    { diploma: "da", src: "assets/feedback/DA/DA-1.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-2.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-3.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-4.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-5.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-6.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-7.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-8.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-9.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-10.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-16.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-11.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-12.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-13.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-14.jpeg" },
    { diploma: "da", src: "assets/feedback/DA/DA-15.jpeg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-01.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-02.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-03.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-04.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-05.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-06.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-07.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-08.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-09.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-10.jpg" },
    { diploma: "cs8", src: "assets/feedback/CS8/cs8-11.jpg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.18 PM (1).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.18 PM (2).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.18 PM.jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.19 PM (1).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.19 PM (2).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.19 PM (3).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.19 PM (4).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.19 PM.jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (1).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (2).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (3).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (4).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM.jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (1).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (2).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (3).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM (4).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.20 PM.jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.21 PM (1).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front/WhatsApp Image 2026-09-21 at 9.13.21 PM (2).jpeg" },
    { diploma: "Front End", src: "assets/feedback/front//WhatsApp Image 2026-09-21 at 9.13.21 PM (3).jpeg" },
  ],

  videos: [
    { diploma: "flutter", title: "فيدباك طالب Flutter", url: "https://drive.google.com/file/d/1UQCO_YWiXB_NKq4j14AerhWuvSXWKu6i/view?usp=drive_link " },
    { diploma: "flutter", title: "فيدباك طالب Flutter", url: "https://drive.google.com/file/d/1sgxsa2U7pd_nx9o-9pLBp61gU546vN7g/view?usp=drive_link" },
    { diploma: ".net", title: "فيدباك طالب .Net", url: "https://drive.google.com/file/d/1E11UrJvqsD9BYyiXkHxjmeG2iy-yz7Nf/view?usp=drive_link" },
    { diploma: ".net", title: "فيدباك طالب .Net", url: "https://drive.google.com/file/d/1JTYxwaHr-FF_9CoCxP_WGuJvEtlRV2ZP/view?usp=drive_link" },
    { diploma: "front end ", title: "فيدباك طالب Front end", url: "https://drive.google.com/file/d/11akwOQagsomR84zEPYuQ6OFByUuJt7Lt/view?usp=drive_link" },
    { diploma: "front end ", title: "فيدباك طالب Front end", url: "https://drive.google.com/file/d/1-UUXc-iJAT7RzkfirtN6vBKlTyofJwiI/view?usp=drive_link" },
    { diploma: "uiux ", title: "فيدباك طالب UIUX", url: "https://drive.google.com/file/d/12z-EDeWygY9J18Es9TuwMkYHoo_t2Bko/view?usp=drive_link" },
    { diploma: "uiux ", title: "فيدباك طالب UIUX", url: "https://drive.google.com/file/d/1g-BYcnTJKtmcKKq2XCglY-I0UrrfNY74/view?usp=drive_link" },
    { diploma: "data analysis ", title: "فيدباك طالب Data analysis", url: "https://drive.google.com/file/d/1Awhs1FShUMO6DGxZ_KjYlAkSNxWjdQhF/view?usp=drive_link" },
    { diploma: "data analysis ", title: "فيدباك طالب Data analysis", url: "https://drive.google.com/file/d/1z9jEToA1xTtFTtJthBAWnAyS1-3h1dBE/view?usp=drive_link" },
    { diploma: "php ", title: "فيدباك طالب PHP", url: "https://drive.google.com/file/d/1zxdx_qdO2BcRCXleeQI54kg3FCTw5s0h/view?usp=drive_link" },
    { diploma: "php ", title: "فيدباك طالب PHP", url: "https://drive.google.com/file/d/1b22k3c_AU2YVI30oxjg7xz_baHxEXmyo/view?usp=drive_link" },
    { diploma: "java ", title: "فيدباك طالب JAVA", url: "https://drive.google.com/file/d/1K9G8UUiAaQcNych58lH_wr20wcdo91bq/view?usp=drive_link" },
    { diploma: "ai", title: "فيدباك طالب AI", url: "https://drive.google.com/file/d/1KWcIEk3lFBXA65wpTUl1ziQuwN520DZE/view?usp=drive_link" },
    { diploma: "CS8", title: "فيدباك طالب CS8", url: "https://drive.google.com/file/d/1v6JG7dKrqvoXmz96OB4KROsRs9-gVOh3/view?usp=drive_link" }
  ]
};

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
