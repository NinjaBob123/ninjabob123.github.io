const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies from POST requests
app.use(express.json());

// GET endpoint to fetch the contents of data.json
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            return res.status(500).json({ message: 'Error reading data file' });
        }
        res.json(JSON.parse(data));
    });
});

// POST endpoint to update data.json
app.post('/data', (req, res) => {
    const newData = req.body;

    // Read, modify, and save data.json
    fs.writeFile('data.json', JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to data.json:', err);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.json({ message: 'Data updated successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
