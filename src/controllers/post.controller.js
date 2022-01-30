const mongoose = require('mongoose');
const { Post } = require('./../models');
const createError = require('http-errors');

module.exports.getPosts = async (req, res, next) => {
  try {
    const foundPosts = await Post.find().populate('userId');
    if (foundPosts) return res.status(201).send({ data: foundPosts });
    else {
      return res.status(400).send(createError(400, 'Bad request'));
    }
  } catch (err) {
    next(err);
  }
};
