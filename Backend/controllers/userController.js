const UserDoc = require("../models/UserSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;



const userLogin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body)

  const isExistUser = await UserDoc.findOne({ email: email });

  if (isExistUser) {
    // const isCorrectPassword = bcryptjs.compareSync(password, isExistUser.password);
    const isCorrectPassword = bcryptjs.compareSync(
      password,
      isExistUser.password
    );

    if (isCorrectPassword) {
      jwt.sign({ email: isExistUser.email }, secret, {}, (err, token) => {
        if (err) {
          throw err;
        }

        res.cookie("token", token, {
          httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
          secure: false, // Set to true in production if using HTTPS
          sameSite: "Lax", // Helps with CSRF protection
          maxAge: 5 * 60 * 1000, // 1 hour expiration
        });
        return res
          .status(200)
          .json({ message: "Login Successful", user: isExistUser });
      });
    } else {
      return res
        .status(401)
        .json({ message: "Password is incorrect. Please try again." });
    }
  } else {
    return res.status(402).json({ message: "User didn't register" });
  }
};

const userRegister = async (req, res) => {
  const { username, password, email } = req.body;

  const existingUser = await UserDoc.findOne({ email: email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const user = await UserDoc.create({
      email,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User registered Successfully." });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};

const userInfo = async (req, res) => {
  const cookieData = req.cookies.token;
  // console.log(cookieData) 

  if (!cookieData) {
    return res
      .status(401)
      .json({ message: "Invalid JWT", path: "/login" });
  }

  jwt.verify(cookieData, secret, {}, async (err, userData) => {
    if (err) {
      return res.status(401).json({ message: "Invalid JWT" });
    }
    // console.log(userData);
    const email = userData.email;
    const userDoc = await UserDoc.findOne({ email: email });

    return res.status(200).json(userDoc);
  });

  // res.status(200).json(cookieData)
};

module.exports = { userLogin, userRegister, userInfo };
// export { userLogin, userRegister, userInfo }
