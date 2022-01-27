const sliderContainer = document.querySelector(".slider__container");
const leftBtn = document.querySelector(".js-leftBtn");
const rightBtn = document.querySelector(".js-rightBtn");

let leftClick = 0;
let rightClick = 0;

const handleLeftBtnClick = () => {
  if (leftClick < sliderContainer.children.length) {
    leftClick++;
    console.log(leftClick);
    switch (leftClick) {
      case 1:
        sliderContainer.style.transform = "translateX(-400vw)";
        break;
      case 2:
        sliderContainer.style.transform = "translateX(-300vw)";
        break;
      case 3:
        sliderContainer.style.transform = "translateX(-200vw)";
        break;
      case 4:
        sliderContainer.style.transform = "translateX(-100vw)";
        break;
      case 5:
        sliderContainer.style.transform = "translateX(0)";
        break;
    }
  } else {
    leftClick = 0;
  }
};

const handleRightBtnClick = () => {};

leftBtn.addEventListener("click", handleLeftBtnClick);
rightBtn.addEventListener("click", handleRightBtnClick);
