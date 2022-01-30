const mongoose = require('mongoose');
const { User } = require('./../models');
const createError = require('http-errors');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const newUserInstanse = new User(body);
    const createdUser = await newUserInstanse.save();
    if (createdUser) return res.status(201).send({ data: createdUser });
    else {
      return res.status(400).send(createError(400, 'Bad request'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUsers = await User.find().limit(5);
    if (foundUsers) return res.status(200).send({ data: foundUsers });
    else {
      return res.status(404).send(createError(404, 'Not found'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const foundUser = await User.findById(userId);
    if (foundUser) return res.status(200).send({ data: foundUser });
    else {
      return res.status(404).send(createError(404, 'Not found'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updateUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const foundUser = await User.findOneAndUpdate({ _id: userId }, body, {
      new: true,
      runValidators: true,
    });
    if (foundUser) return res.status(200).send({ data: foundUser });
    else {
      return res.status(404).send(createError(404, 'Not found'));
    }
  } catch (err) {
    next(err);
  }
};
module.exports.deleteUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const foundUser = await User.findByIdAndDelete(userId);
    if (foundUser) return res.status(200).send({ data: foundUser });
    else {
      return res.status(404).send(createError(404, 'Not found'));
    }
  } catch (err) {
    next(err);
  }
};
