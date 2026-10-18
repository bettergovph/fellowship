import { useCallback, useEffect, useRef, type MouseEvent } from 'react'
import { challengeBriefs, deckSlideUrl, upcomingChallenges, type ChallengeBrief } from './content'
import { d } from './helpers'

const dialogId = (brief: ChallengeBrief) => `challenge-${brief.slug}`

/*
 * The Summit challenges as a grid of cards. Each card opens its challenge in a
 * modal <dialog>, and the URL hash follows, so a challenge can be shared as
 * fellowship.bettergov.ph/#challenge-energy. Every dialog is in the prerendered
 * page, so the full challenge text is there for search engines too.
 */
export function ChallengeGrid() {
  const dialogs = useRef<(HTMLDialogElement | null)[]>([])

  const open = useCallback((index: number) => {
    dialogs.current.forEach(dialog => {
      if (dialog?.open) dialog.close()
    })
    const dialog = dialogs.current[index]
    if (!dialog) return
    dialog.showModal()
    history.replaceState(null, '', `#${dialog.id}`)
  }, [])

  // The close event fires after the next dialog may already be open, so the
  // hash is only cleared once no challenge is showing.
  const clearHash = useCallback(() => {
    if (dialogs.current.some(dialog => dialog?.open)) return
    if (location.hash.startsWith('#challenge-')) {
      history.replaceState(null, '', location.pathname + location.search)
    }
  }, [])

  useEffect(() => {
    const index = challengeBriefs.findIndex(brief => location.hash === `#${dialogId(brief)}`)
    if (index < 0) return
    document.getElementById('summit-challenges')?.scrollIntoView({ behavior: 'instant' })
    open(index)
  }, [open])

  const step = (from: number, by: number) => {
    open((from + by + challengeBriefs.length) % challengeBriefs.length)
  }

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) event.currentTarget.close()
  }

  return (
    <>
      <ul className="fs-grid">
        {challengeBriefs.map((brief, n) => (
          <li key={brief.slug} className="fs-card fs-in" style={d(0.25 + n * 0.06)}>
            <span className="fs-card__thumb">
              <img
                src={brief.deck.image}
                alt=""
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
              />
            </span>
            <p className="fs-card__track">{brief.track}</p>
            <h3 className="fs-card__title">
              <a
                href={`#${dialogId(brief)}`}
                aria-haspopup="dialog"
                onClick={event => {
                  event.preventDefault()
                  open(n)
                }}
              >
                {brief.headline} <em>{brief.accent}</em>
              </a>
            </h3>
            <p className="fs-card__partners">{brief.government}</p>
            <span className="fs-card__more" aria-hidden="true">
              See the challenge <span>→</span>
            </span>
          </li>
        ))}
        <li className="fs-card fs-card--soon fs-in" style={d(0.25 + challengeBriefs.length * 0.06)}>
          <p className="fs-card__track">Still to come</p>
          <ul>
            {upcomingChallenges.map(challenge => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
          <p className="fs-card__partners">The organizers may announce more.</p>
        </li>
      </ul>

      <div className="fs-dialogs">
        {challengeBriefs.map((brief, n) => {
          const previous =
            challengeBriefs[(n - 1 + challengeBriefs.length) % challengeBriefs.length]
          const next = challengeBriefs[(n + 1) % challengeBriefs.length]

          return (
            <dialog
              key={brief.slug}
              id={dialogId(brief)}
              className="fs-modal t-paper"
              aria-labelledby={`${dialogId(brief)}-title`}
              ref={element => {
                dialogs.current[n] = element
              }}
              onClose={clearHash}
              onClick={closeOnBackdrop}
            >
              <div className="fs-modal__bar">
                <p className="fs-label">From the BetterGov Summit</p>
                <button
                  type="button"
                  className="fs-modal__close"
                  onClick={() => dialogs.current[n]?.close()}
                >
                  Close <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="fs-modal__body">
                <div className="fs-modal__copy">
                  <p className="fs-eyebrow">{brief.track}</p>
                  <h2 id={`${dialogId(brief)}-title`} className="fs-heading">
                    {brief.headline} <em>{brief.accent}</em>
                  </h2>
                  <p className="fs-lede">{brief.statement}</p>

                  {brief.figures && (
                    <div className="fs-figures">
                      {brief.figures.map(figure => (
                        <div key={figure.value} className="fs-figure">
                          <p className="fs-figure__n">{figure.value}</p>
                          <p>{figure.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="fs-label">What fellows could build</p>
                  <ul className="fs-build">
                    {brief.build.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <dl className="fs-partners">
                    <div>
                      <dt>Government</dt>
                      <dd>{brief.government}</dd>
                    </div>
                    <div>
                      <dt>Civil society</dt>
                      <dd>{brief.civilSociety}</dd>
                    </div>
                  </dl>

                  {brief.figureSource && <p className="fs-note">Source: {brief.figureSource}</p>}
                </div>

                <a
                  className="fs-deck"
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

              <div className="fs-modal__nav">
                <button type="button" onClick={() => step(n, -1)}>
                  <span aria-hidden="true">←</span> {previous.track}
                </button>
                <button type="button" onClick={() => step(n, 1)}>
                  {next.track} <span aria-hidden="true">→</span>
                </button>
              </div>
            </dialog>
          )
        })}
      </div>
    </>
  )
}
