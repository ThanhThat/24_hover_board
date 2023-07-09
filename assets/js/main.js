const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hoverBoardElem = $("#hover-board");

hoverBoardElem.addEventListener("mouseover", function (e) {
  setColor(e);
});

function setColor(e) {
  const square = e.target.closest(".square");

  if (square) {
    const color = randomColor();

    square.style.cssText = `
        background-color: ${color};
        box-shadow: 0 0 10px ${color}, 0 0 100px ${color};
      `;

    square.addEventListener("mouseout", removeColor);
  }
}

function removeColor() {
  setTimeout(() => {
    this.style.cssText = "";
  }, 1000);
}

function randomColor() {
  const textRandom = "0123456789ABCDEF";
  const length = 6;
  let colorRandom = "#";
  for (let i = 0; i < 6; i++) {
    const position = Math.trunc(Math.random() * 16);
    colorRandom += textRandom[position];
  }

  return colorRandom;
}
