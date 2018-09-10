// ===== SLIDER WITH RETURNBACK  =====

let currentSlide = 0; //счетчик текущей картинки
let currentMargin = 0; //переменная длины

function animateWithMargin(direction) {
    if (currentSlide === 0 && direction < 0) //картинка индекс 0 и перемотка влево
    {
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
    currentMargin = -currentSlide * 100; //при каждом нажати длина будет изменяться

    $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
}

let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });
// =======================================

// ===== BUTTON 1 WANT TO SEE MORE >> =====

let showMoreButton = document.querySelector('.More-new-products');
let products = document.querySelector('.products');
let productItem = document.querySelector('.product-item');
let newCollectionSection = document.querySelector('.new-collection');



function AddProducts() {
    return products.innerHTML = products.innerHTML + `
    <div class="product-item">                        
                        <div class="product-image-with-hover">
                            <div class="product-image" 
                            style="background-image: url('img/pic1.jpg'); background-repeat: no-repeat; background-position: center;"></div>
                            <div class="product-image-actions">
                                <button class="product-button"><i class="far fa-heart"></i></button>
                                <button class="product-button"><i class="fas fa-exchange-alt"></i></button>
                                <button class="product-button"><i class="far fa-clock"></i></button>
                                <button class="product-button wide"><i class="fas fa-shopping-cart"></i><span class="name">&#160;&#160;add to cart</span></button>
                            </div>
                        </div>
                        <div class="product-title-and-price">
                            <div class="product-title"><span>blue hoody</span></div>
                            <div class="product-price"><span>$26</span></div>
                        </div>
                    </div>
                    <div class="product-item">                        
                        <div class="product-image-with-hover">
                            <div class="product-image" style="background-image: url('img/pic2.jpg'); background-repeat: no-repeat; background-position: center;"></div>
                            <div class="product-image-actions">
                                <button class="product-button"><i class="far fa-heart"></i></button>
                                <button class="product-button"><i class="fas fa-exchange-alt"></i></button>
                                <button class="product-button"><i class="far fa-clock"></i></button>
                                <button class="product-button wide"><i class="fas fa-shopping-cart"></i><span class="name">&#160;&#160;add to cart</span></button>
                            </div>
                        </div>
                        <div class="product-title-and-price">
                                <div class="product-title"><span>woman shirt</span></div>
                                <div class="product-price"><span>$31</span></div>
                        </div>
                    </div>
                    <div class="product-item">                        
                        <div class="product-image-with-hover">
                            <div class="product-image" style="background-image: url('img/pic3.jpg'); background-repeat: no-repeat; background-position: center;"></div>
                            <div class="product-image-actions">
                                <button class="product-button"><i class="far fa-heart"></i></button>
                                <button class="product-button"><i class="fas fa-exchange-alt"></i></button>
                                <button class="product-button"><i class="far fa-clock"></i></button>
                                <button class="product-button wide"><i class="fas fa-shopping-cart"></i><span class="name">&#160;&#160;add to cart</span></button>

                            </div>
                        </div>
                        <div class="product-title-and-price">
                                <div class="product-title"><span>yellow tshirt</span></div>
                                <div class="product-price"><span>$15</span></div>
                        </div>
                    </div>
                    <div class="product-item">                        
                        <div class="product-image-with-hover">
                            <div class="product-image" style="background-image: url('img/pic4.jpg'); background-repeat: no-repeat; background-position: center;"></div>
                              
                            <div class="product-image-actions">
                                <button class="product-button"><i class="far fa-heart"></i></button>
                                <button class="product-button"><i class="fas fa-exchange-alt"></i></button>
                                <button class="product-button"><i class="far fa-clock"></i></button>
                                <button class="product-button wide"><i class="fas fa-shopping-cart"></i><span class="name">&#160;&#160;add to cart</span></button>

                            </div>
                        </div>
                        <div class="product-title-and-price">
                                <div class="product-title"><span>cool lingerie</span></div>
                                <div class="product-price"><span>$56</span></div>
                        </div>
                    </div>
                    `
}

showMoreButton.addEventListener('click', AddProducts);
// ======================================

// ===== CHANGE NAMES - TAB BUTTON =====

function openContent(evt, infoContent) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className=tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoContent).style.display="block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// ===========================================