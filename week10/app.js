const listWrapper = document.getElementById('listWrapper');

const lists = [...listWrapper.children];

const eventFn = (event, type) => {
  const locationName = event.target.children[0].innerText;
  const location = document.getElementById(`${locationName}`);
  if (type === 'mouseenter') location.style.opacity = 1;
  if (type === 'mouseleave') location.style.opacity = 0;
};

lists.forEach((list) => {
  list.addEventListener('mouseenter', (event) => eventFn(event, 'mouseenter'));
  list.addEventListener('mouseleave', (event) => eventFn(event, 'mouseleave'));
});
