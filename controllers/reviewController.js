const catchAsync = require('./../utils/catchAsync');
const Review = require('./../models/reviewModel');

exports.getAllReview = catchAsync(async (req, res, next) => {
  const reviews = Review.find();

  res.status(201).json({
    status: 'success',
    length: reviews.length,
    data: { reviews }
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'sucess',
    data: {
      review: newReview
    }
  });
});
