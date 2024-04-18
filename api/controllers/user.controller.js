import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  console.log("it works");

  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get users" });
  }
};

export const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get user" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id; //  id of the user who's trying to update
  const tokenUserId = req.userId; //  id of the user who's actually logged in
  const { password, avatar, ...inputs } = req.body; // these come from the input given (passed as parameters)

  if (id !== tokenUserId)
    return res.status(403).json({ message: "You are not authorized" });

  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }), // don't sent anything if the password is unchanged,
        ...(avatar && { avatar }), // WHY ARE WE DOING THIS??
      },
    });

    const {password : userPassword, ...rest} = updatedUser;

    res.status(200).json(rest); // DONT SENT THIS USER DIRECTLY TO AVOID DISPLAYING PASSWORD IN THE CONSOLE
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id; //  id of the user who's trying to update
  const tokenUserId = req.userId; //  id of the user who's actually logged in

  if (id !== tokenUserId)
    return res.status(403).json({ message: "You are not authorized" });

  try {
    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "User Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to delete user" });
  }
};
