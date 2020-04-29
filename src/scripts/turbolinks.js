const Turbolinks = require("turbolinks");

Turbolinks.start();

// Require this to prefetch links on hover
window.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line global-require
  require("instant.page");
});
