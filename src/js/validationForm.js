export function ValidateForm(form) {
    let errors = {};

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name) errors.name = "name is required";
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) errors.email = 'incorrect email';
    const phonePattern = /^\+375\(25|29|44\)\d{3}-\d{2}-\d{2}$/;
    if (!phone || !phonePattern.test(phone)) {
        errors.phone = 'incorrect phone +375 (25/29/44) XXX-XX-XX';
    }
    if(!message) errors.message = "message is required"
    
    return errors;
}
