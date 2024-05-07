const express = require("express");
const noteRoute = require('./routes /notes'); // Fixing the path by removing extra spaces
const pageRoute = require('./routes /pages'); // Fixing the path by removing extra spaces
const app = express(); // Create Express application
const PORT = process.env.PORT || 3000; // Define port number

// Middleware to parse request body
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // Using express.json() as middleware

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.use(noteRoute);
app.use('/', pageRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
