const submit = document.querySelector('#submit-form');
const displayContentContainer = document.querySelector('.show-added-books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

function AwesomeBook(title, author) {
  this.title = title;
  this.author = author;
}

class NewAwesomeBook {
  constructor() {
    this.bookArray = JSON.parse(localStorage.getItem('books')) || [];
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

const bookInput = new NewAwesomeBook();

submit.addEventListener('click', (event) => {
  event.preventDefault();
  bookInput.addAwesomeBook();
});

displayContentContainer.addEventListener('click', (event) => {
  bookInput.removeAwesomeBook(event);
});