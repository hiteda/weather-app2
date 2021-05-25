const express = require('express');

const app = express();

require('./routes/geocodeRoutes')(app);
require('./routes/weatherRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);