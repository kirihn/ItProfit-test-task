import IMask from 'imask';
import { ValidateForm } from './validationForm';
import '../sass/style.sass';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const phone = document.getElementById('phone');

    const nameLabel = document.getElementById('nameLabel');
    const emailLabel = document.getElementById('emailLabel');
    const phoneLabel = document.getElementById('phoneLabel');
    const messageLabel = document.getElementById('messageLabel');

    const maskOptions = {
        mask: '+375(99)000-00-00',
        lazy: false,
        blocks: {
            99: {
                mask: IMask.MaskedEnum,
                enum: ['25', '29', '44', '33'],
            },
            '000': {
                mask: IMask.MaskedRange,
                from: 0,
                to: 999,
            },
            '00': {
                mask: IMask.MaskedRange,
                from: 0,
                to: 99,
            },
            '00': {
                mask: IMask.MaskedRange,
                from: 0,
                to: 99,
            },
        },
    };

    IMask(phone, maskOptions);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let errors = ValidateForm(form);

        if (errors.status === 'error') return;
    });
});
