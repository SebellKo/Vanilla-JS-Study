import setTimer from './modules/setTimer.js';

const INITIAL_SECOND = 59;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 550;
canvas.height = 700;
ctx.lineWidth = '5';
ctx.strokeStyle = '#000';

let isPainting = false;

canvas.addEventListener('mousedown', () => {
  isPainting = true;
});

canvas.addEventListener('mouseup', () => {
  isPainting = false;
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
