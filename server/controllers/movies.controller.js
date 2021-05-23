const {
    AppError,
    catchAsync,
    sendResponse,
} = require("../helpers/utils.helper");

const Movie = require('../models/Movie')

const movieController = {};

movieController.create = catchAsync(async (req, res, next) => {
    try {
        const movie = new Movie({ ...req.body })
        await movie.save()
        sendResponse(res, 201, true, { movie }, null, "Create movie successfully")
    } catch (error) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }

});

movieController.list = catchAsync(async (req, res, next) => {
    const movies = await Movie.find({}).limit(20)
    // console.log({ movies })
    sendResponse(res, 201, true, { movies }, null, "Get all movies successfully")
});

movieController.update = catchAsync(async (req, res, next) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id,
            { body: req.body },
            { new: true, }
        );
        movie.save()
        sendResponse(res, 201, true, { movie }, null, 'Update movie successfully'
        );
    } catch (error) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
});

movieController.delete = catchAsync(async (req, res, next) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        sendResponse(res, 201, true, { movie }, null, 'Delete movie successfully'
        );
    } catch (error) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
});

module.exports = movieController;
