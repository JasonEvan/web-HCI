const homePage = document.querySelectorAll('.home-page');
const aboutPage = document.querySelectorAll('.about-page');
const productPage = document.querySelectorAll('.product-page');
const testiPage = document.querySelectorAll('.testi-page');
const registerPage = document.getElementById('register');
const navbarResponsive = document.getElementById('navbar-responsive');

homePage.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.pathname.includes("/web-HCI/")) {
            window.location.href = '/web-HCI/index.html';
        } else {
            window.location.href = '/index.html';
        }
    });
});

aboutPage.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.pathname.includes("/web-HCI/")) {
            window.location.href = '/web-HCI/page/about.html';
        } else {
            window.location.href = '/page/about.html';
        }
    });
});

productPage.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.pathname.includes("/web-HCI/")) {
            window.location.href = '/web-HCI/page/product.html';
        } else {
            window.location.href = '/page/product.html';
        }
    });
});

testiPage.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.pathname.includes("/web-HCI/")) {
            window.location.href = '/web-HCI/page/testimoni.html';
        } else {
            window.location.href = '/page/testimoni.html';
        }
    });
});

registerPage.addEventListener('click', () => {
    if (window.location.pathname.includes("/web-HCI/")) {
        window.location.href = '/web-HCI/page/register.html';
    } else {
        window.location.href = '/page/register.html';
    }
});

document.getElementById("register-menu").addEventListener("click", () => {
    if (window.location.pathname.includes("/web-HCI/")) {
        window.location.href = '/web-HCI/page/register.html';
    } else {
        window.location.href = '/page/register.html';
    }
});

document.getElementById("menu-icon").addEventListener("click", () => {
    navbarResponsive.style.display = "flex";
});

document.getElementById("silang").addEventListener("click", () => {
    navbarResponsive.style.display = "none";
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