const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const productPage = document.getElementById('product-page');
const testiPage = document.getElementById('testi-page');
const registerPage = document.getElementById('register');

homePage.addEventListener('click', () => {
    window.location.href = '/index.html';
});

aboutPage.addEventListener('click', () => {
    window.location.href = '/page/about.html';
});

productPage.addEventListener('click', () => {
    window.location.href = '/page/product.html';
});

testiPage.addEventListener('click', () => {
    window.location.href = '/page/testimoni.html';
});

registerPage.addEventListener('click', () => {
    window.location.href = '/page/register.html';
});

document.getElementById("ig").addEventListener("click", () => {
    window.open("https://www.instagram.com/jasonevansaputra", "_blank");
});

document.getElementById("fb").addEventListener("click", () => {
    window.open("https://www.facebook.com/jasonevan", "_blank");
});

document.getElementById("wa").addEventListener("click", () => {
    window.open("https://wa.me/62895413315500", "_blank");
});