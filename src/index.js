const express = require('express');

import heavyProcess from './heavyProcess';
const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }));
  
  
app.get('/test', heavyProcess)

app.listen(3000, () => {
    console.log("server started")
})