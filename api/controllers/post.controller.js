import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  const query = req.query; // COMES FROM LISTPAGELOADER.js
  // console.log(query);
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000000,
        },
      },
    });

    setTimeout(() => {
      res.status(200).json(posts);
    }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "cant fetch postS!" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "cant fetch post!" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "cant add post!" });
  }
};

export const updatePost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "cant update post!" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId)
      return res.status(403).json({ message: "not Authorized" });

    await prisma.post.delete({
      where: { id },
    });

    return res.status(200).json({ message: "post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "cant delete post!" });
  }
};
