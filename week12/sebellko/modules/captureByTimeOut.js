import setTimer from './setTimer.js';

const captureCanvasByTimeOut = async (target, time) => {
  const { timeOut } = await setTimer(minute, second, time);
  if (timeOut) {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      target.src = url;
    });
  }
};

export default captureCanvasByTimeOut;
