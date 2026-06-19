"use client";

import React from "react";
import Link from "next/link";

type Lang = "it" | "fr" | "en" | "ar";

type Props = {
  lang: Lang;
};

type ContractCard = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  green?: boolean;
  terra?: boolean;
};

const copy = {
  it: {
    eyebrow: "Contratto e condizioni",
    title: (
      <>
        Trasparenza legale.
        <br />
        Prima di iniziare.
      </>
    ),
    subtitle:
      "Prima di iniziare qualsiasi collaborazione, viene firmato un contratto scritto che definisce con precisione cosa faccio, come lo faccio, quanto costa e cosa succede se qualcosa cambia. Protegge te come cliente. Protegge me come professionista.",
    framingTitle: "Trasparenza prima di tutto",
    framingText:
      "Non si tratta di una formalità burocratica — è il fondamento di un rapporto professionale serio. Il contratto viene firmato solo dopo che la tua richiesta è stata valutata e dopo un confronto diretto. Nessun contratto viene emesso per richieste non qualificate o non approvate.",
    draftEyebrow: "Bozza di contratto — sola lettura",
    draftTitle: (
      <>
        Un esempio di ciò che viene firmato
        <br />
        prima che io inizi.
      </>
    ),
    draftSubtitle: "Sola lettura — esempio",
    professional: "Il professionista",
    client: "Il cliente / rappresentante legale",
    ctaTitle: "Tutto chiaro. Tutto trasparente.",
    ctaSub:
      "Invio il contratto firmato solo dopo aver valutato la tua richiesta e dopo un confronto diretto. Nessuna scorciatoia.",
    ctaLink: "Invia la tua richiesta →",
    ctaNote: "Nessun obbligo. Nessuna risposta automatica. Solo una valutazione professionale.",
    sectionLabels: [
      "Sezione 1 — Chi sono e come lavoro",
      "Sezione 2 — Compenso e pagamento",
      "Sezione 3 — Cancellazioni e rinuncia",
      "Sezione 4 — Perimetro professionale OSS",
      "Sezione 5 — Riservatezza e dati personali",
      "Sezione 6 — Legge applicabile e controversie",
    ],
  },
  fr: {
    eyebrow: "Contrat et conditions",
    title: (
      <>
        Transparence légale.
        <br />
        Avant de commencer.
      </>
    ),
    subtitle:
      "Avant toute collaboration, un contrat écrit est signé afin de définir précisément ce que je fais, comment je le fais, combien cela coûte et ce qui se passe si quelque chose change. Il vous protège en tant que client. Il me protège en tant que professionnel.",
    framingTitle: "La transparence d’abord",
    framingText:
      "Ce n’est pas une formalité administrative — c’est la base d’une relation professionnelle sérieuse. Le contrat n’est signé qu’après l’évaluation de votre demande et un échange direct. Aucun contrat n’est émis pour des demandes non qualifiées ou non approuvées.",
    draftEyebrow: "Projet de contrat — lecture seule",
    draftTitle: (
      <>
        Un exemple de ce qui est signé
        <br />
        avant mon intervention.
      </>
    ),
    draftSubtitle: "Lecture seule — exemple",
    professional: "Le professionnel",
    client: "Le client / représentant légal",
    ctaTitle: "Tout est clair. Tout est transparent.",
    ctaSub:
      "J’envoie le contrat signé uniquement après avoir évalué votre demande et après un échange direct. Aucune étape inutile.",
    ctaLink: "Envoyer ma demande →",
    ctaNote: "Aucune obligation. Aucune réponse automatique. Seulement une évaluation professionnelle.",
    sectionLabels: [
      "Section 1 — Qui je suis et comment je travaille",
      "Section 2 — Rémunération et paiement",
      "Section 3 — Annulations et renonciation",
      "Section 4 — Périmètre professionnel OSS",
      "Section 5 — Confidentialité et données personnelles",
      "Section 6 — Droit applicable et litiges",
    ],
  },
  en: {
    eyebrow: "Contract and terms",
    title: (
      <>
        Legal clarity.
        <br />
        Before starting.
      </>
    ),
    subtitle:
      "Before any collaboration begins, a written contract is signed to define exactly what I do, how I do it, how much it costs, and what happens if something changes. It protects you as the client. It protects me as the professional.",
    framingTitle: "Transparency first",
    framingText:
      "This is not a bureaucratic formality — it is the foundation of a serious professional relationship. The contract is signed only after your request has been reviewed and after a direct discussion. No contract is issued for unqualified or unapproved requests.",
    draftEyebrow: "Contract draft — read only",
    draftTitle: (
      <>
        An example of what is signed
        <br />
        before I begin.
      </>
    ),
    draftSubtitle: "Read only — example",
    professional: "The professional",
    client: "The client / legal representative",
    ctaTitle: "Everything is clear. Everything is transparent.",
    ctaSub:
      "I send the signed contract only after reviewing your request and after a direct discussion. No shortcuts.",
    ctaLink: "Send my request →",
    ctaNote: "No obligation. No automatic reply. Only a professional review.",
    sectionLabels: [
      "Section 1 — Who I am and how I work",
      "Section 2 — Fees and payment",
      "Section 3 — Cancellations and withdrawal",
      "Section 4 — OSS professional scope",
      "Section 5 — Confidentiality and personal data",
      "Section 6 — Applicable law and disputes",
    ],
  },
  ar: {
    eyebrow: "العقد والشروط",
    title: (
      <>
        وضوح قانوني.
        <br />
        قبل البدء.
      </>
    ),
    subtitle:
      "قبل بدء أي تعاون، يتم توقيع عقد مكتوب يحدد بدقة ما أقدمه، وكيف أقدمه، وكم يكلف، وماذا يحدث إذا تغير شيء ما. وهو يحميك كعميل، ويحمني كمحترف.",
    framingTitle: "الشفافية أولاً",
    framingText:
      "هذا ليس إجراءً بيروقراطياً — بل هو أساس العلاقة المهنية الجدية. لا يتم توقيع العقد إلا بعد مراجعة طلبك وبعد نقاش مباشر. لا يتم إصدار أي عقد للطلبات غير المؤهلة أو غير المعتمدة.",
    draftEyebrow: "مسودة العقد — للقراءة فقط",
    draftTitle: (
      <>
        مثال لما يتم توقيعه
        <br />
        قبل أن أبدأ.
      </>
    ),
    draftSubtitle: "للقراءة فقط — مثال",
    professional: "المحترف",
    client: "العميل / الممثل القانوني",
    ctaTitle: "كل شيء واضح. كل شيء شفاف.",
    ctaSub: "أرسل العقد الموقع فقط بعد مراجعة طلبك وبعد نقاش مباشر. لا توجد اختصارات.",
    ctaLink: "إرسال طلبي →",
    ctaNote: "لا التزام. لا رد تلقائي. فقط تقييم مهني.",
    sectionLabels: [
      "القسم 1 — من أنا وكيف أعمل",
      "القسم 2 — الأتعاب والدفع",
      "القسم 3 — الإلغاء والتنازل",
      "القسم 4 — النطاق المهني لـ OSS",
      "القسم 5 — السرية والبيانات الشخصية",
      "القسم 6 — القانون المطبق والنزاعات",
    ],
  },
} as const;

