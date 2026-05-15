import Head from "next/head";
import Image from "next/image";

export default function ProfilePage() {
  const css = `
    .profile-page {
      --green: #0f6e56;
      --green-light: #e8f7f2;
      --green-mid: #c5e8df;
      --ink: #1c1c1a;
      --sand: #f5f2ec;
      --terra: #c4763a;
      --text-muted: #6b6865;
      --text-light: #9b9895;
      --border: #e2ddd6;
      --white: #ffffff;
      --font-display: "Cormorant Garamond", serif;
      --font-body: "DM Sans", sans-serif;
      --radius: 10px;
      --radius-lg: 16px;
      --shadow: 0 2px 12px rgba(28, 28, 26, 0.08);

      font-family: var(--font-body);
      color: var(--ink);
      background: var(--white);
      font-size: 15px;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    .profile-page *,
    .profile-page *::before,
    .profile-page *::after {
      box-sizing: border-box;
    }

    .profile-page a {
      color: inherit;
      text-decoration: none;
    }

    .profile-page img {
      max-width: 100%;
      display: block;
    }

    .profile-hero {
      background: var(--sand);
      padding: 56px 5% 64px;
      border-bottom: 1px solid var(--border);
    }

    .profile-hero-inner,
    .section-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    .profile-hero-inner {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 48px;
      align-items: center;
    }

    .profile-photo-wrap {
      position: relative;
      width: 160px;
      height: 160px;
      flex-shrink: 0;
    }

    .profile-photo {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
      border: 3px solid var(--white);
      box-shadow: var(--shadow);
    }

    .profile-eyebrow,
    .section-eyebrow,
    .cta-you-label,
    .area-tag,
    .lang-level {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--terra);
      margin-bottom: 12px;
    }

    .profile-name,
    .section-title,
    .cta-you-title,
    .area-title,
    .lang-name,
    .philosophy-quote,
    .path-num,
    .method-num,
    .discovery-num {
      font-family: var(--font-display);
      font-weight: 300;
    }

    .profile-name {
      font-size: clamp(32px, 4vw, 48px);
      line-height: 1.1;
      color: var(--ink);
      margin-bottom: 8px;
    }

    .profile-role {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .profile-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-bottom: 20px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      font-size: 12px;
      padding: 4px 12px;
      border-radius: 99px;
      border: 1px solid var(--border);
      background: var(--white);
      color: var(--text-muted);
    }

    .chip-accent {
      background: var(--green-light);
      border-color: var(--green-mid);
      color: var(--green);
      font-weight: 500;
    }

    .profile-bio {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.75;
      max-width: 580px;
    }

    .section {
      padding: 56px 5%;
    }

    .section-alt {
      background: var(--sand);
    }

    .section-title {
      font-size: clamp(24px, 3vw, 36px);
      line-height: 1.2;
      color: var(--ink);
      margin-bottom: 28px;
    }

    .path-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .path-card,
    .lang-card,
    .area-card {
      background: var(--white);
      border: 1px solid var(--border);
    }

    .path-card {
      border-radius: var(--radius-lg);
      padding: 28px;
    }

    .path-num {
      font-size: 44px;
      color: var(--green);
      line-height: 1;
      margin-bottom: 8px;
    }

    .path-label,
    .method-title,
    .cert-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--ink);
    }

    .path-label {
      margin-bottom: 4px;
    }

    .path-sub,
    .area-desc,
    .method-desc,
    .discovery-text,
    .cta-you-sub {
      color: var(--text-muted);
    }

    .path-sub {
      font-size: 13px;
      margin-bottom: 14px;
      line-height: 1.5;
    }

    .path-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .path-tag {
      font-size: 11px;
      padding: 3px 9px;
      border-radius: 99px;
      border: 1px solid var(--border);
      color: var(--text-muted);
      background: var(--sand);
    }

    .certs-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .cert-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 10px 16px;
    }

    .cert-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      flex-shrink: 0;
    }

    .cert-name {
      font-size: 13px;
    }

    .cert-desc {
      font-size: 11px;
      color: var(--text-muted);
      margin-left: 4px;
    }

    .langs-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
    }

    .lang-card {
      border-radius: var(--radius);
      padding: 20px 16px;
      text-align: center;
    }

    .lang-name {
      font-size: 20px;
      color: var(--ink);
      margin-bottom: 4px;
    }

    .lang-level {
      color: var(--green);
      margin-bottom: 10px;
    }

    .lang-skills {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .lang-skill {
      font-size: 11px;
      color: var(--text-muted);
    }

    .method-list,
    .philosophy-block {
      display: flex;
      flex-direction: column;
    }

    .method-item {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
    }

    .method-item:last-child,
    .philosophy-item:last-child {
      border-bottom: none;
    }

    .method-num,
    .discovery-num {
      color: var(--green);
      line-height: 1;
      flex-shrink: 0;
    }

    .method-num {
      font-size: 28px;
      width: 36px;
    }

    .method-body {
      flex: 1;
    }

    .method-desc {
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 5px;
    }

    .method-benefit {
      font-size: 12px;
      color: var(--green);
      font-style: italic;
    }

    .philosophy-item {
      padding: 24px 0;
      border-bottom: 1px solid var(--border);
    }

    .philosophy-quote {
      font-size: 20px;
      font-style: italic;
      color: var(--ink);
      line-height: 1.5;
    }

    .philosophy-text {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.8;
      margin: 0;
      max-width: 820px;
    }

    .area-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .area-card {
      border-radius: var(--radius-lg);
      padding: 22px;
    }

    .area-tag {
      font-size: 10px;
      margin-bottom: 8px;
    }

    .area-title {
      font-size: 20px;
      color: var(--ink);
      margin-bottom: 6px;
      line-height: 1.2;
    }

    .area-desc {
      font-size: 12px;
      line-height: 1.5;
    }

    .narrow {
      max-width: 600px;
      margin: 0 auto;
    }

    .centered {
      text-align: center;
    }

    .discovery-steps {
      display: flex;
      flex-direction: column;
      gap: 0;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .discovery-step {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 18px 22px;
      border-bottom: 1px solid var(--border);
    }

    .discovery-step:last-child {
      border-bottom: none;
    }

    .discovery-num {
      font-size: 22px;
      width: 28px;
    }

    .discovery-text {
      font-size: 13px;
      line-height: 1.6;
    }

    .discovery-note {
      font-size: 12px;
      color: var(--text-light);
      margin-top: 12px;
      font-style: italic;
    }

    .cta-you {
      background: var(--ink);
      border-radius: var(--radius-lg);
      padding: 40px;
      text-align: center;
      margin-top: 40px;
    }

    .cta-you-label {
      color: var(--terra);
      margin-bottom: 12px;
    }

    .cta-you-title {
      font-size: 32px;
      color: var(--white);
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .cta-you-sub {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.55);
      margin-bottom: 28px;
      line-height: 1.7;
    }

    .btn-terra {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--terra);
      color: var(--white);
      padding: 13px 26px;
      border-radius: var(--radius);
      font-size: 14px;
      font-weight: 500;
      transition: background 0.2s;
      border: none;
      cursor: pointer;
    }

    .btn-terra:hover {
      background: #a8622e;
    }

    .cta-note {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.35);
      margin-top: 14px;
    }

    @media (max-width: 1024px) {
      .langs-grid,
      .area-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .profile-hero {
        padding: 40px 5% 48px;
      }

      .profile-hero-inner,
      .path-grid,
      .area-grid,
      .langs-grid {
        grid-template-columns: 1fr;
      }

      .profile-hero-inner {
        gap: 24px;
        justify-items: center;
        text-align: center;
      }

      .profile-chips,
      .certs-row {
        justify-content: center;
      }

      .method-item {
        gap: 14px;
      }

      .cta-you {
        padding: 30px 20px;
      }

      .cta-you-title {
        font-size: 26px;
      }
    }

    @media (max-width: 480px) {
      .section,
      .profile-hero {
        padding-left: 16px;
        padding-right: 16px;
      }

      .path-card,
      .lang-card,
      .area-card {
        padding: 18px;
      }

      .philosophy-quote {
        font-size: 18px;
      }

      .method-item,
      .discovery-step {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  `;

  return (
    <>
      <Head>
  <title>
    OSS certificato · Professionista di assistenza sanitaria indipendente · Lago di Como – Lecco / Valtellina / Milano
  </title>
  <meta
    name="description"
    content="OSS certificato con oltre 8 anni nel settore socio-sanitario e oltre un decennio in customer experience e hospitality internazionale."
  />
</Head>

      <style>{css}</style>

      <main className="profile-page">
        <section className="profile-hero">
          <div className="profile-hero-inner">
            <div className="profile-photo-wrap">
  <Image
    src="/Images/ghassen.jpg"
    alt="Ghassen Mansouri, OSS certificato e professionista di assistenza sanitaria indipendente"
    width={160}
    height={160}
    className="profile-photo"
    priority
    sizes="160px"
  />
</div>

            <div>
              <div className="profile-eyebrow">Identità professionale</div>
              <h1 className="profile-name">Ghassen Mansouri</h1>
              <div className="profile-role">
                OSS certificato · Professionista di assistenza sanitaria indipendente · Lago di Como –
                Lecco / Valtellina / Milano
              </div>
              <div className="profile-chips">
                <span className="chip chip-accent">OSS · Professionista indipendente</span>
                <span className="chip">5 lingue</span>
                <span className="chip">Oltre 8 anni in ambito sanitario</span>
                <span className="chip">Oltre 10 anni in hospitality</span>
                <span className="chip">BLSD · HACCP</span>
              </div>
              <p className="profile-bio">
                OSS certificato con oltre 8 anni nel settore socio-sanitario e più di un decennio
                in customer experience e hospitality internazionale. Comunicazione professionale in
                italiano, inglese, francese, arabo e tedesco. Approccio umano, struttura provata sul
                campo, nessun compromesso.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-eyebrow">Percorso professionale</div>
            <h2 className="section-title">
              Due mondi professionali.
              <br />
              Un unico approccio integrato alla cura.
            </h2>
            <div className="path-grid">
              <div className="path-card">
                <div className="path-num">8+</div>
                <div className="path-label">anni — settore socio-sanitario</div>
                <div className="path-sub">
                  Anziani, persone con disabilità, pazienti in fase di recupero in strutture
                  pubbliche e protette.
                </div>
                <div className="path-tags">
                  <span className="path-tag">Ospedale pubblico</span>
                  <span className="path-tag">RSA</span>
                  <span className="path-tag">RSD</span>
                  <span className="path-tag">Comunità protetta</span>
                </div>
              </div>
              <div className="path-card">
                <div className="path-num">10+</div>
                <div className="path-label">anni — hospitality & customer experience</div>
                <div className="path-sub">
                  Contesti relazionali di alto livello, clientela internazionale, forte pressione
                  operativa.
                </div>
                <div className="path-tags">
                  <span className="path-tag">Crociera</span>
                  <span className="path-tag">Duty free</span>
                  <span className="path-tag">Luxury brands</span>
                  <span className="path-tag">IT SaaS</span>
                  <span className="path-tag">Travel & Leisure</span>
                </div>
              </div>
            </div>
            <div className="certs-row">
              <div className="cert-badge">
                <div className="cert-dot" />
                <span className="cert-name">OSS</span>
                <span className="cert-desc">Operatore Socio-Sanitario</span>
              </div>
              <div className="cert-badge">
                <div className="cert-dot" />
                <span className="cert-name">BLSD</span>
                <span className="cert-desc">Rianimazione cardiopolmonare</span>
              </div>
              <div className="cert-badge">
                <div className="cert-dot" />
                <span className="cert-name">HACCP</span>
                <span className="cert-desc">Sicurezza alimentare</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-eyebrow">Competenze linguistiche</div>
            <h2 className="section-title">Cinque lingue. Nessuna barriera comunicativa.</h2>
            <div className="langs-grid">
              <div className="lang-card">
                <div className="lang-name">Arabo</div>
                <div className="lang-level">Madrelingua</div>
                <div className="lang-skills">
                  <div className="lang-skill">Scrittura</div>
                  <div className="lang-skill">Lettura</div>
                  <div className="lang-skill">Parlato</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">Italiano</div>
                <div className="lang-level">Fluente</div>
                <div className="lang-skills">
                  <div className="lang-skill">Scrittura</div>
                  <div className="lang-skill">Lettura</div>
                  <div className="lang-skill">Parlato</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">Francese</div>
                <div className="lang-level">Fluente</div>
                <div className="lang-skills">
                  <div className="lang-skill">Scrittura</div>
                  <div className="lang-skill">Lettura</div>
                  <div className="lang-skill">Parlato</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">Inglese</div>
                <div className="lang-level">Fluente</div>
                <div className="lang-skills">
                  <div className="lang-skill">Scrittura</div>
                  <div className="lang-skill">Lettura</div>
                  <div className="lang-skill">Parlato</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">Tedesco</div>
                <div className="lang-level">Professionale</div>
                <div className="lang-skills">
                  <div className="lang-skill">Scrittura</div>
                  <div className="lang-skill">Lettura</div>
                  <div className="lang-skill">Parlato</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-eyebrow">Metodo di lavoro</div>
            <h2 className="section-title">Come viene costruita ogni collaborazione.</h2>
            <div className="method-list">
              <div className="method-item">
                <div className="method-num">1</div>
                <div className="method-body">
                  <div className="method-title">Comunicazione professionale</div>
                  <div className="method-desc">
                    Comunicazione professionale in italiano, inglese, francese, arabo e tedesco.
                  </div>
                  <div className="method-benefit">
                    Approccio umano, struttura provata sul campo, nessun compromesso.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">2</div>
                <div className="method-body">
                  <div className="method-title">Diario di assistenza</div>
                  <div className="method-desc">
                    Ogni intervento viene documentato. Attività svolte, condizioni osservate e
                    cambiamenti rilevati. Condivisi con la famiglia secondo la frequenza concordata.
                  </div>
                  <div className="method-benefit">
                    Sai sempre cosa è accaduto durante la sessione, anche quando non eri presente.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">3</div>
                <div className="method-body">
                  <div className="method-title">Comunicazione proattiva con la famiglia</div>
                  <div className="method-desc">
                    Aggiornamenti regolari nella lingua preferita (EN / IT / FR / AR / DE). Nessuna
                    sorpresa. Ogni cambiamento viene comunicato immediatamente.
                  </div>
                  <div className="method-benefit">
                    Le famiglie all’estero ricevono lo stesso livello di informazioni di chi è presente.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">4</div>
                <div className="method-body">
                  <div className="method-title">Puntualità e affidabilità operativa</div>
                  <div className="method-desc">
                    Ogni sessione di assistenza inizia e termina come concordato. Le modifiche vengono
                    comunicate in anticipo quando possibile.
                  </div>
                  <div className="method-benefit">
                    La tua pianificazione non viene mai disturbata da incertezze o sorprese all’ultimo minuto.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">5</div>
                <div className="method-body">
                  <div className="method-title">Chiarezza dei confini professionali</div>
                  <div className="method-desc">
                    Operatività esclusivamente entro il perimetro OSS / supporto socio-sanitario. Le situazioni cliniche vengono
                    segnalate e indirizzate al professionista appropriato.
                  </div>
                  <div className="method-benefit">
                    Sai sempre esattamente cosa faccio e cosa non faccio — nulla resta ambiguo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-eyebrow">Filosofia e valori</div>
            <h2 className="section-title">Ciò che guida questo lavoro.</h2>
            <div className="philosophy-block">
              <div className="philosophy-item">
                <div className="philosophy-quote">Assistenza strutturata. Approccio umano.</div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-quote">
                  “Il supporto professionale significa più che svolgere attività: significa comprendere
                  i bisogni, spesso prima che vengano espressi.”
                  <br />
                  “Il mio approccio unisce metodo, coerenza e rispetto autentico per il ritmo, le abitudini e
                  il benessere di ogni persona.”
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-quote">
                  “La mia misura del successo non è la durata di un intervento. È il momento in cui la persona
                  che assisto smette di vedermi come un professionista di passaggio e inizia a considerarmi parte
                  della sua vita quotidiana. Questo è il vero progresso in ogni percorso di cura.”
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-eyebrow">Area di intervento</div>
            <h2 className="section-title">Dove opero.</h2>
            <div className="area-grid">
              <div className="area-card">
                <div className="area-tag">Base operativa</div>
                <div className="area-title">Dervio – Lecco</div>
                <div className="area-desc">Punto di partenza per ogni intervento.</div>
              </div>
              <div className="area-card">
                <div className="area-tag">Area principale</div>
                <div className="area-title">Lecco – Lago di Como / Valtellina</div>
                <div className="area-desc">Area principale di intervento.</div>
              </div>
              <div className="area-card">
                <div className="area-tag">Mercato in crescita</div>
                <div className="area-title">Milano</div>
                <div className="area-desc">
                  Clientela expat e famiglie internazionali. Accettata previa valutazione.
                </div>
              </div>
              <div className="area-card">
                <div className="area-tag">Minimo per sessione di assistenza</div>
                <div className="area-title">5 ore</div>
                <div className="area-desc">
                  Durata minima per ogni intervento. Nessuna eccezione. Definita contrattualmente.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner narrow">
            <div className="section-eyebrow centered">Come funziona il primo colloquio</div>
            <h2 className="section-title centered">
              Quattro passi tra la tua richiesta
              <br />
              e il nostro primo confronto.
            </h2>
            <div className="discovery-steps">
              <div className="discovery-step">
                <div className="discovery-num">1</div>
                <div className="discovery-text">Compila la richiesta online.</div>
              </div>
              <div className="discovery-step">
                <div className="discovery-num">2</div>
                <div className="discovery-text">Analisi individuale entro 48 ore lavorative.</div>
              </div>
              <div className="discovery-step">
                <div className="discovery-num">3</div>
                <div className="discovery-text">
                  Se compatibile: ti verrà condiviso un link per il calendario.
                </div>
              </div>
              <div className="discovery-step">
                <div className="discovery-num">4</div>
                <div className="discovery-text">Scegli data e ora · 20–30 min · telefono o video.</div>
              </div>
            </div>
            <div className="discovery-note centered-note">
              Il calendario resta privato. È accessibile solo alle richieste approvate.
            </div>

            <div className="cta-you">
              <h3 className="cta-you-title">
                Invia la tua richiesta.
                <br />
                La valuterò personalmente.
              </h3>
              <p className="cta-you-sub">
                Ogni caso è diverso. Esamino ogni richiesta in modo individuale.
                <br />
                Se c’è compatibilità, ti contatterò nella tua lingua.
              </p>
              <a href="/request" className="btn-terra">
                Invia la tua richiesta →
              </a>
              <p className="cta-note">
                Nessun obbligo. Nessuna risposta automatica. Solo una valutazione professionale.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}