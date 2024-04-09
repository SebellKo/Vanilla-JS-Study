const createItemTemplate = (data) => {
  const template = `<li draggable="true">
    <div class="icon_wrapper">
      <img draggable='false' src="./assets/icon.svg" alt="drag&drop" />
    </div>
    <div class="contents">
      <img draggable='false' src=${data.src} alt=${data.src} />
      <div class="detail">
        <ul id='category' class="category">
          <li id='historyButton'>History</li>
          <li id='visionButton'>Vision</li>
          <li id='goalButton'>Goals</li>
        </ul>
        <div class="description">
          <div id="history">
            <h3>History</h3>
            <p>
              ${data.history}
            </p>
          </div>
          <div id="vision">
            <h3>Vision</h3>
            <p>
              ${data.vision}
            </p>
          </div>
          <div id="goal">
            <h3>Goals</h3>
            <p>
              ${data.goals}
            </p>
          </div>
        </div>
      </div>
    </div>
  </li>`;
  return template;
};

export default createItemTemplate;
