import books from './models/Book.js';

class BookController {

    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        });
    }

    static findBookById = (req, res) => {
        const id = req.params.id;

        books.findById(id)
            .populate('author', 'name')
            .exec((err, books) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Book id not found!` });
                } else {
                    res.status(200).send(books);
                }
            })
    }

    static registerBook = (req, res) => {
        const book = new books(req.body);

        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to register book!` });
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book successfully updated!' });
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book successfully removed' });
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }

    static listBookByPublisher = (req, res) => {
        const publisher = req.query.publisher;

        books.find({'publisher': publisher}, {}, (err, books) => {
            res.status(200).send(books);
        })
    }
}

export default BookController;