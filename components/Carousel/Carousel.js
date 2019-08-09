/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

function createCarousel() {
  //Creating Elements
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');

  const mountainImg = document.createElement('img');
  mountainImg.src = "./assets/carousel/mountains.jpeg";

  const computerImg = document.createElement('img');
  computerImg.src = "./assets/carousel/computer.jpeg";

  const treesImg = document.createElement('img');
  treesImg.src = "./assets/carousel/trees.jpeg";

  const turntableImg = document.createElement('img');
  turntableImg.src = "./assets/carousel/turntable.jpeg";

  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');

  //Appending Elements
  carouselContainer.appendChild(carousel);
  carousel.appendChild(leftBtn);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightBtn);

  //Img array
  let pastCounter = -1;
  let counter = 0;
  const imageArray = [mountainImg, computerImg, treesImg, turntableImg];
  function displayImg() {
    imageArray[counter].style.display = "block";
    imageArray[counter].style.zIndex = -1;

    if (pastCounter >= 0) {
      imageArray[pastCounter].style.display = "none";
    }
    counter++;
    pastCounter++;

    if (counter === 4) {
      counter = 0;
    }
    if (pastCounter === 4) {
      pastCounter = 0;
    }
  }
  displayImg();

  leftBtn.addEventListener('click', displayImg);
  rightBtn.addEventListener('click', displayImg);

}

createCarousel();