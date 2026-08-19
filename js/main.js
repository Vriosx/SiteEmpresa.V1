// ============================================================================
// VC SERVIÇOS — comportamento compartilhado do site
// ============================================================================
(function () {
  "use strict";

  /* ---- Header: estado ao rolar ---- */
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Menu mobile ---- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
              setTimeout(function () {
                entry.target.classList.add("is-visible");
              }, (i % 4) * 70);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      // Sem suporte a IntersectionObserver: mostra tudo direto
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---- Voltar ao topo ---- */
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Formulário de contato -> abre o WhatsApp com a mensagem pronta ---- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (contactForm.querySelector("#cf-name") || {}).value || "";
      var email = (contactForm.querySelector("#cf-email") || {}).value || "";
      var message = (contactForm.querySelector("#cf-message") || {}).value || "";

      var text = "Olá! Meu nome é " + name + ".";
      if (email) text += " Meu e-mail é " + email + ".";
      if (message) text += " " + message;

      var url = "https://wa.me/5511917630459?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  /* ---- Ano corrente no rodapé ---- */
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
