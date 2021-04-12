import React, {useState} from "react";

//import { SearchButton } from "./hotelReact";


const Search = (props) => {
const [searchInput, setSearchInput] = useState("") 
const handleSearchInput = (event) =>{
  console.log(event.target.value);
   setSearchInput(event.target.value);
}
const handleOnSubmit = (event) =>{
  event.preventDefault();
  props.search(searchInput)
}

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit ={handleOnSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange = {handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
              />
              <SearchButton />
              {/* <button className="btn btn-primary">Search</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

 function SearchButton (){
    return <button className="btn btn-primary">Search</button>
  
}


export default Search;
