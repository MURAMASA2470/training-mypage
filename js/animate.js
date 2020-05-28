// ページが読み込まれたら実行
window.addEventListener('load', () => {
  document.querySelector('body').scrollTo(0,0)
  // 各セクションを取得
  const topMessageContainer = document.querySelector('.js-top-message-container')
  const topMessageContainer = document.querySelector('.js-static-message')
  const topMessage = document.querySelector('.js-message')
  const profileSection = document.querySelector('.js-profile')
  const hobbySection = document.querySelector('.js-hobby')
  const candoSection = document.querySelector('.js-cando')

  // アニメーション終了フラグ
  let isAnimated = {
    topMessage     : false,
    profileSection : false,
    hobbySection   : false,
    candoSection   : false
  }

  // アニメーション演出
  const animateStyle = {
    opacity: [0, 1]
  }

  // アニメーション設定
  const animateConfig = {
    duration: 2000,
    fill: 'forwards'
  }

  // ページがスクロールされたら実行
  window.addEventListener('scroll', () => {
    // ページの上部から何pxスクロールしたか
    const windowY = window.pageYOffset
    // 要素に何pxまで近ずいたらアニメーションを開始するか
    const viewPos = 800

    // プロフィール
    const profile = (() => {
      // 現在のスクロール位置から要素まであと何pxか
      const { height: profileH, top: profileT } = profileSection.getBoundingClientRect()
      // １度アニメーションが実行されたら2回目からは実行しない
      // 要素までViewPosの値分近ずいたらTrue
      if(!isAnimated.profileSection && profileT < viewPos) {
        // アニメーション実行
        profileSection.animate(animateStyle, animateConfig)
        // アニメーション終了フラグをTrueに
        isAnimated.profileSection = true
      }
    })()

    // 趣味特技
    const hobby = (() => {
      const { height: hobbyH, top: hobbyT } = hobbySection.getBoundingClientRect()
      if(!isAnimated.hobbySection && hobbyT < viewPos) {
        hobbySection.animate(animateStyle, animateConfig)
        isAnimated.hobbySection = true
      }
    })()

    // スキル
    const cando = (() => {
      const { height: candoH, top: candoT } = candoSection.getBoundingClientRect()
      if(!isAnimated.candoSection && candoT < viewPos) {
        candoSection.animate(animateStyle, animateConfig)
        isAnimated.candoSection = true
      }
    })()

  })

  // メイン画像メッセージのアニメーション
  const message = (() => {
    topMessageContainer.animate(animateStyle, animateConfig)
    topMessage.animate({
        transform: ['rotateX(0deg)', 'rotateX(90deg)']
      }, {
        duration: 1500,   // 再生時間
        fill: 'forwards', // アニメーション結果保持の有無
        delay: 3000       // 遅延秒数
      })
      topMessageContainer.animate({
          left: ['50%', '77%'],
          top: ['50%', '7%'],
          fontSize: ['128px', '76px']
        }, {
          duration: 2000,   // 再生時間
          fill: 'forwards', // アニメーション結果保持の有無
          delay: 6000       // 遅延秒数
        })
      isAnimated.topMessage = true
  })()
})