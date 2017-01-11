;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-svg26" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M660.192 599.68l-89.984-89.984 90.112-90.112c14.208-14.208 14.176-37.248 0-51.456-14.208-14.208-37.184-14.24-51.456 0l-90.112 90.112L428.8 368.256c-14.208-14.208-37.312-14.176-51.488 0-14.208 14.208-14.24 37.248 0 51.488l89.984 89.984-90.112 90.112c-14.176 14.176-14.24 37.28-0.032 51.488 14.176 14.176 37.248 14.208 51.488-0.032l90.048-90.048 89.984 89.984c14.144 14.144 37.248 14.24 51.52-0.032C674.368 636.96 674.4 613.92 660.192 599.68L660.192 599.68 660.192 599.68zM840.128 187.84c-177.216-177.216-465.696-177.28-642.976 0-177.28 177.28-177.216 465.76 0 642.976 177.28 177.28 465.696 177.344 643.008 0.032C1017.44 653.568 1017.44 365.152 840.128 187.84L840.128 187.84 840.128 187.84zM237.376 790.624C82.24 635.488 82.272 383.168 237.344 228.064c155.168-155.168 407.456-155.136 562.592-0.032 155.136 155.136 155.168 407.456 0 562.624C644.896 945.76 392.48 945.76 237.376 790.624L237.376 790.624 237.376 790.624zM237.376 790.624"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
