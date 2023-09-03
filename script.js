const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
 
hamburger.addEventListener("click", mobileMenu);
 

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
 



function randomText(){
    var text = ("mangal");
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random()*320)
    let size = Math.random()*1.5;
    let duration = Math.random()*1;
    
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = randomText()
    
    e.style.left = left + 'px';
    e.style.fontSize = 0.5+size+'em';
    e.style.animationDuration = 1+duration+'s';


    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
}
setInterval(function(){rain()},20);