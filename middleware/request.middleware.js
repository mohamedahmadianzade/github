const requestMiddleware = (req, res, next) => {
  console.log("--------------------------------");
  console.log(`${new Date().toLocaleTimeString()} ${req.method}:${req.url}`);
  console.log("--------------------------------");
  next();
};
module.exports = requestMiddleware;
