const navLinks = document.querySelectorAll('.ul-list li a');
const sections = document.querySelectorAll('section');

// Translation Dictionary
const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-specializations": "Specializations",
    "nav-contact": "Contact",
    "hero-title": "Hi, I'm CHEETAH",
    "hero-subtitle": "Software Engineer | Frontend Specialist",
    "hero-p1": "Building scalable, production-ready applications like personal productivity hubs. I transform complex user requirements into high-performance, product-centric web architectures.",
    "hero-p2": "With a rigorous Computer Science foundation from the University of Karbala and 2+ years of professional engineering experience, I specialize in bridging the gap between sophisticated backend logic and intuitive user experiences.",
    "hero-p3": "Product engineering excellence through precision and performance.",
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
    "about-card3-p": "5+ Enterprise-Ready Projects",
    "projects-subtitle": "CASE STUDIES",
    "projects-title": "Engineering Portfolio",
    "projects-p1": "A selection of projects where I solved complex architectural challenges ",
    "projects-p2": "using modern frontend engineering and robust problem-solving techniques.",
    "project-problem": "The Problem:",
    "project-solution": "The Impact/Solution:",
    "project1-title": "R.NOTE - Personalized Student Productivity Hub",
    "project1-p": "A complex web application designed to optimize the academic experience, gamifying study through prioritized recommendations.",
    "project1-problem-text": "Students struggle with fragmented schedules, disorganization, and low motivation to prioritize tasks.",
    "project1-solution-text": "R.NOTE consolidates assignments, tests, and priority logic into a single intuitive dark-mode dashboard, using gamification (XP) to maintain consistency.",
    "project2-title": "Cura (كيورا) - Healthcare Scheduling & Management Platform",
    "project2-p": "A strategic digital solution bridging the operational gap between patients and healthcare facilities.",
    "project2-problem-text": "Healthcare clinics suffer from operational inefficiencies, fragmented scheduling, and poor patient-provider communication, leading to wasted time.",
    "project2-solution-text": "Delivers real-time appointment scheduling, administrative governance, and proactive operational pathways to maximize clinic efficiency and elevate the patient experience.",
    "project3-title": "NeuroSing Website",
    "project3-p": "Modern online store with product filtering, cart, and payment system.",
    "project3-problem-text": "Fragmentation in the Neuro-supplies market.",
    "project3-solution-text": "Centralized intelligent commerce platform.",
    "project4-title": "Enterprise Portfolio",
    "project4-p": "High-performance professional identity platform for software engineers.",
    "project4-problem-text": "Inability to communicate true value effectively.",
    "project4-solution-text": "Professional strategic positioning tool.",
    "project5-title": "Productivity Engine",
    "project5-p": "An intelligent ecosystem for academic management and AI-assisted task tracking.",
    "project5-problem-text": "Information overload in traditional note-taking apps leading to decreased user focus.",
    "project5-solution-text": "Built a modular React-based workspace with integrated AI assistants to automate task prioritization.",
    "project6-title": "R.I.S.E OS Assistant",
    "project6-p": "Voice-controlled OS automation program built for efficiency.",
    "project6-problem-text": "Lack of accessibility for certain workflows.",
    "project6-solution-text": "Specific voice-controlled assistant program.",
    "project-btn-live": "Live Demo",
    "project-btn-arch": "Architecture",
    "project-btn-deploy": "Deployment",
    "project-btn-doc": "Documentation",
    "project-btn-demo": "Demo",
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
    "hero-location": "Based in IRAQ",
    "hero-availability": "Available for High-Impact Projects",
    "hero-btn-work": "Work With Me",
    "hero-btn-resume": "View Resume",
    "hero-follow": "Professional Networks:",
    "contact-location": "Iraq , Karbala"
  },
  ar: {
    "nav-home": "الرئيسية",
    "nav-about": "من أنا",
    "nav-projects": "المشاريع",
    "nav-specializations": "التخصصات",
    "nav-contact": "اتصل بي",
    "hero-title": "مرحباً، أنا CHEETAH",
    "hero-subtitle": "مهندس برمجيات | متخصص واجهات أمامية",
    "hero-p1": "بناء تطبيقات قابلة للتوسع وجاهزة للإنتاج مثل مراكز الإنتاجية الشخصية. أقوم بتحويل متطلبات المستخدم المعقدة إلى بنى ويب عالية الأداء تركز على المنتج.",
    "hero-p2": "مع أساس متين في علوم الحاسوب من جامعة كربلاء وخبرة هندسية مهنية تزيد عن سنتين، أتخصص في سد الفجوة بين منطق الخلفية المتطور وتجارب المستخدم البديهية.",
    "hero-p3": "التميز في هندسة المنتجات من خلال الدقة والأداء.",
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
    "about-card3-p": "أكثر من 5 مشاريع جاهزة للمؤسسات",
    "projects-subtitle": "دراسات الحالة",
    "projects-title": "معرض الهندسة",
    "projects-p1": "مجموعة مختارة من المشاريع حيث قمت بحل تحديات معمارية معقدة",
    "projects-p2": "باستخدام هندسة الواجهات الأمامية الحديثة وتقنيات حل المشكلات القوية.",
    "project-problem": "المشكلة:",
    "project-solution": "التأثير/الحل:",
    "project1-title": "R.NOTE - مركز إنتاجية الطلاب الشخصي",
    "project1-p": "تطبيق ويب معقد مصمم لتحسين التجربة الأكاديمية، وتحفيز الدراسة من خلال توصيات محددة الأولويات.",
    "project1-problem-text": "يعاني الطلاب من الجداول المشتتة، وعدم التنظيم، وانخفاض الدافع لتحديد أولويات المهام.",
    "project1-solution-text": "يجمع R.NOTE التكليفات والاختبارات ومنطق الأولويات في لوحة تحكم واحدة بديهية تعمل بالوضع الداكن، مع استخدام التحفيز (XP) للحفاظ على الاستمرارية.",
    "project2-title": "Cura (كيورا) - منصة جدولة وإدارة الرعاية الصحية",
    "project2-p": "حل رقمي استراتيجي يسد الفجوة التشغيلية بين المرضى ومرافق الرعاية الصحية.",
    "project2-problem-text": "تعاني العيادات الصحية من عدم الكفاءة التشغيلية، والجدولة المجزأة، وضعف التواصل بين المريض ومقدم الخدمة.",
    "project2-solution-text": "يوفر جدولة المواعيد في الوقت الفعلي، والحوكمة الإدارية، والمسارات التشغيلية الاستباقية لزيادة كفاءة العيادة ورفع تجربة المريض.",
    "project3-title": "موقع NeuroSing",
    "project3-p": "متجر إلكتروني حديث مع تصفية المنتجات وسلة التسوق ونظام الدفع.",
    "project3-problem-text": "التجزئة في سوق المستلزمات العصبية.",
    "project3-solution-text": "منصة تجارة ذكية مركزية.",
    "project4-title": "معرض أعمال المؤسسات",
    "project4-p": "منصة هوية مهنية عالية الأداء لمهندسي البرمجيات.",
    "project4-problem-text": "Inability to communicate true value effectively.",
    "project4-solution-text": "Professional strategic positioning tool.",
    "project5-title": "Productivity Engine",
    "project5-p": "An intelligent ecosystem for academic management and AI-assisted task tracking.",
    "project5-problem-text": "Information overload in traditional note-taking apps leading to decreased user focus.",
    "project5-solution-text": "Built a modular React-based workspace with integrated AI assistants to automate task prioritization.",
    "project6-title": "R.I.S.E OS Assistant",
    "project6-p": "Voice-controlled OS automation program built for efficiency.",
    "project6-problem-text": "Lack of accessibility for certain workflows.",
    "project6-solution-text": "Specific voice-controlled assistant program.",
    "project-btn-live": "عرض حي",
    "project-btn-arch": "المعمارية",
    "project-btn-deploy": "النشر",
    "project-btn-doc": "التوثيق",
    "project-btn-demo": "تجربة",
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
    "hero-location": "مقر العمل: العراق",
    "hero-availability": "متاح للمشاريع عالية التأثير",
    "hero-btn-work": "وظفني الآن",
    "hero-btn-resume": "عرض السيرة الذاتية",
    "hero-follow": "الشبكات المهنية:",
    "contact-location": "العراق، كربلاء"
  }
};

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      const icon = el.querySelector('i');
      if (icon) {
        const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = translations[lang][key];
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
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerText = lang === 'ar' ? 'EN' : 'AR';
  }

  if (lang === 'ar') {
    currentWords = ["مهندس واجهات أمامية", "معماري برمجيات", "مستشار تقني", "خبير React"];
  } else {
    currentWords = ["Frontend Engineer", "Software Architect", "Technical Consultant", "React Expert"];
  }
  
  localStorage.setItem('preferredLanguage', lang);
}

