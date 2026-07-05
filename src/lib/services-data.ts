import svcBotox from "../assets/svc-botox.jpg";
import svcLaser from "../assets/svc-laser.jpg";
import svcContouring from "../assets/svc-contouring.jpg";
import svcPeels from "../assets/svc-peels.jpg";
import svcMeso from "../assets/svc-meso.jpg";
import svcLip from "../assets/svc-lip.jpg";
import type { Lang } from "./i18n";

export interface ServiceContent {
  name: string;
  tagline: string;
  science: string;
  ritual: string;
  outcome: string;
  price: string;
  duration: string;
  recovery: string;
}

export interface Service {
  id: string;
  image: string;
  priceFrom: string;
  ru: ServiceContent;
  uz: ServiceContent;
}

export const services: Service[] = [
  {
    id: "botox-fillers",
    image: svcBotox,
    priceFrom: "800 000",
    ru: {
      name: "Ботокс и филлеры",
      tagline: "Разглаживание морщин и восстановление объёма",
      science: "Ботулотоксин расслабляет мимические мышцы, а гиалуроновые филлеры восполняют утраченный объём тканей, возвращая коже гладкость и упругость.",
      ritual: "Врач проводит анализ мимики, размечает зоны и вводит препарат тончайшими иглами. Процедура комфортна и занимает считанные минуты.",
      outcome: "Естественное разглаживание морщин, свежий и отдохнувший вид без потери мимики.",
      price: "от 800 000 сум",
      duration: "30–45 минут",
      recovery: "1–2 дня",
    },
    uz: {
      name: "Botoks va fillerlar",
      tagline: "Ajinlarni tekislash va hajmni tiklash",
      science: "Botulotoksin mimik mushaklarni bo‘shashtiradi, gialuron fillerlar esa yo‘qolgan hajmni tiklab, teriga silliqlik va elastiklik qaytaradi.",
      ritual: "Shifokor mimikani tahlil qiladi, zonalarni belgilaydi va eng nozik ignalar bilan preparatni yuboradi. Muolaja qulay va bir necha daqiqa davom etadi.",
      outcome: "Ajinlarning tabiiy tekislanishi, mimikani yo‘qotmasdan tetik va dam olgan ko‘rinish.",
      price: "800 000 so‘mdan",
      duration: "30–45 daqiqa",
      recovery: "1–2 kun",
    },
  },
  {
    id: "laser-therapy",
    image: svcLaser,
    priceFrom: "600 000",
    ru: {
      name: "Лазерная терапия",
      tagline: "Обновление и сияние кожи",
      science: "Лазерное излучение стимулирует выработку коллагена и мягко устраняет пигментацию, сосудистые дефекты и неровный тон.",
      ritual: "После очищения кожи специалист подбирает параметры лазера индивидуально и обрабатывает целевые зоны под контролем охлаждения.",
      outcome: "Ровный тон, уменьшение пигментации и заметное сияние кожи.",
      price: "от 600 000 сум",
      duration: "40–60 минут",
      recovery: "2–4 дня",
    },
    uz: {
      name: "Lazer terapiyasi",
      tagline: "Terini yangilash va porlash",
      science: "Lazer nuri kollagen ishlab chiqarishni rag‘batlantiradi va pigmentatsiya, qon tomir nuqsonlari hamda notekis rangni yumshoq bartaraf etadi.",
      ritual: "Teri tozalangach, mutaxassis lazer parametrlarini individual tanlaydi va sovutish nazorati ostida maqsadli zonalarni qayta ishlaydi.",
      outcome: "Tekis rang, pigmentatsiyaning kamayishi va terining sezilarli porlashi.",
      price: "600 000 so‘mdan",
      duration: "40–60 daqiqa",
      recovery: "2–4 kun",
    },
  },
  {
    id: "contouring",
    image: svcContouring,
    priceFrom: "1 200 000",
    ru: {
      name: "Контурная пластика",
      tagline: "Гармоничные черты лица",
      science: "Инъекционное моделирование подчёркивает скулы, линию подбородка и овал лица, восстанавливая естественные пропорции.",
      ritual: "Врач составляет карту лица, обсуждает желаемый результат и деликатно моделирует контуры сертифицированными препаратами.",
      outcome: "Чёткий овал, гармоничные черты и уверенный, отдохнувший вид.",
      price: "от 1 200 000 сум",
      duration: "45–60 минут",
      recovery: "2–3 дня",
    },
    uz: {
      name: "Kontur plastikasi",
      tagline: "Yuzning uyg‘un chiziqlari",
      science: "In’ektsion modellashtirish yonoq, iyak chizig‘i va yuz ovalini ta’kidlab, tabiiy nisbatlarni tiklaydi.",
      ritual: "Shifokor yuz xaritasini tuzadi, kutilgan natijani muhokama qiladi va sertifikatlangan preparatlar bilan konturlarni nozik modellaydi.",
      outcome: "Aniq oval, uyg‘un chiziqlar va ishonchli, dam olgan ko‘rinish.",
      price: "1 200 000 so‘mdan",
      duration: "45–60 daqiqa",
      recovery: "2–3 kun",
    },
  },
  {
    id: "chemical-peels",
    image: svcPeels,
    priceFrom: "400 000",
    ru: {
      name: "Химические пилинги",
      tagline: "Обновление и текстура кожи",
      science: "Профессиональные кислотные составы деликатно отшелушивают ороговевший слой, стимулируя обновление клеток.",
      ritual: "Кожа очищается, наносится подобранный пилинг, а затем успокаивающий и восстанавливающий уход.",
      outcome: "Гладкая текстура, сужение пор и здоровое сияние.",
      price: "от 400 000 сум",
      duration: "30–40 минут",
      recovery: "3–5 дней",
    },
    uz: {
      name: "Kimyoviy pilinglar",
      tagline: "Teri yangilanishi va teksturasi",
      science: "Professional kislotali tarkiblar shohlangan qatlamni nozik tozalab, hujayralar yangilanishini rag‘batlantiradi.",
      ritual: "Teri tozalanadi, tanlangan piling surtiladi, so‘ng tinchlantiruvchi va tiklovchi parvarish qo‘llaniladi.",
      outcome: "Silliq tekstura, teshiklarning torayishi va sog‘lom porlash.",
      price: "400 000 so‘mdan",
      duration: "30–40 daqiqa",
      recovery: "3–5 kun",
    },
  },
  {
    id: "mesotherapy",
    image: svcMeso,
    priceFrom: "500 000",
    ru: {
      name: "Мезотерапия",
      tagline: "Питание и увлажнение изнутри",
      science: "Коктейли из витаминов, аминокислот и гиалуроновой кислоты вводятся микроинъекциями для глубокого питания кожи.",
      ritual: "Специалист подбирает состав под задачи кожи и равномерно распределяет его микроиглами.",
      outcome: "Увлажнённая, плотная и сияющая кожа с ровным тоном.",
      price: "от 500 000 сум",
      duration: "40–50 минут",
      recovery: "1–2 дня",
    },
    uz: {
      name: "Mezoterapiya",
      tagline: "Ichkaridan oziqlantirish va namlik",
      science: "Vitaminlar, aminokislotalar va gialuron kislotasi kokteyllari mikroin’ektsiyalar orqali teriga chuqur oziq beradi.",
      ritual: "Mutaxassis teri ehtiyojiga mos tarkibni tanlab, mikroignalar bilan tekis taqsimlaydi.",
      outcome: "Namlangan, zich va porloq teri, tekis rang.",
      price: "500 000 so‘mdan",
      duration: "40–50 daqiqa",
      recovery: "1–2 kun",
    },
  },
  {
    id: "lip-augmentation",
    image: svcLip,
    priceFrom: "900 000",
    ru: {
      name: "Увеличение губ",
      tagline: "Естественный объём и форма",
      science: "Гиалуроновые филлеры мягко корректируют форму и объём губ, сохраняя естественность и подвижность.",
      ritual: "Врач обсуждает желаемую форму, применяет анестезию и деликатно моделирует контур губ.",
      outcome: "Аккуратный объём, симметрия и естественный, ухоженный вид.",
      price: "от 900 000 сум",
      duration: "30–45 минут",
      recovery: "2–3 дня",
    },
    uz: {
      name: "Lablarni kattalashtirish",
      tagline: "Tabiiy hajm va shakl",
      science: "Gialuron fillerlar lablar shakli va hajmini tabiiylik va harakatchanlikni saqlagan holda yumshoq to‘g‘rilaydi.",
      ritual: "Shifokor kutilgan shaklni muhokama qiladi, anesteziya qo‘llaydi va lab konturini nozik modellaydi.",
      outcome: "Ozoda hajm, simmetriya va tabiiy, parvarishlangan ko‘rinish.",
      price: "900 000 so‘mdan",
      duration: "30–45 daqiqa",
      recovery: "2–3 kun",
    },
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function serviceName(s: Service, lang: Lang): string {
  return s[lang].name;
}
