// src/lib/i18n/contract.ts
import type { Locale } from "./config";
import { localizedPath } from "./config";
import type { Metadata } from "next";

type ContractArticle = {
  label: string;
  title: string;
  text: string;
};

type ContractCopy = {
  dir: "ltr" | "rtl";
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  page: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    framingTitle: string;
    framingText: string;
    cards: Array<{
      num: string;
      title: string;
      desc: string;
      tags: string[];
      green?: boolean;
      terra?: boolean;
    }>;
    draftEyebrow: string;
    draftMainTitle: string;
    draftTitle: string;
    draftSub: string;
    readonlyBadge: string;
    readonlyExample: string;
    professionalLabel: string;
    professionalName: string;
    professionalDetail: string[];
    clientLabel: string;
    clientField1: string;
    clientField2: string;
    clientField3: string;
    clientField4: string;
    sections: string[];
    closingNote: string;
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
    ctaNote: string;
  };
  articles: ContractArticle[];
};

export const contractCopy: Record<Locale, ContractCopy> = {
  it: {
    dir: "ltr",
    meta: {
      title: "Termini di collaborazione e contratto — Accanto Home Care OSS",
      description:
        "I miei termini di collaborazione professionale — pagamento anticipato, politica di cancellazione a 7 giorni, confini del perimetro OSS - OPERATORE SOCIO SANITARIO, conformità GDPR. Leggi prima di inviare la tua richiesta.",
      keywords: [
        "termini collaborazione OSS",
        "contratto assistenza domiciliare",
        "condizioni caregiver privato",
        "politica cancellazione assistenza domiciliare",
        "GDPR assistenza domiciliare Italia",
      ],
      ogTitle: "Termini di collaborazione e contratto — Accanto Home Care OSS",
      ogDescription:
        "Termini di collaborazione professionale — tariffe, politica di cancellazione, perimetro OSS, GDPR. Tutto è chiaro prima di iniziare.",
    },
    page: {
      heroEyebrow: "Contratto e condizioni",
      heroTitle: "Trasparenza legale.\nPrima di iniziare.",
      heroSub:
        "Prima di iniziare qualsiasi collaborazione, viene firmato un contratto scritto che definisce con precisione cosa faccio, come lo faccio, quanto costa e cosa succede se qualcosa cambia. Protegge te come cliente. Protegge me come professionista.",
      framingTitle: "Trasparenza prima di tutto",
      framingText:
        "Non si tratta di una formalità burocratica — è il fondamento di un rapporto professionale serio. Il contratto viene firmato solo dopo che la tua richiesta è stata valutata e dopo un confronto diretto. Nessun contratto viene emesso per richieste non qualificate o non approvate.",
      cards: [
        {
          num: "Sezione 1",
          title: "Chi sono e come lavoro",
          desc:
            "Opero come professionista indipendente pienamente autonomo — non come dipendente. Sono un OSS - OPERATORE SOCIO SANITARIO certificato con P.IVA, e fornisco assistenza domiciliare strutturata entro un perimetro professionale definito. Le sessioni vengono pianificate in modo flessibile tra noi, ma la durata per sessione è fissata contrattualmente. Il minimo è sempre di 5 ore consecutive.",
          tags: ["Professionista autonomo", "OSS - OPERATORE SOCIO SANITARIO certificato", "Minimo 5 ore", "Calendario flessibile"],
          green: true,
        },
        {
          num: "Sezione 2",
          title: "Compenso e pagamento",
          desc:
            "Le mie tariffe vengono concordate e documentate prima della firma di qualsiasi contratto. Il pagamento avviene in anticipo — prima dell'inizio delle sessioni del periodo concordato. Senza pagamento anticipato non esiste una collaborazione confermata. Emmetto fattura elettronica tramite Aruba entro 12 giorni dal ricevimento del pagamento. Sono accettati solo bonifico bancario o contanti.",
          tags: ["Pagamento anticipato", "Bonifico · Contanti", "Fattura elettronica", "Solo €"],
          terra: true,
        },
        {
          num: "Sezione 3",
          title: "Cancellazioni e rinuncia",
          desc:
            "Le cancellazioni sono regolate da una soglia unica e chiara. Più di 7 giorni di preavviso prima dell'inizio del periodo: rimborso completo. Meno di 7 giorni: l'intero pagamento anticipato viene trattenuto. Nessuna eccezione. La rinuncia da parte del cliente richiede 15 giorni di preavviso scritto. Io posso rinunciare solo per giusta causa, completando prima tutte le sessioni già pagate.",
          tags: ["Soglia 7 giorni", "Preavviso 15 giorni", "Solo scritto", "Nessuna eccezione"],
          terra: true,
        },
        {
          num: "Sezione 4",
          title: "Il mio perimetro professionale OSS - OPERATORE SOCIO SANITARIO",
          desc:
            "Opero esclusivamente entro il perimetro OSS - OPERATORE SOCIO SANITARIO certificato definito dalla legge italiana (Legge 42/1999, D.M. 520/2001). Sono fuori dal mio ambito e verranno sempre rifiutate: somministrazione dei farmaci, procedure mediche, diagnosi cliniche, cura delle ferite, sedute psicologiche e assistenza domiciliare 24 ore su 24. Il rifiuto di richieste fuori perimetro non costituisce mai un inadempimento.",
          tags: ["No farmaci", "No atti clinici", "No 24h live-in", "Solo ambito OSS - OPERATORE SOCIO SANITARIO"],
          terra: true,
        },
        {
          num: "Sezione 5",
          title: "Riservatezza e dati personali",
          desc:
            "Tutte le informazioni relative alla persona assistita e alla famiglia sono trattate con assoluta riservatezza professionale, in conformità alla normativa italiana sul segreto professionale (art. 622 c.p.) e al Regolamento UE GDPR 2016/679. I dati vengono trattati esclusivamente per le finalità della collaborazione e non sono mai condivisi con terzi. L'obbligo di riservatezza si estende per 3 anni dopo la fine del contratto.",
          tags: ["Conforme al GDPR", "Nessuna condivisione", "Art. 622 c.p.", "Obbligo 3 anni"],
          green: true,
        },
        {
          num: "Sezione 6",
          title: "Legge applicabile e controversie",
          desc:
            "Il presente contratto è regolato esclusivamente dalla legge italiana ai sensi degli artt. 2229–2237 del Codice Civile. Prima di qualsiasi azione legale, entrambe le parti si impegnano a tentare una soluzione amichevole e, se necessario, una mediazione civile (D.Lgs. 28/2010). Il tribunale competente per qualsiasi controversia non risolta è il Tribunale di Lecco.",
          tags: ["Legge italiana", "Conciliazione", "Tribunale di Lecco", "Art. 2229–2237 c.c."],
        },
      ],
      draftEyebrow: "Bozza di contratto — sola lettura",
      draftMainTitle: "Un esempio di ciò che viene firmato\nprima che io inizi.",
      draftTitle: "Contratto di prestazione professionale — Assistenza domiciliare OSS - OPERATORE SOCIO SANITARIO",
      draftSub: "Ai sensi degli artt. 2229–2237 del Codice Civile italiano · Modello standard 2025",
      readonlyBadge: "Sola lettura — esempio",
      readonlyExample: "Sola lettura — esempio",
      professionalLabel: "Il professionista",
      professionalName: "Ghassen Mansouri",
      professionalDetail: [
        "Professionista OSS - OPERATORE SOCIO SANITARIO indipendente · P.IVA 01103920144",
        "Dervio (LC) · Lago di Como · Lecco · Sondrio · Milano",
        "ghassenmansouri@mail.com · +39 379 230 6809",
      ],
      clientLabel: "Il cliente / rappresentante legale",
      clientField1: "[Nome completo del cliente]",
      clientField2: "[Indirizzo · Codice fiscale]",
      clientField3: "In qualità di: [ruolo legale]",
      clientField4: "Persona assistita: [Nome completo]",
      sections: [
        "Sezione 1 — Chi sono e come lavoro",
        "Sezione 2 — Compenso e pagamento",
        "Sezione 3 — Cancellazioni e rinuncia",
        "Sezione 4 — Perimetro professionale OSS - OPERATORE SOCIO SANITARIO",
        "Sezione 5 — Riservatezza e dati personali",
        "Sezione 6 — Legge applicabile e controversie",
      ],
      closingNote:
        "Il contratto completo, comprensivo degli allegati e delle clausole specifiche, viene trasmesso al cliente via email in formato PDF firmato, successivamente all'approvazione della richiesta di valutazione.",
      ctaTitle: "Tutto chiaro. Tutto trasparente.",
      ctaSub:
        "Invio il contratto firmato solo dopo aver valutato la tua richiesta e dopo un confronto diretto. Nessuna scorciatoia.",
      ctaButton: "Invia la tua richiesta →",
      ctaNote: "Nessun obbligo. Nessuna risposta automatica. Solo una valutazione professionale.",
    },
    articles: [
      {
        label: "Art. 1",
        title: "Ambito del servizio professionale",
        text:
          "Opero come professionista pienamente autonomo ai sensi degli artt. 2222 e 2230 c.c. — senza alcun vincolo di subordinazione verso il cliente e senza alcun rapporto di lavoro subordinato. Sono un OSS - OPERATORE SOCIO SANITARIO certificato con P.IVA 01103920144, e fornisco assistenza domiciliare entro il perimetro professionale concordato, documentato nel Programma delle attività allegato (Allegato A). La categoria di assistenza applicabile al presente contratto è: [Categoria A — Assistenza anziani / Categoria B — Supporto disabilità / Categoria C — Minori con bisogni speciali]. Il Programma delle attività può essere aggiornato con consenso scritto reciproco senza richiedere la riemissione completa del contratto.",
      },
      {
        label: "Art. 3",
        title: "Durata minima della sessione e pianificazione",
        text:
          "La durata minima di ogni sessione di assistenza è di 5 ore consecutive — senza eccezioni, indipendentemente dal profilo assistito o dal tipo di sessione. La durata concordata per il presente contratto è [___] ore per sessione. Il calendario delle sessioni è flessibile e concordato tra le parti. Ciò che è fissato contrattualmente è la durata della sessione, il numero di sessioni per periodo e il tipo di sessione (diurna 07:00–22:00 / notturna passiva / notturna attiva). Le modifiche della fascia oraria richiedono 48 ore di preavviso e il mio consenso esplicito.",
      },
      {
        label: "Art. 2",
        title: "Tariffa oraria e pagamento anticipato",
        text:
          "Tariffa oraria concordata: € [___] / ora · Tipo di sessione: [diurna / notturna passiva / notturna attiva]. Eventuale supplemento per complessità o distanza: € [___] / ora — [motivazione]. Il pagamento dell'intero compenso per il periodo concordato è dovuto prima dell'inizio delle sessioni — settimanalmente entro il lunedì precedente, oppure mensilmente entro il primo del mese. Nessun pagamento anticipato = nessuna collaborazione confermata. Accetto il pagamento esclusivamente tramite bonifico bancario (IBAN: [___]) o contanti entro i limiti di legge. Emmetto fattura elettronica tramite SDI entro 12 giorni dal ricevimento del pagamento. Tutti i pagamenti sono in Euro — eventuali commissioni di bonifico internazionale sono esclusivamente a carico del cliente.",
      },
      {
        label: "Art. 8",
        title: "Rimborso spese di trasferta",
        text:
          "Nessun supplemento di trasferta viene applicato all'interno della zona operativa primaria (Dervio / provincia di Lecco e aree limitrofe). Per interventi fuori dalla zona primaria — Milano inclusa — un supplemento di distanza viene concordato per iscritto prima dell'inizio della collaborazione e indicato nell'Art. 2 sopra.",
      },
      {
        label: "Art. 9",
        title: "Revisione della tariffa",
        text:
          "La tariffa concordata resta fissa salvo modifiche significative del profilo di assistenza — maggiore dipendenza, nuovi bisogni di cura, cambio del tipo di sessione o estensione geografica. Comunico ogni proposta di revisione tariffaria per iscritto con un preavviso minimo di 7 giorni. Il cliente può accettare o rifiutare. Se rifiutata, la collaborazione termina alla fine del periodo già pagato senza penali per nessuna delle parti.",
      },
      {
        label: "Art. 4",
        title: "Politica di cancellazione",
        text:
          "Politica di cancellazione — una sola soglia, nessuna eccezione, indipendentemente dalla motivazione (inclusi emergenza medica o ricovero ospedaliero): più di 7 giorni di preavviso prima dell'inizio del periodo → rimborso completo del pagamento anticipato. Meno di 7 giorni di preavviso prima dell'inizio del periodo → l'intero pagamento anticipato viene trattenuto da me. La cancellazione deve essere comunicata per iscritto via email o WhatsApp. La comunicazione verbale non ha validità legale ai sensi del presente contratto. Gli eventuali rimborsi sono restituiti entro 5 giorni lavorativi tramite bonifico bancario.",
      },
      {
        label: "Art. 5",
        title: "Rinuncia al contratto",
        text:
          "Rinuncia del cliente: il cliente può rinunciare in qualsiasi momento con un preavviso scritto minimo di 15 giorni di calendario. Durante il periodo di preavviso, le sessioni del periodo già pagato proseguono normalmente. Il pagamento anticipato già ricevuto per le sessioni svolte viene trattenuto. I periodi futuri non ancora pagati non generano alcun obbligo per nessuna delle parti. La mia rinuncia: posso rinunciare solo per giusta causa (mancato pagamento, comportamento pericoloso, richieste persistenti fuori perimetro, forza maggiore). Completo tutte le sessioni del periodo già pagato prima che la rinuncia produca effetto, salvo casi di giusta causa immediata e grave. I periodi futuri non ancora pagati non richiedono alcun preavviso — non sono mai stati attivati.",
      },
      {
        label: "Art. 6",
        title: "Clausola di risoluzione automatica",
        text:
          "Il contratto si risolve automaticamente con mia comunicazione scritta in caso di: mancato pagamento dopo 5 giorni lavorativi, richieste fuori perimetro ripetute dopo un rifiuto formale, comportamento che metta a rischio la mia sicurezza, false dichiarazioni alla firma, grave violazione della riservatezza, o indisponibilità sistematica del cliente per due o più periodi consecutivi. Non è richiesta alcuna sentenza del giudice. La risoluzione ha effetto al ricevimento della mia comunicazione scritta (art. 1456 c.c.).",
      },
      {
        label: "Art. 10",
        title: "Perimetro OSS - OPERATORE SOCIO SANITARIO e limitazione di responsabilità",
        text:
          "Opero esclusivamente entro il perimetro OSS - OPERATORE SOCIO SANITARIO certificato (Legge 42/1999, D.M. 520/2001). Le seguenti attività sono permanentemente escluse e verranno sempre rifiutate — indipendentemente dall'urgenza o dalla richiesta del cliente: somministrazione o gestione dei farmaci, procedure mediche di qualsiasi tipo, diagnosi cliniche o valutazioni sanitarie, cura delle ferite o trattamenti post-operatori, sedute psicologiche o terapeutiche e assistenza domiciliare 24 ore su 24 — servizio fuori dal mio ambito professionale e non offerto. Qualsiasi situazione clinica che individui durante una sessione viene immediatamente segnalata alla famiglia e indirizzata al professionista sanitario appropriato. Non sono responsabile per esiti che richiedono intervento clinico oltre il mio ambito certificato. Inoltre non sono responsabile per danni causati da informazioni incomplete o errate fornite dal cliente in fase di valutazione.",
      },
      {
        label: "Art. 7",
        title: "Sospensione del servizio",
        text:
          "Posso sospendere temporaneamente le sessioni — senza essere inadempiente — nei seguenti casi: mancato pagamento (automatico, senza preavviso), condizioni ambientali non sicure presso il domicilio del cliente, mia temporanea incapacità (notificata il prima possibile) o forza maggiore. Le sessioni sospese per mia incapacità vengono rimborsate o accreditate al periodo successivo. Le sessioni sospese per mancato pagamento sono regolate dall'Art. 4.",
      },
      {
        label: "Art. 11",
        title: "Riservatezza e segreto professionale",
        text:
          "Mantengo la massima riservatezza su tutte le informazioni relative alla persona assistita, alla famiglia, alle condizioni di salute, alle abitudini e a qualsiasi altra informazione acquisita nel corso del mio lavoro. Tali informazioni non saranno mai condivise in alcuna forma senza il consenso scritto esplicito del cliente, salvo i casi previsti dalla legge (ad es. segnalazioni di emergenza). L'obbligo di riservatezza si applica a entrambe le parti e resta in vigore per 3 anni dopo la fine del contratto per qualsiasi motivo.",
      },
      {
        label: "Art. 12",
        title: "Trattamento dei dati personali — GDPR",
        text:
          "I dati personali e sensibili sono trattati esclusivamente per le finalità della presente collaborazione, in conformità al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 101/2018. Io sono il Titolare del trattamento. I dati sanitari (categoria particolare ai sensi dell'art. 9 GDPR) sono trattati solo con il consenso esplicito del cliente. I dati vengono conservati per la durata della collaborazione, più 10 anni per obblighi fiscali e 3 anni per eventuali controversie contrattuali. Il cliente ha il diritto di accedere, rettificare e chiedere la cancellazione dei propri dati in qualsiasi momento contattandomi per iscritto.",
      },
      {
        label: "Art. 13",
        title: "Forza maggiore ed eventi imprevisti",
        text:
          "Gli eventi di forza maggiore (catastrofi naturali, pandemie dichiarate, restrizioni governative, malattia improvvisa documentata) sospendono il mio obbligo di esecuzione senza costituire inadempimento. Avviso il cliente per iscritto non appena possibile. Il pagamento anticipato per le sessioni non erogate durante la forza maggiore viene interamente rimborsato entro 5 giorni lavorativi. Se l'evento supera i 30 giorni, ciascuna delle parti può recedere senza penali.",
      },
      {
        label: "Art. 14–15",
        title: "Foro competente e conciliazione",
        text:
          "Il presente contratto è regolato esclusivamente dalla legge italiana (artt. 2229–2237 c.c.). Prima di ogni azione legale, entrambe le parti si impegnano a tentare una risoluzione amichevole (15 giorni) e, se necessario, una mediazione civile ai sensi del D.Lgs. 28/2010. Il foro competente per eventuali controversie non risolte è esclusivamente il Tribunale di Lecco. La presente clausola è espressamente approvata ai sensi degli artt. 1341–1342 c.c.",
      },
      {
        label: "Art. 17",
        title: "Approvazione specifica delle clausole onerose",
        text:
          "Il cliente approva espressamente e specificamente le seguenti clausole ai sensi degli artt. 1341–1342 c.c.: pagamento anticipato come condizione di attivazione (Art. 2) · politica di cancellazione — trattenuta integrale sotto i 7 giorni (Art. 4) · preavviso di recesso di 15 giorni (Art. 5) · clausola di risoluzione automatica (Art. 6) · esclusioni del perimetro OSS - OPERATORE SOCIO SANITARIO (Art. 10) · foro esclusivo — Tribunale di Lecco (Art. 14).",
      },
    ],
  },

  en: {
    dir: "ltr",
    meta: {
      title: "Collaboration terms and contract — Accanto Home Care OSS",
      description:
        "My professional collaboration terms — advance payment, 7-day cancellation policy, OSS scope limits, GDPR compliance. Read before submitting your request.",
      keywords: [
        "OSS collaboration terms",
        "home care contract",
        "private caregiver conditions",
        "home care cancellation policy",
        "GDPR home care Italy",
      ],
      ogTitle: "Collaboration terms and contract — Accanto Home Care OSS",
      ogDescription:
        "Professional collaboration terms — fees, cancellation policy, OSS scope, GDPR. Everything is clear before we begin.",
    },
    page: {
      heroEyebrow: "Contract and conditions",
      heroTitle: "Legal transparency.\nBefore we begin.",
      heroSub:
        "Before any collaboration starts, a written contract is signed that clearly defines what I do, how I do it, how much it costs, and what happens if something changes. It protects you as the client. It protects me as the professional.",
      framingTitle: "Transparency first",
      framingText:
        "This is not a bureaucratic formality — it is the foundation of a serious professional relationship. The contract is signed only after your request has been evaluated and after a direct discussion. No contract is issued for unqualified or unapproved requests.",
      cards: [
        {
          num: "Section 1",
          title: "Who I am and how I work",
          desc:
            "I work as a fully independent professional — not as an employee. I am a certified OSS professional with VAT registration, and I provide structured home care within a clearly defined professional scope. Sessions are planned flexibly between us, but the duration per session is fixed by contract. The minimum is always 5 consecutive hours.",
          tags: ["Independent professional", "Certified OSS", "5-hour minimum", "Flexible schedule"],
          green: true,
        },
        {
          num: "Section 2",
          title: "Fees and payment",
          desc:
            "My fees are agreed and documented before any contract is signed. Payment is made in advance — before the start of the sessions in the agreed period. Without advance payment there is no confirmed collaboration. I issue an electronic invoice via Aruba within 12 days of receiving payment. Only bank transfer or cash are accepted.",
          tags: ["Advance payment", "Bank transfer · Cash", "E-invoice", "EUR only"],
          terra: true,
        },
        {
          num: "Section 3",
          title: "Cancellations and withdrawal",
          desc:
            "Cancellations follow one clear threshold. More than 7 days' notice before the period starts: full refund. Less than 7 days: the full advance payment is retained. No exceptions. Client withdrawal requires 15 days' written notice. I may withdraw only for just cause, after completing all already-paid sessions.",
          tags: ["7-day threshold", "15-day notice", "Written only", "No exceptions"],
          terra: true,
        },
        {
          num: "Section 4",
          title: "My OSS professional scope",
          desc:
            "I work exclusively within the certified OSS scope defined by Italian law (Law 42/1999, Ministerial Decree 520/2001). Outside my scope and always refused: medication administration, medical procedures, clinical diagnosis, wound care, psychological sessions, and 24-hour live-in home care. Refusing out-of-scope requests is never a breach.",
          tags: ["No medication", "No clinical acts", "No 24h live-in", "OSS scope only"],
          terra: true,
        },
        {
          num: "Section 5",
          title: "Confidentiality and personal data",
          desc:
            "All information relating to the assisted person and the family is handled with strict professional confidentiality, in line with Italian professional secrecy rules (Art. 622 of the Criminal Code) and EU GDPR 2016/679. Data are processed only for the collaboration and are never shared with third parties. The confidentiality duty continues for 3 years after the contract ends.",
          tags: ["GDPR compliant", "No sharing", "Art. 622 c.p.", "3-year duty"],
          green: true,
        },
        {
          num: "Section 6",
          title: "Applicable law and disputes",
          desc:
            "This contract is governed exclusively by Italian law under Articles 2229–2237 of the Civil Code. Before any legal action, both parties agree to try an amicable solution and, if necessary, civil mediation (Legislative Decree 28/2010). Any unresolved dispute will be heard by the Court of Lecco.",
          tags: ["Italian law", "Conciliation", "Court of Lecco", "Arts. 2229–2237"],
        },
      ],
      draftEyebrow: "Contract draft — read only",
      draftMainTitle: "An example of what is signed\nbefore I begin.",
      draftTitle: "Professional service contract — OSS home care",
      draftSub: "Under Articles 2229–2237 of the Italian Civil Code · Standard model 2025",
      readonlyBadge: "Read only — example",
      readonlyExample: "Read only — example",
      professionalLabel: "The professional",
      professionalName: "Ghassen Mansouri",
      professionalDetail: [
        "Independent OSS professional · VAT 01103920144",
        "Dervio (LC) · Lake Como · Lecco · Sondrio · Milan",
        "ghassenmansouri@mail.com · +39 379 230 6809",
      ],
      clientLabel: "The client / legal representative",
      clientField1: "[Client full name]",
      clientField2: "[Address · Tax ID]",
      clientField3: "In the role of: [legal role]",
      clientField4: "Assisted person: [Full name]",
      sections: [
        "Section 1 — Who I am and how I work",
        "Section 2 — Fees and payment",
        "Section 3 — Cancellations and withdrawal",
        "Section 4 — OSS professional scope",
        "Section 5 — Confidentiality and personal data",
        "Section 6 — Applicable law and disputes",
      ],
      closingNote:
        "The full contract, including annexes and specific clauses, is sent to the client by email as a signed PDF after the request has been approved.",
      ctaTitle: "Everything clear. Everything transparent.",
      ctaSub:
        "I send the signed contract only after reviewing your request and after a direct conversation. No shortcuts.",
      ctaButton: "Send your request →",
      ctaNote: "No obligation. No automatic reply. Only a professional evaluation.",
    },
    articles: [
      {
        label: "Art. 1",
        title: "Scope of the professional service",
        text:
          "I work as a fully independent professional under Articles 2222 and 2230 of the Civil Code — with no employment relationship and no subordination to the client. I am a certified OSS professional with VAT number 01103920144, and I provide home care within the agreed professional scope, as documented in the attached Activity Program (Annex A). The applicable care category for this contract is: [Category A — Elderly care / Category B — Disability support / Category C — Minors with special needs]. The Activity Program may be updated by mutual written consent without reissuing the full contract.",
      },
      {
        label: "Art. 3",
        title: "Minimum session duration and planning",
        text:
          "The minimum duration of each care session is 5 consecutive hours — with no exceptions, regardless of the profile or session type. The agreed duration for this contract is [___] hours per session. The session schedule is flexible and agreed between the parties. What is fixed by contract is the session duration, the number of sessions per period, and the session type (daytime 07:00–22:00 / passive night / active night). Any time-slot change requires 48 hours' notice and my explicit consent.",
      },
      {
        label: "Art. 2",
        title: "Hourly rate and advance payment",
        text:
          "Agreed hourly rate: € [___] / hour · Session type: [daytime / passive night / active night]. Any complexity or distance surcharge: € [___] / hour — [reason]. Full payment for the agreed period is due before sessions start — weekly by the previous Monday or monthly by the first day of the month. No advance payment = no confirmed collaboration. I accept payment only by bank transfer (IBAN: [___]) or cash within legal limits. I issue an electronic invoice via SDI within 12 days of receiving payment. All payments are in Euro — any international transfer fees are fully borne by the client.",
      },
      {
        label: "Art. 8",
        title: "Travel expense reimbursement",
        text:
          "No travel surcharge applies within the primary operating area (Dervio / Province of Lecco and nearby areas). For interventions outside the primary area — including Milan — a distance surcharge is agreed in writing before the collaboration begins and indicated in Article 2 above.",
      },
      {
        label: "Art. 9",
        title: "Rate review",
        text:
          "The agreed rate remains fixed unless there are significant changes in the care profile — higher dependency, new care needs, change of session type, or geographic extension. I communicate any proposed rate review in writing with at least 7 days' notice. The client may accept or refuse. If refused, the collaboration ends at the end of the already-paid period with no penalties for either party.",
      },
      {
        label: "Art. 4",
        title: "Cancellation policy",
        text:
          "Cancellation policy — one threshold, no exceptions, regardless of the reason (including medical emergency or hospital admission): more than 7 days' notice before the period starts → full refund of the advance payment. Less than 7 days' notice before the period starts → the full advance payment is retained by me. Cancellation must be communicated in writing by email or WhatsApp. Verbal communication has no legal validity under this contract. Any refunds are returned within 5 business days by bank transfer.",
      },
      {
        label: "Art. 5",
        title: "Withdrawal from the contract",
        text:
          "Client withdrawal: the client may withdraw at any time with at least 15 calendar days' written notice. During the notice period, already-paid sessions continue normally. Advance payment already received for completed sessions is retained. Future periods not yet paid create no obligation for either party. My withdrawal: I may withdraw only for just cause (non-payment, dangerous behavior, persistent out-of-scope requests, force majeure). I complete all sessions for the already-paid period before the withdrawal takes effect, except in cases of immediate and serious just cause. Future unpaid periods require no notice — they were never activated.",
      },
      {
        label: "Art. 6",
        title: "Automatic termination clause",
        text:
          "The contract terminates automatically upon my written notice in the event of: non-payment after 5 business days, repeated out-of-scope requests after a formal refusal, behavior that puts my safety at risk, false statements at signing, serious breach of confidentiality, or systematic unavailability of the client for two or more consecutive periods. No court judgment is required. Termination takes effect when my written notice is received (Art. 1456 Civil Code).",
      },
      {
        label: "Art. 10",
        title: "OSS scope and limitation of liability",
        text:
          "I work exclusively within the certified OSS scope (Law 42/1999, Ministerial Decree 520/2001). The following activities are permanently excluded and will always be refused — regardless of urgency or the client's request: medication administration or management, any kind of medical procedure, clinical diagnosis or health assessment, wound care or post-operative treatment, psychological or therapeutic sessions, and 24-hour live-in home care — a service outside my professional scope and not offered. Any clinical situation I identify during a session is immediately reported to the family and directed to the appropriate healthcare professional. I am not responsible for outcomes requiring clinical intervention beyond my certified scope. I am also not responsible for damage caused by incomplete or incorrect information provided by the client during assessment.",
      },
      {
        label: "Art. 7",
        title: "Service suspension",
        text:
          "I may temporarily suspend sessions — without being in breach — in the following cases: non-payment (automatic, without notice), unsafe environmental conditions at the client's home, my temporary inability to work (notified as soon as possible), or force majeure. Sessions suspended due to my inability are refunded or credited to the following period. Sessions suspended for non-payment are governed by Art. 4.",
      },
      {
        label: "Art. 11",
        title: "Confidentiality and professional secrecy",
        text:
          "I keep the strictest confidentiality regarding all information about the assisted person, the family, health conditions, habits, and any other information obtained during my work. Such information will never be shared in any form without the client's explicit written consent, except where required by law (e.g., emergency reporting). The confidentiality obligation applies to both parties and remains in force for 3 years after the contract ends for any reason.",
      },
      {
        label: "Art. 12",
        title: "Personal data processing — GDPR",
        text:
          "Personal and sensitive data are processed exclusively for the purposes of this collaboration, in accordance with EU Regulation 2016/679 (GDPR) and Legislative Decree 101/2018. I am the controller. Health data (special category under Art. 9 GDPR) are processed only with the client's explicit consent. Data are stored for the duration of the collaboration, plus 10 years for tax obligations and 3 years for potential contractual disputes. The client has the right to access, rectify, and request deletion of their data at any time by contacting me in writing.",
      },
      {
        label: "Art. 13",
        title: "Force majeure and unforeseen events",
        text:
          "Force majeure events (natural disasters, declared pandemics, government restrictions, documented sudden illness) suspend my duty to perform without constituting a breach. I notify the client in writing as soon as possible. Advance payment for sessions not delivered during force majeure is fully refunded within 5 business days. If the event lasts more than 30 days, either party may terminate without penalties.",
      },
      {
        label: "Art. 14–15",
        title: "Jurisdiction and conciliation",
        text:
          "This contract is governed exclusively by Italian law (Arts. 2229–2237 Civil Code). Before any legal action, both parties agree to attempt an amicable resolution (15 days) and, if necessary, civil mediation under Legislative Decree 28/2010. The exclusive jurisdiction for any unresolved dispute is the Court of Lecco. This clause is expressly approved under Arts. 1341–1342 Civil Code.",
      },
      {
        label: "Art. 17",
        title: "Specific approval of onerous clauses",
        text:
          "The client expressly and specifically approves the following clauses under Arts. 1341–1342 Civil Code: advance payment as an activation condition (Art. 2) · cancellation policy — full retention under 7 days (Art. 4) · 15-day withdrawal notice (Art. 5) · automatic termination clause (Art. 6) · OSS scope exclusions (Art. 10) · exclusive jurisdiction — Court of Lecco (Art. 14).",
      },
    ],
  },

  fr: {
    dir: "ltr",
    meta: {
      title: "Conditions de collaboration et contrat — Accanto Home Care OSS",
      description:
        "Mes conditions de collaboration professionnelle — paiement anticipé, politique d'annulation à 7 jours, limites du périmètre OSS, conformité GDPR. À lire avant d'envoyer votre demande.",
      keywords: [
        "conditions collaboration OSS",
        "contrat soins à domicile",
        "conditions aide à domicile privée",
        "politique annulation soins à domicile",
        "GDPR soins à domicile Italie",
      ],
      ogTitle: "Conditions de collaboration et contrat — Accanto Home Care OSS",
      ogDescription:
        "Conditions professionnelles — tarifs, politique d'annulation, périmètre OSS, GDPR. Tout est clair avant de commencer.",
    },
    page: {
      heroEyebrow: "Contrat et conditions",
      heroTitle: "Transparence juridique.\nAvant de commencer.",
      heroSub:
        "Avant toute collaboration, un contrat écrit est signé afin de définir précisément ce que je fais, comment je le fais, combien cela coûte et ce qui se passe si quelque chose change. Il vous protège en tant que client. Il me protège en tant que professionnel.",
      framingTitle: "La transparence d'abord",
      framingText:
        "Il ne s'agit pas d'une formalité bureaucratique — c'est la base d'une relation professionnelle sérieuse. Le contrat est signé uniquement après l'évaluation de votre demande et après un échange direct. Aucun contrat n'est émis pour des demandes non qualifiées ou non approuvées.",
      cards: [
        {
          num: "Section 1",
          title: "Qui je suis et comment je travaille",
          desc:
            "J'exerce en tant que professionnel totalement indépendant — et non comme salarié. Je suis un professionnel OSS certifié avec TVA, et je fournis des soins à domicile structurés dans un périmètre professionnel clairement défini. Les séances sont planifiées de manière flexible entre nous, mais la durée par séance est fixée contractuellement. Le minimum est toujours de 5 heures consécutives.",
          tags: ["Professionnel indépendant", "OSS certifié", "Minimum 5 h", "Planning flexible"],
          green: true,
        },
        {
          num: "Section 2",
          title: "Tarifs et paiement",
          desc:
            "Mes tarifs sont convenus et documentés avant la signature de tout contrat. Le paiement est effectué à l'avance — avant le début des séances de la période convenue. Sans paiement anticipé, il n'y a pas de collaboration confirmée. J'émets une facture électronique via Aruba dans les 12 jours suivant la réception du paiement. Seuls le virement bancaire ou l'espèce sont acceptés.",
          tags: ["Paiement anticipé", "Virement · Espèces", "Facture électronique", "EUR uniquement"],
          terra: true,
        },
        {
          num: "Section 3",
          title: "Annulations et renonciation",
          desc:
            "Les annulations suivent un seuil unique et clair. Plus de 7 jours de préavis avant le début de la période : remboursement intégral. Moins de 7 jours : l'acompte complet est conservé. Aucune exception. La renonciation du client nécessite un préavis écrit de 15 jours. Je peux renoncer uniquement pour juste motif, après avoir terminé toutes les séances déjà payées.",
          tags: ["Seuil 7 jours", "Préavis 15 jours", "Écrit seulement", "Aucune exception"],
          terra: true,
        },
        {
          num: "Section 4",
          title: "Mon périmètre professionnel OSS",
          desc:
            "J'exerce exclusivement dans le périmètre OSS certifié défini par la loi italienne (Loi 42/1999, Décret ministériel 520/2001). Hors de mon champ et toujours refusés : administration de médicaments, procédures médicales, diagnostic clinique, soins de plaies, séances psychologiques et assistance à domicile 24 h/24. Le refus des demandes hors périmètre ne constitue jamais une faute.",
          tags: ["Pas de médicaments", "Pas d'actes cliniques", "Pas de 24 h", "Périmètre OSS uniquement"],
          terra: true,
        },
        {
          num: "Section 5",
          title: "Confidentialité et données personnelles",
          desc:
            "Toutes les informations relatives à la personne assistée et à la famille sont traitées avec une confidentialité professionnelle absolue, conformément aux règles italiennes sur le secret professionnel (art. 622 du Code pénal) et au règlement UE GDPR 2016/679. Les données sont traitées uniquement aux fins de la collaboration et ne sont jamais partagées avec des tiers. L'obligation de confidentialité se prolonge pendant 3 ans après la fin du contrat.",
          tags: ["Conforme GDPR", "Aucun partage", "Art. 622 c.p.", "Obligation 3 ans"],
          green: true,
        },
        {
          num: "Section 6",
          title: "Droit applicable et litiges",
          desc:
            "Le présent contrat est régi exclusivement par le droit italien, conformément aux articles 2229–2237 du Code civil. Avant toute action en justice, les deux parties s'engagent à tenter une solution amiable et, si nécessaire, une médiation civile (Décret législatif 28/2010). Le tribunal compétent pour tout litige non résolu est le Tribunal de Lecco.",
          tags: ["Droit italien", "Conciliation", "Tribunal de Lecco", "Art. 2229–2237"],
        },
      ],
      draftEyebrow: "Projet de contrat — lecture seule",
      draftMainTitle: "Un exemple de ce qui est signé\navant que je commence.",
      draftTitle: "Contrat de prestation professionnelle — soins à domicile OSS",
      draftSub: "Conformément aux articles 2229–2237 du Code civil italien · Modèle standard 2025",
      readonlyBadge: "Lecture seule — exemple",
      readonlyExample: "Lecture seule — exemple",
      professionalLabel: "Le professionnel",
      professionalName: "Ghassen Mansouri",
      professionalDetail: [
        "Professionnel OSS indépendant · TVA 01103920144",
        "Dervio (LC) · Lac de Côme · Lecco · Sondrio · Milan",
        "ghassenmansouri@mail.com · +39 379 230 6809",
      ],
      clientLabel: "Le client / représentant légal",
      clientField1: "[Nom complet du client]",
      clientField2: "[Adresse · Code fiscal]",
      clientField3: "En qualité de : [rôle légal]",
      clientField4: "Personne assistée : [Nom complet]",
      sections: [
        "Section 1 — Qui je suis et comment je travaille",
        "Section 2 — Tarifs et paiement",
        "Section 3 — Annulations et renonciation",
        "Section 4 — Périmètre professionnel OSS",
        "Section 5 — Confidentialité et données personnelles",
        "Section 6 — Droit applicable et litiges",
      ],
      closingNote:
        "Le contrat complet, y compris les annexes et les clauses spécifiques, est envoyé au client par e-mail au format PDF signé, après approbation de la demande d'évaluation.",
      ctaTitle: "Tout est clair. Tout est transparent.",
      ctaSub:
        "J'envoie le contrat signé uniquement après avoir évalué votre demande et après un échange direct. Aucun raccourci.",
      ctaButton: "Envoyer votre demande →",
      ctaNote: "Aucune obligation. Aucune réponse automatique. Seulement une évaluation professionnelle.",
    },
    articles: [
      {
        label: "Art. 1",
        title: "Champ du service professionnel",
        text:
          "J'exerce en tant que professionnel totalement indépendant conformément aux articles 2222 et 2230 du Code civil — sans aucun lien de subordination envers le client et sans contrat de travail salarié. Je suis un professionnel OSS certifié avec TVA 01103920144, et je fournis des soins à domicile dans le périmètre professionnel convenu, documenté dans le Programme des activités joint (Annexe A). La catégorie de soins applicable au présent contrat est : [Catégorie A — Soins aux personnes âgées / Catégorie B — Soutien au handicap / Catégorie C — Mineurs ayant des besoins spéciaux]. Le Programme des activités peut être mis à jour d'un commun accord écrit sans réémission complète du contrat.",
      },
      {
        label: "Art. 3",
        title: "Durée minimale de séance et planification",
        text:
          "La durée minimale de chaque séance de soins est de 5 heures consécutives — sans exception, quel que soit le profil ou le type de séance. La durée convenue pour le présent contrat est de [___] heures par séance. Le calendrier des séances est flexible et convenu entre les parties. Ce qui est fixé contractuellement, c'est la durée de la séance, le nombre de séances par période et le type de séance (diurne 07:00–22:00 / nocturne passive / nocturne active). Tout changement de plage horaire nécessite un préavis de 48 heures et mon accord explicite.",
      },
      {
        label: "Art. 2",
        title: "Tarif horaire et paiement anticipé",
        text:
          "Tarif horaire convenu : € [___] / heure · Type de séance : [diurne / nocturne passive / nocturne active]. Supplément éventuel pour complexité ou distance : € [___] / heure — [motif]. Le paiement intégral de la période convenue est dû avant le début des séances — chaque semaine avant le lundi précédent, ou chaque mois avant le premier du mois. Aucun paiement anticipé = aucune collaboration confirmée. J'accepte uniquement le virement bancaire (IBAN : [___]) ou les espèces dans les limites légales. J'émets une facture électronique via SDI dans les 12 jours suivant la réception du paiement. Tous les paiements sont en euros — les éventuels frais de virement international sont entièrement à la charge du client.",
      },
      {
        label: "Art. 8",
        title: "Remboursement des frais de déplacement",
        text:
          "Aucun supplément de déplacement ne s'applique dans la zone d'exploitation principale (Dervio / province de Lecco et zones proches). Pour les interventions hors de la zone principale — y compris Milan — un supplément de distance est convenu par écrit avant le début de la collaboration et indiqué à l'article 2 ci-dessus.",
      },
      {
        label: "Art. 9",
        title: "Révision du tarif",
        text:
          "Le tarif convenu reste fixe sauf changement important du profil de soins — plus grande dépendance, nouveaux besoins, changement du type de séance ou extension géographique. Je communique toute proposition de révision tarifaire par écrit avec un préavis minimum de 7 jours. Le client peut accepter ou refuser. En cas de refus, la collaboration prend fin à la fin de la période déjà payée sans pénalité pour aucune des parties.",
      },
      {
        label: "Art. 4",
        title: "Politique d'annulation",
        text:
          "Politique d'annulation — un seul seuil, aucune exception, quel que soit le motif (y compris urgence médicale ou hospitalisation) : plus de 7 jours de préavis avant le début de la période → remboursement complet de l'acompte. Moins de 7 jours de préavis avant le début de la période → l'acompte complet est conservé. L'annulation doit être communiquée par écrit par e-mail ou WhatsApp. La communication verbale n'a aucune validité juridique au titre du présent contrat. Les éventuels remboursements sont retournés dans les 5 jours ouvrables par virement bancaire.",
      },
      {
        label: "Art. 5",
        title: "Renonciation au contrat",
        text:
          "Renonciation du client : le client peut renoncer à tout moment avec un préavis écrit d'au moins 15 jours calendaires. Pendant le préavis, les séances de la période déjà payée se poursuivent normalement. L'acompte déjà reçu pour les séances effectuées est conservé. Les périodes futures non encore payées ne créent aucune obligation pour l'une ou l'autre des parties. Ma renonciation : je ne peux renoncer que pour juste motif (non-paiement, comportement dangereux, demandes persistantes hors périmètre, force majeure). Je termine toutes les séances de la période déjà payée avant que la renonciation prenne effet, sauf cas de juste motif immédiat et grave. Les périodes futures non encore payées ne nécessitent aucun préavis — elles n'ont jamais été activées.",
      },
      {
        label: "Art. 6",
        title: "Clause de résiliation automatique",
        text:
          "Le contrat est résilié automatiquement par ma notification écrite en cas de : non-paiement après 5 jours ouvrables, demandes hors périmètre répétées après un refus formel, comportement mettant ma sécurité en danger, fausses déclarations à la signature, violation grave de la confidentialité, ou indisponibilité systématique du client pendant deux périodes consécutives ou plus. Aucune décision de justice n'est requise. La résiliation prend effet à réception de ma notification écrite (art. 1456 du Code civil).",
      },
      {
        label: "Art. 10",
        title: "Périmètre OSS et limitation de responsabilité",
        text:
          "J'exerce exclusivement dans le périmètre OSS certifié (Loi 42/1999, Décret ministériel 520/2001). Les activités suivantes sont définitivement exclues et seront toujours refusées — quel que soit l'urgence ou la demande du client : administration ou gestion des médicaments, toute procédure médicale, diagnostic clinique ou évaluation de santé, soins de plaies ou traitements post-opératoires, séances psychologiques ou thérapeutiques et assistance à domicile 24 heures sur 24 — service hors de mon champ professionnel et non proposé. Toute situation clinique que je détecte pendant une séance est immédiatement signalée à la famille et dirigée vers le professionnel de santé approprié. Je ne suis pas responsable des résultats nécessitant une intervention clinique au-delà de mon périmètre certifié. Je ne suis pas non plus responsable des dommages causés par des informations incomplètes ou erronées fournies par le client lors de l'évaluation.",
      },
      {
        label: "Art. 7",
        title: "Suspension du service",
        text:
          "Je peux suspendre temporairement les séances — sans être en défaut — dans les cas suivants : non-paiement (automatique, sans préavis), conditions environnementales dangereuses au domicile du client, mon incapacité temporaire (signalée dès que possible) ou force majeure. Les séances suspendues en raison de mon incapacité sont remboursées ou reportées sur la période suivante. Les séances suspendues pour non-paiement sont régies par l'art. 4.",
      },
      {
        label: "Art. 11",
        title: "Confidentialité et secret professionnel",
        text:
          "Je maintiens la plus stricte confidentialité sur toutes les informations concernant la personne assistée, la famille, les conditions de santé, les habitudes et toute autre information obtenue dans le cadre de mon travail. Ces informations ne seront jamais partagées sous aucune forme sans le consentement écrit explicite du client, sauf dans les cas prévus par la loi (par ex. signalements d'urgence). L'obligation de confidentialité s'applique aux deux parties et demeure en vigueur pendant 3 ans après la fin du contrat, quel qu'en soit le motif.",
      },
      {
        label: "Art. 12",
        title: "Traitement des données personnelles — GDPR",
        text:
          "Les données personnelles et sensibles sont traitées exclusivement aux fins de cette collaboration, conformément au règlement UE 2016/679 (GDPR) et au décret législatif 101/2018. Je suis le responsable du traitement. Les données de santé (catégorie spéciale au sens de l'art. 9 GDPR) ne sont traitées qu'avec le consentement explicite du client. Les données sont conservées pendant la durée de la collaboration, plus 10 ans pour les obligations fiscales et 3 ans pour d'éventuels litiges contractuels. Le client a le droit d'accéder à ses données, de les rectifier et d'en demander la suppression à tout moment en me contactant par écrit.",
      },
      {
        label: "Art. 13",
        title: "Force majeure et événements imprévus",
        text:
          "Les événements de force majeure (catastrophes naturelles, pandémies déclarées, restrictions gouvernementales, maladie soudaine documentée) suspendent mon obligation d'exécuter sans constituer une faute. Je préviens le client par écrit dès que possible. L'acompte pour les séances non réalisées pendant la force majeure est entièrement remboursé dans les 5 jours ouvrables. Si l'événement dépasse 30 jours, chacune des parties peut résilier sans pénalité.",
      },
      {
        label: "Art. 14–15",
        title: "Juridiction et conciliation",
        text:
          "Le présent contrat est régi exclusivement par le droit italien (art. 2229–2237 du Code civil). Avant toute action en justice, les deux parties s'engagent à tenter une résolution amiable (15 jours) et, si nécessaire, une médiation civile conformément au décret législatif 28/2010. Le tribunal compétent pour tout litige non résolu est exclusivement le Tribunal de Lecco. Cette clause est expressément approuvée conformément aux art. 1341–1342 du Code civil.",
      },
      {
        label: "Art. 17",
        title: "Approbation spécifique des clauses onéreuses",
        text:
          "Le client approuve expressément et spécifiquement les clauses suivantes conformément aux art. 1341–1342 du Code civil : paiement anticipé comme condition d'activation (art. 2) · politique d'annulation — conservation intégrale sous 7 jours (art. 4) · préavis de résiliation de 15 jours (art. 5) · clause de résiliation automatique (art. 6) · exclusions du périmètre OSS (art. 10) · juridiction exclusive — Tribunal de Lecco (art. 14).",
      },
    ],
  },

  ar: {
    dir: "rtl",
    meta: {
      title: "شروط التعاون والعقد — Accanto Home Care OSS",
      description:
        "شروط التعاون المهني الخاصة بي — الدفع المسبق، سياسة الإلغاء خلال 7 أيام، حدود نطاق OSS، والامتثال لـ GDPR. اقرأها قبل إرسال طلبك.",
      keywords: [
        "شروط التعاون OSS",
        "عقد رعاية منزلية",
        "شروط مقدم الرعاية الخاص",
        "سياسة إلغاء الرعاية المنزلية",
        "GDPR الرعاية المنزلية إيطاليا",
      ],
      ogTitle: "شروط التعاون والعقد — Accanto Home Care OSS",
      ogDescription:
        "شروط التعاون المهني — الأتعاب، سياسة الإلغاء، نطاق OSS، GDPR. كل شيء واضح قبل البدء.",
    },
    page: {
      heroEyebrow: "العقد والشروط",
      heroTitle: "الشفافية القانونية.\nقبل أن نبدأ.",
      heroSub:
        "قبل بدء أي تعاون، يتم توقيع عقد مكتوب يحدد بدقة ما أفعله، وكيف أفعله، وكم يكلف، وماذا يحدث إذا تغيّر شيء. إنه يحميك كعميل، ويحمني كمختص.",
      framingTitle: "الشفافية أولاً",
      framingText:
        "هذا ليس إجراءً بيروقراطيًا — بل هو أساس علاقة مهنية جادة. لا يتم توقيع العقد إلا بعد تقييم طلبك وبعد نقاش مباشر. لا يُصدر أي عقد للطلبات غير المؤهلة أو غير المعتمدة.",
      cards: [
        {
          num: "القسم 1",
          title: "من أنا وكيف أعمل",
          desc:
            "أعمل كمختص مستقل بالكامل — وليس كموظف. أنا مختص OSS معتمد ومسجل ضريبيًا، وأقدم رعاية منزلية منظمة ضمن نطاق مهني محدد بوضوح. يتم التخطيط للجلسات بمرونة بيننا، لكن مدة كل جلسة ثابتة بالعقد. الحد الأدنى دائمًا 5 ساعات متواصلة.",
          tags: ["مختص مستقل", "OSS معتمد", "الحد الأدنى 5 ساعات", "جدول مرن"],
          green: true,
        },
        {
          num: "القسم 2",
          title: "الأتعاب والدفع",
          desc:
            "تُتفق أتعابي وتُوثق قبل توقيع أي عقد. يتم الدفع مسبقًا — قبل بدء الجلسات في الفترة المتفق عليها. بدون دفع مسبق لا يوجد تعاون مؤكد. أصدر فاتورة إلكترونية عبر Aruba خلال 12 يومًا من استلام الدفع. يُقبل فقط التحويل البنكي أو النقد.",
          tags: ["دفع مسبق", "تحويل · نقد", "فاتورة إلكترونية", "يورو فقط"],
          terra: true,
        },
        {
          num: "القسم 3",
          title: "الإلغاء والتنازل",
          desc:
            "يخضع الإلغاء لعتبة واحدة وواضحة. أكثر من 7 أيام إشعار قبل بدء الفترة: استرداد كامل. أقل من 7 أيام: يُحتفظ بالدفع المسبق كاملًا. لا توجد استثناءات. يتطلب تنازل العميل إشعارًا كتابيًا قبل 15 يومًا. أستطيع التنازل فقط لسبب مشروع، بعد إكمال كل الجلسات المدفوعة.",
          tags: ["عتبة 7 أيام", "إشعار 15 يومًا", "كتابي فقط", "لا استثناءات"],
          terra: true,
        },
        {
          num: "القسم 4",
          title: "نطاقي المهني كـ OSS",
          desc:
            "أعمل حصريًا ضمن نطاق OSS المعتمد المحدد في القانون الإيطالي (القانون 42/1999، المرسوم الوزاري 520/2001). خارج نطاقي ويتم رفضه دائمًا: إعطاء الأدوية، الإجراءات الطبية، التشخيص السريري، العناية بالجروح، الجلسات النفسية، والرعاية المنزلية 24 ساعة. رفض الطلبات خارج النطاق لا يُعد أبدًا إخلالًا.",
          tags: ["لا أدوية", "لا إجراءات سريرية", "لا 24 ساعة", "نطاق OSS فقط"],
          terra: true,
        },
        {
          num: "القسم 5",
          title: "السرية والبيانات الشخصية",
          desc:
            "تُعامل كل المعلومات المتعلقة بالشخص المعتنى به وبالعائلة بسرية مهنية تامة، وفقًا لقواعد السر المهني الإيطالية (المادة 622 من القانون الجنائي) واللائحة الأوروبية GDPR 2016/679. تُعالج البيانات فقط لأغراض التعاون ولا تتم مشاركتها أبدًا مع أطراف ثالثة. يستمر التزام السرية لمدة 3 سنوات بعد انتهاء العقد.",
          tags: ["متوافق مع GDPR", "لا مشاركة", "المادة 622", "التزام 3 سنوات"],
          green: true,
        },
        {
          num: "القسم 6",
          title: "القانون الواجب التطبيق والنزاعات",
          desc:
            "يخضع هذا العقد حصريًا للقانون الإيطالي وفقًا للمواد 2229–2237 من القانون المدني. قبل أي إجراء قانوني، يلتزم الطرفان بمحاولة حل ودي، وإذا لزم الأمر، وساطة مدنية (المرسوم التشريعي 28/2010). المحكمة المختصة لأي نزاع غير محلول هي محكمة ليكو.",
          tags: ["القانون الإيطالي", "تسوية", "محكمة ليكو", "المواد 2229–2237"],
        },
      ],
      draftEyebrow: "مسودة العقد — للقراءة فقط",
      draftMainTitle: "مثال عمّا يتم توقيعه\nقبل أن أبدأ.",
      draftTitle: "عقد خدمة مهنية — رعاية منزلية OSS",
      draftSub: "وفقًا للمواد 2229–2237 من القانون المدني الإيطالي · نموذج قياسي 2025",
      readonlyBadge: "للقراءة فقط — مثال",
      readonlyExample: "للقراءة فقط — مثال",
      professionalLabel: "المختص",
      professionalName: "غسان منصوري",
      professionalDetail: [
        "مختص OSS مستقل · الرقم الضريبي 01103920144",
        "ديرفيو (LC) · بحيرة كومو · ليكو · سوندريو · ميلانو",
        "ghassenmansouri@mail.com · +39 379 230 6809",
      ],
      clientLabel: "العميل / الممثل القانوني",
      clientField1: "[الاسم الكامل للعميل]",
      clientField2: "[العنوان · الرقم الضريبي]",
      clientField3: "بصفته: [الدور القانوني]",
      clientField4: "الشخص المعتنى به: [الاسم الكامل]",
      sections: [
        "القسم 1 — من أنا وكيف أعمل",
        "القسم 2 — الأتعاب والدفع",
        "القسم 3 — الإلغاء والتنازل",
        "القسم 4 — نطاق OSS المهني",
        "القسم 5 — السرية والبيانات الشخصية",
        "القسم 6 — القانون الواجب التطبيق والنزاعات",
      ],
      closingNote:
        "يتم إرسال العقد الكامل، بما في ذلك الملاحق والبنود الخاصة، إلى العميل عبر البريد الإلكتروني بصيغة PDF موقّع بعد الموافقة على طلب التقييم.",
      ctaTitle: "كل شيء واضح. كل شيء شفاف.",
      ctaSub:
        "أرسل العقد الموقّع فقط بعد تقييم طلبك وبعد نقاش مباشر. لا اختصارات.",
      ctaButton: "أرسل طلبك →",
      ctaNote: "لا التزام. لا رد تلقائي. فقط تقييم مهني.",
    },
    articles: [
      {
        label: "المادة 1",
        title: "نطاق الخدمة المهنية",
        text:
          "أعمل كمختص مستقل بالكامل بموجب المادتين 2222 و2230 من القانون المدني — بدون أي تبعية للعميل وبدون علاقة عمل موظف. أنا مختص OSS معتمد مع رقم ضريبي 01103920144، وأقدم رعاية منزلية ضمن النطاق المهني المتفق عليه والمُوثق في برنامج الأنشطة المرفق (الملحق A). فئة الرعاية المطبقة على هذا العقد هي: [الفئة A — رعاية كبار السن / الفئة B — دعم الإعاقة / الفئة C — القُصّر ذوو الاحتياجات الخاصة]. يمكن تحديث برنامج الأنشطة باتفاق كتابي متبادل دون إعادة إصدار العقد كاملًا.",
      },
      {
        label: "المادة 3",
        title: "الحد الأدنى لمدة الجلسة والتخطيط",
        text:
          "الحد الأدنى لمدة كل جلسة رعاية هو 5 ساعات متواصلة — دون استثناء، بغض النظر عن الملف الشخصي أو نوع الجلسة. المدة المتفق عليها لهذا العقد هي [___] ساعة لكل جلسة. جدول الجلسات مرن ويتم الاتفاق عليه بين الطرفين. الثابت بالعقد هو مدة الجلسة، وعدد الجلسات لكل فترة، ونوع الجلسة (نهارية 07:00–22:00 / ليلية سلبية / ليلية نشطة). أي تغيير في الفترة الزمنية يتطلب إشعارًا قبل 48 ساعة وموافقتي الصريحة.",
      },
      {
        label: "المادة 2",
        title: "الأجر بالساعة والدفع المسبق",
        text:
          "الأجر المتفق عليه: € [___] / ساعة · نوع الجلسة: [نهارية / ليلية سلبية / ليلية نشطة]. أي زيادة بسبب التعقيد أو المسافة: € [___] / ساعة — [السبب]. الدفع الكامل للفترة المتفق عليها مستحق قبل بدء الجلسات — أسبوعيًا قبل يوم الاثنين السابق، أو شهريًا قبل اليوم الأول من الشهر. لا يوجد دفع مسبق = لا يوجد تعاون مؤكد. أقبل الدفع فقط عبر التحويل البنكي (IBAN: [___]) أو نقدًا ضمن الحدود القانونية. أُصدر فاتورة إلكترونية عبر SDI خلال 12 يومًا من استلام الدفع. جميع المدفوعات باليورو — أي رسوم تحويل دولي يتحملها العميل بالكامل.",
      },
      {
        label: "المادة 8",
        title: "تعويض مصاريف التنقل",
        text:
          "لا تُطبق أي رسوم تنقل داخل منطقة العمل الأساسية (ديرفيو / محافظة ليكو والمناطق القريبة). بالنسبة للتدخلات خارج المنطقة الأساسية — بما فيها ميلانو — يتم الاتفاق كتابيًا على رسوم المسافة قبل بدء التعاون والإشارة إليها في المادة 2 أعلاه.",
      },
      {
        label: "المادة 9",
        title: "مراجعة الأجر",
        text:
          "يبقى الأجر المتفق عليه ثابتًا ما لم تحدث تغييرات مهمة في ملف الرعاية — زيادة الاعتماد، احتياجات رعاية جديدة، تغيير نوع الجلسة، أو توسع جغرافي. أُبلغ بأي اقتراح لمراجعة الأجر كتابةً قبل 7 أيام على الأقل. يمكن للعميل القبول أو الرفض. وإذا رُفض، ينتهي التعاون بنهاية الفترة المدفوعة بالفعل دون غرامات لأي طرف.",
      },
      {
        label: "المادة 4",
        title: "سياسة الإلغاء",
        text:
          "سياسة الإلغاء — عتبة واحدة، بلا استثناءات، بغض النظر عن السبب (بما في ذلك الطوارئ الطبية أو الإدخال للمستشفى): أكثر من 7 أيام إشعار قبل بدء الفترة → استرداد كامل للدفع المسبق. أقل من 7 أيام إشعار قبل بدء الفترة → يُحتفظ بالدفع المسبق الكامل. يجب الإبلاغ عن الإلغاء كتابيًا عبر البريد الإلكتروني أو واتساب. لا يعتد قانونًا بالإبلاغ الشفهي بموجب هذا العقد. أي مبالغ مستردة تُعاد خلال 5 أيام عمل عبر التحويل البنكي.",
      },
      {
        label: "المادة 5",
        title: "الانسحاب من العقد",
        text:
          "انسحاب العميل: يمكن للعميل الانسحاب في أي وقت بإشعار كتابي قبل 15 يومًا تقويميًا على الأقل. خلال فترة الإشعار تستمر الجلسات المدفوعة بالفعل بشكل طبيعي. يبقى الدفع المسبق المستلم للجلسات المنفذة محتفظًا به. الفترات المستقبلية غير المدفوعة لا تنشئ أي التزام لأي من الطرفين. انسحابي أنا: لا أستطيع الانسحاب إلا لسبب مشروع (عدم الدفع، سلوك خطير، طلبات متكررة خارج النطاق، قوة قاهرة). أكمل جميع الجلسات الخاصة بالفترة المدفوعة بالفعل قبل أن يصبح الانسحاب نافذًا، إلا في حالات السبب المشروع الفوري والخطير. الفترات المستقبلية غير المدفوعة لا تتطلب أي إشعار — لأنها لم تكن مفعلة أصلًا.",
      },
      {
        label: "المادة 6",
        title: "شرط الإنهاء التلقائي",
        text:
          "يُنهى العقد تلقائيًا بإخطاري الكتابي في الحالات التالية: عدم الدفع بعد 5 أيام عمل، طلبات متكررة خارج النطاق بعد رفض رسمي، سلوك يعرض سلامتي للخطر، بيانات كاذبة عند التوقيع، انتهاك جسيم للسرية، أو عدم توفر العميل بشكل منتظم لفترتين متتاليتين أو أكثر. لا يلزم أي حكم قضائي. يصبح الإنهاء نافذًا عند استلام إخطاري الكتابي (المادة 1456 من القانون المدني).",
      },
      {
        label: "المادة 10",
        title: "نطاق OSS وتحديد المسؤولية",
        text:
          "أعمل حصريًا ضمن نطاق OSS المعتمد (القانون 42/1999، المرسوم الوزاري 520/2001). تُستبعد دائمًا وبشكل دائم الأنشطة التالية — بغض النظر عن الاستعجال أو طلب العميل: إعطاء أو إدارة الأدوية، أي إجراء طبي، التشخيص السريري أو التقييم الصحي، العناية بالجروح أو العلاج بعد العمليات، الجلسات النفسية أو العلاجية، والرعاية المنزلية 24 ساعة — وهي خدمة خارج نطاقي المهني وغير مقدمة. أي حالة سريرية ألاحظها أثناء الجلسة أبلغ عنها فورًا للعائلة وأحوّلها إلى المختص الصحي المناسب. لست مسؤولًا عن النتائج التي تتطلب تدخلًا سريريًا خارج نطاقي المعتمد. كما لست مسؤولًا عن الأضرار الناتجة عن معلومات ناقصة أو خاطئة قدمها العميل أثناء التقييم.",
      },
      {
        label: "المادة 7",
        title: "تعليق الخدمة",
        text:
          "يمكنني تعليق الجلسات مؤقتًا — دون أن أكون مقصرًا — في الحالات التالية: عدم الدفع (تلقائيًا، دون إشعار)، ظروف بيئية غير آمنة في منزل العميل، عدم قدرتي المؤقتة على العمل (يتم الإبلاغ عنها بأسرع وقت ممكن)، أو القوة القاهرة. تُعاد الجلسات المعلقة بسبب عدم قدرتي أو تُحتسب في الفترة التالية. أما الجلسات المعلقة بسبب عدم الدفع فتخضع للمادة 4.",
      },
      {
        label: "المادة 11",
        title: "السرية والسر المهني",
        text:
          "أحافظ على أعلى درجات السرية بشأن جميع المعلومات المتعلقة بالشخص المعتنى به، والعائلة، والحالة الصحية، والعادات، وأي معلومات أخرى يتم الحصول عليها أثناء عملي. لن تتم مشاركة هذه المعلومات بأي شكل دون موافقة كتابية صريحة من العميل، إلا في الحالات التي يفرضها القانون (مثل الإبلاغ عن حالات الطوارئ). يسري التزام السرية على الطرفين ويظل نافذًا لمدة 3 سنوات بعد انتهاء العقد لأي سبب.",
      },
      {
        label: "المادة 12",
        title: "معالجة البيانات الشخصية — GDPR",
        text:
          "تُعالج البيانات الشخصية والحساسة فقط لأغراض هذا التعاون، وفقًا للائحة الأوروبية 2016/679 (GDPR) والمرسوم التشريعي 101/2018. أنا مسؤول المعالجة. تُعالج البيانات الصحية (فئة خاصة بموجب المادة 9 من GDPR) فقط بموافقة العميل الصريحة. تُحفظ البيانات طوال مدة التعاون، إضافة إلى 10 سنوات للالتزامات الضريبية و3 سنوات للنزاعات التعاقدية المحتملة. للعميل الحق في الوصول إلى بياناته وتصحيحها وطلب حذفها في أي وقت من خلال التواصل معي كتابيًا.",
      },
      {
        label: "المادة 13",
        title: "القوة القاهرة والأحداث غير المتوقعة",
        text:
          "أحداث القوة القاهرة (الكوارث الطبيعية، الأوبئة المعلنة، القيود الحكومية، المرض المفاجئ الموثق) توقف التزامي بالتنفيذ دون أن تُعد إخلالًا. أبلغ العميل كتابيًا بأسرع وقت ممكن. يُرد الدفع المسبق للجلسات غير المنفذة أثناء القوة القاهرة بالكامل خلال 5 أيام عمل. وإذا تجاوز الحدث 30 يومًا، يحق لأي طرف الإنهاء دون غرامات.",
      },
      {
        label: "المادتان 14–15",
        title: "الاختصاص والتسوية الودية",
        text:
          "يخضع هذا العقد حصريًا للقانون الإيطالي (المواد 2229–2237 من القانون المدني). قبل أي إجراء قانوني، يلتزم الطرفان بمحاولة حل ودي (15 يومًا) وإن لزم الأمر وساطة مدنية وفق المرسوم التشريعي 28/2010. الاختصاص الحصري لأي نزاع غير محلول هو محكمة ليكو. هذه المادة مقبولة صراحة وفقًا للمادتين 1341–1342 من القانون المدني.",
      },
      {
        label: "المادة 17",
        title: "الموافقة الخاصة على البنود المرهقة",
        text:
          "يوافق العميل صراحةً وبشكل خاص على البنود التالية وفقًا للمادتين 1341–1342 من القانون المدني: الدفع المسبق كشرط للتفعيل (المادة 2) · سياسة الإلغاء — الاحتفاظ الكامل تحت 7 أيام (المادة 4) · إشعار الانسحاب 15 يومًا (المادة 5) · شرط الإنهاء التلقائي (المادة 6) · استثناءات نطاق OSS (المادة 10) · الاختصاص الحصري — محكمة ليكو (المادة 14).",
      },
    ],
  },
};

export function getContractCopy(locale: Locale) {
  return contractCopy[locale];
}

export function buildContractMetadata(locale: Locale): Metadata {
  const t = contractCopy[locale];

  return {
    metadataBase: new URL("https://www.accanto-care.com"),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: localizedPath(locale, "/contract"),
      languages: {
        "it-IT": "/contract",
        "en-US": "/en/contract",
        "fr-FR": "/fr/contract",
        ar: "/ar/contract",
      },
    },
    openGraph: {
      type: "website",
      url: `https://www.accanto-care.com${localizedPath(locale, "/contract")}`,
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      siteName: "Accanto",
      locale: locale === "it" ? "it_IT" : locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "ar_AR",
      images: [
        {
          url: "/Images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: ["/Images/og-image.jpg"],
    },
    icons: {
      icon: "/Images/logo.png",
      apple: "/Images/apple-touch-icon.png",
    },
  };
}