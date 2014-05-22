var express = require('express');

app = express();

require('./config')(app);

require('./routes')(app);

app.listen(3000);
