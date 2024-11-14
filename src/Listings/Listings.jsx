import ListingCard from "../ListingCard/ListingCard";
import "./Listings.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Listings() {
  const [Listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/Airbnb/Listings`)
      .then((response) => {
        setListings(response.data.data.Listings);
        // console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
        setLoading(false);
      });
    console.log(Listings);
    console.log(Array.isArray(Listings));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Listings) {
    return <div>Listing not found</div>;
  }
  return (
    <div className="ListingContainer">
      {Listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
