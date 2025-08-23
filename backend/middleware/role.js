export const checkrole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        status: 403,
        message: "No enter",
      });
      return;
    }
    next();
  };
};
