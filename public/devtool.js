/*global chrome*/

chrome.devtools.panels.create(
  "Responsive kit",
  "device_16.png",
  "index.html",
  function (panel) {
    console.log(panel);
    // code invoked on panel creation
  }
);
