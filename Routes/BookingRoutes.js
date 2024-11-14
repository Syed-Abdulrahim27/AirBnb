const express = require("express");
const BookingController = require("./../Controllers/BookingController");

const BookingRouter = express.Router();
//Middleware
BookingRouter.param("id", BookingController.checkID);
//
BookingRouter.route("/")
  .get(BookingController.getAllBookings)
  .post(BookingController.createNewBooking);
BookingRouter.route("/:id")
  .get(BookingController.getBookingbyID)
  .patch(BookingController.UpdateBooking)
  .delete(BookingController.DeleteBooking);
module.exports = BookingRouter;
