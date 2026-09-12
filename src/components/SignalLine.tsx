import { useScrollProgress } from '../hooks/useScrollProgress'

export default function SignalLine() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-full w-px bg-base-line md:block"
    >
      <div
        className="w-px bg-signal transition-[height] duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
      <div
        className="absolute h-2 w-2 -translate-x-[3.5px] rounded-full bg-signal shadow-[0_0_8px_2px_rgba(79,201,224,0.6)] transition-[top] duration-150 ease-out"
        style={{ top: `${progress * 100}%` }}
      />
    </div>
  )
}
