var html = require('choo/html')

var TITLE = 'mkt.tlbs.ai'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="center black-70">
        <div class="center vh-100 cover bg-black-80" style="background:url(assets/gfx/icons8-team-sBbm92cRIQo-unsplash.jpg) no-repeat center;">

          <div class="fl w-70 h-75">
            <div class="w-100 pa5">
              <h1 class="f1">trade-pkt.tlbs.ai</h1>
              <p>Cool info about PacketCoin </p>
            </div>
          </div>

          <div class="fl w-30 h-75 pa5">

            <div class="tc cf pa3 mb3 ba bg-white b--black-30 br3">
              <img src="http://placehold.it/320x200">
              <p>some static info</p>
            </div>

            <div class="tc cf pa3 mb3 ba bg-white b--black-30 br3">
              <form action="submit" method="get" accept-charset="utf-8">
                <div class="w-100 db">
                  <label class="db f6 fl w-40 tl" for="eur">EUR</label>
                  <label class="db f6 fl w-20 transparent" for="swap">to</label>
                  <label class="db f6 fl w-40 tr" for="pkt">PKT</label>
                </div>
                <div class="w-100 db">
                  <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-40 br2-ns br--left-ns" placeholder="10" type="text" name="eur" value="" id="eur">
                  <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-50 hover-bg-black white pointer w-20" type="button" name="swap" value="⇦⇨" id="swap">
                  <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-40 br2-ns br--right-ns" placeholder="200" type="text" name="pkt" value="" id="pkt">
                </div>
                <div class="w-100 db mv2">
                  <input class="f6 f5-l fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100" type="submit" name="exchange" value="EXCHANGE" id="exchange">
                </div>
              </form>
            </div>

          </div>

          <div class="fl w-100 h-25 pa5">
            <div><code>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </code></div>
          </div>

        </div>
      </main>
    </body>
  `
}
