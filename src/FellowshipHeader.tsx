import { useEffect, useId, useState } from 'react'
import { fellowshipLinks } from './content'

const sectionLinks = [
  { href: '#challenges', label: 'Challenges' },
  { href: '#who', label: 'Who can apply' },
  { href: '#support', label: 'Support' },
  { href: '#timeline', label: 'Timeline' },
]

export function FellowshipHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fs-header">
      <nav className="fs-nav" aria-label="Fellowship navigation">
        <a href="#top" className="fs-brand" aria-label="BetterGovPH Fellowship, back to top">
          <img
            src="https://assets.bettergov.ph/logos/webp/horizontal-white.webp"
            alt=""
            className="fs-brand__logo"
            width={1280}
            height={320}
          />
          <span className="fs-brand__product">Fellowship</span>
        </a>

        <div className="fs-nav__links">
          {sectionLinks.map(item => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="https://about.bettergov.ph/movement" target="_blank" rel="noopener noreferrer">
            BetterGov.ph <span aria-hidden="true">↗</span>
          </a>
        </div>

        <a href="#contribute" className="fs-button fs-button--ghost fs-nav__cta fs-nav__contribute">
          Contribute
        </a>
        <a
          href={fellowshipLinks.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="fs-button fs-button--sun fs-nav__cta fs-nav__apply"
        >
          Apply <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="fs-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div id={menuId} className="fs-menu" hidden={!menuOpen}>
        {sectionLinks.map(item => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label} <span aria-hidden="true">→</span>
          </a>
        ))}
        <a href="#contribute" onClick={closeMenu}>
          Contribute to the fund <span aria-hidden="true">→</span>
        </a>
        <a
          href={fellowshipLinks.apply}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Apply now <span aria-hidden="true">↗</span>
        </a>
        <a href="https://about.bettergov.ph/movement" target="_blank" rel="noopener noreferrer">
          BetterGov.ph <span aria-hidden="true">↗</span>
        </a>
      </div>

      <span className="fs-progress" aria-hidden="true" />
    </header>
  )
}
