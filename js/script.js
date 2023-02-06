//console.log('Daum');

// AL CLICK DELL'UTENTE SULLA FRECCIA CAMBIA IMMAGINE

// recupero elementi html

const slideElement = document.getElementsByClassName('slide');
//console.log(slideElement);

const arrowLeft = document.querySelector('.arrow.arrow-left');
//console.log(arrowLeft);

const arrowRight = document.querySelector('.arrow.arrow-right');
//console.log(arrowRight);

let slideIndex = 0;

// aggiungo evento al click

arrowRight.addEventListener ('click', function() {
    //console.log('Filloy fa schifo');

    if(slideIndex < 5) {

        // cambio classi alle immagini
        let slideActive = slideElement[slideIndex];
        slideActive.classList.remove('active');

        slideIndex += 1

        let slideNext = slideElement[slideIndex];
        slideNext.classList.add('active');
    }

})

arrowLeft.addEventListener ('click', function() {
    //console.log('Filloy fa schifo');

    if(slideIndex > 0) {

        // cambio classi alle immagini
        let slideActive = slideElement[slideIndex];
        slideActive.classList.remove('active');

        slideIndex -= 1

        let slideNext = slideElement[slideIndex];
        slideNext.classList.add('active');
    }

})


