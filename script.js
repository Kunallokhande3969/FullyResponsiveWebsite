function smoothscrolling() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
smoothscrolling();
function crsr() {
  var main = document.querySelector("#page1-contant");
  var crsr = document.querySelector("#crsr");
  main.addEventListener("mousemove", function (data) {
    gsap.to(crsr, {
      x: data.x,
      y: data.y,
    });
  });
  main.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 1,
      opacity: 1,
    });
  });
  main.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 0,
      opacity: 0,
    });
  });
}
crsr();
function crsrB() {
  var main = document.querySelector("#page5");
  var crsrA = document.querySelector("#page5-crsr");
  main.addEventListener("mousemove", function (data) {
    gsap.to(crsrA, {
      x: data.x,
      y: data.y,
    });
  });
  main.addEventListener("mouseenter", function () {
    gsap.to(crsrA, {
      scale: 1,
      opacity: 1,
    });
  });
  main.addEventListener("mouseleave", function () {
    gsap.to(crsrA, {
      scale: 0,
      opacity: 0,
    });
  });
}
crsrB();
gsap.from("#page2 #top h3", {
  y: 170,
  border: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 70%",
    end: "top -20%",
    scrub: true,
  },
});
function page2Animation() {
  gsap.from("#page2 #bottom h1 span", {
    y: 120,
    duration: 1,
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 50%",
      end: "top 10%",
      scrub: true,
    },
  });
}
page2Animation();
function page3animation() {
  gsap.from("#page3 #page3-top h4 , #page3 #page3-top h2 ", {
    y: 150,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 50%",
      end: "top -5%",
      scrub: true,
      duration: 2,
    },
  });
}
page3animation();
function page4animation() {
  gsap.from("#page4 h1 span", {
    y: 150,
    border: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 50%",
      end: "top 10%",
      scrub: true,
    },
  });
}
page4animation();
function page6animation() {
  gsap.from("#page6 h1 span", {
    y: 150,
    border: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top -10%",
      end: "top 5%",
      scrub: true,
    },
  });
}
page6animation();
var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var tl = gsap.timeline();
tl.from("#loader h3 span", {
  x: 60,
  delay: 0.3,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.to("#loader", {
  top: "-100%",
  duration: 0.1,
});
tl.from("nav1 h1 span", {
  y: 200,
  duration: 0.8,
  delay: -0.09,
  stagger: 0.1,
  opacity: 0,
});
function page9animation() {
  gsap.from("#page9-bottom h1 span", {
    y: -150,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      start: "top 40%",
      end: "top 10%",
      scrub: true,
    },
  });
}

page9animation();

var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 10,
});

function removeContinuousAnimation() {
  document.querySelector(".swiper-wrapper").style.animation = "";
}

swiper.on("touchStart", function () {
  removeContinuousAnimation();
});

swiper.on("touchEnd", function () {
  setContinuousAnimation();
});

// Start the continuous animation
setContinuousAnimation();

var main = document.querySelector("#main");
