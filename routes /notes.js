const router = require("express").Router();
const fs = require('fs');
const path = require('path');

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
    const newNote = { title, text };

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

module.exports = router;
