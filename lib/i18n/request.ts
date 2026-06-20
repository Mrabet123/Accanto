import type { Metadata } from "next";
import {
  hreflangByLocale,
  localizedPath,
  locales,
  ogLocaleByLocale,
  type Locale,
} from "./config";

type RequestCopy = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  page: {
    eyebrow: string;
    title: string;
    subtitle: [string, string];
  };
  progress: {
    stepLabel: string;
    section: [string, string, string, string];
  };
  sections: {
    requester: string;
    assistedProfile: string;
    logistics: string;
    duration: string;
  };
  buttons: {
    back: string;
    next1: string;
    next2: string;
    next3: string;
    submit: string;
  };
  requester: {
  who: string;
  role: string;
  roleOtherPlaceholder: string;
  name: string;
  namePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  preferredLanguage: string;
  languagePlaceholder: string;
  municipality: string;
  municipalityPlaceholder: string;
  zip: string;
  zipPlaceholder: string;
  whoOptions: [string, string];
  roleOptions: [string, string, string, string, string];
  languageOptions: [string, string, string, string, string];
  countryOptions: string[];
};
  assistedProfile: {
    type: string;
    typeOtherPlaceholder: string;
    age: string;
    agePlaceholder: string;
    autonomy: string;
    activities: string;
    description: string;
    descriptionPlaceholder: string;
    typeOptions: [string, string, string, string];
    ageOptions: [string, string, string, string, string, string];
    autonomyOptions: [string, string, string];
    activityOptions: [string, string, string, string, string, string, string, string];
  };
  logistics: {
    days: string;
    hours: string;
    slot: string;
    nightType: string;
    startDate: string;
    daysOptions: [string, string, string, string, string, string, string];
    hoursOptions: [string, string, string];
    slotOptions: [string, string];
    nightTypeOptions: [string, string];
    infoBox: string;
  };
  duration: {
    duration: string;
    previous: string;
    source: string;
    sourceOtherPlaceholder: string;
    urgency: string;
    durationOptions: [string, string, string, string];
    previousOptions: [string, string];
    sourceOptions: [string, string, string, string, string];
    urgencyOptions: [string, string, string];
  };
  privacy: {
    title: string;
    gdpr: string;
    terms: string;
    termsTrigger: string;
  };
  notes: {
    submitNote: [string, string];
    successTitle: string;
    successSub: [string, string, string];
    urgentTitle: string;
    urgentBody: string;
    urgentButton: string;
  };
  terms: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: [string, string, string];
    footer: [string, string];
    closeLabel: string;
    readAll: string;
    sections: {
      one: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
        pills: [string, string, string, string];
      };
      two: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
      };
      three: {
        num: string;
        title: string;
        paragraphs: [string, string, string, string];
      };
      four: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
      };
      five: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
      };
      six: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
      };
      seven: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
      };
      eight: {
        num: string;
        title: string;
        intro: string;
        list: [string, string, string, string, string, string];
        closing: string;
      };
      nine: {
        num: string;
        title: string;
        paragraphs: [string, string, string];
        pills: [string, string, string, string];
      };
      ten: {
        num: string;
        title: string;
        paragraphs: [string, string];
        note: string;
      };
    };
  };
  validation: {
    required: string;
    emailInvalid: string;
    phoneInvalid: string;
    roleOtherRequired: string;
    typeOtherRequired: string;
    sourceOtherRequired: string;
    nightTypeRequired: string;
    gdprRequired: string;
    termsRequired: string;
  };
  preferredLanguageOptions: [string, string, string, string, string];
};

