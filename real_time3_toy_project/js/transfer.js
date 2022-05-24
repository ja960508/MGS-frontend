const transfer = document.querySelector(".transfer");

const closeBtn = transfer.querySelector(".btn__close");
closeBtn.addEventListener("click", () => {
  transfer.style.height = 0;
});

function setMainHeight() {
  const wrapperHeight = Number(
    window
      .getComputedStyle(document.querySelector(".wrapper"))
      .height.slice(0, -2)
  );
  const header = Number(
    window
      .getComputedStyle(transfer.querySelector(".header"))
      .height.slice(0, -2)
  );
  const statusbar = Number(
    window
      .getComputedStyle(transfer.querySelector(".statusbar"))
      .height.slice(0, -2)
  );
  const navbar = Number(
    window
      .getComputedStyle(transfer.querySelector(".nav__bar"))
      .height.slice(0, -2)
  );

  const main = transfer.querySelector(".main");

  main.style.height = `${wrapperHeight - header - statusbar - navbar}px`;
}

setMainHeight();
