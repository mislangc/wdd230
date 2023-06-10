const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetsData() {
    const response = await fetch(url);
    const data =  await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthDate = document.createElement('P');
        let birthPlace = document.createElement('P');
        let portrait = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });  
}
getProphetsData();