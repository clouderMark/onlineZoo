import petsData from './petsData.js'

const pageHeader = document.querySelector('.page-header')
const template = document.querySelector('#pets-item')

if (!pageHeader.classList.contains('donate')) {
  const btn = document.querySelectorAll('.arrow')
  const back = btn[0]
  const next = btn[1]
  const blocks = [0]
  const list = document.querySelector('.pets-list')
  let position = 0;

  shuffle(petsData)

  const nextBtnAble = () => {
    next.disabled = false
  }

  const backBtnAble = () => {
    back.disabled = false
  }

  const addRightAnimation = () => {
    list.style.animationName = 'right'
  }
  const removeAnimation = () => {
    list.style.animationName = ''
  }
  const addLeftAnimation = () => {
    list.style.animationName = 'left'
  }

  back.addEventListener('click', () => {
    position--
    back.disabled = true
    if (position < blocks[0]) {
      blocks.unshift(position)
      shuffle(petsData)//перемешиваю
      let a
      if (window.innerWidth <= 962) {
        a = petsData.slice(0, 4)
      } else {
        a = petsData.slice(0, 6)
      }
      petsList(a, true)//отрисовываю фото
    } else {
      list.style.marginTop = -(list.offsetHeight + 2) * blocks.indexOf(position) + 'px'
    }
    addLeftAnimation()
    setTimeout(removeAnimation, 1000)
    setTimeout(backBtnAble, 1000)
  })

  
 
  next.addEventListener('click', () => {
    position++
    next.disabled = true
    if (window.innerWidth <= 962) {
      list.scrollBy(0, list.offsetHeight)//двигаю 
    }
    if (position > blocks.at(-1)) {
      shuffle(petsData)//перемешиваю
      blocks.push(position)
      let a
      if (window.innerWidth <= 962) {
        a = petsData.slice(0, 4)
      } else {
        a = petsData.slice(0, 6)
      }
      setTimeout(petsList(a, false), 1000)
    }
    if (window.innerWidth > 962) {
      list.style.marginTop = -(list.offsetHeight + 2) * blocks.indexOf(position) + 'px'
    }
    addRightAnimation()
    setTimeout(removeAnimation, 1000)
    setTimeout(nextBtnAble, 1000)
  })
}
const petsList = (array, isStart) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    const clone = template.content.cloneNode(true)
    const title = clone.querySelector('.pets-list__title')
    const location = clone.querySelector('.pets-list__content')
    const img = clone.querySelector('.pets-list__img')

    title.textContent = item.title
    location.textContent = item.location
    img.src = item.img
    if (item.isPlantEating) {
      title.classList.add('pets-list__title--fruit')
    } else {
      title.classList.add('pets-list__title--meat')
    }
    if (!isStart) {
      template.parentNode.append(clone);
    } else {
      template.parentNode.prepend(clone);
    }
  }
}

function shuffle(array) {//мешаю массив
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


export default petsList