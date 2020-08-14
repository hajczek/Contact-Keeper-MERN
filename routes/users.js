const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/Users");

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post(
  "/",
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include invalid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, passowrd } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.statud(400).json({ msg: "User already exist" });
      }

      user = new User({
        name,
        email,
        password,
      });
    } catch (err) {}
  }
);

module.exports = router;
