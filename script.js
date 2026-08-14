/* Nature's Answers for You — small progressive enhancements.
   Everything here is optional; the site works fine without JS. */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* current year in the footer */
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    /* header gets a paper backdrop once you scroll */
    var header = document.getElementById('header');
    if (header) {
      var onScroll = function () {
        header.classList.toggle('scrolled', window.scrollY > 24);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* fade sections in as they arrive */
    var items = document.querySelectorAll('.reveal');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    items.forEach(function (el) { io.observe(el); });
  });
})();
