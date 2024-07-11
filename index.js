class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    }

    lend() {
       if (this.available) {
            this.available = false;
            return `${this.title} has been lent out`;
       } else {
        return `${this.title} is currently unavailable`;
       }
    }

    returnBook() {
        this.available = true;
        return `${this.title} has been returned`;
    }

    info() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn} - ${this.available ? 'AVAILABLE' : 'UNAVAILABLE'})`;
    }
}

const book1 = new Book('1984', '01', '1');
const book2 = new Book('Hello', 'AH', '2');



class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

   
    getInfo() {
        return `${this.name}, ID : ${this.id}`;
    }
}




class Member extends User {
    constructor(name, id) {
        super(name, id);
        this.borrowedBooks = [];
    }

    borrowBooks(book) {
        if (book.available) {
            this.borrowedBooks.push(book);
            book.lend();
            return `${this.name} borrowed ${book.title}`;
        } else {
            return `${book.title} is not in the library`;
        }
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            return `${this.name} returned ${this.title}`;
        } else {
            return `${this.name} does not have ${this.title}`;
        }
    }
}



class Librarian extends User {
    constructor(name, id, library) {
        super(name, id, library);
        this.library = library;
    }

    addBook(book) {
        this.library.books.push(book);
    }

    removeBook(book) {

    }

    lendBook(book, member) {

    }

    receiveBook(book) {

    }
}

class library {
    constructor(name) {
       this.name = name;
       this.books = [];
       this.members = [];
    }

    registerMember(member) {

    }

    unRegisterMember(member) {

    }

    findBookTitle(title) {

    }

    findBookISBN() {
        
    }
}



const user1 = new Member('Stan', 1);

const user2 = new Member('Dima', '2');