const cards: ContractCard[] = [
  {
    num: "Sezione 1",
    title: "Chi sono e come lavoro",
    desc: "Opero come professionista indipendente pienamente autonomo — non come dipendente. Sono un OSS certificato con P.IVA, e fornisco assistenza domiciliare strutturata entro un perimetro professionale definito. Le sessioni vengono pianificate in modo flessibile tra noi, ma la durata per sessione è fissata contrattualmente. Il minimo è sempre di 5 ore consecutive.",
    tags: ["Professionista autonomo", "OSS certificato", "Minimo 5 ore", "Calendario flessibile"],
    green: true,
  },
  {
    num: "Sezione 2",
    title: "Compenso e pagamento",
    desc: "Le mie tariffe vengono concordate e documentate prima della firma di qualsiasi contratto. Il pagamento avviene in anticipo — prima dell'inizio delle sessioni del periodo concordato. Senza pagamento anticipato non esiste una collaborazione confermata. Emmetto fattura elettronica tramite Aruba entro 12 giorni dal ricevimento del pagamento. Sono accettati solo bonifico bancario o contanti.",
    tags: ["Pagamento anticipato", "Bonifico · Contanti", "Fattura elettronica", "Solo €"],
    terra: true,
  },
  {
    num: "Sezione 3",
    title: "Cancellazioni e rinuncia",
    desc: "Le cancellazioni sono regolate da una soglia unica e chiara. Più di 7 giorni di preavviso prima dell'inizio del periodo: rimborso completo. Meno di 7 giorni: l'intero pagamento anticipato viene trattenuto. Nessuna eccezione. La rinuncia da parte del cliente richiede 15 giorni di preavviso scritto. Io posso rinunciare solo per giusta causa, completando prima tutte le sessioni già pagate.",
    tags: ["Soglia 7 giorni", "Preavviso 15 giorni", "Solo scritto", "Nessuna eccezione"],
    terra: true,
  },
  {
    num: "Sezione 4",
    title: "Il mio perimetro professionale OSS",
    desc: "Opero esclusivamente entro il perimetro OSS certificato definito dalla legge italiana (Legge 42/1999, D.M. 520/2001). Sono fuori dal mio ambito e verranno sempre rifiutate: somministrazione dei farmaci, procedure mediche, diagnosi cliniche, cura delle ferite, sedute psicologiche e assistenza domiciliare 24 ore su 24. Il rifiuto di richieste fuori perimetro non costituisce mai un inadempimento.",
    tags: ["No farmaci", "No atti clinici", "No 24h live-in", "Solo ambito OSS"],
    terra: true,
  },
  {
    num: "Sezione 5",
    title: "Riservatezza e dati personali",
    desc: "Tutte le informazioni relative alla persona assistita e alla famiglia sono trattate con assoluta riservatezza professionale, in conformità alla normativa italiana sul segreto professionale (art. 622 c.p.) e al Regolamento UE GDPR 2016/679. I dati vengono trattati esclusivamente per le finalità della collaborazione e non sono mai condivisi con terzi. L'obbligo di riservatezza si estende per 3 anni dopo la fine del contratto.",
    tags: ["Conforme al GDPR", "Nessuna condivisione", "Art. 622 c.p.", "Obbligo 3 anni"],
    green: true,
  },
  {
    num: "Sezione 6",
    title: "Legge applicabile e controversie",
    desc: "Il presente contratto è regolato esclusivamente dalla legge italiana ai sensi degli artt. 2229–2237 del Codice Civile. Prima di qualsiasi azione legale, entrambe le parti si impegnano a tentare una soluzione amichevole e, se necessario, una mediazione civile (D.Lgs. 28/2010). Il tribunale competente per qualsiasi controversia non risolta è il Tribunale di Lecco.",
    tags: ["Legge italiana", "Conciliazione", "Tribunale di Lecco", "Art. 2229–2237 c.c."],
  },
];

