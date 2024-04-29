function getLogin(req, res) {
  res.status(200).render("login", { title: "Login" });
}

// function postLogin(req, res, next) {
//   // Login the user with passport
//   res.sendStatus(200);
// }

function logout(req, res) {
  if (req.user) return res.status(401).redirect("/login");
  req.logout();
  return res.status(302).redirect("/login");
}

module.exports = {
  getLogin,
  logout,
};
