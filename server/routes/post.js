import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/post", getPost);

router.post("/post/create", createPost);

router.patch("/post/update/:id", updatePost);

router.delete("/post/delete/:id", deletePost);

export default router;