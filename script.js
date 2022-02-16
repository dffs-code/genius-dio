let order = [];
let clickedOrder = [];
let score = 0;

/**
 * 0 == verde
 * 1 == vermelho
 * 2 == amarelo
 * 3 == azul
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    const elementColor = createColorElement(order[i]);
    ligthColor(elementColor, Number(i) + 1);
  }
}

let ligthColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250)

  setTimeout(() => {
    element.classList.remove('selected');
  }, number)
}

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Próximo nível`);
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250)

}

let createColorElement = (color) => {
  if(color == 0) return green;
  if(color == 1) return red;
  if(color == 2) return yellow;
  if(color == 3) return blue;
}

let nextLevel = () => {
  score++;
  shuffleOrder();
}

let gameOver = () => {
  alert(`Você perdeu!\nSua pontuação foi de: ${score}\nPara reiniciar, clique em Ok`);

  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert(`Bem Vindo ao Genesis! Iniciando novo jogo.`);
  score = 0;

  nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();