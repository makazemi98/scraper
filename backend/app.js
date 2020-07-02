const express = require('express');
const bodyParser = require('body-parser');

const person = require('./router/person')
const app = new express();


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

app.use('/api',person)




app.listen(5000,()=>{
    console.log(`Server is running in port 5000`)
})