import '../sass/style.sass';
console.log('itprofit start');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('sayHiButton');

    button.addEventListener('click', () => {
        console.log('HIIII');
    });
});
