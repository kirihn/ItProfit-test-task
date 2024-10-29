export async function submitForm(formData) {
    return fetch('/api/registration', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formData), // Сериализация данных в строку JSON
    })
    .then((response) => {
        return response.json(); // Возвращаем JSON-данные
    })
    .catch(() => {
        return {serverError: true};
    });
}
