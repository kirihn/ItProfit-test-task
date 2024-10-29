export async function submitForm(formData) {
    return fetch('http://localhost:9090/api/registration', {
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
