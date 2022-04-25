const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

function debouncer(callback, limit) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, limit);
  };
}

function throttler(callback, limit) {
  let wating = false;

  return function () {
    if (!wating) {
      callback();
      wating = true;
      setTimeout(() => {
        wating = false;
      }, limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttler(() => {
    if (window.scrollY > 500) {
      !badgeEl.classList.contains("invisible") &&
        badgeEl.classList.add("invisible");
      toTopEl.classList.contains("hide") && toTopEl.classList.remove("hide");
    } else {
      badgeEl.classList.contains("invisible") &&
        badgeEl.classList.remove("invisible");
      !toTopEl.classList.contains("hide") && toTopEl.classList.add("hide");
    }
  }, 200)
);

toTopEl.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  setTimeout(() => {
    fadeEl.style.opacity = 1;
  }, 700 * (index + 1));
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 5000 },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
