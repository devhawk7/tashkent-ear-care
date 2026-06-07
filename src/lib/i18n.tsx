import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "uz";

export interface Translation {
  nav: { home: string; services: string; about: string; contact: string };
  common: {
    callNow: string;
    explore: string;
    findUs: string;
    more: string;
    languages: string;
  };
  home: {
    badge: string;
    h1a: string;
    h1gold: string;
    h1b: string;
    subtitle: string;
    info: { t: string; s: string }[];
    whoEyebrow: string;
    whoTitle: string;
    whoBody: string;
    features: string[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    careTitle: string;
    careBody1: string;
    careBody2: string;
    audiencesTitle: string;
    audiences: { t: string; s: string }[];
    apartTitle: string;
    values: { t: string; s: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string }[];
    notSureTitle: string;
    notSureBody: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    details: { t: string; v: string }[];
    emergencyTitle: string;
    emergencyBody: string;
    findTitle: string;
    findBody: string;
  };
  map: {
    title: string;
    subReady: string;
    subFallback: string;
    calculating: string;
    byCar: string;
    openMaps: string;
    loading: string;
    unavailableTitle: string;
    unavailableBody: string;
    areas: Record<string, string>;
  };
  form: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    submit: string;
    sending: string;
    nameError: string;
    phoneError: string;
    success: string;
    error: string;
  };
  footer: {
    tagline: string;
    navigate: string;
    contact: string;
    address: string;
    hours: string;
    emergency: string;
    emergencyBody: string;
    rights: string;
  };
  notFound: { title: string; body: string; home: string };
}

