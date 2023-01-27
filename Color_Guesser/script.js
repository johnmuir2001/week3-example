// All of the variable that hold the elements from the HTML
// The boxes variable holds an array of all elements with a class of box
const boxes = document.querySelectorAll(".box");
const colorToGuess = document.getElementById("colorToGuess");
const newColBtn = document.getElementById("newColBtn");
const scoreDisplay = document.getElementById("score");
const winMsg = document.getElementById("isCorrect");

// newColor holds the rgb value of one of the six boxes that you need to guess
// score holds the current score
// guessing holds a true or false value that stops any clicks from getting tracked if you have already guessed the color correctly
let newColor = null;
let score = 0;
let guessing = false;

// the forEach method goes through the array of boxes and gives each one a click event listener
boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        // first check if the guessing variable is true
        // if it is then the user hasnt gotten the correct color yet
        if(guessing){

            // check if the correct color is the same is this boxes background color
            if(newColor === box.style.backgroundColor){
                // if the user guessed correctly then run the correct function
                correct();
            } else {
                // if wrong the set the box to transparent so the user can't see it
                box.style.opacity = 0;
            }

        }

    })
})

// the correct function handles if the player guesses correctly
const correct = () => {
    // set the guessing to false so they can't keep clicking the boxes and increasing the score
    guessing = false;
    // increase the score, display the score and display a correct message
    score++;
    scoreDisplay.textContent = score;
    winMsg.textContent = "Correct!";

    // loop through the array of boxes to change the color of all of them to the correct value and make them all opaque again
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = newColor;
        boxes[i].style.opacity = 1;
    }

}


// this function handles the reseting/random generating of the colors
const resetGame = () => {
    // set guessing to true so the color check can be made on click
    guessing = true;

    // loop through the boxes and generate a random rgb value for each box
    for(let i = 0; i < boxes.length; i++){
        // a random number is generated between 0 - 255 and used 3 times for each value: red, green, blue
        boxes[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    }

    // randomly pick one of the six boxes to be the answer
    let itemToGuess = boxes[ Math.floor(Math.random() * boxes.length) ];
    // store the answers color in the newCOlor vaiable
    newColor = itemToGuess.style.backgroundColor;
    // display the color rgb value that needs to be guessed to the player
    colorToGuess.textContent = newColor;
    // reset the win message
    winMsg.textContent = "";
}

// run the function once when the file first loads
resetGame();

// tun the resetGame function when the new game button is clicked
newColBtn.addEventListener("click", resetGame)