function getHome(req, res, next) {
  console.log(req.isAuthenticated());
  res.status(200).render("index", { title: "Home" });
}

module.exports = { getHome };
