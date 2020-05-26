// ページが読み込まれたら実行
window.addEventListener('load', () => {
  // 各セクションを取得
  const profileSection = document.querySelector('.js-profile')
  const hobbySection = document.querySelector('.js-hobby')
  const candoSection = document.querySelector('.js-cando')

  // アニメーション終了フラグ
  let isAnimated = {
    profileSection : false,
    hobbySection   : false,
    candoSection   : false
  }

  // 初期段階では要素を透明に
  // CSSで書こうか迷ったがJSが無効だと表示されなくなる為，JSにて記述
  profileSection.setAttribute('style', 'opacity: 0')
  hobbySection.setAttribute('style', 'opacity: 0')
  candoSection.setAttribute('style', 'opacity: 0')

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

    // 即時関数を使っている為，関数を変数に格納する必要性は処理上は無し
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
})