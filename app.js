const express = require('express');
const v1 = require('./routes/v1');

const app = express();

app.use('/api/v1', v1);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
