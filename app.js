/* Functions */

// Function for creating the hover effect
let hoverEffect = () => {
  $('main > div').hover(
    (event) => {
      $(`#${event.target.id}`).css(
        'background-color',
        `#${
          rainbowColors[Math.floor(Math.random() * rainbowColors.length)].hex
        }`
      );
    },
    (event) => {
      $(`#${event.target.id}`).css(
        'background-color',
        `#${
          rainbowColors[Math.floor(Math.random() * rainbowColors.length)].hex
        }`
      );
    }
  );
};

// Function for creating the square grid
let createGrid = (input) => {
  $('main').css('grid-template-columns', `repeat(${input}, 1fr)`);
  $('main').css('grid-template-rows', `repeat(${input}, 1fr)`);

  for (let i = 0; i < Math.round(input ** 2); i++) {
    $('main').append(`<div id="square${i + 1}" class="square"></div>`);
  }

  hoverEffect();
};

// Function for creating the prompt
let input = () => {
  return Number(
    prompt(
      'Enter number of squares on one side, length should be between 1 & 100'
    )
  );
};

/* --------- */

// Rainbow Colors hex values
let rainbowColors = [
  {
    hex: '1D1D1D',
  },
  {
    hex: '1D1D1D',
  }
];

// creating a 16 x 16 grid of squares
createGrid(16);

// creating the reset button functionality
$('#reset').click(() => {
  let userInput;

  do {
    userInput = input();
    if (!Number.isInteger(userInput) || userInput < 1 || userInput > 100) {
      alert('Wrong value was entered!');
    }
  } while (!Number.isInteger(userInput) || userInput < 1 || userInput > 100);

  $('main > div').remove();
  createGrid(userInput);
  document.getElementById("gnumber").innerHTML=userInput;
});
