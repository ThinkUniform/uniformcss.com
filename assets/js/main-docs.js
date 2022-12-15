
// Scroll to top
var myElement = document.querySelector('.js-scrollUp') !== null;
if (myElement) {
  var myElement = document.querySelector('.js-scrollUp');
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();
}

// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  Alpine.data('tabs', () => ({
    width: 0,
    left: 0,
    tab: 0,

    init: function() {
      active = this.$el.querySelector('.is-active');
      this.width =  active.offsetWidth;
      this.left =  active.offsetLeft;
    },
    switchTabs(e, targetTab) {
      this.tab = targetTab;
      this.width = e.currentTarget.offsetWidth;
      this.left =  e.currentTarget.offsetLeft;
    }
  })),
  
  Alpine.data('main', () => ({
    mobileNav: false, 
    modal: false,

    init: function() {

    },
    showModal() {
      this.modal = ! this.modal;

      var iframe = document.querySelector('.js-embedFrame') !== null;
      if (iframe) {
        var iframe = document.querySelector('.js-embedFrame');
      }

      iframe.src = "https://www.youtube.com/embed/_hH65eaPdPo?autoplay=1";
    },
    closeModal() {
      this.modal = ! this.modal;

      var iframe = document.querySelector('.js-embedFrame') !== null;
      if (iframe) {
        var iframe = document.querySelector('.js-embedFrame');
      }

      iframe.src = "";
    },
  }))
})

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
      preview: false,
    },
    previewSelection: 6
  }));
});


document.addEventListener(
  'DOMContentLoaded',
  function () {

    gsap.to('.gsap-section-1 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-1 .glass-frame',
        scrub: true,
        // end: '+=2000px',
        // start: '+=-128',
        // end: '0',
        // markers: true,
      },
      x: '-40%',
      // duration: 2,
      // opacity: 0,
    });

    gsap.to('.gsap-section-2 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-2 .glass-frame',
        scrub: true,
      },
      x: '-40%',
    });

    gsap.to('.gsap-section-3 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-3 .glass-frame',
        scrub: true,
      },
      x: '-40%',
    });

    gsap.to('.gsap-section-4 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-4 .glass-frame',
        scrub: true,
      },
      x: '-40%',
    });
  },
  false
);