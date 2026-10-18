import { fellowshipLinks, organizers } from './content'

const fellowshipFooterLinks = [
  { href: fellowshipLinks.apply, label: 'Application form' },
  { href: fellowshipLinks.guidelines, label: 'Fellowship guidelines' },
  { href: fellowshipLinks.pitchDecks, label: 'Challenge pitch decks' },
  { href: fellowshipLinks.resources, label: 'Slides and documents' },
]

const betterGovLinks = [
  { href: 'https://about.bettergov.ph/movement', label: 'Our movement' },
  { href: 'https://about.bettergov.ph/projects', label: 'Projects' },
  { href: 'https://github.com/bettergovph', label: 'GitHub' },
  { href: 'https://discord.gg/bettergovph', label: 'Discord' },
  { href: 'https://facebook.com/bettergovph', label: 'Facebook' },
]

export function FellowshipFooter() {
  return (
    <footer className="fs-footer">
      <div className="fs-footer__primary">
        <div>
          <img
            src="https://assets.bettergov.ph/logos/webp/horizontal-white.webp"
            alt="BetterGov.ph"
            className="fs-footer__logo"
            width={1280}
            height={320}
            loading="lazy"
          />
          <p className="fs-footer__title">Fellowship · Pilot cohort 2026–2027</p>
          <p className="fs-footer__lede">{organizers}</p>
          <p className="fs-footer__fund">
            We're still raising the fellowship fund.{' '}
            <a href={fellowshipLinks.contribute}>Contribute to the fund</a>
          </p>
        </div>

        <div>
          <p className="fs-label">Fellowship</p>
          <ul>
            {fellowshipFooterLinks.map(item => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="fs-label">BetterGov.ph</p>
          <ul>
            {betterGovLinks.map(item => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fs-footer__meta">
        <span>Community-built · Open source</span>
        <span>Not an official government website</span>
        <a href="https://www.gov.ph/" target="_blank" rel="noopener noreferrer">
          Official government portal <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  )
}
