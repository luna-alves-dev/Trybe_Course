const colorPalette = document.querySelector('#color-palette');
const color = document.querySelectorAll('.color');

const pixelBoard = document.querySelector('#pixel-board');

// 7
colorPalette.addEventListener('click', (event) => {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }

  if (event.target.classList.contains('color')) {
    event.target.classList.add('selected');
  }
});

//8
pixelBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const selected = document.querySelector('.selected');
    const selectedColor = getComputedStyle(selected).backgroundColor; //https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    const pixel = event.target;                                      //https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
    pixel.style.backgroundColor = selectedColor;
  }
});

//9
const clearBoardButton = document.querySelector('#clear-board');

clearBoardButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

//10-11
function boardDesign(input) {

  pixelBoard.innerHTML = '';
  for (let i = 0; i < input; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let ind = 0; ind < input; ind += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

const generateBoardButton = document.querySelector('#generate-board');

generateBoardButton.addEventListener('click', () => {
  const boardSize = document.querySelector('#board-size');
  let input = boardSize.value;
  if (input === '') { alert('Board inválido!'); } //https://www.devmedia.com.br/alert-em-javascript/37208
  if (input < 5) {
    input = 5;
    boardSize.value = 5;
  }
  if (input > 50) {
    input = 50;
    boardSize.value = 50;
  }
  boardDesign(input);
});

//12
for (let i = 1; i < color.length; i += 1) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const r = Math.random() * 254;
  const g = Math.random() * 254;
  const b = Math.random() * 254;
  color[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


// Placeholder https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown

