const projects = [
  {
    id: 1,
    category: "Design & Development",
    title: "Healthcare Platform Redesign",
    description:
      "A calmer booking experience with a clearer content hierarchy, better accessibility, and stronger trust signals.",
    tags: ["Healthcare", "Web App", "UI/UX"],
  },
  {
    id: 2,
    category: "Full Stack Development",
    title: "E-Commerce Solution",
    description:
      "A polished commerce experience designed for speed, mobile conversion, and a more confident checkout flow.",
    tags: ["E-Commerce", "Next.js", "Payments"],
  },
  {
    id: 3,
    category: "Brand Design",
    title: "Brand Identity System",
    description:
      "A cohesive visual system that keeps typography, spacing, and interface language aligned across the product.",
    tags: ["Branding", "Design System", "Identity"],
  },
  {
    id: 4,
    category: "Mobile Development",
    title: "Mobile App Experience",
    description:
      "A responsive mobile-first concept with clean navigation, approachable cards, and readable interactions.",
    tags: ["iOS", "Android", "Mobile UI"],
  },
];

export default function Work() {
  return (
    <section id="work" className="border-b border-[var(--sand-border)] bg-[var(--sand)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--ink-60)]">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl text-[var(--green)] md:text-5xl">
            A selection of projects that balance structure and personality.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink)]/80">
            Each project focuses on clarity, useful hierarchy, and a visual language that feels calm and premium.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[24px] border border-[var(--sand-border)] bg-[var(--pale-green)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="mb-6 overflow-hidden rounded-[20px] border border-[var(--sand-border)] bg-[linear-gradient(135deg,var(--sand),rgba(24,95,165,0.10))] p-8">
                <div className="flex h-52 items-end justify-between">
                  <div className="max-w-[55%]">
                    <div className="mb-3 inline-flex rounded-full bg-[var(--green)] px-3 py-1 text-xs font-semibold text-white">
                      {project.category}
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-24 rounded-full bg-[rgba(28,28,26,0.10)]" />
                      <div className="h-3 w-36 rounded-full bg-[rgba(28,28,26,0.10)]" />
                      <div className="h-3 w-28 rounded-full bg-[rgba(28,28,26,0.10)]" />
                    </div>
                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--green)] text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                </div>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
                {project.category}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[var(--ink)]">{project.title}</h3>
              <p className="mt-3 text-[var(--ink)]/80">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--sand)] px-3 py-1 text-sm font-medium text-[var(--green)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--green)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--green)] hover:bg-[var(--pale-green)] hover:text-[var(--green)]">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}