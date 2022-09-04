import express from "express";
import { addPost, getPosts } from "../Controller/postController.js";
// import cassandra from "cassandra-driver";
// import options from "../Database/connection.js";

const router = express.Router();

router.post("/new_post", addPost);
router.get("/", getPosts);

export default router;
