const express = require('express');
const formData = require('express-form-data');
const app = express();
// const database = require('./config/database.js');

app.use(express.json());
app.use(formData.parse());

const routes = require('./routes/index.js');
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
}

app.use(routes);
app.use(errorHandler);

app.listen(3000, function () {
    console.log('Server is running on port 3000');
})