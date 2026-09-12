import { currentlyBuilding } from '../data/content'

export default function CurrentlyBuilding() {
  return (
    <section className="section">
      <p className="section-label mb-4">Currently</p>
      <h2 className="heading-lg mb-8 text-3xl sm:text-4xl">Still building.</h2>

      <div className="rounded-lg border border-base-line bg-base-panel p-6 font-mono text-sm sm:p-8">
        {currentlyBuilding.map((line, i) => (
          <p key={line} className="flex gap-3 py-1.5 leading-relaxed text-ink-muted">
            <span className="shrink-0 text-ink-faint">
              [{String(i + 1).padStart(2, '0')}]
            </span>
            {line}
          </p>
        ))}
        <p className="flex gap-3 py-1.5 text-ink-muted">
          <span className="shrink-0 text-ink-faint">[{String(currentlyBuilding.length + 1).padStart(2, '0')}]</span>
          <span className="inline-block h-4 w-2 animate-blink bg-signal align-middle" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}
