import IMask from 'imask';
import { validateForm } from './validationForm';
import '../sass/style.sass';
import { submitForm } from './submitForm';
import { getFormData } from './getFormData';
import { updateLabels } from './updateLabels';
import { cleanInputs } from './cleanInputs';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const phone = document.getElementById('phone');

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

        if (response.status === 'success') cleanInputs(form);
        IMask(phone, maskOptions);

    });
});
