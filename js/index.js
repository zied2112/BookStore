const submit = document.querySelector('#submit-form');
const displayContentContainer = document.querySelector('.show-added-books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const errorMessage = document.querySelector('.error-message-div');

class AwesomeBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookArray = JSON.parse(localStorage.getItem('books')) || [];
    this.displayBook();
  }

  displayBook() {
    displayContentContainer.innerHTML = `
    ${this.bookArray.map((book, index) => `
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
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      const newBook = new AwesomeBook(title.value, author.value);
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

const bookInput = new AwesomeBook();

submit.addEventListener('click', (event) => {
  event.preventDefault();
  bookInput.addAwesomeBook();
});

displayContentContainer.addEventListener('click', (event) => {
  bookInput.removeAwesomeBook(event);
});
