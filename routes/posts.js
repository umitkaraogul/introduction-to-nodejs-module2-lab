module.exports = {
  getPosts(req, res) {
    res.send(req.store.posts);
  },
  addPost(req, res) {
    req.store.posts.push(req.body);
    res.status(201).send({ result: req.body });
  },
  updatePost(req, res) {
    req.store.posts[req.params.postId] = req.body;
    res.send({ result: `Update posts: ${req.params.postId}` });
  },
  removePost(req, res) {
    req.store.posts.splice(req.params.postId, 1);
    res.status(204).send({ result: `Remove posts: ${req.params.postId}` });
  },
};
