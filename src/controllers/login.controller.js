function getLogin(req, res) {
  res.status(200).render("login", { title: "Login" });
}

// function postLogin(req, res, next) {
//   // Login the user with passport
//   res.sendStatus(200);
// }

function logout(req, res) {
  console.log("session: ");
  console.log(req.session);
  console.log("logout : ");
  console.log(req.logout);
  if (req.user) {
    req.logout();
    // req.flash("You are now logged out!");
    return res.status(401).redirect("/login");
  }
  return res.status(302).redirect("/login");
}

module.exports = {
  getLogin,
  logout,
};
