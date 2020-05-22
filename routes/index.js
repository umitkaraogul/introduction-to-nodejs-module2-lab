const { getPosts, addPost, updatePost, removePost } = require("./posts");
const {
  getComments,
  addComment,
  updateComment,
  removeComment,
} = require("./comments");

const express = require("express");
const router = express.Router();

//Posts
router.get("/posts", getPosts);
router.post("/posts", addPost);
router.put("/posts/:postId", updatePost);
router.delete("/posts/:postId", removePost);

//Comments
router.get("/posts/:postId/comments", getComments);
router.post("/posts/:postId/comments", addComment);
router.put("/posts/:postId/comments/:commentId", updateComment);
router.delete("/posts/:postId/comments/:commentId", removeComment);

module.exports = router;