const requestCopy: Record<Locale, RequestCopy> = {
  it: {
    seo: {
      title: "Invia una richiesta — Accanto Home Care",
      description:
        "Invia la tua richiesta di assistenza domiciliare a Ghassen Mansouri, professionista OSS certificato. Valuto personalmente ogni richiesta entro 48 ore. Lago di Como · Lecco · Sondrio · Milano.",
      keywords: [
        "richiedere assistenza domiciliare Lecco",
        "contattare OSS Como",
        "richiesta valutazione OSS",
        "richiesta assistenza domiciliare Lago di Como",
        "caregiver privato contatto Lecco",
      ],
      ogAlt: "Accanto Home Care",
    },
    page: {
      eyebrow: "Richiesta di valutazione",
      title: "Modulo di qualificazione del contatto",
      subtitle: [
        "4 sezioni · Compila con attenzione. Valuto ogni richiesta in modo individuale.",
        "Non tutte le richieste vengono accettate.",
      ],
    },
    progress: {
      stepLabel: "Sezione",
      section: ["Sezione 1 di 4", "Sezione 2 di 4", "Sezione 3 di 4", "Sezione 4 di 4"],
    },
    sections: {
      requester: "Dati del richiedente",
      assistedProfile: "Profilo della persona assistita",
      logistics: "Logistica e pianificazione",
      duration: "Durata e qualificazione",
    },
    buttons: {
      back: "← Indietro",
      next1: "Avanti → Profilo della persona assistita",
      next2: "Avanti → Logistica e pianificazione",
      next3: "Avanti → Durata e qualificazione",
      submit: "Invia la mia richiesta →",
    },
    requester: {
  who: "Chi sei?",
  role: "Ruolo del richiedente",
  roleOtherPlaceholder: "Specifica il tuo ruolo",
  name: "Nome e cognome",
  namePlaceholder: "Il tuo nome completo",
  phone: "Telefono",
  phonePlaceholder: "Numero di telefono",
  email: "Email",
  emailPlaceholder: "tuo@email.com",
  preferredLanguage: "Lingua preferita",
  languagePlaceholder: "Seleziona la lingua…",
  municipality: "Comune di residenza",
  municipalityPlaceholder: "es. Lecco, Como, Milano…",
  zip: "CAP",
  zipPlaceholder: "es. 23900",
  whoOptions: ["Italiano", "Expat / Internazionale"],
  roleOptions: [
    "Interessato direttamente",
    "Famiglia",
    "Figlio / Figlia",
    "Parente",
    "Altro",
  ],
  languageOptions: ["Italiano", "Inglese", "Francese", "Arabo", "Tedesco"],
  countryOptions: [
    "Italia", "Tunisia", "Francia", "Regno Unito", "Stati Uniti", "Germania", "Spagna",
    "Svizzera", "Emirati Arabi Uniti", "Algeria", "Marocco", "Canada", "Australia", "Belgio",
    "Paesi Bassi", "Portogallo", "Austria", "Svezia", "Norvegia", "Danimarca", "Finlandia",
    "Irlanda", "Grecia", "Turchia", "Egitto", "Arabia Saudita", "Qatar", "Kuwait", "Bahrein",
    "Oman", "Giordania", "Libano", "Siria", "Palestina", "Iraq", "Iran", "Pakistan", "India",
    "Bangladesh", "Sri Lanka", "Nepal", "Cina", "Giappone", "Corea del Sud", "Filippine",
    "Indonesia", "Malaysia", "Singapore", "Thailandia", "Vietnam", "Brasile", "Argentina",
    "Messico", "Colombia", "Cile", "Perù", "Sudafrica", "Nigeria", "Kenya", "Etiopia",
    "Camerun", "Senegal",
  ],
},
    assistedProfile: {
      type: "Tipo di persona assistita",
      typeOtherPlaceholder: "Specifica il tipo",
      age: "Fascia d'età",
      agePlaceholder: "Seleziona la fascia d'età…",
      autonomy: "Livello di autonomia",
      activities: "Attività richieste",
      description: "Descrizione delle attività e delle aspettative",
      descriptionPlaceholder: "Descrivi la situazione, eventuali bisogni specifici, routine, aspettative…",
      typeOptions: ["Anziano", "Persona con disabilità", "Minore", "Altro"],
      ageOptions: ["6–17 anni", "18–35 anni", "36–55 anni", "56–70 anni", "71–85 anni", "86+ anni"],
      autonomyOptions: ["Autonomo", "Semi-autonomo", "Non autonomo"],
      activityOptions: [
        "Igiene personale e cura della persona",
        "Mobilizzazione e trasferimenti",
        "Preparazione dei pasti e assistenza all'alimentazione",
        "Compagnia e stimolazione cognitiva",
        "Supervisione e sicurezza a domicilio",
        "Accompagnamento esterno",
        "Comunicazione / report alla famiglia",
        "Mediazione culturale / linguistica",
      ],
    },
    logistics: {
      days: "Giorni alla settimana",
      hours: "Ore per sessione di assistenza",
      slot: "Fascia oraria",
      nightType: "Tipo di turno notturno",
      startDate: "Data di inizio richiesta",
      daysOptions: ["1 giorno", "2 giorni", "3 giorni", "4 giorni", "5 giorni (lun–ven)", "6 giorni", "7 giorni"],
      hoursOptions: ["5 ore (minimo)", "6–10 ore", "Oltre 10 ore"],
      slotOptions: ["Diurna (07:00–22:00)", "Notturna (22:00–07:00)"],
      nightTypeOptions: [
        "Passivo — la persona dorme autonomamente, presenza per necessità improvvise",
        "Attivo — interventi richiesti durante la notte",
      ],
      infoBox:
        "Le sessioni notturne hanno condizioni tariffarie specifiche (passivo: €35/h · attivo: €40/h). Verranno confermate durante il colloquio di valutazione.",
    },
    duration: {
      duration: "Durata prevista del supporto",
      previous: "Hai già valutato altri professionisti?",
      source: "Come hai trovato questo sito?",
      sourceOtherPlaceholder: "Specifica come hai trovato questo sito",
      urgency: "Livello di urgenza",
      durationOptions: ["Breve (meno di 1 mese)", "Medio termine (1–3 mesi)", "Lungo termine (oltre 3 mesi)", "Non definita"],
      previousOptions: ["Sì", "No, prima valutazione"],
      sourceOptions: ["Ricerca Google", "Social media", "WhatsApp", "Segnalazione", "Altro"],
      urgencyOptions: ["Normale", "Prioritaria", "Urgente"],
    },
    privacy: {
      title: "Privacy e condizioni",
      gdpr: "Acconsento al trattamento dei dati personali ai sensi del GDPR (Regolamento UE 2016/679).",
      terms: "Dichiaro di aver letto e compreso i",
      termsTrigger: "termini di collaborazione",
    },
    notes: {
      submitNote: ["Riceverai una risposta entro 48 ore lavorative.", "Non tutte le richieste vengono accettate."],
      successTitle: "Richiesta ricevuta.",
      successSub: [
        "Grazie per aver inviato la tua richiesta.",
        "La esaminerò personalmente e ti contatterò entro 48 ore lavorative — nella tua lingua preferita.",
        "Non tutte le richieste portano a una collaborazione. Se c'è compatibilità, ti contatterò direttamente.",
      ],
      urgentTitle: "Hai un'esigenza urgente?",
      urgentBody: "Scrivimi direttamente e ti risponderò personalmente.",
      urgentButton: "WhatsApp →",
    },
    terms: {
      eyebrow: "Accanto · accanto.care",
      title: "Termini di collaborazione",
      subtitle: "Leggi prima di spuntare la casella — è ciò che stai accettando.",
      intro: [
        "Questi sono i termini di collaborazione tra te (il cliente) e Ghassen Mansouri, professionista OSS indipendente (P.IVA 01103920144).",
        "Spuntando la casella nel modulo di richiesta di valutazione, confermi di aver letto e compreso tutte le condizioni descritte qui.",
        "Il contratto completo firmato viene trasmesso separatamente via email in formato PDF, dopo che la tua richiesta è stata valutata e approvata.",
      ],
      footer: [
        "Ghassen Mansouri · Professionista OSS indipendente · P.IVA 01103920144",
        "ghassenmansouri@mail.com · +39 379 230 6809 · accanto.care",
      ],
      closeLabel: "Chiudi i termini",
      readAll: "Ho letto tutto ✓",
      sections: {
        one: {
          num: "Sezione 1",
          title: "Chi sono e come lavoro",
          paragraphs: [
            "Sono Ghassen Mansouri, professionista indipendente certificato OSS (Operatore Socio-Sanitario), operante ai sensi della legge italiana con P.IVA 01103920144, con base a Dervio (LC). Lavoro come professionista indipendente pienamente autonomo — non come dipendente, non tramite agenzia e non come lavoratore subordinato.",
            "Fornisco assistenza domiciliare strutturata esclusivamente entro il perimetro professionale OSS certificato, come definito dalla Legge 42/1999 e dal D.M. 520/2001. Opero nelle province di Lecco, Como, Sondrio e Milano.",
            "Offro assistenza in tre categorie: assistenza anziani, supporto alla disabilità e assistenza per minori con bisogni speciali (disabili o semi-autonomi).",
          ],
          pills: ["OSS certificato", "P.IVA 01103920144", "Lecco · Como · Sondrio · Milano", "5 lingue"],
        },
        two: {
          num: "Sezione 2",
          title: "Come funziona la collaborazione",
          paragraphs: [
            "Inviare una richiesta di valutazione non costituisce una collaborazione confermata. Ogni richiesta viene esaminata personalmente. Non tutte le richieste vengono accettate.",
            "Il processo è: 1. invii il modulo di valutazione. 2. lo esamino entro 48 ore lavorative. 3. Se compatibile, ti contatto per fissare un colloquio conoscitivo. 4. Se confermato, il contratto viene inviato via email per la firma. 5. Le sessioni iniziano dopo la firma del contratto e il ricevimento del pagamento anticipato.",
            "Nessuna sessione ha luogo prima di un contratto firmato e del pagamento anticipato. Questo tutela entrambe le parti.",
          ],
        },
        three: {
          num: "Sezione 3",
          title: "Tariffe e pagamento",
          paragraphs: [
            "Le tariffe vengono concordate per iscritto prima della firma di qualsiasi contratto. La tariffa oraria base parte da €28/ora per le sessioni diurne. Sono previsti supplementi per la sera, la notte, il turno notturno attivo, i profili ad alta complessità o le località fuori dalla zona primaria. La tariffa esatta applicabile alla tua situazione viene definita durante la valutazione.",
            "Il pagamento avviene sempre in anticipo, prima dell'inizio delle sessioni di ciascun periodo concordato — settimanale (entro il lunedì precedente la settimana) oppure mensile (entro il primo del mese). Senza pagamento anticipato non esiste una collaborazione confermata per quel periodo. In tal caso sono libero di accettare altri clienti.",
            "Accetto il pagamento esclusivamente tramite bonifico bancario o contanti (nei limiti di legge). Non sono accettati altri metodi. Tutti i pagamenti sono in Euro. Le eventuali commissioni dei bonifici internazionali sono a carico del cliente.",
            "Emesso fattura elettronica tramite sistema SDI italiano (Aruba) entro 12 giorni dal ricevimento del pagamento, in conformità all'art. 6 D.P.R. 633/1972. Opero in regime forfettario — non si applica IVA. Non si applica la ritenuta d'acconto per i privati.",
          ],
        },
        four: {
          num: "Sezione 4",
          title: "Durata minima e pianificazione",
          paragraphs: [
            "La durata minima per qualsiasi sessione di assistenza è di 5 ore consecutive. Nessuna sessione di durata inferiore può essere concordata, fatturata o erogata. Questo vale per tutti i tipi di sessione — diurna, notturna passiva e notturna attiva — senza eccezioni.",
            "Il calendario delle sessioni (giorni, fasce orarie) è flessibile e viene concordato tra noi. Ciò che è fissato contrattualmente è: la durata in ore per sessione, il numero di sessioni per periodo e il tipo di sessione. Le modifiche della fascia oraria richiedono 48 ore di preavviso e il mio consenso esplicito.",
            "Non posso essere obbligato ad accettare una modifica della fascia oraria.",
          ],
        },
        five: {
          num: "Sezione 5",
          title: "Cancellazioni, assenze e rimandi",
          paragraphs: [
            "Se annulli una sessione con meno di 24 ore di preavviso o non ti presenti, la sessione è comunque dovuta integralmente. Se la cancellazione avviene entro 48 ore ma oltre le 24 ore, può essere applicata una trattenuta parziale secondo quanto concordato nel contratto.",
            "Se sono io ad annullare una sessione per malattia, emergenza o impossibilità reale, la sessione non verrà addebitata. Se possibile, proporrò un recupero entro un periodo ragionevole.",
            "Eventi di forza maggiore possono richiedere una sospensione temporanea o una ripianificazione senza penali.",
          ],
        },
        six: {
          num: "Sezione 6",
          title: "Vacanze, sospensioni e interruzioni",
          paragraphs: [
            "Le sospensioni programmate per ferie o viaggi devono essere concordate in anticipo. Le pause non danno luogo ad alcuna sessione e non comportano addebito.",
            "Se la collaborazione viene interrotta per motivi clinici gravi, sicurezza, mancato pagamento o comportamenti non compatibili, completo prima tutte le sessioni già pagate (salvo che la causa sia immediata e grave) e rimborsare proporzionalmente le sessioni non erogate.",
            "I periodi futuri non ancora pagati non vengono mai attivati e non richiedono alcun preavviso da parte di nessuna delle due parti.",
          ],
        },
        seven: {
          num: "Sezione 7",
          title: "Cosa faccio — perimetro professionale OSS",
          paragraphs: [
            "Opero esclusivamente entro il perimetro professionale OSS certificato (Legge 42/1999, D.M. 520/2001). Le attività che fornisco includono:",
            "Igiene personale e cura quotidiana · Mobilizzazione e trasferimenti · Preparazione dei pasti e assistenza all'alimentazione · Stimolazione cognitiva e attività supervisionate · Supervisione domestica · Accompagnamento alle visite mediche · Aggiornamenti alla famiglia e diario di assistenza · Supporto ADL per persone con disabilità · Supporto educativo e alla routine per minori con bisogni speciali.",
            "Le attività specifiche incluse nella tua collaborazione sono concordate per iscritto e documentate nel Programma delle attività (Allegato A) allegato al contratto firmato.",
          ],
        },
        eight: {
          num: "Sezione 8",
          title: "Cosa non faccio mai — esclusioni rigide",
          intro:
            "Le seguenti attività sono escluse in modo permanente dal mio perimetro professionale. Verranno sempre rifiutate, indipendentemente dalla situazione, dall'urgenza o dalla richiesta — e il rifiuto non costituisce inadempimento contrattuale:",
          list: [
            "Somministrazione, gestione o supervisione dei farmaci di qualsiasi tipo",
            "Procedure mediche o infermieristiche di qualsiasi natura",
            "Diagnosi cliniche o valutazioni sanitarie",
            "Cura delle ferite, medicazioni o trattamenti post-operatori",
            "Sedute psicologiche o terapeutiche",
            "Assistenza domiciliare 24 ore su 24 — servizio non offerto in alcun caso",
          ],
          closing:
            "Se durante una sessione individuo una situazione clinica che richiede un intervento medico, avviserò immediatamente la famiglia e indirizzerò la situazione al professionista appropriato.",
        },
        nine: {
          num: "Sezione 9",
          title: "Riservatezza e dati personali (GDPR)",
          paragraphs: [
            "Mantengo la massima riservatezza professionale su tutte le informazioni relative alla persona assistita, alla famiglia, alle condizioni di salute e a qualsiasi informazione acquisita nel corso del mio lavoro. Queste informazioni non saranno mai condivise con terzi senza consenso scritto esplicito, salvo obblighi di legge.",
            "I tuoi dati personali e i dati sanitari della persona assistita sono trattati da me in qualità di Titolare del trattamento, esclusivamente per le finalità di questa collaborazione, nel rispetto del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 101/2018. I dati sanitari sono trattati come categoria particolare ai sensi dell'art. 9 GDPR e solo con il tuo consenso esplicito.",
            "I dati vengono conservati per la durata della collaborazione, più 10 anni per obblighi fiscali e 3 anni per eventuali controversie contrattuali. Hai il diritto di accedere, rettificare e chiedere la cancellazione dei tuoi dati in qualsiasi momento contattandomi per iscritto.",
          ],
          pills: ["Conforme al GDPR", "Nessuna condivisione con terzi", "Reg. UE 2016/679", "Obbligo di riservatezza di 3 anni"],
        },
        ten: {
          num: "Sezione 10",
          title: "Legge applicabile e controversie",
          paragraphs: [
            "La presente collaborazione è regolata esclusivamente dalla legge italiana ai sensi degli artt. 2222–2237 del Codice Civile (contratto di prestazione d'opera autonoma). In caso di controversia, entrambe le parti si impegnano a tentare una soluzione amichevole entro 15 giorni prima di ricorrere all'azione legale.",
            "Il foro competente per eventuali controversie non risolte è esclusivamente il Tribunale di Lecco.",
          ],
          note:
            "Il contratto completo firmato — contenente tutti i 17 articoli, l'approvazione specifica delle clausole onerose e il Programma delle attività (Allegato A) — viene trasmesso separatamente dopo l'approvazione della tua richiesta di valutazione. Il documento che stai leggendo qui è un riepilogo dei principali termini di collaborazione ai fini del consenso informato.",
        },
      },
    },
    validation: {
      required: "Compila questo campo.",
      emailInvalid: "Inserisci un indirizzo email valido.",
      phoneInvalid: "Inserisci un numero di telefono valido.",
      roleOtherRequired: "Specifica il tuo ruolo.",
      typeOtherRequired: "Specifica il tipo di persona assistita.",
      sourceOtherRequired: "Specifica come hai trovato questo sito.",
      nightTypeRequired: "Seleziona il tipo di turno notturno.",
      gdprRequired: "Devi accettare il consenso GDPR.",
      termsRequired: "Devi accettare i termini di collaborazione.",
    },
    preferredLanguageOptions: [
  "Italiano",
  "Inglese",
  "Francese",
  "Arabo",
  "Tedesco",
],
  },

  en: {
    seo: {
      title: "Send a request — Accanto Home Care",
      description:
        "Send your home-care request to Ghassen Mansouri, a certified OSS professional. I personally review each request within 48 hours. Lake Como · Lecco · Sondrio · Milan.",
      keywords: [
        "request home care Lecco",
        "contact OSS Como",
        "OSS assessment request",
        "Lake Como home-care request",
        "private caregiver contact Lecco",
      ],
      ogAlt: "Accanto Home Care",
    },
    page: {
      eyebrow: "Assessment request",
      title: "Contact qualification form",
      subtitle: [
        "4 sections · Please fill it in carefully. I review every request individually.",
        "Not every request is accepted.",
      ],
    },
    progress: {
      stepLabel: "Section",
      section: ["Section 1 of 4", "Section 2 of 4", "Section 3 of 4", "Section 4 of 4"],
    },
    sections: {
      requester: "Requester details",
      assistedProfile: "Assisted person's profile",
      logistics: "Logistics and planning",
      duration: "Duration and qualification",
    },
    buttons: {
      back: "← Back",
      next1: "Next → Assisted person's profile",
      next2: "Next → Logistics and planning",
      next3: "Next → Duration and qualification",
      submit: "Send my request →",
    },
    requester: {
  who: "Who are you?",
  role: "Requester role",
  roleOtherPlaceholder: "Specify your role",
  name: "Full name",
  namePlaceholder: "Your full name",
  phone: "Phone",
  phonePlaceholder: "Phone number",
  email: "Email",
  emailPlaceholder: "you@email.com",
  preferredLanguage: "Preferred language",
  languagePlaceholder: "Select a language…",
  municipality: "Municipality of residence",
  municipalityPlaceholder: "e.g. Lecco, Como, Milan…",
  zip: "Postal code",
  zipPlaceholder: "e.g. 23900",
  whoOptions: ["Italian", "Expat / International"],
  roleOptions: ["Directly interested", "Family", "Son / Daughter", "Relative", "Other"],
  languageOptions: ["Italian", "English", "French", "Arabic", "German"],
  countryOptions: [
    "Italy", "Tunisia", "France", "United Kingdom", "United States", "Germany", "Spain",
    "Switzerland", "United Arab Emirates", "Algeria", "Morocco", "Canada", "Australia",
    "Belgium", "Netherlands", "Portugal", "Austria", "Sweden", "Norway", "Denmark",
    "Finland", "Ireland", "Greece", "Turkey", "Egypt", "Saudi Arabia", "Qatar", "Kuwait",
    "Bahrain", "Oman", "Jordan", "Lebanon", "Syria", "Palestine", "Iraq", "Iran",
    "Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal", "China", "Japan",
    "South Korea", "Philippines", "Indonesia", "Malaysia", "Singapore", "Thailand",
    "Vietnam", "Brazil", "Argentina", "Mexico", "Colombia", "Chile", "Peru",
    "South Africa", "Nigeria", "Kenya", "Ethiopia", "Cameroon", "Senegal",
  ],
},
    assistedProfile: {
      type: "Type of assisted person",
      typeOtherPlaceholder: "Specify the type",
      age: "Age range",
      agePlaceholder: "Select an age range…",
      autonomy: "Level of autonomy",
      activities: "Requested activities",
      description: "Description of activities and expectations",
      descriptionPlaceholder: "Describe the situation, any specific needs, routines, and expectations…",
      typeOptions: ["Elderly person", "Person with disability", "Minor", "Other"],
      ageOptions: ["6–17 years", "18–35 years", "36–55 years", "56–70 years", "71–85 years", "86+ years"],
      autonomyOptions: ["Autonomous", "Semi-autonomous", "Not autonomous"],
      activityOptions: [
        "Personal hygiene and personal care",
        "Mobility and transfers",
        "Meal preparation and feeding support",
        "Companionship and cognitive stimulation",
        "Home supervision and safety",
        "External accompaniment",
        "Communication / family report",
        "Cultural / language mediation",
      ],
    },
    logistics: {
      days: "Days per week",
      hours: "Hours per care session",
      slot: "Time slot",
      nightType: "Night shift type",
      startDate: "Requested start date",
      daysOptions: ["1 day", "2 days", "3 days", "4 days", "5 days (Mon–Fri)", "6 days", "7 days"],
      hoursOptions: ["5 hours (minimum)", "6–10 hours", "More than 10 hours"],
      slotOptions: ["Daytime (07:00–22:00)", "Nighttime (22:00–07:00)"],
      nightTypeOptions: [
        "Passive — the person sleeps independently, presence for urgent needs",
        "Active — interventions required during the night",
      ],
      infoBox:
        "Night sessions have specific pricing conditions (passive: €35/h · active: €40/h). They will be confirmed during the assessment call.",
    },
    duration: {
      duration: "Expected support duration",
      previous: "Have you already assessed other professionals?",
      source: "How did you find this website?",
      sourceOtherPlaceholder: "Specify how you found this website",
      urgency: "Urgency level",
      durationOptions: ["Short (less than 1 month)", "Medium term (1–3 months)", "Long term (more than 3 months)", "Not defined"],
      previousOptions: ["Yes", "No, first assessment"],
      sourceOptions: ["Google Search", "Social Media", "WhatsApp", "Referral", "Other"],
      urgencyOptions: ["Normal", "Priority", "Urgent"],
    },
    privacy: {
      title: "Privacy and terms",
      gdpr: "I consent to the processing of personal data under GDPR (EU Regulation 2016/679).",
      terms: "I confirm that I have read and understood the",
      termsTrigger: "collaboration terms",
    },
    notes: {
      submitNote: ["You will receive a reply within 48 business hours.", "Not every request is accepted."],
      successTitle: "Request received.",
      successSub: [
        "Thank you for sending your request.",
        "I will review it personally and contact you within 48 business hours — in your preferred language.",
        "Not every request leads to a collaboration. If there is a fit, I will contact you directly.",
      ],
      urgentTitle: "Need something urgent?",
      urgentBody: "Message me directly and I will reply personally.",
      urgentButton: "WhatsApp →",
    },
    terms: {
      eyebrow: "Accanto · accanto.care",
      title: "Collaboration terms",
      subtitle: "Read before ticking the box — this is what you are agreeing to.",
      intro: [
        "These are the collaboration terms between you (the client) and Ghassen Mansouri, an independent OSS professional (VAT 01103920144).",
        "By ticking the box in the assessment request form, you confirm that you have read and understood all the conditions described here.",
        "The full signed contract is sent separately by email as a PDF after your request has been reviewed and approved.",
      ],
      footer: [
        "Ghassen Mansouri · Independent OSS professional · VAT 01103920144",
        "ghassenmansouri@mail.com · +39 379 230 6809 · accanto.care",
      ],
      closeLabel: "Close terms",
      readAll: "I have read everything ✓",
      sections: {
        one: {
          num: "Section 1",
          title: "Who I am and how I work",
          paragraphs: [
            "I am Ghassen Mansouri, an independent certified OSS (Social Care Worker) professional, operating under Italian law with VAT 01103920144, based in Dervio (LC). I work as a fully independent professional — not as an employee, not through an agency, and not as a subordinate worker.",
            "I provide structured home care exclusively within the certified OSS professional scope, as defined by Law 42/1999 and Ministerial Decree 520/2001. I operate in the provinces of Lecco, Como, Sondrio, and Milan.",
            "I provide care in three categories: elderly care, disability support, and care for minors with special needs (disabled or semi-autonomous).",
          ],
          pills: ["Certified OSS", "VAT 01103920144", "Lecco · Como · Sondrio · Milan", "5 languages"],
        },
        two: {
          num: "Section 2",
          title: "How the collaboration works",
          paragraphs: [
            "Submitting an assessment request does not create a confirmed collaboration. Every request is reviewed personally. Not every request is accepted.",
            "The process is: 1. you submit the assessment form. 2. I review it within 48 business hours. 3. If it fits, I contact you to schedule an introductory call. 4. If confirmed, the contract is sent by email for signature. 5. Sessions begin after the contract is signed and the advance payment is received.",
            "No session takes place before a signed contract and advance payment. This protects both parties.",
          ],
        },
        three: {
          num: "Section 3",
          title: "Rates and payment",
          paragraphs: [
            "Rates are agreed in writing before any contract is signed. The base hourly rate starts at €28/hour for daytime sessions. Surcharges may apply for evening, night, active night shifts, higher-complexity profiles, or locations outside the primary area. The exact rate for your situation is defined during assessment.",
            "Payment is always made in advance, before the start of the sessions in each agreed period — weekly (by the Monday before the week) or monthly (by the first day of the month). Without advance payment there is no confirmed collaboration for that period. In that case I am free to accept other clients.",
            "I accept payment only by bank transfer or cash (within legal limits). No other methods are accepted. All payments are in euros. Any international transfer fees are paid by the client.",
            "Electronic invoices are issued through the Italian SDI system (Aruba) within 12 days of payment receipt, in accordance with Article 6 of DPR 633/1972. I operate under the flat-rate regime — VAT does not apply. Withholding tax does not apply for private clients.",
          ],
        },
        four: {
          num: "Section 4",
          title: "Minimum duration and planning",
          paragraphs: [
            "The minimum duration for any care session is 5 consecutive hours. No shorter session may be agreed, invoiced, or delivered. This applies to all session types — daytime, passive night, and active night — with no exceptions.",
            "The session calendar (days, time slots) is flexible and agreed between us. What is contractually fixed is: the number of hours per session, the number of sessions per period, and the session type. Changes to the time slot require 48 hours' notice and my explicit consent.",
            "I cannot be forced to accept a change to the time slot.",
          ],
        },
        five: {
          num: "Section 5",
          title: "Cancellations, absences, and rescheduling",
          paragraphs: [
            "If you cancel a session with less than 24 hours' notice or do not show up, the session remains fully payable. If cancellation occurs within 48 hours but more than 24 hours beforehand, a partial charge may apply as agreed in the contract.",
            "If I cancel a session due to illness, emergency, or genuine impossibility, the session will not be charged. If possible, I will propose a reasonable rescheduling.",
            "Force majeure events may require a temporary suspension or rescheduling without penalties.",
          ],
        },
        six: {
          num: "Section 6",
          title: "Vacations, suspensions, and interruptions",
          paragraphs: [
            "Planned suspensions for holidays or travel must be agreed in advance. Breaks do not create sessions and do not generate charges.",
            "If the collaboration is interrupted for serious clinical reasons, safety, non-payment, or incompatible behavior, I first complete all already paid sessions (unless the cause is immediate and serious) and refund the proportion of undelivered sessions.",
            "Future periods that have not yet been paid are never activated and require no notice from either party.",
          ],
        },
        seven: {
          num: "Section 7",
          title: "What I do — OSS professional scope",
          paragraphs: [
            "I operate exclusively within the certified OSS professional scope (Law 42/1999, Ministerial Decree 520/2001). The activities I provide include:",
            "Personal hygiene and daily care · Mobility and transfers · Meal preparation and feeding support · Cognitive stimulation and supervised activities · Home supervision · Accompaniment to medical visits · Family updates and care log · ADL support for people with disabilities · Educational and routine support for minors with special needs.",
            "The specific activities included in your collaboration are agreed in writing and documented in the activity program (Appendix A) attached to the signed contract.",
          ],
        },
        eight: {
          num: "Section 8",
          title: "What I never do — strict exclusions",
          intro:
            "The following activities are permanently excluded from my professional scope. They will always be refused, regardless of the situation, urgency, or request — and refusal does not constitute breach of contract:",
          list: [
            "Administration, management, or supervision of medication of any kind",
            "Medical or nursing procedures of any kind",
            "Clinical diagnoses or health assessments",
            "Wound care, dressings, or post-operative treatments",
            "Psychological or therapeutic sessions",
            "24-hour home care — not offered under any circumstances",
          ],
          closing:
            "If I identify a clinical situation during a session that requires medical intervention, I will immediately notify the family and refer the situation to the appropriate professional.",
        },
        nine: {
          num: "Section 9",
          title: "Confidentiality and personal data (GDPR)",
          paragraphs: [
            "I maintain the highest professional confidentiality regarding all information related to the assisted person, the family, health conditions, and any information acquired during my work. This information will never be shared with third parties without explicit written consent, except where required by law.",
            "Your personal data and the assisted person's health data are processed by me as the data controller, solely for the purposes of this collaboration, in compliance with EU Regulation 2016/679 (GDPR) and Legislative Decree 101/2018. Health data are processed as a special category under Article 9 GDPR and only with your explicit consent.",
            "Data are retained for the duration of the collaboration, plus 10 years for tax obligations and 3 years for any contractual disputes. You have the right to access, rectify, and request deletion of your data at any time by contacting me in writing.",
          ],
          pills: ["GDPR compliant", "No sharing with third parties", "EU Reg. 2016/679", "3-year confidentiality obligation"],
        },
        ten: {
          num: "Section 10",
          title: "Applicable law and disputes",
          paragraphs: [
            "This collaboration is governed exclusively by Italian law under Articles 2222–2237 of the Civil Code (independent service contract). In the event of a dispute, both parties agree to try to reach an amicable solution within 15 days before taking legal action.",
            "The competent court for any unresolved disputes is exclusively the Court of Lecco.",
          ],
          note:
            "The full signed contract — containing all 17 articles, the specific approval of onerous clauses, and the Activity Program (Appendix A) — is sent separately after approval of your assessment request. The document you are reading here is a summary of the main collaboration terms for informed consent purposes.",
        },
      },
    },
    validation: {
      required: "Please fill in this field.",
      emailInvalid: "Please enter a valid email address.",
      phoneInvalid: "Please enter a valid phone number.",
      roleOtherRequired: "Please specify your role.",
      typeOtherRequired: "Please specify the type of assisted person.",
      sourceOtherRequired: "Please specify how you found this website.",
      nightTypeRequired: "Please select the night shift type.",
      gdprRequired: "You must accept GDPR consent.",
      termsRequired: "You must accept the collaboration terms.",
    },
preferredLanguageOptions: [
  "Italian",
  "English",
  "French",
  "Arabic",
  "German",
],  
},

  fr: {
    seo: {
      title: "Envoyer une demande — Accanto Home Care",
      description:
        "Envoyez votre demande d’assistance à domicile à Ghassen Mansouri, professionnel OSS certifié. J’examine personnellement chaque demande sous 48 heures. Lac de Côme · Lecco · Sondrio · Milan.",
      keywords: [
        "demande assistance à domicile Lecco",
        "contacter OSS Côme",
        "demande évaluation OSS",
        "demande assistance à domicile Lac de Côme",
        "contact aide à domicile Lecco",
      ],
      ogAlt: "Accanto Home Care",
    },
    page: {
      eyebrow: "Demande d’évaluation",
      title: "Formulaire de qualification du contact",
      subtitle: [
        "4 sections · Remplissez-le avec soin. J’examine chaque demande individuellement.",
        "Toutes les demandes ne sont pas acceptées.",
      ],
    },
    progress: {
      stepLabel: "Section",
      section: ["Section 1 sur 4", "Section 2 sur 4", "Section 3 sur 4", "Section 4 sur 4"],
    },
    sections: {
      requester: "Informations du demandeur",
      assistedProfile: "Profil de la personne accompagnée",
      logistics: "Logistique et planification",
      duration: "Durée et qualification",
    },
    buttons: {
      back: "← Retour",
      next1: "Suivant → Profil de la personne accompagnée",
      next2: "Suivant → Logistique et planification",
      next3: "Suivant → Durée et qualification",
      submit: "Envoyer ma demande →",
    },
    requester: {
  who: "Qui êtes-vous ?",
  role: "Rôle du demandeur",
  roleOtherPlaceholder: "Précisez votre rôle",
  name: "Nom complet",
  namePlaceholder: "Votre nom complet",
  phone: "Téléphone",
  phonePlaceholder: "Numéro de téléphone",
  email: "E-mail",
  emailPlaceholder: "vous@email.com",
  preferredLanguage: "Langue préférée",
  languagePlaceholder: "Sélectionnez la langue…",
  municipality: "Commune de résidence",
  municipalityPlaceholder: "ex. Lecco, Côme, Milan…",
  zip: "Code postal",
  zipPlaceholder: "ex. 23900",
  whoOptions: ["Italien", "Expatrié / International"],
  roleOptions: ["Personne concernée", "Famille", "Fils / Fille", "Proche", "Autre"],
  languageOptions: ["Italien", "Anglais", "Français", "Arabe", "Allemand"],
  countryOptions: [
    "Italie", "Tunisie", "France", "Royaume-Uni", "États-Unis", "Allemagne", "Espagne",
    "Suisse", "Émirats arabes unis", "Algérie", "Maroc", "Canada", "Australie", "Belgique",
    "Pays-Bas", "Portugal", "Autriche", "Suède", "Norvège", "Danemark", "Finlande", "Irlande",
    "Grèce", "Turquie", "Égypte", "Arabie saoudite", "Qatar", "Koweït", "Bahreïn", "Oman",
    "Jordanie", "Liban", "Syrie", "Palestine", "Irak", "Iran", "Pakistan", "Inde", "Bangladesh",
    "Sri Lanka", "Népal", "Chine", "Japon", "Corée du Sud", "Philippines", "Indonésie",
    "Malaisie", "Singapour", "Thaïlande", "Vietnam", "Brésil", "Argentine", "Mexique",
    "Colombie", "Chili", "Pérou", "Afrique du Sud", "Nigeria", "Kenya", "Éthiopie",
    "Cameroun", "Sénégal",
  ],
},
    assistedProfile: {
      type: "Type de personne accompagnée",
      typeOtherPlaceholder: "Précisez le type",
      age: "Tranche d’âge",
      agePlaceholder: "Sélectionnez la tranche d’âge…",
      autonomy: "Niveau d’autonomie",
      activities: "Activités demandées",
      description: "Description des activités et des attentes",
      descriptionPlaceholder: "Décrivez la situation, les besoins spécifiques, les routines et les attentes…",
      typeOptions: ["Personne âgée", "Personne en situation de handicap", "Mineur", "Autre"],
      ageOptions: ["6–17 ans", "18–35 ans", "36–55 ans", "56–70 ans", "71–85 ans", "86+ ans"],
      autonomyOptions: ["Autonome", "Semi-autonome", "Non autonome"],
      activityOptions: [
        "Hygiène personnelle et soins",
        "Mobilisation et transferts",
        "Préparation des repas et aide à l’alimentation",
        "Compagnie et stimulation cognitive",
        "Supervision et sécurité à domicile",
        "Accompagnement extérieur",
        "Communication / rapport à la famille",
        "Médiation culturelle / linguistique",
      ],
    },
    logistics: {
      days: "Jours par semaine",
      hours: "Heures par séance de soin",
      slot: "Créneau horaire",
      nightType: "Type de service de nuit",
      startDate: "Date de début demandée",
      daysOptions: ["1 jour", "2 jours", "3 jours", "4 jours", "5 jours (lun–ven)", "6 jours", "7 jours"],
      hoursOptions: ["5 heures (minimum)", "6–10 heures", "Plus de 10 heures"],
      slotOptions: ["De jour (07:00–22:00)", "De nuit (22:00–07:00)"],
      nightTypeOptions: [
        "Passif — la personne dort de manière autonome, présence en cas de besoin",
        "Actif — interventions requises pendant la nuit",
      ],
      infoBox:
        "Les séances de nuit ont des conditions tarifaires spécifiques (passif : 35 €/h · actif : 40 €/h). Elles seront confirmées lors de l’entretien d’évaluation.",
    },
    duration: {
      duration: "Durée prévue du soutien",
      previous: "Avez-vous déjà évalué d’autres professionnels ?",
      source: "Comment avez-vous trouvé ce site ?",
      sourceOtherPlaceholder: "Précisez comment vous avez trouvé ce site",
      urgency: "Niveau d’urgence",
      durationOptions: ["Court terme (moins d’1 mois)", "Moyen terme (1–3 mois)", "Long terme (plus de 3 mois)", "Non défini"],
      previousOptions: ["Oui", "Non, première évaluation"],
      sourceOptions: ["Recherche Google", "Réseaux sociaux", "WhatsApp", "Recommandation", "Autre"],
      urgencyOptions: ["Normale", "Prioritaire", "Urgente"],
    },
    privacy: {
      title: "Confidentialité et conditions",
      gdpr: "Je consens au traitement des données personnelles conformément au RGPD (Règlement UE 2016/679).",
      terms: "Je déclare avoir lu et compris les",
      termsTrigger: "conditions de collaboration",
    },
    notes: {
      submitNote: ["Vous recevrez une réponse sous 48 heures ouvrables.", "Toutes les demandes ne sont pas acceptées."],
      successTitle: "Demande reçue.",
      successSub: [
        "Merci d’avoir envoyé votre demande.",
        "Je l’examinerai personnellement et vous contacterai sous 48 heures ouvrables — dans votre langue préférée.",
        "Toutes les demandes ne débouchent pas sur une collaboration. S’il y a compatibilité, je vous contacterai directement.",
      ],
      urgentTitle: "Besoin urgent ?",
      urgentBody: "Envoyez-moi un message directement et je répondrai personnellement.",
      urgentButton: "WhatsApp →",
    },
    terms: {
      eyebrow: "Accanto · accanto.care",
      title: "Conditions de collaboration",
      subtitle: "Lisez avant de cocher la case — c’est ce que vous acceptez.",
      intro: [
        "Voici les conditions de collaboration entre vous (le client) et Ghassen Mansouri, professionnel OSS indépendant (TVA 01103920144).",
        "En cochant la case du formulaire de demande d’évaluation, vous confirmez avoir lu et compris toutes les conditions décrites ici.",
        "Le contrat complet signé est envoyé séparément par e-mail au format PDF, après l’évaluation et l’approbation de votre demande.",
      ],
      footer: [
        "Ghassen Mansouri · Professionnel OSS indépendant · TVA 01103920144",
        "ghassenmansouri@mail.com · +39 379 230 6809 · accanto.care",
      ],
      closeLabel: "Fermer les conditions",
      readAll: "J’ai tout lu ✓",
      sections: {
        one: {
          num: "Section 1",
          title: "Qui je suis et comment je travaille",
          paragraphs: [
            "Je suis Ghassen Mansouri, professionnel indépendant certifié OSS (Auxiliaire socio-sanitaire), exerçant sous le droit italien avec TVA 01103920144, basé à Dervio (LC). Je travaille en toute indépendance — pas comme salarié, pas via une agence et pas comme travailleur subordonné.",
            "Je fournis une assistance à domicile structurée exclusivement dans le périmètre professionnel OSS certifié, tel que défini par la loi 42/1999 et le décret ministériel 520/2001. J’interviens dans les provinces de Lecco, Côme, Sondrio et Milan.",
            "J’offre une assistance dans trois catégories : aide aux personnes âgées, soutien au handicap et accompagnement des mineurs ayant des besoins spécifiques (handicapés ou semi-autonomes).",
          ],
          pills: ["OSS certifié", "TVA 01103920144", "Lecco · Côme · Sondrio · Milan", "5 langues"],
        },
        two: {
          num: "Section 2",
          title: "Comment fonctionne la collaboration",
          paragraphs: [
            "Envoyer une demande d’évaluation ne constitue pas une collaboration confirmée. Chaque demande est examinée personnellement. Toutes ne sont pas acceptées.",
            "Le processus est le suivant : 1. vous envoyez le formulaire d’évaluation. 2. je l’examine sous 48 heures ouvrables. 3. Si c’est compatible, je vous contacte pour planifier un appel de présentation. 4. Si c’est confirmé, le contrat est envoyé par e-mail pour signature. 5. Les séances commencent après la signature du contrat et la réception du paiement anticipé.",
            "Aucune séance n’a lieu avant un contrat signé et un paiement anticipé. Cela protège les deux parties.",
          ],
        },
        three: {
          num: "Section 3",
          title: "Tarifs et paiement",
          paragraphs: [
            "Les tarifs sont convenus par écrit avant toute signature de contrat. Le tarif horaire de base commence à 28 €/heure pour les séances de jour. Des majorations peuvent s’appliquer le soir, la nuit, pour les services de nuit actifs, les profils à forte complexité ou les localisations hors zone principale. Le tarif exact applicable à votre situation est défini lors de l’évaluation.",
            "Le paiement est toujours effectué à l’avance, avant le début des séances de chaque période convenue — hebdomadaire (au plus tard le lundi précédant la semaine) ou mensuelle (au plus tard le premier jour du mois). Sans paiement anticipé, il n’existe aucune collaboration confirmée pour cette période. Dans ce cas, je suis libre d’accepter d’autres clients.",
            "J’accepte uniquement les paiements par virement bancaire ou en espèces (dans les limites légales). Aucun autre moyen n’est accepté. Tous les paiements sont en euros. Les éventuels frais de virement international sont à la charge du client.",
            "Les factures électroniques sont émises via le système italien SDI (Aruba) dans les 12 jours suivant la réception du paiement, conformément à l’article 6 du DPR 633/1972. J’opère sous le régime forfaitaire — la TVA ne s’applique pas. La retenue à la source ne s’applique pas aux particuliers.",
          ],
        },
        four: {
          num: "Section 4",
          title: "Durée minimale et planification",
          paragraphs: [
            "La durée minimale de toute séance de soin est de 5 heures consécutives. Aucune séance plus courte ne peut être convenue, facturée ou exécutée. Cela s’applique à tous les types de séance — de jour, de nuit passive et de nuit active — sans exception.",
            "Le calendrier des séances (jours, créneaux horaires) est flexible et convenu entre nous. Ce qui est fixé contractuellement est : le nombre d’heures par séance, le nombre de séances par période et le type de séance. Les changements de créneau nécessitent un préavis de 48 heures et mon consentement explicite.",
            "Je ne peux pas être contraint d’accepter un changement de créneau horaire.",
          ],
        },
        five: {
          num: "Section 5",
          title: "Annulations, absences et report",
          paragraphs: [
            "Si vous annulez une séance avec moins de 24 heures de préavis ou si vous ne vous présentez pas, la séance reste due intégralement. Si l’annulation a lieu dans les 48 heures mais plus de 24 heures à l’avance, une charge partielle peut s’appliquer selon le contrat.",
            "Si j’annule une séance pour maladie, urgence ou impossibilité réelle, la séance ne sera pas facturée. Si possible, je proposerai un report raisonnable.",
            "Les cas de force majeure peuvent nécessiter une suspension temporaire ou un report sans pénalité.",
          ],
        },
        six: {
          num: "Section 6",
          title: "Vacances, suspensions et interruptions",
          paragraphs: [
            "Les suspensions programmées pour congés ou déplacements doivent être convenues à l’avance. Les pauses ne génèrent aucune séance et n’entraînent aucun frais.",
            "Si la collaboration est interrompue pour raisons cliniques graves, de sécurité, de non-paiement ou de comportement incompatible, j’achève d’abord toutes les séances déjà payées (sauf si la cause est immédiate et grave) et rembourse proportionnellement les séances non effectuées.",
            "Les périodes futures non encore payées ne sont jamais activées et n’exigent aucun préavis de la part de l’une ou l’autre partie.",
          ],
        },
        seven: {
          num: "Section 7",
          title: "Ce que je fais — périmètre professionnel OSS",
          paragraphs: [
            "J’interviens exclusivement dans le périmètre professionnel OSS certifié (loi 42/1999, décret ministériel 520/2001). Les activités que je fournis comprennent :",
            "Hygiène personnelle et soins quotidiens · Mobilisation et transferts · Préparation des repas et aide à l’alimentation · Stimulation cognitive et activités supervisées · Supervision à domicile · Accompagnement aux visites médicales · Mises à jour à la famille et journal de soins · Soutien ADL pour les personnes en situation de handicap · Soutien éducatif et à la routine pour les mineurs ayant des besoins spécifiques.",
            "Les activités spécifiques incluses dans votre collaboration sont convenues par écrit et documentées dans le programme des activités (Annexe A) joint au contrat signé.",
          ],
        },
        eight: {
          num: "Section 8",
          title: "Ce que je ne fais jamais — exclusions strictes",
          intro:
            "Les activités suivantes sont exclues de manière permanente de mon périmètre professionnel. Elles seront toujours refusées, quelle que soit la situation, l’urgence ou la demande — et le refus ne constitue pas une violation contractuelle :",
          list: [
            "Administration, gestion ou supervision de médicaments de toute nature",
            "Procédures médicales ou infirmières de toute nature",
            "Diagnostics cliniques ou évaluations de santé",
            "Soins de plaies, pansements ou traitements post-opératoires",
            "Séances psychologiques ou thérapeutiques",
            "Aide à domicile 24 heures sur 24 — service non proposé en aucun cas",
          ],
          closing:
            "Si, pendant une séance, j’identifie une situation clinique nécessitant une intervention médicale, j’avertirai immédiatement la famille et orienterai la situation vers le professionnel approprié.",
        },
        nine: {
          num: "Section 9",
          title: "Confidentialité et données personnelles (RGPD)",
          paragraphs: [
            "Je maintiens la plus stricte confidentialité professionnelle sur toutes les informations relatives à la personne accompagnée, à la famille, à l’état de santé et à toute information recueillie dans le cadre de mon travail. Ces informations ne seront jamais partagées avec des tiers sans consentement écrit explicite, sauf obligation légale.",
            "Vos données personnelles et les données de santé de la personne accompagnée sont traitées par moi en tant que responsable du traitement, uniquement aux fins de cette collaboration, dans le respect du Règlement UE 2016/679 (RGPD) et du décret législatif 101/2018. Les données de santé sont traitées comme catégorie particulière au sens de l’article 9 du RGPD et uniquement avec votre consentement explicite.",
            "Les données sont conservées pendant la durée de la collaboration, plus 10 ans pour les obligations fiscales et 3 ans pour d’éventuels litiges contractuels. Vous avez le droit d’accéder, de rectifier et de demander la suppression de vos données à tout moment en me contactant par écrit.",
          ],
          pills: ["Conforme au RGPD", "Aucun partage avec des tiers", "Règl. UE 2016/679", "Obligation de confidentialité de 3 ans"],
        },
        ten: {
          num: "Section 10",
          title: "Droit applicable et litiges",
          paragraphs: [
            "Cette collaboration est régie exclusivement par le droit italien conformément aux articles 2222–2237 du Code civil (contrat de prestation indépendante). En cas de litige, les deux parties s’engagent à tenter une solution amiable dans les 15 jours avant toute action en justice.",
            "Le tribunal compétent pour tout litige non résolu est exclusivement le tribunal de Lecco.",
          ],
          note:
            "Le contrat complet signé — contenant les 17 articles, l’approbation spécifique des clauses onéreuses et le programme des activités (Annexe A) — est envoyé séparément après approbation de votre demande d’évaluation. Le document que vous lisez ici est un résumé des principales conditions de collaboration à des fins de consentement éclairé.",
        },
      },
    },
    validation: {
      required: "Veuillez remplir ce champ.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      phoneInvalid: "Veuillez saisir un numéro de téléphone valide.",
      roleOtherRequired: "Veuillez préciser votre rôle.",
      typeOtherRequired: "Veuillez préciser le type de personne accompagnée.",
      sourceOtherRequired: "Veuillez préciser comment vous avez trouvé ce site.",
      nightTypeRequired: "Veuillez sélectionner le type de service de nuit.",
      gdprRequired: "Vous devez accepter le consentement RGPD.",
      termsRequired: "Vous devez accepter les conditions de collaboration.",
    },
preferredLanguageOptions: [
  "Italien",
  "Anglais",
  "Français",
  "Arabe",
  "Allemand",
],  
},

  ar: {
    seo: {
      title: "إرسال طلب — Accanto Home Care",
      description:
        "أرسل طلب الرعاية المنزلية إلى Ghassen Mansouri، وهو محترف OSS معتمد. أراجع كل طلب شخصيًا خلال 48 ساعة. بحيرة كومو · ليكو · سوندريو · ميلانو.",
      keywords: [
        "طلب رعاية منزلية ليكو",
        "التواصل مع OSS كومو",
        "طلب تقييم OSS",
        "طلب رعاية منزلية بحيرة كومو",
        "التواصل مع مقدم رعاية خاص ليكو",
      ],
      ogAlt: "Accanto Home Care",
    },
    page: {
      eyebrow: "طلب تقييم",
      title: "نموذج تأهيل التواصل",
      subtitle: ["4 أقسام · الرجاء تعبئته بعناية. أراجع كل طلب بشكل فردي.", "ليس كل طلب يتم قبوله."],
    },
    progress: {
      stepLabel: "القسم",
      section: ["القسم 1 من 4", "القسم 2 من 4", "القسم 3 من 4", "القسم 4 من 4"],
    },
    sections: {
      requester: "بيانات مقدم الطلب",
      assistedProfile: "ملف الشخص المستفيد من الخدمة",
      logistics: "اللوجستيات والتخطيط",
      duration: "المدة والتأهيل",
    },
    buttons: {
      back: "← رجوع",
      next1: "التالي → ملف الشخص المستفيد من الخدمة",
      next2: "التالي → اللوجستيات والتخطيط",
      next3: "التالي → المدة والتأهيل",
      submit: "إرسال طلبي →",
    },
    requester: {
  who: "من أنت؟",
  role: "صفة مقدم الطلب",
  roleOtherPlaceholder: "حدد صفتك",
  name: "الاسم الكامل",
  namePlaceholder: "اسمك الكامل",
  phone: "الهاتف",
  phonePlaceholder: "رقم الهاتف",
  email: "البريد الإلكتروني",
  emailPlaceholder: "you@example.com",
  preferredLanguage: "اللغة المفضلة",
  languagePlaceholder: "اختر اللغة…",
  municipality: "بلدية الإقامة",
  municipalityPlaceholder: "مثال: ليتشي، كومو، ميلانو…",
  zip: "الرمز البريدي",
  zipPlaceholder: "مثال: 23900",
  whoOptions: ["إيطالي", "مغترب / دولي"],
  roleOptions: ["المعني مباشرة", "العائلة", "ابن / ابنة", "قريب", "أخرى"],
  languageOptions: ["الإيطالية", "الإنجليزية", "الفرنسية", "العربية", "الألمانية"],
  countryOptions: [
    "إيطاليا", "تونس", "فرنسا", "المملكة المتحدة", "الولايات المتحدة", "ألمانيا", "إسبانيا",
    "سويسرا", "الإمارات العربية المتحدة", "الجزائر", "المغرب", "كندا", "أستراليا", "بلجيكا",
    "هولندا", "البرتغال", "النمسا", "السويد", "النرويج", "الدنمارك", "فنلندا", "أيرلندا",
    "اليونان", "تركيا", "مصر", "المملكة العربية السعودية", "قطر", "الكويت", "البحرين",
    "عُمان", "الأردن", "لبنان", "سوريا", "فلسطين", "العراق", "إيران", "باكستان", "الهند",
    "بنغلاديش", "سريلانكا", "نيبال", "الصين", "اليابان", "كوريا الجنوبية", "الفلبين",
    "إندونيسيا", "ماليزيا", "سنغافورة", "تايلاند", "فيتنام", "البرازيل", "الأرجنتين",
    "المكسيك", "كولومبيا", "تشيلي", "بيرو", "جنوب أفريقيا", "نيجيريا", "كينيا", "إثيوبيا",
    "الكاميرون", "السنغال",
  ],
},
    assistedProfile: {
      type: "نوع الشخص المستفيد",
      typeOtherPlaceholder: "حدد النوع",
      age: "الفئة العمرية",
      agePlaceholder: "اختر الفئة العمرية…",
      autonomy: "مستوى الاستقلالية",
      activities: "الأنشطة المطلوبة",
      description: "وصف الأنشطة والتوقعات",
      descriptionPlaceholder: "وصف الوضع، والاحتياجات الخاصة، والروتين، والتوقعات…",
      typeOptions: ["مسن", "شخص ذو إعاقة", "قاصر", "أخرى"],
      ageOptions: ["6–17 سنة", "18–35 سنة", "36–55 سنة", "56–70 سنة", "71–85 سنة", "86+ سنة"],
      autonomyOptions: ["مستقل", "شبه مستقل", "غير مستقل"],
      activityOptions: [
        "النظافة الشخصية والعناية الشخصية",
        "الحركة والنقل",
        "تحضير الطعام والمساعدة في الأكل",
        "المرافقة والتحفيز الذهني",
        "الإشراف والسلامة في المنزل",
        "المرافقة الخارجية",
        "التواصل / تقرير للعائلة",
        "الوساطة الثقافية / اللغوية",
      ],
    },
    logistics: {
      days: "الأيام في الأسبوع",
      hours: "ساعات كل جلسة",
      slot: "الفترة الزمنية",
      nightType: "نوع النوبة الليلية",
      startDate: "تاريخ بدء الطلب",
      daysOptions: ["يوم واحد", "يومان", "3 أيام", "4 أيام", "5 أيام (الاثنين–الجمعة)", "6 أيام", "7 أيام"],
      hoursOptions: ["5 ساعات (الحد الأدنى)", "6–10 ساعات", "أكثر من 10 ساعات"],
      slotOptions: ["نهارية (07:00–22:00)", "ليلية (22:00–07:00)"],
      nightTypeOptions: [
        "سلبية — الشخص ينام بشكل مستقل، والحضور عند الحاجة المفاجئة",
        "نشطة — تدخلات مطلوبة خلال الليل",
      ],
      infoBox:
        "للجلسات الليلية شروط سعرية خاصة (سلبية: 35 يورو/ساعة · نشطة: 40 يورو/ساعة). سيتم تأكيدها أثناء مقابلة التقييم.",
    },
    duration: {
      duration: "المدة المتوقعة للدعم",
      previous: "هل سبق أن قيّمتَ محترفين آخرين؟",
      source: "كيف وجدت هذا الموقع؟",
      sourceOtherPlaceholder: "حدّد كيف وجدت هذا الموقع",
      urgency: "مستوى الاستعجال",
      durationOptions: ["قصيرة (أقل من شهر)", "متوسطة الأجل (1–3 أشهر)", "طويلة الأجل (أكثر من 3 أشهر)", "غير محددة"],
      previousOptions: ["نعم", "لا، أول تقييم"],
      sourceOptions: ["بحث Google", "وسائل التواصل الاجتماعي", "WhatsApp", "إحالة", "أخرى"],
      urgencyOptions: ["عادي", "أولوية", "عاجل"],
    },
    privacy: {
      title: "الخصوصية والشروط",
      gdpr: "أوافق على معالجة البيانات الشخصية وفقًا لـ GDPR (اللائحة الأوروبية 2016/679).",
      terms: "أقر بأنني قرأت وفهمت",
      termsTrigger: "شروط التعاون",
    },
    notes: {
      submitNote: ["ستتلقى ردًا خلال 48 ساعة عمل.", "ليس كل طلب يتم قبوله."],
      successTitle: "تم استلام الطلب.",
      successSub: [
        "شكرًا لإرسال طلبك.",
        "سأراجعه شخصيًا وسأتواصل معك خلال 48 ساعة عمل — بلغتك المفضلة.",
        "ليس كل طلب يؤدي إلى تعاون. إذا كان هناك توافق، فسأتواصل معك مباشرة.",
      ],
      urgentTitle: "هل لديك حاجة عاجلة؟",
      urgentBody: "راسلني مباشرة وسأرد عليك شخصيًا.",
      urgentButton: "واتساب →",
    },
    terms: {
      eyebrow: "Accanto · accanto.care",
      title: "شروط التعاون",
      subtitle: "اقرأ قبل تحديد المربع — هذا ما توافق عليه.",
      intro: [
        "هذه هي شروط التعاون بينك (العميل) وبين Ghassen Mansouri، وهو محترف OSS مستقل (رقم ضريبي 01103920144).",
        "بتحديد المربع في نموذج طلب التقييم، تؤكد أنك قرأت وفهمت جميع الشروط الموضحة هنا.",
        "يتم إرسال العقد الكامل الموقع بشكل منفصل عبر البريد الإلكتروني بصيغة PDF بعد مراجعة طلبك والموافقة عليه.",
      ],
      footer: [
        "Ghassen Mansouri · محترف OSS مستقل · رقم ضريبي 01103920144",
        "ghassenmansouri@mail.com · +39 379 230 6809 · accanto.care",
      ],
      closeLabel: "إغلاق الشروط",
      readAll: "لقد قرأت كل شيء ✓",
      sections: {
        one: {
          num: "القسم 1",
          title: "من أنا وكيف أعمل",
          paragraphs: [
            "أنا Ghassen Mansouri، محترف مستقل معتمد OSS (مساعد اجتماعي-صحي)، أعمل وفق القانون الإيطالي برقم ضريبي 01103920144، ومقرّي في Dervio (LC). أعمل كمحترف مستقل بالكامل — لست موظفًا، ولا أعمل عبر وكالة، ولا أعمل كعامل تابع.",
            "أقدّم رعاية منزلية منظمة حصريًا ضمن النطاق المهني المعتمد لـ OSS، كما هو محدد في القانون 42/1999 والمرسوم الوزاري 520/2001. أعمل في محافظات ليكو وكومو وسوندريو وميلانو.",
            "أقدّم الرعاية في ثلاث فئات: رعاية المسنين، دعم ذوي الإعاقة، ورعاية القاصرين ذوي الاحتياجات الخاصة (ذوي الإعاقة أو شبه المستقلين).",
          ],
          pills: ["OSS معتمد", "رقم ضريبي 01103920144", "ليكو · كومو · سوندريو · ميلانو", "5 لغات"],
        },
        two: {
          num: "القسم 2",
          title: "كيف يعمل التعاون",
          paragraphs: [
            "إرسال طلب تقييم لا يعني وجود تعاون مؤكد. يتم مراجعة كل طلب شخصيًا. ليس كل طلب يتم قبوله.",
            "العملية هي: 1. ترسل نموذج التقييم. 2. أراجعه خلال 48 ساعة عمل. 3. إذا كان مناسبًا، أتواصل معك لتحديد مكالمة تعريفية. 4. إذا تم التأكيد، يُرسل العقد عبر البريد الإلكتروني للتوقيع. 5. تبدأ الجلسات بعد توقيع العقد واستلام الدفعة المقدمة.",
            "لا تُجرى أي جلسة قبل توقيع العقد واستلام الدفعة المقدمة. هذا يحمي الطرفين.",
          ],
        },
        three: {
          num: "القسم 3",
          title: "الأسعار والدفع",
          paragraphs: [
            "تتم الاتفاقية على الأسعار كتابيًا قبل توقيع أي عقد. يبدأ السعر الأساسي من 28 يورو/ساعة للجلسات النهارية. قد تُضاف رسوم في المساء أو الليل أو النوبات الليلية النشطة أو الحالات الأعلى تعقيدًا أو المواقع خارج المنطقة الرئيسية. يتم تحديد السعر الدقيق لحالتك أثناء التقييم.",
            "يتم الدفع دائمًا مقدمًا، قبل بدء الجلسات لكل فترة متفق عليها — أسبوعيًا (حتى يوم الاثنين السابق للأسبوع) أو شهريًا (حتى اليوم الأول من الشهر). بدون الدفع المسبق لا يوجد تعاون مؤكد لتلك الفترة. وفي هذه الحالة يحق لي قبول عملاء آخرين.",
            "أقبل الدفع فقط عبر التحويل البنكي أو نقدًا (ضمن الحدود القانونية). لا تُقبل أي طرق أخرى. جميع المدفوعات باليورو. أي رسوم تحويل دولي يتحملها العميل.",
            "يتم إصدار الفاتورة الإلكترونية عبر النظام الإيطالي SDI (Aruba) خلال 12 يومًا من استلام الدفع، وفقًا للمادة 6 من المرسوم الرئاسي 633/1972. أعمل ضمن النظام الضريبي المبسط — لا تنطبق ضريبة القيمة المضافة. ولا ينطبق الاستقطاع الضريبي على الأفراد.",
          ],
        },
        four: {
          num: "القسم 4",
          title: "الحد الأدنى للمدة والتخطيط",
          paragraphs: [
            "الحد الأدنى لأي جلسة رعاية هو 5 ساعات متتالية. لا يمكن الاتفاق أو الفوترة أو تقديم أي جلسة أقصر من ذلك. ينطبق هذا على جميع أنواع الجلسات — النهارية والليلية السلبية والليلية النشطة — دون استثناء.",
            "جدول الجلسات (الأيام، الفترات الزمنية) مرن ويتم الاتفاق عليه بيننا. ما يثبت تعاقديًا هو: عدد الساعات لكل جلسة، عدد الجلسات لكل فترة، ونوع الجلسة. تتطلب تغييرات الفترة الزمنية إشعارًا مسبقًا 48 ساعة وموافقتي الصريحة.",
            "لا يمكن إلزامي بقبول تغيير الفترة الزمنية.",
          ],
        },
        five: {
          num: "القسم 5",
          title: "الإلغاء، الغياب، وإعادة الجدولة",
          paragraphs: [
            "إذا ألغيت جلسة قبل أقل من 24 ساعة أو لم تحضر، تبقى الجلسة مستحقة بالكامل. إذا كان الإلغاء خلال 48 ساعة ولكن قبل أكثر من 24 ساعة، فقد تُطبق رسوم جزئية حسب ما هو متفق عليه في العقد.",
            "إذا ألغيتُ أنا جلسة بسبب المرض أو الطوارئ أو عدم القدرة الحقيقية، فلن تُحتسب الجلسة. وإذا أمكن، سأقترح موعدًا بديلًا مناسبًا.",
            "قد تتطلب حالات القوة القاهرة تعليقًا مؤقتًا أو إعادة جدولة دون عقوبات.",
          ],
        },
        six: {
          num: "القسم 6",
          title: "الإجازات، التعليق، والانقطاع",
          paragraphs: [
            "يجب الاتفاق مسبقًا على التعليقات المخططة بسبب الإجازات أو السفر. لا تنتج الفترات المتوقفة أي جلسات ولا أي رسوم.",
            "إذا تم إنهاء التعاون لأسباب سريرية خطيرة أو تتعلق بالسلامة أو عدم الدفع أو سلوك غير متوافق، فأنا أكمل أولًا جميع الجلسات المدفوعة مسبقًا (إلا إذا كان السبب فوريًا وخطيرًا) ثم أعيد النسبة المقابلة للجلسات غير المنفذة.",
            "الفترات المستقبلية غير المدفوعة مسبقًا لا يتم تفعيلها أبدًا ولا تتطلب أي إشعار من أي طرف.",
          ],
        },
        seven: {
          num: "القسم 7",
          title: "ما أقدمه — نطاق OSS المهني",
          paragraphs: [
            "أعمل حصريًا ضمن النطاق المهني المعتمد لـ OSS (القانون 42/1999، المرسوم الوزاري 520/2001). وتشمل الخدمات التي أقدمها:",
            "النظافة الشخصية والعناية اليومية · التحريك والنقل · تحضير الوجبات والمساعدة في الأكل · التحفيز الذهني والأنشطة المراقبة · الإشراف المنزلي · المرافقة إلى الزيارات الطبية · تحديثات للعائلة وسجل الرعاية · دعم ADL لذوي الإعاقة · الدعم التعليمي والروتيني للقاصرين ذوي الاحتياجات الخاصة.",
            "يتم الاتفاق كتابيًا على الأنشطة المحددة ضمن تعاونك وتوثيقها في برنامج الأنشطة (الملحق A) المرفق بالعقد الموقع.",
          ],
        },
        eight: {
          num: "القسم 8",
          title: "ما لا أفعله أبدًا — استثناءات صارمة",
          intro:
            "الأنشطة التالية مستثناة بشكل دائم من نطاقي المهني. سيتم رفضها دائمًا، بغض النظر عن الحالة أو الاستعجال أو الطلب — والرفض لا يُعد إخلالًا بالعقد:",
          list: [
            "إعطاء أو إدارة أو الإشراف على الأدوية بأي نوع",
            "أي إجراءات طبية أو تمريضية من أي نوع",
            "التشخيص السريري أو التقييمات الصحية",
            "العناية بالجروح أو الضمادات أو العلاجات بعد العمليات",
            "الجلسات النفسية أو العلاجية",
            "رعاية منزلية 24 ساعة — غير متوفرة تحت أي ظرف",
          ],
          closing:
            "إذا لاحظت أثناء الجلسة حالة سريرية تتطلب تدخلًا طبيًا، فسأبلغ العائلة فورًا وأحوّل الحالة إلى المختص المناسب.",
        },
        nine: {
          num: "القسم 9",
          title: "السرية والبيانات الشخصية (GDPR)",
          paragraphs: [
            "أحافظ على أعلى درجات السرية المهنية بشأن جميع المعلومات المتعلقة بالشخص المستفيد والعائلة والحالة الصحية وأي معلومات أكتسبها أثناء عملي. لن تتم مشاركة هذه المعلومات مع أي طرف ثالث دون موافقة كتابية صريحة، إلا إذا كان القانون يفرض ذلك.",
            "تتم معالجة بياناتك الشخصية وبيانات الصحة الخاصة بالشخص المستفيد من جانبي بصفتي المتحكم في البيانات، حصريًا لأغراض هذا التعاون، وفقًا للائحة الأوروبية 2016/679 (GDPR) والمرسوم التشريعي 101/2018. تُعامل البيانات الصحية كفئة خاصة وفق المادة 9 من GDPR وبموافقتك الصريحة فقط.",
            "تُحفظ البيانات طوال مدة التعاون، بالإضافة إلى 10 سنوات للالتزامات الضريبية و3 سنوات لأي نزاع تعاقدي. لديك الحق في الوصول إلى بياناتك وتصحيحها وطلب حذفها في أي وقت عبر التواصل معي كتابيًا.",
          ],
          pills: ["متوافق مع GDPR", "لا مشاركة مع أطراف ثالثة", "اللائحة الأوروبية 2016/679", "التزام سرية لمدة 3 سنوات"],
        },
        ten: {
          num: "القسم 10",
          title: "القانون المعمول به والنزاعات",
          paragraphs: [
            "يخضع هذا التعاون حصريًا للقانون الإيطالي بموجب المواد 2222–2237 من القانون المدني (عقد خدمة مستقل). في حال حدوث نزاع، يلتزم الطرفان بمحاولة الوصول إلى حل ودي خلال 15 يومًا قبل اللجوء إلى القضاء.",
            "المحكمة المختصة بأي نزاع غير محلول هي حصريًا محكمة ليكو.",
          ],
          note:
            "يتم إرسال العقد الكامل الموقع — الذي يتضمن جميع المواد الـ 17، والموافقة المحددة على البنود المرهقة، وبرنامج الأنشطة (الملحق A) — بشكل منفصل بعد الموافقة على طلب التقييم. المستند الذي تقرأه هنا هو ملخص للشروط الرئيسية للتعاون لأغراض الموافقة المستنيرة.",
        },
      },
    },
    validation: {
      required: "يرجى تعبئة هذا الحقل.",
      emailInvalid: "يرجى إدخال بريد إلكتروني صالح.",
      phoneInvalid: "يرجى إدخال رقم هاتف صالح.",
      roleOtherRequired: "يرجى تحديد صفتك.",
      typeOtherRequired: "يرجى تحديد نوع الشخص المستفيد.",
      sourceOtherRequired: "يرجى تحديد كيف وجدت هذا الموقع.",
      nightTypeRequired: "يرجى تحديد نوع النوبة الليلية.",
      gdprRequired: "يجب عليك قبول موافقة GDPR.",
      termsRequired: "يجب عليك قبول شروط التعاون.",
    },
  preferredLanguageOptions: [
  "الإيطالية",
  "الإنجليزية",
  "الفرنسية",
  "العربية",
  "الألمانية",
],},
};

export function getRequestCopy(locale: Locale) {
  return requestCopy[locale];
}

export function buildRequestMetadata(locale: Locale, pathname = "/request"): Metadata {
  const copy = requestCopy[locale].seo;
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
      languages: Object.fromEntries(locales.map((l) => [hreflangByLocale[l], localizedPath(l, pathname)])),
    },
    openGraph: {
      type: "website",
      url: `https://accanto.care${canonicalPath}`,
      title: copy.title,
      description: copy.description,
      siteName: "Accanto",
      locale: ogLocaleByLocale[locale],
      images: [
        {
          url: "/Images/og-image.jpg",
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
      images: ["/Images/og-image.jpg"],
    },
    icons: {
      icon: "/Images/logo.png",
      apple: "/Images/apple-touch-icon.png",
    },
  };
}