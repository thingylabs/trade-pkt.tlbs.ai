var html = require('choo/html')

var TITLE = 'mkt.tlbs.ai - route not found'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <section class="flex center">
        <div class="mv5 center">
          <img src="assets/gfx/404.webp" />
          <h1 class="gold">Route not found.</h1>
          <a class="dim" href="/">Back to main.</a>
        </div>
      </section>
    </body>
  `
}
