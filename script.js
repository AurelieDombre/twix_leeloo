(function () {
  // Animation "reveal" au scroll
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && nodes.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    nodes.forEach(function (node) { observer.observe(node); });
  } else {
    // Pas de support IntersectionObserver : on affiche directement le contenu
    nodes.forEach(function (node) { node.classList.add('is-visible'); });
  }

  // Menu mobile
  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (nav && toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Ferme le menu au clic sur un lien
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
      });
    });
  }
})();
