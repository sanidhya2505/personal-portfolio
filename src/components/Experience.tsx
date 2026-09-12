import { certifications, experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label mb-4">Experience</p>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl text-ink sm:text-2xl">{experience.role}</h3>
          <p className="mb-1 text-ink-muted">{experience.company}</p>
          <p className="mb-5 font-mono text-xs text-ink-faint">{experience.period}</p>
          <ul className="space-y-2.5">
            {experience.points.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
            Certifications & Awards
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="border-l-2 border-base-line pl-4 text-sm leading-relaxed text-ink-muted">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
