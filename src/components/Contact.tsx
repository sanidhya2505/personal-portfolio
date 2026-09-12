import { useState } from 'react'
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard unavailable — the visible email text still lets people copy manually.
    }
  }

  return (
    <section id="contact" className="section">
      <p className="section-label mb-4">Contact</p>
      <h2 className="heading-lg mb-5 max-w-xl text-3xl sm:text-4xl">
        Open to SDE roles and interesting problems.
      </h2>
      <p className="body-text mb-10 max-w-prose">
        If something here is relevant to a role you're hiring for, the fastest way to reach me is
        email.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={copyEmail}
          className="flex items-center gap-2.5 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} />
          {profile.email}
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-base-line px-4 py-2.5 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-base-line px-4 py-2.5 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
