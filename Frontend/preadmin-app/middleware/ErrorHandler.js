const { constants } = require("../constants");
const ErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message });
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ title: "Validation failed", message: err.message });
      break;
    case constants.UNAUTHORIZED:
      res.json({ title: "unauthorized user", message: err.message });
      break;
    case constants.FORBIDDEN:
      res.json({ title: "forbidden entry", message: err.message });
      break;
    case constants.NOT_FOUND:
      res.json({ title: "Not found", message: err.message });
      break;
    case constants.SERVER_ERROR:
      res.json({ title: "server error", message: err.message });
      break;
    default:
      console.log("no problem, you are good to go!");
      break;
  }
};

module.exports = ErrorHandler;
