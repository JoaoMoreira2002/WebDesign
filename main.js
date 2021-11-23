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


window.addEventListener("scroll", function(){
  fechaModal();
})

$('.carrousel').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        slidesToScroll: 1,
      }}]
  /*responsive: {
  0: {
      items: 1
  },
  426: {
      items: 3
  },
  1000: {
      items: 4
  }
}*/
})
