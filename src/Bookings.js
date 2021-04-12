import React, {useState, useEffect} from "react";
import Search from "./Search.js";
import allFiles from "./HotelReact.js";
import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {
  const [bookings, setBookings] = useState();
   //setBookings
  const search = searchVal => {
    const searchValCase = searchVal.toLowerCase();
    const filteredSearch = bookings.filter(function(booking){
      if ((booking["firstName"].toLowerCase().includes(searchValCase))
      ||(booking["surname"].toLowerCase().includes(searchValCase))){
      return booking;
      }
    })
    if(filteredSearch.length != 0){
      setBookings(filteredSearch);
    }
    console.info("TO DO!", searchVal);
  };

  const  [dataFetch, setDataFetch] =useState(false);

  const DelayFetch =() =>{
    fetch (`https://cyf-react.glitch.me`)
    .then(function (response){
      return response.json()
     })
     .then(function(data){
       setBookings(data)
       setDataFetch(true);
     })
     .catch(function(error){
      alert("Please refresh, there is an error");
     })
  }
  useEffect (()=>{
    setTimeout(()=>DelayFetch(), 5000)
     }, []);

  return dataFetch ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <allFiles.SearchResults results={bookings} />
      </div>
    </div>
  ) :(<h2>Page Loading, Please Wait....  </h2>)
}


export default Bookings;
