// Applies the pricing-visibility setting from config.js before the page paints,
// so hidden pricing never flashes on screen. Runs synchronously in <head>.
// URL override for previewing either version without editing config.js:
// ?pricing=0 forces hidden, ?pricing=1 forces shown.
(function () {
  var params = new URLSearchParams(window.location.search);
  var override = params.get("pricing");
  var show = (window.SITE_CONFIG && typeof window.SITE_CONFIG.showPricing === "boolean")
    ? window.SITE_CONFIG.showPricing
    : false;
  if (override === "0") show = false;
  if (override === "1") show = true;
  if (!show) {
    document.documentElement.classList.add("pricing-hidden");
  }
})();
