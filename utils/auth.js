function withAuth(req, res, next) {
  const isAuthenticated = req.session.user_id !== undefined;
  if (isAuthenticated) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = withAuth;
