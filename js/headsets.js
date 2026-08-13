(function () {
  "use strict";

  var HEADSETS = window.HEADSETS || [];
  var grid = document.getElementById("headsets-grid");
  if (!grid) return;

  function perfilLabel(p) {
    if (p === "call-center") return "Call Center";
    if (p === "hibrido") return "Híbrido";
    return "Executivo";
  }

  function waLink(name) {
    var msg = "Olá! Tenho interesse no headset: " + name + ".";
    return "https://wa.me/5511917630459?text=" + encodeURIComponent(msg);
  }

  function headsetCard(h) {
    return (
      '<article class="card project-card" data-perfil="' + h.perfil + '">' +
      '<div class="media">' +
      '<div class="project-card-tags"><span class="tag">' + perfilLabel(h.perfil) + "</span></div>" +
      '<img src="' + h.image + '" alt="' + h.name + '" loading="lazy">' +
      "</div>" +
      '<div class="project-card-body">' +
      '<div class="location">' + h.brand + "</div>" +
      "<h3>" + h.name + "</h3>" +
      "<p>" + h.desc + "</p>" +
      '<a href="' + waLink(h.name) + '" target="_blank" class="link-arrow">Solicitar orçamento ' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
      "</div></article>"
    );
  }

  grid.innerHTML = HEADSETS.map(headsetCard).join("");

  var cards = grid.querySelectorAll(".project-card");
  var emptyState = document.getElementById("headsets-empty");
  var filterBtns = document.querySelectorAll(".filter-pill");

  function applyFilter(filter) {
    var visible = 0;
    cards.forEach(function (card) {
      var show = filter === "todos" || card.dataset.perfil === filter;
      card.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    if (emptyState) emptyState.classList.toggle("show", visible === 0);
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
      document.getElementById("headsets-grid").scrollIntoView({ behavior: "smooth", block: "start" });
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

  document.querySelectorAll("[data-perfil-link]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var perfil = el.getAttribute("data-perfil-link");
      var target = document.querySelector('.filter-pill[data-filter="' + perfil + '"]');
      if (target) target.click();
    });
  });
})();
