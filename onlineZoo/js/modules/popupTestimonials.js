import testimonialsData from "./testimonialsData.js"

const popupTestimonials = () => {
  const items = document.querySelectorAll('.testimonials__item')
  const mask = document.querySelector('.mask')
  const popup = document.querySelector('.testimonials__popup')
  const item = document.querySelector('.testimonials__popup--item')
  const img = item.querySelector('.testimonials__author-img')
  const name = item.querySelector('.testimonials__author-name')
  const time = item.querySelector('.testimonials__time')
  const textOne = item.querySelector('.testimonials__text--1')
  const textTwo = item.querySelector('.testimonials__text--2')
  const close = popup.querySelector('.testimonials__popup--close')
  for (let i = 0; i < 3; i++) {
    items[i].addEventListener('click', () => {
      mask.classList.add('mask--block')
      popup.classList.remove('testimonials__popup--d-none')
      img.src = testimonialsData[i].image
      name.textContent = testimonialsData[i].name
      time.textContent = testimonialsData[i].time
      textOne.textContent = testimonialsData[i].textOne
      textTwo.textContent = testimonialsData[i].textTwo
    })
  }

  mask.addEventListener('click', () => {
    popup.classList.add('testimonials__popup--d-none')
  })

  close.addEventListener('click', () => {
    popup.classList.add('testimonials__popup--d-none')
    mask.classList.remove('mask--block')
  })
}

export default popupTestimonials