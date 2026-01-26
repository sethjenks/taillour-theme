(() => {
  const initLiquidGlassNav = () => {
    const nav = document.querySelector('#header-nav')
    const navBar = nav?.querySelector('.nav-bar')
    if (!nav || !navBar || nav.dataset.glassInitialized === 'true') return

    nav.dataset.glassInitialized = 'true'
    nav.classList.add('has-glass-nav', 'glass-ignore')
    nav.classList.remove('glass-container', 'glass-container-pill')

    const container = new Container({ type: 'pill' })
    container.element.classList.add('nav-glass')

    nav.prepend(container.element)
    container.element.appendChild(navBar)

    container.updateSizeFromDOM()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLiquidGlassNav)
  } else {
    initLiquidGlassNav()
  }
})()
