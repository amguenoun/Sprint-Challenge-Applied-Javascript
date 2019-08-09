// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector(".header-container");

function Header() {
    //Creating Elements
    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = "SMARCH 28, 2019";

    const headline = document.createElement('h1');
    headline.textContent = "Lambda Times";

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = "98°";

    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(headline);
    header.appendChild(temp);
}

Header();