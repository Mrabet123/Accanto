import Link from "next/link";

const steps = [
  { n: "1", title: "Request", subtitle: "Online form", active: "green" },
  { n: "2", title: "Assessment", subtitle: "Evaluation", active: "blue" },
  { n: "3", title: "Interview", subtitle: "Discovery call" },
  { n: "4", title: "Contract", subtitle: "Signature" },
  { n: "5", title: "Onboarding", subtitle: "First week" },
  { n: "6", title: "Execution", subtitle: "Assistance" },
  { n: "7", title: "Continuity", subtitle: "Report" },
];

export default function HowWorkCta() {
  return (
    <>
      <section className="bg-white px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1060px]">
          <div className="mb-5">
            <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
              How I work
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-[#e6dfd3] md:block" />

            <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-7">
              {steps.map((step) => {
                const isGreen = step.active === "green";
                const isBlue = step.active === "blue";

                return (
                  <div key={step.n} className="relative z-10 flex flex-col items-center text-center">
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
                Ready to evaluate your request
              </p>

              <h2 className="mt-5 font-serif text-[30px] leading-[1.15] text-[#111] md:text-[42px]">
                Tell me your needs, I’ll carefully assess how I can 
best support you.
              </h2>

              <p className="mx-auto mt-5 max-w-[900px] text-[17px] leading-8 text-[#3f3a35]">
                Please fill out the application carefully. I evaluate each case individually—
                distance, profile, needs, and compatibility.
              </p>


              <div className="mt-8">
                <Link
                  href="/request"
                  className="inline-flex items-center justify-center rounded-[12px] border border-[#2a2a2a] bg-transparent px-8 py-4 text-[18px] font-medium text-[#111] transition-colors hover:bg-white"
                >
                  Submit your request →
                </Link>
              </div>

              <p className="mt-6 text-[15px] text-[#8d8176]">
                No obligation. No automatic responses. Just a professional assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}