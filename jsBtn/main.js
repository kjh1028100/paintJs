const sliderContainer = document.querySelector(".slider__container");
const leftBtn = document.querySelector(".js-leftBtn");
const rightBtn = document.querySelector(".js-rightBtn");
const upBtn = document.querySelector(".js-upBtn");
const downBtn = document.querySelector(".js-downBtn");

let count = 0;

const handleLeftBtnClick = () => {
  if (sliderContainer.children[count].id === "first") {
    count = sliderContainer.children.length - 1;
    sliderContainer.style.transform = `translateX(-${100 * count}vw)`;
  } else {
    if (count <= 0) return;
    count--;
    sliderContainer.style.transform = `translateX(-${100 * count}vw)`;
  }
};

const handleRightBtnClick = () => {
  if (sliderContainer.children[count].id === "last") {
    count = 0;
    sliderContainer.style.transform = `translateX(-${100 * count}vw)`;
  } else {
    if (count >= sliderContainer.children.length) return;
    count++;
    sliderContainer.style.transform = `translateX(-${100 * count}vw)`;
  }
};

leftBtn.addEventListener("click", handleLeftBtnClick);
rightBtn.addEventListener("click", handleRightBtnClick);
