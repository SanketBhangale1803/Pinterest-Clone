const mongoose = require('mongoose');

//Creating a db section for the storage of user details
mongoose.connect('mongodb://127.0.0.1:27017/user-details');

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post' // Assuming there is a separate Post model
    }
  ],
  dp: {
    type: String // the profile picture is stored as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    require: true
  }
});

// creating a sser model
const User = mongoose.model('User', userSchema);

module.exports = User;
