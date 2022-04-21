function init() {
  const images = document.querySelectorAll(".hero_img");

  images.forEach((img, i) => (img.src = `./images/hero${i + 1}.png`));
}

init();
