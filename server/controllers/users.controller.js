const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const User = require('../models/User')

const userController = {};

userController.create = catchAsync(async (req, res, next) => {
  try {
    const user = new User({ ...req.body })
    await user.save()
    accessToken = await user.generateToken();
    sendResponse(res, 201, true, { user, accessToken }, null, "Create user successfully")
  } catch (error) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

userController.list = catchAsync(async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,

      data: users,

      message: `${users.length} users found!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
});

userController.update = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,

      { name: req.body.name },

      { new: true },
    );

    res.status(200).json({
      success: true,

      data: user,

      message: `User updated!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
});

userController.delete = catchAsync(async (req, res, next) => {

});

module.exports = userController;
