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
const signBtn = document.querySelector('.btn');
const navA = document.querySelector('.nav-link');
const nav = document.querySelectorAll('a');


/* Add Event Listeners */

h2Welcome.addEventListener('mouseover', function(event){
    h2Welcome.style.color = 'aquamarine';
    h2Welcome.style.fontSize = '8rem';
});
goImg.addEventListener('dblclick', function(event) {
    event.target.style.height = '50vh';
    event.target.style.width = '80vw';
    event.target.style.border = 'solid 8px hotpink';
   
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
document.addEventListener('keyup', function(event){
    if (event.key ==="Enter"){
        event.target.style.background = 'teal';
    }
});
h2Pick.addEventListener('contextmenu', function(event){
    //event.preventDefault();
});
h2Pick.addEventListener('auxclick', function(event){
    //event.preventDefault();
    event.target.style.color = 'aquamarine';
    event.target.style.fontSize = '8rem';
});
h1Logo.addEventListener('mouseenter', function(event){
    event.target.style.color = 'aquamarine';
    event.target.style.fontSize = '10rem'
});
homeDiv.addEventListener('mouseleave', function(event){
    event.target.style.background = 'palevioletred';
});
navBar.addEventListener('mousemove', function(event){
    event.target.style.background = 'palevioletred';
});
signBtn.addEventListener('click', function(event){
    event.target.style.color ='pink'
    console.log(
        `target: ${event.target}
        current target: ${event.target.nodeName}`)
    event.stopPropagation();
});
navA.addEventListener('click', function(event){
    event.target.style.color ='cyan';
    console.log(
        `target: ${event.target}
        current target: ${event.target.nodeName}`)
        event.stopPropagation();
});
Array.from(nav).forEach((link) => {
    link.addEventListener('load',function(event){
        event.preventDefault();
    });
});

