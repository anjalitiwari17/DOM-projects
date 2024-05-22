document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.btn');
    let links = document.querySelector('.links');

    button.addEventListener('click', function () {
        links.classList.toggle('active');
    });
});