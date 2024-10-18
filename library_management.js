// Task 1: Create a book class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;  // book title
        this.author = this.author; // book author
        this.ISBN = ISBN;  // ISBN number of book
        this._isAvailable = true; // borrowed or avaialable
    }

    getDetails() {
        return(`Title: ${this.title}, Author: ${this.author}, ISBN: $${this.ISBN}`); // Method to get book details as a formatted string
    }

    
    get isAvailable() { // Getter for the isAvailable property
        return this._isAvailable;
    }

    
    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Task 2: Create a Section Class

class Section {
    constructor(name, books) {
        this.name = name; // book section name
        this.books = [];      // books in section
    }
    addBook(book){
        this.books.push(book); //method to add books to array

    }

    
    getAvailableBooks() { // method to get the number of available books in the section
        return this.books.filter(book => book.isAvailable).length;
    }

    
    listBooks() { // method to list all books in the section
        this.books.forEach(book => {
            console.log(`${book.getDetails()} - Available: ${book.isAvailable}`);
        });
    }
}

// Task 3: Create a Patron Class

class Patron{
        constructor(name, borrowedBooks) {
            this.name = name;  // patron name
            this.borrowedBooks = []; // books borrowed       
    }

    borrowBook(book){ // method to borrow a book only if available
        if (book.isAvailable) {
            book.isAvailable = false; // check if book is available
            this.borrowedBooks.push(book); // if it is, add to borrowed book array
            console.log(`${this.name} borrowed "${book.title}".`); 
        } else {
            console.log(`Sorry, "${book.title}" is currently not available.`); //else state book is unavailable
        }
    }
    // Method to return a borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true;
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }


}