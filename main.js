/* =============================================================
   Paradise Pressure Washing — interactions
   Vanilla JS, no dependencies, no external APIs.
   ============================================================= */
(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeNav() {
    if (!nav || !burger) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 980) closeNav();
    });
  }

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById('header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentElement.children);
        var delay = Math.min(siblings.indexOf(el), 5) * 80;
        setTimeout(function () { el.classList.add('is-visible'); }, delay);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute('href');
      return id && id.charAt(0) === '#' ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- Quote form → mailto (no backend, no external API) ---------- */
  var form = document.getElementById('quote-form');
  var note = document.getElementById('form-note');
  var DEFAULT_NOTE = note ? note.innerHTML : '';

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.elements.name;
      var email = form.elements.email;
      var phone = form.elements.phone;
      var service = form.elements.service;
      var message = form.elements.message;

      var invalid = false;
      [name, email].forEach(function (field) {
        var ok = field.value.trim() !== '' && (field.type !== 'email' || /\S+@\S+\.\S+/.test(field.value));
        field.classList.toggle('is-invalid', !ok);
        if (!ok && !invalid) { invalid = true; field.focus(); }
      });

      if (invalid) {
        if (note) {
          note.textContent = 'Please add your name and a valid email so Juan can reach you.';
          note.classList.remove('is-ok');
        }
        return;
      }

      var lines = [
        'Name: ' + name.value.trim(),
        'Phone: ' + (phone.value.trim() || 'Not provided'),
        'Email: ' + email.value.trim(),
        'Service needed: ' + service.value,
        '',
        'Details:',
        message.value.trim() || 'No additional details provided.'
      ];

      var subject = 'Free quote request — ' + service.value;
      var href = 'mailto:JC@Paradise-Pressure-Washing.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(lines.join('\n'));

      window.location.href = href;

      if (note) {
        note.innerHTML = 'Opening your email app… If nothing happens, call <a href="tel:+13866433339">(386) 643-3339</a>.';
        note.classList.add('is-ok');
        setTimeout(function () {
          note.innerHTML = DEFAULT_NOTE;
          note.classList.remove('is-ok');
        }, 9000);
      }
    });

    form.addEventListener('input', function (e) {
      if (e.target.classList) e.target.classList.remove('is-invalid');
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
