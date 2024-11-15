import ListingCardDetail from "../ListingCardDetail/ListingCardDetail";
import "./ListingCard.css";
import { useNavigate } from "react-router-dom";

export default function ListingCard({ listing, index }) {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate(`/ListingDetails/${index}`);
  };
  return (
    <div className="Listing-Card" onClick={handleOnclick}>
      <div className="img">
        <img src={listing.image} alt={listing.title} />
      </div>
      <h4>{listing.title}</h4>
      <h6>Hosted by {listing.hostedBy}</h6>
      <div className="Details">
        <ListingCardDetail>
          <span>
            <i class="fa-solid fa-bed"></i>
          </span>
          <h5>{listing.bedrooms} bedrooms</h5>
        </ListingCardDetail>
        <ListingCardDetail>
          <span>
            <i class="fa-solid fa-bath"></i>
          </span>
          <h5>{listing.bathrooms} bathrooms</h5>
        </ListingCardDetail>
        <ListingCardDetail>
          <span>
            <i class="fa-solid fa-person"></i>
          </span>
          <h5>{listing.numberOfGuests} guests</h5>
        </ListingCardDetail>
        <ListingCardDetail>
          <span>
            <i class="fa-solid fa-star"></i>
          </span>
          <h5>5 (100)</h5>
        </ListingCardDetail>
      </div>
      <h4>$ {listing.pricePerNight}</h4>
      <h4
        className={
          listing.Availability === "Few Spots Left"
            ? "Few"
            : listing.Availability !== "Sold Out"
            ? "Available"
            : "Sold"
        }
      >
        {listing.Availability}
      </h4>
    </div>
  );
}
