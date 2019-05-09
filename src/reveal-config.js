/// This file configures Reveal.js.
/// In this file you can pick the theme,
/// enable or disable plugins, or
/// add Reveal.js configuration parameters.

// Base imports (required)
// --- DO NOT REMOVE ---
import Reveal from 'reveal.js/js/reveal.js'
window.Reveal = Reveal
import 'reveal.js/css/reset.css'
import 'reveal.js/css/reveal.css'
// --- DO NOT REMOVE ---

// Printing and PDF exports
if (window.location.search.match(/print-pdf/gi)) {
  import('reveal.js/css/print/pdf.css').then()
} else {
  import('reveal.js/css/print/paper.css').then()
}

// Main theme
import 'reveal.js/css/theme/black.css'
// Theme used for syntax highlighting of code
import 'reveal.js/lib/css/monokai.css'

//
// Plugins
//

// Markdown plugin
// 'marked' can use a hoisted import. 'markdown' must use a dynamic import
// See https://github.com/hakimel/reveal.js#markdown
import 'reveal.js/plugin/markdown/marked'
import('reveal.js/plugin/markdown/markdown').then()

// Speaker notes plugin
import('reveal.js/plugin/notes/notes').then()

// Code highlight plugin
// See https://github.com/hakimel/reveal.js#code-syntax-highlighting
import hljs from 'highlight.js'
window.hljs = hljs
import('highlightjs-line-numbers.js').then()
import('./plugins/highlight').then()

// Add other plugins here using dynamic import. For example: import('path/to/plugin').then()
// See https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware

// Initialize Reveal (required)
// Dependencies are not necessary here since they are bundled above
// You can change the configuration for Reveal here
// See https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  pdfSeparateFragments: false,
})
