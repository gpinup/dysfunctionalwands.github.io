const BACKGROUND_COLOR = '#fcebcd';

const MAX_CIRCLE_DEG = 360;
const DEFAULT_ROTATION = 90;

const artistDataList = [{
    text: '<<',
    url: '/',
    img: '/assets/img/exit-thumbnail.jpg',
    radius: 0.5,
  },
  { img: '#project1-thumb', radius: 0.8 },
  { img: '#project2-thumb', radius: 0.8 },
  {
    text: 'Concept',
    url: '/crytic-room.html',
    img: '/assets/img/crytic-room.jpg',
    radius: 0.5,
  },
];

const setEvents = (element, url) => {
  const eventList = [
    { name: 'mousedown', scale: '1 1 1' },
    { name: 'mouseup', scale: '1.2 1.2 1.2' },
    { name: 'mouseenter', scale: '1.2 1.2 1.2' },
    { name: 'mouseleave', scale: '1 1 1' },
  ];

  eventList.forEach((event, i) => {
    element.setAttribute(`event-set__${i}`, `_event: ${event.name}; scale: ${event.scale}`);
  });

  element.setAttribute('set-image', `on: click; url: ${url}`);
};

const createImageEl = (radius, photo, url) => {
  const imageEl = document.createElement('a-entity');

  imageEl.classList.add('link');

  imageEl.setAttribute('geometry', `primitive: circle; radius: ${radius}`);
  imageEl.setAttribute('material', `shader: flat; src: ${photo}`);

  setEvents(imageEl, url);

  return imageEl;
};

const createTextEl = (text) => {
  const textEl = document.createElement('a-text');

  textEl.object3D.position.set(0, -1.1, 0);

  textEl.setAttribute('align', 'center');
  textEl.setAttribute('width', 5);
  textEl.setAttribute('color', '#222');
  textEl.setAttribute('value', text);

  return textEl;
};

AFRAME.registerComponent('artist-link-list', {
  init() {
    const el = this.el;

    el.object3D.position.set(-4.5, 0, -4);
    el.setAttribute('layout', 'type: line; margin: 3');

    Array.from(el.children).forEach((childNode, i) => {
      const currentData = artistDataList[i];
      const text = currentData.text || childNode.dataset.text;
      const url = currentData.url || childNode.dataset.url;

      childNode.appendChild(createImageEl(currentData.radius, currentData.img, url));
      childNode.appendChild(createTextEl(text));
    });
  },
});

AFRAME.registerComponent('artist-background', {
  init() {
    this.el.setAttribute('material', 'color', BACKGROUND_COLOR);
  },
});
