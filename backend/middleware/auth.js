const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to continue", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);
  next();
});

module.exports = { isAuthenticated };
