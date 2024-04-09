const canvas = document.querySelector('canvas');
const btn = document.querySelector('button');
const ctx = canvas.getContext('2d');

canvas.width = 550;
canvas.height = 700;
ctx.lineWidth = '5';
ctx.strokeStyle = '#000';

let isPainting = false;
let canvasBlob = 0;

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

btn.addEventListener('click', () => {
  canvas.toBlob((blob) => {
    const newImg = document.createElement('img');
    const url = URL.createObjectURL(blob);

    newImg.src = url;
    document.body.appendChild(newImg);
  });
});

const minute = document.getElementById('minute');
const second = document.getElementById('second');

let initialSecond = 59;

setTimeout(() => {
  minute.innerText = '00';
  second.innerText = initialSecond;
  const timer = setInterval(() => {
    initialSecond -= 1;
    if (initialSecond === 0) clearInterval(timer);
    if (initialSecond < 10) return (second.innerText = `0${initialSecond}`);
    second.innerText = initialSecond;
  }, 1000);
}, 1000);
