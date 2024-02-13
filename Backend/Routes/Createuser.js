const express = require("express");
const roter = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

roter.post(
  "/createuser",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await user.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

roter.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    let password = req.body.password;
    try {
      let userdata = await user.findOne({ email });
      if (!userdata) {
        return res.status(400).json({ errors: "Invalid Email address" });
      }
      if (!(userdata.password == password)) {
        return res.status(400).json({ errors: "Invalid Password" });
      }
      return res.json({ success: true });
      
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = roter;
