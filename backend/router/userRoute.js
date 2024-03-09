const express = require("express");
const router = express.Router();

const { upload } = require("../multer");
const { isAuthenticated } = require("../middleware/auth");
const {
  createUser,
  activateUser,
  loginUser,
  getUser,
} = require("../controller/user");

router.post("/create-user", upload.single("file"), createUser);
router.post("/activation", activateUser);
router.post("/login-user", loginUser);

router.get("/getuser", isAuthenticated, getUser);

module.exports = router;
