/**
 * FAHAD WATHIQ — PORTFOLIO JAVASCRIPT
 * Modern, responsive interactions & i18n
 */

// Translation Dictionary
const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-specializations": "Specializations",
    "nav-contact": "Contact",
    "hero-title": "Hi, I'm CHEETAH",
    "hero-subtitle": "Frontend Software Engineer | Architect",
    "hero-p1": "Building scalable, production-ready applications like personal productivity hubs. I transform complex user requirements into high-performance, product-centric web architectures.",
    "hero-p2": "With a rigorous Computer Science foundation from the University of Karbala and 2+ years of professional engineering experience, I specialize in bridging the gap between sophisticated backend logic and intuitive user experiences.",
    "hero-p3": "Product engineering excellence through precision, elegance, and scale.",
    "about-philosophy": "ENGINEERING PHILOSOPHY",
    "about-title1": "Architecting Scalable",
    "about-title2": "Frontend Solutions",
    "about-p1": "Specializing in product engineering and building robust productivity ecosystems. My approach combines deep algorithmic knowledge with modern web standards to deliver high-impact user experiences.",
    "about-p2": "Leveraging a Computer Science degree from the University of Karbala, I integrate low-level programming principles (C++, Python) into high-level frontend architectures, ensuring every line of code is optimized for scale.",
    "about-core": "Core Competencies",
    "about-card1-title": "Tech Stack",
    "about-card1-p": "React, TypeScript, JS (ES6+), Python, C++, C#",
    "about-card2-title": "Education",
    "about-card2-p": "B.Sc. Computer Science – University of Karbala",
    "about-card3-title": "Portfolio",
    "about-card3-p": "9+ Enterprise-Ready Projects",
    "projects-subtitle": "CASE STUDIES & ARCHIVE",
    "projects-title": "Engineering Portfolio",
    "projects-p1": "A selection of projects where I solved complex architectural challenges",
    "projects-p2": "using modern frontend engineering, real-time data sync, and robust problem-solving.",
    "project-problem": "The Problem:",
    "project-solution": "The Impact/Solution:",

    // Featured Projects
    "project1-title": "R.NOTE - Personalized Student Productivity Hub",
    "project1-p": "A complex web application designed to optimize the academic experience, gamifying study through prioritized recommendations.",
    "project1-problem-text": "Students struggle with fragmented schedules, disorganization, and low motivation to prioritize tasks.",
    "project1-solution-text": "R.NOTE consolidates assignments, tests, and priority logic into a single intuitive dark-mode dashboard, using gamification (XP) to maintain consistency.",

    "project2-title": "Cura (كيورا) - Healthcare Scheduling & Management Platform",
    "project2-p": "A strategic digital solution bridging the operational gap between patients and healthcare facilities.",
    "project2-problem-text": "Healthcare clinics suffer from operational inefficiencies, fragmented scheduling, and poor patient-provider communication, leading to wasted time.",
    "project2-solution-text": "Delivers real-time appointment scheduling, administrative governance, and proactive operational pathways to maximize clinic efficiency and elevate the patient experience.",

    "project-apex-title": "APEX - Smart Athletic Training & Analytics",
    "project-apex-p": "An integrated athletic dashboard for performance tracking and visual muscle focus analytics with an embedded intelligent coach system.",
    "project-apex-problem-text": "Athletes lack centralized, visual analytics for muscular strain, personalized tracking, and adaptive coaching.",
    "project-apex-solution-text": "Engineered a Next.js dashboard featuring real-time data visualization, muscle heatmaps, and Google Play cross-platform integration.",

    "project6-title": "R.I.S.E OS Assistant",
    "project6-p": "Voice-controlled OS automation program built for high efficiency and hands-free desktop execution.",
    "project6-problem-text": "Lack of quick accessibility and automation for complex recurring system workflows.",
    "project6-solution-text": "Specific voice-controlled assistant program built in Python communicating with OS system APIs for task automation.",

    // Additional Projects
    "project-finals-title": "The Finals Loadout - Community Gaming Engine",
    "project-finals-p": "An intelligent algorithmic loadout randomizer designed to simulate the in-game aesthetic with reactive state management.",
    "project-finals-problem-text": "Repetitive gameplay strategies and static loadouts limiting player experimentation.",
    "project-finals-solution-text": "Built a fast, gamified weapon and ability randomizer with fluid audio-visual feedback and custom UI systems.",

    "project-stackbase-title": "Stackbase - Developer Knowledge & Directory Hub",
    "project-stackbase-p": "A curated directory indexing indispensable developer tools, resources, and APIs in a unified, searchable portal.",
    "project-stackbase-problem-text": "Fragmented bookmarks and wasted discovery time for modern engineering libraries and tools.",
    "project-stackbase-solution-text": "Consolidated hundreds of vetted developer tools into categorized, fast-search index boards.",

    "project-sarb-title": "Sarb (سرب) - Arabic Fast Typing Competitive Game",
    "project-sarb-p": "An interactive competitive platform to master Arabic touch typing across 500+ dynamic challenge levels.",
    "project-sarb-problem-text": "Scarcity of engaging, high-standard gamified typing platforms tailored for the Arabic keyboard.",
    "project-sarb-solution-text": "Developed a gamified typing engine calculating real-time WPM, precision error-tracking, and competitive ranks.",

    "project-birthday-title": "Birthday App - Interactive Web Celebration Experience",
    "project-birthday-p": "An interactive greeting platform featuring festive animations, dynamic soundscapes, and delightful micro-interactions.",
    "project-birthday-problem-text": "Traditional greeting messages feel static, impersonal, and forgettable.",
    "project-birthday-solution-text": "Engineered an immersive celebration page with procedural confetti, interactive gift unpacking, and audio cues.",

    "project3-title": "NeuroSing Website",
    "project3-p": "Modern online store with product filtering, cart, and payment system.",
    "project3-problem-text": "Fragmentation in the Neuro-supplies market.",
    "project3-solution-text": "Centralized intelligent commerce platform.",

    // Buttons & Toggles
    "project-btn-live": "Live Demo",
    "project-btn-play": "Google Play",
    "project-btn-inquiry": "Architecture & Demo",
    "project-btn-arch": "Architecture",
    "project-btn-deploy": "Deployment",
    "project-btn-doc": "Documentation",
    "project-btn-demo": "Demo Info",
    "projects-toggle-more": "View All Projects (9)",
    "projects-toggle-less": "Show Featured Projects Only",

    "services-subtitle": "CORE SPECIALIZATIONS",
    "services-title": "Engineering Services",
    "service1-title": "Responsive UI/UX Development",
    "service1-p": "Building high-performance, accessible, and responsive user interfaces using React and modern JavaScript. Focusing on component-driven architecture and design systems that scale.",
    "service2-title": "API Integration & Architecture",
    "service2-p": "Designing robust frontend-to-backend communication patterns. Expertise in state management, data caching strategies, and seamless integration with complex REST/GraphQL APIs.",
    "service3-title": "Web Performance Optimization",
    "service3-p": "Auditing and enhancing web applications for maximum speed and SEO efficiency. Implementing advanced techniques like code-splitting, lazy loading, and asset optimization.",
    "contact-subtitle": "COLLABORATION",
    "contact-title": "Start a Technical Discussion",
    "contact-p": "Available for senior frontend roles, technical consulting, and architecting high-impact digital products.",
    "form-name": "Full Name",
    "form-email": "Professional Email",
    "form-message": "Project Details or Inquiry",
    "form-btn": "Send Inquiry",
    "footer-copy": "CHEETAH | Software Engineering.",
    "hero-badge": "Open for Senior Opportunities & Consulting",
    "hero-location": "Based in IRAQ, Karbala",
    "hero-availability": "Available for High-Impact Projects",
    "hero-btn-work": "Work With Me",
    "hero-btn-resume": "View Resume",
    "hero-follow": "Professional Networks:",
    "contact-location": "Iraq, Karbala",
    "toast-success": "Thank you! Your inquiry has been prepared."
  },
  ar: {
    "nav-home": "الرئيسية",
    "nav-about": "من أنا",
    "nav-projects": "المشاريع",
    "nav-specializations": "التخصصات",
    "nav-contact": "تواصل معي",
    "hero-title": "مرحباً، أنا CHEETAH",
    "hero-subtitle": "مهندس برمجيات | متخصص واجهات أمامية",
    "hero-p1": "بناء تطبيقات قابلة للتوسع وجاهزة للإنتاج مثل مراكز الإنتاجية الشخصية. أقوم بتحويل متطلبات المستخدم المعقدة إلى بنى ويب عالية الأداء تركز على المنتج.",
    "hero-p2": "مع أساس متين في علوم الحاسوب من جامعة كربلاء وخبرة هندسية مهنية تزيد عن سنتين، أتخصص في سد الفجوة بين منطق الخلفية المتطور وتجارب المستخدم البديهية.",
    "hero-p3": "التميز في هندسة المنتجات من خلال الدقة، الأناقة وقابلية التوسع.",
    "about-philosophy": "فلسفة الهندسة",
    "about-title1": "هندسة واجهات",
    "about-title2": "حلول برمجية قابلة للتوسع",
    "about-p1": "متخصص في هندسة المنتجات وبناء أنظمة إنتاجية قوية. يجمع نهجي بين المعرفة الخوارزمية العميقة ومعايير الويب الحديثة لتقديم تجارب مستخدم عالية التأثير.",
    "about-p2": "من خلال الاستفادة من شهادة علوم الحاسوب من جامعة كربلاء، أقوم بدمج مبادئ البرمجة منخفضة المستوى (C++، Python) في بنى الواجهات الأمامية عالية المستوى، مما يضمن تحسين كل سطر من الأكواد للتوسع.",
    "about-core": "الكفاءات الأساسية",
    "about-card1-title": "المجموعة التقنية",
    "about-card1-p": "React, TypeScript, JS (ES6+), Python, C++, C#",
    "about-card2-title": "التعليم",
    "about-card2-p": "بكالوريوس علوم الحاسوب - جامعة كربلاء",
    "about-card3-title": "المعرض",
    "about-card3-p": "أكثر من 9 مشاريع جاهزة للمؤسسات",
    "projects-subtitle": "دراسات الحالة والأرشيف",
    "projects-title": "معرض الهندسة",
    "projects-p1": "مجموعة مختارة من المشاريع حيث قمت بحل تحديات معمارية معقدة",
    "projects-p2": "باستخدام هندسة الواجهات الأمامية الحديثة، والمزامنة اللحظية، وتقنيات حل المشكلات القوية.",
    "project-problem": "المشكلة:",
    "project-solution": "التأثير/الحل:",

    // Featured Projects
    "project1-title": "R.NOTE - مركز إنتاجية الطلاب الشخصي",
    "project1-p": "تطبيق ويب معقد مصمم لتحسين التجربة الأكاديمية، وتحفيز الدراسة من خلال توصيات محددة الأولويات.",
    "project1-problem-text": "يعاني الطلاب من الجداول المشتتة، وعدم التنظيم، وانخفاض الدافع لتحديد أولويات المهام.",
    "project1-solution-text": "يجمع R.NOTE التكليفات والاختبارات ومنطق الأولويات في لوحة تحكم واحدة بديهية تعمل بالوضع الداكن، مع استخدام التحفيز (XP) للحفاظ على الاستمرارية.",

    "project2-title": "Cura (كيورا) - منصة جدولة وإدارة الرعاية الصحية",
    "project2-p": "حل رقمي استراتيجي يسد الفجوة التشغيلية بين المرضى ومرافق الرعاية الصحية.",
    "project2-problem-text": "تعاني العيادات الصحية من عدم الكفاءة التشغيلية، والجدولة المجزأة، وضعف التواصل بين المريض ومقدم الخدمة.",
    "project2-solution-text": "يوفر جدولة المواعيد في الوقت الفعلي، والحوكمة الإدارية، والمسارات التشغيلية الاستباقية لزيادة كفاءة العيادة ورفع تجربة المريض.",

    "project-apex-title": "APEX - منصة التدريب الرياضي الذكي",
    "project-apex-p": "لوحة تحكم رياضية متكاملة لتتبع الأداء وتحليل التركيز العضلي ببيانات مرئية (Data Visualization) مع نظام توجيه مدمج للمدرب الذكي.",
    "project-apex-problem-text": "افتقار الرياضيين لمنصات مرئية ذكية تحلل الجهد العضلي وتقدم مسارات تدريب تفاعلية مخصصة.",
    "project-apex-solution-text": "بناء لوحة تحكم متقدمة بـ Next.js تعرض خرائط حرارية للعضلات ورسوم بيانية تفاعلية مع توجيه ذكي وتطبيق متاح على Google Play.",

    "project6-title": "مساعد نظام التشغيل R.I.S.E",
    "project6-p": "برنامج أتمتة لنظام التشغيل يتم التحكم به صوتياً تم بناؤه لتحقيق أقصى كفاءة.",
    "project6-problem-text": "صعوبة الوصول السريع وأتمتة مسارات العمل المتكررة على النظام.",
    "project6-solution-text": "تطوير مساعد صوتي مخصص باستخدام بايثون للتحكم بأوامر النظام وتنفيذ المهام التلقائية.",

    // Additional Projects
    "project-finals-title": "The Finals Loadout - أداة مجتمع الألعاب",
    "project-finals-p": "خوارزمية ذكية لتوليد عتاد عشوائي للاعبين، مبنية بواجهة تفاعلية تحاكي الهوية البصرية للعبة، مع إدارة متقدمة لحالة التطبيق.",
    "project-finals-problem-text": "تكرار أساليب اللعب والعتاد الثابت مما يقلل الحماس والتجربة التكتيكية للاعبين.",
    "project-finals-solution-text": "تطوير أداة سريعة لتوليد التشكيلات العشوائية بواجهة تفاعلية ومؤثرات صوتية مطابقة للعبة الأصلية.",

    "project-stackbase-title": "Stackbase - دليل ومكتبة المبرمج الشامل",
    "project-stackbase-p": "منصة مخصصة لجمع وفهرسة كافة المواقع والأدوات والمصادر التي يحتاجها المبرمج في مكان واحد، لتسهيل الوصول إليها وتعزيز الإنتاجية.",
    "project-stackbase-problem-text": "تشتت الروابط والمكتبات البرمجية وضياع الوقت في البحث عن الأدوات التقنية الموثوقة.",
    "project-stackbase-solution-text": "منصة مركزية تفهرس مئات المصادر والأدوات المصنفة بعناية مع بحث فوري وواجهة سريعة.",

    "project-sarb-title": "سرب - لعبة الطباعة السريعة التنافسية",
    "project-sarb-p": "منصة تعليمية وتنافسية مبتكرة لإتقان الطباعة باللغة العربية عبر أكثر من 500 مستوى تفاعلي مصممة لتحسين السرعة والدقة.",
    "project-sarb-problem-text": "ندرة المنصات التفاعلية المتطورة المخصصة لتطوير مهارة الطباعة السريعة باللغة العربية.",
    "project-sarb-solution-text": "محرك طباعة تفاعلي يحسب سرعة الكلمات في الدقيقة (WPM) ومعدل الدقة مع مستويات تدريجية ونظام منافسة.",

    "project-birthday-title": "تطبيق Birthday - تجربة احتفال تفاعلية",
    "project-birthday-p": "منصة ويب تفاعلية مخصصة للاحتفال، تتميز بتصميم مبهج وحركات بصرية جذابة لتقديم تجربة تهنئة فريدة وغير تقليدية.",
    "project-birthday-problem-text": "جمود رسائل التهنئة الرقمية التقليدية وافتقارها للتفاعل والمشاعر الخاصة.",
    "project-birthday-solution-text": "تصميم تجربة ويب غامرة بمؤثرات بصرية احتفالية، وتفاعلات لفتح الهدايا ومؤثرات صوتية مبهجة.",

    "project3-title": "متجر NeuroSing الإلكتروني",
    "project3-p": "متجر إلكتروني حديث مع تصفية المنتجات وسلة التسوق ونظام الدفع.",
    "project3-problem-text": "التشتت والتجزئة في سوق المستلزمات العصبية والطبية.",
    "project3-solution-text": "منصة تجارة ذكية مركزية تسهل عمليات الطلب والتصفية الفورية.",

    // Buttons & Toggles
    "project-btn-live": "عرض حي",
    "project-btn-play": "Google Play",
    "project-btn-inquiry": "المعمارية والتجربة",
    "project-btn-arch": "المعمارية",
    "project-btn-deploy": "النشر",
    "project-btn-doc": "التوثيق",
    "project-btn-demo": "تفاصيل التجربة",
    "projects-toggle-more": "عرض كل المشاريع (9)",
    "projects-toggle-less": "عرض المشاريع البارزة فقط",

    "services-subtitle": "التخصصات الجوهرية",
    "services-title": "الخدمات الهندسية",
    "service1-title": "تطوير واجهات UI/UX استجابية",
    "service1-p": "بناء واجهات مستخدم عالية الأداء وسهلة الوصول واستجابية باستخدام React وجافا سكريبت الحديثة. التركيز على المعمارية القائمة على المكونات وأنظمة التصميم القابلة للتوسع.",
    "service2-title": "تكامل واجهات البرمجة والمعمارية",
    "service2-p": "تصميم أنماط تواصل قوية بين الواجهة الأمامية والخلفية. خبرة في إدارة الحالة، واستراتيجيات تخزين البيانات مؤقتاً، والتكامل السلس مع واجهات REST/GraphQL المعقدة.",
    "service3-title": "تحسين أداء الويب",
    "service3-p": "تدقيق وتحسين تطبيقات الويب لتحقيق أقصى سرعة وكفاءة SEO. تنفيذ تقنيات متقدمة مثل تقسيم الكود، والتحميل الكسول، وتحسين الأصول.",
    "contact-subtitle": "التعاون",
    "contact-title": "ابدأ مناقشة تقنية",
    "contact-p": "متاح لأدوار الواجهة الأمامية العليا، والاستشارات التقنية، وهندسة المنتجات الرقمية عالية التأثير.",
    "form-name": "الاسم الكامل",
    "form-email": "البريد الإلكتروني المهني",
    "form-message": "تفاصيل المشروع أو الاستفسار",
    "form-btn": "إرسال الاستفسار",
    "footer-copy": "CHEETAH | هندسة البرمجيات.",
    "hero-badge": "متاح للفرص الكبيرة والاستشارات",
    "hero-location": "مقر العمل: العراق، كربلاء",
    "hero-availability": "متاح للمشاريع عالية التأثير",
    "hero-btn-work": "وظفني الآن",
    "hero-btn-resume": "عرض السيرة الذاتية",
    "hero-follow": "الشبكات المهنية:",
    "contact-location": "العراق، كربلاء",
    "toast-success": "شكراً لك! تم تجهيز استفسارك بنجاح."
  }
};

