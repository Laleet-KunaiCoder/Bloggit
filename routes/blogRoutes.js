const express = require('express')
const router= express.Router()
const blogcontroller =require('../contorllers/blogController')

router.get('/blogs',blogcontroller.blog_index)
router.get('/blogs/create', blogcontroller.blog_create_get);
router.get('/blogs/:id',blogcontroller.blog_details)
router.post('/blogs',blogcontroller.blog_create_post)
router.delete('/blogs/:id',blogcontroller.blog_delete)

module.exports= router;