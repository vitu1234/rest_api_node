const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        // const posts = await Post.find().limit(1)
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({message: err})
    }
})

// ADD A POST
router.post('/', async (req, res) => {
    // console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (err) {
        res.json({message: err})
    }

})

//GET A SPECIFIC POST
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json({message: err})
    }

})

//DELETE A POST
router.delete('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const delPost = await Post.remove({
            '_id': req.params.postId
        })
        res.json(delPost)
    } catch (err) {
        res.json({message: err})
    }
})

//UPDATE A POST
router.put('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        })
        res.json(updatePost)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;