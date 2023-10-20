class LibraryCollection {
    //constructor with onlyh one argument
    constructor(capacity) {
        // maybe i need validation???
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        // Error handling
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        const book = {
            bookName,
            bookAuthor,
            payed: false
        };
        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find(x => x.bookName === bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const book = this.books.find(x => x.bookName === bookName);

        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books = this.books.filter(x => x != book);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            const emptySpotsCount = this.capacity - this.books.length;
            let output = `The book collection has ${emptySpotsCount} empty spots left.\n`;

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            this.books.forEach(book => {
                output += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n`;
            });

            return output.trim();
        }

        const authorBooks = this.books.filter(x => x.bookAuthor === bookAuthor);

        if (authorBooks.length === 0) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        authorBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
        let output = '';

        //maybe not many books???
        authorBooks.forEach(book => {
            output += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
        });

        return output.trim();
    }
}