// connect popup

const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const connectPopup = document.getElementById("connectPopup");

const connectInputs = document.querySelectorAll(".connect__input");

const checkboxSpan = document.getElementById("checkbox__span");
const checkboxStatus = document.getElementById("checkbox_status");

openPopup.addEventListener("click", function (e) {
  if (checkboxStatus.checked === false) {
    checkboxSpan.style.color = "red";
  } else {
    checkboxSpan.style.color = "#fff";
  }

  for (let connectInput of connectInputs) {
    if (connectInput.value === "") {
      for (let elem of connectInputs) {
        if (elem.value === "") {
          elem.style.border = "1px solid red";
          elem.style.boxShadow = "0 0 5px red";
        } else {
          elem.style.border = "unset";
          elem.style.boxShadow = "unset";
        }
      }
      return;
    }
  }

  for (let elem of connectInputs) {
    elem.style.border = "unset";
    elem.style.boxShadow = "unset";
  }

  e.preventDefault();
  connectPopup.classList.add("showPopup-animation");
  connectPopup.classList.remove("hidePopup-animation");
  document.body.style.overflow = "hidden";
});

closePopup.addEventListener("click", function (e) {
  e.preventDefault();
  connectPopup.classList.remove("showPopup-animation");
  connectPopup.classList.add("hidePopup-animation");
  document.body.style.overflow = "visible";
});

// nav mobile

const burgerButton = document.getElementById("burgerButton");
const headerNavMobile = document.querySelector(".header__nav_mobile");
const overlay = document.querySelector(".overlay");

burgerButton.addEventListener("click", function () {
  if (!overlay.classList.contains("show__nav_modile")) {
    headerNavMobile.classList.add("show__nav_modile");
    overlay.classList.add("show__nav_modile");
    headerNavMobile.classList.remove("hide__nav_modile");
    overlay.classList.remove("hide__nav_modile");
    document.body.style.overflow = "hidden";
  } else {
    headerNavMobile.classList.add("hide__nav_modile");
    overlay.classList.add("hide__nav_modile");
    headerNavMobile.classList.remove("show__nav_modile");
    overlay.classList.remove("show__nav_modile");
    document.body.style.overflow = "visible";
  }
});

// copyright

const copyrightYear = document.getElementById("copyrightYear");
let date = new Date();
copyrightYear.textContent = date.getFullYear();

//scroll to element

function scrollToElem(elemId) {
  const element = document.getElementById(elemId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  if (window.outerWidth < 1000) {
    document.body.style.overflow = "visible";
    headerNavMobile.classList.add("hide__nav_modile");
    headerNavMobile.classList.remove("show__nav_modile");
    overlay.classList.add("hide__nav_modile");
    overlay.classList.remove("show__nav_modile");
    document.getElementById("burger-checkbox").checked =
      !document.getElementById("burger-checkbox").checked;
  }
}

// init swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    630: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

// jsap

const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.fromTo(
  ".hero__title",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
  }
).fromTo(
  ".hero__list li",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.4,
  }
);

gsap.to(".hero__title", {
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    scrub: true,
  },
  xPercent: -100,
});

gsap.to(".hero__list li", {
  scrollTrigger: {
    trigger: ".header",
    start: "100px top",
    scrub: true,
  },
  xPercent: -200,
  stagger: 0.1,
});

gsap.fromTo(
  ".info__subtitle",
  { opacity: 0, y: 250 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".header",
      start: "60% center",
      end: "110% center",
      scrub: true,
    },
  }
);

const titles = document.querySelectorAll(".default__title");

titles.forEach((title) => {
  gsap.fromTo(
    title,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title.closest("section"),
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    }
  );
});

const servicesElems = document.querySelectorAll(".services__elem");

servicesElems.forEach((servicesElem) => {
  gsap.fromTo(
    servicesElem,
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: servicesElem,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    }
  );
});

const approachElems = document.querySelectorAll(".approach__elem");

approachElems.forEach((approachElem) => {
  gsap.fromTo(
    approachElem,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".services",
        start: "bottom center",
        end: "120% center",
        scrub: true,
      },
    }
  );
});

const caseElems = document.querySelectorAll(".case__elem");

caseElems.forEach((caseElem) => {
  gsap.fromTo(
    caseElem,
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: caseElem,
        start: "-170% center",
        end: "-170%",
        scrub: true,
      },
    }
  );
});

const swiperSlidesBlog = document.querySelectorAll(".swiper-slide_blog");

swiperSlidesBlog.forEach((swiperSlideBlog) => {
  gsap.fromTo(
    swiperSlideBlog,
    {
      x: 300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".blog",
        start: "top center",
        end: "40% center",
        scrub: true,
      },
    }
  );
});

connectInputs.forEach((connectInput) => {
  gsap.fromTo(
    connectInput,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: connectInput,
        start: "-180% center",
        end: "40% center",
      },
    }
  );
});

const connectBlocks = document.querySelectorAll(".connect_blocks");

connectBlocks.forEach((connectBlock) => {
  gsap.fromTo(
    connectBlock,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".connect__inputs",
        start: "70% center",
        end: "bottom center",
      },
    }
  );
});

gsap.fromTo(
  ".footer",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top bottom',
      end: '90% bottom',
      scrub: true,
    },
  }
);
