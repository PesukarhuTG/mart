/* let currentSlide = 0;
let currentMargin = 0;

function animateWithMargin(direction) {
    if (currentSlide === 0 && direction < 0 || currentSlide === 6 && direction > 0) {
        return false;
    }

    currentSlide += direction;
    currentMargin = -currentSlide * 100;

    $('#carousel-with-margin .first').css('margin-left', currentMargin + '%');
}

let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });


let currentSlide2 = 0;
let currentTransform = 0;
function animateWithTransform(direction) {
    if (currentSlide2 === 0 && direction < 0 || currentSlide2 === 6 && direction > 0) {
        return false;
    }

    currentSlide2 += direction;
    currentTransform = -currentSlide2 * 100;

    $('#carousel-with-transform .slides-container').css('transform', 'translateX(' + currentTransform + '%)');
}

$('#carousel-with-transform .carousel-button-left').click(function() { animateWithTransform(-1) });
$('#carousel-with-transform .carousel-button-right').click(() => animateWithTransform(1)); */

// SLIDER WITH RETURNBACK

let currentSlide = 0;
let currentMargin = 0;

function animateWithMargin(direction) {
    if (currentSlide === 0 && direction < 0){
        currentMargin = -600;
        currentSlide = 6;
        $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
    else if (currentSlide === 6 && direction > 0) {
        currentMargin = 0;
        currentSlide = 0;
        $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
    else {
    currentSlide += direction;
    currentMargin = -currentSlide * 100;

    $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
}

let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });



// BUTTON WANT TO SEE MORE >>

/* let WantToSeeMore = document.getElementById('More-featured-products');
WantToSeeMore.addEventListener('click', function () { AddMoreProducts() });

function AddMoreProducts() {  } */


// CHANGE NAMES ....but not changes photo

function ChangeCustomerTab(name) {
    $('.name-min-img').text('- '+name+' -');
    }

let СirclesMin = document.getElementsByClassName('circles-min');
for(i=0 ; i<СirclesMin.length; i++) {
    let qname = СirclesMin[i].className.substring(СirclesMin[i].className.search(' ')+1);
    СirclesMin[i].addEventListener('click', function () { ChangeCustomerTab(qname) });
}