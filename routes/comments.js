module.exports = {
  getComments(req, res) {
    const comments = req.store.posts[req.params.postId].comments;
    res.send(comments);
  },
  addComment(req, res) {
    const comments = req.store.posts[req.params.postId].comments;
    comments.push(req.body);
    res.status(201).send({ result: req.body });
  },
  updateComment(req, res) {
    const comments = req.store.posts[req.params.postId].comments;
    comments[req.params.commentId] = req.body;
    res.send({ result: `Update comments: ${req.params.postId}` });
  },
  removeComment(req, res) {
    const comments = req.store.posts[req.params.postId].comments;
    comments.splice(req.params.commentId, 1);
    res.status(204).send({ result: `Remove comments: ${req.params.postId}` });
  },
};
