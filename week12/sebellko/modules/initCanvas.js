const initCanvas = (canvas) => {
  const ctx = canvas.getContext('2d');
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

  return ctx;
};

export default initCanvas;
