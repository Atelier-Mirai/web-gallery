/*=====================================================================
  ファッションサイト - メインスクリプト
=====================================================================*/

(() => {
  'use strict'

  /* ローディング画面 */
  const initSplash = () => {
    const splash = document.getElementById('splash')
    if (!splash) return

    setTimeout(() => {
      splash.style.opacity = '0'
      document.body.classList.add('appear')
      setTimeout(() => {
        splash.style.display = 'none'
        initSplitScroll()
      }, 800)
    }, 3500)
  }

  /* 分割スクロール（左右すれ違い） */
  const initSplitScroll = () => {
    const scrollWrapper = document.getElementById('scroll-wrapper')
    const leftContent = document.getElementById('left-content')
    const rightContent = document.getElementById('right-content')
    const lastHero = document.querySelector('.js-last-hero')

    if (!scrollWrapper || !leftContent || !rightContent) return

    // スクロール可能な最大量
    const maxScroll = scrollWrapper.offsetHeight - window.innerHeight
    // コンテンツの移動可能な最大量
    const contentHeight = leftContent.offsetHeight
    const maxMovement = contentHeight - window.innerHeight

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollProgress = scrollPosition / maxScroll

      // 左側: 通常方向（上へ移動）
      const leftTranslateY = -scrollProgress * maxMovement
      leftContent.style.transform = `translateY(${leftTranslateY}px)`

      // 右側: 逆方向（下へ移動）
      const rightTranslateY = scrollProgress * maxMovement - maxMovement
      rightContent.style.transform = `translateY(${rightTranslateY}px)`

      // 最後のヒーローセクションは 90% 以降でフェードイン
      if (lastHero) {
        if (scrollProgress >= 0.9) {
          lastHero.classList.add('is-visible')
        } else {
          lastHero.classList.remove('is-visible')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // 初期位置を設定
    handleScroll()
  }

  /* パーティクル生成 */
  const initParticles = () => {
    const containers = document.querySelectorAll('.particles')

    containers.forEach(container => {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 10}s`
        particle.style.animationDuration = `${8 + Math.random() * 4}s`
        container.appendChild(particle)
      }
    })
  }

  /* 初期化 */
  window.addEventListener('load', () => {
    initSplash()
    initParticles()
  })
})()
