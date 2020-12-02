// Your code goes here
/* Declared Variables */

const h2Welcome = document.querySelector('.intro h2');
const h2Go = document.querySelector('.text-content h2');
const h2Pick = document.querySelector('.content-destination h2');
const homeDiv = document.querySelector('.home');
const goDiv = document.querySelector('.text-content');
const  pickDiv = document.querySelector('.content-destination');
const goImg = document.querySelector('.img-content');
const adventImg = document.querySelector('.img-fluid');
const  h1Logo = document.querySelector('h1');
const navBar = document.querySelector('nav');

/* Add Event Listeners */

h2Welcome.addEventListener('mouseover', function(event){
    h2Welcome.style.color = 'green';
    h2Welcome.style.fontSize = '8rem';
});
goImg.addEventListener('dblclick', function(event) {
    event.target.style.height = '50vh';
    event.target.style.width = '80vw';
    event.target.style.border = 'solid 8px blue';
   
});
document.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        event.target.style.background = 'pink';
    }
});
h2Go.addEventListener('wheel', function(event){
    event.target.style.fontSize = '8rem';
    event.target.style.color = 'aquamarine';
});
