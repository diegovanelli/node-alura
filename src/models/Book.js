import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    numberOfPages: {type: String}
});

const books = mongoose.model('books', bookSchema);

export default books;