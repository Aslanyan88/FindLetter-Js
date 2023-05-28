const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const innerSquares = document.querySelectorAll('.corner-square');
innerSquares.forEach(innerSquare => {
  const button = document.createElement('button');
  button.className = 'inner-button';
  innerSquare.appendChild(button);
});

const getRandomLetter = () => letters[Math.floor(Math.random() * letters.length)];

let randomLetter, randomLettersBtn, randomLettersBtn2, randomLettersBtn3;

do {
  randomLetter = getRandomLetter();
  randomLettersBtn = getRandomLetter();
  randomLettersBtn2 = getRandomLetter();
  randomLettersBtn3 = getRandomLetter();
} while (
  randomLetter === randomLettersBtn ||
  randomLetter === randomLettersBtn2 ||
  randomLetter === randomLettersBtn3 ||
  randomLettersBtn === randomLettersBtn2 ||
  randomLettersBtn === randomLettersBtn3 ||
  randomLettersBtn2 === randomLettersBtn3
);

const lettersLetterIndex = letters.indexOf(randomLetter);
const randomNumber = Math.floor(Math.random() * (lettersLetterIndex + 1));
const side = Math.random() < 0.5 ? 'left' : 'right';
const sign = Math.random() < 0.5 ? '-' : '+';

const getLetterIndex = (sign) => {
  const x = sign === '-' ? -randomNumber : randomNumber;
  let letterIndexRandomNumber = lettersLetterIndex + x;
  while (letterIndexRandomNumber > 26) {
    letterIndexRandomNumber -= 26;
  }
  while (letterIndexRandomNumber < 0) {
    letterIndexRandomNumber += 26;
  }
  return letterIndexRandomNumber;
};

const numerOfQABtn = getLetterIndex(sign);

const centerSquare = document.querySelector('.middle-square');
const arrOfCenterSquare = document.createElement('div');
arrOfCenterSquare.className = 'center-content';
centerSquare.appendChild(arrOfCenterSquare);

const correctAnswer = numerOfQABtn;
arrOfCenterSquare.classList.add(side);
arrOfCenterSquare.classList.add(randomNumber);
arrOfCenterSquare.textContent = `${randomLetter}${sign}${randomNumber}`;

// Get the button elements
const firstButton = document.getElementById('first').querySelector('button');
const secondButton = document.getElementById('second').querySelector('button');
const thirdButton = document.getElementById('third').querySelector('button');
const fourthButton = document.getElementById('fourth').querySelector('button');

// Set the innerText of the buttons with the corresponding letters
firstButton.innerText = letters[correctAnswer];
secondButton.innerText = randomLettersBtn;
thirdButton.innerText = randomLettersBtn2;
fourthButton.innerText = randomLettersBtn3;

// Shuffle the button order
const buttonOrder = [0, 1, 2, 3];
shuffleArray(buttonOrder);

// Get the parent elements of the buttons
const firstButtonParent = document.getElementById('first');
const secondButtonParent = document.getElementById('second');
const thirdButtonParent = document.getElementById('third');
const fourthButtonParent = document.getElementById('fourth');

// Remove the buttons from their current positions
firstButtonParent.removeChild(firstButton);
secondButtonParent.removeChild(secondButton);
thirdButtonParent.removeChild(thirdButton);
fourthButtonParent.removeChild(fourthButton);

// Create a new order array for the button positions
const buttonPositions = [firstButtonParent, secondButtonParent, thirdButtonParent, fourthButtonParent];

// Shuffle the button positions
shuffleArray(buttonPositions);

// Append the buttons to their new random positions
buttonPositions[0].appendChild(firstButton);
buttonPositions[1].appendChild(secondButton);
buttonPositions[2].appendChild(thirdButton);
buttonPositions[3].appendChild(fourthButton);

// Function to evaluate the selected answer
const evaluateAnswer = (selectedAnswer) => {
  if (selectedAnswer.innerText === letters[correctAnswer]) {
    alert("Your answer is correct!");
  } else {
    alert("Your answer is not correct!");
  }
};

// Add event listeners to the buttons
firstButton.addEventListener("click", () => {
  evaluateAnswer(firstButton);
});

secondButton.addEventListener("click", () => {
  evaluateAnswer(secondButton);
});

thirdButton.addEventListener("click", () => {
  evaluateAnswer(thirdButton);
});

fourthButton.addEventListener("click", () => {
  evaluateAnswer(fourthButton);
});

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

