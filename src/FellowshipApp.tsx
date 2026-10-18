import { useEffect } from 'react'
import './fellowship.css'
import { FellowshipFooter } from './FellowshipFooter'
import { FellowshipHeader } from './FellowshipHeader'
import { FellowshipPage } from './FellowshipPage'

export function FellowshipApp() {
  useEffect(() => {
    document.title = 'BetterGovPH Fellowship — Build civic tech that powers open government'
  }, [])

  return (
    <div className="fs">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <FellowshipHeader />
      <div id="main-content" tabIndex={-1}>
        <FellowshipPage />
        <FellowshipFooter />
      </div>
    </div>
  )
}
