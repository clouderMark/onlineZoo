
const template = document.querySelector('#testimonials-item')

const testimonialsList = (array) => {
  for (let i = 1; i < array.length; i++) {
    const item = array[i]
    const clone = template.content.cloneNode(true)
    const image = clone.querySelector('.testimonials__author-img')
    const name = clone.querySelector('.testimonials__author-name')
    const address = clone.querySelector('.testimonials__address')
    const time = clone.querySelector('.testimonials__time')
    const textOne = clone.querySelector('.testimonials__text--1')
    const textTwo = clone.querySelector('.testimonials__text--2')

    image.src = item.image
    name.textContent = item.name
    address.textContent = item.address
    time.textContent = item.time
    textOne.textContent = item.textOne
    textTwo.textContent = item.textTwo

    template.parentNode.append(clone)
  }
}

export default testimonialsList