import appendChild from './modules/appendChild.js';

const listContainer = document.getElementById('listContainer');

const { data } = await axios.get('./data.json');

appendChild(listContainer, data);

const visions = document.querySelectorAll('#vision');
const goals = document.querySelectorAll('#goal');
const categoryButtons = document.querySelectorAll('#category li');
const listItems = document.querySelectorAll('#listContainer li');

visions.forEach((vision) => (vision.hidden = true));
goals.forEach((goal) => (goal.hidden = true));

categoryButtons.forEach((button) => {
  const children = [...button.parentElement.nextElementSibling.children];

  button.addEventListener('click', (event) => {
    const id = event.target.id.replace('Button', '');
    children.forEach((content) => {
      if (content.id === id) return (content.hidden = false);
      content.hidden = true;
    });
  });
});

let dragLocation = 0;
let dropLocation = 0;
let dragTarget = 0;

listItems.forEach((listItem) => {
  listItem.addEventListener('dragstart', (event) => {
    dragLocation = event.target.nextElementSibling;
    dragTarget = event.target;
  });

  listItem.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  listItem.addEventListener('drop', (event) => {
    event.preventDefault();
    const dropTarget = event.target.closest('li');
    dropLocation = dropTarget.nextElementSibling;
    listContainer.insertBefore(dropTarget, dragLocation);
    listContainer.insertBefore(dragTarget, dropLocation);
  });
});
