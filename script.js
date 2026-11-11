/* HQ MEDIA Designs — site script (minimal). */

// ============================================================================
// STORE / PRODUCT URL
// Change this one value when the Instamojo product listing is live.
// Replace it with the product page URL so every Buy now / store link updates.
// ============================================================================
const STORE_URL = 'https://hqmediadesigns.myinstamojo.com/product/malayalam-shop-essentials-14-posts-14-storie/';

// ============================================================================
// PREMIUM PACK URL
// Change this one value when the Kerala Shop Premium Instamojo listing is live.
// Replace PREMIUM_STORE_URL with the product page URL so every premium Buy now
// link updates.
// ============================================================================
const PREMIUM_STORE_URL = 'https://hqmediadesigns.myinstamojo.com/product/kerala-shop-premium-40-malayalam-social-temp/';

document.querySelectorAll('[data-store-link]').forEach((el) => {
  el.setAttribute('href', STORE_URL);
});

document.querySelectorAll('[data-premium-store-link]').forEach((el) => {
  el.setAttribute('href', PREMIUM_STORE_URL);
});

// Simple lightbox for the preview gallery. Fails quietly if <dialog> is missing.
(function () {
  const dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const img = dialog.querySelector('img');
  const closeBtn = dialog.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const caption = link.getAttribute('data-caption') || '';
      img.src = link.getAttribute('href');
      img.alt = caption;
      dialog.showModal();
    });
  });

  function closeLightbox() {
    if (dialog.open) dialog.close();
    img.removeAttribute('src');
  }

  closeBtn.addEventListener('click', closeLightbox);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dialog.open) closeLightbox();
  });
})();
