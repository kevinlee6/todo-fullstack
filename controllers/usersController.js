const router = require("express").Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const { validateRegister } = require("../helper.js");

// all
router.get("/", async (req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: "Unable to get all users." });
  }
});

//get
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.get(parseInt(id));
    return res.status(200).json({ user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Could not find user with that id." });
  }
});

// create
router.post("/", async (req, res) => {
  try {
    if (validateRegister(req.body)) {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      res.status(200).json({ user });
    } else {
      throw Error();
    }
  } catch (e) {
    return res.status(500).json({ message: "Account creation failed." });
  }
});

// update
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { password, newPassword } = req.query;
    if (password === newPassword) {
      return res
        .status(200)
        .json({ message: "Your entered passwords are the same." });
    }
    const user = await User.get(parseInt(id));
    const isSameHash = await bcrypt.compare(password, user.password);
    if (isSameHash) {
      await User.update({
        id: parseInt(id),
        password: newPassword
      });
      return res.status(200).json({ message: "Password update successful." });
    } else {
      throw Error();
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Original password does not match current password." });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const destroy = await User.destroy(parseInt(id));
    return res.status(200).json(destroy);
  } catch (err) {
    return res.status(500).json({ message: "User could not be deleted." });
  }
});

module.exports = router;
