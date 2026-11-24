(function () {
  var descriptions = {
    fr: "MNTRL, association loi 1901\u00a0: formations aux nouvelles technologies, actions de civisme et d'entraide, accès à une information fiable.",
    en: "MNTRL, a 1901-law association: training in new technologies, civic and mutual-aid actions, access to reliable information."
  };

  var buttons = document.querySelectorAll(".lang button");
  var meta = document.querySelector('meta[name="description"]');
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  function apply(lang) {
    document.documentElement.lang = lang;
    var title = document.querySelector("title");
    if (title) {
      var text = title.getAttribute("data-" + lang);
      if (text) document.title = text;
    }
    var path = location.pathname;
    var isHome = path === "/" || /\/index\.html$/.test(path);
    if (meta && isHome && descriptions[lang]) meta.setAttribute("content", descriptions[lang]);
    buttons.forEach(function (button) {
      var on = button.getAttribute("data-lang") === lang;
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  apply(document.documentElement.lang === "en" ? "en" : "fr");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang");
      apply(lang);
      try { localStorage.setItem("mntrl-lang", lang); } catch (e) {}
    });
  });
})();