// Word lists for Typewriter
const englishWords = ["Frontend Engineer", "Software Architect", "Technical Consultant", "React & TypeScript Specialist"];
const arabicWords = ["مهندس واجهات أمامية", "معماري برمجيات", "مستشار تقني", "خبير React & TypeScript"];
let currentWords = englishWords;

// Update Language Function
function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      const icon = el.querySelector('i');
      if (icon) {
        const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = ' ' + translations[lang][key];
        } else {
          el.innerHTML = icon.outerHTML + ' ' + translations[lang][key];
        }
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerText = lang === 'ar' ? 'EN' : 'AR';
  }

  // Update typewriter words
  currentWords = lang === 'ar' ? arabicWords : englishWords;
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;

  localStorage.setItem('preferredLanguage', lang);
}

function toggleLanguage() {
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  updateLanguage(newLang);
  closeMobileMenu();
}

// ======================== TYPEWRITER EFFECT ========================
const typingElement = document.querySelector('.info-home h3');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function type() {
  if (!typingElement) return;

  const currentWord = currentWords[wordIndex % currentWords.length];
  const displayedText = currentWord.substring(0, charIndex);

  typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

  let speed = 90;
  if (isDeleting) {
    speed = 45;
  }

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    typingTimeout = setTimeout(type, speed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingTimeout = setTimeout(type, speed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % currentWords.length;
      typingTimeout = setTimeout(type, 500);
    } else {
      typingTimeout = setTimeout(type, 1500);
    }
  }
}

