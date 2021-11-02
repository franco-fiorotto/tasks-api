const catchError = (err, req, res, next) => {
  if (!err) return next();
  console.log(err.stack);
  res.status(err.type).send(`Error type: ${err.message}`);
};

module.exports = catchError;
