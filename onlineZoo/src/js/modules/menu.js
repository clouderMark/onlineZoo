import closeMenu from './closeMenu.js'

const pageHeader = document.querySelector('.page-header')
const btnMenu = document.querySelector('.burger-btn')
const closeBtn = pageHeader.querySelector('.close-btn')
const mask = document.querySelector('.mask')

const menu = () => {

  btnMenu.addEventListener('click', (e) => {
    e.preventDefault()
    closeMenu(true)
  })

  closeBtn.addEventListener('click', () => {
    closeMenu(false)
  })

  mask.addEventListener('click', () => {
    closeMenu(false)
  })
}

export default menu