// ======================== HAMBURGER MENU & OVERLAY ========================
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.ul-list');
const menuOverlay = document.getElementById('menu-overlay');

function closeMobileMenu() {
  if (navMenu) navMenu.classList.remove('active');
  if (menuOverlay) menuOverlay.classList.remove('active');
  document.body.classList.remove('menu-open');
  if (hamburger) {
    const icon = hamburger.querySelector('i');
    if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
  }
}

function openMobileMenu() {
  if (navMenu) navMenu.classList.add('active');
  if (menuOverlay) menuOverlay.classList.add('active');
  document.body.classList.add('menu-open');
  if (hamburger) {
    const icon = hamburger.querySelector('i');
    if (icon) icon.classList.replace('fa-bars', 'fa-xmark');
  }
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('active');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMobileMenu);
}

document.querySelectorAll('.ul-list a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// ======================== SMOOTH SCROLL & ACTIVE LINK ========================
const navLinks = document.querySelectorAll('.ul-list li a');
const sections = document.querySelectorAll('section');

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId === '#' || targetId === '') return;

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault();
      const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });

      if (link.closest('.ul-list')) {
        removeActive();
        link.parentElement.classList.add('active');
      }
    }
  });
});

// ======================== PROJECTS TOGGLE (VIEW ALL / SHOW LESS) ========================
const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
const projectsMore = document.getElementById('projects-more');

