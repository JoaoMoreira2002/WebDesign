
//Modal
function abreModal() {
    let containerModal = document.querySelector('.container-modal');
    let modal = document.querySelector('.modal');

    containerModal.classList.add("mostra");
    modal.classList.add("mostra");
}

function fechaModal() {
    let containerModal = document.querySelector('.container-modal');
    let modal = document.querySelector('.modal');

    containerModal.classList.remove("mostra");
    modal.classList.remove("mostra");
}

let receitas = document.querySelectorAll('.nav-receitas ul li');

receitas.forEach(function (e) {
    e.addEventListener("mousemove", function () {
        abreModal();
    });
});

function fechaNavigation() {
    const navList = document.getElementById("nav-list");
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    if (navList.className == 'nav-list active') {
        navList.classList.remove("active");
        item1.classList.remove("active");
        item2.classList.remove("active");
        item3.classList.remove("active");
    }
}

window.addEventListener("scroll", function () {
    fechaModal();
    fechaNavigation();
})

//Menu mobile
const btnNvaigation = () => {

    console.log("teste");
    const navList = document.getElementById("nav-list");
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    if (navList.className == 'nav-list active') {
        navList.classList.remove("active");
        item1.classList.remove("active");
        item2.classList.remove("active");
        item3.classList.remove("active");
    } else {
        navList.classList.add("active");
        item1.classList.add("active");
        item2.classList.add("active");
        item3.classList.add("active");
    }
}

const navigationMobile = document.getElementById("mobile-navigation");
navigationMobile.addEventListener("click", btnNvaigation);


window.onload = function () {
    let setas = document.querySelectorAll(".slick-arrow");

    for (seta of setas) {
        seta.style.display = "none";
    }
};