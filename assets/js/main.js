
// Scroll to top
var myElement = document.querySelector('.js-scrollUp') !== null;
if (myElement) {
  var myElement = document.querySelector('.js-scrollUp');
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();
}

// Command + K shortcut support
// function searchShortcut(e) {
//   var selection = document.querySelector('.js-docsearch') !== null;
//   if (selection) {
//     var selection = document.querySelector('.js-docsearch');
//   }
//   var evtobj = window.event? event : e;
//   if (evtobj.keyCode == 75 && evtobj.metaKey) {
//     selection.focus();
//   };
// }

// document.onkeydown = searchShortcut;

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
// docsearch({
//   apiKey: '041931dc20e82036bcc5ef4b413bbfdb',
//   indexName: 'uniformcss',
//   inputSelector: '.js-docsearch',
//   debug: false
// });


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

    // gsap.to('.gsap-carousel', {
    //   duration: 1,
    //   opacity: 1,
    // });

    // gsap.from('.gsap-carousel-item-3', {
    //   y: 300,
    //   duration: 2,
    //   ease: 'expo.out',
    // });

    // gsap.from('.gsap-carousel-item-2', {
    //   x: 100,
    //   duration: 2,
    //   opacity: 0,
    //   ease: 'expo.out',
    //   delay: 1,
    // });
    // gsap.from('.gsap-carousel-item-4', {
    //   x: -200,
    //   duration: 2,
    //   opacity: 0,
    //   ease: 'expo.out',
    //   delay: 1,
    // });

    // gsap.from('.gsap-carousel-item-1', {
    //   x: 100,
    //   duration: 2,
    //   opacity: 0,
    //   ease: 'expo.out',
    //   delay: 1.2,
    // });
    // gsap.from('.gsap-carousel-item-5', {
    //   x: -100,
    //   duration: 2,
    //   opacity: 0,
    //   ease: 'expo.out',
    //   delay: 1.2,
    // });


    // gsap.from('.hero-glass', {
    //   scrollTrigger: {
    //     trigger: '.hero-glass',
    //     // scrub: true,
    //     // end: '40',
    //   },
    //   y: -100,
    //   stagger: 0.2,
    //   opacity: 0,
    //   duration: 0.8,
    // });
    // gsap.from('.glass-keylight.is-one', {
    //   // scrollTrigger: {
    //   //   trigger: '.glass-keylight.is-one',
    //   //   scrub: true,
    //   //   start: '0',
    //   // },
    //   // x: 400,
    //   opacity: 0,
    // });

    // gsap.to('.glass-keylight.is-2', {
    //   scrollTrigger: {
    //     trigger: '.glass-frame',
    //     scrub: true,
    //     // end: '+=2000px',
    //     // start: '+=-128',
    //     // end: '0',
    //     markers: true,
    //   },
    //   x: '-40%',
    //   // duration: 2,
    //   // opacity: 0,
    // });

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