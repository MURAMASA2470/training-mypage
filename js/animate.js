window.addEventListener('load', () => {
  const profileSection = document.querySelector('.js-profile')
  const hobbySection = document.querySelector('.js-hobby')
  const candoSection = document.querySelector('.js-cando')

  let isAnimated = {
    profileSection : false,
    hobbySection   : false,
    candoSection   : false
  }

  profileSection.setAttribute('style', 'opacity: 0')
  hobbySection.setAttribute('style', 'opacity: 0')
  candoSection.setAttribute('style', 'opacity: 0')

  const animateStyle = {
    opacity: [0, 1]
  }

  const animateConfig = {
    duration: 2000,
    fill: 'forwards'
  }

  window.addEventListener('scroll', () => {
    const windowY = window.pageYOffset
    const viewPos = 800

    const profile = (() => {
      const { height: profileH, top: profileT } = profileSection.getBoundingClientRect()
      if(!isAnimated.profileSection && profileT < viewPos) {
        profileSection.animate(animateStyle, animateConfig)
        isAnimated.profileSection = true
      }
    })()

    const hobby = (() => {
      const { height: hobbyH, top: hobbyT } = hobbySection.getBoundingClientRect()
      if(!isAnimated.hobbySection && hobbyT < viewPos) {
        hobbySection.animate(animateStyle, animateConfig)
        isAnimated.hobbySection = true
      }
    })()

    const cando = (() => {
      const { height: candoH, top: candoT } = candoSection.getBoundingClientRect()
      if(!isAnimated.candoSection && candoT < viewPos) {
        candoSection.animate(animateStyle, animateConfig)
        isAnimated.candoSection = true
      }
    })()

  })
})