if (toggleProjectsBtn && projectsMore) {
  toggleProjectsBtn.addEventListener('click', () => {
    const isExpanded = projectsMore.classList.contains('expanded');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const textSpan = toggleProjectsBtn.querySelector('span');

    if (isExpanded) {
      projectsMore.classList.remove('expanded');
      toggleProjectsBtn.classList.remove('active');
      if (textSpan) {
        textSpan.textContent = translations[currentLang]["projects-toggle-more"];
        textSpan.setAttribute('data-i18n', 'projects-toggle-more');
      }

      // Scroll smoothly back to projects section top
      const projectSec = document.getElementById('project');
      if (projectSec) {
        window.scrollTo({
          top: projectSec.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    } else {
      projectsMore.classList.add('expanded');
      toggleProjectsBtn.classList.add('active');
      if (textSpan) {
        textSpan.textContent = translations[currentLang]["projects-toggle-less"];
        textSpan.setAttribute('data-i18n', 'projects-toggle-less');
      }

      // Trigger scroll event to reveal any freshly visible items
      window.dispatchEvent(new Event('scroll'));
    }
  });
}

// ======================== BACK TO TOP ========================
const backToTop = document.createElement('div');
backToTop.id = 'back-to-top';
backToTop.setAttribute('aria-label', 'Back to top');
backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======================== SCROLL OBSERVER (Active Nav, BackToTop, Reveal) ========================
const revealElements = document.querySelectorAll('.about-container, .projects-container, .services-container, .contact-content');
revealElements.forEach(el => el.classList.add('reveal'));

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      const scrollPos = window.scrollY + 140;

      // Active nav link
      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          removeActive();
          const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
          if (activeLink) activeLink.parentElement.classList.add('active');
        }
      });

      // Back to top visibility
      if (window.scrollY > 350) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }

      // Scroll Reveal
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add('active-reveal');
        }
      });

      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

