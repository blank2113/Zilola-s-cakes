import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const headerWrapper = document.querySelector('.burger__wrapper');
const headerBurger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

headerWrapper.addEventListener('click',()=>{
    headerWrapper.classList.toggle('active')
    headerBurger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('lock')
    console.log(1);
})