const articles = [
  {
    label: "Art. 1",
    title: "Ambito del servizio professionale",
    text: "Opero come professionista pienamente autonomo ai sensi degli artt. 2222 e 2230 c.c. — senza alcun vincolo di subordinazione verso il cliente e senza alcun rapporto di lavoro subordinato. Sono un OSS certificato con P.IVA 01103920144, e fornisco assistenza domiciliare entro il perimetro professionale concordato, documentato nel Programma delle attività allegato (Allegato A). La categoria di assistenza applicabile al presente contratto è: [Categoria A — Assistenza anziani / Categoria B — Supporto disabilità / Categoria C — Minori con bisogni speciali]. Il Programma delle attività può essere aggiornato con consenso scritto reciproco senza richiedere la riemissione completa del contratto.",
  },
  {
    label: "Art. 3",
    title: "Durata minima della sessione e pianificazione",
    text: "La durata minima di ogni sessione di assistenza è di 5 ore consecutive — senza eccezioni, indipendentemente dal profilo assistito o dal tipo di sessione. La durata concordata per il presente contratto è [___] ore per sessione. Il calendario delle sessioni è flessibile e concordato tra le parti. Ciò che è fissato contrattualmente è la durata della sessione, il numero di sessioni per periodo e il tipo di sessione (diurna 07:00–22:00 / notturna passiva / notturna attiva). Le modifiche della fascia oraria richiedono 48 ore di preavviso e il mio consenso esplicito.",
  },
  {
    label: "Art. 2",
    title: "Tariffa oraria e pagamento anticipato",
    text: "Tariffa oraria concordata: € [___] / ora · Tipo di sessione: [diurna / notturna passiva / notturna attiva]. Eventuale supplemento per complessità o distanza: € [___] / ora — [motivazione]. Il pagamento dell'intero compenso per il periodo concordato è dovuto prima dell'inizio delle sessioni — settimanalmente entro il lunedì precedente, oppure mensilmente entro il primo del mese. Nessun pagamento anticipato = nessuna collaborazione confermata. Accetto il pagamento esclusivamente tramite bonifico bancario (IBAN: [___]) o contanti entro i limiti di legge. Emmetto fattura elettronica tramite SDI entro 12 giorni dal ricevimento del pagamento. Tutti i pagamenti sono in Euro — eventuali commissioni di bonifico internazionale sono esclusivamente a carico del cliente.",
  },
  {
    label: "Art. 8",
    title: "Rimborso spese di trasferta",
    text: "Nessun supplemento di trasferta viene applicato all'interno della zona operativa primaria (Dervio / provincia di Lecco e aree limitrofe). Per interventi fuori dalla zona primaria — Milano inclusa — un supplemento di distanza viene concordato per iscritto prima dell'inizio della collaborazione e indicato nell'Art. 2 sopra.",
  },
  {
    label: "Art. 9",
    title: "Revisione della tariffa",
    text: "La tariffa concordata resta fissa salvo modifiche significative del profilo di assistenza — maggiore dipendenza, nuovi bisogni di cura, cambio del tipo di sessione o estensione geografica. Comunico ogni proposta di revisione tariffaria per iscritto con un preavviso minimo di 7 giorni. Il cliente può accettare o rifiutare. Se rifiutata, la collaborazione termina alla fine del periodo già pagato senza penali per nessuna delle parti.",
  },
  {
    label: "Art. 4",
    title: "Politica di cancellazione",
    text: "Politica di cancellazione — una sola soglia, nessuna eccezione, indipendentemente dalla motivazione (inclusi emergenza medica o ricovero ospedaliero): più di 7 giorni di preavviso prima dell'inizio del periodo → rimborso completo del pagamento anticipato. Meno di 7 giorni di preavviso prima dell'inizio del periodo → l'intero pagamento anticipato viene trattenuto da me. La cancellazione deve essere comunicata per iscritto via email o WhatsApp. La comunicazione verbale non ha validità legale ai sensi del presente contratto. Gli eventuali rimborsi sono restituiti entro 5 giorni lavorativi tramite bonifico bancario.",
  },
  {
    label: "Art. 5",
    title: "Rinuncia al contratto",
    text: "Rinuncia del cliente: il cliente può rinunciare in qualsiasi momento con un preavviso scritto minimo di 15 giorni di calendario. Durante il periodo di preavviso, le sessioni del periodo già pagato proseguono normalmente. Il pagamento anticipato già ricevuto per le sessioni svolte viene trattenuto. I periodi futuri non ancora pagati non generano alcun obbligo per nessuna delle parti. La mia rinuncia: posso rinunciare solo per giusta causa (mancato pagamento, comportamento pericoloso, richieste persistenti fuori perimetro, forza maggiore). Completo tutte le sessioni del periodo già pagato prima che la rinuncia produca effetto, salvo casi di giusta causa immediata e grave. I periodi futuri non ancora pagati non richiedono alcun preavviso — non sono mai stati attivati.",
  },
  {
    label: "Art. 6",
    title: "Clausola di risoluzione automatica",
    text: "Il contratto si risolve automaticamente con mia comunicazione scritta in caso di: mancato pagamento dopo 5 giorni lavorativi, richieste fuori perimetro ripetute dopo un rifiuto formale, comportamento che metta a rischio la mia sicurezza, false dichiarazioni alla firma, grave violazione della riservatezza, o indisponibilità sistematica del cliente per due o più periodi consecutivi. Non è richiesta alcuna sentenza del giudice. La risoluzione ha effetto al ricevimento della mia comunicazione scritta (art. 1456 c.c.).",
  },
  {
    label: "Art. 10",
    title: "Perimetro OSS e limitazione di responsabilità",
    text: "Opero esclusivamente entro il perimetro OSS certificato (Legge 42/1999, D.M. 520/2001). Le seguenti attività sono permanentemente escluse e verranno sempre rifiutate — indipendentemente dall'urgenza o dalla richiesta del cliente: somministrazione o gestione dei farmaci, procedure mediche di qualsiasi tipo, diagnosi cliniche o valutazioni sanitarie, cura delle ferite o trattamenti post-operatori, sedute psicologiche o terapeutiche e assistenza domiciliare 24 ore su 24 — servizio fuori dal mio ambito professionale e non offerto. Qualsiasi situazione clinica che individui durante una sessione viene immediatamente segnalata alla famiglia e indirizzata al professionista sanitario appropriato. Non sono responsabile per esiti che richiedono intervento clinico oltre il mio ambito certificato. Inoltre non sono responsabile per danni causati da informazioni incomplete o errate fornite dal cliente in fase di valutazione.",
  },
  {
    label: "Art. 7",
    title: "Sospensione del servizio",
    text: "Posso sospendere temporaneamente le sessioni — senza essere inadempiente — nei seguenti casi: mancato pagamento (automatico, senza preavviso), condizioni ambientali non sicure presso il domicilio del cliente, mia temporanea incapacità (notificata il prima possibile) o forza maggiore. Le sessioni sospese per mia incapacità vengono rimborsate o accreditate al periodo successivo. Le sessioni sospese per mancato pagamento sono regolate dall'Art. 4.",
  },
  {
    label: "Art. 11",
    title: "Riservatezza e segreto professionale",
    text: "Mantengo la massima riservatezza su tutte le informazioni relative alla persona assistita, alla famiglia, alle condizioni di salute, alle abitudini e a qualsiasi altra informazione acquisita nel corso del mio lavoro. Tali informazioni non saranno mai condivise in alcuna forma senza il consenso scritto esplicito del cliente, salvo i casi previsti dalla legge (ad es. segnalazioni di emergenza). L'obbligo di riservatezza si applica a entrambe le parti e resta in vigore per 3 anni dopo la fine del contratto per qualsiasi motivo.",
  },
  {
    label: "Art. 12",
    title: "Trattamento dei dati personali — GDPR",
    text: "I dati personali e sensibili sono trattati esclusivamente per le finalità della presente collaborazione, in conformità al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 101/2018. Io sono il Titolare del trattamento. I dati sanitari (categoria particolare ai sensi dell'art. 9 GDPR) sono trattati solo con il consenso esplicito del cliente. I dati vengono conservati per la durata della collaborazione, più 10 anni per obblighi fiscali e 3 anni per eventuali controversie contrattuali. Il cliente ha il diritto di accedere, rettificare e chiedere la cancellazione dei propri dati in qualsiasi momento contattandomi per iscritto.",
  },
  {
    label: "Art. 13",
    title: "Forza maggiore ed eventi imprevisti",
    text: "Gli eventi di forza maggiore (catastrofi naturali, pandemie dichiarate, restrizioni governative, malattia improvvisa documentata) sospendono il mio obbligo di esecuzione senza costituire inadempimento. Avviso il cliente per iscritto non appena possibile. Il pagamento anticipato per le sessioni non erogate durante la forza maggiore viene interamente rimborsato entro 5 giorni lavorativi. Se l'evento supera i 30 giorni, ciascuna delle parti può recedere senza penali.",
  },
  {
    label: "Art. 14–15",
    title: "Foro competente e conciliazione",
    text: "Il presente contratto è regolato esclusivamente dalla legge italiana (artt. 2229–2237 c.c.). Prima di ogni azione legale, entrambe le parti si impegnano a tentare una risoluzione amichevole (15 giorni) e, se necessario, una mediazione civile ai sensi del D.Lgs. 28/2010. Il foro competente per eventuali controversie non risolte è esclusivamente il Tribunale di Lecco. La presente clausola è espressamente approvata ai sensi degli artt. 1341–1342 c.c.",
  },
  {
    label: "Art. 17",
    title: "Approvazione specifica delle clausole onerose",
    text: "Il cliente approva espressamente e specificamente le seguenti clausole ai sensi degli artt. 1341–1342 c.c.: pagamento anticipato come condizione di attivazione (Art. 2) · politica di cancellazione — trattenuta integrale sotto i 7 giorni (Art. 4) · preavviso di recesso di 15 giorni (Art. 5) · clausola di risoluzione automatica (Art. 6) · esclusioni del perimetro OSS (Art. 10) · foro esclusivo — Tribunale di Lecco (Art. 14).",
  },
];

