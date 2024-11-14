import "@fortawesome/fontawesome-free/css/all.css";
import "./SearchBox/SearchBox.css";
import "./Navbar/Navbar.css";
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
              <Listings />
              <Footer />
            </div>
          }
        />
        <Route path="/ListingDetails/:id" element={<ListingPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
