// Exploring JavaScript Objects

// Task 1: Book constructor function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Task 2: Method to display book information
Book.prototype.displayInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

// Task 3: Library and functions to add and search books
let library = [];

function addBook(book) {
  library.push(book);
}

function searchBooksByTitle(title) {
  return library.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );
}

function searchBooksByAuthor(author) {
  return library.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );
}

// Adding books to the library
addBook(new Book("The Hobbit", "J.R.R. Tolkien", 310));
addBook(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178));
addBook(new Book("War and Peace", "Leo Tolstoy", 1225));

// Task 4: Filter and map methods
function filterBooksByPageCount(pageCount) {
  return library.filter((book) => book.pages > pageCount);
}

function mapBooks() {
  return library.map((book) => ({
    title: `Title: ${book.title}`,
    author: `Author: ${book.author}`,
    pages: book.pages,
  }));
}

// Exploring Objects and Math in JavaScript

// Task 1: Account constructor function
function Account(accountNumber, balance, owner) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.owner = owner;
}

// Task 2: Methods to deposit and withdraw funds
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  return `Deposited $${amount}. New balance: $${this.balance}`;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
    return `Withdrew $${amount}. New balance: $${this.balance}`;
  } else {
    return "Insufficient funds.";
  }
};

// Task 3: Method to calculate compound interest
Account.prototype.calculateCompoundInterest = function (rate, years) {
  let compoundBalance = this.balance * Math.pow(1 + rate / 100, years);
  return `Balance after ${years} years at ${rate}% interest: $${compoundBalance.toFixed(
    2
  )}`;
};

// Example usage
console.log(searchBooksByTitle("War and Peace"));
console.log(searchBooksByAuthor("Leo Tolsoy"));
console.log(filterBooksByPageCount(310));
console.log(mapBooks());

let myAccount = new Account("123456789", 6000, "John Doe");
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.calculateCompoundInterest(5, 10));
