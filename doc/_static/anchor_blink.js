/**
 * anchor_blink
 */
window.addEventListener("DOMContentLoaded", function(){
  function anchor_blink() {
    if (!location.hash) return;
    let dur = 1000;
    let count = 4;
    let e = document.querySelector(location.hash);
    let base = e.insertBefore(document.createElement("div"), e.firstChild);
    base.style.position = "relative";
    let div = base.appendChild(document.createElement("div"));
    Object.assign(div.style, {
      pointerEvents: "none",
      width: e.clientWidth +"px",
      height: e.clientHeight +"px",
      position: "absolute",
      zIndex: 999
    });
    div.animate([
      {},
      {background: "#0F0", opacity: "5%"},
    ], {
      easing: "ease-in-out",
      direction: "alternate",
      duration: dur,
      iterations: count
    })
    setTimeout(function(){base.parentNode.removeChild(base)},dur*count);
  }
  window.addEventListener("load", anchor_blink);
  window.addEventListener("hashchange", anchor_blink);
  
  (function() {
    let a = document.querySelectorAll("a");
    [].forEach.call(a, function(a){
      if (a.getAttribute("href").match(/^#/)) {
        a.addEventListener("click", function(){
          if (location.hash == a.getAttribute("href")) {
            location.replace("#");
            location.replace(a.getAttribute("href"));
          }
        });
      }
    });
  })();
});
