const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api/', routes);

app.listen(2000, () => {
  console.log('listening on port 2000!!')
});
