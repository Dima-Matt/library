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
        return `${book.title} has been to the library`;
    }

    removeBook(book) {
        const index = this.library.book.indexOf(book);
        if (index !== -1) {
            this.library.Book.splice(index, 1);
            return `${book.title} has been removed from the library`;
        } else {
            return `${book.title} is not in the library`;
        }
    }

    lendBook(book, member) {
        if (this.library.books.includes(book) && book.available) {
            member.borrowBooks(book);
            return `${book.title} has been lent to ${member.name}`;
        } else {
            return `${book.title} is unavailable or not in the library`;
        }
    }

    receiveBook(book) {
        book.returnBook();
        return `${book.title} has been received into the library`;
    }
}

class Library {
    constructor(name) {
       this.name = name;
       this.books = [];
       this.members = [];
    }

    registerMember(member) {
        this.members.push(member);
        return `${member.name} has been registered as member of ${this.members}`
    }

    unRegisterMember(member) {
        const index = this.members.indexOf(member);
        if (index !== -1) {
            this.members.splice(index, 1);
            return `${member.name} has been unregistered from ${this.name}`;
        } else {
            return `${member.name} is not member of library`;
        }
    }

    findBookTitle(title) {
        return this.books.find(book => book.title === title);
    }

    findBookISBN() {
        return this.books.find(book => book.isbn === isbn);
    }
}


const library = new Library('Vitebsk Library');
console.log(library);

const librarian = new Librarian('John', 'lib001', library);
console.log(librarian);

const member = new Member('Alice', 'mem001');
console.log(member);

const book1 = new Book('1984', 'orwell', '12345');
const book2 = new Book('Brave new World', 'huxley', '67890');
console.log(book1);
console.log(book2);

console.log(librarian.addBook(book1));
console.log(librarian.addBook(book2));

console.log(library.registerMember(member));

console.log(member.borrowBooks(book1));
// console.log(member.borrowBooks(book2));

console.log(librarian.lendBook(book2, member));
console.log(librarian.receiveBook(book2));








