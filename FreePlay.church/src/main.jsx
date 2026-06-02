import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './index.css'
import App from './App.jsx'

// ViteReactSSG renders the app to static HTML at build time and hydrates it in
// the browser, so crawlers receive fully-populated markup instead of an empty root.
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
