// connect popup

const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const connectPopup = document.getElementById("connectPopup");

openPopup.addEventListener("click", function (e) {
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
