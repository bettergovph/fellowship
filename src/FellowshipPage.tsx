import { useRef, type CSSProperties } from 'react'
import {
  aims,
  applicationDeadline,
  applicationTypes,
  applySteps,
  challengeBriefs,
  challengeTracks,
  cohortStats,
  contributeEmail,
  contributeReasons,
  deckSlideUrl,
  deliverables,
  eligibleRoles,
  fellowshipLinks,
  fundTerms,
  partnershipModel,
  pillars,
  selectionCriteria,
  support,
  timeline,
  upcomingChallenges,
} from './content'
import { d, pad } from './helpers'
import { Chrome, Count, ExternalLink, Eyebrow, Rays, Rise, Watermark } from './primitives'
import { useSlideReveal } from './useSlideReveal'

const RUNNING_HEAD = 'BetterGovPH Fellowship'

export function FellowshipPage() {
  const rootRef = useRef<HTMLElement>(null)
  useSlideReveal(rootRef)

  return (
    <main className="fs-main" ref={rootRef}>
      {/* ═══════════════════════════ TITLE ═══════════════════════════ */}

      <section className="fs-slide t-ink s-title" id="top">
        <Rays />
        <Chrome left="Call for builders" right="Pilot cohort · 2026–2027" />
        <Eyebrow>BetterGovPH Fellowship</Eyebrow>
        <h1 className="fs-title">
          <span>
            <Rise text="Build civic tech" start={0.1} />
          </span>
          <span>
            <Rise text="that powers" start={0.3} />
          </span>
          <em>
            <Rise text="open government." start={0.45} />
          </em>
        </h1>
        <p className="fs-lede fs-in" style={d(0.7)}>
          A three-month civic technology fellowship. Real public challenges from government and
          civil society. Working solutions for DBM COMPASS and the Philippines' open data ecosystem.
        </p>
        <div className="fs-actions fs-in" style={d(0.85)}>
          <ExternalLink href={fellowshipLinks.apply} className="fs-button">
            Apply now
          </ExternalLink>
          <ExternalLink href={fellowshipLinks.guidelines} className="fs-button fs-button--ghost">
            Read the guidelines
          </ExternalLink>
        </div>
        <p className="fs-deadline fs-in" style={d(1)}>
          <span className="fs-tag">Now open</span> Applications close Tuesday, {applicationDeadline}
        </p>
        <p className="fs-hero-fund fs-in" style={d(1.1)}>
          <a href="#contribute">
            Not applying? Help fund the fellows <span aria-hidden="true">↓</span>
          </a>
        </p>
      </section>

      {/* ═══════════════════════════ 01 · THE FELLOWSHIP ═══════════════════════════ */}

      <section className="fs-slide t-paper s-about" id="about">
        <Watermark n="01" />
        <Chrome left={RUNNING_HEAD} right="01 · The fellowship" />
        <h2 className="fs-display">
          <Rise text="A fellowship built around" />{' '}
          <em>
            <Rise text="real public challenges." start={0.25} />
          </em>
        </h2>
        <p className="fs-lede fs-in" style={d(0.4)}>
          It brings technical talent and public-interest problem solving together.
        </p>
        <ul className="fs-roster">
          {pillars.map((pillar, n) => (
            <li key={pillar.title} className="fs-in" style={d(0.5 + n * 0.12)}>
              <b>{pillar.title}</b>
              <span>{pillar.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="fs-slide t-ink s-cohort">
        <Chrome left="The pilot cohort" right="01 · The fellowship" />
        <h2 className="fs-heading">
          <Rise text="The pilot cohort," />{' '}
          <em>
            <Rise text="by the numbers." start={0.2} />
          </em>
        </h2>
        <div className="fs-stats">
          {cohortStats.map((stat, n) => (
            <div key={stat.unit} className="fs-stat fs-in" style={d(0.3 + n * 0.12)}>
              <p className="fs-stat__n">
                <Count value={stat.value} />
                <small>{stat.unit}</small>
              </p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="fs-band fs-in" style={d(0.7)}>
          <p>
            Organized by BetterGovPH, WeSolve Foundation, PH-OGP, and DBM.{' '}
            <span>Supported by the Mozilla Foundation.</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ 02 · AIMS ═══════════════════════════ */}

      <section className="fs-slide t-wash s-aims" id="aims">
        <Watermark n="02" />
        <Chrome left={RUNNING_HEAD} right="02 · Aims" />
        <h2 className="fs-heading">
          <Rise text="What the fellowship" />{' '}
          <em>
            <Rise text="aims to achieve" start={0.2} />
          </em>
        </h2>
        <ol className="fs-cols fs-cols--5">
          {aims.map((aim, n) => (
            <li key={aim} className="fs-in" style={d(0.3 + n * 0.1)}>
              <span>{pad(n + 1)}</span>
              <p>{aim}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="fs-slide t-blue s-compass" id="compass">
        <Chrome left="Executive Order No. 126, s. 2026" right="02 · Aims" />
        <div className="fs-statement">
          <h2 className="fs-display">
            <Rise text="One unified platform for" />{' '}
            <em>
              <Rise text="government budget and spending disclosures." start={0.25} />
            </em>
          </h2>
          <p className="fs-lede fs-in" style={d(0.6)}>
            The executive order institutionalizes DBM's Centralized Open Monitoring Platform for
            Appropriations and Spending Statistics. Fellows help connect the datasets and services
            behind it.
          </p>
        </div>
        <p className="fs-source">
          <ExternalLink href={fellowshipLinks.executiveOrder}>
            Executive Order No. 126, s. 2026 · Official Gazette
          </ExternalLink>
        </p>
      </section>

      {/* ═══════════════════════════ 03 · THE CHALLENGES ═══════════════════════════ */}

      <section className="fs-slide t-ink s-areas" id="challenges">
        <Watermark n="03" />
        <Chrome left={RUNNING_HEAD} right="03 · The challenges" />
        <div className="fs-split">
          <div>
            <h2 className="fs-display">
              <Rise text="Pick a" />{' '}
              <em>
                <Rise text="public challenge." start={0.12} />
              </em>
            </h2>
            <p className="fs-lede fs-in" style={d(0.35)}>
              Applicants respond to challenges presented by government–CSO partnerships at the
              BetterGov Summit.
            </p>
          </div>
          <ol className="fs-tracks">
            {challengeTracks.map((track, n) => (
              <li key={track} className="fs-in" style={d(0.3 + n * 0.05)}>
                <span>{pad(n + 1)}</span>
                {track}
              </li>
            ))}
          </ol>
        </div>
        <p className="fs-note fs-in" style={d(0.8)}>
          Still to come: {upcomingChallenges.join(', and ')}. The organizers may announce more.
        </p>
      </section>

      {challengeBriefs.map((brief, n) => (
        <section
          key={brief.slug}
          className={`fs-slide ${n % 2 === 0 ? 't-paper' : 't-ink'} s-challenge`}
          id={`challenge-${brief.slug}`}
        >
          <Chrome
            left={`Challenge ${pad(n + 1)} of ${pad(challengeBriefs.length)} · From the BetterGov Summit`}
            right="03 · The challenges"
          />
          <div className="fs-challenge">
            <div className="fs-challenge__copy">
              <Eyebrow>{brief.track}</Eyebrow>
              <h2 className="fs-heading">
                <Rise text={brief.headline} />{' '}
                <em>
                  <Rise text={brief.accent} start={0.2} />
                </em>
              </h2>
              <p className="fs-lede fs-in" style={d(0.35)}>
                {brief.statement}
              </p>

              {brief.figures && (
                <div className="fs-figures fs-in" style={d(0.45)}>
                  {brief.figures.map(figure => (
                    <div key={figure.value} className="fs-figure">
                      <p className="fs-figure__n">{figure.value}</p>
                      <p>{figure.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="fs-label fs-in" style={d(0.5)}>
                What fellows could build
              </p>
              <ul className="fs-build">
                {brief.build.map((item, k) => (
                  <li key={item} className="fs-in" style={d(0.55 + k * 0.08)}>
                    {item}
                  </li>
                ))}
              </ul>

              <dl className="fs-partners fs-in" style={d(0.8)}>
                <div>
                  <dt>Government</dt>
                  <dd>{brief.government}</dd>
                </div>
                <div>
                  <dt>Civil society</dt>
                  <dd>{brief.civilSociety}</dd>
                </div>
              </dl>
            </div>

            <a
              className="fs-deck fs-in"
              style={d(0.3)}
              href={deckSlideUrl(brief.deck.slideId)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fs-deck__frame">
                <img
                  src={brief.deck.image}
                  alt=""
                  width={960}
                  height={540}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="fs-deck__caption">
                <span>Pitch deck by {brief.deck.by}</span>
                <b>
                  Open the {brief.track} deck <span aria-hidden="true">↗</span>
                </b>
              </span>
            </a>
          </div>
          {brief.figureSource && <p className="fs-source">{brief.figureSource}</p>}
        </section>
      ))}

      {/* ═══════════════════════════ 04 · WHO CAN APPLY ═══════════════════════════ */}

      <section className="fs-slide t-paper s-who" id="who">
        <Watermark n="04" />
        <Chrome left={RUNNING_HEAD} right="04 · Who can apply" />
        <h2 className="fs-display">
          <Rise text="Builders who can" />{' '}
          <em>
            <Rise text="commit to the work." start={0.2} />
          </em>
        </h2>
        <p className="fs-lede fs-in" style={d(0.35)}>
          Applicants must show they can commit time and effort throughout the fellowship, from
          December to March. The fellowship is open to:
        </p>
        <ul className="fs-roles">
          {eligibleRoles.map((role, n) => (
            <li key={role} className="fs-in" style={d(0.4 + n * 0.05)}>
              {role}
            </li>
          ))}
        </ul>
        <div className="fs-types fs-in" style={d(0.8)}>
          <p className="fs-label">Apply as</p>
          <ul>
            {applicationTypes.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
          <p>
            Applying as a team? One representative fills in the form for the whole team. Applicants
            under 18 may need a guardian's consent.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ 05 · THE WORK ═══════════════════════════ */}

      <section className="fs-slide t-ink s-deliver" id="deliverables">
        <Watermark n="05" />
        <Chrome left={RUNNING_HEAD} right="05 · The work" />
        <h2 className="fs-heading">
          <Rise text="Working solutions," />{' '}
          <em>
            <Rise text="documented and open." start={0.2} />
          </em>
        </h2>
        <ol className="fs-deliverables">
          {deliverables.map((item, n) => (
            <li key={item.letter} className="fs-in" style={d(0.3 + n * 0.1)}>
              <span>{item.letter}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="fs-slide t-wash s-partnership" id="partnership">
        <Chrome left="How the partnership works" right="05 · The work" />
        <h2 className="fs-heading">
          <Rise text="DBM + PH-OGP + BetterGovPH +" />{' '}
          <em>
            <Rise text="WeSolve Foundation" start={0.3} />
          </em>
        </h2>
        <ol className="fs-flow">
          {partnershipModel.map((step, n) => (
            <li key={step.role} className="fs-in" style={d(0.35 + n * 0.15)}>
              <span>
                {pad(n + 1)} · {step.role}
              </span>
              <p>{step.who}</p>
            </li>
          ))}
        </ol>
        <p className="fs-note fs-in" style={d(0.8)}>
          Outputs are encouraged to be released under open licenses for public benefit.
        </p>
      </section>

      {/* ═══════════════════════════ 06 · SUPPORT ═══════════════════════════ */}

      <section className="fs-slide t-paper s-support" id="support">
        <Watermark n="06" />
        <Chrome left={RUNNING_HEAD} right="06 · Support" />
        <h2 className="fs-heading">
          <Rise text="What selected" />{' '}
          <em>
            <Rise text="fellows receive" start={0.15} />
          </em>
        </h2>
        <div className="fs-cols fs-cols--4">
          {support.map((block, n) => (
            <div key={block.title} className="fs-in" style={d(0.3 + n * 0.1)}>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
              {block.items.length > 0 && (
                <ul>
                  {block.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="fs-slide t-ink s-fund" id="fund">
        <Chrome left="Fellowship fund" right="06 · Support" />
        <Eyebrow>Gross funding pool</Eyebrow>
        <p className="fs-money">
          <Count value={450000} prefix="₱" />
        </p>
        <p className="fs-money__sub fs-in" style={d(0.3)}>
          For the pilot cohort, <em>shared across selected projects.</em>
        </p>
        <div className="fs-stats fs-stats--terms">
          {fundTerms.map((term, n) => (
            <div key={term.title} className="fs-stat fs-in" style={d(0.45 + n * 0.1)}>
              <p className="fs-label">{term.title}</p>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fs-slide t-blue s-contribute" id="contribute">
        <Rays />
        <Chrome left="Support the fellows" right="06 · Support" />
        <Eyebrow>We're still raising the fellowship fund</Eyebrow>
        <h2 className="fs-display">
          <Rise text="Help fund the fellows." />
        </h2>
        <p className="fs-lede fs-in" style={d(0.35)}>
          Help mobilize resources so fellows can turn public-interest ideas into working civic
          technology. Every contribution creates more room for civic innovation and public
          accountability.
        </p>
        <div className="fs-cols fs-cols--4">
          {contributeReasons.map((reason, n) => (
            <div key={reason.title} className="fs-in" style={d(0.45 + n * 0.1)}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="fs-actions fs-in" style={d(0.85)}>
          <a href={fellowshipLinks.contribute} className="fs-button fs-button--light">
            Contribute to the fund <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="fs-note fs-in" style={d(0.95)}>
          Opens an email to the organizers. Prefer to write your own? Email{' '}
          <a href={`mailto:${contributeEmail}`}>{contributeEmail}</a>.
        </p>
      </section>

      {/* ═══════════════════════════ 07 · SELECTION ═══════════════════════════ */}

      <section className="fs-slide t-paper s-selection" id="selection">
        <Watermark n="07" />
        <Chrome left={RUNNING_HEAD} right="07 · Selection" />
        <div className="fs-split">
          <div>
            <h2 className="fs-heading">
              <Rise text="How applications" />{' '}
              <em>
                <Rise text="are assessed" start={0.2} />
              </em>
            </h2>
            <p className="fs-lede fs-in" style={d(0.35)}>
              A five-member committee reviews every application: BetterGovPH, a relevant civil
              society organization, a partner government agency, DBM, and WeSolve Foundation.
              Shortlisted applicants are interviewed.
            </p>
          </div>
          <ol className="fs-criteria">
            {selectionCriteria.map((criterion, n) => (
              <li
                key={criterion.label}
                className="fs-in"
                style={{ ...d(0.3 + n * 0.1), '--w': criterion.weight / 30 } as CSSProperties}
              >
                <b>{criterion.weight}%</b>
                <span>{criterion.label}</span>
                <i aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════ 08 · TIMELINE ═══════════════════════════ */}

      <section className="fs-slide t-ink s-timeline" id="timeline">
        <Watermark n="08" />
        <Chrome left={RUNNING_HEAD} right="08 · Timeline" />
        <div className="fs-split">
          <h2 className="fs-display">
            <Rise text="October to" />{' '}
            <em>
              <Rise text="March." start={0.15} />
            </em>
          </h2>
          <ol className="fs-timeline">
            {timeline.map((item, n) => (
              <li
                key={item.when}
                className={`fs-in${item.deadline ? ' is-deadline' : ''}`}
                style={d(0.2 + n * 0.06)}
              >
                <b>{item.when}</b>
                <span>
                  {item.what}
                  {item.deadline && <span className="fs-tag">Deadline</span>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════ APPLY ═══════════════════════════ */}

      <section className="fs-slide t-blue s-end" id="apply">
        <Chrome left="Call for builders" right={`Applications close ${applicationDeadline}`} />
        <h2 className="fs-end">
          <span className="fs-dim">
            <Rise text="Build something useful." />
          </span>{' '}
          <span>
            <Rise text="Make government more open." start={0.3} />
          </span>
        </h2>
        <p className="fs-lede fs-in" style={d(0.5)}>
          The fellowship is a chance to turn real public-sector challenges into practical,
          collaborative civic technology.
        </p>
        <ol className="fs-steps">
          {applySteps.map((step, n) => (
            <li key={step.title} className="fs-in" style={d(0.6 + n * 0.1)}>
              <span>{pad(n + 1)}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="fs-actions fs-in" style={d(0.9)}>
          <ExternalLink href={fellowshipLinks.apply} className="fs-button fs-button--light">
            Apply now
          </ExternalLink>
          <a href={fellowshipLinks.contribute} className="fs-button fs-button--ghost">
            Contribute to the fund
          </a>
          <ExternalLink href={fellowshipLinks.guidelines} className="fs-button fs-button--ghost">
            Read the guidelines
          </ExternalLink>
          <ExternalLink href={fellowshipLinks.pitchDecks} className="fs-button fs-button--ghost">
            All pitch decks
          </ExternalLink>
        </div>
      </section>
    </main>
  )
}
