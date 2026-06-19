import type { Locale } from "./config";

export type HomepageCopy = {
  dir: "ltr" | "rtl";
  nav: {
    home: string;
    services: string;
    profile: string;
    request: string;
    contract: string;
    whatsapp: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    badges: string[];
    cta: string;
    imageAlt: string;
  };
  credentials: {
    eyebrow: string;
    cards: Array<{
      title: string;
      subtitle: string;
      details: string;
    }>;
    tags: string[];
  };
  audience: {
    eyebrow: string;
    left: {
      badge: string;
      title: string;
      description: string;
      tags: string[];
      linkText: string;
    };
    right: {
      badge: string;
      title: string;
      description: string;
      tags: string[];
      linkText: string;
    };
    images: {
      leftAlt: string;
      rightAlt: string;
    };
  };
  competitive: {
    eyebrow: string;
    quote: string;
    cards: Array<{
      title: string;
      subtitle: string;
      description: string[];
      footer: string;
    }>;
  };
  howWork: {
    eyebrow: string;
    steps: Array<{
      n: string;
      title: string;
      subtitle: string;
      active?: "green" | "blue";
    }>;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    ctaNote: string;
  };
  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
    copyright: string;
    vat: string;
  };
  seo: {
    title: string;
    description: string;
    ogAlt: string;
  };
};

