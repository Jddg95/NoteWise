const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

const dbFilePath = path.join(__dirname, '../db/db.json');

router.get('/api/notes', (req, res) => {
    fs.readFile(dbFilePath, (err, data) => {
        if (err) {
            throw err;
        }
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv1() };

    fs.readFile(dbFilePath, (err, data) => {
        if (err) {
            throw err;
        }

        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(dbFilePath, JSON.stringify(notes), (err) => {
            if (err) {
                throw err;
            }
            res.json(newNote);
        });
    });
});

router.delete('/api/notes/:id', (req, res) => {
    fs.readFile(dbFilePath, (err, data) => {
        if (err) {
            throw err;
        }

        const notes = JSON.parse(data);
       const filteredNotes = notes.filter((note)=> 
            note.id != req.params.id);

        fs.writeFile(dbFilePath, JSON.stringify(filteredNotes), (err) => {
            if (err) {
                throw err;
            }
            res.json(filteredNotes);
        });
    });
})

module.exports = router;
