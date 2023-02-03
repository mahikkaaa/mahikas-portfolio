/**
* Template Name: iPortfolio - v3.10.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  window.onload = onLoad;

const easeInOutQuint = 'cubic-bezier(0.86, 0, 0.07, 1)';
const easeInQuart = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
const APPEAR_COMPLETE = 2800;
const ASPECT_RATIO = 400 / 300;

function onLoad() {
  const offsets = [37, 73, 108, 144, 180, 216, 250, 285, 320, 356, 392, 425, 425, 425, 425, 425, 392, 356, 321, 286, 250, 215, 180, 144, 109, 74, 38];
  const hashes = {
    ltr: {
      dasharray: '104, 425, 0, 0',
      reset: '425, 425, 0',
      offsets: [-125, -142, -159, -177, -194],
    },
    rtl: {
      dasharray: '102, 425, 0, 0',
      reset: '425, 425, 0',
      offsets: [-126, -144, -161, -179, -197],
    }
  };

  const xOffsets = [564, 495, 425, 353, 282, 212, 141, 70].reverse();

  // Left To Right
  const ltrLines = Array.from(
    document.querySelectorAll('#leftToRight path')
  );
  // Right To Left
  const rtlLines = Array.from(
    document.querySelectorAll('#rightToLeft path')
  );
  // Left To Right
  const ltrHashes = Array.from(
    document.querySelectorAll('#leftToRight .hash')
  );
  // Right To Left hashes
  const rtlHashes = Array.from(
    document.querySelectorAll('#rightToLeft .hash')
  );
  // Top X
  const xTop = Array.from(
    document.querySelectorAll('#theXTop path')
  );
  // Bottom X
  const xBottom = Array.from(
    document.querySelectorAll('#theXBottom path')
  );

  // Timeline
  var tl = new TimelineMax();

  // Shuffle
  tl.staggerFromTo(ltrLines, 0.4, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Circ.easeOut,
  }, {
    strokeDashoffset: 0,
    ease: Circ.easeOut,
  }, 0.1, 0)
  .staggerFromTo(rtlLines, 0.4, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Circ.easeOut,
  }, {
    strokeDashoffset: 0,
    ease: Circ.easeOut,
  }, 0.1, 0)
  .add('unshuffle')
  // Unshuffle
  .staggerFromTo(ltrLines, 0.4, {
    strokeDashoffset: 0,
    ease: Expo.easeOut,
  }, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Expo.easeOut,
  }, 0.1, 'unshuffle')
  .staggerFromTo(rtlLines, 0.4, {
    strokeDashoffset: 0,
    ease: Expo.easeOut,
  }, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Expo.easeOut,
  }, 0.1, 'unshuffle')
  // Prepare for hash
  .set(ltrHashes, {
    strokeDasharray: hashes.ltr.dasharray,
    strokeDashoffset: 104,
  })
  .set(rtlHashes, {
    strokeDasharray: hashes.rtl.dasharray,
    strokeDashoffset: 102,
  })
  .add('hash')
  // Hash
  .staggerFromTo(ltrHashes, 0.8, {
    strokeDashoffset: 104,
    ease: Power4.easeInOut,
  }, {
    cycle: { strokeDashoffset: idx => hashes.ltr.offsets[idx] },
    ease: Power4.easeInOut,
  }, 0.1, 'hash')
  .staggerFromTo(rtlHashes, 0.8, {
    strokeDashoffset: 102,
    ease: Power4.easeInOut,
  }, {
    cycle: { strokeDashoffset: idx => hashes.rtl.offsets[idx] },
    ease: Power4.easeInOut,
  }, 0.1, 'hash')
  .add('unhash')
  // Unhash
  .staggerFromTo(ltrHashes, 0.8, {
    cycle: { strokeDashoffset: idx => hashes.ltr.offsets[idx] },
    ease: Power4.easeInOut,
  }, {
    strokeDashoffset: 104,
    ease: Power4.easeInOut,
  }, 0.1, 'unhash')
  .staggerFromTo(rtlHashes, 0.8, {
    cycle: { strokeDashoffset: idx => hashes.rtl.offsets[idx] },
    ease: Power4.easeInOut,
  }, {
    strokeDashoffset: 102,
    ease: Power4.easeInOut,
  }, 0.1, 'unhash')
  // Reset for shuffle
  .set(ltrHashes, {
    strokeDasharray: hashes.ltr.reset,
    strokeDashoffset: 425,
  })
  .set(rtlHashes, {
    strokeDasharray: hashes.rtl.reset,
    strokeDashoffset: 425,
  })
  .add('shuffleAgain')
  // Shuffle Again
  .staggerFromTo(ltrLines.reverse(), 0.4, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Circ.easeOut,
  }, {
    strokeDashoffset: 0,
    ease: Circ.easeOut,
  }, 0.1, 'shuffleAgain')
  .staggerFromTo(rtlLines.reverse(), 0.4, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Circ.easeOut,
  }, {
    strokeDashoffset: 0,
    ease: Circ.easeOut,
  }, 0.1, 'shuffleAgain')
  .add('theX')
  // The X
  .staggerFromTo(xTop.reverse(), 0.6, {
    cycle: { strokeDashoffset: idx => xOffsets[idx] },
    ease: Power4.easeInOut,
  }, {
    strokeDashoffset: 0,
    ease: Power4.easeInOut,
  }, 0.05, 'shuffleAgain+=1.2')
  .staggerFromTo(xBottom.reverse(), 0.6, {
    cycle: { strokeDashoffset: idx => xOffsets[idx] },
    ease: Power4.easeInOut,
  }, {
    strokeDashoffset: 0,
    ease: Power4.easeInOut,
  }, 0.05, 'shuffleAgain+=1.2')
  .add('cleanup')
  // Cleanup
  .staggerFromTo(xTop, 0.6, {
    strokeDashoffset: 0,
    ease: Power4.easeInOut,
  }, {
    cycle: { strokeDashoffset: idx => xOffsets[idx] },
    ease: Power4.easeInOut,
  }, 0.05, 'cleanup+=2')
  .staggerFromTo(xBottom, 0.6, {
    strokeDashoffset: 0,
    ease: Power4.easeInOut,
  }, {
    cycle: { strokeDashoffset: idx => xOffsets[idx] },
    ease: Power4.easeInOut,
  }, 0.05, 'cleanup+=2')
  // Cleanup
  .staggerFromTo(ltrLines, 0.4, {
    strokeDashoffset: 0,
    ease: Expo.easeOut,
  }, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Expo.easeOut,
  }, 0.1, 'cleanup+=1.6')
  .staggerFromTo(rtlLines, 0.4, {
    strokeDashoffset: 0,
    ease: Expo.easeOut,
  }, {
    cycle: { strokeDashoffset: idx => offsets[idx] },
    ease: Expo.easeOut,
  }, 0.1, 'cleanup+=1.6')
  // Repeat
  .repeat(-1);

  // Reset The X
  xTop.forEach((el, i) => tl.set(el, {
    strokeDashoffset: xOffsets[i]
  }, 0));
  xBottom.forEach((el, i) => tl.set(el, {
    strokeDashoffset: xOffsets[i]
  }, 0));

  window.onresize = resize;
  resize();

}

// Resize
let svg;
function resize() {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  svg = svg || document.querySelector('svg');
  const ratio = w / h;

  if (ratio >= ASPECT_RATIO) {
    svg.style.width = '100vw';
    svg.style.height = `auto`;
  } else {
    svg.style.height = '100vh';
    svg.style.width = 'auto';
  }
};


  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });



  /**
   * Initiate Pure Counter
   */
  new PureCounter();

})()
