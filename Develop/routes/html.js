// requierments
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/notes', (req, res) => {
    console.info(`${req.method} request received to view notes page`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
    console.info(`${req.method} request received to view home page`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;