// ======================== TOAST NOTIFICATION ========================
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ======================== CONTACT FORM SUBMISSION ========================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = contactForm.querySelector('[name="user_name"]').value.trim();
    const email = contactForm.querySelector('[name="user_email"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) return;

    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const successMsg = translations[currentLang]["toast-success"] || "Thank you! Your message has been prepared.";

    showToast(successMsg);

    const mailtoSubject = encodeURIComponent(`Inquiry from ${name} via Portfolio`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:fhadwatek@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;

    contactForm.reset();
  });
}

// ======================== INITIALIZATION & LOADER ========================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  updateLanguage(savedLang);

  type();

  const loadingScreen = document.getElementById('loading-screen');
  const loadingText = document.getElementById('loading-text');
  const mainIcon = document.querySelector('.main-icon');
  const subIcons = document.querySelectorAll('.sub-icons i');
  const designerText = document.getElementById('designer-text');

  function showLoadingElement(element, delay = 0) {
    setTimeout(() => {
      if (element) {
        element.classList.remove('hidden');
        element.classList.add('fall');
      }
    }, delay);
  }

  showLoadingElement(mainIcon, 50);
  showLoadingElement(loadingText, 150);
  subIcons.forEach((icon, idx) => {
    showLoadingElement(icon, 250 + idx * 70);
  });
  showLoadingElement(designerText, 450);

  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        window.dispatchEvent(new Event('scroll'));
      }, 500);
    }
  }, 1100);
});
