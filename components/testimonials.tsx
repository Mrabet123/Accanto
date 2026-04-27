const testimonials = [
  {
    quote: "Testimony to be included — local family, elderly case.",
    name: "Name, role",
    slot: "Slot 1 · to be added",
  },
  {
    quote: "Testimonial to be included — international / expat client.",
    name: "Name, role",
    slot: "Slot 2 · to be added",
  },
  {
    quote: "Testimonial to be included — long-term collaboration.",
    name: "Name, role",
    slot: "Slot 3 · to be added",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-5">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            Testimonials
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.slot}
              className="rounded-[18px] bg-[#f4efe7] px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <p className="text-[17px] leading-8 italic text-[#8a7d70]">
                &quot;{item.quote}&quot;
              </p>

              <p className="mt-6 text-[17px] text-[#2f2b27]">— {item.name}</p>

              <span className="mt-4 inline-flex rounded-full border border-[#e3d8c9] bg-[#f8f4ed] px-4 py-2 text-[14px] text-[#8c7d6d]">
                {item.slot}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}