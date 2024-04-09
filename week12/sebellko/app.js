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
