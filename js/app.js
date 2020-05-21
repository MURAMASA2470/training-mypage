window.addEventListener('load', () => {

  const skillsWrapper = document.getElementById('js-skills-wrapper')

  const skillIconPath = './img/icon/'
  config.icando.forEach((ary) => {
    const skillsContainer = document.createElement('div')
          skillsContainer.setAttribute('class', 'skills-container')

    const skillTitle = document.createElement('h6')
          skillTitle.setAttribute('class', 'skills-title')

    const skillInnerTitle = document.createElement('span')
          skillInnerTitle.textContent = ary.title

    const skills = document.createElement('div')
          skills.setAttribute('class', 'skills')

    skillTitle.appendChild(skillInnerTitle)
    skillsContainer.appendChild(skillTitle)
    skillsContainer.appendChild(skills)

    ary.items.forEach((item) => {
      const skill = document.createElement('div')
            skill.setAttribute('class', 'skill')

      const skillIcon = document.createElement('div')
            skillIcon.setAttribute('class', 'skill-icon')

      const skillImg = document.createElement('img')
            skillImg.setAttribute('src', `${skillIconPath}${item}.png`)
            skillImg.setAttribute('alt', item)

      const skillLabel = document.createElement('div')
            skillLabel.setAttribute('class', 'skill-label')
            skillLabel.textContent = item

      skillIcon.appendChild(skillImg)
      skill.appendChild(skillIcon)
      skill.appendChild(skillLabel)
      skills.appendChild(skill)
    })
    skillsWrapper.appendChild(skillsContainer)
  })

})