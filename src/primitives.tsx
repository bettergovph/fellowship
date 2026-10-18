import { Fragment, type ReactNode } from 'react'
import { d } from './helpers'

// Building blocks borrowed from the one-year report deck, sized for a scrolling page.

// Running heads repeat on every slide, so screen readers skip them.
export function Chrome({ left, right }: { left: ReactNode; right?: ReactNode }) {
  return (
    <div className="fs-chrome" aria-hidden="true">
      <span>{left}</span>
      {right && <span>{right}</span>}
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="fs-eyebrow fs-in">{children}</p>
}

export function Watermark({ n }: { n: string }) {
  return (
    <span className="fs-watermark" aria-hidden="true">
      {n}
    </span>
  )
}

// The eight rays of the sun on the flag, three beams each.
export function Rays() {
  const beams = [
    { angle: 0, length: 960, width: 64 },
    { angle: -8, length: 780, width: 40 },
    { angle: 8, length: 780, width: 40 },
  ]
  return (
    <div className="fs-rays" aria-hidden="true">
      <svg viewBox="-1000 -1000 2000 2000">
        {Array.from({ length: 8 }, (_, ray) => (
          <g key={ray} transform={`rotate(${ray * 45})`}>
            {beams.map(beam => (
              <polygon
                key={beam.angle}
                transform={`rotate(${beam.angle})`}
                points={`-6,-190 6,-190 ${beam.width / 2},-${beam.length} -${beam.width / 2},-${beam.length}`}
              />
            ))}
          </g>
        ))}
        <circle r="150" />
      </svg>
    </div>
  )
}

// Splits a phrase into words that rise one after another.
export function Rise({
  text,
  start = 0,
  step = 0.07,
}: {
  text: string
  start?: number
  step?: number
}) {
  return (
    <>
      {text.split(' ').map((word, n) => (
        <Fragment key={`${word}-${n}`}>
          <span className="rise">
            <span style={d(start + n * step)}>{word}</span>
          </span>{' '}
        </Fragment>
      ))}
    </>
  )
}

// A figure that counts up when its slide scrolls in. The final value is always
// in the markup, so it reads correctly before JavaScript runs and to screen readers.
export function Count({ value, prefix = '' }: { value: number; prefix?: string }) {
  const text = `${prefix}${value.toLocaleString('en-US')}`
  return (
    <>
      <span aria-hidden="true" data-count={value} data-prefix={prefix}>
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  )
}

export function ExternalLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}
