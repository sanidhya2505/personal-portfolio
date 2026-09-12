import { useState } from 'react'
import { stackLayers } from '../data/content'

export default function Skills() {
  const [active, setActive] = useState(stackLayers[0].layer)
  const current = stackLayers.find((l) => l.layer === active) ?? stackLayers[0]

  return (
    <section id="stack" className="section">
      <p className="section-label mb-4">Stack</p>
      <h2 className="heading-lg mb-3 text-3xl sm:text-4xl">A system, in layers.</h2>
      <p className="body-text mb-12 max-w-prose">
        The same way a network request passes through layers to become a response, my toolkit
        runs from raw language up to the infrastructure that ships it.
      </p>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-1">
          {stackLayers.map((l, i) => (
            <button
              key={l.layer}
              onMouseEnter={() => setActive(l.layer)}
              onFocus={() => setActive(l.layer)}
              onClick={() => setActive(l.layer)}
              className={`group flex w-full items-center gap-4 rounded-md border px-4 py-3.5 text-left transition-colors ${
                active === l.layer
                  ? 'border-signal/50 bg-base-panel'
                  : 'border-transparent hover:border-base-line'
              }`}
            >
              <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
              <span className={`font-display text-lg ${active === l.layer ? 'text-signal' : 'text-ink'}`}>
                {l.layer}
              </span>
              <span className="ml-auto hidden text-xs text-ink-faint sm:block">{l.detail}</span>
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-base-line bg-base-panel p-6 sm:p-8">
          <p className="mb-1 font-mono text-xs text-signal">{current.layer}</p>
          <p className="mb-6 text-sm text-ink-muted">{current.detail}</p>
          <div className="flex flex-wrap gap-2">
            {current.items.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
