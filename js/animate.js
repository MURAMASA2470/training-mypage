window.addEventListener('load', () => {
  const hobbySection = document.querySelector('.js-hobby')

  let isAnimated = {
    hobbySection: false
  }

  hobbySection.setAttribute('style', 'opacity: 0')

  window.addEventListener('scroll', () => {
    const hobbyY = hobbySection.getBoundingClientRect().top + 300
    const windowY = window.pageYOffset

    if(!isAnimated.hobbySection && hobbyY < windowY) {
      hobbySection.animate({
        opacity: [0, 1]
      }, {
        duration: 2000,
        fill: 'forwards'
      })
      isAnimated.hobbySection = true
    }

  })
})