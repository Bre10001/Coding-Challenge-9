// Task 1: Create a book class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;  // book title
        this.author = this.author; // book author
        this.ISBN = ISBN;  // ISBN number of book
        this._isAvailable = true; // borrowed or avaialable
    }

    getDetails() {
        return(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`); // Method to get book details as a formatted string
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
    
    returnBook(book) { // method to return a borrowed book
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

// Task 4: Create a VIP Patron Class

class VIPPatron extends Patron{
        constructor(name, priority = true) {
            super(name);
            this.priority = priority;
    }
        
        borrowBook(book) { // Overriding the borrowBook method
            if (this.priority || book.isAvailable) { //checks if book is available
                book.isAvailable = false;
                this.borrowedBooks.push(book); //if it is not, add it to borrowed list
                console.log(`Priority given to VIP ${this.name} borrowing "${book.title}".`);
            } else {
                console.log(`Sorry, "${book.title}" is currently unavailable.`);
            }
        }
}

// Task 5: Handle Books Borrowing and returning

Section.prototype.calculateTotalBooksAvailable = function() {
    return this.books.filter(book => book.isAvailable).length;
};

// Task 6: Create and Manage Sections and Patrons

// Create sections
const fiction = new Section("Fiction");
const nonFiction = new Section("Non Fiction");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
nonFiction.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith");

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book with priority
vipPatron.borrowBook(book1); // Since the VIP has priority, they can borrow

// Regular patron returns the book
regularPatron.returnBook(book1);

// List books in sections
console.log("Books in Fiction Section:");
fiction.listBooks();
console.log("Books in Non Fiction Section:");
nonFiction.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Non Fiction: ${nonFiction.getAvailableBooks()}`);