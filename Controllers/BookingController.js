const fs = require("fs");
const path = require("path");
const Bookings = JSON.parse(
  fs.readFileSync(`${__dirname}/../BookingData.json`)
);
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
  const newId = Bookings.length + 1;
  const newBooking = Object.assign({ id: newId }, req.body);
  Bookings.push(newBooking);

  // Write the updated bookings array to the file
  fs.writeFile(
    path.join(__dirname, "../BookingData.json"),
    JSON.stringify(Bookings, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Failed to write to file",
        });
      }

      res.status(201).json({
        status: "success",
        data: {
          Booking: newBooking,
        },
      });
    }
  );
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
