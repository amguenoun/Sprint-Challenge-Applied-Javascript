// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardArr = [];
const cardContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const articleKeys = Object.keys(response.data.articles);
        articleKeys.forEach((item) => {
            response.data.articles[item].forEach((elem) => {
                if (item === "node") {
                    cardArr.push(createCard(elem, "node.js"));
                }
                else {
                    cardArr.push(createCard(elem, item));
                }

            });
        });
        return cardArr;
    })
    .then(response => {
        response.forEach(item => cardContainer.appendChild(item));
    })
    .catch(error => console.log(`Error: ${error}`));

function createCard(cardObject, dataType) {
    //Creating Elements
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("data-subject", dataType)

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = cardObject.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = cardObject.authorPhoto;

    const authorName = document.createElement('span');
    authorName.textContent = `By ${cardObject.authorName}`;

    //Appending Elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);

    return card;
}


function displayCards(type) {
    cardArr.forEach(item => {
        item.remove();
    });
    if (type === undefined || type === "ALL") {
        cardArr.forEach(item => {
            cardContainer.appendChild(item);
        });
    }
    else {
        cardArr.forEach(item => {
            if (item.dataset.subject == type) {
                cardContainer.appendChild(item);
            }
        });
    }
}

window.setTimeout(() => {
    const tabNames = document.querySelectorAll(".tab");
    console.log(tabNames);
    tabNames.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active-tab');
            displayCards(item.textContent);

        });
    });
}, 4000)