import type { Metadata } from "next";
import {
  hreflangByLocale,
  localizedPath,
  locales,
  ogLocaleByLocale,
  type Locale,
} from "./config";

type ProfileCopy = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    chips: string[];
    bio: string;
  };
  path: {
    eyebrow: string;
    title: [string, string];
    left: {
      num: string;
      label: string;
      sub: string;
      tags: string[];
    };
    right: {
      num: string;
      label: string;
      sub: string;
      tags: string[];
    };
    certs: {
      name: string;
      desc: string;
    }[];
  };
  languages: {
    eyebrow: string;
    title: string;
    cards: {
      name: string;
      level: string;
      skills: string[];
    }[];
  };
  method: {
    eyebrow: string;
    title: string;
    items: {
      num: string;
      title: string;
      desc: string;
      benefit: string;
    }[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    quotes: string[];
  };
  areas: {
    eyebrow: string;
    title: string;
    cards: {
      tag: string;
      title: string;
      desc: string;
    }[];
  };
  discovery: {
    eyebrow: string;
    title: [string, string];
    steps: string[];
    note: string;
    ctaTitle: [string, string];
    ctaSub: [string, string];
    button: string;
    ctaNote: string;
  };
};

const profileCopy: Record<Locale, ProfileCopy> = {
  it: {
    seo: {
      title: "Ghassen Mansouri — Professionista OSS certificato · Accanto",
      description:
        "Sono Ghassen Mansouri — OSS certificato, 8 anni in ambito socio-sanitario e 10 in hospitality internazionale. Parlo italiano, inglese, francese, arabo e tedesco. Basato a Dervio, Lecco.",
      keywords: [
        "Ghassen Mansouri OSS",
        "operatore socio sanitario Lecco",
        "OSS certificato Como",
        "caregiver bilingue Lago di Como",
        "professionista OSS partita IVA",
        "OSS multilingue italiano inglese francese arabo tedesco",
        "assistenza domiciliare professionale Lecco",
      ],
      ogAlt: "Ghassen Mansouri",
    },
    hero: {
      eyebrow: "Identità professionale",
      name: "Ghassen Mansouri",
      role:
        "OSS certificato · Professionista di assistenza sanitaria indipendente · Lago di Como – Lecco / Valtellina / Milano",
      chips: [
        "OSS · Professionista indipendente",
        "5 lingue",
        "Oltre 8 anni in ambito sanitario",
        "Oltre 10 anni in hospitality",
        "BLSD · HACCP",
      ],
      bio:
        "OSS certificato con oltre 8 anni nel settore socio-sanitario e più di un decennio in customer experience e hospitality internazionale. Comunicazione professionale in italiano, inglese, francese, arabo e tedesco. Approccio umano, struttura provata sul campo, nessun compromesso.",
    },
    path: {
      eyebrow: "Percorso professionale",
      title: ["Due mondi professionali.", "Un unico approccio integrato alla cura."],
      left: {
        num: "8+",
        label: "anni — settore socio-sanitario",
        sub:
          "Anziani, persone con disabilità, pazienti in fase di recupero in strutture pubbliche e protette.",
        tags: ["Ospedale pubblico", "RSA", "RSD", "Comunità protetta"],
      },
      right: {
        num: "10+",
        label: "anni — hospitality & customer experience",
        sub:
          "Contesti relazionali di alto livello, clientela internazionale, forte pressione operativa.",
        tags: ["Crociera", "Duty free", "Luxury brands", "IT SaaS", "Travel & Leisure"],
      },
      certs: [
        { name: "OSS", desc: "Operatore Socio-Sanitario" },
        { name: "BLSD", desc: "Rianimazione cardiopolmonare" },
        { name: "HACCP", desc: "Sicurezza alimentare" },
      ],
    },
    languages: {
      eyebrow: "Competenze linguistiche",
      title: "Cinque lingue. Nessuna barriera comunicativa.",
      cards: [
        { name: "Arabo", level: "Madrelingua", skills: ["Scrittura", "Lettura", "Parlato"] },
        { name: "Italiano", level: "Fluente", skills: ["Scrittura", "Lettura", "Parlato"] },
        { name: "Francese", level: "Fluente", skills: ["Scrittura", "Lettura", "Parlato"] },
        { name: "Inglese", level: "Fluente", skills: ["Scrittura", "Lettura", "Parlato"] },
        { name: "Tedesco", level: "Professionale", skills: ["Scrittura", "Lettura", "Parlato"] },
      ],
    },
    method: {
      eyebrow: "Metodo di lavoro",
      title: "Come viene costruita ogni collaborazione.",
      items: [
        {
          num: "1",
          title: "Comunicazione professionale",
          desc: "Comunicazione professionale in italiano, inglese, francese, arabo e tedesco.",
          benefit: "Approccio umano, struttura provata sul campo, nessun compromesso.",
        },
        {
          num: "2",
          title: "Diario di assistenza",
          desc:
            "Ogni intervento viene documentato. Attività svolte, condizioni osservate e cambiamenti rilevati. Condivisi con la famiglia secondo la frequenza concordata.",
          benefit: "Sai sempre cosa è accaduto durante la sessione, anche quando non eri presente.",
        },
        {
          num: "3",
          title: "Comunicazione proattiva con la famiglia",
          desc:
            "Aggiornamenti regolari nella lingua preferita (EN / IT / FR / AR / DE). Nessuna sorpresa. Ogni cambiamento viene comunicato immediatamente.",
          benefit: "Le famiglie all’estero ricevono lo stesso livello di informazioni di chi è presente.",
        },
        {
          num: "4",
          title: "Puntualità e affidabilità operativa",
          desc:
            "Ogni sessione di assistenza inizia e termina come concordato. Le modifiche vengono comunicate in anticipo quando possibile.",
          benefit:
            "La tua pianificazione non viene mai disturbata da incertezze o sorprese all’ultimo minuto.",
        },
        {
          num: "5",
          title: "Chiarezza dei confini professionali",
          desc:
            "Operatività esclusivamente entro il perimetro OSS / supporto socio-sanitario. Le situazioni cliniche vengono segnalate e indirizzate al professionista appropriato.",
          benefit: "Sai sempre esattamente cosa faccio e cosa non faccio — nulla resta ambiguo.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Filosofia e valori",
      title: "Ciò che guida questo lavoro.",
      quotes: [
        "Assistenza strutturata. Approccio umano.",
        "“Il supporto professionale significa più che svolgere attività: significa comprendere i bisogni, spesso prima che vengano espressi.” “Il mio approccio unisce metodo, coerenza e rispetto autentico per il ritmo, le abitudini e il benessere di ogni persona.”",
        "“La mia misura del successo non è la durata di un intervento. È il momento in cui la persona che assisto smette di vedermi come un professionista di passaggio e inizia a considerarmi parte della sua vita quotidiana. Questo è il vero progresso in ogni percorso di cura.”",
      ],
    },
    areas: {
      eyebrow: "Area di intervento",
      title: "Dove opero.",
      cards: [
        { tag: "Base operativa", title: "Dervio – Lecco", desc: "Punto di partenza per ogni intervento." },
        {
          tag: "Area principale",
          title: "Lecco – Lago di Como / Valtellina",
          desc: "Area principale di intervento.",
        },
        {
          tag: "Mercato in crescita",
          title: "Milano",
          desc: "Clientela expat e famiglie internazionali. Accettata previa valutazione.",
        },
        {
          tag: "Minimo per sessione di assistenza",
          title: "5 ore",
          desc: "Durata minima per ogni intervento. Nessuna eccezione. Definita contrattualmente.",
        },
      ],
    },
    discovery: {
      eyebrow: "Come funziona il primo colloquio",
      title: ["Quattro passi tra la tua richiesta", "e il nostro primo confronto."],
      steps: [
        "Compila la richiesta online.",
        "Analisi individuale entro 48 ore lavorative.",
        "Se compatibile: ti verrà condiviso un link per il calendario.",
        "Scegli data e ora · 20–30 min · telefono o video.",
      ],
      note: "Il calendario resta privato. È accessibile solo alle richieste approvate.",
      ctaTitle: ["Invia la tua richiesta.", "La valuterò personalmente."],
      ctaSub: [
        "Ogni caso è diverso. Esamino ogni richiesta in modo individuale.",
        "Se c’è compatibilità, ti contatterò nella tua lingua.",
      ],
      button: "Invia la tua richiesta →",
      ctaNote: "Nessun obbligo. Nessuna risposta automatica. Solo una valutazione professionale.",
    },
  },
  en: {
    seo: {
      title: "Ghassen Mansouri — Certified OSS Professional · Accanto",
      description:
        "I am Ghassen Mansouri — certified OSS, 8 years in social-care settings and 10 in international hospitality. I speak Italian, English, French, Arabic, and German. Based in Dervio, Lecco.",
      keywords: [
        "Ghassen Mansouri OSS",
        "social care professional Lecco",
        "certified OSS Como",
        "bilingual caregiver Lake Como",
        "independent OSS professional",
        "multilingual OSS Italian English French Arabic German",
        "professional home care Lecco",
      ],
      ogAlt: "Ghassen Mansouri",
    },
    hero: {
      eyebrow: "Professional identity",
      name: "Ghassen Mansouri",
      role:
        "Certified OSS · Independent healthcare care professional · Lake Como – Lecco / Valtellina / Milan",
      chips: [
        "OSS · Independent professional",
        "5 languages",
        "8+ years in healthcare",
        "10+ years in hospitality",
        "BLSD · HACCP",
      ],
      bio:
        "Certified OSS with more than 8 years in social-care work and over a decade in customer experience and international hospitality. Professional communication in Italian, English, French, Arabic, and German. Human approach, field-tested structure, no compromises.",
    },
    path: {
      eyebrow: "Professional path",
      title: ["Two professional worlds.", "One integrated approach to care."],
      left: {
        num: "8+",
        label: "years — social-care sector",
        sub:
          "Elderly people, people with disabilities, and recovery patients in public and protected settings.",
        tags: ["Public hospital", "RSA", "RSD", "Protected community"],
      },
      right: {
        num: "10+",
        label: "years — hospitality & customer experience",
        sub:
          "High-contact environments, international clients, and demanding operational pressure.",
        tags: ["Cruise", "Duty free", "Luxury brands", "IT SaaS", "Travel & Leisure"],
      },
      certs: [
        { name: "OSS", desc: "Social Care Worker" },
        { name: "BLSD", desc: "Cardiopulmonary resuscitation" },
        { name: "HACCP", desc: "Food safety" },
      ],
    },
    languages: {
      eyebrow: "Language skills",
      title: "Five languages. No communication barrier.",
      cards: [
        { name: "Arabic", level: "Native", skills: ["Writing", "Reading", "Speaking"] },
        { name: "Italian", level: "Fluent", skills: ["Writing", "Reading", "Speaking"] },
        { name: "French", level: "Fluent", skills: ["Writing", "Reading", "Speaking"] },
        { name: "English", level: "Fluent", skills: ["Writing", "Reading", "Speaking"] },
        { name: "German", level: "Professional", skills: ["Writing", "Reading", "Speaking"] },
      ],
    },
    method: {
      eyebrow: "Working method",
      title: "How every collaboration is built.",
      items: [
        {
          num: "1",
          title: "Professional communication",
          desc: "Professional communication in Italian, English, French, Arabic, and German.",
          benefit: "Human approach, field-tested structure, no compromises.",
        },
        {
          num: "2",
          title: "Care log",
          desc:
            "Every intervention is documented. Tasks performed, observed conditions, and changes noted. Shared with the family according to the agreed frequency.",
          benefit: "You always know what happened during the session, even if you were not there.",
        },
        {
          num: "3",
          title: "Proactive family communication",
          desc:
            "Regular updates in the preferred language (EN / IT / FR / AR / DE). No surprises. Every change is communicated immediately.",
          benefit: "Families abroad receive the same level of information as families on site.",
        },
        {
          num: "4",
          title: "Punctuality and operational reliability",
          desc:
            "Each care session starts and ends as agreed. Changes are communicated in advance whenever possible.",
          benefit: "Your schedule is never disturbed by uncertainty or last-minute surprises.",
        },
        {
          num: "5",
          title: "Clear professional boundaries",
          desc:
            "Work strictly within the OSS / socio-care scope. Clinical situations are reported and redirected to the appropriate professional.",
          benefit: "You always know exactly what I do and what I do not do — nothing is left ambiguous.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Philosophy and values",
      title: "What drives this work.",
      quotes: [
        "Structured care. Human approach.",
        "“Professional support means more than performing tasks: it means understanding needs, often before they are spoken.” “My approach combines method, consistency, and genuine respect for each person’s pace, habits, and well-being.”",
        "“My measure of success is not the length of an intervention. It is the moment when the person I support stops seeing me as a passing professional and begins to see me as part of daily life. That is the real progress in every care journey.”",
      ],
    },
    areas: {
      eyebrow: "Service area",
      title: "Where I work.",
      cards: [
        { tag: "Operating base", title: "Dervio – Lecco", desc: "Starting point for every intervention." },
        {
          tag: "Main area",
          title: "Lecco – Lake Como / Valtellina",
          desc: "Primary intervention area.",
        },
        {
          tag: "Growing market",
          title: "Milan",
          desc: "Expat clients and international families. Accepted after evaluation.",
        },
        {
          tag: "Minimum per care session",
          title: "5 hours",
          desc: "Minimum duration for every intervention. No exceptions. Defined in the contract.",
        },
      ],
    },
    discovery: {
      eyebrow: "How the first call works",
      title: ["Four steps between your request", "and our first conversation."],
      steps: [
        "Submit the online request.",
        "Individual review within 48 business hours.",
        "If it fits: you will receive a calendar link.",
        "Choose date and time · 20–30 min · phone or video.",
      ],
      note: "The calendar remains private. It is accessible only to approved requests.",
      ctaTitle: ["Send your request.", "I will review it personally."],
      ctaSub: [
        "Every case is different. I review each request individually.",
        "If there is a fit, I will contact you in your language.",
      ],
      button: "Send request →",
      ctaNote: "No obligation. No automatic reply. Only a professional review.",
    },
  },
  fr: {
    seo: {
      title: "Ghassen Mansouri — Professionnel OSS certifié · Accanto",
      description:
        "Je suis Ghassen Mansouri — OSS certifié, 8 ans dans le domaine socio-sanitaire et 10 ans dans l’hôtellerie internationale. Je parle italien, anglais, français, arabe et allemand. Basé à Dervio, Lecco.",
      keywords: [
        "Ghassen Mansouri OSS",
        "professionnel aide à domicile Lecco",
        "OSS certifié Como",
        "aidant bilingue Lac de Côme",
        "professionnel OSS indépendant",
        "OSS multilingue italien anglais français arabe allemand",
        "assistance à domicile professionnelle Lecco",
      ],
      ogAlt: "Ghassen Mansouri",
    },
    hero: {
      eyebrow: "Identité professionnelle",
      name: "Ghassen Mansouri",
      role:
        "OSS certifié · Professionnel indépendant de soins et d’assistance · Lac de Côme – Lecco / Valteline / Milan",
      chips: [
        "OSS · Professionnel indépendant",
        "5 langues",
        "8+ ans dans le domaine sanitaire",
        "10+ ans en hôtellerie",
        "BLSD · HACCP",
      ],
      bio:
        "OSS certifié avec plus de 8 ans dans le secteur socio-sanitaire et plus d’une décennie en expérience client et hôtellerie internationale. Communication professionnelle en italien, anglais, français, arabe et allemand. Approche humaine, structure éprouvée sur le terrain, aucun compromis.",
    },
    path: {
      eyebrow: "Parcours professionnel",
      title: ["Deux mondes professionnels.", "Une seule approche intégrée du soin."],
      left: {
        num: "8+",
        label: "années — secteur socio-sanitaire",
        sub:
          "Personnes âgées, personnes en situation de handicap et patients en phase de récupération dans des structures publiques et protégées.",
        tags: ["Hôpital public", "RSA", "RSD", "Communauté protégée"],
      },
      right: {
        num: "10+",
        label: "années — hôtellerie & expérience client",
        sub:
          "Environnements à forte interaction, clientèle internationale et forte pression opérationnelle.",
        tags: ["Croisière", "Duty free", "Luxury brands", "IT SaaS", "Travel & Leisure"],
      },
      certs: [
        { name: "OSS", desc: "Auxiliaire socio-sanitaire" },
        { name: "BLSD", desc: "Réanimation cardio-pulmonaire" },
        { name: "HACCP", desc: "Sécurité alimentaire" },
      ],
    },
    languages: {
      eyebrow: "Compétences linguistiques",
      title: "Cinq langues. Aucune barrière de communication.",
      cards: [
        { name: "Arabe", level: "Natif", skills: ["Écriture", "Lecture", "Parole"] },
        { name: "Italien", level: "Courant", skills: ["Écriture", "Lecture", "Parole"] },
        { name: "Français", level: "Courant", skills: ["Écriture", "Lecture", "Parole"] },
        { name: "Anglais", level: "Courant", skills: ["Écriture", "Lecture", "Parole"] },
        { name: "Allemand", level: "Professionnel", skills: ["Écriture", "Lecture", "Parole"] },
      ],
    },
    method: {
      eyebrow: "Méthode de travail",
      title: "Comment chaque collaboration est construite.",
      items: [
        {
          num: "1",
          title: "Communication professionnelle",
          desc: "Communication professionnelle en italien, anglais, français, arabe et allemand.",
          benefit: "Approche humaine, structure éprouvée sur le terrain, aucun compromis.",
        },
        {
          num: "2",
          title: "Journal de soins",
          desc:
            "Chaque intervention est documentée. Tâches réalisées, conditions observées et changements relevés. Partagés avec la famille selon la fréquence convenue.",
          benefit: "Vous savez toujours ce qui s’est passé pendant la séance, même si vous étiez absent.",
        },
        {
          num: "3",
          title: "Communication proactive avec la famille",
          desc:
            "Mises à jour régulières dans la langue préférée (EN / IT / FR / AR / DE). Aucune surprise. Chaque changement est communiqué immédiatement.",
          benefit: "Les familles à l’étranger reçoivent le même niveau d’informations que les familles sur place.",
        },
        {
          num: "4",
          title: "Ponctualité et fiabilité opérationnelle",
          desc:
            "Chaque séance de soins commence et se termine comme convenu. Les modifications sont communiquées à l’avance lorsque c’est possible.",
          benefit:
            "Votre organisation n’est jamais perturbée par l’incertitude ou des surprises de dernière minute.",
        },
        {
          num: "5",
          title: "Clarté des limites professionnelles",
          desc:
            "Intervention strictement dans le périmètre OSS / socio-sanitaire. Les situations cliniques sont signalées et orientées vers le professionnel approprié.",
          benefit: "Vous savez toujours exactement ce que je fais et ce que je ne fais pas — rien n’est ambigu.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Philosophie et valeurs",
      title: "Ce qui guide ce travail.",
      quotes: [
        "Soins structurés. Approche humaine.",
        "“Le soutien professionnel signifie plus que réaliser des tâches : cela signifie comprendre les besoins, souvent avant qu’ils ne soient exprimés.” “Mon approche allie méthode, cohérence et respect authentique du rythme, des habitudes et du bien-être de chaque personne.”",
        "“Ma mesure du succès n’est pas la durée d’une intervention. C’est le moment où la personne que j’accompagne cesse de me voir comme un professionnel de passage et commence à me considérer comme partie intégrante de sa vie quotidienne. Voilà le vrai progrès dans chaque parcours de soin.”",
      ],
    },
    areas: {
      eyebrow: "Zone d’intervention",
      title: "Où j’interviens.",
      cards: [
        { tag: "Base opérationnelle", title: "Dervio – Lecco", desc: "Point de départ de chaque intervention." },
        {
          tag: "Zone principale",
          title: "Lecco – Lac de Côme / Valteline",
          desc: "Zone principale d’intervention.",
        },
        {
          tag: "Marché en croissance",
          title: "Milan",
          desc: "Clientèle expatriée et familles internationales. Accepté après évaluation.",
        },
        {
          tag: "Minimum par séance",
          title: "5 heures",
          desc: "Durée minimale pour chaque intervention. Aucune exception. Définie contractuellement.",
        },
      ],
    },
    discovery: {
      eyebrow: "Comment se déroule le premier échange",
      title: ["Quatre étapes entre votre demande", "et notre premier entretien."],
      steps: [
        "Remplissez la demande en ligne.",
        "Analyse individuelle sous 48 heures ouvrables.",
        "Si compatible : un lien de calendrier vous sera partagé.",
        "Choisissez la date et l’heure · 20–30 min · téléphone ou vidéo.",
      ],
      note: "Le calendrier reste privé. Il n’est accessible qu’aux demandes approuvées.",
      ctaTitle: ["Envoyez votre demande.", "Je l’évaluerai personnellement."],
      ctaSub: [
        "Chaque cas est différent. J’examine chaque demande individuellement.",
        "S’il y a compatibilité, je vous contacterai dans votre langue.",
      ],
      button: "Envoyer la demande →",
      ctaNote: "Aucune obligation. Aucune réponse automatique. Seulement une évaluation professionnelle.",
    },
  },
  ar: {
    seo: {
      title: "غسان منصوري — محترف OSS معتمد · Accanto",
      description:
        "أنا غسان منصوري — OSS معتمد، لدي 8 سنوات في الرعاية الاجتماعية والصحية و10 سنوات في الضيافة الدولية. أتحدث الإيطالية والإنجليزية والفرنسية والعربية والألمانية. مقيم في ديرفيو، ليكو.",
      keywords: [
        "غسان منصوري OSS",
        "محترف رعاية منزلية ليكو",
        "OSS معتمد كومو",
        "مرافق ثنائي اللغة بحيرة كومو",
        "محترف OSS مستقل",
        "OSS متعدد اللغات الإيطالية الإنجليزية الفرنسية العربية الألمانية",
        "رعاية منزلية احترافية ليكو",
      ],
      ogAlt: "غسان منصوري",
    },
    hero: {
      eyebrow: "الهوية المهنية",
      name: "غسان منصوري",
      role:
        "OSS معتمد · محترف رعاية صحية مستقل · بحيرة كومو – ليكو / فالتيلينا / ميلانو",
      chips: [
        "OSS · محترف مستقل",
        "5 لغات",
        "أكثر من 8 سنوات في المجال الصحي",
        "أكثر من 10 سنوات في الضيافة",
        "BLSD · HACCP",
      ],
      bio:
        "OSS معتمد مع أكثر من 8 سنوات في الرعاية الاجتماعية والصحية وأكثر من عقد في تجربة العملاء والضيافة الدولية. تواصل مهني بالإيطالية والإنجليزية والفرنسية والعربية والألمانية. أسلوب إنساني، وهيكلة مجرّبة ميدانيًا، ودون أي تنازلات.",
    },
    path: {
      eyebrow: "المسار المهني",
      title: ["عالمان مهنيان.", "نهج واحد متكامل للرعاية."],
      left: {
        num: "8+",
        label: "سنوات — قطاع الرعاية الاجتماعية والصحية",
        sub:
          "كبار السن، والأشخاص ذوو الإعاقة، والمرضى في مرحلة التعافي داخل مؤسسات عامة ومحميّة.",
        tags: ["مستشفى عام", "RSA", "RSD", "مجتمع محمي"],
      },
      right: {
        num: "10+",
        label: "سنوات — الضيافة وتجربة العملاء",
        sub:
          "بيئات عالية التفاعل، عملاء دوليون، وضغط تشغيلي كبير.",
        tags: ["رحلات بحرية", "ديوتي فري", "علامات فاخرة", "IT SaaS", "السفر والترفيه"],
      },
      certs: [
        { name: "OSS", desc: "عامل رعاية اجتماعية وصحية" },
        { name: "BLSD", desc: "الإنعاش القلبي الرئوي" },
        { name: "HACCP", desc: "سلامة الغذاء" },
      ],
    },
    languages: {
      eyebrow: "المهارات اللغوية",
      title: "خمس لغات. لا توجد عوائق في التواصل.",
      cards: [
        { name: "العربية", level: "لغة أم", skills: ["كتابة", "قراءة", "تحدث"] },
        { name: "الإيطالية", level: "بطلاقة", skills: ["كتابة", "قراءة", "تحدث"] },
        { name: "الفرنسية", level: "بطلاقة", skills: ["كتابة", "قراءة", "تحدث"] },
        { name: "الإنجليزية", level: "بطلاقة", skills: ["كتابة", "قراءة", "تحدث"] },
        { name: "الألمانية", level: "مهنية", skills: ["كتابة", "قراءة", "تحدث"] },
      ],
    },
    method: {
      eyebrow: "منهج العمل",
      title: "كيف تُبنى كل شراكة.",
      items: [
        {
          num: "1",
          title: "تواصل مهني",
          desc: "تواصل مهني بالإيطالية والإنجليزية والفرنسية والعربية والألمانية.",
          benefit: "نهج إنساني، وهيكلة مجرّبة ميدانيًا، ودون تنازلات.",
        },
        {
          num: "2",
          title: "سجل الرعاية",
          desc:
            "يتم توثيق كل تدخل. المهام المنفذة، والحالة الملاحظة، والتغييرات المسجلة. تتم مشاركتها مع العائلة حسب التواتر المتفق عليه.",
          benefit: "أنت تعرف دائمًا ما حدث أثناء الجلسة حتى لو لم تكن حاضرًا.",
        },
        {
          num: "3",
          title: "تواصل استباقي مع العائلة",
          desc:
            "تحديثات منتظمة باللغة المفضلة (EN / IT / FR / AR / DE). لا مفاجآت. يتم الإبلاغ عن كل تغيير فورًا.",
          benefit: "العائلات في الخارج تحصل على نفس مستوى المعلومات مثل الموجودين في الموقع.",
        },
        {
          num: "4",
          title: "الالتزام بالمواعيد والموثوقية التشغيلية",
          desc:
            "تبدأ وتنتهي كل جلسة رعاية كما تم الاتفاق عليه. يتم إبلاغ التغييرات مسبقًا عندما يكون ذلك ممكنًا.",
          benefit: "جدولك لا يتعرض أبدًا لارتباك أو مفاجآت في آخر لحظة.",
        },
        {
          num: "5",
          title: "وضوح الحدود المهنية",
          desc:
            "العمل يقتصر بدقة على نطاق OSS / الرعاية الاجتماعية والصحية. أي حالة سريرية يتم الإبلاغ عنها وتوجيهها إلى المختص المناسب.",
          benefit: "تعرف دائمًا ما أقوم به وما لا أقوم به — لا شيء يبقى غامضًا.",
        },
      ],
    },
    philosophy: {
      eyebrow: "الفلسفة والقيم",
      title: "ما الذي يقود هذا العمل.",
      quotes: [
        "رعاية منظمة. نهج إنساني.",
        "“الدعم المهني يعني أكثر من تنفيذ المهام: إنه يعني فهم الاحتياجات، غالبًا قبل أن تُقال.” “يجمع نهجي بين المنهجية والاتساق والاحترام الحقيقي لإيقاع كل شخص وعاداته ورفاهيته.”",
        "“مقياسي للنجاح ليس مدة التدخل. بل تلك اللحظة التي يتوقف فيها الشخص الذي أعتني به عن رؤيتي كمهني عابر ويبدأ في اعتباري جزءًا من حياته اليومية. هذا هو التقدم الحقيقي في كل مسار رعاية.”",
      ],
    },
    areas: {
      eyebrow: "منطقة العمل",
      title: "أين أعمل.",
      cards: [
        { tag: "قاعدة التشغيل", title: "ديرفيو – ليكو", desc: "نقطة البداية لكل تدخل." },
        {
          tag: "المنطقة الرئيسية",
          title: "ليكو – بحيرة كومو / فالتيلينا",
          desc: "المنطقة الرئيسية للتدخل.",
        },
        {
          tag: "سوق نامٍ",
          title: "ميلانو",
          desc: "عملاء مغتربون وعائلات دولية. يتم القبول بعد التقييم.",
        },
        {
          tag: "الحد الأدنى لكل جلسة",
          title: "5 ساعات",
          desc: "المدة الدنيا لكل تدخل. لا استثناءات. محددة في العقد.",
        },
      ],
    },
    discovery: {
      eyebrow: "كيف تعمل المقابلة الأولى",
      title: ["أربع خطوات بين طلبك", "وأول لقاء بيننا."],
      steps: [
        "املأ الطلب عبر الإنترنت.",
        "مراجعة فردية خلال 48 ساعة عمل.",
        "إذا كان مناسبًا: ستتلقى رابطًا للتقويم.",
        "اختر التاريخ والوقت · 20–30 دقيقة · هاتف أو فيديو.",
      ],
      note: "التقويم خاص. يمكن الوصول إليه فقط للطلبات المعتمدة.",
      ctaTitle: ["أرسل طلبك.", "سأراجعه شخصيًا."],
      ctaSub: [
        "كل حالة مختلفة. أراجع كل طلب بشكل فردي.",
        "إذا كان هناك توافق، فسأتواصل معك بلغتك.",
      ],
      button: "إرسال الطلب →",
      ctaNote: "لا التزام. لا رد تلقائي. فقط تقييم مهني.",
    },
  },
};

export function getProfileCopy(locale: Locale) {
  return profileCopy[locale];
}

export function buildProfileMetadata(locale: Locale, pathname = "/profile"): Metadata {
  const copy = profileCopy[locale].seo;
  const canonicalPath = localizedPath(locale, pathname);

  return {
    metadataBase: new URL("https://accanto.care"),
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    authors: [{ name: "Ghassen Mansouri" }],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangByLocale[l], localizedPath(l, pathname)]),
      ),
    },
    openGraph: {
      type: "profile",
      url: `https://accanto.care${canonicalPath}`,
      title: copy.title,
      description: copy.description,
      siteName: "Accanto",
      locale: ogLocaleByLocale[locale],
      images: [
        {
          url: "/Images/ghassen.jpg",
          width: 800,
          height: 800,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/Images/ghassen.jpg"],
    },
    icons: {
      icon: "/Images/logo.png",
      apple: "/Images/apple-touch-icon.png",
    },
  };
}