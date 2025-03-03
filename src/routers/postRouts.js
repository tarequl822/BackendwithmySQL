import express from "express";
import { getAllPosts, createNewPost, getPostById } from "../controllers/post.controllers.js";

const router = express.Router();

// @route GET && POST - /posts/
router.route("/")
  .get(getAllPosts)
  .post(createNewPost);

router.route("/:id").get(getPostById);

export default router;