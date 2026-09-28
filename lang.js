(function () {
  var descriptions = {
    fr: "Portée par le collectif. Les ventes financent le civisme, la formation aux nouvelles technologies et la défense de notre espace démocratique.",
    en: "Worn by the collective. Sales fund civic spirit, training in new technologies, and the defense of our democratic space."
  };

  var buttons = document.querySelectorAll(".lang button");
  var meta = document.querySelector('meta[name="description"]');
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

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
