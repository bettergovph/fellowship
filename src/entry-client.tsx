import './base.css'
import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { FellowshipApp } from './FellowshipApp'

const rootElement = document.getElementById('root') as HTMLElement
const app = (
  <React.StrictMode>
    <FellowshipApp />
  </React.StrictMode>
)

if (rootElement.children.length > 0) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
