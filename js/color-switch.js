const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-action="start"]');
const btnStopRef = document.querySelector('button[data-action="stop"]');

btnStartRef.addEventListener('click', colorSwitchHandler);
btnStopRef.addEventListener('click', interruptColorSwitchHandler)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

function colorSwitchHandler(event) {
    event.target.disabled = true;

    intervalId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000)
    return intervalId
};

function interruptColorSwitchHandler() {

    btnStartRef.disabled = false;
    clearInterval(intervalId);
}
