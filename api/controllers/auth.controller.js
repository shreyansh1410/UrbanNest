import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  //DB OPERATIONS
  const { username, email, password } = req.body;

  //HASH THE PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);

  try {
    //CREATE A NEW USER
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create user" });
  }
};

export const login = async (req, res) => {
  //db operations
  const { username, password } = req.body;

  try {
    //CHECK IF THE USER EXISTS OR NOT-------
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    //CHECK IF THE PASSWORD IS CORRECT--------
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials!" });

    //GENERATE A COOKIE AND SEND IT TO THE USER------

    // WITHOUT COOKIE-PARSER:
    // res.setHeader("set-cookie", "test=" + "myValue").json("user found!");
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const {password: userPassword, ...userInfo} = user;
    //WITH COOKIE-PARSER:

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // (!!!CANT USE IN LOCALHOST BUT MUST BE TRUE IN PRODUCTION MODE!!!)
        maxAge: age, // COOKIE EXPIRY TIME
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to login!" });
  }
};

export const logout = (req, res) => {
  //db operations
  res.clearCookie("token").status(200).json({ message: "logout successful" });
};
