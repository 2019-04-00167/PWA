function generateFlashMessage(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.failed_msg = req.flash("failed_msg");
  // req.locals.error = req.flash("error");
  next();
}

module.exports = { generateFlashMessage };
