const express = require('express');

const app = express();

require('./routes/geocodeRoutes')(app);
require('./routes/weatherRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Make sure express serves production assets (i.e.
    // main.js, main.css)
    app.use(express.static('client/build'));

    // Make express serve up index.html if it doesn't
    // recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);