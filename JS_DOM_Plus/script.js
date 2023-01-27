// Connecting all of the HTML elements needed and storing them in variables
const submitBtn = document.getElementById('submitBtn');
const input = document.querySelector('#itemInput');
const shoppingList = document.getElementById('shoppingList');
const clearListBtn = document.getElementById('clearListBtn');

// storing the add new li item in a seperate function to stop repetition
const addItem = () => {
    // create new element li element and store it in a variable. Then adding the text from the input box to the new li tag
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    // adding the new li element to the end of the ul tag and resetting the input box to empty string
    shoppingList.appendChild(newItem)
    input.value = ''
}

// click event on submit button that runs the addItem function
submitBtn.addEventListener('click', addItem)

// key event on the entire document that runs addItem function when the enter key is pressed
document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        addItem()
    }
})

// replaces all elements in the ul with empty string when clear list button is clicked
clearListBtn.addEventListener('click', () => {
    shoppingList.innerHTML = ''
})

// toggles the done class which runs an animation when each li in the shopping list is clicked
shoppingList.addEventListener('click', (event) => {
    // removes done class if its already on the li element, and adds the done class if its not there
    event.target.classList.toggle('done')
})

// function to change background colour of li elements
const changeColour = (event, myColour) => {
    event.target.style.backgroundColor = myColour
}

// runs changeColour function on li mouseover and mouseout
shoppingList.addEventListener('mouseover', (event) => { changeColour(event, 'lightgray') })
shoppingList.addEventListener('mouseout', (event) => { changeColour(event, 'white') })