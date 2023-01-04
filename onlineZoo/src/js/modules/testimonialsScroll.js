const testimonialsScroll = () => {
  const range = document.querySelector('.range-testimonials')
  const list = document.querySelector('.testimonials__wrap')
  const item = list.querySelector('.testimonials__item')
  const corusel = document.querySelector('.testimonials__wrap')

  let step = ((list.offsetWidth - (4 * item.offsetWidth)) / 4 + item.offsetWidth) * 2 + 19

  if (window.innerWidth <= 1220) {
    step = ((list.offsetWidth - (3 * item.offsetWidth)) / 3 + item.offsetWidth) * 2 + 13
    range.max = 8
  }

  let pressedMouse = false;
  const mouseMoveFunction = () => {
    corusel.style.marginLeft = -(range.value * step) + 'px'
  }
  range.addEventListener("mousedown", function (e) {
    pressedMouse = true;

    range.onmousemove = function (e) {
      if (pressedMouse == true) {
        mouseMoveFunction(e);
      }
    }
  });

  range.addEventListener("mouseup", function (e) {
    pressedMouse = false;
    mouseMoveFunction()
  });
}

export default testimonialsScroll