const MAX_CIRCLE_DEG = 360;
const DEFAULT_ROTATION = 90;

const artistList = [
  {
    name: 'Testi critici',
    url: '/crytic-room.html',
    photo: '/assets/img/crytic-room.jpg',
  },
  {
    name: 'Anna Tappari',
    url: '/rooms/Anna-Tappari.html',
    photo: '/assets/img/artists-thumbs/Anna-Tappari.jpg',
  },
  {
    name: 'Beatrice Matassi',
    url: '/rooms/Beatrice-Matassi.html',
    photo: '/assets/img/artists-thumbs/Beatrice-Matassi.jpg',
  },
  {
    name: 'Chiara Innocenti Sedili',
    url: '/rooms/Chiara-Innocenti-Sedili.html',
    photo: '/assets/img/artists-thumbs/Chiara-Innocenti-Sedili.jpg',
  },
  {
    name: 'Elisa Cocchi',
    url: '/rooms/Elisa-Cocchi.html',
    photo: '/assets/img/artists-thumbs/Elisa-Cocchi.jpg',
  },
  {
    name: 'Federica Amadii Barbagli',
    url: '/rooms/Federica-Amadii-Barbagli.html',
    photo: '/assets/img/artists-thumbs/Federica-Amadii-Barbagli.jpg',
  },
  {
    name: 'Giorgia Polverini',
    url: '/rooms/Giorgia-Polverini.html',
    photo: '/assets/img/artists-thumbs/Giorgia-Polverini.jpg',
  },
  {
    name: 'Giorgia Toselli',
    url: '/rooms/Giorgia-Toselli.html',
    photo: '/assets/img/artists-thumbs/Giorgia-Toselli.jpg',
  },
  {
    name: 'Maria Krimskaya',
    url: '/rooms/Maria-Krimskaya.html',
    photo: '/assets/img/artists-thumbs/Maria-Krimskaya.jpg',
  },
  {
    name: 'Martina Paganelli',
    url: '/rooms/Martina-Paganelli.html',
    photo: '/assets/img/artists-thumbs/Martina-Paganelli.jpg',
  },
  {
    name: 'Melissa Ferretti',
    url: '/rooms/Melissa-Ferretti.html',
    photo: '/assets/img/artists-thumbs/Melissa-Ferretti.jpg',
  },
  {
    name: 'Michela Albano',
    url: '/rooms/Michela-Albano.html',
    photo: '/assets/img/artists-thumbs/Michela-Albano.jpg',
  },
  {
    name: 'Sara Magni',
    url: '/rooms/Sara-Magni.html',
    photo: '/assets/img/artists-thumbs/Sara-Magni.jpg',
  },
  {
    name: 'Sofia Merlin',
    url: '/rooms/Sofia-Merlin.html',
    photo: '/assets/img/artists-thumbs/Sofia-Merlin.jpg',
  },
  {
    name: 'Valeria Monti',
    url: '/rooms/Valeria-Monti.html',
    photo: '/assets/img/artists-thumbs/Valeria-Monti.jpg',
  },
  {
    name: 'Valeria Scardino',
    url: '/rooms/Valeria-Scardino.html',
    photo: '/assets/img/artists-thumbs/Valeria-Scardino.jpg',
  },
  {
    name: 'Ylenia Joiner Santurio',
    url: '/rooms/Ylenia-Joiner-Santurio.html',
    photo: '/assets/img/artists-thumbs/Ylenia-Joiner-Santurio.jpg',
  },
  {
    name: 'Zaira Fiallo',
    url: '/rooms/Zaira-Fiallo.html',
    photo: '/assets/img/artists-thumbs/Zaira-Fiallo.jpg',
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

  textEl.object3D.position.set(0, -0.9, 0);

  textEl.setAttribute('align', 'center');
  textEl.setAttribute('width', 4);
  textEl.setAttribute('value', text);

  return textEl;
};

const createArtistBlock = (elData, index, step) => {
  const newElement = document.createElement('a-entity');
  const radius = index === 0 ? 0.3 : 0.6;

  newElement.object3D.rotation.y = THREE.Math.degToRad(index * step - DEFAULT_ROTATION);
  newElement.dataset.url = elData.url;

  newElement.appendChild(createImageEl(radius, elData.photo, elData.url));
  newElement.appendChild(createTextEl(elData.name));

  return newElement;
};

AFRAME.registerComponent('link-list', {
  init() {
    this.setStyles();
    this.createArtists();
  },

  setStyles() {
    const el = this.el;

    el.setAttribute('layout', 'type: circle; plane: xz; radius: 5;');

    el.object3D.rotation.set(
      THREE.Math.degToRad(0),
      THREE.Math.degToRad(80),
      THREE.Math.degToRad(0),
    );
  },

  createArtists() {
    const el = this.el;
    const step = -MAX_CIRCLE_DEG / artistList.length;

    artistList.forEach((elData, i) => {
      el.appendChild(createArtistBlock(elData, i, step));
    });
  },
});
