// console.log("Hello World");
// Declare the button
const submit =  document.querySelector('#submit-form');
const displayContentContainer = document.querySelector('.show-added-books');
const title =  document.querySelector('#title');
const author = document.querySelector('#author');

// window.onload = () => {
    
// }

submit.addEventListener('click', (event) => {
    event.preventDefault();
    displayContentContainer.style.display = 'block';
    const book = `
    <div class="user-input">
        <h3 class="input-value">${title.value}</h3>
        <h3 class="input-value">${author.value}</h3>
        <button class="remove-button" onclick='removeDisplay()'>Remove</button>
    </div>
    `;

    function removeDisplay() {
        console.log()
    }
    
    displayContentContainer.innerHTML +=book ;
    // const btn = document.querySelector('.remove-button')
    // btn.addEventListener("click", (event) => {
    //     event.preventDefault()
    //     console.log("remove")
    // })
})