const words = ["Frontend Engineer", "Software Architect", "Technical Consultant", "React Expert"];
let currentWords = words;

function toggleLanguage() {
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  updateLanguage(newLang);
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  updateLanguage(savedLang);
});

const allLinks = document.querySelectorAll('a[href^="#"]');

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId === "#") return;
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 80, 
        behavior: 'smooth'
      });

      if (link.closest('.ul-list')) {
        removeActive();
        link.parentElement.classList.add('active');
      }
    }
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      removeActive();
      const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
      if (activeLink) activeLink.parentElement.classList.add('active');
    }
  });

  if(window.scrollY > 500){
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }

  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active-reveal');
    }
  });
});

const revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .services-container, .contact-content');
revealElements.forEach(el => el.classList.add('reveal'));

const backToTop = document.createElement('div');
backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
backToTop.id = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #474af0;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

const cards = document.querySelectorAll('.project-card, .c1, .service-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.05)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});

const typingElement = document.querySelector('.info-home h3'); 
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentWord = currentWords[wordIndex];
    let displayedText = currentWord.substring(0, charIndex);
    
    typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % currentWords.length;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', type);

document.addEventListener("DOMContentLoaded", () => {
  const loadingText = document.getElementById("loading-text");
  const mainIcon = document.querySelector(".main-icon");
  const subIcons = document.querySelectorAll(".sub-icons i");
  const designerText = document.getElementById("designer-text");
  const mainPage = document.getElementById("main-page");
  const loadingScreen = document.getElementById("loading-screen");

  function showElement(element, delay=0){
    setTimeout(() => {
      if (element) {
        element.classList.remove("hidden");
        element.classList.add("fall");
      }
    }, delay);
  }

  showElement(loadingText, 0);          
  showElement(mainIcon, 100);         
  subIcons.forEach((icon, idx) => {
    showElement(icon, 200 + idx*50);  
  });
  showElement(designerText, 400);    

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.style.display='none', 100);
    if (mainPage) mainPage.classList.add("visible");
  }, 500);
});

// Hamburger Menu Logic
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.ul-list');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
      icon.classList.replace('fa-xmark', 'fa-bars');
    }
  });
}

// Close menu on link click
document.querySelectorAll('.ul-list a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    if (hamburger) {
      const icon = hamburger.querySelector('i');
      icon.classList.replace('fa-xmark', 'fa-bars');
    }
  });
});
