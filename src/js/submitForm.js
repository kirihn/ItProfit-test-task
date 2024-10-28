export async function submitForm(formData) {
    const response = await fetch('http://localhost:9090/api/registration', {
        method: "POST",
        headers: {
            'Content-type':'application/json',
        },
        body: formData,
    })

    return response.json();
}