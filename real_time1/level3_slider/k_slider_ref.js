function kSlider(target, option) {
  const toBeLoaded = document.querySelectorAll(`${target} img`);

  if (toBeLoaded.length === 0) {
    throw new Error(`Can't find ${target} Node`);
  }

  let loadedImages = 0;
  toBeLoaded.forEach((item) => {
    item.onload = () => {
      loadedImages += 1;
      if (loadedImages === toBeLoaded.length) {
        init(target, option);
      }
    };
  });
} // 로드 준비
function setOption(option) {
  function exception(prop, value) {
    switch (prop) {
      case "speed":
        if (value > 0) break;
      case "direction":
        if (value === "horizontal" || value === "vertical") break;
      default:
        throw new Error(`Can't use ${value} for ${prop}`);
    }
  }

  // 항목 점검
  let OPTION = {
    speed: 1000,
    direction: "horizontal",
  }; // default value

  for (let prop in option) {
    if (prop in OPTION) {
      // 값 점검
      exception(prop, option[prop]);
      OPTION[prop] = option[prop];
    } else {
      throw new Error(`Can't Use ${prop} for Option`);
    }
  }

  return Object.freeze(OPTION);
} // 옵션 준비

function setNodes(target) {
  const slider = document.querySelector(target); // 주인공찾고
  console.dir(slider);
  const kindWrap = document.createElement("div"); // 만들고
  const kindSlider = document.createElement("div"); // 만들고
  slider.classList.add("k_list"); // 셋팅하고
  kindWrap.className = "kind_wrap"; // 셋팅하고
  kindSlider.className = "kind_slider"; // 셋팅하고
  slider.parentNode.insertBefore(kindWrap, slider); // 붙이고
  kindWrap.appendChild(kindSlider); // 붙이고
  kindSlider.appendChild(slider); // 붙이고
  const slideItems = slider.children;
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].className = "k_item";
  }
  const cloneA = slideItems[0].cloneNode(true);
  const cloneC = slideItems[slideItems.length - 1].cloneNode(true);
  slider.insertBefore(cloneC, slideItems[0]);
  slider.appendChild(cloneA);
  const moveButton = document.createElement("div");
  const prevA = document.createElement("a");
  const nextA = document.createElement("a");
  moveButton.className = "arrow";
  prevA.className = "prev";
  nextA.className = "next";
  prevA.href = "";
  nextA.href = "";
  prevA.textContent = "이전";
  nextA.textContent = "다음";
  moveButton.appendChild(prevA);
  moveButton.appendChild(nextA);
  kindWrap.appendChild(moveButton);
}

function setSliding(target, OPTION) {
  // 주요 변수
  let moveDist = 0;
  let currentNum = 1;

  // 클론 포함 셋팅
  const slider = document.querySelector(target);
  const slideCloneItems = slider.querySelectorAll(".k_item");
  const moveButton = document.querySelector(".arrow");

  // 클론 포함 너비 셋팅
  const liWidth = slideCloneItems[0].clientWidth;
  const sliderWidth = liWidth * slideCloneItems.length;
  slider.style.width = `${sliderWidth}px`;

  // 처음 위치 잡기
  moveDist = -liWidth;
  slider.style.left = `${moveDist}px`;
  const POS = { moveDist, liWidth, currentNum };

  // 이벤트 리스터 설정
  moveButton.addEventListener("click", (e) => {
    sliding(e, OPTION, target, POS);
  });
}

function sliding(e, OPTION, target, POS) {
  e.preventDefault();
  console.log(e.target.className);
  const slider = document.querySelector(target);
  const slideCloneItems = slider.querySelectorAll(".k_item");
  if (e.target.className === "next") {
    // 다음이 눌렸을때
    move(-1);
    if (POS.currentNum === slideCloneItems.length - 1) {
      // 마지막이면
      setTimeout(() => {
        slider.style.transition = "none"; // 애니끄고
        POS.moveDist = -POS.liWidth; // 진짜A의 값으로 만들고
        slider.style.left = `${POS.moveDist}px`; //진짜A의 위치로 보내고
        POS.currentNum = 1; // 현재번호 업데이트
      }, OPTION.speed);
    }
  } else {
    // 이전이 눌렸을때
    move(1);
    if (POS.currentNum === 0) {
      setTimeout(() => {
        slider.style.transition = "none";
        POS.moveDist = -POS.liWidth * (slideCloneItems.length - 2);
        slider.style.left = `${POS.moveDist}px`;
        POS.currentNum = slideCloneItems.length - 2;
      }, OPTION.speed);
    }
  }

  function move(direction) {
    // 이동 <-   ->

    POS.currentNum += -1 * direction;
    POS.moveDist += POS.liWidth * direction;
    slider.style.left = `${POS.moveDist}px`;
    slider.style.transition = `all ${OPTION.speed}ms ease`;
  }
}

function init(target, option) {
  const OPTION = setOption(option);
  setNodes(target);
  setSliding(target, OPTION);
}
