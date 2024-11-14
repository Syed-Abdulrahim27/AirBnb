const express = require("express");

const app = express(); // app initialization
const morgan = require("morgan");

const ListingRouter = require("./Routes/ListingRoutes");
const BookingRouter = require("./Routes/BookingRoutes");

app.use(express.json()); // middleware
app.use(express.static(`${__dirname}/public`)); //middleware

// Routes
app.use("/api/Airbnb/Listings", ListingRouter); // route
app.use("/api/Airbnb/Bookings", BookingRouter); // route
// Start Server
module.exports = app; // export
