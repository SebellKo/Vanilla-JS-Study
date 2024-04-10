import setTimer from './modules/setTimer.js';
import initCanvas from './modules/initCanvas.js';
import captureCanvasByTimeOut from './modules/captureByTimeOut.js';

const INITIAL_SECOND = 59;

const canvas = document.querySelector('canvas');
const colors = document.querySelectorAll('#colorPallete li');
const pen = document.getElementById('pen');
const eraser = document.getElementById('eraser');

const ctx = initCanvas(canvas);

pen.addEventListener('click', () => {
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
});
eraser.addEventListener('click', () => {
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 15;
});

colors.forEach((color) => {
  color.addEventListener('click', (event) => {
    ctx.strokeStyle = event.target.classList.value;
  });
});

const minute = document.getElementById('minute');
const second = document.getElementById('second');
const imgArr = document.querySelectorAll('#playerList li img');
const answerInput = document.getElementById('answerInput');
const submitButton = document.getElementById('submitButton');
const answer = document.getElementById('answer');

for (const imageTag of imgArr) {
  await captureCanvasByTimeOut(imageTag, INITIAL_SECOND);
}

submitButton.addEventListener('click', () => {
  const playerAnswer = answerInput.value;
  answer.innerText = playerAnswer;
});

const { timeOut } = await setTimer(minute, second, INITIAL_SECOND);

if (timeOut) prompt('게임이 종료됐습니다.');
