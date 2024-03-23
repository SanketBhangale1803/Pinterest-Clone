var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/alluserposts', async function(req, res, next) {
  let user = await userModel
  .findOne({_id: "65ff13d8e55dc14062eb84d5"})
  .populate('posts'); //to get the post data
  res.send(user);
});

router.get('/createuser', async function(req, res, next) {
  let user = await userModel.create({
    username: "sanket",
    password: "Sanket@1234",
    posts: [],
    email: "sanket@mail.com",
    fullName: "Sanket Sanjay Bhangale"
  });
  res.send(user);
});

router.get('/createpost', async function(req,res, next){
  let post = await postModel.create({
    postText: "post 2",
    user: "65ff13d8e55dc14062eb84d5" //id of created user 
  });
  let user = await userModel.findOne({_id: "65ff13d8e55dc14062eb84d5"});//find the user on the basis of user id
  user.posts.push(post._id);
  await user.save();
  res.send("done");
});

module.exports = router;
