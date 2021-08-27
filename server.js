const express = require('express');
const path = require('path');

const app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', ''));
});
app.use('/style.css', express.static(path.resolve(__dirname, 'frontend', 'style.css')));
app.listen(process.env.PORT || 50600, () => console.log('Server running...'));