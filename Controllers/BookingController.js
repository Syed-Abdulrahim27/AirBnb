exports.checkID = (req, res, next, val) => {
  console.log(`UserId is: ${val}`);
  const id = req.params.id * 1;
  if (id > 5) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID provided",
    });
  }
  next();
};

exports.getAllBookings = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Route not defined",
  });
};
exports.createNewBooking = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Route not defined",
  });
};
exports.getBookingbyID = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Route not defined",
  });
};
exports.UpdateBooking = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Route not defined",
  });
};
exports.DeleteBooking = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Route not defined",
  });
};
