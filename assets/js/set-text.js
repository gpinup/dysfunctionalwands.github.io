AFRAME.registerComponent('set-text', {
  schema: {
    on: { type: 'string' },
    target: { type: 'selector' },
    url: { type: 'string' },
    dur: { type: 'number', default: 300 },
  },

  init() {
    const data = this.data;
    const el = this.el;
    const value = document.querySelector(el.getAttribute('value')).innerHTML;

    if (value) {
      el.setAttribute('value', value);
    }
  },
});
