const express = require("express");
const { createUser, activateUser } = require("../controller/user");
const multer = require("multer");
const { upload } = require("../multer");
const router = express.Router();

router.post("/create-user", upload.single("file"), createUser);
router.post("/activation", activateUser);

module.exports = router;
