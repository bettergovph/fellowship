import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { FellowshipApp } from './FellowshipApp'

export function render() {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <FellowshipApp />
    </React.StrictMode>
  )
}
