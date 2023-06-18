const mongoose = require('mongoose')
//Schema is define the structure of the data model:is surround that
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
