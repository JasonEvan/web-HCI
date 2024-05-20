const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const productPage = document.getElementById('product-page');
const testiPage = document.getElementById('testi-page');
const registerPage = document.getElementById('register');

homePage.addEventListener('click', () => {
    if (window.location.pathname.includes("/web-HCI")) {
        window.location.href = '/web-HCI/index.html';
    }
    window.location.href = '/index.html';
});

aboutPage.addEventListener('click', () => {
    if (window.location.pathname.includes("/web-HCI")) {
        window.location.href = '/web-HCI/page/about.html';
    }
    window.location.href = '/page/about.html';
});

productPage.addEventListener('click', () => {
    if (window.location.pathname.includes("/web-HCI")) {
        window.location.href = '/web-HCI/page/product.html';
    }
    window.location.href = '/page/product.html';
});

testiPage.addEventListener('click', () => {
    if (window.location.pathname.includes("/web-HCI")) {
        window.location.href = '/web-HCI/page/testimoni.html';
    }
    window.location.href = '/page/testimoni.html';
});

registerPage.addEventListener('click', () => {
    if (window.location.pathname.includes("/web-HCI")) {
        window.location.href = '/web-HCI/page/register.html';
    }
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