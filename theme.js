module.exports = function(RED) {
  RED.plugins.registerPlugin("dracula", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ]
  })

  RED.plugins.registerPlugin("dracula-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ]
    })
}