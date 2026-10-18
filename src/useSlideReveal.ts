import { useEffect, type RefObject } from 'react'

const COUNT_MS = 1600
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

function setCount(el: HTMLElement, value: number) {
  el.textContent = `${el.dataset.prefix ?? ''}${Math.round(value).toLocaleString('en-US')}`
}

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count)
  const started = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - started) / COUNT_MS, 1)
    setCount(el, target * easeOutExpo(t))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/*
 * Reveals each .fs-slide as it scrolls into view: words rise, blocks fade up,
 * and figures count. The prerendered page shows everything, so motion is only
 * switched on here, and only for slides still below the fold, so nothing on
 * screen hides and reappears. Reduced motion leaves the page as it is.
 */
export function useSlideReveal(rootRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const slides = Array.from(root.querySelectorAll<HTMLElement>('.fs-slide'))
    const pending = slides.filter(slide => {
      const { top, bottom } = slide.getBoundingClientRect()
      const onScreen = top < window.innerHeight && bottom > 0
      slide.classList.toggle('is-in', onScreen)
      return !onScreen
    })

    pending.forEach(slide => {
      slide.querySelectorAll<HTMLElement>('[data-count]').forEach(el => setCount(el, 0))
    })
    root.classList.add('fs--motion')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const slide = entry.target as HTMLElement
          slide.classList.add('is-in')
          slide.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp)
          observer.unobserve(slide)
        })
      },
      { rootMargin: '0px 0px -18% 0px' }
    )
    pending.forEach(slide => observer.observe(slide))

    return () => {
      observer.disconnect()
      slides.forEach(slide => {
        slide.classList.add('is-in')
        slide.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
          setCount(el, Number(el.dataset.count))
        })
      })
    }
  }, [rootRef])
}
