import { useEffect, type RefObject } from 'react'

/*
 * The hero is pinned under the header while the next slide scrolls over it.
 * On a screen too short for the whole hero, it pins lower (a negative top), so
 * it first scrolls far enough to show its last line before the next slide
 * covers it.
 */
export function useStickyHero(heroRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const nav = document.querySelector<HTMLElement>('.fs-nav')

    const update = () => {
      const header = nav?.offsetHeight ?? 0
      const overflow = window.innerHeight - header - hero.offsetHeight
      hero.style.setProperty('--hero-top', `${header + Math.min(0, overflow)}px`)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(hero)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [heroRef])
}
