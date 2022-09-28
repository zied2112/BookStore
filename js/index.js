import Book from './book.js';

const submit = document.querySelector('#submit-form');
const displayContentContainer = document.querySelector('.show-added-books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

class NewAwesomeBook {
  Book = new Book('title.value', 'author.value');

  constructor() {
    this.bookArray = JSON.parse(localStorage.getItem('books')) || [];
    this.displayBook();
  }

  displayBook() {
    displayContentContainer.innerHTML = `
    ${this.bookArray
    .map((book, index) => `
      <div class="user-input">
      <div class="input-div">
      <h3 class="input-value">"${book.title}"</h3>
      <h3 class="input-value"> by ${book.author}</h3>
      </div>
      <div class="detele-btn-div">
      <button class="delete-btn" id=${index}>Remove</button>
      </div>
      </div>
      `)
    .join('')}
      `;
  }

  addAwesomeBook() {
    if ((title.value === '') || (author.value === '')) {
      alert('Please put a title and author');
    } else {
      const newBook = new Book(title.value, author.value);
      console.log(newBook);
      this.bookArray.push(newBook);
      localStorage.setItem('books', JSON.stringify(this.bookArray));
      this.displayBook();
    }
  }

  removeAwesomeBook(event) {
    if (event.target.matches('button')) {
      this.bookArray.splice(event.target.id, 1);
      localStorage.setItem('books', JSON.stringify(this.bookArray));
      this.displayBook();
    }
  }
}

const bookInput = new NewAwesomeBook();

submit.addEventListener('click', (event) => {
  event.preventDefault();
  bookInput.addAwesomeBook();
});

displayContentContainer.addEventListener('click', (event) => {
  bookInput.removeAwesomeBook(event);
});