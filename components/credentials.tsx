const credentialsCards = [
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
];

const tags = [
  "OSS — Operatore Socio-Sanitario",
  "BLSD — Rianimazione cardiopolmonare",
  "HACCP — Sicurezza alimentare",
];

export default function Credentials() {
  return (
    <section className="bg-white px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-5">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            Competenze e qualifiche
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {credentialsCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[14px] bg-[#f4efe7] px-6 py-7 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <h2 className="font-serif text-[31px] leading-tight text-[#111]">
                {item.title}
              </h2>
              <p className="mt-3 text-[17px] text-[#2f2b27]">{item.subtitle}</p>
              <p className="mt-1 text-[15px] leading-7 text-[#7f7367]">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-[#d9d3c8] bg-white px-4 py-3 text-[15px] text-[#2f2b27]"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-[#18a06b]" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}