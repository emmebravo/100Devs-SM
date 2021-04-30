const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0
  },
  user: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)