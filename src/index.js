import { Layer } from './Layer/index.js';
import './style.css';
console.log('funguju!');

const hamburger = document.querySelector('#nav-btn');

hamburger.addEventListener('click', () => {
  const elm = document.querySelector('nav');
  elm.classList.toggle('nav-closed');
});
const closeMenu = () => {
  const navelm = document.querySelector('nav');
  navelm.classList.add('nav-closed');
};
// const topBar = document.querySelectorAll('nav a');

// for (let i = 0; i < topBar.length; i++) {
//   topBar[i].addEventListener('click', () => {
//     topBar.classList.add('nav-closed');
//   });
// }

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', closeMenu);
});
let ordered = false;

const orderBtn = document.querySelector('.order-btn');
const cupElm = document.querySelector('.drink__cup');
orderBtn.addEventListener('click', () => {
  if (!ordered) {
    orderBtn.textContent = 'Zrušit';

    cupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtn.innerHTML = 'Objednat';
    cupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const layerElm = document.querySelector('.drink__info');

for (let i = 0; i < layers.length; i += 1) {
  layerElm.innerHTML += Layer(layers[i]);
}
