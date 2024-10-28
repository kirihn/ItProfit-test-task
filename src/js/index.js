import IMask from 'imask';
import { validateForm } from './validationForm';
import '../sass/style.sass';
import { submitForm } from './submitForm';
import { getFormData } from './getFormData';
import { updateLabels } from './updateLabels';

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

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = validateForm(form);

        if (errors.status === 'error') return;

        const formData = getFormData(form);
        const response = await submitForm(formData);
        updateLabels(response);
    });
});
