const express = require('express');
const cors=require("cors");
const connect=require("./src/config/db");
const jobsRoute = require('./src/job/job.router');
require("dotenv").config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('hello'));
app.use("/jobsApi",jobsRoute);

const PORT=process.env.PORT || 8080
app.listen(PORT, async() => {
    await connect();
    console.log('server started on port 8080')
})