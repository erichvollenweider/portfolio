window.addEventListener("load", function(){
    // taking the header
    let header = document.querySelector('.header');
    document.body.style.setProperty('--menu-height',header.offsetHeight + 'px');
})

window.addEventListener("scroll", function(){
    // taking the header
    let header = document.querySelector('.header');

    document.body.style.setProperty('--menu-height',header.offsetHeight + 'px');
})

let menu = document.querySelector('.menu');
var verificador = false;
menu.onclick = function(){
    let name = document.querySelector('.name-menu');
    if (!verificador) {
        document.querySelector('.menu-mobile').classList.remove('no-show-background');
        verificador = true;
        name.innerHTML = 'Close';
        document.querySelector('.feature-1').classList.add('girar-feature-1');
        document.querySelector('.feature-2').classList.add('sem-feature');
        document.querySelector('.feature-3').classList.add('girar-feature-3');
        name.classList.add('cor-close'); 
    }
    else {
        document.querySelector('.menu-mobile').classList.add('no-show-background');
        verificador = false;
        name.innerHTML = 'Menu';
        document.querySelector('.feature-1').classList.remove('girar-feature-1');
        document.querySelector('.feature-2').classList.remove('sem-feature');
        document.querySelector('.feature-3').classList.remove('girar-feature-3');
        name.classList.remove('cor-close');
    }
}

function disappear (){
    let name = document.querySelector('.name-menu');
    document.querySelector('.menu-mobile').classList.add('no-show-background');
    name.innerHTML = 'Menu';
    document.querySelector('.feature-1').classList.remove('girar-feature-1');
    document.querySelector('.feature-2').classList.remove('sem-feature');
    document.querySelector('.feature-3').classList.remove('girar-feature-3');
    name.classList.remove('cor-close');
    verificador = false;
}

document.querySelector('.a-menu1').onclick = disappear;
document.querySelector('.a-menu2').onclick = disappear;
document.querySelector('.a-menu3').onclick = disappear;
document.querySelector('.a-menu4').onclick = disappear;
document.querySelector('.a-menu5').onclick = disappear;
document.querySelector('.a-menu6').onclick = disappear;

document.documentElement.onclick = function(event){
    let menumob = document.querySelector('.menu-mobile');
    let name = document.querySelector('.name-menu');
    let menu = document.querySelector('.menu');
    let features = document.querySelector('.features-menu');

    if (event.target !== menumob && event.target !== menu && event.target !== name && event.target !== features){
        let name = document.querySelector('.name-menu');
        document.querySelector('.menu-mobile').classList.add('no-show-background');
        name.innerHTML = 'Menu';
        document.querySelector('.feature-1').classList.remove('girar-feature-1');
        document.querySelector('.feature-2').classList.remove('sem-feature');
        document.querySelector('.feature-3').classList.remove('girar-feature-3');
        name.classList.remove('cor-close');
        verificador = false;
    }
}

