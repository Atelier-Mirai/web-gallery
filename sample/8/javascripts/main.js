/*=====================================================================
  堅実的な企業サイト - メインスクリプト
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
        document.querySelector('#header')?.classList.add('is-visible')
        handleScrollAnimations()
      }, 600)
    }, 1500)
  }

  /* ナビゲーション */
  const initNavigation = () => {
    const toggle = document.querySelector('.menu-toggle')
    const nav = document.getElementById('global-nav')
    const links = nav?.querySelectorAll('a')

    if (!toggle || !nav) return

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    })

    links?.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('is-active')
        nav.classList.remove('is-active')
      })
    })
  }

  /* ヒーロースライダー */
  const initHeroSlider = () => {
    const slider = document.querySelector('.slider-area')
    if (!slider) return

    const images = slider.querySelectorAll('img')
    if (images.length <= 1) return

    let current = 0
    images[0]?.classList.add('is-active')

    setInterval(() => {
      images[current].classList.remove('is-active')
      current = (current + 1) % images.length
      images[current].classList.add('is-active')
    }, 4000)
  }

  /* スクロールアニメーション */
  const handleScrollAnimations = () => {
    const triggers = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .down-move')
    const windowH = window.innerHeight

    triggers.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < windowH - 50) {
        el.classList.add('is-visible')
      }
    })
  }

  /* ページトップ */
  const initPageTop = () => {
    const btn = document.getElementById('page-top')
    if (!btn) return

    btn.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  /* 初期化 */
  window.addEventListener('load', () => {
    initSplash()
    initNavigation()
    initHeroSlider()
    initPageTop()
    window.addEventListener('scroll', handleScrollAnimations, { passive: true })
  })
})()
