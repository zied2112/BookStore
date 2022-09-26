// console.log("Hello World");
// Declare the button

window.onload(function () {
  const submit = document.querySelector('#submit-form');
  var displayContentContainer = document.querySelector('.show-added-books');
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');


  const bookArray = [];
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    displayContentContainer.style.display = 'block';
    
    const book = `
    <div class="user-input">
        <h3 class="input-value">${title.value}</h3>
        <h3 class="input-value">${author.value}</h3>
        <button class="remove-button" id="btn" >Remove</button>
    </div>
    `;
    const bookData = {
      title: title.value,
      author: author.value
    }
    bookArray.push(bookData);
    addLocalStorage(bookData);
    displayContentContainer.innerHTML += book;

  })
  localStorage.setItem("books", JSON.stringify([]));
  function addLocalStorage(book) {
    const items = JSON.parse(localStorage.getItem("books"));
    items.push(book);
    localStorage.setItem('books', JSON.stringify(items));
  }

  displayContentContainer
    .querySelectorAll(".remove-button")
    .forEach((item, index) => {
      console.log(item);
      item.addEventListener("click", (event) => {
        displayContentContainer = document.querySelector(".show-added-books");
        const itemsStorage = JSON.parse(localStorage.getItem("books"));
        itemsStorage.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(itemsStorage));

        displayContentContainer.removeChild(
          displayContentContainer.children[index]
        );
      });
    });


})



