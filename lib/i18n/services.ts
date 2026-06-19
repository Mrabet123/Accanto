import type { Metadata } from "next";
import {
  hreflangByLocale,
  localizedPath,
  locales,
  ogLocaleByLocale,
  type Locale,
} from "./config";

type ServiceCard = {
  icon: string;
  label: string;
  title: string;
  items: string[];
};

type IntlAddition = {
  num: string;
  title: string;
  desc: string;
};

type PricingRow = {
  label: string;
  sub: string;
  value: string;
  eval?: boolean;
};

type ServicesCopy = {
  seo: {
    title: string;
    description: string;
    ogAlt: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: [string, string];
    subtitle: string;
  };
  tabs: {
    local: string;
    intl: string;
  };
  local: {
    cards: ServiceCard[];
    boundary: {
      title: string;
      badge: string;
      intro: string;
      items: string[];
      note: string;
    };
    galleryAlt: [string, string, string];
  };
  intl: {
    additions: IntlAddition[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rows: PricingRow[];
    note: string;
    side: {
      autonomy: {
        title: string;
        text: string;
      };
      activity: {
        title: string;
        text: string;
      };
      duration: {
        title: string;
        text: string;
      };
    };
  };
  cta: {
    text: string;
    button: string;
  };
};

const servicesCopy: Record<Locale, ServicesCopy> = {
  it: {
    seo: {
      title: "Servizi — Accanto Home Care OSS",
      description:
        "Servizi di assistenza domiciliare strutturati per anziani, persone con disabilità e minori con bisogni speciali.",
      ogAlt: "Anteprima dei servizi Accanto Home Care",
      keywords: [
        "assistenza domiciliare",
        "OSS",
        "servizi anziani",
        "supporto disabilità",
        "assistenza minori",
        "home care",
      ],
    },
    hero: {
      eyebrow: "Servizi",
      title: ["Cosa offro.", "Come lavoro. Cosa non è incluso."],
      subtitle:
        "Ogni sessione di assistenza è strutturata, documentata e svolta nel perimetro professionale certificato OSS.",
    },
    tabs: {
      local: "Famiglie locali — Lago di Como · Lecco · Valtellina",
      intl: "Clienti internazionali — expat e soggiorni temporanei",
    },
    local: {
      cards: [
        {
          icon: "OSS",
          label: "Anziani",
          title: "Servizi di assistenza agli anziani",
          items: [
            "Assistenza all’igiene personale per anziani (bagno, cura della persona, igiene orale)",
            "Supporto nell’abbigliamento e nella mobilità per anziani (trasferimenti, accompagnamento nella deambulazione, prevenzione cadute)",
            "Promemoria per la terapia farmacologica negli anziani (senza somministrazione)",
            "Preparazione dei pasti per anziani (in linea con la dieta, alimentazione assistita se necessaria)",
            "Compagnia per anziani (riduzione della solitudine, stimolazione cognitiva)",
            "Monitoraggio di base dei parametri vitali (temperatura, osservazione dello stato generale)",
            "Supporto post-ricovero per anziani (assistenza alla ripresa a domicilio)",
            "Supporto nell’assistenza ad Alzheimer e demenza (routine, supervisione)",
            "Piccole attività domestiche per la cura dell’ambiente (pulizia leggera, mantenimento dell’igiene)",
            "Assistenza nelle attività quotidiane della vita giornaliera (ADL)",
          ],
        },
        {
          icon: "OSS",
          label: "Persone con disabilità",
          title: "Servizi di supporto alla disabilità",
          items: [
            "Assistenza alla cura personale per persone con disabilità",
            "Supporto alla mobilità per persone con disabilità (sedia a rotelle, trasferimenti)",
            "Supporto alle attività quotidiane (ADL e IADL)",
            "Supporto alla vita autonoma a domicilio",
            "Assistenza all’igiene personale e alla gestione della continenza",
            "Preparazione dei pasti adattata alle esigenze specifiche",
            "Supporto emotivo e compagnia",
            "Coordinamento con la famiglia e con i professionisti sanitari",
            "Mantenimento di un ambiente domestico sicuro (prevenzione dei rischi)",
            "Supporto in caso di disabilità fisica o ridotta autonomia",
          ],
        },
        {
          icon: "OSS",
          label: "Minori",
          title: "Assistenza per minori con bisogni speciali (supporto non clinico)",
          items: [
            "Supporto alla routine quotidiana per bambini con bisogni speciali",
            "Assistenza all’igiene personale (adeguata all’età)",
            "Supervisione e monitoraggio della sicurezza",
            "Supporto alle attività di sviluppo (non terapeutiche)",
            "Assistenza durante i pasti e nella routine quotidiana",
            "Collaborazione con i genitori e con i terapisti",
            "Rassicurazione emotiva e compagnia strutturata",
            "Supporto per bambini con autismo o disabilità cognitive (non clinico)",
            "Preparazione alla scuola e supporto alla routine",
            "Gestione di un ambiente domestico sicuro",
          ],
        },
      ],
      boundary: {
        title: "Cosa non è incluso — confini professionali",
        badge: "Perimetro OSS",
        intro:
          "Lavoro esclusivamente entro il perimetro OSS certificato. Le attività seguenti sono fuori dal mio ambito e verranno sempre rifiutate:",
        items: [
          "Somministrazione o gestione dei farmaci",
          "Procedure mediche di qualsiasi tipo",
          "Diagnosi cliniche o valutazioni sanitarie",
          "Medicazioni o trattamenti post-operatori",
          "Colloqui psicologici o terapeutici",
          "Assistenza 24 ore con presenza continua — servizio fuori dal mio perimetro professionale e non offerto",
        ],
        note:
          "Qualsiasi situazione che richieda un intervento clinico verrà identificata, segnalata alla famiglia e indirizzata immediatamente al professionista sanitario appropriato.",
      },
      galleryAlt: [
        "Operatore socio-sanitario che supporta una persona nelle attività quotidiane a domicilio",
        "Persona anziana che riceve compagnia e supporto durante un momento di assistenza",
        "Ambiente domestico accogliente con assistenza socio-sanitaria professionale",
      ],
    },
    intl: {
      additions: [
        {
          num: "01",
          title: "Comunicazione nella tua lingua",
          desc: "Tutti gli aggiornamenti alla famiglia vengono forniti nella lingua preferita — italiano, inglese, francese, arabo o tedesco. I report scritti possono essere condivisi da remoto oppure in presenza, secondo preferenza.",
        },
        {
          num: "02",
          title: "Coordinamento remoto con la famiglia",
          desc: "Pensato per famiglie residenti all’estero. Ricevi aggiornamenti strutturati a intervalli concordati — non è necessario essere presenti in Italia per restare sempre informato.",
        },
        {
          num: "03",
          title: "Sensibilità culturale",
          desc: "18 anni in contesti internazionali. Comprendo approcci diversi alla cura, alla privacy e alla comunicazione familiare. Nessuna supposizione. Nessun attrito culturale.",
        },
        {
          num: "04",
          title: "Inserimento per famiglie non residenti",
          desc: "Se non sei presente in Italia all’avvio della collaborazione, il percorso di inserimento viene adattato — colloquio conoscitivo da remoto, documentazione digitale, prima sessione coordinata con un contatto locale se necessario.",
        },
      ],
    },
    pricing: {
      eyebrow: "Tariffe orarie",
      title: "Struttura trasparente dei prezzi.",
      subtitle: "Definite prima della firma del contratto. Nessuna sorpresa.",
      rows: [
        {
          label: "Sessione diurna di assistenza",
          sub: "07:00 – 22:00",
          value: "Da €28/ora",
        },
        {
          label: "Turno notturno — passivo",
          sub: "22:00 – 07:00 · La persona dorme autonomamente",
          value: "€35/ora",
        },
        {
          label: "Turno notturno — attivo",
          sub: "22:00 – 07:00 · Sono richiesti interventi",
          value: "€40/ora",
        },
        {
          label: "Supplemento complessità",
          sub: "Profilo con elevata dipendenza o cura complessa",
          value: "Definito in fase di valutazione",
          eval: true,
        },
        {
          label: "Supplemento distanza",
          sub: "Fuori dalla zona principale (Dervio/Lecco)",
          value: "Valutato in base al perimetro complessivo dell’incarico",
          eval: true,
        },
      ],
      note:
        "Minimo 5 ore consecutive per sessione di assistenza. Nessuna eccezione. Domeniche e festivi conteggiati come giorni ordinari. Tutti i supplementi vengono comunicati al cliente prima della firma del contratto.",
      side: {
        autonomy: {
          title: "Livello di autonomia",
          text: "Autonomo / Semi-autonomo / Non autonomo — incide sulla tariffa base. Definito durante la fase di valutazione.",
        },
        activity: {
          title: "Attività richieste",
          text: "Complessità e intensità degli interventi richiesti — valutate caso per caso durante il colloquio conoscitivo.",
        },
        duration: {
          title: "Durata del supporto",
          text: "Breve / Medio / Lungo termine — valutati caso per caso. Le collaborazioni di lungo periodo ricevono un piano di continuità strutturato.",
        },
      },
    },
    cta: {
      text: "Pronto a contattarmi?",
      button: "Invia la richiesta →",
    },
  },
  en: {
    seo: {
      title: "Services — Accanto Home Care OSS",
      description:
        "Structured home-care services for elderly people, people with disabilities, and minors with special needs.",
      ogAlt: "Accanto Home Care services preview",
      keywords: [
        "home care",
        "OSS",
        "elderly care",
        "disability support",
        "special needs children",
        "care services",
      ],
    },
    hero: {
      eyebrow: "Services",
      title: ["What I offer.", "How I work. What is not included."],
      subtitle:
        "Each care session is structured, documented, and delivered within the certified OSS professional scope.",
    },
    tabs: {
      local: "Local families — Lake Como · Lecco · Valtellina",
      intl: "International clients — expats and temporary stays",
    },
    local: {
      cards: [
        {
          icon: "OSS",
          label: "Elderly",
          title: "Elderly care services",
          items: [
            "Personal hygiene support for elderly people (bath, grooming, oral hygiene)",
            "Help with dressing and mobility for elderly people (transfers, walking support, fall prevention)",
            "Medication therapy reminders for elderly people (without administration)",
            "Meal preparation for elderly people (diet-aligned, assisted feeding if needed)",
            "Companionship for elderly people (reducing loneliness, cognitive stimulation)",
            "Basic vital-sign monitoring (temperature, general condition observation)",
            "Post-hospital support for elderly people (recovery at home)",
            "Support for Alzheimer’s and dementia care (routines, supervision)",
            "Small domestic tasks to keep the environment tidy (light cleaning, hygiene maintenance)",
            "Support with everyday activities of daily living (ADL)",
          ],
        },
        {
          icon: "OSS",
          label: "People with disabilities",
          title: "Disability support services",
          items: [
            "Personal care assistance for people with disabilities",
            "Mobility support for people with disabilities (wheelchair, transfers)",
            "Support with daily activities (ADL and IADL)",
            "Support for independent living at home",
            "Personal hygiene support and continence management",
            "Meal preparation adapted to specific needs",
            "Emotional support and companionship",
            "Coordination with family and healthcare professionals",
            "Maintaining a safe home environment (risk prevention)",
            "Support for physical disability or reduced autonomy",
          ],
        },
        {
          icon: "OSS",
          label: "Minors",
          title: "Care for minors with special needs (non-clinical support)",
          items: [
            "Daily routine support for children with special needs",
            "Personal hygiene assistance (age-appropriate)",
            "Safety supervision and monitoring",
            "Support with development activities (non-therapeutic)",
            "Meal-time and daily routine assistance",
            "Collaboration with parents and therapists",
            "Emotional reassurance and structured companionship",
            "Support for children with autism or cognitive disabilities (non-clinical)",
            "Preparation for school and routine support",
            "Maintaining a safe home environment",
          ],
        },
      ],
      boundary: {
        title: "What is not included — professional boundaries",
        badge: "OSS scope",
        intro:
          "I work strictly within the certified OSS scope. The following activities are outside my field and will always be refused:",
        items: [
          "Administration or management of medication",
          "Any kind of medical procedure",
          "Clinical diagnosis or health assessment",
          "Wound care or post-operative treatment",
          "Psychological or therapeutic sessions",
          "24-hour live-in support — outside my professional scope and not offered",
        ],
        note:
          "Any situation that requires clinical intervention will be identified, reported to the family, and immediately directed to the appropriate healthcare professional.",
      },
      galleryAlt: [
        "An OSS worker supporting a person with daily activities at home",
        "An elderly person receiving companionship and support during care",
        "A welcoming home setting with professional socio-medical care",
      ],
    },
    intl: {
      additions: [
        {
          num: "01",
          title: "Communication in your language",
          desc: "All family updates are provided in the preferred language — Italian, English, French, Arabic, or German. Written reports can be shared remotely or in person, depending on preference.",
        },
        {
          num: "02",
          title: "Remote family coordination",
          desc: "Designed for families living abroad. You receive structured updates at agreed intervals — there is no need to be physically present in Italy to stay informed.",
        },
        {
          num: "03",
          title: "Cultural sensitivity",
          desc: "18 years in international settings. I understand different approaches to care, privacy, and family communication. No assumptions. No cultural friction.",
        },
        {
          num: "04",
          title: "Onboarding for non-resident families",
          desc: "If you are not in Italy when the collaboration starts, onboarding is adapted — remote intro call, digital paperwork, and a first session coordinated with a local contact if needed.",
        },
      ],
    },
    pricing: {
      eyebrow: "Hourly rates",
      title: "Transparent pricing structure.",
      subtitle: "Defined before the contract is signed. No surprises.",
      rows: [
        {
          label: "Day care session",
          sub: "07:00 – 22:00",
          value: "From €28/hour",
        },
        {
          label: "Night shift — passive",
          sub: "22:00 – 07:00 · The person sleeps independently",
          value: "€35/hour",
        },
        {
          label: "Night shift — active",
          sub: "22:00 – 07:00 · Interventions are required",
          value: "€40/hour",
        },
        {
          label: "Complexity supplement",
          sub: "High-dependency or complex care profile",
          value: "Defined during assessment",
          eval: true,
        },
        {
          label: "Distance supplement",
          sub: "Outside the main area (Dervio/Lecco)",
          value: "Assessed according to the overall scope of the assignment",
          eval: true,
        },
      ],
      note:
        "Minimum 5 consecutive hours per care session. No exceptions. Sundays and public holidays are counted as regular days. All supplements are communicated before the contract is signed.",
      side: {
        autonomy: {
          title: "Autonomy level",
          text: "Independent / Semi-independent / Non-independent — affects the base rate. Defined during the assessment phase.",
        },
        activity: {
          title: "Requested activities",
          text: "Complexity and intensity of the requested care interventions — evaluated case by case during the introductory call.",
        },
        duration: {
          title: "Support duration",
          text: "Short / Medium / Long term — evaluated case by case. Long-term collaborations receive a structured continuity plan.",
        },
      },
    },
    cta: {
      text: "Ready to contact me?",
      button: "Send request →",
    },
  },
  fr: {
    seo: {
      title: "Services — Accanto Home Care OSS",
      description:
        "Services d’assistance à domicile structurés pour personnes âgées, personnes en situation de handicap et mineurs avec besoins spécifiques.",
      ogAlt: "Aperçu des services Accanto Home Care",
      keywords: [
        "aide à domicile",
        "OSS",
        "soins aux personnes âgées",
        "soutien handicap",
        "services d’assistance",
        "home care",
      ],
    },
    hero: {
      eyebrow: "Services",
      title: ["Ce que je propose.", "Comment je travaille. Ce qui n’est pas inclus."],
      subtitle:
        "Chaque séance d’assistance est structurée, documentée et réalisée dans le périmètre professionnel certifié OSS.",
    },
    tabs: {
      local: "Familles locales — Lac de Côme · Lecco · Valteline",
      intl: "Clients internationaux — expatriés et séjours temporaires",
    },
    local: {
      cards: [
        {
          icon: "OSS",
          label: "Personnes âgées",
          title: "Services d’assistance aux personnes âgées",
          items: [
            "Aide à l’hygiène personnelle pour les personnes âgées (bain, toilette, hygiène bucco-dentaire)",
            "Soutien pour l’habillage et la mobilité des personnes âgées (transferts, accompagnement à la marche, prévention des chutes)",
            "Rappels pour le traitement médicamenteux des personnes âgées (sans administration)",
            "Préparation des repas pour les personnes âgées (selon le régime, aide à l’alimentation si nécessaire)",
            "Compagnie pour les personnes âgées (réduction de la solitude, stimulation cognitive)",
            "Surveillance de base des signes vitaux (température, observation de l’état général)",
            "Soutien post-hospitalisation pour les personnes âgées (reprise à domicile)",
            "Aide pour Alzheimer et la démence (routine, supervision)",
            "Petites tâches domestiques pour maintenir un environnement propre (nettoyage léger, hygiène)",
            "Aide pour les activités quotidiennes de la vie courante (ADL)",
          ],
        },
        {
          icon: "OSS",
          label: "Personnes en situation de handicap",
          title: "Services de soutien au handicap",
          items: [
            "Assistance à la toilette et aux soins personnels pour les personnes en situation de handicap",
            "Soutien à la mobilité pour les personnes en situation de handicap (fauteuil roulant, transferts)",
            "Aide aux activités quotidiennes (ADL et IADL)",
            "Soutien à l’autonomie à domicile",
            "Aide à l’hygiène personnelle et à la gestion de l’incontinence",
            "Préparation des repas adaptée aux besoins spécifiques",
            "Soutien émotionnel et compagnie",
            "Coordination avec la famille et les professionnels de santé",
            "Maintien d’un environnement domestique sûr (prévention des risques)",
            "Soutien en cas de handicap physique ou d’autonomie réduite",
          ],
        },
        {
          icon: "OSS",
          label: "Mineurs",
          title: "Assistance aux mineurs ayant des besoins spécifiques (soutien non clinique)",
          items: [
            "Soutien à la routine quotidienne pour les enfants ayant des besoins spécifiques",
            "Aide à l’hygiène personnelle (adaptée à l’âge)",
            "Supervision et surveillance de la sécurité",
            "Soutien aux activités de développement (non thérapeutiques)",
            "Aide pendant les repas et la routine quotidienne",
            "Collaboration avec les parents et les thérapeutes",
            "Rassurance émotionnelle et compagnie structurée",
            "Soutien aux enfants autistes ou ayant des troubles cognitifs (non clinique)",
            "Préparation à l’école et soutien à la routine",
            "Gestion d’un environnement domestique sûr",
          ],
        },
      ],
      boundary: {
        title: "Ce qui n’est pas inclus — limites professionnelles",
        badge: "Périmètre OSS",
        intro:
          "Je travaille exclusivement dans le périmètre OSS certifié. Les activités suivantes sont hors de mon champ et seront toujours refusées :",
        items: [
          "Administration ou gestion des médicaments",
          "Tout type de procédure médicale",
          "Diagnostic clinique ou évaluation de santé",
          "Soins des plaies ou traitements post-opératoires",
          "Séances psychologiques ou thérapeutiques",
          "Assistance 24 h sur 24 avec présence continue — hors de mon périmètre professionnel et non proposée",
        ],
        note:
          "Toute situation nécessitant une intervention clinique sera identifiée, signalée à la famille et immédiatement orientée vers le professionnel de santé approprié.",
      },
      galleryAlt: [
        "Un auxiliaire de soins soutenant une personne dans les activités quotidiennes à domicile",
        "Une personne âgée recevant de la compagnie et du soutien pendant un moment d’assistance",
        "Un environnement domestique accueillant avec une assistance socio-médicale professionnelle",
      ],
    },
    intl: {
      additions: [
        {
          num: "01",
          title: "Communication dans votre langue",
          desc: "Toutes les mises à jour à la famille sont fournies dans la langue préférée — italien, anglais, français, arabe ou allemand. Les rapports écrits peuvent être partagés à distance ou en présentiel, selon la préférence.",
        },
        {
          num: "02",
          title: "Coordination familiale à distance",
          desc: "Pensé pour les familles vivant à l’étranger. Vous recevez des mises à jour structurées à intervalles convenus — il n’est pas nécessaire d’être physiquement en Italie pour rester informé.",
        },
        {
          num: "03",
          title: "Sensibilité culturelle",
          desc: "18 ans dans des contextes internationaux. Je comprends des approches différentes des soins, de la vie privée et de la communication familiale. Aucune supposition. Aucun frottement culturel.",
        },
        {
          num: "04",
          title: "Intégration pour les familles non résidentes",
          desc: "Si vous n’êtes pas en Italie au démarrage de la collaboration, l’intégration est adaptée — entretien à distance, documents numériques et première séance coordonnée avec un contact local si nécessaire.",
        },
      ],
    },
    pricing: {
      eyebrow: "Tarifs horaires",
      title: "Structure tarifaire transparente.",
      subtitle: "Définis avant la signature du contrat. Aucune surprise.",
      rows: [
        {
          label: "Séance de jour",
          sub: "07:00 – 22:00",
          value: "À partir de 28 €/h",
        },
        {
          label: "Service de nuit — passif",
          sub: "22:00 – 07:00 · La personne dort de manière autonome",
          value: "35 €/h",
        },
        {
          label: "Service de nuit — actif",
          sub: "22:00 – 07:00 · Des interventions sont requises",
          value: "40 €/h",
        },
        {
          label: "Supplément de complexité",
          sub: "Profil à forte dépendance ou soins complexes",
          value: "Défini pendant l’évaluation",
          eval: true,
        },
        {
          label: "Supplément de distance",
          sub: "En dehors de la zone principale (Dervio/Lecco)",
          value: "Évalué selon le périmètre global de la mission",
          eval: true,
        },
      ],
      note:
        "Minimum de 5 heures consécutives par séance d’assistance. Aucune exception. Dimanches et jours fériés comptés comme jours ordinaires. Tous les suppléments sont communiqués avant la signature du contrat.",
      side: {
        autonomy: {
          title: "Niveau d’autonomie",
          text: "Autonome / Semi-autonome / Non autonome — influence le tarif de base. Défini pendant la phase d’évaluation.",
        },
        activity: {
          title: "Activités demandées",
          text: "Complexité et intensité des interventions demandées — évaluées au cas par cas lors de l’entretien initial.",
        },
        duration: {
          title: "Durée du soutien",
          text: "Court / Moyen / Long terme — évalués au cas par cas. Les collaborations de longue durée reçoivent un plan de continuité structuré.",
        },
      },
    },
    cta: {
      text: "Prêt à me contacter ?",
      button: "Envoyer la demande →",
    },
  },
  ar: {
    seo: {
      title: "الخدمات — Accanto Home Care OSS",
      description:
        "خدمات رعاية منزلية منظمة لكبار السن والأشخاص ذوي الإعاقة والقاصرين ذوي الاحتياجات الخاصة.",
      ogAlt: "معاينة خدمات Accanto Home Care",
      keywords: [
        "رعاية منزلية",
        "OSS",
        "رعاية كبار السن",
        "دعم ذوي الإعاقة",
        "خدمات المساعدة",
        "العناية المنزلية",
      ],
    },
    hero: {
      eyebrow: "الخدمات",
      title: ["ما أقدمه.", "كيف أعمل. وما لا يشمله العمل."],
      subtitle:
        "كل جلسة رعاية منظمة وموثقة وتتم ضمن النطاق المهني المعتمد لـ OSS.",
    },
    tabs: {
      local: "العائلات المحلية — بحيرة كومو · ليكو · فالتيلينا",
      intl: "العملاء الدوليون — المغتربون والإقامات المؤقتة",
    },
    local: {
      cards: [
        {
          icon: "OSS",
          label: "كبار السن",
          title: "خدمات رعاية كبار السن",
          items: [
            "دعم النظافة الشخصية لكبار السن (الاستحمام، العناية الشخصية، نظافة الفم)",
            "المساعدة في اللباس والحركة لكبار السن (النقل، المرافقة أثناء المشي، الوقاية من السقوط)",
            "تذكير بالعلاج الدوائي لكبار السن (دون إعطاء الدواء)",
            "تحضير الوجبات لكبار السن (وفق الحمية، والمساعدة في الأكل عند الحاجة)",
            "المرافقة لكبار السن (تقليل الوحدة، وتحفيز الإدراك)",
            "مراقبة أساسية للعلامات الحيوية (الحرارة، ملاحظة الحالة العامة)",
            "دعم ما بعد الخروج من المستشفى لكبار السن (العودة إلى المنزل)",
            "دعم رعاية ألزهايمر والخرف (الروتين، الإشراف)",
            "مهام منزلية صغيرة للحفاظ على نظافة البيئة (تنظيف خفيف، الحفاظ على النظافة)",
            "المساعدة في الأنشطة اليومية الأساسية (ADL)",
          ],
        },
        {
          icon: "OSS",
          label: "الأشخاص ذوو الإعاقة",
          title: "خدمات دعم الإعاقة",
          items: [
            "المساعدة في العناية الشخصية للأشخاص ذوي الإعاقة",
            "دعم الحركة للأشخاص ذوي الإعاقة (كرسي متحرك، النقل)",
            "دعم الأنشطة اليومية (ADL و IADL)",
            "دعم الاستقلالية في المنزل",
            "المساعدة في النظافة الشخصية وإدارة سلس البول",
            "تحضير الوجبات بما يناسب الاحتياجات الخاصة",
            "الدعم العاطفي والمرافقة",
            "التنسيق مع العائلة والمهنيين الصحيين",
            "الحفاظ على بيئة منزلية آمنة (الوقاية من المخاطر)",
            "الدعم في حالات الإعاقة الجسدية أو انخفاض الاستقلالية",
          ],
        },
        {
          icon: "OSS",
          label: "القاصرون",
          title: "رعاية القاصرين ذوي الاحتياجات الخاصة (دعم غير سريري)",
          items: [
            "دعم الروتين اليومي للأطفال ذوي الاحتياجات الخاصة",
            "المساعدة في النظافة الشخصية (مناسبة للعمر)",
            "الإشراف ومتابعة السلامة",
            "دعم الأنشطة النمائية (غير العلاجية)",
            "المساعدة أثناء الوجبات والروتين اليومي",
            "التعاون مع الأهل والمعالجين",
            "الطمأنة العاطفية والمرافقة المنظمة",
            "دعم الأطفال المصابين بالتوحد أو الإعاقات المعرفية (غير سريري)",
            "التحضير للمدرسة ودعم الروتين",
            "الحفاظ على بيئة منزلية آمنة",
          ],
        },
      ],
      boundary: {
        title: "ما لا يشمله العمل — الحدود المهنية",
        badge: "نطاق OSS",
        intro:
          "أعمل فقط ضمن النطاق المعتمد لـ OSS. الأنشطة التالية خارج مجالي وسيتم رفضها دائمًا:",
        items: [
          "إعطاء الأدوية أو إدارتها",
          "أي نوع من الإجراءات الطبية",
          "التشخيص السريري أو التقييم الصحي",
          "العناية بالجروح أو العلاج بعد العمليات",
          "الجلسات النفسية أو العلاجية",
          "رعاية على مدار 24 ساعة مع وجود مستمر — خارج النطاق المهني وغير متاحة",
        ],
        note:
          "أي حالة تحتاج إلى تدخل سريري سيتم تحديدها وإبلاغ العائلة بها وتحويلها فورًا إلى المختص الصحي المناسب.",
      },
      galleryAlt: [
        "عامل رعاية اجتماعية وصحية يدعم شخصًا في الأنشطة اليومية في المنزل",
        "شخص مسن يتلقى الرفقة والدعم خلال لحظة رعاية",
        "بيئة منزلية مريحة مع رعاية اجتماعية وصحية مهنية",
      ],
    },
    intl: {
      additions: [
        {
          num: "01",
          title: "التواصل بلغتك",
          desc: "تُقدَّم جميع تحديثات العائلة باللغة المفضلة — الإيطالية أو الإنجليزية أو الفرنسية أو العربية أو الألمانية. يمكن مشاركة التقارير المكتوبة عن بُعد أو بالحضور الشخصي حسب التفضيل.",
        },
        {
          num: "02",
          title: "تنسيق عن بُعد مع العائلة",
          desc: "مُصمم للعائلات المقيمة في الخارج. تحصل على تحديثات منظمة في أوقات متفق عليها — لا حاجة للتواجد في إيطاليا للبقاء على اطلاع دائم.",
        },
        {
          num: "03",
          title: "حساسية ثقافية",
          desc: "18 سنة في بيئات دولية. أفهم اختلاف أساليب الرعاية والخصوصية والتواصل العائلي. دون افتراضات. دون احتكاك ثقافي.",
        },
        {
          num: "04",
          title: "تهيئة للعائلات غير المقيمة",
          desc: "إذا لم تكن موجودًا في إيطاليا عند بدء التعاون، يتم تعديل مرحلة البداية — لقاء تعارفي عن بُعد، مستندات رقمية، وأول جلسة منسقة مع جهة اتصال محلية عند الحاجة.",
        },
      ],
    },
    pricing: {
      eyebrow: "الأسعار بالساعة",
      title: "هيكل تسعير شفاف.",
      subtitle: "تُحدَّد قبل توقيع العقد. لا مفاجآت.",
      rows: [
        {
          label: "جلسة رعاية نهارية",
          sub: "07:00 – 22:00",
          value: "ابتداءً من 28 يورو/ساعة",
        },
        {
          label: "الوردية الليلية — سلبية",
          sub: "22:00 – 07:00 · الشخص ينام بشكل مستقل",
          value: "35 يورو/ساعة",
        },
        {
          label: "الوردية الليلية — نشطة",
          sub: "22:00 – 07:00 · هناك تدخلات مطلوبة",
          value: "40 يورو/ساعة",
        },
        {
          label: "إضافة التعقيد",
          sub: "حالة اعتماد عالٍ أو رعاية معقدة",
          value: "تُحدَّد أثناء التقييم",
          eval: true,
        },
        {
          label: "إضافة المسافة",
          sub: "خارج المنطقة الرئيسية (ديرفيو/ليكو)",
          value: "تُقيَّم وفق النطاق الكلي للمهمة",
          eval: true,
        },
      ],
      note:
        "الحد الأدنى 5 ساعات متواصلة لكل جلسة رعاية. لا استثناءات. تُحتسب أيام الأحد والعطل كأيام عادية. يتم إبلاغ العميل بكل الإضافات قبل توقيع العقد.",
      side: {
        autonomy: {
          title: "مستوى الاستقلالية",
          text: "مستقل / شبه مستقل / غير مستقل — يؤثر على السعر الأساسي. يتم تحديده أثناء مرحلة التقييم.",
        },
        activity: {
          title: "الأنشطة المطلوبة",
          text: "تعقيد وكثافة تدخلات الرعاية المطلوبة — تُقيَّم حسب كل حالة خلال جلسة التعارف.",
        },
        duration: {
          title: "مدة الدعم",
          text: "قصيرة / متوسطة / طويلة الأجل — تُقيَّم حسب كل حالة. تحصل التعاونات طويلة الأمد على خطة استمرارية منظمة.",
        },
      },
    },
    cta: {
      text: "هل أنت مستعد للتواصل معي؟",
      button: "إرسال الطلب →",
    },
  },
};

export function getServicesCopy(locale: Locale) {
  return servicesCopy[locale];
}

export function buildServicesMetadata(
  locale: Locale,
  pathname = "/services",
): Metadata {
  const copy = getServicesCopy(locale).seo;
  const canonicalPath = localizedPath(locale, pathname);

  return {
    metadataBase: new URL("https://accanto.care"),
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    authors: [{ name: "Ghassen Mansouri" }],
    robots: "index, follow",
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangByLocale[l], localizedPath(l, pathname)]),
      ),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleByLocale[locale],
      siteName: "Accanto",
      url: `https://accanto.care${canonicalPath}`,
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: "https://accanto.care/Images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["https://accanto.care/Images/og-image.jpg"],
    },
    icons: {
      icon: "/Images/logo.png",
      apple: "/Images/apple-touch-icon.png",
    },
  };
}