const setTimer = (minuteContainer, secondContainer, initialSecond) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      minuteContainer.innerText = '00';
      secondContainer.innerText = initialSecond;
      const timer = setInterval(() => {
        initialSecond -= 1;

        if (initialSecond === 0) {
          clearInterval(timer);
          resolve({ timeOut: true });
        }

        if (initialSecond < 10)
          return (secondContainer.innerText = `0${initialSecond}`);

        secondContainer.innerText = initialSecond;
      }, 1000);
    }, 1000);
  });
};

export default setTimer;
