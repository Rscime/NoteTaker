// requierments, ect
const express = require('express');
const router = express.Router();
const db = require('path').join(__dirname, '../db/db.json');

// connect to fs functions to read and write to DB file
const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');
const util = require('util').promisify;


//GET aka read all notes @ /api/notes
router.get("/api/notes", (req, res) => {
    console.info(`${req.method} request received to view all`);
    const notes = fs.readFile(db,'utf-8');
    return res.json(notes);
})


//POST to notes @ /api/notes
//** need to add in a incrementor */
router.post('/api/notes', (req,res) => {
    console.info(`${req.method} request received to add a note`);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
    };
    fs.writeFile(db, JSON.stringify(newNote));
    const notes = fs.readFile(db,'utf-8');
    return res.json(notes);  
})


//OPTIONAL Delete method based on id

module.exports = router;