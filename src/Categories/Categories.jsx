import { useState } from "react";
import "./Categories.css";
function Categories() {
  const categories = [
    "Beachfront",
    "Cabins",
    "Trending",
    "Luxury",
    "Mountains",
    "Countryside",
    "Tropical",
    "Urban",
    "Family-friendly",
    "Unique Stays",
    "Pet-friendly",
    "Lakeside",
    "Historic",
    "Boutique",
    "Adventure",
    "Spa & Wellness",
    "Eco-friendly",
    "Ski-in/Ski-out",
    "Island",
    "Desert",
    "Romantic",
    "City Center",
    "Remote",
    "Camping",
    "Resorts",
    "Treehouses",
    "Villas",
    "Hostels",
    "Bed & Breakfast",
    "Farm Stays",
    "Off the Grid",
    "Honeymoon",
    "Golf Retreats",
    "Glamping",
    "Yurts",
    "Boats",
    "Caravans & RVs",
    "Art & Culture",
    "Sport Events",
    "Casual",
    "Business Travel",
  ];
  const [ActiveCategory, setActiveCategory] = useState("");
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-button"
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
