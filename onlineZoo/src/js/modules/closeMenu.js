const pageHeader = document.querySelector('.page-header')
const navigation = pageHeader.querySelector('.navigation')
const logo = navigation.querySelector('.header-logo')
const btnMenu = document.querySelector('.burger-btn')
const nav = navigation.querySelector('.nav')
const logoImg = navigation.querySelector('.header-logo__logo')
const mask = document.querySelector('.mask')

const closeMenu = (flag) => {
  if (flag) {
    pageHeader.classList.add('page-header--open-menu')
    nav.classList.add('nav__d-block')
    navigation.classList.add('navigation--open-menu')
    btnMenu.classList.add('burger-btn__d-none')
    mask.classList.add('mask--block')
    logoImg.srcset = 'img/logo-open-menu.png'
    logo.style.width = '65.5px'
    logo.style.height = '41.5px'
    logo.style.marginLeft = '1.6%'
  } else {
    pageHeader.classList.remove('page-header--open-menu')
    nav.classList.remove('nav__d-block')
    navigation.classList.remove('navigation--open-menu')
    btnMenu.classList.remove('burger-btn__d-none')
    mask.classList.remove('mask--block')
    logoImg.srcset = 'img/logo-tablet.png'
    logo.style.width = ''
    logo.style.height = ''
    logo.style.marginLeft = ''
  }
}

export default closeMenu