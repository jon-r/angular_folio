// the preload fn non minified

(function() {
  var d = document;
  var loaderLogo = d.getElementById('js_loaderLogo');
  var loaderFrame = d.getElementById('js_preLoader');
  var ready = [false, false];
  function readyCheck(n) {
    ready[n] = true;
    if (ready[0] && ready[1]) {
      loaderFrame.dataset.ready = true;
      ready.forEach(function(check) { return check = false });
    }
  }
  // ldLo.addEventListener()

  loaderLogo.addEventListener('animationend', function() {
    setTimeout(function() { readyCheck(1) }, 500);
  });
  window.addEventListener('load', function() {
   readyCheck(0);
 });
 // fallback to force past the load screen
 setTimeout(function() {
   readyCheck(0);
   readyCheck(1);
 }, 5000)
})();
