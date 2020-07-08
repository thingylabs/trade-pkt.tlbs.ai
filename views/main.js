var html = require('choo/html')

var TITLE = 'mkt.tlbs.ai'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="center">
        <section class="ma5">
        <h2>PacketCoin</h2>
        <p>Cool infos about PacketCoin</p>
        </section>
      </main>
    </body>
  `
}
