// Sidebar de categorias — produtos.html
(function () {
  const sidebar = document.getElementById('catalogo-sidebar');
  if (!sidebar) return;

  // Expandir/recolher marcas
  const toggles = sidebar.querySelectorAll('.sidebar-brand-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      const sublist = toggle.nextElementSibling;
      if (sublist) sublist.classList.toggle('collapsed', expanded);
    });
  });

  // Menu mobile (mostra/esconde a sidebar inteira)
  const mobileToggle = document.getElementById('sidebar-mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Fecha a sidebar no mobile ao clicar num link de subcategoria
  const sublinks = sidebar.querySelectorAll('.sidebar-sublink');
  sublinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Destaca a subcategoria visível na tela ao rolar (scroll-spy)
  const subsections = document.querySelectorAll('.cat-subsection');
  if (subsections.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = sidebar.querySelector(`.sidebar-sublink[data-target="${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          sublinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    subsections.forEach(section => spy.observe(section));
  }
})();
