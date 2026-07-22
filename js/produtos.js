// Sidebar + filtros do catálogo  produtos.html
(function () {
  const sidebar = document.getElementById('catalogo-sidebar');
  if (!sidebar) return;

  const cards = document.querySelectorAll('.produto-card');
  const brandSections = document.querySelectorAll('.brand-section');
  const catSubsections = document.querySelectorAll('.cat-subsection');
  const emptyState = document.getElementById('filter-empty');

  let activeSegment = 'todos';
  let activeTier = 'todos';

  function applyFilters() {
    let visibleCount = 0;
    cards.forEach(card => {
      const matchesSegment = activeSegment === 'todos' || card.dataset.segment === activeSegment;
      const matchesTier = activeTier === 'todos' || card.dataset.tier === activeTier;
      const visible = matchesSegment && matchesTier;
      card.classList.toggle('hidden', !visible);
      if (visible) visibleCount++;
    });

    catSubsections.forEach(sub => {
      const hasVisible = sub.querySelectorAll('.produto-card:not(.hidden)').length > 0;
      sub.classList.toggle('section-hidden', !hasVisible);
    });

    brandSections.forEach(section => {
      const hasVisible = section.querySelectorAll('.produto-card:not(.hidden)').length > 0;
      section.classList.toggle('section-hidden', !hasVisible);
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  // Filtro por segmento (porte da empresa)
  const segmentBtns = document.querySelectorAll('.segment-filter-btn');
  segmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      segmentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSegment = btn.dataset.segmentFilter;
      applyFilters();
    });
  });

  // Filtro por prioridade (mais vendido / topo de linha / etc.)
  const tierBtns = document.querySelectorAll('.tier-filter-btn');
  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTier = btn.dataset.tierFilter;
      applyFilters();
    });
  });

  // Cards de segmento (topo da página) aplicam o filtro e rolam até o catálogo
  document.querySelectorAll('[data-segment-jump]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const seg = el.dataset.segmentJump;
      const btn = document.querySelector(`.segment-filter-btn[data-segment-filter="${seg}"]`);
      if (btn) btn.click();
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Links do rodapé "Por porte" aplicam filtro ao chegar na página
  // (o registro do clique é feito em main.js, compartilhado por todas as páginas)
  const pending = sessionStorage.getItem('pendingSegmentFilter');
  if (pending) {
    sessionStorage.removeItem('pendingSegmentFilter');
    const btn = document.querySelector(`.segment-filter-btn[data-segment-filter="${pending}"]`);
    if (btn) btn.click();
  }

  // Expandir/recolher marcas na árvore de categorias
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
  if (catSubsections.length && 'IntersectionObserver' in window) {
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

    catSubsections.forEach(section => spy.observe(section));
  }
})();
