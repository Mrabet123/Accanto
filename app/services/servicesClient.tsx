"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TabType = "local" | "intl";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("local");

  return (
    <main className="services-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Servizi</div>
          <h1 className="page-title">
            Cosa offro.
            <br />
            Come lavoro. Cosa non è incluso.
          </h1>
          <p className="page-subtitle">
            Ogni sessione di assistenza è strutturata, documentata e svolta
            nel perimetro professionale certificato OSS.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="tab-wrapper">
            <div className="tab-toggle">
              <button
                type="button"
                className={`tab-btn ${activeTab === "local" ? "active" : ""}`}
                onClick={() => setActiveTab("local")}
                aria-pressed={activeTab === "local"}
              >
                Famiglie locali — Lago di Como · Lecco · Valtellina
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === "intl" ? "active" : ""}`}
                onClick={() => setActiveTab("intl")}
                aria-pressed={activeTab === "intl"}
              >
                Clienti internazionali — expat e soggiorni temporanei
              </button>
            </div>
          </div>

          {activeTab === "local" ? (
            <div className="tab-content active">
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Anziani</div>
                  <h3 className="service-card-title">
                    Servizi di assistenza agli anziani
                  </h3>
                  <ul className="service-list">
                    <li>
                      Assistenza all’igiene personale per anziani (bagno,
                      cura della persona, igiene orale)
                    </li>
                    <li>
                      Supporto nell’abbigliamento e nella mobilità per anziani
                      (trasferimenti, accompagnamento nella deambulazione,
                      prevenzione cadute)
                    </li>
                    <li>
                      Promemoria per la terapia farmacologica negli anziani
                      (senza somministrazione)
                    </li>
                    <li>
                      Preparazione dei pasti per anziani (in linea con la dieta,
                      alimentazione assistita se necessaria)
                    </li>
                    <li>
                      Compagnia per anziani (riduzione della solitudine,
                      stimolazione cognitiva)
                    </li>
                    <li>
                      Monitoraggio di base dei parametri vitali (temperatura,
                      osservazione dello stato generale)
                    </li>
                    <li>
                      Supporto post-ricovero per anziani (assistenza alla
                      ripresa a domicilio)
                    </li>
                    <li>
                      Supporto nell’assistenza ad Alzheimer e demenza
                      (routine, supervisione)
                    </li>
                    <li>
                      Piccole attività domestiche per la cura dell’ambiente
                      (pulizia leggera, mantenimento dell’igiene)
                    </li>
                    <li>
                      Assistenza nelle attività quotidiane della vita
                      giornaliera (ADL)
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">
                    Persone con disabilità
                  </div>
                  <h3 className="service-card-title">
                    Servizi di supporto alla disabilità
                  </h3>
                  <ul className="service-list">
                    <li>
                      Assistenza alla cura personale per persone con disabilità
                    </li>
                    <li>
                      Supporto alla mobilità per persone con disabilità
                      (sedia a rotelle, trasferimenti)
                    </li>
                    <li>Supporto alle attività quotidiane (ADL e IADL)</li>
                    <li>Supporto alla vita autonoma a domicilio</li>
                    <li>
                      Assistenza all’igiene personale e alla gestione della
                      continenza
                    </li>
                    <li>Preparazione dei pasti adattata alle esigenze specifiche</li>
                    <li>Supporto emotivo e compagnia</li>
                    <li>
                      Coordinamento con la famiglia e con i professionisti
                      sanitari
                    </li>
                    <li>
                      Mantenimento di un ambiente domestico sicuro
                      (prevenzione dei rischi)
                    </li>
                    <li>
                      Supporto in caso di disabilità fisica o ridotta
                      autonomia
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Minori</div>
                  <h3 className="service-card-title">
                    Assistenza per minori con bisogni speciali
                    (supporto non clinico)
                  </h3>
                  <ul className="service-list">
                    <li>
                      Supporto alla routine quotidiana per bambini con bisogni
                      speciali
                    </li>
                    <li>
                      Assistenza all’igiene personale (adeguata all’età)
                    </li>
                    <li>Supervisione e monitoraggio della sicurezza</li>
                    <li>
                      Supporto alle attività di sviluppo (non terapeutiche)
                    </li>
                    <li>Assistenza durante i pasti e nella routine quotidiana</li>
                    <li>Collaborazione con i genitori e con i terapisti</li>
                    <li>Rassicurazione emotiva e compagnia strutturata</li>
                    <li>
                      Supporto per bambini con autismo o disabilità cognitive
                      (non clinico)
                    </li>
                    <li>Preparazione alla scuola e supporto alla routine</li>
                    <li>Gestione di un ambiente domestico sicuro</li>
                  </ul>
                </div>
              </div>

              {/* Images inserted between "What is not included" and pricing section */}
              <div className="image-gallery">
                <div className="gallery-item">
                  <Image
                    src="/Images/2.jpg"
                    alt="Operatore socio-sanitario che supporta una persona nelle attività quotidiane a domicilio"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/5.jpg"
                    alt="Persona anziana che riceve compagnia e supporto durante un momento di assistenza"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/6.jpg"
                    alt="Ambiente domestico accogliente con assistenza socio-sanitaria professionale"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
              </div>

              <div className="oss-boundary">
                <div className="oss-boundary-title">
                  Cosa non è incluso — confini professionali
                  <span className="oss-badge">Perimetro OSS</span>
                </div>
                <p className="oss-intro">
                  Lavoro esclusivamente entro il perimetro OSS certificato. Le
                  attività seguenti sono fuori dal mio ambito e verranno sempre
                  rifiutate:
                </p>
                <ul className="oss-list">
                  <li>Somministrazione o gestione dei farmaci</li>
                  <li>Procedure mediche di qualsiasi tipo</li>
                  <li>Diagnosi cliniche o valutazioni sanitarie</li>
                  <li>Medicazioni o trattamenti post-operatori</li>
                  <li>Colloqui psicologici o terapeutici</li>
                  <li>
                    Assistenza 24 ore con presenza continua — servizio fuori
                    dal mio perimetro professionale e non offerto
                  </li>
                </ul>
                <p className="oss-note">
                  Qualsiasi situazione che richieda un intervento clinico verrà
                  identificata, segnalata alla famiglia e indirizzata
                  immediatamente al professionista sanitario appropriato.
                </p>
              </div>
            </div>
          ) : (
            <div className="tab-content active">
              <div className="intl-additions">
                <div className="intl-card">
                  <div className="intl-card-num">01</div>
                  <div className="intl-card-title">
                    Comunicazione nella tua lingua
                  </div>
                  <div className="intl-card-desc">
                    Tutti gli aggiornamenti alla famiglia vengono forniti nella
                    lingua preferita — italiano, inglese, francese, arabo o
                    tedesco. I report scritti possono essere condivisi da
                    remoto oppure in presenza, secondo preferenza.
                  </div>
                </div>

                <div className="intl-card">
                  <div className="intl-card-num">02</div>
                  <div className="intl-card-title">
                    Coordinamento remoto con la famiglia
                  </div>
                  <div className="intl-card-desc">
                    Pensato per famiglie residenti all’estero. Ricevi
                    aggiornamenti strutturati a intervalli concordati — non è
                    necessario essere presenti in Italia per restare sempre
                    informato.
                  </div>
                </div>

                <div className="intl-card">
                  <div className="intl-card-num">03</div>
                  <div className="intl-card-title">Sensibilità culturale</div>
                  <div className="intl-card-desc">
                    18 anni in contesti internazionali. Comprendo approcci
                    diversi alla cura, alla privacy e alla comunicazione
                    familiare. Nessuna supposizione. Nessun attrito culturale.
                  </div>
                </div>

                <div className="intl-card">
                  <div className="intl-card-num">04</div>
                  <div className="intl-card-title">
                    Inserimento per famiglie non residenti
                  </div>
                  <div className="intl-card-desc">
                    Se non sei presente in Italia all’avvio della collaborazione,
                    il percorso di inserimento viene adattato — colloquio
                    conoscitivo da remoto, documentazione digitale, prima
                    sessione coordinata con un contatto locale se necessario.
                  </div>
                </div>
              </div>

              <div className="services-grid">
                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Anziani</div>
                  <h3 className="service-card-title">
                    Servizi di assistenza agli anziani
                  </h3>
                  <ul className="service-list">
                    <li>
                      Assistenza all’igiene personale per anziani (bagno,
                      cura della persona, igiene orale)
                    </li>
                    <li>
                      Supporto nell’abbigliamento e nella mobilità per anziani
                      (trasferimenti, accompagnamento nella deambulazione,
                      prevenzione cadute)
                    </li>
                    <li>
                      Promemoria per la terapia farmacologica negli anziani
                      (senza somministrazione)
                    </li>
                    <li>
                      Preparazione dei pasti per anziani (in linea con la dieta,
                      alimentazione assistita se necessaria)
                    </li>
                    <li>
                      Compagnia per anziani (riduzione della solitudine,
                      stimolazione cognitiva)
                    </li>
                    <li>
                      Monitoraggio di base dei parametri vitali (temperatura,
                      osservazione dello stato generale)
                    </li>
                    <li>
                      Supporto post-ricovero per anziani (assistenza alla
                      ripresa a domicilio)
                    </li>
                    <li>
                      Supporto nell’assistenza ad Alzheimer e demenza
                      (routine, supervisione)
                    </li>
                    <li>
                      Piccole attività domestiche per la cura dell’ambiente
                      (pulizia leggera, mantenimento dell’igiene)
                    </li>
                    <li>
                      Assistenza nelle attività quotidiane della vita
                      giornaliera (ADL)
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">
                    Persone con disabilità
                  </div>
                  <h3 className="service-card-title">
                    Servizi di supporto alla disabilità
                  </h3>
                  <ul className="service-list">
                    <li>
                      Assistenza alla cura personale per persone con disabilità
                    </li>
                    <li>
                      Supporto alla mobilità per persone con disabilità
                      (sedia a rotelle, trasferimenti)
                    </li>
                    <li>Supporto alle attività quotidiane (ADL e IADL)</li>
                    <li>Supporto alla vita autonoma a domicilio</li>
                    <li>
                      Assistenza all’igiene personale e alla gestione della
                      continenza
                    </li>
                    <li>Preparazione dei pasti adattata alle esigenze specifiche</li>
                    <li>Supporto emotivo e compagnia</li>
                    <li>
                      Coordinamento con la famiglia e con i professionisti
                      sanitari
                    </li>
                    <li>
                      Mantenimento di un ambiente domestico sicuro
                      (prevenzione dei rischi)
                    </li>
                    <li>
                      Supporto in caso di disabilità fisica o ridotta
                      autonomia
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Minori</div>
                  <h3 className="service-card-title">
                    Assistenza per minori con bisogni speciali
                    (supporto non clinico)
                  </h3>
                  <ul className="service-list">
                    <li>
                      Supporto alla routine quotidiana per bambini con bisogni
                      speciali
                    </li>
                    <li>
                      Assistenza all’igiene personale (adeguata all’età)
                    </li>
                    <li>Supervisione e monitoraggio della sicurezza</li>
                    <li>
                      Supporto alle attività di sviluppo (non terapeutiche)
                    </li>
                    <li>Assistenza durante i pasti e nella routine quotidiana</li>
                    <li>Collaborazione con i genitori e con i terapisti</li>
                    <li>Rassicurazione emotiva e compagnia strutturata</li>
                    <li>
                      Supporto per bambini con autismo o disabilità cognitive
                      (non clinico)
                    </li>
                    <li>Preparazione alla scuola e supporto alla routine</li>
                    <li>Gestione di un ambiente domestico sicuro</li>
                  </ul>
                </div>
              </div>

              <div className="oss-boundary">
                <div className="oss-boundary-title">
                  Cosa non è incluso — confini professionali
                  <span className="oss-badge">Perimetro OSS</span>
                </div>
                <p className="oss-intro">
                  Lavoro esclusivamente entro il perimetro OSS certificato. Le
                  attività seguenti sono fuori dal mio ambito e verranno sempre
                  rifiutate:
                </p>
                <ul className="oss-list">
                  <li>Somministrazione o gestione dei farmaci</li>
                  <li>Procedure mediche di qualsiasi tipo</li>
                  <li>Diagnosi cliniche o valutazioni sanitarie</li>
                  <li>Medicazioni o trattamenti post-operatori</li>
                  <li>Colloqui psicologici o terapeutici</li>
                  <li>
                    Assistenza 24 ore con presenza continua — servizio fuori
                    dal mio perimetro professionale e non offerto
                  </li>
                </ul>
                <p className="oss-note">
                  Qualsiasi situazione che richieda un intervento clinico verrà
                  identificata, segnalata alla famiglia e indirizzata
                  immediatamente al professionista sanitario appropriato.
                </p>
              </div>

              {/* Images inserted between "What is not included" and pricing section */}
              <div className="image-gallery">
                <div className="gallery-item">
                  <Image
                    src="/Images/2.jpg"
                    alt="Operatore socio-sanitario che supporta una persona nelle attività quotidiane a domicilio"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/5.jpg"
                    alt="Persona anziana che riceve compagnia e supporto durante un momento di assistenza"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/6.jpg"
                    alt="Ambiente domestico accogliente con assistenza socio-sanitaria professionale"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-eyebrow">Tariffe orarie</div>
          <h2 className="section-title">Struttura trasparente dei prezzi.</h2>

          <div className="pricing-grid">
            <div className="pricing-section">
              <div className="pricing-title">Tariffe delle sessioni di assistenza</div>
              <div className="pricing-sub">
                Definite prima della firma del contratto. Nessuna sorpresa.
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Sessione diurna di assistenza</div>
                  <div className="pricing-label-sub">07:00 – 22:00</div>
                </div>
                <div className="pricing-value">Da €28/ora</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Turno notturno — passivo</div>
                  <div className="pricing-label-sub">
                    22:00 – 07:00 · La persona dorme autonomamente
                  </div>
                </div>
                <div className="pricing-value">€35/ora</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Turno notturno — attivo</div>
                  <div className="pricing-label-sub">
                    22:00 – 07:00 · Sono richiesti interventi
                  </div>
                </div>
                <div className="pricing-value">€40/ora</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Supplemento complessità</div>
                  <div className="pricing-label-sub">
                    Profilo con elevata dipendenza o cura complessa
                  </div>
                </div>
                <div className="pricing-value-eval">Definito in fase di valutazione</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Supplemento distanza</div>
                  <div className="pricing-label-sub">
                    Fuori dalla zona principale (Dervio/Lecco)
                  </div>
                </div>
                <div className="pricing-value-eval">
                  Valutato in base al perimetro complessivo dell’incarico
                </div>
              </div>

              <p className="pricing-note">
                Minimo 5 ore consecutive per sessione di assistenza. Nessuna
                eccezione. Domeniche e festivi conteggiati come giorni
                ordinari. Tutti i supplementi vengono comunicati al cliente
                prima della firma del contratto.
              </p>
            </div>

            <div className="pricing-side">
              <div className="info-card">
                <div className="info-card-title">Livello di autonomia</div>
                <p>
                  Autonomo / Semi-autonomo / Non autonomo — incide sulla tariffa
                  base. Definito durante la fase di valutazione.
                </p>
              </div>

              <div className="info-card">
                <div className="info-card-title">Attività richieste</div>
                <p>
                  Complessità e intensità degli interventi richiesti —
                  valutate caso per caso durante il colloquio conoscitivo.
                </p>
              </div>

              <div className="info-card">
                <div className="info-card-title">Durata del supporto</div>
                <p>
                  Breve / Medio / Lungo termine — valutati caso per caso. Le
                  collaborazioni di lungo periodo ricevono un piano di
                  continuità strutturato.
                </p>
              </div>
            </div>
          </div>

          <div className="cta-strip">
            <div className="cta-strip-text">Pronto a contattarmi?</div>
            <Link
              href="/request"
              style={{
                all: "unset",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                color: "#1c1c1a",
                padding: "5px 15px",
                minHeight: "48px",
                borderRadius: "14px",
                fontSize: "15px",
                fontWeight: 450,
                lineHeight: 1,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
                border: "1px solid #ffffff",
                textDecoration: "none",
              }}
            >
              <span>Invia la richiesta →</span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
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
          --border-dark: #ccc8c0;
          --white: #ffffff;
          --font-display: "Cormorant Garamond", serif;
          --font-body: "DM Sans", sans-serif;
          --radius: 10px;
          --radius-lg: 16px;
          --shadow: 0 2px 12px rgba(28, 28, 26, 0.08);

          background: var(--white);
          margin: 0;
          font-family: var(--font-body);
          color: var(--ink);
          font-size: 15px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .services-page * {
          box-sizing: border-box;
        }

        .services-page a {
          color: inherit;
          text-decoration: none;
        }

        .page-hero {
          background: var(--sand);
          padding: 56px 5% 48px;
          border-bottom: 1px solid var(--border);
        }

        .page-hero-inner,
        .section-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .page-eyebrow,
        .section-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .page-eyebrow {
          color: var(--green);
        }

        .section-eyebrow {
          color: var(--terra);
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin: 0 0 12px;
        }

        .page-subtitle {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 560px;
          margin: 0;
        }

        .section {
          padding: 64px 5%;
        }

        .section-alt {
          background: var(--sand);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 300;
          line-height: 1.2;
          color: var(--ink);
          margin: 0 0 32px;
        }

        .tab-wrapper {
          margin-bottom: 40px;
        }

        .tab-toggle {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 12px 18px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
          border: 1px solid #1c1c1a;
          background: var(--white);
          transition: all 0.2s ease;
          font-family: var(--font-body);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .tab-btn:hover {
          background: #f7f7f7;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .tab-btn.active {
          background: var(--ink);
          color: var(--white);
          border-color: var(--ink);
          box-shadow: 0 4px 14px rgba(28, 28, 26, 0.18);
        }
        .tab-btn:focus-visible {
          outline: 2px solid var(--green);
          outline-offset: 2px;
        }
        .tab-content {
          display: block;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .service-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .service-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }

        .service-card-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius);
          background: var(--green-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          color: var(--green);
          margin-bottom: 16px;
        }

        .service-card-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 8px;
        }

        .service-card-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 300;
          color: var(--ink);
          margin: 0 0 16px;
        }

        .service-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin: 0;
          padding: 0;
        }

        .service-list li {
          font-size: 13px;
          color: var(--text-muted);
          padding-left: 16px;
          position: relative;
          line-height: 1.5;
        }

        .service-list li::before {
          content: "·";
          position: absolute;
          left: 0;
          color: var(--green);
          font-weight: 600;
        }

        .oss-boundary {
          background: var(--sand);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          margin-top: 8px;
        }

        .oss-boundary-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .oss-badge {
          background: var(--terra-light);
          color: var(--terra);
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 99px;
          border: 1px solid rgba(196, 118, 58, 0.25);
        }

        .oss-intro {
          font-size: 13px;
          color: var(--text-muted);
          margin: 0 0 12px;
        }

        .oss-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 24px;
          margin: 0;
          padding: 0;
        }

        .oss-list li {
          font-size: 13px;
          color: var(--text-muted);
          padding-left: 18px;
          position: relative;
          line-height: 1.5;
        }

        .oss-list li::before {
          content: "✕";
          position: absolute;
          left: 0;
          color: var(--terra);
          font-size: 10px;
          top: 3px;
        }

        .oss-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 12px;
          line-height: 1.6;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }

        /* Image gallery styles */
        .image-gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .gallery-item {
          flex: 1;
          min-width: 220px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.2s, box-shadow 0.2s;
          background: var(--white);
        }

        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.2);
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .intl-additions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 28px;
        }

        .intl-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 22px;
        }

        .intl-card-num {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--green);
          margin-bottom: 6px;
        }

        .intl-card-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .intl-card-desc {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .pricing-section {
          background: var(--ink);
          border-radius: var(--radius-lg);
          padding: 36px;
        }

        .pricing-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--white);
          margin-bottom: 6px;
        }

        .pricing-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 28px;
        }

        .pricing-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 18px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pricing-row:last-of-type {
          border-bottom: none;
        }

        .pricing-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .pricing-label-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 2px;
        }

        .pricing-value {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 300;
          color: var(--white);
          white-space: nowrap;
        }

        .pricing-value-eval {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          font-family: var(--font-body);
          white-space: nowrap;
        }

        .pricing-note {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          margin: 20px 0 0;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          line-height: 1.6;
        }

        .pricing-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
        }

        .info-card-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 12px;
        }

        .info-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .cta-strip {
          background: var(--green);
          border-radius: var(--radius-lg);
          padding: 36px;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .cta-strip-text {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 300;
          color: var(--white);
          line-height: 1.3;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #1c1c1a;
          padding: 14px 28px;
          min-height: 48px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          transition: transform 0.18s ease, box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .btn-white:hover {
          background: #f7f7f7;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
        }

        .btn-white:active {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .page-hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .services-grid,
          .intl-additions,
          .oss-list,
          .image-gallery {
            grid-template-columns: 1fr;
          }

          .image-gallery {
            flex-direction: column;
            align-items: center;
          }

          .gallery-item {
            max-width: 100%;
          }

          .tab-toggle {
            display: flex;
            width: 100%;
          }

          .tab-btn {
            flex: 1 1 100%;
          }

          .service-card,
          .pricing-section,
          .info-card,
          .intl-card,
          .oss-boundary,
          .cta-strip {
            padding: 20px;
          }

          .pricing-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .pricing-value,
          .pricing-value-eval {
            white-space: normal;
          }

          .cta-strip-text {
            font-size: 20px;
          }

          .btn-white {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 30px;
          }

          .section-title,
          .pricing-title {
            font-size: 24px;
          }

          .service-card-title {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  );
}