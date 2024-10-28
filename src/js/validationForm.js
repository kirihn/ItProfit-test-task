import { updateLabels } from './updateLabels';

export function validateForm(form) {
    let errors = {
        status: 'success',
        fields: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    };

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const phonePattern = /^\+375\(25|29|33|44\)\d{3}-\d{2}-\d{2}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) {
        errors.fields.inputName = 'Name is required';
        errors.status = 'error';
    }

    if (!email || !emailPattern.test(email)) {
        errors.fields.inputEmail = 'Incorrect email';
        errors.status = 'error';
    }

    if (!phone || !phonePattern.test(phone)) {
        errors.fields.inputPhone = 'Incorrect phone format.';
        errors.status = 'error';
    }

    if (!message) {
        errors.fields.inputMessage = 'Message is required';
        errors.status = 'error';
    }

    updateLabels(errors);
    return errors;
}
