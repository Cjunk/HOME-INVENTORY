// script.js
document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var button = document.getElementById('portfolioButton');

    if (scrollPosition > 100) {
        button.style.top = '0';
    } else {
        button.style.top = '-50px';
    }
});
