import Post from "../models/post.js";

export const getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll(); // Fetch all posts

    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};

export const createNewPost = async (req, res, next) => {
  try {
    const { title, body } = req.body; // Read data from request body
    console.log(title, body);

    let post = new Post(title, body);
    post = await post.save(); // Save data to database

    console.log(post);
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    const postId = req.params.id; // Get ID from request params

    const [post, _] = await Post.findById(postId); // Fetch post by ID

    res.status(200).json({ post: post[0] });
  } catch (error) {
    next(error);
  }
};