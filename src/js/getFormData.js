export function getFormData(form){
    return {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
    };
}