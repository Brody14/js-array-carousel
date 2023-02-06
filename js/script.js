//console.log('Daum');

// AL CLICK DELL'UTENTE SULLA FRECCIA CAMBIA IMMAGINE

// recupero elementi html

//const slideElements = document.getElementsByClassName('slide');
//console.log(slideElement);

//CREARE ELEMENTI DA UN ARRAY

const carouselElement = document.querySelector(".carousel");

let slideElements = [
	"./img/01.jpg",
	"./img/02.jpg",
	"./img/03.jpg",
	"./img/04.jpg",
	"./img/05.jpg",
	"./img/06.jpg",
];


// aggiungo evento al click


for (let i = 0; i < slideElements.length; i++) {
    
    let slide = document.createElement('div');
    slide.classList.add('slide');
    
    if(i === 0) {
        slide.classList.add('active')
    }
    
    let slideImg = slideElements[i];   
    
    slide.innerHTML = `<img src=${slideImg}>`;

    carouselElement.appendChild(slide);
}


const arrowLeft = document.querySelector(".arrow.arrow-left");
const arrowRight = document.querySelector(".arrow.arrow-right");

let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

arrowRight.addEventListener("click", function () {
     //console.log("Filloy fa schifo");
 
      if (slideIndex < 5) {
          // cambio classi alle immagini
          let slideActive = slides[slideIndex];
          slideActive.classList.remove("active");
    
          slideIndex += 1;
    
          let slideNext = slides[slideIndex];
          slideNext.classList.add("active");
      }

 })


 arrowLeft.addEventListener("click", function () {
 	//console.log('Anche la virtus fa schifo');

 	if (slideIndex > 0) {
 		// cambio classi alle immagini
 		let slideActive = slides[slideIndex];
 		slideActive.classList.remove("active");

 		slideIndex -= 1;

 		let slideNext = slides[slideIndex];
 		slideNext.classList.add("active");
 	}
 });
