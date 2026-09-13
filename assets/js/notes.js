// Shared tab switcher + Mermaid re-render for RealEZ Planning Notes.
// Usage: a `.notes-tabs` button group with `data-tab-target="#id"` buttons,
// alongside sibling `.notes-tab-panel` elements with matching `id`s.
//
// Mermaid diagrams inside a hidden (display:none) tab panel can't measure
// themselves, so instead of Mermaid's own startOnLoad auto-run, this file
// disables that and explicitly (re-)runs Mermaid only on whichever panel is
// currently visible — once on load, and again on every tab switch.
function runMermaidIn(root) {
  if (!window.mermaid) return;
  var nodes = (root || document).querySelectorAll(".mermaid:not([data-processed]), pre.mermaid:not([data-processed])");
  if (nodes.length === 0) return;
  mermaid.run({ nodes: Array.prototype.slice.call(nodes) }).catch(function () {});
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.mermaid) {
    mermaid.initialize({ startOnLoad: false, theme: "neutral", gantt: { useWidth: 1400, barHeight: 26, barGap: 6, topPadding: 50, leftPadding: 200 } });
  }

  document.querySelectorAll(".notes-tabs").forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll(".notes-tab-btn");
    var panelSelector = tabGroup.getAttribute("data-panels") || null;
    var panels = panelSelector
      ? document.querySelectorAll(panelSelector + " .notes-tab-panel")
      : tabGroup.parentElement.querySelectorAll(".notes-tab-panel");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetId = btn.getAttribute("data-tab-target");
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        panels.forEach(function (p) { p.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var target = document.querySelector(targetId);
        if (target) {
          target.classList.add("is-active");
          runMermaidIn(target);
        }
      });
    });
  });

  // Initial render: whichever panel(s)/diagrams are visible on load.
  document.querySelectorAll(".notes-tab-panel.is-active").forEach(runMermaidIn);
  // Pages with Mermaid diagrams outside any tab structure (e.g. dependencies.html).
  runMermaidIn(document);
});
