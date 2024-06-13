function getHome(req, res, next) {
  console.log(req.isAuthenticated());
  console.log(req.user);
  console.log(req.session);
  res.status(200).render("index", { title: "Expire Date Reminder System" });
}

module.exports = { getHome };
