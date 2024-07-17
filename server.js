const express = require('express');
const app = express();
const port = 4000;

// Array of quotes
const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
];

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Endpoint to get a random quote
app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