export default function ContractClient({ lang }: Props) {
  const t = copy[lang];
  const requestHref = lang === "it" ? "/request" : `/${lang}/request`;

  return (
    <main className="contract-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 className="page-title">{t.title}</h1>
          <p className="page-sub">{t.subtitle}</p>
        </div>
      </div>

      <section className="section">
        <div className="inner">
          <div className="framing">
            <div className="framing-title">{t.framingTitle}</div>
            <p className="framing-text">{t.framingText}</p>
          </div>

          <div className="blocks-grid">
            {cards.map((card) => (
              <article key={card.num} className="block-card">
                <div className="block-num">{card.num}</div>
                <h3 className="block-title">{card.title}</h3>
                <p className="block-desc">{card.desc}</p>
                <div className="block-tags">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={[
                        "block-tag",
                        card.green ? "block-tag-green" : "",
                        card.terra ? "block-tag-terra" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="inner">
          <div className="draft-heading">
            <div className="eyebrow eyebrow-terra">{t.draftEyebrow}</div>
            <h2 className="draft-main-title">{t.draftTitle}</h2>
          </div>

          <div className="draft-wrapper">
            <div className="draft-header">
              <div>
                <div className="draft-title">Contratto di prestazione professionale — Assistenza domiciliare OSS</div>
                <div className="draft-sub">
                  Ai sensi degli artt. 2229–2237 del Codice Civile italiano · Modello standard 2025
                </div>
              </div>

              <div className="draft-readonly-badge">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <circle cx="5" cy="5" r="4.5" stroke="rgba(255,255,255,0.5)" />
                  <path
                    d="M3 5h4M5 3v4"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                {t.draftSubtitle}
              </div>
            </div>

            <div className="draft-parties">
              <div className="party">
                <div className="party-label">{t.professional}</div>
                <div className="party-name">Ghassen Mansouri</div>
                <div className="party-detail">
                  Professionista OSS indipendente · P.IVA 01103920144
                  <br />
                  Dervio (LC) · Lago di Como · Lecco · Sondrio · Milano
                  <br />
                  hello@accanto.care · +39 379 230 6809
                </div>
              </div>

              <div className="party">
                <div className="party-label">{t.client}</div>
                <div className="party-field">[Nome completo del cliente]</div>
                <div className="party-field">[Indirizzo · Codice fiscale]</div>
                <div className="party-field">In qualità di: [ruolo legale]</div>
                <div className="party-field">Persona assistita: [Nome completo]</div>
              </div>
            </div>

            <div className="draft-articles">
              {articles.map((article, index) => (
                <React.Fragment key={article.label}>
                  {index === 0 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{t.sectionLabels[0]}</div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{t.sectionLabels[1]}</div>
                    </div>
                  )}
                  {index === 5 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{t.sectionLabels[2]}</div>
                    </div>
                  )}
                  {index === 8 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{t.sectionLabels[3]}</div>
                    </div>
                  )}
                  {index === 10 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{t.sectionLabels[4]}</div>
                    </div>
                  )}
                  {index === 12 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{t.sectionLabels[5]}</div>
                    </div>
                  )}

                  <div className="art-row">
                    <div className="art-row-header">
                      <span className="art-label">{article.label}</span>
                      <span className="art-title">{article.title}</span>
                    </div>
                    <p className="art-text">{article.text}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="closing-note">
            <p className="closing-note-text">
              Il contratto completo, comprensivo degli allegati e delle clausole specifiche, viene trasmesso al cliente
              via email in formato PDF firmato, successivamente all&apos;approvazione della richiesta di valutazione.
            </p>
          </div>

          <div className="cta-block">
            <div className="cta-title">{t.ctaTitle}</div>
            <p className="cta-sub">{t.ctaSub}</p>
            <Link
              href={requestHref}
              style={{
                backgroundColor: "#ffffff",
                color: "black",
                padding: "14px 28px",
                borderRadius: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 500,
                border: "1.5px solid #0f6e56",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              {t.ctaLink}
            </Link>
            <p className="cta-note">{t.ctaNote}</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contract-page {
          --green: #0f6e56;
          --green-light: #e8f7f2;
          --green-mid: #c5e8df;
          --ink: #1c1c1a;
          --sand: #f5f2ec;
          --terra: #c4763a;
          --terra-light: #f7ede3;
          --text-muted: #6b6865;
          --text-light: #9b9895;
          --border: #e2ddd6;
          --white: #ffffff;
          --font-display: "Cormorant Garamond", serif;
          --font-body: "DM Sans", sans-serif;
          --radius: 10px;
          --radius-lg: 16px;
          --shadow: 0 2px 16px rgba(28, 28, 26, 0.09);

          font-family: var(--font-body);
          color: var(--ink);
          background: var(--white);
          font-size: 15px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .contract-page,
        .contract-page * {
          box-sizing: border-box;
        }

        .contract-page a {
          color: inherit;
          text-decoration: none;
        }

        .page-hero {
          background: var(--sand);
          padding: 56px 5% 48px;
          border-bottom: 1px solid var(--border);
        }

        .page-hero-inner,
        .inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 12px;
        }

        .eyebrow-terra {
          color: var(--terra);
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .page-sub {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 640px;
        }

        .section {
          padding: 56px 5%;
        }

        .section-sand {
          background: var(--sand);
        }

        .framing {
          background: var(--green-light);
          border: 1px solid var(--green-mid);
          border-radius: var(--radius-lg);
          padding: 30px 34px;
          margin-bottom: 48px;
        }

        .framing-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 300;
          color: var(--green);
          margin-bottom: 10px;
        }

        .framing-text {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.75;
        }

        .blocks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .block-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 26px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .block-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }

        .block-num {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 10px;
        }

        .block-title {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .block-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 14px;
        }

        .block-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .block-tag {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 99px;
          border: 1px solid var(--border);
          color: var(--text-muted);
          background: var(--sand);
        }

        .block-tag-green {
          background: var(--green-light);
          border-color: var(--green-mid);
          color: var(--green);
        }

        .block-tag-terra {
          background: var(--terra-light);
          border-color: rgba(196, 118, 58, 0.25);
          color: var(--terra);
        }

        .draft-heading {
          margin-bottom: 24px;
        }

        .draft-main-title {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 300;
          color: var(--ink);
          line-height: 1.2;
        }

        .draft-wrapper {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 32px;
        }

        .draft-header {
          background: var(--ink);
          padding: 22px 28px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .draft-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 300;
          color: var(--white);
        }

        .draft-sub {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 4px;
        }

        .draft-readonly-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 99px;
          padding: 4px 12px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
        }

        .draft-parties {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
        }

        .party {
          padding: 16px 24px;
          border-right: 1px solid var(--border);
        }

        .party:last-child {
          border-right: none;
        }

        .party-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 6px;
        }

        .party-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 2px;
        }

        .party-detail,
        .party-field {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .draft-articles {
          padding: 20px 24px;
        }

        .art-row {
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
        }

        .art-row:last-child {
          border-bottom: none;
        }

        .art-row-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 8px;
        }

        .art-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          flex-shrink: 0;
          padding-top: 2px;
          min-width: 80px;
        }

        .art-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
        }

        .art-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.65;
          padding-left: 96px;
        }

        .art-text strong {
          color: var(--ink);
          font-weight: 500;
        }

        .draft-section-divider {
          background: var(--sand);
          padding: 10px 24px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          margin: 0 -24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .draft-section-divider-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--green);
        }

        .closing-note {
          background: var(--sand);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          margin-bottom: 28px;
          text-align: center;
        }

        .closing-note-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.75;
          font-style: italic;
          max-width: 680px;
          margin: 0 auto;
        }

        .cta-block {
          background: var(--green);
          border-radius: var(--radius-lg);
          padding: 36px;
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--white);
          margin-bottom: 10px;
        }

        .cta-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 22px;
          line-height: 1.7;
        }

        .cta-note {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 13px;
        }

        @media (max-width: 768px) {
          .page-hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .blocks-grid,
          .draft-parties {
            grid-template-columns: 1fr;
          }

          .draft-header {
            flex-direction: column;
            align-items: stretch;
          }

          .party {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .party:last-child {
            border-bottom: none;
          }

          .art-text {
            padding-left: 0;
          }

          .art-row-header {
            flex-direction: column;
            gap: 4px;
          }

          .art-label {
            min-width: unset;
          }

          .cta-block {
            padding: 28px 18px;
          }

          .cta-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .framing,
          .draft-articles {
            padding-left: 16px;
            padding-right: 16px;
          }

          .block-card {
            padding: 18px;
          }

          .draft-wrapper {
            border-radius: 14px;
          }
        }
      `}</style>
    </main>
  );
}