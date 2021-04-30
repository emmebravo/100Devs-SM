const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// temporarily commented out so page would load
router.get("/:id", ensureAuth, postController.getPost)
router.post("/createPost", ensureAuth, postController.createPost)
//router.put("/updatePost/:id", ensureAuth, postController.updatePost)
router.post("/deletePost/:id", ensureAuth, postController.deletePost)
router.post("/likePost/:id", ensureAuth, postController.likePost)
module.exports = router