const ru: Translation = {
  nav: { home: "Главная", services: "Услуги", about: "О нас", contact: "Контакты" },
  common: {
    callNow: "Позвонить",
    explore: "Наши услуги",
    findUs: "Как добраться",
    more: "Подробнее о клинике",
    languages: "Русский · Oʻzbek",
  },
  home: {
    badge: "Открыто 24 часа · Каждый день",
    h1a: "Превосходная ",
    h1gold: "ЛОР-помощь",
    h1b: " в нужный момент.",
    subtitle:
      "Премиальная клиника уха, горла и носа в самом сердце Ташкента — для взрослых, детей, семей, экспатов и экстренных случаев. Всегда открыты. Всегда внимательны.",
    info: [
      { t: "Круглосуточно", s: "Помощь, которая не закрывается" },
      { t: "Улица Бабура", s: "Центр Ташкента" },
      { t: "+998 95 095 50 50", s: "Звоните в любое время" },
      { t: "Русский · Oʻzbek", s: "Свободно говорим" },
    ],
    whoEyebrow: "Кто мы",
    whoTitle: "Отоларингология мирового уровня с человеческим теплом.",
    whoBody:
      "Клиника ЛОР объединяет ведущих ЛОР-специалистов, современную диагностику и спокойную, роскошную атмосферу. От плановых осмотров до неотложной помощи — наша команда обеспечивает точную и заботливую помощь каждому пациенту в любой час.",
    features: ["Надёжные специалисты", "Забота о пациенте", "Комфорт 5 звёзд"],
    servicesEyebrow: "Наши услуги",
    servicesTitle: "Полный спектр ЛОР-помощи",
    servicesSubtitle:
      "Полный набор ЛОР-услуг для взрослых и детей, выполняемых с точностью и теплом.",
    ctaTitle: "Нужен ЛОР-врач прямо сейчас?",
    ctaSubtitle:
      "Днём и ночью наши врачи готовы помочь. Позвоните нам или приходите в клинику на улице Бабура, Ташкент.",
  },
  about: {
    eyebrow: "О нас",
    title: "Новый стандарт ЛОР-помощи в Ташкенте",
    intro:
      "Клиника ЛОР была основана на простом убеждении: исключительная помощь уха, горла и носа должна быть доступна тогда, когда она нужна — с теплом, точностью и комфортом, которых вы заслуживаете.",
    careTitle: "Забота, которая не спит",
    careBody1:
      "Расположенная на улице Бабура в центре Ташкента, наша клиника объединяет команду ведущих отоларингологов с современной собственной диагностикой. Будь то плановый осмотр или ночная неотложная помощь — вас примет эксперт, которому действительно не всё равно.",
    careBody2:
      "Мы с гордостью обслуживаем наше сообщество на русском и узбекском языках и радушно встречаем экспатов и туристов с внимательной, дружелюбной поддержкой.",
    audiencesTitle: "О ком мы заботимся",
    audiences: [
      { t: "Взрослые и семьи", s: "Комплексная ЛОР-помощь для каждого члена вашей семьи." },
      { t: "Дети", s: "Бережная, специализированная детская ЛОР-помощь в спокойной обстановке." },
      { t: "Экспаты и туристы", s: "Поддержка на английском, с помощью на русском и узбекском." },
      { t: "Корпоративные клиенты", s: "Приоритетные приёмы и индивидуальная помощь для организаций." },
    ],
    apartTitle: "Что нас отличает",
    values: [
      { t: "Всегда открыто", s: "Настоящая работа 24/7 — включая ночи, выходные и праздники." },
      { t: "Клиническое совершенство", s: "Опытные специалисты и современные диагностические технологии." },
      { t: "Роскошный комфорт", s: "Спокойная, утончённая обстановка, созданная для вашего благополучия." },
      { t: "Сострадание", s: "К каждому пациенту относятся с уважением, терпением и заботой." },
    ],
  },
  services: {
    eyebrow: "Наша экспертиза",
    title: "Полный спектр ЛОР-услуг, круглосуточно",
    intro:
      "От повседневных проблем до неотложных ситуаций наши специалисты обеспечивают точную и заботливую помощь уха, горла и носа для всей семьи.",
    items: [
      {
        title: "Уши и слух",
        description:
          "Диагностика и лечение ушных инфекций, потери слуха, шума в ушах, удаление серы и нарушения равновесия с современной аудиометрией.",
      },
      {
        title: "Нос и пазухи",
        description:
          "Облегчение синусита, аллергии, заложенности носа, полипов и искривления перегородки с помощью передовых методов ринологии.",
      },
      {
        title: "Горло и голос",
        description:
          "Лечение боли в горле, тонзиллита, нарушений голоса и затруднений глотания для пациентов любого возраста.",
      },
      {
        title: "Детская ЛОР",
        description:
          "Бережное, ориентированное на ребёнка лечение ушных инфекций, аденоидов, миндалин и проблем с дыханием у детей.",
      },
      {
        title: "Экстренная ЛОР-помощь",
        description:
          "Круглосуточная реакция на носовые кровотечения, инородные тела, острые инфекции и внезапную потерю слуха — 24/7.",
      },
      {
        title: "Эндоскопия и диагностика",
        description:
          "Точное эндоскопическое обследование и визуализация на месте для быстрой, точной диагностики и понятных планов лечения.",
      },
      {
        title: "Малая хирургия",
        description:
          "Безопасные амбулаторные ЛОР-процедуры, выполняемые опытными хирургами в стерильной, комфортной обстановке.",
      },
      {
        title: "Аллергия и храп",
        description:
          "Комплексные аллергопробы, а также оценка и лечение храпа и нарушений дыхания во сне.",
      },
    ],
    notSureTitle: "Не уверены, какая услуга вам нужна?",
    notSureBody:
      "Наша команда направит вас к нужному специалисту. Звоните в любое время — днём или ночью.",
  },
  contact: {
    eyebrow: "Свяжитесь с нами",
    title: "Мы рядом, 24/7",
    intro:
      "Позвоните нам или приходите в клинику на улице Бабура в центре Ташкента. Наша команда готова помочь в любой час.",
    details: [
      { t: "Телефон", v: "+998 95 095 50 50" },
      { t: "Адрес", v: "Улица Бабура, Ташкент, Узбекистан" },
      { t: "Часы работы", v: "Открыто 24 часа · 7 дней в неделю" },
      { t: "Языки", v: "Русский · Oʻzbek" },
    ],
    emergencyTitle: "ЛОР-неотложка?",
    emergencyBody: "Не ждите. Наши специалисты дежурят круглосуточно.",
    findTitle: "Как нас найти",
    findBody:
      "Мы на улице Бабура в центре Ташкента. Выберите отправную точку для маршрута на автомобиле.",
  },
  map: {
    title: "Маршрут к нам",
    subReady: "Выберите отправную точку, чтобы увидеть маршрут на автомобиле.",
    subFallback: "Нажмите на район, чтобы открыть пошаговый маршрут в Google Maps.",
    calculating: "Расчёт…",
    byCar: "на машине",
    openMaps: "Открыть клинику в Google Maps",
    loading: "Загрузка карты…",
    unavailableTitle: "Карта недоступна офлайн",
    unavailableBody:
      "Не удалось загрузить интерактивную карту. Вы всё равно можете найти нас по адресу ниже или открыть маршрут в Google Maps.",
    areas: {
      airport: "Аэропорт Ташкента",
      amir: "Площадь Амира Темура",
      chorsu: "Базар Чорсу",
      railway: "Железнодорожный вокзал",
      yunusabad: "Юнусабад",
      ulugbek: "Мирзо Улугбек",
    },
  },
  form: {
    title: "Запись на консультацию",
    subtitle:
      "Оставьте имя и номер телефона — наш специалист перезвонит вам в любое время дня и ночи.",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "+998 ...",
    submit: "Заказать звонок",
    sending: "Отправка...",
    nameError: "Пожалуйста, введите ваше имя",
    phoneError: "Пожалуйста, введите корректный номер телефона",
    success: "Спасибо! Мы скоро вам перезвоним.",
    error: "Что-то пошло не так. Пожалуйста, позвоните нам.",
  },
  footer: {
    tagline:
      "Премиальная круглосуточная ЛОР-помощь в самом сердце Ташкента — для взрослых, детей, семей и экстренных случаев.",
    navigate: "Навигация",
    contact: "Контакты",
    address: "Улица Бабура, Ташкент, Узбекистан",
    hours: "Открыто 24 часа · Каждый день",
    emergency: "Экстренно",
    emergencyBody:
      "ЛОР-неотложка не ждёт. Наши специалисты доступны круглосуточно.",
    rights: "Клиника ЛОР — 24/7 ЛОР, Ташкент. Все права защищены.",
  },
  notFound: {
    title: "Страница не найдена",
    body: "Страница, которую вы ищете, не существует или была перемещена.",
    home: "На главную",
  },
};

