import express from "express";
import db from './config/dbConnect.js';
import routes from './routes/booksRoutes.js'

db.on('error', console.log.bind(console, 'Connection error!'));
db.once('open',  () => {
    console.log('Connection success!')
});

const app = express();
app.use(express.json());
routes(app);

export default app;