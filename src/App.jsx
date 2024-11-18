import "@fortawesome/fontawesome-free/css/all.css";
import "./SearchBox/SearchBox.css";
import "./Navbar/Navbar.css";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBox/SearchBox";
import Categories from "./Categories/Categories";
import Listings from "./Listings/Listings";
import Footer from "./footer/footer";
import ListingPage from "./ListingPage/ListingPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage/BookingPage";

function App() {
  const [listing, setListing] = useState(null);
  function handleSelectListing(Listing) {
    setListing(Listing);
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <SearchBar />
              <Categories />
              <Listings handleSelectListing={handleSelectListing} />
              <Footer />
            </div>
          }
        />
        <Route path="/ListingDetails/:id" element={<ListingPage />} />
        <Route
          path="/booking/:id"
          element={<BookingPage listing={listing} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
