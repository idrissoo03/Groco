let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
searchForm.classList.toggle('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
};

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
shoppingCart.classList.toggle('active');
searchForm.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
};

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
loginForm.classList.toggle('active');
searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
navbar.classList.toggle('active');
searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
}

window.onscroll = () => {
searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
}

const slider = document.querySelector('.review-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const totalReviews = 3;
const slideWidth = 100 / totalReviews;

function updateSlider() {
slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % totalReviews;
updateSlider();
});

prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
updateSlider();
});

setInterval(() => {
currentIndex = (currentIndex + 1) % totalReviews;
updateSlider();
}, 5000);
