import Link from "next/link";

const steps = [
  { n: "1", title: "Richiesta", subtitle: "Modulo online", active: "green" },
  { n: "2", title: "Valutazione", subtitle: "Analisi", active: "blue" },
  { n: "3", title: "Colloquio", subtitle: "Chiamata conoscitiva" },
  { n: "4", title: "Contratto", subtitle: "Firma" },
  { n: "5", title: "Avvio", subtitle: "Prima settimana" },
  { n: "6", title: "Erogazione", subtitle: "Assistenza" },
  { n: "7", title: "Continuità", subtitle: "Report" },
];

export default function HowWorkCta() {
  return (
    <>
      <section className="bg-white px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1060px]">
          <div className="mb-5">
            <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
              Come lavoro
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-[#e6dfd3] md:block" />

            <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-7">
              {steps.map((step) => {
                const isGreen = step.active === "green";
                const isBlue = step.active === "blue";

                return (
                  <div
                    key={step.n}
                    className="relative z-10 flex flex-col items-center text-center"
                  >
                    <div
                      className={[
                        "flex h-11 w-11 items-center justify-center rounded-full border text-[16px] font-medium",
                        isGreen
                          ? "border-[#2fa36c] bg-[#dff3e9] text-[#0d6f56]"
                          : isBlue
                            ? "border-[#2f78d6] bg-[#e7f0ff] text-[#1f57a6]"
                            : "border-[#e0d7cb] bg-white text-[#3f3a35]",
                      ].join(" ")}
                    >
                      {step.n}
                    </div>

                    <p className="mt-4 text-[16px] text-[#2f2b27]">{step.title}</p>
                    <p className="mt-1 text-[14px] text-[#8a7d70]">{step.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1060px]">
          <div className="rounded-[18px] bg-[#f4efe7] px-6 py-14 md:px-10 md:py-16">
            <div className="text-center">
              <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
                Pronto a valutare la tua richiesta
              </p>

              <h2 className="mt-5 font-serif text-[30px] leading-[1.15] text-[#111] md:text-[42px]">
                Raccontami le tue esigenze, valuto con attenzione come aiutarti al meglio.
              </h2>

              <p className="mx-auto mt-5 max-w-[900px] text-[17px] leading-8 text-[#3f3a35]">
                Compila il modulo con cura. Valuto ogni caso in modo individuale:
                distanza, profilo, bisogni e compatibilità.
              </p>

              <div className="mt-8">
                <Link
                  href="/request"
                  className="inline-flex items-center justify-center rounded-[12px] border border-[#2a2a2a] bg-transparent px-8 py-4 text-[18px] font-medium text-[#111] transition-colors hover:bg-white"
                >
                  Invia la richiesta →
                </Link>
              </div>

              <p className="mt-6 text-[15px] text-[#8d8176]">
                Nessun obbligo. Nessuna risposta automatica. Solo una valutazione professionale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}