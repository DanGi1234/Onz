// jshint esversion: 6
const express = require('express');
const rs = require('randomstring');
const router = express.Router();
const db = require('../config/database');
const post = require('../models/post');

module.exports = class PostManager {

  findAll(callback) {
    post.findAll()
      .then(posts => {
        callback(posts)
      })
      .catch(err => console.log(err))
  };

  findById(id, callback) {
    post.findAll({where : { id : id}})
    .then(posts => {callback(posts)})
    .catch(err => console.log(err))
  }

  create(title, content, callback) {
    post.create({
        id: rs.generate(),
        title,
        content
      })
      .then(post => res.redirect('/posts'))
      .catch(err => console.log(err))
  }
};

/*
router.get('/', (req, res) =>
  post.findAll()
  .then(posts => {
    console.log(posts);
    res.sendStatus(200);
  })
  .catch(err => console.log(err))
);

router.get('/add',(req,res) => {
  const data = {
    id: '111111111111',
    title: 'aaaaaaaaaaaa',
    content: 'bbbbbbbbbbbbb'
  }
  let {id,title,content} = data;

//insert into table
  post.create({
    id,
    title,
    content
  })
  .then(post => res.redirect('/posts'))
  .catch(err => console.log(err))
}
)
*/

// router;
