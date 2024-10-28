
export function updateLabels(errors) {
    const labels = {
        name: document.getElementById('nameLabel'),
        email: document.getElementById('emailLabel'),
        phone: document.getElementById('phoneLabel'),
        message: document.getElementById('messageLabel'),
    };

    for (const [key, label] of Object.entries(labels)) {
        if (errors[key]) {
            label.textContent = '* ' + errors[key];
            label.style.color = 'red';
        } else {
            label.textContent = `input ${key}`;
            label.style.color = 'black';
        }
    }
}
