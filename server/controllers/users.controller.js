const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const User = require('../models/User')

const userController = {};

userController.create = catchAsync(async (req, res, next) => {
  const user = new User({ ...req.body })
  await user.save()
  accessToken = await user.generateToken();
  console.log({ user })
});

userController.list = catchAsync(async (req, res, next) => {

});

userController.update = catchAsync(async (req, res, next) => {

});

userController.delete = catchAsync(async (req, res, next) => {

});

module.exports = userController;
