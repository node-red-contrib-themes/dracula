module.exports = function(RED) {
  RED.plugins.registerPlugin("dracula", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ],
    monacoOptions: {
      theme: require("./dracula-monaco-theme.json")
    }
  })

  RED.plugins.registerPlugin("dracula-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ],
    monacoOptions: {
      theme: require("./dracula-monaco-theme.json")
    }
    })
}