var html = require('choo/html')

var TITLE = 'mkt.tlbs.ai'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="center">
        <div class="center vh-100">
          <div class="fl w-60 h-75 pa2 outline">
            <div class="bg-white tc pv4"><code>fl w-60 pa2</code></div>
          </div>
          <div class="fl w-40 h-75 pa2 outline">
            <div class="bg-white tc pv4"><code>fl w-40 pa2</code></div>
          </div>
          <div class="fl w-100 h-25 pa2 outline">
            <div class="bg-white tc pv4"><code>fl w-100 pa2</code></div>
          </div>
        </div>
      </main>
    </body>
  `
}
