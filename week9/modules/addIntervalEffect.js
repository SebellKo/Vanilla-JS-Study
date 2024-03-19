import createRandomNumber from '../utils/createRandomNumber.js';

const addIntervalEffect = (effectTarget, items) => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      effectTarget.innerText = items[createRandomNumber(0, items.length - 1)];
    }, 80);
    setTimeout(() => {
      clearInterval(interval);
      resolve();
    }, 1500);
  });
};

export default addIntervalEffect;
