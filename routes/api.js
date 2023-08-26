// requierments, ect
const express = require('express');
const router = express.Router();
const db = require('path').join(__dirname, '../db/db.json');

// connect to fs functions to read and write to DB file
const fs = require('fs');

//GET aka read all notes @ /api/notes
router.get("/api/notes", async (req, res) => {
    console.info(`${req.method} request received to view all notes`);
    const allNotes = await fs.readFile(db,'utf-8');
    const notes = JSON.parse(allNotes);
    return res.json(notes);
})


//POST to notes @ /api/notes
router.post('/api/notes', async (req,res) => {
    console.info(`${req.method} request received to add a note`);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
    };
    await fs.writeFile(db, JSON.stringify(newNote));
    const allNotes = await fs.readFile(db,'utf-8');
    const notes = JSON.parse(allNotes);
    return res.json(notes); 
})


//OPTIONAL Delete method based on id

module.exports = router;