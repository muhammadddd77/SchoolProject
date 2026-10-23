(() => {
  "use strict";

  // --- TRANSLATIONS (RU / TJ / EN) ---
  const translations = {
    ru: {
      doc_title: "Гимназия имени Асадулло Гуломова — Официальный сайт",
      logo1: "Гимназия имени",
      logo2: "Асадулло Гуломова",
      nav1: "О гимназии",
      nav2: "Руководство",
      nav3: "Ценности",
      nav4: "Жизнь гимназии",
      nav_insta: "Instagram",
      nav5: "Достижения",
      nav6: "Галерея",
      nav7: "Контакты",
      nav_insta_btn: "Наш Instagram",
      hero_label: "ОФИЦИАЛЬНЫЙ САЙТ ГИМНАЗИИ",
      hero_h1: "Место,<br><span>где знания</span><br>становятся будущим.",
      hero_p: "Гимназия имени Асадулло Гуломова — место, где качественное образование, воспитание личности, инновации и стремление к успеху объединяются в едином пути.",
      hero_more: "Узнать больше",
      hero_life: "Жизнь гимназии",
      hero_insta: "Мы в Instagram",
      hero_city: "ДУШАНБЕ",
      hero_edu: "ОБРАЗОВАНИЕ",
      hero_dev: "РАЗВИТИЕ",
      photo_label: "НАША ГИМНАЗИЯ",
      photo_text: "Знания. Личность. Будущее.",
      goal_label: "НАША МИССИЯ",
      goal_text: "Воспитывать сильную личность, готовую к будущему.",
      scroll: "ЛИСТАЙТЕ ВНИЗ",
      about_tag: "01 / О ГИМНАЗИИ",
      about_h2: "Больше, чем<br><em>просто школа.</em>",
      about_intro: "Гимназия объединяет глубокие академические традиции, современные методики обучения, раскрытие талантов и насыщенную школьную жизнь.",
      about_word: "EDUCATION",
      about_h3: "Здесь начинается<br>большая история.",
      about_p: "Каждый урок, каждый проект, победа на олимпиадах и вдохновляющие открытия становятся прочной основой для успешного будущего каждого гимназиста.",
      about_link: "Наши ценности",
      about_side: "Современное образование — это не просто учебники и отметки. Это умение критически мыслить, создавать новое, действовать в команде и уверенно побеждать.",
      director_tag: "02 / РУКОВОДСТВО",
      director_photo_label: "РУКОВОДСТВО",
      director_photo_h: "Лидерство начинается<br>с ответственности.",
      director_h2: "Вести вперёд.<br><em>Создавать.</em>",
      director_p: "Руководство гимназии объединяет высококвалифицированных педагогов, талантливых учеников и родителей вокруг общей цели — высочайшего уровня образования и воспитания достойных граждан Республики Таджикистан.",
      director_name: "ГИМНАЗИЯ ИМЕНИ АСАДУЛЛО ГУЛОМОВА",
      director_role: "Педагогический состав и администрация",
      director_note: "Индивидуальный подход к каждому ученику, преданность образовательным идеалам и постоянное стремление к вершинам.",
      values_tag: "03 / НАШИ ЦЕННОСТИ",
      values_h2: "Три опоры<br><em>одного пути.</em>",
      values_intro: "Ключевые ориентиры, помогающие гимназистам уверенно развиваться и достигать блестящих результатов.",
      v1: "Глубокие знания",
      v1p: "Фундаментальное изучение точных и гуманитарных дисциплин, языковая подготовка и интерес к исследованиям.",
      v2: "Сильная личность",
      v2p: "Воспитание характера, ответственности, патриотизма, честности и уважения к традициям.",
      v3: "Уверенное будущее",
      v3p: "Создание условий для успешного поступления в ведущие вузы страны и мира и всесторонней самореализации.",
      life_tag: "04 / ЖИЗНЬ ГИМНАЗИИ",
      life_h2: "Каждый день<br><em>имеет значение.</em>",
      life_intro: "Олимпиады, праздничные концерты, научные клубы, спортивные турниры и памятные моменты дружбы.",
      life1_tag: "01 / МЕРОПРИЯТИЯ",
      life1_h: "Важные моменты<br>школьной жизни.",
      life2_tag: "02 / ОБРАЗОВАНИЕ",
      life2_h: "Знания<br>становятся<br>возможностями.",
      life3_tag: "03 / ДОСТИЖЕНИЯ",
      life3_h: "Результаты,<br>которыми<br>мы гордимся.",
      insta_tag: "ОФИЦИАЛЬНЫЙ INSTAGRAM",
      insta_h2: "Жизнь гимназии<br>в <em>Instagram.</em>",
      insta_p: "Смотрите живые фото и видеоотчёты со школьных линеек, олимпиад, праздников и учебных будней на странице @gym.asadullo.gulomov.",
      insta_followers: "подписчиков",
      insta_posts_count: "публикаций",
      insta_follow_btn: "Подписаться в Instagram",
      insta_view_post: "Открыть публикацию",
      ach_tag: "05 / ДОСТИЖЕНИЯ",
      ach_h2: "Путь состоит<br>из <em>результатов.</em>",
      ach_p: "Каждая победа на олимпиадах и каждый высокий балл — это плод упорного труда гимназистов и мастерства учителей.",
      stat1: "стремление<br>к развитию",
      stat2: "дней новых<br>открытий в году",
      stat3: "общая цель —<br>успех каждого",
      stat4: "возможностей<br>для будущего",
      gallery_tag: "06 / ГАЛЕРЕЯ",
      gallery_h2: "Моменты,<br><em>которые остаются.</em>",
      gallery_p: "Настоящая школьная атмосфера, яркие эмоции и фотохроника жизни гимназии.",
      filter_all: "Все фотографии",
      filter_insta: "Из Instagram",
      filter_school: "Гимназия",
      filter_events: "События",
      manifesto_tag: "НАШ ДЕВИЗ",
      manifesto_h2: "Образование сегодня.<br><em>Возможности завтра.</em>",
      manifesto_p: "Гимназия имени Асадулло Гуломова — город Душанбе",
      contact_tag: "07 / КОНТАКТЫ",
      contact_h2: "Будем<br><em>на связи.</em>",
      contact_insta_label: "ОФИЦИАЛЬНЫЙ INSTAGRAM",
      contact_insta_desc: "Следите за событиями, новостями и праздниками онлайн",
      contact_insta_btn: "Перейти в профиль Instagram",
      contact_city: "ГОРОД И АДРЕС",
      contact_place: "г. Душанбе, район Исмоили Сомони, Таджикистан",
      contact_page: "ОФИЦИАЛЬНАЯ СТРАНИЦА",
      contact_name: "Гимназия имени Асадулло Гуломова",
      footer1: "Гимназия имени",
      footer2: "Асадулло Гуломова",
      footer_copy: "© 2026 · Официальный сайт гимназии имени Асадулло Гуломова. Все права защищены.",
      floating_insta: "Мы в Instagram"
    },

    tj: {
      doc_title: "Гимназияи ба номи Асадулло Ғуломов — Сомонаи расмӣ",
      logo1: "Гимназияи ба номи",
      logo2: "Асадулло Ғуломов",
      nav1: "Дар бораи гимназия",
      nav2: "Роҳбарият",
      nav3: "Арзишҳо",
      nav4: "Ҳаёти гимназия",
      nav_insta: "Instagram",
      nav5: "Дастовардҳо",
      nav6: "Галерея",
      nav7: "Тамос",
      nav_insta_btn: "Instagram-и мо",
      hero_label: "СОМОНАИ РАСМИИ ГИМНАЗИЯ",
      hero_h1: "Ҷое,<br><span>ки дониш</span><br>ба оянда табдил меёбад.",
      hero_p: "Гимназияи ба номи Асадулло Ғуломов — маконест, ки таълими босифат, тарбияи шахсият, навоварӣ ва талош барои муваффақиятро дар як роҳ муттаҳид мекунад.",
      hero_more: "Маълумоти бештар",
      hero_life: "Ҳаёти гимназия",
      hero_insta: "Мо дар Instagram",
      hero_city: "ДУШАНБЕ",
      hero_edu: "МАОРИФ",
      hero_dev: "РУШД",
      photo_label: "ГИМНАЗИЯИ МО",
      photo_text: "Дониш. Шахсият. Оянда.",
      goal_label: "ҲАДАФИ МО",
      goal_text: "Тарбияи шахсияти соҳибмаърифат ва омода ба даъватҳои оянда.",
      scroll: "БА ПОЁН ГУЗАРЕД",
      about_tag: "01 / ДАР БОРАИ ГИМНАЗИЯ",
      about_h2: "Беш аз<br><em>танҳо мактаб.</em>",
      about_intro: "Гимназия анъанаҳои устувори таълимӣ, усулҳои муосири дарсдиҳӣ, кашфи истеъдодҳо ва ҳаёти рангини мактабиро муттаҳид менамояд.",
      about_word: "МАОРИФ",
      about_h3: "Дар ин ҷо оғоз мешавад<br>таърихи бузург.",
      about_p: "Ҳар як дарс, ҳар як лоиҳа, пирӯзӣ дар олимпиадаҳо ва донишҳои нав пояи боэътимоди муваффақияти ояндаи ҳар як хонанда мебошанд.",
      about_link: "Арзишҳои мо",
      about_side: "Маорифи муосир танҳо китобҳои дарсӣ ва баҳоҳо нест. Ин малакаи интиқодӣ андешидан, офаридани навовариҳо, ҳамкорӣ дар даста ва бо боварӣ ба пеш рафтан аст.",
      director_tag: "02 / РОҲБАРИЯТ",
      director_photo_label: "РОҲБАРИЯТ",
      director_photo_h: "Роҳбарӣ оғоз мешавад<br>аз масъулият.",
      director_h2: "Ба пеш роҳнамоӣ кардан.<br><em>Эҷод кардан.</em>",
      director_p: "Роҳбарияти гимназия омӯзгорони баландихтисос, хонандагони боистеъдод ва волидонро гирди ҳадафи ягона — таҳсилоти сатҳи баланд ва тарбияи шоистаи насли навраси Тоҷикистон сарҷамъ мекунад.",
      director_name: "ГИМНАЗИЯИ БА НОМИ АСАДУЛЛО ҒУЛОМОВ",
      director_role: "Ҳайати омӯзгорон ва роҳбарият",
      director_note: "Муносибати инфиродӣ ба ҳар як толибилм, садоқат ба касби омӯзгорӣ ва талоши пайваста барои фатҳи қуллаҳои илм.",
      values_tag: "03 / АРЗИШҲОИ МО",
      values_h2: "Се такягоҳ<br><em>як роҳ.</em>",
      values_intro: "Арзишҳои калидӣ, ки ба хонандагон барои инкишофи ҳамаҷониба ва ноил шудан ба натиҷаҳои дурахшон роҳнамоӣ мекунанд.",
      v1: "Дониши амиқ",
      v1p: "Омӯзиши бунёдии фанҳои дақиқ ва гуманитарӣ, азхудкунии забонҳои хориҷӣ ва шавқ ба пажӯҳишҳои илмӣ.",
      v2: "Шахсияти комил",
      v2p: "Тарбияи хислат, масъулиятшиносӣ, ватандӯстӣ, ростқавлӣ ва эҳтиром ба анъанаҳо ва арзишҳои миллӣ.",
      v3: "Ояндаи дурахшон",
      v3p: "Фароҳам овардани шароит барои шомилшавӣ ба донишгоҳҳои бонуфузи дохилӣ ва хориҷӣ ва рушди комили истеъдодҳо.",
      life_tag: "04 / ҲАЁТИ ГИМНАЗИЯ",
      life_h2: "Ҳар рӯз<br><em>аҳамият дорад.</em>",
      life_intro: "Олимпиадаҳо, консертҳои идона, маҳфилҳои илмӣ, мусобиқаҳои варзишӣ ва лаҳзаҳои хотирмони дӯстӣ.",
      life1_tag: "01 / ЧОРАБИНИҲО",
      life1_h: "Лаҳзаҳои муҳимми<br>ҳаёти мактабӣ.",
      life2_tag: "02 / МАОРИФ",
      life2_h: "Дониш<br>табдил меёбад<br>ба имкониятҳо.",
      life3_tag: "03 / ДАСТОВАРДҲО",
      life3_h: "Натиҷаҳое,<br>ки бо онҳо<br>ифтихор мекунем.",
      insta_tag: "INSTAGRAM-И РАСМӢ",
      insta_h2: "Ҳаёти гимназия<br>дар <em>Instagram.</em>",
      insta_p: "Аксҳо ва наворҳои ҷолибро аз чорабиниҳо, ҷашнҳо, олимпиадаҳо ва рӯзгори таълимӣ дар саҳифаи расмии @gym.asadullo.gulomov тамошо кунед.",
      insta_followers: "обуначиён",
      insta_posts_count: "нашрҳо",
      insta_follow_btn: "Обуна шудан дар Instagram",
      insta_view_post: "Дидани ин нашр",
      ach_tag: "05 / ДАСТОВАРДҲО",
      ach_h2: "Роҳ аз<br><em>натиҷаҳо иборат аст.</em>",
      ach_p: "Ҳар як комёбӣ дар олимпиадаҳо ва баҳои баланд — самараи меҳнати пайвастаи хонандагон ва устодони соҳибтаҷриба аст.",
      stat1: "кӯшиш<br>барои рушд",
      stat2: "рӯзи кашфиётҳои<br>нав дар сол",
      stat3: "ҳадафи ягона —<br>комёбии ҳар як",
      stat4: "имкониятҳо<br>барои оянда",
      gallery_tag: "06 / ГАЛЕРЕЯ",
      gallery_h2: "Лаҳзаҳое,<br><em>ки боқӣ мемонанд.</em>",
      gallery_p: "Муҳити гарми мактабӣ, эҳсосоти самимӣ ва таърихи аксии гимназия.",
      filter_all: "Ҳамаи аксҳо",
      filter_insta: "Аз Instagram",
      filter_school: "Гимназия",
      filter_events: "Чорабиниҳо",
      manifesto_tag: "ШИОРИ МО",
      manifesto_h2: "Маориф имрӯз.<br><em>Имкониятҳо фардо.</em>",
      manifesto_p: "Гимназияи ба номи Асадулло Ғуломов — шаҳри Душанбе",
      contact_tag: "07 / ТАМОС",
      contact_h2: "Ҳамеша<br><em>дар тамос хоҳем буд.</em>",
      contact_insta_label: "INSTAGRAM-И РАСМИИ МО",
      contact_insta_desc: "Рӯйдодҳо, хабарҳо ва ҷашнҳои моро онлайн пайгирӣ намоед",
      contact_insta_btn: "Гузариш ба саҳифаи Instagram",
      contact_city: "ШАҲР ВА СУРОҒА",
      contact_place: "ш. Душанбе, ноҳияи Исмоили Сомонӣ, Тоҷикистон",
      contact_page: "САҲИФАИ РАСМӢ",
      contact_name: "Гимназияи ба номи Асадулло Ғуломов",
      footer1: "Гимназияи ба номи",
      footer2: "Асадулло Ғуломов",
      footer_copy: "© 2026 · Сомонаи расмии гимназияи ба номи Асадулло Ғуломов. Ҳамаи ҳуқуқҳо маҳфузанд.",
      floating_insta: "Мо дар Instagram"
    },

    en: {
      doc_title: "Asadullo Gulomov Gymnasium — Official Website",
      logo1: "Gymnasium named after",
      logo2: "Asadullo Gulomov",
      nav1: "About Us",
      nav2: "Leadership",
      nav3: "Values",
      nav4: "School Life",
      nav_insta: "Instagram",
      nav5: "Achievements",
      nav6: "Gallery",
      nav7: "Contacts",
      nav_insta_btn: "Our Instagram",
      hero_label: "OFFICIAL GYMNASIUM WEBSITE",
      hero_h1: "The place<br><span>where knowledge</span><br>shapes the future.",
      hero_p: "Asadullo Gulomov Gymnasium is an institution where rigorous academics, personal integrity, modern innovation, and aspiration for excellence come together.",
      hero_more: "Learn More",
      hero_life: "School Life",
      hero_insta: "Our Instagram",
      hero_city: "DUSHANBE",
      hero_edu: "EDUCATION",
      hero_dev: "INNOVATION",
      photo_label: "OUR GYMNASIUM",
      photo_text: "Knowledge. Character. Future.",
      goal_label: "OUR MISSION",
      goal_text: "Fostering well-rounded leaders prepared for tomorrow's challenges.",
      scroll: "SCROLL DOWN",
      about_tag: "01 / ABOUT OUR GYMNASIUM",
      about_h2: "More than<br><em>just a school.</em>",
      about_intro: "The Gymnasium unites solid academic traditions, modern educational methodologies, talent cultivation, and a vibrant community.",
      about_word: "EXCELLENCE",
      about_h3: "Where great journeys<br>begin.",
      about_p: "Every lesson, project, olympiad victory, and newly gained insight provides a solid springboard for the lifelong success of our students.",
      about_link: "Our Values",
      about_side: "Modern education is much more than textbooks and exams. It is about thinking critically, creating innovative solutions, collaborating effectively, and moving forward with confidence.",
      director_tag: "02 / LEADERSHIP",
      director_photo_label: "ADMINISTRATION",
      director_photo_h: "Leadership begins<br>with responsibility.",
      director_h2: "Guiding forward.<br><em>Inspiring excellence.</em>",
      director_p: "Our leadership unites qualified educators, talented students, and supportive families around one shared goal: outstanding education and character building for Tajikistan's future.",
      director_name: "ASADULLO GULOMOV GYMNASIUM",
      director_role: "Faculty & School Administration",
      director_note: "Committed to personalized guidance for every pupil, academic integrity, and continual elevation of educational standards.",
      values_tag: "03 / OUR VALUES",
      values_h2: "Three pillars<br><em>one common path.</em>",
      values_intro: "Core principles that guide our students toward holistic development and exceptional achievements every day.",
      v1: "Academic Depth",
      v1p: "Rigorous study in sciences and humanities, foreign language fluency, and a passion for scientific discovery.",
      v2: "Strong Character",
      v2p: "Instilling integrity, independence, civic responsibility, mutual respect, and ethical leadership.",
      v3: "Promising Future",
      v3p: "Providing premier preparation for entry into top domestic and international universities.",
      life_tag: "04 / SCHOOL LIFE",
      life_h2: "Every single day<br><em>truly matters.</em>",
      life_intro: "Olympiads, cultural celebrations, scientific forums, athletic tournaments, and memorable moments of lifelong friendship.",
      life1_tag: "01 / CELEBRATIONS",
      life1_h: "Memorable moments<br>of campus life.",
      life2_tag: "02 / ACADEMICS",
      life2_h: "Knowledge<br>transforms into<br>opportunities.",
      life3_tag: "03 / HONORS",
      life3_h: "Achievements<br>we take great<br>pride in.",
      insta_tag: "OFFICIAL INSTAGRAM",
      insta_h2: "School life<br>on <em>Instagram.</em>",
      insta_p: "Explore live photos, video reports, assemblies, olympiad wins, and daily school life on our official Instagram page @gym.asadullo.gulomov.",
      insta_followers: "followers",
      insta_posts_count: "posts",
      insta_follow_btn: "Follow on Instagram",
      insta_view_post: "View Publication",
      ach_tag: "05 / ACHIEVEMENTS",
      ach_h2: "Excellence defined<br>by <em>results.</em>",
      ach_p: "Each academic distinction and olympiad medal represents the synergy between diligent students and inspired teachers.",
      stat1: "commitment<br>to growth",
      stat2: "days of new<br>discoveries yearly",
      stat3: "shared goal —<br>every child's success",
      stat4: "boundless<br>future possibilities",
      gallery_tag: "06 / PHOTO GALLERY",
      gallery_h2: "Moments<br><em>that inspire forever.</em>",
      gallery_p: "The authentic spirit of our school, bright student smiles, and pictorial highlights.",
      filter_all: "All Photos",
      filter_insta: "From Instagram",
      filter_school: "Gymnasium",
      filter_events: "Events",
      manifesto_tag: "OUR MOTTO",
      manifesto_h2: "Education today.<br><em>Opportunities tomorrow.</em>",
      manifesto_p: "Asadullo Gulomov Gymnasium — Dushanbe, Tajikistan",
      contact_tag: "07 / CONTACT US",
      contact_h2: "Get in touch<br><em>with us.</em>",
      contact_insta_label: "OFFICIAL INSTAGRAM",
      contact_insta_desc: "Stay connected with school news, announcements, and events online",
      contact_insta_btn: "Open Instagram Profile",
      contact_city: "CITY & LOCATION",
      contact_place: "Dushanbe, Ismoili Somoni district, Tajikistan",
      contact_page: "OFFICIAL PAGE",
      contact_name: "Asadullo Gulomov Gymnasium",
      footer1: "Gymnasium named after",
      footer2: "Asadullo Gulomov",
      footer_copy: "© 2026 · Official website of Asadullo Gulomov Gymnasium. All rights reserved.",
      floating_insta: "Follow on Instagram"
    }
  };

  // --- HEADER SCROLL & MOBILE MENU ---
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
  });

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      document.body.classList.toggle("menu-open");
    });
  }

  document.querySelectorAll(".nav-menu a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu?.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });

  // --- SMOOTH SCROLLING FOR HASH LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // --- REVEAL ANIMATIONS (INTERSECTION OBSERVER) ---
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }

  // --- STATS COUNTER ANIMATION ---
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const targetVal = Number(el.dataset.target);
        if (isNaN(targetVal)) return;

        let current = 0;
        const duration = 1600;
        const stepTime = Math.max(16, duration / targetVal);
        const increment = Math.max(1, Math.floor(targetVal / (duration / stepTime)));

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetVal) {
            el.textContent = targetVal;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, stepTime);

        observer.unobserve(el);
      });
    }, { threshold: 0.6 });

    document.querySelectorAll("[data-target]").forEach(el => counterObserver.observe(el));
  }

  // --- 3-LANGUAGE SWITCHER (RU / TJ / EN) ---
  const i18nElements = [...document.querySelectorAll("[data-i18n]")];

  function setLanguage(lang) {
    if (!["ru", "tj", "en"].includes(lang)) {
      lang = "ru";
    }

    const dict = translations[lang] || translations.ru;

    // Update all i18n elements
    i18nElements.forEach(el => {
      const key = el.dataset.i18n;
      if (dict && dict[key] !== undefined) {
        if (el.dataset.i18nHtml === "true") {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update HTML attributes
    document.documentElement.lang = lang === "tj" ? "tg" : lang;
    document.title = dict.doc_title || "Гимназия имени Асадулло Гуломова";

    // Update lang button states
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Save user choice
    try {
      localStorage.setItem("gymnasium-language", lang);
    } catch (e) {
      // storage unavailable
    }
  }

  // Bind language button clicks
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Load saved or default language
  let savedLang = "ru";
  try {
    savedLang = localStorage.getItem("gymnasium-language") || "ru";
  } catch (e) { }
  setLanguage(savedLang);

  // --- GALLERY FILTER TABS ---
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        const cat = item.dataset.category;
        if (filter === "all" || cat === filter) {
          item.style.display = "";
          setTimeout(() => item.classList.add("visible"), 20);
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // --- LIGHTBOX MODAL ---
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxInstaBtn = document.getElementById("lightboxInstaBtn");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");

  window.openLightbox = function(src, caption, instaUrl) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || "";
    }
    if (lightboxInstaBtn) {
      if (instaUrl) {
        lightboxInstaBtn.href = instaUrl;
        lightboxInstaBtn.style.display = "inline-flex";
      } else {
        lightboxInstaBtn.href = "https://www.instagram.com/gym.asadullo.gulomov/";
        lightboxInstaBtn.style.display = "inline-flex";
      }
    }
    lightboxModal.classList.add("open");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("open");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lightboxImg) lightboxImg.src = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("open")) {
      closeLightbox();
    }
  });

  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
})();
