import { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./BookingPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingPage({ listing }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [numberofGuests, setnoOfGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  const handleBookNow = () => {
    setError("");
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNo ||
      !numberofGuests ||
      !checkInDate ||
      !checkOutDate
    ) {
      setError("*Please fill in all the required fields!");
      return;
    }
    setLoading(true);
    axios
      .post(`http://localhost:3000/api/Airbnb/Bookings/`, {
        firstName,
        lastName,
        email,
        phoneNo,
        numberofGuests,
        checkInDate,
        checkOutDate,
        listingId: listing.id,
      })
      .then((response) => {
        setShouldScroll(true);
        setUserDetails(response.data.data.Booking);
        setLoading(false);
        setFirstName("");
        setLastName("");
        setCheckInDate("");
        setCheckOutDate("");
        setEmail("");
        setError(null);
        setPhoneNo("");
        setnoOfGuests(1);
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        toast.success("Booking Successful!", {
          position: "top-center",
          style: {
            whiteSpace: "nowrap",
          },
          autoClose: 5000,
        });
      })
      .catch((error) => {
        toast.error("Error during booking. Please try again.", {
          position: "top-center",
          style: {
            whiteSpace: "nowrap",
          },
          autoClose: 5000,
        });
        setLoading(false);
      });
  };

  const paragraphStyle = {
    margin: "5px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007bff",
  };

  return (
    <div
      style={{
        padding: "0px",
        margin: "0px",
        backgroundImage: `url("../src/img/Luxury Stay in the Mountains.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "85vh",
        width: "100%",
      }}
    >
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
          Number of Guests:
          <select
            value={numberofGuests}
            onChange={(e) => setnoOfGuests(e.target.value)}
            required
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (option) => (
                <option key={option} value={option}>
                  {option} guests
                </option>
              )
            )}
          </select>
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
      {error && (
        <div
          style={{
            color: "red",
            marginTop: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {error}
        </div>
      )}
      {userDetails && listing && (
        <div
          ref={bottomRef}
          style={{
            padding: "20px",
            margin: "20px 0",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#28a745",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Booking Successful!
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "#007bff" }}>User Details</h3>
              <p style={paragraphStyle}>First Name: {userDetails.firstName}</p>
              <p style={paragraphStyle}>Last Name: {userDetails.lastName}</p>
              <p style={paragraphStyle}>Email: {userDetails.email}</p>
              <p style={paragraphStyle}>Phone No: {userDetails.phoneNo}</p>
              <p style={paragraphStyle}>Check In: {userDetails.checkInDate}</p>
              <p style={paragraphStyle}>
                Check Out: {userDetails.checkOutDate}
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "#007bff" }}>Listing Details</h3>
              <p style={paragraphStyle}>Title: {listing.title}</p>
              <p style={paragraphStyle}>Location: {listing.location}</p>
              <p style={paragraphStyle}>Hosted By: {listing.hostedBy}</p>
              <p style={paragraphStyle}>Type: {listing.type}</p>
              <p style={paragraphStyle}>
                Price/Night: ${listing.pricePerNight}
              </p>
              <p style={paragraphStyle}>
                Guests Allowed: {listing.numberOfGuests}
              </p>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
