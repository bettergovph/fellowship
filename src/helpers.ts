import type { CSSProperties } from 'react'

// Staggers a build: the element's transition or animation starts after this delay.
export const d = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

export const pad = (n: number) => String(n).padStart(2, '0')
