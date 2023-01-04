const donateRange = () => {
  const radioInner = document.querySelector('.range')
  const radios = radioInner.querySelectorAll('.radio-range')
  const quantity = document.querySelector('.quantity')
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', () => {
      quantity.value = radios[i].value
    })
  }

  quantity.addEventListener('keyup', () => {

    if (quantity.value == 5000 || quantity.value == 2000 || quantity.value == 1000 || quantity.value == 500 ||quantity.value == 250 || quantity.value == 100 || quantity.value == 50 || quantity.value == 25 ) {
      if (quantity.value == 5000) {
        radios[0].checked = true
      }
      if (quantity.value == 2000) {
        radios[1].checked = true
      }
      if (quantity.value == 1000) {
        radios[2].checked = true
      }
      if (quantity.value == 500) {
        radios[3].checked = true
      }
      if (quantity.value == 250) {
        radios[4].checked = true
      }
      if (quantity.value == 100) {
        radios[5].checked = true
      }
      if (quantity.value == 50) {
        radios[6].checked = true
      }
      if (quantity.value == 25) {
        radios[7].checked = true
      }
    } else {
      for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false
      }
    }
    quantity.value = quantity.value.substr(0,4);
  })
}

export default donateRange