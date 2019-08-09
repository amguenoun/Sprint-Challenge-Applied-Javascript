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
  mountainImg.style.zIndex = -1;

  const computerImg = document.createElement('img');
  computerImg.src = "./assets/carousel/computer.jpeg";
  computerImg.style.zIndex = -1;

  const treesImg = document.createElement('img');
  treesImg.src = "./assets/carousel/trees.jpeg";
  treesImg.style.zIndex = -1;

  const turntableImg = document.createElement('img');
  turntableImg.src = "./assets/carousel/turntable.jpeg";
  turntableImg.style.zIndex = -1;

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
  const imageArray = [mountainImg, computerImg, treesImg, turntableImg];
  let counter = 64;

  function displayImg() {
    imageArray.forEach(item => {
      item.style.display = "none";
    })
    if (counter % 4 === 0) {
      imageArray[3].style.display = "block";
    } else if (counter % 3 === 0) {
      imageArray[2].style.display = "block";
    } else if (counter % 2 === 0) {
      imageArray[1].style.display = "block";
    } else {
      imageArray[0].style.display = "block";
    }
  }

  displayImg();

  leftBtn.addEventListener('click', () => {
    counter--;
    displayImg();
  });
  rightBtn.addEventListener('click', () => {
    counter++;
    displayImg();
  });

}

createCarousel();