import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userData.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "Email address not found" });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "100h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "Email address not found and or password does not match. Please try again",
      });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Email address has already been used" });
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({
          message: "The password provided don't match. Please try again.",
        });
    }
    const encryptPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: encryptPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
      expiresIn: "100h",
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "Email address has already been used and or passwords do not match. Please try again.",
      });
  }
};
