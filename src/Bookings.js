import React, {useState} from "react";
import Search from "./Search.js";
import allFiles from "./HotelReact.js";
import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
   //setBookings
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <allFiles.SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
