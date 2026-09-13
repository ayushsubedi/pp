// RealEZ Planning Notes — publish config.
// Flip showPricing to false and republish to hide internal dev/team cost figures
// (the Cost page, and inline NPR/project-fee mentions elsewhere) from this site.
// Can also be overridden per-visit with a URL param: ?pricing=0 or ?pricing=1
// (useful for previewing either version without editing this file).
window.SITE_CONFIG = {
  showPricing: false
};
