const grid = document.querySelector('.grid');

const createCard = () =>{

    const card = document.createElement('div');
    const frond = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    frond.className = 'face frond';
    back.className = 'face back';

    card.appendChild(frond);
    card.appendChild(back);

    grid.appendChild(card);
}

createCard();