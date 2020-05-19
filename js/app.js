const config = {
  icando: [
    {
      title: '言語',
      items: [
        'HTML5', 'CSS3', 'JavaScript', 'C', 'Csharp', 'Java', 'VB', 'PHP', 'Ruby', 'Python',
        'Node', 'Go', 'Kotlin', 'TypeScript', 'Sass', 'Less', 'Swift', 'Japanese'
      ]
    },
    {
      title: 'フレームワーク',
      items: [
        'jQuery', 'BootStrap', 'Laravel', 'Rails', 'Xamarin', 'dotNET', 'SpringBoot',
        'Vue', 'Nuxt', 'React', 'Express'
      ]
    },
    {
      title: 'データベース',
      items: [
        'MySQL', 'PostgreSQL', 'Oracle', 'SQLite', 'Redis', 'Firebase', 'Elasticsearch'
      ]
    },
    {
      title: 'OS',
      items: [
        'Windows', 'macOS', 'ubuntu', 'CentOS', 'elementaryOS', 'KaliLinux', 'openSUSE'
      ]
    },
    {
      title: 'その他ツール類',
      items: [
        'Git', 'SVN', 'Docker', 'Kubernetes', 'webpack', 'Jenkins', 'Redmine', 'AWS', 'Azure'
      ]
    }

  ]
}

window.onload = () => {

  const skillsWrapper = document.getElementById('js-skills-wrapper')

  const skillIconPath = './img/icon/'
  config.icando.forEach((ary) => {
    const skillsContainer = document.createElement('div')
          skillsContainer.setAttribute('class', 'skills-container')
    const skillTitle = document.createElement('h6')
          skillTitle.setAttribute('class', 'skills-title')
    const skillInnerTitle = document.createElement('span')
          skillInnerTitle.textContent = ary.title
          skillTitle.appendChild(skillInnerTitle)
    const skills = document.createElement('div')
          skills.setAttribute('class', 'skills')
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
            skillIcon.appendChild(skillImg)
      const skillLabel = document.createElement('div')
            skillLabel.setAttribute('class', 'skill-label')
            skillLabel.textContent = item
      skill.appendChild(skillIcon)
      skill.appendChild(skillLabel)

      skills.appendChild(skill)
    })
    skillsWrapper.appendChild(skillsContainer)
  })

}