import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/content'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="top" className="section flex min-h-[92vh] flex-col justify-center pt-24">
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <motion.p variants={item} className="section-label mb-5">
            Greater Noida, India — final-year CS (Data Science)
          </motion.p>

          <motion.h1 variants={item} className="heading-lg max-w-2xl text-5xl sm:text-6xl">
            {profile.headline}
          </motion.h1>

          <motion.p variants={item} className="body-text mt-6 max-w-xl">
            {profile.subhead}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
            >
              View projects
            </a>
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border border-base-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Download size={15} />
              Download resume
            </a>
            <div className="ml-1 flex items-center gap-3 text-ink-muted">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink">
                <Github size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink">
                <Linkedin size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="justify-self-center md:justify-self-end">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-2xl border border-base-line" />
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-signal/10 blur-xl" />
            {photoFailed ? (
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-base-panel font-display text-3xl text-signal">
                SS
              </div>
            ) : (
              <img
                src="/profile-photo.jpg"
                alt="Portrait of Sanidhya Srivastava"
                className="h-full w-full rounded-2xl object-cover grayscale"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </motion.div>
      </motion.div>

      <PipelineFlow />

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="mx-auto mt-6 flex items-center gap-2 font-mono text-xs text-ink-faint transition-colors hover:text-signal"
      >
        scroll <ArrowDown size={13} className="animate-bounce" />
      </a>
    </section>
  )
}

function PipelineFlow() {
  const nodes = [
    { x: 30, label: 'raw data' },
    { x: 170, label: 'parse' },
    { x: 310, label: 'infer' },
    { x: 450, label: 'signal' },
  ]

  return (
    <div className="mt-16 hidden overflow-x-auto sm:block" aria-hidden="true">
      <svg viewBox="0 0 480 60" className="w-full max-w-lg text-base-line">
        <line x1="30" y1="30" x2="450" y2="30" stroke="currentColor" strokeWidth="1" />
        <line
          x1="30"
          y1="30"
          x2="450"
          y2="30"
          stroke="#4FC9E0"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          className="animate-flow"
        />
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy="30" r="5" fill="#0A0D11" stroke="#4FC9E0" strokeWidth="1.5" />
            <text x={n.x} y="52" textAnchor="middle" className="fill-ink-faint font-mono" fontSize="9">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
