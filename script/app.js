let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo('#Robot', {
    y: 2.5,
  }, {
    y: -2.5,
  })
  .to('#Shadow', {
    scale: 0.75,
    opacity: 0.075,
  },
    '<',
  )

var btnPause = document.querySelector('.js-pause');
var btnFast = document.querySelector('.js-fast');
var btnNormal = document.querySelector('.js-normal');
var btnSlow = document.querySelector('.js-slow');

btnPause.onclick = function () {
  tl.paused(!tl.paused());
  btnPause.classList.toggle('is-paused')
};

btnFast.onclick = () => tl.timeScale(2)
btnNormal.onclick = () => tl.timeScale(1)
btnSlow.onclick = () => tl.timeScale(.5)
