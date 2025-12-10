/*=====================================================================
  和風サイト（料亭） - メインスクリプト
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
        initSlider()
        handleScrollAnimations()
      }, 800)
    }, 3500)
  }

  /* ナビゲーション */
  const initNavigation = () => {
    const toggle = document.querySelector('.menu-toggle')
    const nav = document.getElementById('main-nav')
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
  const initSlider = () => {
    const items = document.querySelectorAll('.slider-item')
    if (items.length <= 1) return

    let current = 0
    items[0]?.classList.add('is-active')

    setInterval(() => {
      items[current].classList.remove('is-active')
      current = (current + 1) % items.length
      items[current].classList.add('is-active')
    }, 5000)
  }

  /* スクロールアニメーション */
  const handleScrollAnimations = () => {
    const triggers = document.querySelectorAll('.blur-in, .line-reveal, .svg-animate')
    const windowH = window.innerHeight

    triggers.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < windowH - 100) {
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

  /* スムーススクロール */
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href')
        if (!href || href === '#') return

        e.preventDefault()
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }

  /* 初期化 */
  window.addEventListener('load', () => {
    initSplash()
    initNavigation()
    initPageTop()
    initSmoothScroll()
    window.addEventListener('scroll', handleScrollAnimations, { passive: true })
  })
})()
