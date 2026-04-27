const services = [
  {
    title: "UI/UX Design",
    description:
      "Creating thoughtful interfaces with stronger hierarchy, softer presentation, and clearer user flows.",
    icon: "🎨",
  },
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible websites with modern Next.js architecture.",
    icon: "💻",
  },
  {
    title: "Brand Design",
    description:
      "Defining a cohesive visual system with reusable patterns for consistency across touchpoints.",
    icon: "✨",
  },
  {
    title: "Mobile App Design",
    description:
      "Designing mobile experiences that stay readable, elegant, and practical on smaller screens.",
    icon: "📱",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-[var(--sand-border)] bg-[var(--pale-green)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--ink-60)]">
            Services
          </p>
          <h2 className="font-serif text-4xl text-[var(--green)] md:text-5xl">
            A focused set of services for polished portfolio websites.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink)]/80">
            Everything is designed to feel editorial, structured, and easy to navigate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[22px] border border-[var(--sand-border)] bg-[var(--sand)] p-7 transition-shadow hover:shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--pale-green)] text-2xl">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-[var(--ink)]">{service.title}</h3>
              <p className="mt-3 text-[var(--ink)]/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}