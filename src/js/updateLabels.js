export function updateLabels(errors) {
    const requestMessage = document.getElementById('responseMessage');

    const labels = {
        inputName: document.getElementById('nameLabel'),
        inputEmail: document.getElementById('emailLabel'),
        inputPhone: document.getElementById('phoneLabel'),
        inputMessage: document.getElementById('messageLabel'),
    };

    if (errors.fields) {
        for (const [key, label] of Object.entries(labels)) {
            if (errors.fields[key]) {
                label.textContent = '* ' + errors.fields[key];
                label.style.color = 'red';
            } else {
                label.textContent = `input ${key.slice(5)}`;
                label.style.color = 'black';
            }
        }
    }

    if (errors.message) {
        requestMessage.textContent = errors.message;
    } else {
        requestMessage.textContent = '';
    }
}
