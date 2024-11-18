import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ListingPage.css";

export default function ListingPage() {
  const { id } = useParams(); // Get the listing ID from the URL
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate(`/booking/${id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/Airbnb/Listings/${id}`)
      .then((response) => {
        setListing(response.data.data.Listing);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
        setLoading(false);
      });
    console.log(listing);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="listing-details">
      <h1>{listing.title}</h1>
      <img src={listing.image} alt={listing.title} />
      <div className="details">
        <p>
          <strong>Type:</strong> {listing.type}
        </p>
        <p>
          <strong>Amenities:</strong>{" "}
          {listing.amenities?.join(", ") || "No amenities available"}
        </p>

        <p>
          <strong>Number of Guests:</strong> {listing.numberOfGuests}
        </p>
        <p>
          <strong>Bedrooms:</strong> {listing.bedrooms}
        </p>
        <p>
          <strong>Bathrooms:</strong> {listing.bathrooms}
        </p>
        <p>
          <strong>Price per Night:</strong> ${listing.pricePerNight}
        </p>
      </div>
      <button class="book-now-button" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}
