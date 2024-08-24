document.addEventListener('DOMContentLoaded', () => {
    const users = ['Eduardo-Silva-Rodrigues', 'GustavoTaquiwi', 'LucasDiSilva'];
    const cards = ['card-1', 'card-2', 'card-3'];

    for (let i = 0; i < users.length; i++) {
        fetch(`https://api.github.com/users/${users[i]}`)
        .then(response => response.json())
        .then(data => {
            const card = document.getElementById(cards[i]);

            const username = card.querySelector('.nome-perfil');
            const foto = card.querySelector('.foto-perfil');
            const link = card.querySelector('.link-perfil');

            username.textContent = data.login;
            foto.src = data.avatar_url;
            link.href = data.html_url;
        })
        .catch(error => console.error('Error: ', error))
    }
});