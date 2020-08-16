const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/Users");
const Contact = require("../models/Contacts");

// @route       GET api/contacts
// @desc        Get all user contacts
// @access      Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route       POST api/contacts
// @desc        Add new contact
// @access      Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact
// @access      Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
