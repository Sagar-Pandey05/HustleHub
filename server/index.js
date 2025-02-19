import express from 'express'
import connect from './db/db.js';
import dotenv from 'dotenv'

dotenv.config();
connect();
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})