const uz: Translation = {
  nav: { home: "Bosh sahifa", services: "Xizmatlar", about: "Biz haqimizda", contact: "Aloqa" },
  common: {
    callNow: "Qo‘ng‘iroq qilish",
    explore: "Xizmatlarimiz",
    findUs: "Qanday yetib borish",
    more: "Klinika haqida batafsil",
    languages: "Русский · Oʻzbek",
  },
  home: {
    badge: "24 soat ochiq · Har kuni",
    h1a: "Ajoyib ",
    h1gold: "LOR yordami",
    h1b: " — kerak bo‘lgan onda.",
    subtitle:
      "Toshkent markazidagi quloq, burun va tomoq bo‘yicha premium klinika — kattalar, bolalar, oilalar, ekspatlar va shoshilinch holatlar uchun. Doimo ochiq. Doimo e’tiborli.",
    info: [
      { t: "Kechayu kunduz", s: "Hech qachon yopilmaydigan yordam" },
      { t: "Bobur ko‘chasi", s: "Toshkent markazi" },
      { t: "+998 95 095 50 50", s: "Istalgan vaqtda qo‘ng‘iroq qiling" },
      { t: "Русский · Oʻzbek", s: "Erkin gaplashamiz" },
    ],
    whoEyebrow: "Biz kimmiz",
    whoTitle: "Jahon darajasidagi otolaringologiya — insoniy iliqlik bilan.",
    whoBody:
      "LOR klinikasi yetakchi LOR mutaxassislari, zamonaviy diagnostika va xotirjam, hashamatli muhitni birlashtiradi. Rejali ko‘rikdan tortib shoshilinch yordamga qadar — jamoamiz har bir bemorga istalgan soatda aniq va g‘amxo‘r yordam ko‘rsatadi.",
    features: ["Ishonchli mutaxassislar", "Bemor birinchi o‘rinda", "5 yulduzli qulaylik"],
    servicesEyebrow: "Bizning xizmatlar",
    servicesTitle: "To‘liq quloq, burun va tomoq yordami",
    servicesSubtitle:
      "Kattalar va bolalar uchun to‘liq LOR xizmatlari — aniqlik va iliqlik bilan ko‘rsatiladi.",
    ctaTitle: "Hozir LOR shifokori kerakmi?",
    ctaSubtitle:
      "Kechayu kunduz shifokorlarimiz tayyor. Bizga qo‘ng‘iroq qiling yoki Bobur ko‘chasidagi klinikamizga tashrif buyuring, Toshkent.",
  },
  about: {
    eyebrow: "Biz haqimizda",
    title: "Toshkentda LOR yordamining yangi standarti",
    intro:
      "LOR klinikasi oddiy ishonchga asoslangan: quloq, burun va tomoq bo‘yicha ajoyib yordam kerak bo‘lganda — siz loyiq bo‘lgan iliqlik, aniqlik va qulaylik bilan taqdim etilishi kerak.",
    careTitle: "Uxlamaydigan g‘amxo‘rlik",
    careBody1:
      "Toshkent markazidagi Bobur ko‘chasida joylashgan klinikamiz yetakchi otolaringologlar jamoasini zamonaviy ichki diagnostika bilan birlashtiradi. Rejali ko‘rikmi yoki yarim tundagi shoshilinch holatmi — sizni chinakam g‘amxo‘r mutaxassis qabul qiladi.",
    careBody2:
      "Biz jamiyatimizga rus va o‘zbek tillarida xizmat ko‘rsatishdan faxrlanamiz hamda ekspat va sayyohlarni e’tiborli, do‘stona yordam bilan kutib olamiz.",
    audiencesTitle: "Biz kimga g‘amxo‘rlik qilamiz",
    audiences: [
      { t: "Kattalar va oilalar", s: "Oilangizning har bir a’zosi uchun keng qamrovli LOR yordami." },
      { t: "Bolalar", s: "Tinchlantiruvchi muhitda yumshoq, ixtisoslashgan bolalar LOR yordami." },
      { t: "Ekspat va sayyohlar", s: "Ingliz tilida yordam, rus va o‘zbek tillarida xizmat bilan." },
      { t: "Korporativ mijozlar", s: "Tashkilotlar uchun ustuvor qabul va moslashtirilgan yordam." },
    ],
    apartTitle: "Bizni nima ajratib turadi",
    values: [
      { t: "Doimo ochiq", s: "Haqiqiy 24/7 ish — tunlar, dam olish kunlari va bayramlar bilan." },
      { t: "Klinik mukammallik", s: "Tajribali mutaxassislar va zamonaviy diagnostika texnologiyalari." },
      { t: "Hashamatli qulaylik", s: "Sizning farovonligingiz uchun yaratilgan xotirjam, nafis muhit." },
      { t: "Hamdardlik", s: "Har bir bemorга hurmat, sabr va g‘amxo‘rlik bilan munosabatda bo‘linadi." },
    ],
  },
  services: {
    eyebrow: "Bizning tajriba",
    title: "To‘liq LOR xizmatlari, kechayu kunduz",
    intro:
      "Kundalik muammolardan shoshilinch holatlargacha mutaxassislarimiz butun oila uchun aniq va g‘amxo‘r quloq, burun va tomoq yordamini ta’minlaydi.",
    items: [
      {
        title: "Quloq va eshitish",
        description:
          "Quloq infeksiyalari, eshitish qobiliyatining pasayishi, quloqdagi shovqin, oltingugurtni olib tashlash va muvozanat buzilishlarini zamonaviy audiometriya bilan tashxislash va davolash.",
      },
      {
        title: "Burun va sinuslar",
        description:
          "Ilg‘or rinologiya usullari bilan sinusit, allergiya, burun bitishi, poliplar va to‘siq qiyshayishidan yengillik.",
      },
      {
        title: "Tomoq va ovoz",
        description:
          "Har qanday yoshdagi bemorlar uchun tomoq og‘rig‘i, angina, ovoz buzilishlari va yutish qiyinchiliklarini davolash.",
      },
      {
        title: "Bolalar LOR",
        description:
          "Bolalarda quloq infeksiyalari, adenoidlar, bodomchalar va nafas olish muammolarini yumshoq, bolaga yo‘naltirilgan davolash.",
      },
      {
        title: "Shoshilinch LOR yordami",
        description:
          "Burundan qon ketishi, begona jismlar, o‘tkir infeksiyalar va to‘satdan eshitishni yo‘qotishga kechayu kunduz javob — 24/7.",
      },
      {
        title: "Endoskopiya va diagnostika",
        description:
          "Tez va aniq tashxis hamda aniq davolash rejalari uchun joyida aniq endoskopik tekshiruv va tasvirlash.",
      },
      {
        title: "Kichik jarrohlik",
        description:
          "Tajribali jarrohlar tomonidan steril, qulay muhitda bajariladigan xavfsiz ambulator LOR muolajalari.",
      },
      {
        title: "Allergiya va xurrak",
        description:
          "Keng qamrovli allergiya testlari hamda xurrak va uyqudagi nafas olish muammolarini baholash va davolash.",
      },
    ],
    notSureTitle: "Qaysi xizmat kerakligiga ishonchingiz komil emasmi?",
    notSureBody:
      "Jamoamiz sizni kerakli mutaxassisga yo‘naltiradi. Istalgan vaqtda — kechayu kunduz qo‘ng‘iroq qiling.",
  },
  contact: {
    eyebrow: "Biz bilan bog‘laning",
    title: "Biz siz uchun shu yerda, 24/7",
    intro:
      "Bizga qo‘ng‘iroq qiling yoki Toshkent markazidagi Bobur ko‘chasidagi klinikamizga tashrif buyuring. Jamoamiz istalgan soatda yordam berishga tayyor.",
    details: [
      { t: "Telefon", v: "+998 95 095 50 50" },
      { t: "Manzil", v: "Bobur ko‘chasi, Toshkent, O‘zbekiston" },
      { t: "Ish vaqti", v: "24 soat ochiq · Haftada 7 kun" },
      { t: "Tillar", v: "Русский · Oʻzbek" },
    ],
    emergencyTitle: "Shoshilinch LOR holatimi?",
    emergencyBody: "Kutmang. Mutaxassislarimiz kechayu kunduz navbatchilikda.",
    findTitle: "Bizni qanday topish mumkin",
    findBody:
      "Biz Toshkent markazidagi Bobur ko‘chasidamiz. Avtomobil yo‘nalishi uchun boshlang‘ich nuqtani tanlang.",
  },
  map: {
    title: "Biz tomon yo‘nalish",
    subReady: "Avtomobil yo‘nalishini ko‘rish uchun boshlang‘ich nuqtani tanlang.",
    subFallback: "Google Maps’da bosqichma-bosqich yo‘nalishni ochish uchun hududga bosing.",
    calculating: "Hisoblanmoqda…",
    byCar: "avtomobilda",
    openMaps: "Klinikani Google Maps’da ochish",
    loading: "Xarita yuklanmoqda…",
    unavailableTitle: "Xarita oflayn mavjud emas",
    unavailableBody:
      "Interaktiv xaritani yuklab bo‘lmadi. Bizni quyidagi manzil orqali topishingiz yoki Google Maps’da yo‘nalishni ochishingiz mumkin.",
    areas: {
      airport: "Toshkent aeroporti",
      amir: "Amir Temur xiyoboni",
      chorsu: "Chorsu bozori",
      railway: "Temir yo‘l vokzali",
      yunusabad: "Yunusobod",
      ulugbek: "Mirzo Ulug‘bek",
    },
  },
  form: {
    title: "Konsultatsiyaga yozilish",
    subtitle:
      "Ism va telefon raqamingizni qoldiring — mutaxassisimiz kechayu kunduz sizga qo‘ng‘iroq qiladi.",
    namePlaceholder: "Ismingiz",
    phonePlaceholder: "+998 ...",
    submit: "Qo‘ng‘iroqni so‘rash",
    sending: "Yuborilmoqda...",
    nameError: "Iltimos, ismingizni kiriting",
    phoneError: "Iltimos, to‘g‘ri telefon raqamini kiriting",
    success: "Rahmat! Tez orada sizga qo‘ng‘iroq qilamiz.",
    error: "Xatolik yuz berdi. Iltimos, bizga qo‘ng‘iroq qiling.",
  },
  footer: {
    tagline:
      "Toshkent markazida premium kechayu kunduz LOR yordami — kattalar, bolalar, oilalar va shoshilinch holatlar uchun.",
    navigate: "Navigatsiya",
    contact: "Aloqa",
    address: "Bobur ko‘chasi, Toshkent, O‘zbekiston",
    hours: "24 soat ochiq · Har kuni",
    emergency: "Shoshilinch",
    emergencyBody:
      "Shoshilinch LOR holati kutmaydi. Mutaxassislarimiz kechayu kunduz mavjud.",
    rights: "LOR klinikasi — 24/7 LOR, Toshkent. Barcha huquqlar himoyalangan.",
  },
  notFound: {
    title: "Sahifa topilmadi",
    body: "Siz qidirayotgan sahifa mavjud emas yoki ko‘chirilgan.",
    home: "Bosh sahifaga",
  },
};

const translations: Record<Lang, Translation> = { ru, uz };

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "lor-clinic-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "ru" || stored === "uz") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
