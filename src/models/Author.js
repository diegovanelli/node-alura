import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        nationality: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const Authors = mongoose.model('Authors', AuthorSchema);

export default Authors;