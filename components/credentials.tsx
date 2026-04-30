const credentialsCards = [
  {
    title: "8 years experience",
    subtitle: "Social-healthcare",
    details: "Hospital · RSA · RSD · Sheltered housing",
  },
  {
    title: "10 years",
    subtitle: "Hospitality & CX",
    details: "Cruise · Luxury · SaaS · Travel",
  },
  {
    title: "5",
    subtitle: "Languages spoken",
    details: "IT · EN · FR · AR · DE",
  },
  {
    title: "3",
    subtitle: "Healthcare certifications",
    details: "OSS · BLSD · HACCP",
  },
];

const tags = [
  "OSS — Social Health Worker",
  "BLSD — Cardiopulmonary resuscitation",
  "HACCP — Food Safety",
];

export default function Credentials() {
  return (
    <section className="bg-white px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-5">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            Credentials
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