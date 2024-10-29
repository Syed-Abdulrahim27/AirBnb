import { useState } from "react";
import viteLogo from "/vite.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import "./SearchBox/SearchBox.css";
import "./Navbar/Navbar.css";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBox/SearchBox";
import Categories from "./Categories/Categories";
import Listings from "./Listings/Listings";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Categories />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
