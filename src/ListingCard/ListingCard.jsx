import ListingDetail from "../Listing-Detail/Listing-Detail";
import "./ListingCard.css";

export default function ListingCard({ listing }) {
  return (
    <div className="Listing-Card">
      <div className="img">
        <img src={listing.Image} alt={listing.Title} />
      </div>
      <h4>{listing.Title}</h4>
      <h6>Hosted by {listing.HostedBy}</h6>
      <div className="details">
        <ListingDetail>
          <span>
            <i class="fa-solid fa-bed"></i>
          </span>
          <h5>5 bedrooms</h5>
        </ListingDetail>
        <ListingDetail>
          <span>
            <i class="fa-solid fa-bath"></i>
          </span>
          <h5>3 bathrooms</h5>
        </ListingDetail>
        <ListingDetail>
          <span>
            <i class="fa-solid fa-person"></i>
          </span>
          <h5>8 guests</h5>
        </ListingDetail>
        <ListingDetail>
          <span>
            <i class="fa-solid fa-star"></i>
          </span>
          <h5>5 (100)</h5>
        </ListingDetail>
      </div>
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
