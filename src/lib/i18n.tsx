import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "uz";

type Dict = typeof translations.ru;

const translations = {
  ru: {
    nav: {
      about: "О клинике",
      team: "Команда",
      treatments: "Процедуры",
      technology: "Технологии",
      contact: "Контакты",
      book: "Записаться на консультацию",
    },
    hero: {
      badge: "Премиальная эстетическая медицина",
      title: "Искусство красоты, доверенное науке",
      subtitle:
        "Doctor Vays — клиника эстетической медицины европейского уровня. Индивидуальный подход, безопасность и естественный результат для каждого пациента.",
      cta: "Записаться на консультацию",
      secondary: "Наши процедуры",
    },
    about: {
      tag: "О нас",
      title: "Философия заботы о пациенте",
      lead: "Мы объединяем медицинскую точность и эстетический вкус, чтобы подчеркнуть вашу естественную красоту.",
      values: [
        { t: "Индивидуальный подход", d: "Каждый протокол создаётся под особенности вашей кожи и цели." },
        { t: "Прозрачность", d: "Понятные рекомендации, честные ожидания и открытые цены." },
        { t: "Безопасность", d: "Сертифицированные препараты и стерильные протоколы клиники." },
        { t: "Поддержка", d: "Сопровождение до и после процедуры на каждом этапе." },
      ],
      stats: [
        { v: "15+", l: "Лет опыта" },
        { v: "12 000+", l: "Процедур" },
        { v: "6 500+", l: "Пациентов" },
        { v: "9", l: "Специалистов" },
      ],
    },
    commitment: {
      tag: "Наши обязательства",
      title: "Медицинское качество на каждом шаге",
      col1Title: "Забота о пациенте",
      col1: ["Персональная консультация врача", "Диагностика состояния кожи", "Понятный план лечения", "Наблюдение после процедуры"],
      col2Title: "Персональное лечение",
      col2: ["Подбор препаратов под ваш тип кожи", "Комфорт и анестезия по необходимости", "Естественный, а не искусственный результат", "Долгосрочная стратегия ухода"],
      cards: [
        { t: "Точная диагностика", d: "Аппаратный анализ кожи перед каждым протоколом." },
        { t: "Профилактика", d: "Стратегии здоровья и молодости кожи на будущее." },
        { t: "Современное оборудование", d: "Лазеры и системы последнего поколения." },
        { t: "Профессиональный уход", d: "Врачи с международными сертификатами." },
      ],
    },
    tech: {
      tag: "Технологии",
      title: "Оборудование мирового класса",
      lead: "Мы инвестируем в проверенные технологии, которые обеспечивают безопасность, точность и предсказуемый результат каждой процедуры.",
      points: ["Сертифицированные лазерные системы", "Цифровая диагностика кожи", "Стерильная операционная среда"],
      cta: "Записаться на консультацию",
    },
    treatments: {
      tag: "Процедуры",
      title: "Наши услуги",
      lead: "Полный спектр процедур эстетической медицины под контролем врачей.",
      from: "от",
      learn: "Подробнее",
    },
    doctors: {
      tag: "Команда",
      title: "Наши специалисты",
      lead: "Врачи с многолетним опытом и международным образованием.",
      exp: "опыта",
      cta: "Познакомиться со специалистами",
    },
    contact: {
      tag: "Контакты",
      title: "Запишитесь на визит",
      lead: "Мы будем рады ответить на ваши вопросы и подобрать удобное время.",
      address: "Адрес",
      addressValue: "Ташкент, ул. Амира Темура, 15",
      phone: "Телефон",
      email: "Эл. почта",
      hours: "Часы работы",
      hoursValue: "Пн–Сб: 09:00 – 20:00",
      social: "Мы в соцсетях",
      cta: "Записаться на консультацию",
    },
    footer: {
      tagline: "Клиника эстетической медицины европейского уровня.",
      nav: "Навигация",
      services: "Услуги",
      contact: "Контакты",
      rights: "Все права защищены.",
    },
    form: {
      title: "Записаться на консультацию",
      subtitle: "Оставьте контакты — мы перезвоним в течение рабочего дня.",
      name: "Имя",
      namePh: "Ваше имя",
      phone: "Телефон",
      phonePh: "+998 __ ___ __ __",
      service: "Услуга",
      servicePh: "Выберите услугу",
      message: "Сообщение (необязательно)",
      messagePh: "Расскажите о ваших пожеланиях",
      submit: "Отправить заявку",
      sending: "Связываемся с клиникой…",
      successTitle: "Заявка отправлена!",
      successText: "Спасибо! Наш администратор свяжется с вами в ближайшее время.",
      close: "Закрыть",
      errName: "Введите имя",
      errPhone: "Введите корректный номер телефона",
      errGeneric: "Не удалось отправить. Попробуйте ещё раз или позвоните нам.",
    },
    service: {
      back: "Все процедуры",
      science: "Наука",
      ritual: "Процедура",
      outcome: "Результат",
      price: "Стоимость",
      duration: "Длительность",
      recovery: "Восстановление",
      cta: "Запросить частную консультацию",
    },
  },
  uz: {
    nav: {
      about: "Klinika haqida",
      team: "Jamoa",
      treatments: "Muolajalar",
      technology: "Texnologiyalar",
      contact: "Aloqa",
      book: "Konsultatsiyaga yozilish",
    },
    hero: {
      badge: "Premium estetik tibbiyot",
      title: "Ilmga asoslangan go‘zallik san’ati",
      subtitle:
        "Doctor Vays — Yevropa darajasidagi estetik tibbiyot klinikasi. Har bir bemor uchun individual yondashuv, xavfsizlik va tabiiy natija.",
      cta: "Konsultatsiyaga yozilish",
      secondary: "Muolajalarimiz",
    },
    about: {
      tag: "Biz haqimizda",
      title: "Bemor haqida g‘amxo‘rlik falsafasi",
      lead: "Biz tibbiy aniqlik va estetik didni birlashtirib, tabiiy go‘zalligingizni ta’kidlaymiz.",
      values: [
        { t: "Individual yondashuv", d: "Har bir protokol teri xususiyatlaringizga moslab tuziladi." },
        { t: "Shaffoflik", d: "Tushunarli tavsiyalar, halol kutilmalar va ochiq narxlar." },
        { t: "Xavfsizlik", d: "Sertifikatlangan preparatlar va steril klinika protokollari." },
        { t: "Qo‘llab-quvvatlash", d: "Muolajadan oldin va keyin har bosqichda hamrohlik." },
      ],
      stats: [
        { v: "15+", l: "Yillik tajriba" },
        { v: "12 000+", l: "Muolajalar" },
        { v: "6 500+", l: "Bemorlar" },
        { v: "9", l: "Mutaxassislar" },
      ],
    },
    commitment: {
      tag: "Bizning majburiyatlarimiz",
      title: "Har bosqichda tibbiy sifat",
      col1Title: "Bemor haqida g‘amxo‘rlik",
      col1: ["Shaxsiy shifokor konsultatsiyasi", "Teri holatini diagnostika qilish", "Tushunarli davolash rejasi", "Muolajadan keyingi kuzatuv"],
      col2Title: "Shaxsiy davolash",
      col2: ["Teri turingizga mos preparatlar", "Zarur bo‘lsa qulaylik va anesteziya", "Sun’iy emas, tabiiy natija", "Uzoq muddatli parvarish strategiyasi"],
      cards: [
        { t: "Aniq diagnostika", d: "Har bir protokoldan oldin apparat tahlili." },
        { t: "Profilaktika", d: "Teri salomatligi va yoshligi uchun strategiyalar." },
        { t: "Zamonaviy jihozlar", d: "Eng so‘nggi avlod lazer tizimlari." },
        { t: "Professional parvarish", d: "Xalqaro sertifikatga ega shifokorlar." },
      ],
    },
    tech: {
      tag: "Texnologiyalar",
      title: "Jahon darajasidagi jihozlar",
      lead: "Biz har bir muolajaning xavfsizligi, aniqligi va bashoratli natijasini ta’minlaydigan texnologiyalarga sarmoya kiritamiz.",
      points: ["Sertifikatlangan lazer tizimlari", "Raqamli teri diagnostikasi", "Steril operatsiya muhiti"],
      cta: "Konsultatsiyaga yozilish",
    },
    treatments: {
      tag: "Muolajalar",
      title: "Bizning xizmatlar",
      lead: "Shifokorlar nazorati ostida estetik tibbiyotning to‘liq spektri.",
      from: "boshlab",
      learn: "Batafsil",
    },
    doctors: {
      tag: "Jamoa",
      title: "Bizning mutaxassislar",
      lead: "Ko‘p yillik tajriba va xalqaro ma’lumotga ega shifokorlar.",
      exp: "tajriba",
      cta: "Mutaxassislar bilan tanishish",
    },
    contact: {
      tag: "Aloqa",
      title: "Tashrifga yoziling",
      lead: "Savollaringizga javob berib, qulay vaqtni tanlashda yordam beramiz.",
      address: "Manzil",
      addressValue: "Toshkent, Amir Temur ko‘chasi, 15",
      phone: "Telefon",
      email: "E-pochta",
      hours: "Ish vaqti",
      hoursValue: "Du–Sh: 09:00 – 20:00",
      social: "Ijtimoiy tarmoqlarda",
      cta: "Konsultatsiyaga yozilish",
    },
    footer: {
      tagline: "Yevropa darajasidagi estetik tibbiyot klinikasi.",
      nav: "Navigatsiya",
      services: "Xizmatlar",
      contact: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
    },
    form: {
      title: "Konsultatsiyaga yozilish",
      subtitle: "Kontaktlaringizni qoldiring — ish kuni davomida qo‘ng‘iroq qilamiz.",
      name: "Ism",
      namePh: "Ismingiz",
      phone: "Telefon",
      phonePh: "+998 __ ___ __ __",
      service: "Xizmat",
      servicePh: "Xizmatni tanlang",
      message: "Xabar (ixtiyoriy)",
      messagePh: "Istaklaringiz haqida yozing",
      submit: "Arizani yuborish",
      sending: "Klinika bilan bog‘lanmoqda…",
      successTitle: "Ariza yuborildi!",
      successText: "Rahmat! Administratorimiz tez orada siz bilan bog‘lanadi.",
      close: "Yopish",
      errName: "Ismingizni kiriting",
      errPhone: "To‘g‘ri telefon raqamini kiriting",
      errGeneric: "Yuborib bo‘lmadi. Qayta urinib ko‘ring yoki qo‘ng‘iroq qiling.",
    },
    service: {
      back: "Barcha muolajalar",
      science: "Ilm",
      ritual: "Muolaja",
      outcome: "Natija",
      price: "Narxi",
      duration: "Davomiyligi",
      recovery: "Tiklanish",
      cta: "Shaxsiy konsultatsiya so‘rash",
    },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("dv-lang") as Lang | null) : null;
    if (saved === "ru" || saved === "uz") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("dv-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
