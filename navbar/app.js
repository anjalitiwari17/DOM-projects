
document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.btn');
    let links = document.querySelector('.links');
    // let icons = document.querySelector('.social-icons');

    button.addEventListener('click', function () {
        links.classList.toggle('active');
        icons.classList.toggle('active');
    });
});