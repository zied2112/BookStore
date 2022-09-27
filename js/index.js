const submit = document.querySelector('#submit-form');
const displayContentContainer = document.querySelector('.show-added-books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');


class AwesomeBook {
  constructor (title, author) {
    this.title = title;
    this.author = author;
  }

}

class NewAwesomeBook {
  constructor (id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addAwesomeBook() {
    if ((title.value === '') || (author.value === '')) {
      alert('Please put a title and author');
    } else {
      bookArray.push({ title: title.value, author: author.value });
      displayContentContainer.innerHTML = `
      ${bookArray
    .map((book, index) => `
        <div class="user-input">
          <h3 class="input-value">${book.title}</h3>
          <p class="input-value">${book.author}</p>
          <button class="delete-btn" id=${index}>Remove</button>
        </div>
      `)
    .join('')}
    `;
      localStorage.setItem('books', JSON.stringify(bookArray));
    }
  }

  removeAwesomeBook() {
    bookArray.splice(event.target.id, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    displayContentContainer.innerHTML = `
      ${bookArray.map((book, index) => `
        <div class="user-input">
          <h3 class="input-value">${book.title}</h3>
          <p class="input-value">${book.author}</p>
          <button class="delete-btn" id=${index}>Remove</button>
        </div>
      `)
      .join('')}
     `;
  }

}

const bookInput = new NewAwesomeBook;



const bookArray = JSON.parse(localStorage.getItem('books')) || [];
displayContentContainer.innerHTML = `
    ${bookArray
    .map((book, index) => `
      <div class="user-input">
        <h3 class="input-value">${book.title}</h3>
        <p class="input-value">${book.author}</p>
        <button class="delete-btn" id=${index}>Remove</button>
      </div>
    `)
    .join('')}
  `;

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    bookInput.addAwesomeBook();
  });

  displayContentContainer.addEventListener('click', (event) => {
  bookInput.removeAwesomeBook()
  });
// window.addEventListener('load', () => {
// });