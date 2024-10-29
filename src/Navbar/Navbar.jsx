import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src="./Airbnb_Logo_Bélo.svg.png" alt="Airbnb" />
      </div>
      <button
        id="menu-btn"
        className="nav_menu_btn"
        onClick={handleMenuClick}
        aria-label="Toggle menu"
      >
        <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <div className={`Stays-Experience ${isOpen ? "open" : ""}`}>
        <h3 onClick={handleNavLinkClick}>Stays</h3>
        <h3 onClick={handleNavLinkClick}>Experiences</h3>
        <h3 onClick={handleNavLinkClick}>Airbnb your home</h3>
      </div>
      <div className="user-section">
        <i className="fa-solid fa-globe" style={{ color: "#c9c9c9" }}></i>
        <div className="MenuandUser">
          <span className="Menu">
            <i className="fa-solid fa-bars" style={{ marginRight: "10px" }}></i>
          </span>
          <span className="Profile">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
