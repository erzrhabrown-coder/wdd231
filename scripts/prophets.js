const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the document
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');

        //populate the heading element with the prophet's full name using a template string to build the full name,
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        
        //populate the birth date element
        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        
        //populate the birth place element
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;

        //build the image element by setting the
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        //Finally, add the section card to the "cards" div that was selected at the beginning of the script file
        cards.appendChild(card);
    }
    

)

 }
 