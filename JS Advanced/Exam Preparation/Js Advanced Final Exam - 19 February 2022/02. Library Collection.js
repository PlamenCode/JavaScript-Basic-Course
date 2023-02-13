// Js Advanced Final Exam - 19 February 2022 
// 91/100
class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity < 1) {
            throw new Error("Not enough space in the collection.");
        };
        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        };
        this.books.push(book);
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    };

    payBook(bookName) {
        let book = this.books.find(a => {
            if (a.bookName == bookName) {
                return a;
            };
            return false;
        });

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`)
        };

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        };

        book.payed = true;
        return `${bookName} has been successfully paid.`
    };

    removeBook(bookName) {
        let book = this.books.find(a => {
            if (a.bookName == bookName) {
                return a;
            };
            return false;
        });

        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        };

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        };

        let index = this.books.indexOf(book);
        let removedBook = this.books.splice(index, 1);
        this.capacity++;
        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = `The book collection has ${this.capacity} empty spots left.\n`;

            let sortedBooks = this.books.sort((a, b) => {
                return a.bookName.localeCompare(b.bookName);
            });

            for (let i = 0; i < sortedBooks.length; i++) {
                let length = sortedBooks.length;
                let payed = sortedBooks[i].payed ? 'Has Paid' : 'Not Paid';

                if (i < length - 1) {
                    result += `${sortedBooks[i].bookName} == ${sortedBooks[i].bookAuthor} - ${payed}.\n`;
                } else {
                    result += `${sortedBooks[i].bookName} == ${sortedBooks[i].bookAuthor} - ${payed}.`;
                }
            }
            return result;
        };

        let sorted = this.books.sort((a) => {
            if (a.bookAuthor == bookAuthor) {
                return a;
            }
        });

        if (!sorted) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        };

        let result = '';

        for (const data of sorted) {
            let hasPaid = data.payed ? 'Has Paid' : 'Not Paid';
            result += `${data.bookName} == ${data.bookAuthor} - ${hasPaid}.\n`;
        };
        return result.trim();
    };

}
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));



