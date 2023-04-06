const express = require('express');
const v1 = require('./routes/v1_api');

const app = express();

// ex) url :  http://127.0.0.1:3000/api/v1/test
app.use('/api/v1', v1);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3003, () => {
  console.log('App listening on port 3003');
});
