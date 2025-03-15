const btFront = document.querySelector(".proj-title-contained");
const btBack = document.querySelector(".proj-title-contained");
const btOther = document.querySelector(".proj-title-contained");

window.addEventListener("load", function(){
    document.querySelector(".proj-projects1").classList.remove('proj-projects-none');
    document.querySelector(".proj-projects2").classList.add('proj-projects-none');
    document.querySelector(".proj-projects3").classList.add('proj-projects-none');

    document.querySelector(".proj-title-contained1").classList.remove('deactivated');
    document.querySelector(".proj-title-contained2").classList.add("deactivated");
    document.querySelector(".proj-title-contained3").classList.add('deactivated');
    
});

btFront.addEventListener("click", function(){
    document.querySelector(".proj-projects1").classList.remove('proj-projects-none');
    document.querySelector(".proj-projects2").classList.add('proj-projects-none');
    document.querySelector(".proj-projects3").classList.add('proj-projects-none');

    document.querySelector(".proj-title-contained1").classList.remove('deactivated');
    document.querySelector(".proj-title-contained2").classList.add('deactivated');
    document.querySelector(".proj-title-contained3").classList.add('deactivated');
});

btBack.addEventListener("click", function(){
    document.querySelector(".proj-projects2").classList.remove('proj-projects-none');
    document.querySelector(".proj-projects1").classList.add('proj-projects-none');
    document.querySelector(".proj-projects3").classList.add('proj-projects-none');

    document.querySelector(".proj-title-contained1").classList.add('deactivated');
    document.querySelector(".proj-title-contained2").classList.remove('deactivated');
    document.querySelector(".proj-title-contained3").classList.add('deactivated');
});

btOther.addEventListener("click", function(){
    document.querySelector(".proj-projects3").classList.remove('proj-projcts-none');
    document.querySelector(".proj-projects1").classList.add('proj-projects-none');
    document.querySelector(".proj-projects2").classList.add('proj-projects-none');

    document.querySelector(".proj-title-contained1").classList.add('deactivated');
    document.querySelector(".proj-title-contained2").classList.add('deactivated');
    document.querySelector(".proj-title-contained3").classList.remove('deactivated');
});
