import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";

const router = express.Router();

router.post('/signin', async (req, res) => {
  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signInUser) {
    res.send({
      _id: signInUser.id,
      name: signInUser.name,
      email: signInUser.email,
      isAdmin: signInUser.isAdmin,
      token : getToken(user)
    });
  } else {
    res.status(401).send({msg: 'Invalid email or password!'});
  }
});

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Bhav Sagar",
      email: "bhavsagar5@gmail.com",
      password: "amazona123$",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({msg: error.message});
  }
});


export default router;