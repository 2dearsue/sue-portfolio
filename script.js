$(document).ready(function(ev) {

// HAMBURGER BUTTON:
    $(".btn").click(
      function(ev) {
        // console.log("hey2");
        $(this).toggleClass(`is-active`);
      }
    )

    $("a>.l1").click(
      function(ev) {
        $("span#2").removeClass(`visible`);
        $("span#3").removeClass(`visible`);
        $("span#1").toggleClass(`visible`);
      };
    )

    $("a.l2").click(
      function(ev) {
        $("span#1").removeClass(`visible`);
        $("span#3").removeClass(`visible`);
        $("span#2").toggleClass(`visible`);
      };
    )

    $(".l3").click(
      function(ev) {
        $("span#2").removeClass(`visible`);
        $("span#1").removeClass(`visible`);
        $("span#3").toggleClass(`visible`);
      };
    )

  }
);

//
// /// AOS - part
// AOS.init();
//
// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
//
//
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 0, // offset (in px) from the original trigger point
//   delay: 3000, // values from 0 to 3000, with step 50ms
//   duration: 600, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
//
// });
