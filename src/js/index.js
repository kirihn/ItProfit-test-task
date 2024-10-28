import '../sass/style.sass';
import { ValidateForm } from './validationForm';
console.log('itprofit start');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('sayHiButton');

    const form = document.getElementById("feedbackForm");

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        ValidateForm(form);
    })
});
