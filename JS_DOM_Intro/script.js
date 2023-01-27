// console dir can log the object an not the HTML elements
// getElementById returns a single element by the ID name you give it
console.dir( document.getElementById("listWrapper") )
// querySelector returns a single element by the selector you give it
console.log( document.querySelector("li") )

// getElementsByTagName returns an array of elements by the specified tag name
console.log( document.getElementsByTagName("li")[1] )
// querySelectorAll returns an array of elements by the specified selector
console.log( document.querySelectorAll(".listItem") )


// --- CHANGING TEXT CONTENT --- 
// target the h1 by querySelector
const heading = document.querySelector("h1");

console.log( heading.textContent );
// change the textContent of the h1 tag
heading.textContent = "My Title";


// --- CHANGING TEXT STYLE --- 
// target all li's by querySelectorAll
const li = document.querySelectorAll(".listItem");
// loop throguh the array of li elements and change the text color of each
for (let i = 0; i < li.length; i++) {
    li[i].style.color = "red";
}


// --- EVENT LISTENER --- 
// get the h1 by the id assigned in HTML
const headingExample2 = document.getElementById("heading");

// event listener in this case is listening for when you click on the h1
// it then runs the function when a click is detected
headingExample2.addEventListener("click", () => {

    // a toggle checking the textContent to change between the 2 values
    if(headingExample2.textContent === "CLICKED"){
        headingExample2.textContent = "JS DOM"  
    } else {
        headingExample2.textContent = "CLICKED"  
    }

})


// --- EVENT OBJECT --- 
// event object gives information about the event that was triggered
// click would give you things like the element you clicked on, and coordinates of click
// keypress events give info such as what key you pressed, the code of the keypress etc.

// document.addEventListener('click', (event) => {
//     console.log( event )
//     console.log( event.target )
// })

document.addEventListener('keypress', (event) => {
    console.log( event )
})