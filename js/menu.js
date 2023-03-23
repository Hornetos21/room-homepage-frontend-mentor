function mobileMenu() {
  const header = document.querySelector('.header')
  const nav = document.querySelector('.nav-bar')
  const burger = document.querySelector('.hamburger')
  const menu = nav.querySelector('.menu')
  const logo = nav.querySelector('.logo')
  const overlay = document.querySelector('.overlay')

  function toggleByClass(element, clazz) {
    element.classList.toggle(clazz)
  }

  header.addEventListener('click', ({ target }) => {
    if (target === burger || target === overlay) {
      toggleByClass(burger, 'hamburger--close')
      toggleByClass(nav, 'nav-bar--mobile')
      toggleByClass(menu, 'hidden')
      toggleByClass(logo, 'hidden')
      toggleByClass(overlay, 'hidden')
    }
  })
}

export default mobileMenu
