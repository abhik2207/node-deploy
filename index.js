const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

// Importing CORS (Cross-origin resource sharing)
const cors = require('cors');

// Importing path module for routing of react app
const path = require('path');

const server = express();

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("--> Database connected successfully! <--")
    }
    catch (err) {
        console.log("ERROR :( " + err);
    }
}
connectDB();

server.use(cors());

server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(morgan('dev'));

server.use('/products', productRouter.routes);
server.use('/users', userRouter.routes);

server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT, () => {
    console.log("--> Server started successfully! <--");
});
