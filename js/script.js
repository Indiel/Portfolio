var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});


const descriptionBtn = document.querySelector('.swiper__btn');
const descriptionSlides = document.querySelectorAll('.slide__description');

descriptionBtn.addEventListener('click', () => {
    Array.from(descriptionSlides).forEach((elem) => {
        elem.classList.toggle('active');
    });
});


const educationBtn = document.querySelector('.education-title');
const educationList = document.querySelector('.education__list');

educationBtn.addEventListener('click', function() {
    educationList.classList.toggle('active');
});
