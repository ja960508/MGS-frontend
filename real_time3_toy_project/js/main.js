import { fetchData, render } from "./fetch";

let draggable = false;
let sliding = false;

function randomColorGenerator() {
  return `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
}

function init() {
  const accounts = document.querySelectorAll(".account");
  const expenseManagement = document.querySelector(".expense__management");
  const transfer = document.querySelector(".transfer");

  accounts.forEach((account) => {
    const inputEl = account.querySelector(".account__bar");
    const chartIcon = account.querySelector(".chart");
    const transferBtn = account.querySelector(".transfer__btn");

    const randomColor = randomColorGenerator();
    inputEl.style.background = `linear-gradient(to right, ${randomColor} 50%, #C4C4C4 50%)`;
    inputRangeEventSetter(inputEl, randomColor);
    shutterEventSetter(account);
    chartIcon.addEventListener("click", () => {
      expenseManagement.style.height = `100vh`;
    });
    transferBtn.addEventListener("click", () => {
      transfer.style.height = `100vh`;
    });
  });

  sliderEventSetter();
}

function inputRangeEventSetter(element, color) {
  element.addEventListener("change", (e) => {
    // inputEl.style.background = `linear-gradient(to left, #c4c4c4 ${
    //   100 - Number(e.target.value)
    // }%, #ffdb4c ${e.target.value}%)`;
    if (e.target.value < 50) {
      element.style.background = `linear-gradient(to left, #c4c4c4 ${
        100 - Number(e.target.value)
      }%, ${color} ${e.target.value}%)`;
    } else {
      element.style.background = `linear-gradient(to right, ${color} ${
        e.target.value
      }%, #c4c4c4 ${100 - Number(e.target.value)}%)`;
    }
  });
}

function shutterEventSetter(account) {
  const shutter = account.querySelector(".shutter");
  const logListEl = account.querySelector(".account__log ol");
  const wrapper = document.querySelector(".wrapper");
  let currentY;
  let currentHeight;

  const setTargetPosition = (data) => {
    if (data > 110) {
      logListEl.style.height = `454px`;
    } else {
      logListEl.style.height = `184px`;
    }
  };

  shutter.addEventListener("mousedown", (e) => {
    if (sliding) return;
    draggable = true;
    currentY = e.clientY;
    currentHeight = window.getComputedStyle(logListEl).height.slice(0, -2);
  });

  wrapper.addEventListener("mousemove", (e) => {
    if (sliding) return;
    if (!draggable) {
      return;
    }

    if (e.clientY < 124) {
      return;
    }
    if (e.clientY > 333) {
      return;
    }

    let movePoint = Math.abs(currentY - e.clientY);

    if (currentY <= e.clientY) {
      logListEl.style.height = `${Number(currentHeight) - Number(movePoint)}px`;
    } else {
      logListEl.style.height = `${Number(currentHeight) + Number(movePoint)}px`;
    }
  });

  wrapper.addEventListener("mouseup", (e) => {
    if (sliding) return;
    draggable = false;

    setTargetPosition(currentY - e.clientY);
  });
}

function sliderEventSetter() {
  const slider = document.querySelector(".slider");
  const wrapperWidth = Number(
    window
      .getComputedStyle(document.querySelector(".wrapper"))
      .width.slice(0, -2)
  );
  const totalSlide = document.querySelectorAll(".account").length;
  let currentSlide = 0;
  let currentX;

  slider.addEventListener("mousedown", (e) => {
    slider.style.transition = ``;
    if (draggable) return;

    currentX = e.clientX;
    sliding = true;
  });

  document.addEventListener("mousemove", (e) => {
    if (draggable) return;

    if (!sliding) {
      return;
    }

    let movePoint = currentX - e.clientX;

    if (currentSlide === 0 && movePoint < 0) return;
    if (currentSlide + 1 >= totalSlide && movePoint > 0) return;

    slider.style.transform = `translateX(-${
      currentSlide * wrapperWidth + movePoint
    }px)`;
  });

  document.addEventListener("mouseup", (e) => {
    if (draggable) return;
    sliding = false;

    let movePoint = currentX - e.clientX;

    if (currentSlide === 0 && movePoint < 0) return;
    if (currentSlide + 1 >= totalSlide && movePoint > 0) return;

    if (movePoint > 160) {
      currentSlide++;
    } else if (movePoint < -160) {
      currentSlide--;
    }

    slider.style.transition = `transform 0.4s`;
    slider.style.transform = `translateX(-${currentSlide * wrapperWidth}px)`;
  });
}

fetchData()
  .then((res) => render(res))
  .then(() => init());
