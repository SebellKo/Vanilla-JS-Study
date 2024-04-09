import createItemTemplate from './createListItem.js';

const appendChild = (container, data) => {
  const listTemplate = data.reduce((acc, cur) => {
    const listItem = createItemTemplate(cur);
    acc += listItem;
    return acc;
  }, '');

  container.insertAdjacentHTML('beforeend', listTemplate);
};

export default appendChild;
