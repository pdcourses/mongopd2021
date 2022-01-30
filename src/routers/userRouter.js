const { Router } = require('express');
const { userController } = require('../controllers');
const userRouter = Router();

userRouter
  .route('/')
  .post(userController.createUser)
  .get(userController.getUsers);

userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = userRouter;
