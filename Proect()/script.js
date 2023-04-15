AOS.init();
const nav = document.querySelector('#nav');
const nav_btn = document.querySelector('#nav_btn');
const nav_img = document.querySelector('#nav_img');

nav_btn.onclick = () => {
    if (nav.classList.toggle('open')) {
        nav_img.src = "NAV_CLOSE.png";
    } else {
        nav_img.src = 'Nav.svg';
    }
}

