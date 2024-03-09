// create token and save it in cookies

const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // options for cookies
  const cookiesOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, cookiesOptions).json({
    success: true,
    user,
    token,
  });
};

module.exports = { sendToken };
