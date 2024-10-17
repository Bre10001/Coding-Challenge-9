// Task 1: Create a book class

class Book {
    constructor(name, salary, position, department) {
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
    constructor(name, salary, position, department) {
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