import "./SearchBox.css";
import SearchComponent from "../SearchComponent";
import { useState } from "react";

export default function SearchBar() {
  const [Search, setSearch] = useState("");
  const [Checkin, setCheckin] = useState("");
  const [CheckOut, setCheckOut] = useState("");
  const [noOfPeople, setnoOfPeople] = useState(0);
  return (
    <>
      <div className="SearchBox">
        <div className="SearchBar">
          <SearchComponent Title={"Where"}>
            <input
              type="text"
              placeholder="Search destinations"
              value={Search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </SearchComponent>
          <SearchComponent Title={"Check in"}>
            <input
              type="date"
              onChange={(event) => setCheckin(event.target.value)}
            />
          </SearchComponent>
          <SearchComponent Title={"Check out"}>
            <input
              type="date"
              onChange={(event) => setCheckOut(event.target.value)}
            />
          </SearchComponent>
          <SearchComponent Title={"Who"}>
            <select
              style={{
                width: "100%",
                padding: "8px 12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                color: "#333",
                cursor: "pointer",
              }}
              value={"Add guests"}
              onChange={(event) => setnoOfPeople(event.target.value)}
            >
              <option value="">Number of Guests</option>
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </SearchComponent>
          <button className="search-button">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>
      </div>
      <hr className="custom-line" />
    </>
  );
}
