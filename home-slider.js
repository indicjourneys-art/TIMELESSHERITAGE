/* Accessible manual homepage carousel: no auto-rotation. */
(() => {
  'use strict';

  const initHomeSlider = () => {
    const slider = document.querySelector('[data-home-slider]');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('[data-home-slide]'));
    const dots = Array.from(slider.querySelectorAll('[data-slide-dot]'));
    const previous = slider.querySelector('[data-slide-prev]');
    const next = slider.querySelector('[data-slide-next]');

    if (!slides.length) return;

    let activeIndex = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-active')));

    const showSlide = (requestedIndex) => {
      activeIndex = (requestedIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        const isActive = index === activeIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        if (isActive) {
          slide.removeAttribute('tabindex');
        } else {
          slide.setAttribute('tabindex', '-1');
        }
      });

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', String(isActive));
      });
    };

    previous?.addEventListener('click', () => showSlide(activeIndex - 1));
    next?.addEventListener('click', () => showSlide(activeIndex + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

    slider.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showSlide(activeIndex - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        showSlide(activeIndex + 1);
      }
    });

    showSlide(activeIndex);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeSlider, { once: true });
  } else {
    initHomeSlider();
  }
})();
