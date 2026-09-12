import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur border-b border-base-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm text-ink hover:text-signal">
          sanidhya<span className="text-signal">.</span>dev
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-1.5 rounded-full border border-base-line px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Download size={14} strokeWidth={2} />
              Resume
            </a>
          </li>
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-base-line bg-base px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-ink-muted hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeFile}
                download
                className="flex w-fit items-center gap-1.5 rounded-full border border-base-line px-3.5 py-1.5 text-sm text-ink hover:border-signal hover:text-signal"
              >
                <Download size={14} strokeWidth={2} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
