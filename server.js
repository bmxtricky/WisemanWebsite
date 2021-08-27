const express = require('express');
const path = require('path');

const app = express();
app.use('/style.css', express.static(path.resolve(__dirname, 'frontend', 'style.css')));
app.use('/images', express.static(path.resolve(__dirname, 'frontend', 'images')));
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));
app.get('/*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});
app.listen(process.env.PORT || 50600, () => console.log('Server running...'));