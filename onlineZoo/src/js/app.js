import * as flsFunctions from './modules/functions.js';
import menu from './modules/menu.js';
import petsData from './modules/petsData.js';
import petsList from './modules/petsList.js';
import popupTestimonials from './modules/popupTestimonials.js';
import testimonialsData from './modules/testimonialsData.js';
import testimonialsList from './modules/testimonialsList.js';
import testimonialsScroll from './modules/testimonialsScroll.js';
import donateRange from './modules/donateRange.js';

const pageHeader = document.querySelector('.page-header')

flsFunctions.isWebp();
menu()


if (!pageHeader.classList.contains('donate')) {
  let a
  if (window.innerWidth <= 962) {
    a = petsData.slice(0, 4)
  } else {
    a = petsData.slice(0, 6)
  }
  petsList(a, false)
  
  testimonialsList(testimonialsData)
  
  testimonialsScroll()
  if (window.innerWidth <= 970) {
    popupTestimonials()
  }
}

if (pageHeader.classList.contains('donate')) {
  donateRange()
}
