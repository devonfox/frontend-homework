const url = 'https://thronesapi.com/api/v2/Characters';
const section = document.getElementById('thrones');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const characters = data.map(character => ({
      image: character.imageUrl,
      name: character.fullName,
      title: character.title
    }));
    addCards(characters);
  });

function addCards(characters) {
  characters.forEach(character => {
    const card = createCard(character);
    section.appendChild(card);
  });
}

function createCard(character) {
  const card = document.createElement('div');
  card.classList.add('card', 'text-center', 'border-0');

  const cardBackground = document.createElement('div');
  cardBackground.classList.add('card-bg');
  card.appendChild(cardBackground);

  const image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  image.classList.add('card-img-top', 'portrait', 'mx-auto', 'mt-4');
  card.appendChild(image);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'p-2');

  const name = document.createElement('h5');
  name.classList.add('card-title', 'fw-bold', 'fs-5', 'mx-auto');
  name.textContent = character.name;
  cardBody.appendChild(name);

  const title = document.createElement('p');
  title.classList.add('card-text', 'fw-bold', 'mx-auto');
  title.textContent = character.title;
  cardBody.appendChild(title);

  const cardHighlight = document.createElement('div');
  cardHighlight.classList.add('my-2')
  cardHighlight.appendChild(cardBody);

  card.appendChild(cardHighlight);
  return card;
}
