import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      toggle: "HEB",
    },
    hero: {
      label: "Interior Designer",
      tagline1: "Functional. Elegant. Unique.",
      tagline2:
        "Interior designer and planner specializing in private and commercial spaces. Each project is built completely customized to the clients needs, style and dreams, with attention to the smallest details.",
      subtitle:
        "Creating timeless spaces that harmonize elegance with everyday living.",
      cta: "Projects",
    },
    about: {
      label: "About",
      title: "Crafting Spaces with Soul",
      p1: "Interior designer and planner. Studio location: Rishon Lezion. Graduated with a B.Design degree in Design and Innovation from the College of Management (2018-2022).",
      p2: "Specializes in planning and designing private and commercial spaces, homes, apartments, businesses, shops and offices - while combining creative thinking with technical and functional solutions.",
      p3: "Draws inspiration from the challenges of the field and sees each project as an opportunity to create a unique and personalized response to the client's needs. Believes that the small details are what make the big difference, and is here to accompany you throughout all types of processes - from the idea stage to the final result, with meticulousness, attention to detail and attention to detail.",
      cta: "Read More",
      years: "Years Experience",
      completed: "Projects Completed",
      happy: "Happy Clients",
    },
    services: {
      label: "What I Offer",
      title: "Services",
      subtitle:
        "Comprehensive design and planning services tailored to each client and project type.",
      items: [
        [
          "Full tenant change process",
          "Comprehensive support from the stage of purchasing the apartment to entering the new home. The process includes managing the relationship with the contractor, support for meetings with all project suppliers, preparation and submission of plans, and availability throughout the process. After receiving the key, the support continues until the design and furnishing of the apartment is completed, including furniture planning and shopping days.",
        ],
        [
          "Renovation process",
          "Professional support for planning and managing the renovation. The stage includes receiving plans from a surveyor, preparation of a full set of plans, support in submitting them to contractors for price quotes, as well as shopping days to select materials and complementary details.",
        ],
        [
          "Consulting meeting",
          "A focused meeting of up to 3 hours will be held in my office. During the meeting, planning and design solutions are provided, along with tips for dealing with suppliers, recommendations for professionals, and guidance for continuing the independent process.",
        ],
        [
          "Store/Business Design",
          "Planning and designing commercial spaces in accordance with the needs of the business and the brand language. The process is conducted at an efficient and precise work pace, with the understanding that time is a significant resource in the business world. Includes planning, simulations and full support throughout the renovation, in order to enable a smooth and quick establishment of the business.",
        ],
      ],
    },
    portfolio: { label: "Selected Works", title: "Projects" },
    footer: {
      title: "Follow Our Journey",
      instagram: "Instagram",
      address: "Tel Aviv, Israel",
    },
    projectDetail: {
      back: "Back to All Projects",
      notFound: "Project not found",
      backHome: "Back to home",
    },
    notFound: {
      title: "Page not found",
      text: "The page you are looking for does not exist or has been moved.",
      back: "Back Home",
    },
    projectMeta: {
      "Full Renovation": "Full Renovation",
      "Interior Design": "Interior Design",
      Commercial: "Commercial",
      "New Build": "New Build",
      "Tel Aviv": "Tel Aviv",
      Jaffa: "Jaffa",
      "Ramat Gan": "Ramat Gan",
      Herzliya: "Herzliya",
    },
  },
  he: {
    nav: {
      home: "בית",
      about: "אודות",
      services: "שירותים",
      projects: "פרויקטים",
      contact: "צור קשר",
      toggle: "ENG",
    },
    hero: {
      label: "מעצבת פנים",
      tagline1: "פונקציונלי. אלגנטי. ייחודי.",
      tagline2:
        "מתכננת ומעצבת פנים המתמחה בחללים פרטיים ומסחריים. כל פרויקט נבנה בהתאמה אישית מלאה לצרכים, לסגנון ולחלום של הלקוח, תוך הקפדה על הפרטים הקטנים.",
      subtitle: "יוצרת חללים על-זמניים המשלבים אלגנטיות עם נוחות יומיומית.",
      cta: "פרויקטים",
    },
    about: {
      label: "אודות ",
      // title: "עיצוב חללים עם נשמה",
      p1: "מתכננת ומעצבת פנים.\nמיקום הסטודיו: ראשון לציון.\n בוגרת תואר בעיצוב וחדשנות B.Design מהמכללה למנהל (2018-2022).",
      p2: "מתמחה בתכנון ועיצוב חללים פרטיים ומסחריים, בתים, דירות, עסקים, חנויות ומשרדים - תוך שילוב בין חשיבה יצירתית לפתרונות טכניים ופונקציונליים.",
      p3: "שואבת השראה מאתגרי התחום ורואה בכל פרויקט הזדמנות ליצירת מענה ייחודי ומותאם אישית לצרכי הלקוח. מאמינה כי הפרטים הקטנים הם אלו שעושים את ההבדל הגדול, וכאן כדי ללוות אתכם לאורך בכל סוגי התהליכים- משלב הרעיון ועד לתוצאה הסופית, בקפדנות, הקשבה וירידה לפרטים.",
      cta: "קראי עוד",
      years: "שנות ניסיון",
      completed: "פרויקטים שבוצעו",
      happy: "לקוחות מרוצים",
    },
    services: {
      label: "מה אני מציעה",
      title: "שירותים",
      subtitle: "שירותי עיצוב אישיים לחללים פרטיים ומסחריים בוטיקיים.",
      items: [
        [
          "תכנון ועיצוב פנים",
          "פיתוח קונספט מלא, לוחות השראה ותכנון מפורט המותאם לסגנון החיים שלך.",
        ],
        [
          "ניהול שיפוץ",
          "ליווי וניהול תהליך השיפוץ כולל תיאום בעלי מקצוע ובחירת חומרים.",
        ],
        [
          "סטיילינג והלבשת הבית",
          "בחירה מדויקת של ריהוט, תאורה, אמנות וטקסטיל למראה שלם והרמוני.",
        ],
        [
          "הדמיות תלת-ממד",
          "הדמיות איכותיות שמאפשרות לראות את התוצאה עוד לפני תחילת העבודה.",
        ],
      ],
    },
    portfolio: { label: "עבודות נבחרות", title: "פרויקטים" },
    footer: {
      title: "עקבו אחרינו",
      instagram: "אינסטגרם",
      address: "תל אביב, ישראל",
    },
    projectDetail: {
      back: "חזרה לכל הפרויקטים",
      notFound: "הפרויקט לא נמצא",
      backHome: "חזרה לדף הבית",
    },
    notFound: {
      title: "העמוד לא נמצא",
      text: "העמוד שחיפשת אינו קיים או הועבר.",
      back: "חזרה לדף הבית",
    },
    projectMeta: {
      "Full Renovation": "שיפוץ מלא",
      "Interior Design": "עיצוב פנים",
      Commercial: "מסחרי",
      "New Build": "בניה חדשה",
      "Tel Aviv": "תל אביב",
      Jaffa: "יפו",
      "Ramat Gan": "רמת גן",
      Herzliya: "הרצליה",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("tbid_lang") || "en",
  );

  useEffect(() => {
    localStorage.setItem("tbid_lang", language);
    document.documentElement.lang = language === "he" ? "he" : "en";
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () =>
        setLanguage((prev) => (prev === "en" ? "he" : "en")),
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
