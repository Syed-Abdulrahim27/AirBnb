import ListingCard from "../ListingCard/ListingCard";
import "./Listings.css";
export default function Listings() {
  const Listingdata = [
    {
      Title: "Go VIP with Kevin Hart",
      Image: "src/img/kevinhart.webp",
      HostedBy: "Kevin Hart",
      Availability: "Sold Out",
      Price: 100,
    },
    {
      Title: "Beachfront Villa in Malibu",
      Image: "src/img/Beachfront Villa in Malibu.jpg",
      HostedBy: "John Doe",
      Availability: "Available",
      Price: 100,
    },
    {
      Title: "Countryside Cabin Escape",
      Image: "src/img/Countryside Cabin Escape.jpg",
      HostedBy: "Jane Smith",
      Availability: "Few Spots Left",
      Price: 100,
    },
    {
      Title: "Luxury Stay in the Mountains",
      Image: "src/img/Luxury Stay in the Mountains.jpg",
      HostedBy: "Emily Johnson",
      Availability: "Available",
      Price: 100,
    },
    {
      Title: "Exclusive Island Retreat",
      Image: "src/img/Exclusive Island Retreat.jpg",
      HostedBy: "Megan Wilson",
      Availability: "Sold Out",
      Price: 100,
    },
    {
      Title: "Historic Downtown B&B",
      Image: "src/img/Historic Downtown B&B.jpg",
      HostedBy: "Alex Lee",
      Availability: "Available",
      Price: 100,
    },
    {
      Title: "Adventure Camping in the Wild",
      Image: "src/img/Adventure Camping in the Wild.jpg",
      HostedBy: "Chris Martin",
      Availability: "Few Spots Left",
      Price: 100,
    },
    {
      Title: "City Penthouse Getaway",
      Image: "src/img/City Penthouse Getaway.jpg",
      HostedBy: "Nina Williams",
      Availability: "Available",
      Price: 100,
    },
    {
      Title: "Glamping in the Desert",
      Image: "src/img/Glamping in the Desert.jpg",
      HostedBy: "Rachel Green",
      Availability: "Sold Out",
      Price: 100,
    },
    {
      Title: "Romantic Treehouse Stay",
      Image: "src/img/Romantic Treehouse Stay.jpg",
      HostedBy: "Ross Geller",
      Availability: "Available",
      Price: 100,
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
