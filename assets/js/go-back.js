const BACKGROUND_COLOR = '#eee';
const DEFAULT_IMG = '/assets/img/exit-artist-thumbnail.jpg';

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

AFRAME.registerComponent('go-back', {
  init() {
    const el = this.el;

    el.object3D.rotation.y = THREE.Math.degToRad(45);
    el.object3D.position.set(-4, 0, -2);

    el.classList.add('link');
  
    el.setAttribute('geometry', 'primitive: circle; radius: 0.6');
    el.setAttribute('material', `shader: flat; src: ${el.dataset.src || DEFAULT_IMG}`);
  
    setEvents(el, el.dataset.url);
  },
});

AFRAME.registerComponent('artist-background', {
  init() {
    this.el.setAttribute('material', 'color', BACKGROUND_COLOR);
  },
});
