import setTimer from './modules/setTimer.js';

const INITIAL_SECOND = 59;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('#colorPallete li');
const pen = document.getElementById('pen');
const eraser = document.getElementById('eraser');

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

canvas.width = 550;
canvas.height = 700;
ctx.lineWidth = 3;
ctx.strokeStyle = '#000';

let isPainting = false;

canvas.addEventListener('mousedown', () => {
  isPainting = true;
});

canvas.addEventListener('mouseup', () => {
  isPainting = false;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
});

const minute = document.getElementById('minute');
const second = document.getElementById('second');
const imgArr = document.querySelectorAll('#playerList li img');
const answerInput = document.getElementById('answerInput');
const submitButton = document.getElementById('submitButton');
const answer = document.getElementById('answer');

const captureCanvas = async (target) => {
  const { timeOut } = await setTimer(minute, second, INITIAL_SECOND);
  if (timeOut) {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      target.src = url;
    });
  }
};

for (const imageTag of imgArr) {
  await captureCanvas(imageTag);
}

submitButton.addEventListener('click', () => {
  const playerAnswer = answerInput.value;
  answer.innerText = playerAnswer;
});

answerInput.removeAttribute('disabled');

const { timeOut } = await setTimer(minute, second, INITIAL_SECOND);

if (timeOut) prompt('게임이 종료됐습니다.');
