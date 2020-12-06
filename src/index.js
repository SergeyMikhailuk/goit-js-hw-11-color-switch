import './styles.css';
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
startBtnRef.addEventListener('click', changeColor);
stopBtnRef.addEventListener('click', stopChangeColor);
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null;
function changeColor() {
  intervalId = setInterval(() => {
    console.log('change color');
    startBtnRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

function stopChangeColor() {
  clearInterval(intervalId);
}
