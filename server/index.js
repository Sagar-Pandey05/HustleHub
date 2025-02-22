const express = require("express");
const connect = require("./db/db");
const dotenv= require("dotenv");

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