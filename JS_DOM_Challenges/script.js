// ACTIVITY 1
const toggleBtn = document.getElementById("toggleBtn");
const toggleImg = document.querySelector("#toggleImg");

// adding a click event listener to the button
toggleBtn.addEventListener("click", () => {
    // chaecking if the current image display property value is "none"
    // if it is then we need to make it visible, if not then set it to "none"
    if(toggleImg.style.display === "none"){
        // display = "block" makes the image visible again
        toggleImg.style.display = "block";
    } else {
        toggleImg.style.display = "none";  
    }

})


// ACTIVITY 2

// imageToChange uses getElementsByClassName which returns an array so we need to add the [0] to target the first element in the array
const imageToChange = document.getElementsByClassName("imageToChange")[0];
// querySelector finds the first match and only one element even if the class is used multiple times in HTML
// you also need to target the element like you would in CSS so for a class use the dot .inputImg
const inputImg = document.querySelector(".inputImg");
const submitImg = document.getElementById("submitImg");

// apply click event to the submitImg button
submitImg.addEventListener("click", () => {
    // set the image src attribute to the value that the input holds (what the user has typed in there)
    imageToChange.src = inputImg.value;
    // after the image has updated, reset the input to an empty string ready for the next image url
    inputImg.value = "";
})


// ACTIVITY 3

const colHeading = document.getElementById("colHeading");
const inputCol = document.querySelector("#inputCol");
const submitCol = document.getElementById("submitCol");

// target the submit button and apply a click event to it
submitCol.addEventListener("click", () => {
    // target the h1 and change the text color to whatever you type in the input box
    // the typed value needs to be a recognised color by CSS, so no spaces and all lower case
    colHeading.style.color = inputCol.value;
})


// Activity 4

const coords = document.getElementById("coords");

// apply a click event to the entire page
document.addEventListener("click", (event) => {
    // change the text in the p tag to display the coordinates that are fetched from the event object
    coords.textContent = `Coordinates of click are: X-${event.clientX} Y-${event.clientY}`
})


document.addEventListener("keydown", (event) => {
    console.log(event.charCode, event)
})

document.addEventListener("keypress", (event) => {
    console.log(event.charCode, event)
})

document.addEventListener("keyup", (event) => {
    console.log(event.charCode, event)
})