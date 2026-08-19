(function () {
  "use strict";

  var PRODUCTS = window.PRODUCTS_EQUIP || [];
  var grid = document.getElementById("products-grid");
  if (!grid) return;

  function mediaFallback() {
    return (
      '<div class="media-fallback">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">' +
      '<rect x="3" y="7" width="14" height="12" rx="3"/><path d="M17 10l4-2v10l-4-2"/>' +
      "</svg></div>"
    );
  }

  function waLink(name) {
    var msg = "Olá! Tenho interesse no equipamento: " + name + ".";
    return "https://wa.me/5511917630459?text=" + encodeURIComponent(msg);
  }

  function roomLabel(type) {
    if (type === "pequena") return "Sala Pequena";
    if (type === "media") return "Sala Média";
    return "Sala de Treinamento";
  }

  function productCard(p) {
    var roomTags = p.roomTypes
      .map(function (t) { return '<span class="tag">' + roomLabel(t) + "</span>"; })
      .join("");
    return (
      '<article class="card project-card" data-rooms="' + p.roomTypes.join(",") + '">' +
      '<div class="media">' +
      '<div class="project-card-tags">' + roomTags + "</div>" +
      "<!-- Adicione aqui a imagem real do equipamento: " + p.image + " -->" +
      '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" ' +
      'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
      mediaFallback() +
      "</div>" +
      '<div class="project-card-body">' +
      '<div class="location">' + p.category + " · " + p.brand + "</div>" +
      "<h3>" + p.name + "</h3>" +
      "<p>" + p.desc + "</p>" +
      '<a href="' + waLink(p.name) + '" target="_blank" rel="noopener noreferrer" class="link-arrow">Solicitar orçamento ' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
      "</div></article>"
    );
  }

  grid.innerHTML = PRODUCTS.map(productCard).join("");

  var cards = grid.querySelectorAll(".project-card");
  var emptyState = document.getElementById("products-empty");
  var filterBtns = document.querySelectorAll(".filter-pill");

  function applyFilter(filter) {
    var visible = 0;
    cards.forEach(function (card) {
      var rooms = (card.dataset.rooms || "").split(",");
      var show = filter === "todos" || rooms.indexOf(filter) !== -1;
      card.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    if (emptyState) emptyState.classList.toggle("show", visible === 0);
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      applyFilter(btn.dataset.filter || "todos");
    });
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(function (card) {
      card.setAttribute("data-reveal", "");
      io.observe(card);
    });
  } else {
    cards.forEach(function (card) { card.classList.add("is-visible"); });
  }

  var params = new URLSearchParams(window.location.search);
  var initialType = params.get("tipo");
  var initialBtn = null;
  if (initialType) {
    initialBtn = document.querySelector('.filter-pill[data-filter="' + initialType + '"]');
  }

  if (initialBtn) {
    filterBtns.forEach(function (b) { b.classList.remove("active"); });
    initialBtn.classList.add("active");
    applyFilter(initialType);
  } else {
    applyFilter("todos");
  }
})();
