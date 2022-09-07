const authorize = (req, res, next) => {
  const { user } = req.query; // Looking for "user" in query string
  if (user === "John") {
    req.user = { name: "John", id: 3 };
    next();
  } else { // 401 for unauthorized
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
