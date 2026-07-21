// Renderiza a página de detalhe do produto (produto.html) a partir de window.CATALOG
(function () {
  const WA_ICON_16 = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  const CHECK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>';
  const DOT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>';

  function iconHeadset(color, light) {
    return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${light}"/>
      <path d="M30 55c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <rect x="23" y="53" width="10" height="16" rx="5" fill="${color}"/>
      <rect x="67" y="53" width="10" height="16" rx="5" fill="${color}"/>
      <line x1="50" y1="75" x2="50" y2="82" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="85" r="3" fill="${color}"/>
    </svg>`;
  }
  function iconPhone(color, light) {
    return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${light}"/>
      <rect x="28" y="25" width="44" height="50" rx="4" fill="${color}" opacity="0.9"/>
      <rect x="33" y="30" width="34" height="20" rx="2" fill="white" opacity="0.8"/>
      <rect x="33" y="56" width="8" height="6" rx="1" fill="white" opacity="0.6"/>
      <rect x="43" y="56" width="8" height="6" rx="1" fill="white" opacity="0.6"/>
      <rect x="53" y="56" width="8" height="6" rx="1" fill="white" opacity="0.6"/>
      <rect x="33" y="65" width="8" height="6" rx="1" fill="white" opacity="0.6"/>
      <rect x="43" y="65" width="8" height="6" rx="1" fill="white" opacity="0.6"/>
      <rect x="53" y="65" width="8" height="6" rx="1" fill="white" opacity="0.6"/>
    </svg>`;
  }
  function iconCamera(color, light) {
    return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${light}"/>
      <rect x="20" y="38" width="48" height="32" rx="5" fill="${color}" opacity="0.85"/>
      <circle cx="44" cy="54" r="10" fill="white" opacity="0.3"/>
      <circle cx="44" cy="54" r="6" fill="white" opacity="0.5"/>
      <circle cx="44" cy="54" r="3" fill="${color}"/>
      <rect x="68" y="42" width="8" height="8" rx="2" fill="${color}"/>
      <line x1="44" y1="70" x2="44" y2="78" stroke="${color}" stroke-width="3"/>
      <rect x="32" y="76" width="24" height="3" rx="1.5" fill="${color}"/>
    </svg>`;
  }
  function iconVideo(color, light) {
    return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${light}"/>
      <rect x="20" y="38" width="48" height="28" rx="4" fill="${color}" opacity="0.85"/>
      <circle cx="44" cy="52" r="8" fill="white" opacity="0.3"/>
      <circle cx="44" cy="52" r="4" fill="white" opacity="0.6"/>
      <rect x="68" y="42" width="8" height="7" rx="2" fill="${color}"/>
      <rect x="20" y="66" width="48" height="3" rx="1.5" fill="${color}" opacity="0.5"/>
    </svg>`;
  }
  function iconSpeaker(color, light) {
    return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${light}"/>
      <circle cx="50" cy="56" r="17" fill="${color}" opacity="0.85"/>
      <circle cx="50" cy="56" r="6" fill="white" opacity="0.7"/>
      <path d="M27 42a28 28 0 000 28" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M73 42a28 28 0 010 28" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M50 30v10" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  }
  const ICONS = { headsets: iconHeadset, telefonia: iconPhone, cameras: iconCamera, video: iconVideo, 'viva-voz': iconSpeaker };

  function waLink(name) {
    const msg = `Olá! Tenho interesse no ${name}.`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
  }

  function renderCard(p, catalog) {
    const b = catalog.brands[p.brand];
    const icon = ICONS[p.cat](b.color, b.light);
    const badge = `<div class="produto-badge ${b.badgeclass}">${b.label}</div>`;
    const tier = p.tier ? `<span class="tier-tag">${catalog.tierLabels[p.tier]}</span>` : '';
    const seg = catalog.segments[p.segment];
    return `
      <div class="produto-card" data-cat="${p.cat}" data-brand="${p.brand}" data-segment="${p.segment}" data-tier="${p.tier || ''}">
        ${badge}
        ${tier}
        <a href="produto.html?id=${p.id}" class="produto-img-link">
          <div class="produto-img">${icon}</div>
        </a>
        <div class="produto-info">
          <div class="produto-tags-row">
            <span class="produto-cat">${catalog.catLabels[p.cat]}</span>
            <span class="segment-tag segment-${p.segment}">${seg.label}</span>
          </div>
          <h4><a href="produto.html?id=${p.id}">${p.name}</a></h4>
          <p>${p.desc}</p>
          <div class="produto-actions">
            <a href="produto.html?id=${p.id}" class="produto-detail-link">Ver detalhes</a>
            <a href="${waLink(p.name)}" target="_blank" class="produto-cta">${WA_ICON_16} Cotação</a>
          </div>
        </div>
      </div>`;
  }

  function renderNotFound(root) {
    root.innerHTML = `
      <div class="container">
        <div class="produto-not-found">
          <h1>Produto não encontrado</h1>
          <p>O produto que você está procurando não existe ou foi removido do catálogo.</p>
          <a href="produtos.html" class="btn-primary">Ver catálogo completo</a>
        </div>
      </div>`;
  }

  function init() {
    const catalog = window.CATALOG;
    const root = document.getElementById('produto-root');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!catalog || !id) { renderNotFound(root); return; }

    const product = catalog.products.find(p => p.id === id);
    if (!product) { renderNotFound(root); return; }

    const b = catalog.brands[product.brand];
    const seg = catalog.segments[product.segment];
    const icon = ICONS[product.cat](b.color, b.light);
    const catLabel = catalog.catLabels[product.cat];

    document.title = `${product.name} — ${b.label} | {nome da empresa}`;
    const metaDesc = document.getElementById('page-desc');
    if (metaDesc) metaDesc.setAttribute('content', product.desc);

    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
      <a href="index.html">Início</a>
      <span class="breadcrumb-sep">/</span>
      <a href="produtos.html">Produtos</a>
      <span class="breadcrumb-sep">/</span>
      <a href="produtos.html#${product.brand}">${b.label}</a>
      <span class="breadcrumb-sep">/</span>
      <a href="produtos.html#${product.brand}-${product.cat}">${catLabel}</a>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">${product.name}</span>`;

    // Produtos relacionados: mesma marca + categoria primeiro, depois mesmo segmento/categoria de outras marcas
    let related = catalog.products.filter(p => p.brand === product.brand && p.cat === product.cat && p.id !== product.id);
    if (related.length < 3) {
      const others = catalog.products.filter(p => p.cat === product.cat && p.segment === product.segment && p.id !== product.id && !related.includes(p));
      related = related.concat(others);
    }
    if (related.length < 3) {
      const others2 = catalog.products.filter(p => p.cat === product.cat && p.id !== product.id && !related.includes(p));
      related = related.concat(others2);
    }
    related = related.slice(0, 4);

    const tierBadge = product.tier ? `<span class="tier-tag tier-tag--lg">${catalog.tierLabels[product.tier]}</span>` : '';

    const highlightsHtml = product.highlights.map(h => `<li>${CHECK_ICON}<span>${h}</span></li>`).join('');
    const idealForHtml = product.idealFor.map(u => `<li>${DOT_ICON}<span>${u}</span></li>`).join('');
    const featuresHtml = product.features.map(f => `<li>${CHECK_ICON}<span>${f}</span></li>`).join('');
    const compatHtml = product.compat.map(c => `<li>${c}</li>`).join('');

    root.innerHTML = `
      <div class="container">
        <a href="produtos.html" class="produto-back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar ao catálogo
        </a>

        <div class="produto-hero">
          <div class="produto-hero-visual">
            <div class="produto-badge ${b.badgeclass}">${b.label}</div>
            ${tierBadge}
            <div class="produto-hero-icon">${icon}</div>
          </div>
          <div class="produto-hero-info">
            <div class="produto-tags-row">
              <span class="produto-cat">${catLabel}</span>
              <span class="segment-tag segment-${product.segment}">${seg.label}</span>
            </div>
            <h1>${product.name}</h1>

            <h2 class="produto-hero-subhead">Descrição</h2>
            <p class="produto-hero-desc">${product.desc}</p>

            <div class="produto-hero-actions">
              <a href="${waLink(product.name)}" target="_blank" class="btn-whatsapp-big">
                ${WA_ICON_16.replace('width="16" height="16"', 'width="20" height="20"')}
                Solicitar cotação personalizada
              </a>
              <a href="produtos.html#${product.brand}" class="btn-outline">Ver mais da ${b.label}</a>
            </div>
          </div>
        </div>

        <div class="produto-section">
          <h2>Destaques</h2>
          <ul class="produto-specs-list">${highlightsHtml}</ul>
        </div>

        <div class="produto-section produto-segment-section">
          <h2>Ideal para</h2>
          <div class="produto-segment-banner segment-${product.segment}">
            <strong>${seg.label}:</strong> ${seg.desc}
          </div>
          <ul class="produto-idealfor-list">${idealForHtml}</ul>
        </div>

        <div class="produto-section">
          <h2>Principais recursos</h2>
          <ul class="produto-specs-list">${featuresHtml}</ul>
        </div>

        <div class="produto-section">
          <h2>Compatibilidade</h2>
          <ul class="produto-compat-list">${compatHtml}</ul>
        </div>

        <div class="produto-section produto-diferenciais">
          <h2>Diferenciais</h2>
          <p>${product.differentiator}</p>
        </div>

        <div class="produto-section produto-cta-inline">
          <h2>Solicite uma cotação personalizada</h2>
          <p>Nossa equipe ajuda a escolher a solução ideal para o tamanho da sua sala e a plataforma de videoconferência utilizada pela empresa.</p>
          <a href="${waLink(product.name)}" target="_blank" class="btn-whatsapp-big">
            ${WA_ICON_16.replace('width="16" height="16"', 'width="20" height="20"')}
            Falar com um especialista
          </a>
        </div>

        ${related.length ? `
        <div class="produto-relacionados">
          <h2>Produtos relacionados</h2>
          <div class="produtos-grid">
            ${related.map(p => renderCard(p, catalog)).join('')}
          </div>
        </div>` : ''}
      </div>`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
