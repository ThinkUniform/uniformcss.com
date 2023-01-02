// Docsearch setting
docsearch({
  apiKey: '041931dc20e82036bcc5ef4b413bbfdb',
  indexName: 'uniformcss',
  appId: 'BH4D9OD16A',
  container: '.js-docsearch',
  debug: true,
});

// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  // Main
  Alpine.data('main', () => ({
    dialogs: {
      mobileNav: false,
    }
  }));
});