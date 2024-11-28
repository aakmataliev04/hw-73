const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Home Page');
});
app.get('/:text', (req, res) => {
    return res.send(`${req.params.text}`);
})
app.get('/encode/:text', (req, res) => {
    const cipher = Vigenere.Cipher('password').crypt(`${req.params.text}`);
    return res.send(cipher);
})

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})