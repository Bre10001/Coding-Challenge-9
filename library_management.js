// Task 1: Create a book class

class Book {
    constructor(name, salary, position, department) {
        this.title = title;          // book title
        this.author = this.author;      // book author
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