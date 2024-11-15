import { useState } from "react";
import axios from "axios";
import "./BookingPage.css";

export default function BookingPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState(null);

  const handleBookNow = () => {
    setLoading(true);

    axios
      .post(`http://localhost:3000/api/Airbnb/Bookings/`, {
        firstName,
        lastName,
        email,
        phoneNo,
        checkInDate,
        checkOutDate,
      })
      .then((response) => {
        setListing(response.data.data.Listing);
        setLoading(false);
        console.log(response.data.data.Listing);
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            name="phoneNo"
            required
          />
        </label>
        <label>
          Check-In Date:
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            name="checkInDate"
            required
          />
        </label>
        <label>
          Check-Out Date:
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            name="checkOutDate"
            required
          />
        </label>
        <button type="submit" onClick={handleBookNow}>
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
      {listing && <div>Booking successful! Listing ID: {listing.id}</div>}
    </div>
  );
}
