(function () {
  var descriptions = {
    fr: "Portée par le collectif. Les ventes financent le civisme, la formation gratuite aux nouvelles technologies et la défense de notre espace démocratique.",
    en: "Worn by the collective. Sales fund civic spirit, free training in new technologies, and the defense of our democratic space."
  };

  var buttons = document.querySelectorAll(".lang button");
  var meta = document.querySelector('meta[name="description"]');

  function apply(lang) {
    document.documentElement.lang = lang;
    if (meta) meta.setAttribute("content", descriptions[lang]);
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
