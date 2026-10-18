// Renders the page to static HTML after the client and server builds, with its SEO tags.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = p => path.resolve(__dirname, p)

const origin = 'https://fellowship.bettergov.ph'
const seo = {
  title: 'BetterGovPH Fellowship - Build Civic Tech That Powers Open Government',
  description:
    'A three-month civic technology fellowship for developers, designers, data specialists, and researchers. Build with government agencies and civil society for DBM COMPASS and Philippine open data. Applications close November 17, 2026.',
  keywords:
    'BetterGovPH Fellowship, civic tech fellowship Philippines, DBM COMPASS, open data, open government partnership, WeSolve Foundation, PH-OGP',
  // Bump ?v= whenever the image changes so social platforms fetch it again.
  ogImage: `${origin}/og-fellowship.png?v=2`,
  ogImageAlt:
    'The BetterGov Fellowship. Build civic tech that powers open government. Apply by November 17, 2026.',
}

const metaTags = `<!-- Primary Meta Tags -->
    <title>${seo.title}</title>
    <meta name="title" content="${seo.title}" />
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${origin}/" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:image" content="${seo.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${seo.ogImageAlt}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${origin}/" />
    <meta property="twitter:title" content="${seo.title}" />
    <meta property="twitter:description" content="${seo.description}" />
    <meta property="twitter:image" content="${seo.ogImage}" />
    <meta property="twitter:site" content="@bettergovph" />

    <!-- Additional SEO -->
    <link rel="canonical" href="${origin}/" />
    <meta name="author" content="BetterGov.ph" />
    <meta name="robots" content="index, follow" />`

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const html = template
  .replace(
    /<!-- Meta tags are replaced[\s\S]*?<meta name="robots" content="index, follow" \/>/,
    metaTags
  )
  .replace('<!--app-html-->', render())

fs.writeFileSync(toAbsolute('dist/static/index.html'), html)
console.log('pre-rendered: dist/static/index.html')
