import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('hello, world');
});

app.listen(5080, () => {
    console.log('Server is running on http://localhost:5080');
});
