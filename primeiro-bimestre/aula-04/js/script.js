document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        'images/caramelo1.png',
        'images/caramelo2.png',
        'images/caramelo3.png',
        'images/caramelo4.png',
        'images/caramelo5.png',
        'images/caramelo6.png'
    ]
    
    const pares = [...cards, ...cards];
    
    const misturados = misturaCards(pares);

    const backCardUrl = 'images/back-caramelo.jpg';

    for (let i = 0; i < misturados.length; i++) {
        criaElementosCards(misturados[i], backCardUrl);
    }
});

let cardsRevelados = [];
let contador = 0;

function criaElementosCards(caminho, backCardUrl) {
    const container = document.getElementById('cards-container');
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    
    const card = document.createElement('img');
    card.src = caminho;
    card.alt = 'caminho';
    card.classList.add('card');

    const backCard = document.createElement('div');
    backCard.classList.add('back-card');
    backCard.style.backgroundImage = `url(${backCardUrl})`;


    backCard.addEventListener('click', () => {
        if (cardsRevelados.length < 2) {
            if (backCard.style.display !== 'none') {
                backCard.style.display = 'none';
                cardsRevelados.push({cardContainer, backCard});

                if (cardsRevelados.length === 2) {
                    setTimeout(verificarPares, 1000);
                }
            }
        }
    });

    cardContainer.appendChild(card);
    cardContainer.appendChild(backCard);

    container.appendChild(cardContainer);
}

function verificarPares() {
    const [primeiro, segundo] = cardsRevelados;

    const primeiroCard = primeiro.cardContainer.querySelector('.card').src;
    const segundoCard = segundo.cardContainer.querySelector('.card').src;

    if (primeiroCard === segundoCard) {
        cardsRevelados = [];
    } else  {
        primeiro.backCard.style.display = 'block';
        segundo.backCard.style.display = 'block';
        cardsRevelados = [];
        contadorDeTentativas();
    }
}

function contadorDeTentativas() {
    const tentativas = document.getElementById('tentativas');

    tentativas.textContent = `Tentativas: ${++contador}`
}

function misturaCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}
