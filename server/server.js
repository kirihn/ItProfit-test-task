const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 9090;

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.post('/api/registration', (req, res) => {
    if (Math.random() > 0.5) {
        res.statusCode = 400;

        setTimeout(() => {
            res.send({
                status: 'error',
                message: 'Bad request',
            });
        }, Math.random() * 1000);

        return;
    }

    setTimeout(() => {
        res.statusCode = 200;
        res.send({
            status: 'success',
            message: 'You are registered',
        });
    }, Math.random() * 1000);
});

app.get('/api/ping', (req, res) => {
    res.statusCode = 200;
    res.send({
        status: 'success',
        message: 'Server is ready',
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
