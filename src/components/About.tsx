import { education } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label mb-4">About</p>

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-prose space-y-5">
          <p className="body-text">
            I'm a final-year Computer Science (Data Science) student who likes working close to the
            metal and close to the model — parsing raw network packets in C++ on one end, training
            and serving ML predictions on the other. What connects the two is the same instinct:
            take a stream of raw, messy input and turn it into something a system — or a person —
            can actually act on.
          </p>
          <p className="body-text">
            That's shown up across four different builds so far: a real-time equity intelligence
            platform, a packet-inspection engine, an AI-powered career SaaS, and a production
            client website with real users. Each one forced me to own the whole stack — schema
            design, backend logic, and getting it actually deployed — usually as the only
            developer on the project.
          </p>
          <p className="body-text">
            I'm currently looking for SDE roles at product-focused engineering teams, where I can
            keep building systems that sit between raw data and a real product.
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Education</p>
          <ol className="space-y-5 border-l border-base-line pl-5">
            {education.map((e) => (
              <li key={e.school} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-signal" />
                <p className="text-sm text-ink">{e.credential}</p>
                <p className="text-sm text-ink-muted">{e.school}</p>
                <p className="font-mono text-xs text-ink-faint">{e.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
