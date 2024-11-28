const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Home Page');
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})