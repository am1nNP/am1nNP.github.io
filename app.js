import { moonSVG, sunSVG } from './svgConfig.js';
window.m = m;
const humb = document.querySelector('#humburger');
const menu = document.querySelector('#menu');
const moon = document.querySelector('#moon');
const moon1 = document.querySelector('#moon1');
const hLinks = document.querySelectorAll('#hLink');
humb.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

hLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});

moon.addEventListener('click', () => {
  moon1.classList.toggle('dark');
  let res = moon1.classList.contains('dark');
  res ? (moon.innerHTML = sunSVG) : (moon.innerHTML = moonSVG);
});
function m(id) {
  let obj = document.getElementById(id);
  let src = obj.src;
  window.open(
    src,
    'Image',
    'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1'
  );
}
