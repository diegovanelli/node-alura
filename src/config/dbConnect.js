import mongoose from "mongoose";

mongoose.connect('mongodb+srv://diegovanelli:vanelli123@vanelli.alp03.mongodb.net/vanelli-bookstore?retryWrites=true&w=majority');

const db = mongoose.connection;

export default db;