export const homepageCopy: Record<Locale, HomepageCopy> = {
  it: {
    dir: "ltr",
    nav: {
      home: "Home",
      services: "Servizi",
      profile: "Profilo",
      request: "Richiesta",
      contract: "Contratto",
      whatsapp: "WhatsApp",
      language: "Lingua",
    },
    hero: {
      eyebrow: "OSS · Lago di Como / Lecco / Valtellina / Milano",
      title:
        "Cerchi un supporto sanitario affidabile di cui poterti fidare?\nNon solo disponibile, ma davvero professionale.",
      description:
        "Assistenza domiciliare strutturata per anziani, persone con disabilità e minori con bisogni speciali. Approccio umano, metodo professionale e presenza locale in Lombardia.",
      badges: [
        "Professionista OSS",
        "Assistenza domiciliare in Lombardia",
        "Oltre 18 anni di esperienza",
        "Assistenza individuale",
      ],
      cta: "Richiedi informazioni",
      imageAlt:
        "Ghassen Mansouri, professionista OSS per assistenza domiciliare a Lecco, Como e Milano",
    },
    credentials: {
      eyebrow: "Competenze e qualifiche",
      cards: [
        {
          title: "Oltre 8 anni",
          subtitle: "Area socio-sanitaria",
          details: "Ospedale · RSA · RSD · Comunità protetta",
        },
        {
          title: "Oltre 10 anni",
          subtitle: "Hospitality & CX",
          details: "Crociera · Lusso · SaaS · Viaggi",
        },
        {
          title: "5",
          subtitle: "Lingue parlate",
          details: "IT · EN · FR · AR · DE",
        },
        {
          title: "3",
          subtitle: "Certificazioni sanitarie",
          details: "OSS · BLSD · HACCP",
        },
      ],
      tags: [
        "OSS — Operatore Socio-Sanitario",
        "BLSD — Rianimazione cardiopolmonare",
        "HACCP — Sicurezza alimentare",
      ],
    },
    audience: {
      eyebrow: "A chi mi rivolgo",
      left: {
        badge: "Famiglie del territorio — Lago di Como / Lecco / Valtellina",
        title: "Famiglie italiane sul territorio",
        description:
          "Per famiglie italiane che cercano un professionista dedicato per assistere anziani, persone con disabilità o minori con bisogni speciali nelle attività quotidiane.",
        tags: [
          "Anziani",
          "Persone con disabilità",
          "Minori",
          "Igiene",
          "Mobilizzazione",
          "Compagnia",
          "Sorveglianza",
        ],
        linkText: "Scopri i servizi →",
      },
      right: {
        badge: "Clienti internazionali — expat e soggiorni temporanei",
        title: "Assistenza strutturata senza barriere linguistiche",
        description:
          "Per famiglie expat che cercano un professionista attento e affidabile per un supporto domiciliare sul Lago di Como, a Lecco o a Milano.",
        tags: [
          "Genitori anziani",
          "Disabilità",
          "Bambini",
          "Soggiorni temporanei",
          "Report alla famiglia",
          "Italiano",
        ],
        linkText: "Vai ai servizi →",
      },
      images: {
        leftAlt: "Assistenza domiciliare per anziani sul Lago di Como",
        rightAlt:
          "Professionista OSS per supporto familiare e assistenza domiciliare",
      },
    },
    competitive: {
      eyebrow: "Vantaggi concreti",
      quote: "«Approccio umano. Struttura professionale. Nessun compromesso.»",
      cards: [
        {
          title: "Assistenza socio-sanitaria",
          subtitle: "Professionista OSS certificato",
          description: [
            "Supporto nelle attività di cura personalizzata a domicilio.",
          ],
          footer: "Ospedale · RSA · RSD · Comunità protetta",
        },
        {
          title: "Hospitality & CX",
          subtitle: "Esperienza cliente",
          description: [
            "Oltre dieci anni in contesti con standard relazionali internazionali.",
            "Servizio orientato alla persona e alla qualità dell’esperienza.",
          ],
          footer: "Crociere · Luxury retail · Viaggi e leisure",
        },
        {
          title: "×5",
          subtitle: "Comunicazione multilingue",
          description: ["IT · EN · FR · AR · DE.", "Nessuna barriera linguistica."],
          footer: "18 anni in contesti multiculturali",
        },
      ],
    },
    howWork: {
      eyebrow: "Come lavoro",
      steps: [
        { n: "1", title: "Richiesta", subtitle: "Modulo online", active: "green" },
        { n: "2", title: "Valutazione", subtitle: "Analisi", active: "blue" },
        { n: "3", title: "Colloquio", subtitle: "Chiamata conoscitiva" },
        { n: "4", title: "Contratto", subtitle: "Firma" },
        { n: "5", title: "Avvio", subtitle: "Prima settimana" },
        { n: "6", title: "Erogazione", subtitle: "Assistenza" },
        { n: "7", title: "Continuità", subtitle: "Report" },
      ],
      ctaEyebrow: "Pronto a valutare la tua richiesta",
      ctaTitle:
        "Raccontami le tue esigenze, valuto con attenzione come aiutarti al meglio.",
      ctaDescription:
        "Compila il modulo con cura. Valuto ogni caso in modo individuale: distanza, profilo, bisogni e compatibilità.",
      ctaButton: "Invia la richiesta →",
      ctaNote:
        "Nessun obbligo. Nessuna risposta automatica. Solo una valutazione professionale.",
    },
    footer: {
      description:
        "Professionista OSS indipendente · Lago di Como – Lecco / Valtellina / Milano",
      navigationTitle: "Navigazione",
      contactTitle: "Contatti",
      copyright: "© {year} Accanto. Tutti i diritti riservati.",
      vat: "P.IVA 01103920144",
    },
    seo: {
      title: "Accanto — Assistenza domiciliare OSS a Lecco, Como e Milano",
      description:
        "Sono Ghassen Mansouri, OSS professionista indipendente. Assistenza domiciliare strutturata per anziani, persone con disabilità e minori con bisogni speciali nel Lago di Como, a Lecco, Sondrio e Milano.",
      ogAlt: "Accanto — Assistenza domiciliare OSS",
    },
  },

  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      services: "Services",
      profile: "Profile",
      request: "Request",
      contract: "Contract",
      whatsapp: "WhatsApp",
      language: "Language",
    },
    hero: {
      eyebrow: "OSS · Lake Como / Lecco / Valtellina / Milan",
      title:
        "Looking for reliable healthcare support you can trust?\nNot just available, but truly professional.",
      description:
        "Structured home care for older adults, people with disabilities, and minors with special needs. Human approach, professional method, and local presence in Lombardy.",
      badges: [
        "Independent OSS professional",
        "Home care in Lombardy",
        "18+ years of experience",
        "Individual care",
      ],
      cta: "Request information",
      imageAlt:
        "Ghassen Mansouri, OSS professional for home care in Lecco, Como and Milan",
    },
    credentials: {
      eyebrow: "Skills and qualifications",
      cards: [
        {
          title: "8+ years",
          subtitle: "Health & social care",
          details: "Hospital · RSA · RSD · Protected community",
        },
        {
          title: "10+ years",
          subtitle: "Hospitality & CX",
          details: "Cruise · Luxury · SaaS · Travel",
        },
        {
          title: "5",
          subtitle: "Spoken languages",
          details: "IT · EN · FR · AR · DE",
        },
        {
          title: "3",
          subtitle: "Health certifications",
          details: "OSS · BLSD · HACCP",
        },
      ],
      tags: [
        "OSS — Health & social care operator",
        "BLSD — CPR / resuscitation",
        "HACCP — Food safety",
      ],
    },
    audience: {
      eyebrow: "Who I work with",
      left: {
        badge: "Local families — Lake Como / Lecco / Valtellina",
        title: "Italian families in the area",
        description:
          "For Italian families looking for a dedicated professional to support older adults, people with disabilities, or minors with special needs in everyday activities.",
        tags: [
          "Older adults",
          "People with disabilities",
          "Minors",
          "Hygiene",
          "Mobility support",
          "Companionship",
          "Supervision",
        ],
        linkText: "Explore services →",
      },
      right: {
        badge: "International clients — expats and temporary stays",
        title: "Structured care without language barriers",
        description:
          "For expat families looking for a reliable and attentive professional for home support on Lake Como, in Lecco, or in Milan.",
        tags: [
          "Elderly parents",
          "Disability",
          "Children",
          "Temporary stays",
          "Family updates",
          "Italian",
        ],
        linkText: "Go to services →",
      },
      images: {
        leftAlt: "Home care for older adults on Lake Como",
        rightAlt:
          "OSS professional for family support and home assistance",
      },
    },
    competitive: {
      eyebrow: "Clear advantages",
      quote: "“Human approach. Professional structure. No compromise.”",
      cards: [
        {
          title: "Health & social care",
          subtitle: "Certified OSS professional",
          description: ["Support with personalized care activities at home."],
          footer: "Hospital · RSA · RSD · Protected community",
        },
        {
          title: "Hospitality & CX",
          subtitle: "Client experience",
          description: [
            "More than ten years in environments with international relational standards.",
            "Service focused on the person and the quality of the experience.",
          ],
          footer: "Cruises · Luxury retail · Travel & leisure",
        },
        {
          title: "×5",
          subtitle: "Multilingual communication",
          description: ["IT · EN · FR · AR · DE.", "No language barrier."],
          footer: "18 years in multicultural environments",
        },
      ],
    },
    howWork: {
      eyebrow: "How I work",
      steps: [
        { n: "1", title: "Request", subtitle: "Online form", active: "green" },
        { n: "2", title: "Evaluation", subtitle: "Assessment", active: "blue" },
        { n: "3", title: "Interview", subtitle: "Intro call" },
        { n: "4", title: "Contract", subtitle: "Signature" },
        { n: "5", title: "Start", subtitle: "First week" },
        { n: "6", title: "Delivery", subtitle: "Care support" },
        { n: "7", title: "Continuity", subtitle: "Report" },
      ],
      ctaEyebrow: "Ready to review your request",
      ctaTitle:
        "Tell me what you need, and I will carefully assess how to help you best.",
      ctaDescription:
        "Fill out the form carefully. I evaluate each case individually: distance, profile, needs, and compatibility.",
      ctaButton: "Send request →",
      ctaNote:
        "No obligation. No automated answer. Only a professional evaluation.",
    },
    footer: {
      description:
        "Independent OSS professional · Lake Como – Lecco / Valtellina / Milan",
      navigationTitle: "Navigation",
      contactTitle: "Contacts",
      copyright: "© {year} Accanto. All rights reserved.",
      vat: "VAT 01103920144",
    },
    seo: {
      title: "Accanto — OSS home care in Lecco, Como and Milan",
      description:
        "I am Ghassen Mansouri, an independent OSS professional. Structured home care for older adults, people with disabilities, and minors with special needs in Lake Como, Lecco, Sondrio, and Milan.",
      ogAlt: "Accanto — OSS home care",
    },
  },

  fr: {
    dir: "ltr",
    nav: {
      home: "Accueil",
      services: "Services",
      profile: "Profil",
      request: "Demande",
      contract: "Contrat",
      whatsapp: "WhatsApp",
      language: "Langue",
    },
    hero: {
      eyebrow: "OSS · Lac de Côme / Lecco / Valteline / Milan",
      title:
        "Vous cherchez un accompagnement de santé fiable sur lequel compter ?\nPas seulement disponible, mais vraiment professionnel.",
      description:
        "Soins à domicile structurés pour les personnes âgées, les personnes en situation de handicap et les mineurs ayant des besoins spécifiques. Approche humaine, méthode professionnelle et présence locale en Lombardie.",
      badges: [
        "Professionnel OSS indépendant",
        "Soins à domicile en Lombardie",
        "18+ ans d’expérience",
        "Accompagnement individuel",
      ],
      cta: "Demander des informations",
      imageAlt:
        "Ghassen Mansouri, professionnel OSS pour l’assistance à domicile à Lecco, Côme et Milan",
    },
    credentials: {
      eyebrow: "Compétences et qualifications",
      cards: [
        {
          title: "8+ ans",
          subtitle: "Secteur socio-sanitaire",
          details: "Hôpital · RSA · RSD · Communauté protégée",
        },
        {
          title: "10+ ans",
          subtitle: "Hospitality & CX",
          details: "Croisière · Luxe · SaaS · Voyage",
        },
        {
          title: "5",
          subtitle: "Langues parlées",
          details: "IT · EN · FR · AR · DE",
        },
        {
          title: "3",
          subtitle: "Certifications santé",
          details: "OSS · BLSD · HACCP",
        },
      ],
      tags: [
        "OSS — Opérateur socio-sanitaire",
        "BLSD — Réanimation cardio-pulmonaire",
        "HACCP — Sécurité alimentaire",
      ],
    },
    audience: {
      eyebrow: "À qui je m’adresse",
      left: {
        badge: "Familles locales — Lac de Côme / Lecco / Valteline",
        title: "Familles italiennes sur le territoire",
        description:
          "Pour les familles italiennes qui recherchent un professionnel dédié pour accompagner les personnes âgées, les personnes en situation de handicap ou les mineurs ayant des besoins spécifiques dans les activités quotidiennes.",
        tags: [
          "Personnes âgées",
          "Personnes handicapées",
          "Mineurs",
          "Hygiène",
          "Mobilisation",
          "Compagnie",
          "Surveillance",
        ],
        linkText: "Découvrir les services →",
      },
      right: {
        badge: "Clients internationaux — expatriés et séjours temporaires",
        title: "Soins structurés sans barrière linguistique",
        description:
          "Pour les familles expatriées qui cherchent un professionnel fiable et attentif pour un accompagnement à domicile sur le lac de Côme, à Lecco ou à Milan.",
        tags: [
          "Parents âgés",
          "Handicap",
          "Enfants",
          "Séjours temporaires",
          "Compte rendu à la famille",
          "Italien",
        ],
        linkText: "Aller aux services →",
      },
      images: {
        leftAlt: "Assistance à domicile pour les personnes âgées sur le lac de Côme",
        rightAlt:
          "Professionnel OSS pour le soutien familial et l’assistance à domicile",
      },
    },
    competitive: {
      eyebrow: "Avantages concrets",
      quote: "« Approche humaine. Structure professionnelle. Aucun compromis. »",
      cards: [
        {
          title: "Soins socio-sanitaires",
          subtitle: "Professionnel OSS certifié",
          description: ["Soutien pour les activités de soins personnalisés à domicile."],
          footer: "Hôpital · RSA · RSD · Communauté protégée",
        },
        {
          title: "Hospitality & CX",
          subtitle: "Expérience client",
          description: [
            "Plus de dix ans dans des environnements aux standards relationnels internationaux.",
            "Service centré sur la personne et la qualité de l’expérience.",
          ],
          footer: "Croisières · Retail de luxe · Voyages et loisirs",
        },
        {
          title: "×5",
          subtitle: "Communication multilingue",
          description: ["IT · EN · FR · AR · DE.", "Aucune barrière linguistique."],
          footer: "18 ans dans des contextes multiculturels",
        },
      ],
    },
    howWork: {
      eyebrow: "Ma méthode",
      steps: [
        { n: "1", title: "Demande", subtitle: "Formulaire en ligne", active: "green" },
        { n: "2", title: "Évaluation", subtitle: "Analyse", active: "blue" },
        { n: "3", title: "Entretien", subtitle: "Appel découverte" },
        { n: "4", title: "Contrat", subtitle: "Signature" },
        { n: "5", title: "Démarrage", subtitle: "Première semaine" },
        { n: "6", title: "Prestation", subtitle: "Accompagnement" },
        { n: "7", title: "Continuité", subtitle: "Compte rendu" },
      ],
      ctaEyebrow: "Prêt à évaluer votre demande",
      ctaTitle:
        "Expliquez vos besoins, j’évaluerai avec attention comment vous aider au mieux.",
      ctaDescription:
        "Remplissez le formulaire avec soin. J’évalue chaque cas individuellement : distance, profil, besoins et compatibilité.",
      ctaButton: "Envoyer la demande →",
      ctaNote:
        "Sans obligation. Sans réponse automatique. Seulement une évaluation professionnelle.",
    },
    footer: {
      description:
        "Professionnel OSS indépendant · Lac de Côme – Lecco / Valteline / Milan",
      navigationTitle: "Navigation",
      contactTitle: "Contacts",
      copyright: "© {year} Accanto. Tous droits réservés.",
      vat: "TVA 01103920144",
    },
    seo: {
      title: "Accanto — Soins à domicile OSS à Lecco, Côme et Milan",
      description:
        "Je suis Ghassen Mansouri, professionnel OSS indépendant. Soins à domicile structurés pour les personnes âgées, les personnes en situation de handicap et les mineurs ayant des besoins spécifiques, dans la région du lac de Côme, à Lecco, Sondrio et Milan.",
      ogAlt: "Accanto — Soins à domicile OSS",
    },
  },

  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      profile: "الملف",
      request: "طلب",
      contract: "العقد",
      whatsapp: "واتساب",
      language: "اللغة",
    },
    hero: {
      eyebrow: "OSS · بحيرة كومو / ليكو / فالتيلينا / ميلانو",
      title:
        "هل تبحث عن دعم صحي موثوق يمكنك الاعتماد عليه؟\nليس متاحًا فقط، بل احترافيًا بحق.",
      description:
        "رعاية منزلية منظمة لكبار السن، وللأشخاص ذوي الإعاقة، وللقُصّر ذوي الاحتياجات الخاصة. نهج إنساني، طريقة مهنية، وحضور محلي في لومبارديا.",
      badges: [
        "مختص OSS مستقل",
        "رعاية منزلية في لومبارديا",
        "أكثر من 18 سنة خبرة",
        "رعاية فردية",
      ],
      cta: "اطلب المعلومات",
      imageAlt:
        "غسان منصوري، مختص OSS للرعاية المنزلية في ليكو وكومو وميلانو",
    },
    credentials: {
      eyebrow: "المهارات والمؤهلات",
      cards: [
        {
          title: "أكثر من 8 سنوات",
          subtitle: "القطاع الصحي والاجتماعي",
          details: "مستشفى · RSA · RSD · مجتمع محمي",
        },
        {
          title: "أكثر من 10 سنوات",
          subtitle: "الضيافة وتجربة العملاء",
          details: "الرحلات البحرية · الفخامة · SaaS · السفر",
        },
        {
          title: "5",
          subtitle: "اللغات المتحدث بها",
          details: "IT · EN · FR · AR · DE",
        },
        {
          title: "3",
          subtitle: "شهادات صحية",
          details: "OSS · BLSD · HACCP",
        },
      ],
      tags: [
        "OSS — عامل صحي اجتماعي",
        "BLSD — الإنعاش القلبي الرئوي",
        "HACCP — سلامة الغذاء",
      ],
    },
    audience: {
      eyebrow: "لمن أقدّم خدماتي",
      left: {
        badge: "العائلات المحلية — بحيرة كومو / ليكو / فالتيلينا",
        title: "العائلات الإيطالية في المنطقة",
        description:
          "للعائلات الإيطالية التي تبحث عن مختص مكرّس لمساعدة كبار السن أو ذوي الإعاقة أو القُصّر ذوي الاحتياجات الخاصة في الأنشطة اليومية.",
        tags: [
          "كبار السن",
          "ذوو الإعاقة",
          "القُصّر",
          "النظافة",
          "المساعدة في الحركة",
          "الرفقة",
          "الإشراف",
        ],
        linkText: "استكشف الخدمات →",
      },
      right: {
        badge: "العملاء الدوليون — المقيمون مؤقتًا والمغتربون",
        title: "رعاية منظمة بدون حواجز لغوية",
        description:
          "للعائلات المغتربة التي تبحث عن مختص موثوق ومهتم للدعم المنزلي في بحيرة كومو أو ليكو أو ميلانو.",
        tags: [
          "والدان مسنّان",
          "إعاقة",
          "أطفال",
          "إقامات مؤقتة",
          "تقارير للعائلة",
          "الإيطالية",
        ],
        linkText: "اذهب إلى الخدمات →",
      },
      images: {
        leftAlt: "رعاية منزلية لكبار السن في بحيرة كومو",
        rightAlt: "مختص OSS للدعم العائلي والرعاية المنزلية",
      },
    },
    competitive: {
      eyebrow: "مزايا واضحة",
      quote: "«نهج إنساني. تنظيم مهني. بلا تنازلات.»",
      cards: [
        {
          title: "الرعاية الصحية والاجتماعية",
          subtitle: "مختص OSS معتمد",
          description: ["دعم في أنشطة الرعاية الشخصية في المنزل."],
          footer: "مستشفى · RSA · RSD · مجتمع محمي",
        },
        {
          title: "الضيافة وتجربة العملاء",
          subtitle: "خبرة العميل",
          description: [
            "أكثر من عشر سنوات في بيئات ذات معايير علاقات دولية.",
            "خدمة تركز على الشخص وعلى جودة التجربة.",
          ],
          footer: "الرحلات البحرية · التجزئة الفاخرة · السفر والترفيه",
        },
        {
          title: "×5",
          subtitle: "تواصل متعدد اللغات",
          description: ["IT · EN · FR · AR · DE.", "لا توجد عوائق لغوية."],
          footer: "18 سنة في بيئات متعددة الثقافات",
        },
      ],
    },
    howWork: {
      eyebrow: "كيف أعمل",
      steps: [
        { n: "1", title: "طلب", subtitle: "نموذج عبر الإنترنت", active: "green" },
        { n: "2", title: "تقييم", subtitle: "تحليل", active: "blue" },
        { n: "3", title: "مقابلة", subtitle: "اتصال تعارفي" },
        { n: "4", title: "عقد", subtitle: "توقيع" },
        { n: "5", title: "بدء", subtitle: "الأسبوع الأول" },
        { n: "6", title: "تنفيذ", subtitle: "الرعاية" },
        { n: "7", title: "استمرارية", subtitle: "تقرير" },
      ],
      ctaEyebrow: "جاهز لتقييم طلبك",
      ctaTitle:
        "أخبرني باحتياجاتك، وسأقيّم بعناية كيف أساعدك بأفضل طريقة.",
      ctaDescription:
        "املأ النموذج بعناية. أقيّم كل حالة بشكل فردي: المسافة، الملف الشخصي، الاحتياجات، والتوافق.",
      ctaButton: "أرسل الطلب →",
      ctaNote: "لا التزام. لا رد تلقائي. فقط تقييم مهني.",
    },
    footer: {
      description:
        "مختص OSS مستقل · بحيرة كومو – ليكو / فالتيلينا / ميلانو",
      navigationTitle: "التنقل",
      contactTitle: "التواصل",
      copyright: "© {year} Accanto. جميع الحقوق محفوظة.",
      vat: "الرقم الضريبي 01103920144",
    },
    seo: {
      title: "Accanto — رعاية منزلية OSS في ليكو وكومو وميلانو",
      description:
        "أنا غسان منصوري، مختص OSS مستقل. رعاية منزلية منظمة لكبار السن، وللأشخاص ذوي الإعاقة، وللقُصّر ذوي الاحتياجات الخاصة في منطقة بحيرة كومو وليكو وسوندريو وميلانو.",
      ogAlt: "Accanto — رعاية منزلية OSS",
    },
  },
};

export function getHomepageCopy(locale: Locale) {
  return homepageCopy[locale];
}