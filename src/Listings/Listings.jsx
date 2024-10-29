import ListingCard from "../ListingCard/ListingCard";
import "./Listings.css";
export default function Listings() {
  const Listingdata = [
    {
      Title: "Go VIP with Kevin Hart",
      Image: "src/img/kevinhart.webp",
      HostedBy: "Kevin Hart",
      Availability: "Sold Out",
    },
    {
      Title: "Beachfront Villa in Malibu",
      Image: "src/img/Beachfront Villa in Malibu.jpg",
      HostedBy: "John Doe",
      Availability: "Available",
    },
    {
      Title: "Countryside Cabin Escape",
      Image: "src/img/Countryside Cabin Escape.jpg",
      HostedBy: "Jane Smith",
      Availability: "Few Spots Left",
    },
    {
      Title: "Luxury Stay in the Mountains",
      Image: "src/img/Luxury Stay in the Mountains.jpg",
      HostedBy: "Emily Johnson",
      Availability: "Available",
    },
    {
      Title: "Exclusive Island Retreat",
      Image: "src/img/Exclusive Island Retreat.jpg",
      HostedBy: "Megan Wilson",
      Availability: "Sold Out",
    },
    {
      Title: "Historic Downtown B&B",
      Image: "src/img/Historic Downtown B&B.jpg",
      HostedBy: "Alex Lee",
      Availability: "Available",
    },
    {
      Title: "Adventure Camping in the Wild",
      Image: "src/img/Adventure Camping in the Wild.jpg",
      HostedBy: "Chris Martin",
      Availability: "Few Spots Left",
    },
    {
      Title: "City Penthouse Getaway",
      Image: "src/img/City Penthouse Getaway.jpg",
      HostedBy: "Nina Williams",
      Availability: "Available",
    },
    {
      Title: "Glamping in the Desert",
      Image: "src/img/Glamping in the Desert.jpg",
      HostedBy: "Rachel Green",
      Availability: "Sold Out",
    },
    {
      Title: "Romantic Treehouse Stay",
      Image: "src/img/Romantic Treehouse Stay.jpg",
      HostedBy: "Ross Geller",
      Availability: "Available",
    },
  ];

  return (
    <div className="ListingContainer">
      {Listingdata.map((listing, index) => (
        <ListingCard key={index} listing={listing} />
      ))}
    </div>
  );
}
