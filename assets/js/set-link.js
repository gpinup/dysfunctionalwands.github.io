AFRAME.registerComponent('set-link', {
  init() {
    const el = this.el;

    el.object3D.rotation.y = THREE.Math.degToRad(15);
    el.object3D.position.set(-2.5, 2, -7);

    el.classList.add('link');
  
    el.setAttribute('geometry', 'primitive: circle; radius: 0.4');
    el.setAttribute('material', `shader: flat; src: ${el.dataset.src || DEFAULT_IMG}`);
  
    setEvents(el, el.dataset.url);
  },
});
