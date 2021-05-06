const startPlaying = () => {
  document.querySelector('#artist-video').play();
};

AFRAME.registerComponent('video-player', {
  init() {
    document.body.addEventListener('click', startPlaying);
    document.body.addEventListener('touchstart', startPlaying);
  },
});
