import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Project } from '../data/content'

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(project.featured ?? false)

  return (
    <div
      className={`rounded-lg border transition-colors ${
        expanded ? 'border-signal/40 bg-base-panel' : 'border-base-line'
      }`}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <div>
          <div className="mb-1.5 flex items-center gap-3">
            <h3 className="font-display text-xl text-ink sm:text-2xl">{project.name}</h3>
            <span className="pill">{project.domain}</span>
          </div>
          <p className="text-sm text-ink-muted sm:text-base">{project.tagline}</p>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1.5 shrink-0 text-ink-faint transition-transform ${expanded ? 'rotate-180 text-signal' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-base-line px-6 py-5">
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">Problem — </span>
                {project.problem}
              </p>

              <p className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-faint">Approach</p>
              <ul className="mb-5 space-y-2">
                {project.solution.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-signal hover:text-signal-bright"
                >
                  View source <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
