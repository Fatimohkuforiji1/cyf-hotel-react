import React, { useState, useEffect } from "react";
import Moment from "moment";
import allFiles from "./HotelReact.js";
import Restaurant from "./Restaurant";

const Heading = () => {
  return (
    <header className="App-header">
      {" "}
      <h1>CYF Hotel</h1>
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="Office Building"
      />
    </header>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://glasgowtourismandvisitorplan.com/media/1031/glasgowlife_58440115402.jpg"
          alt="Glassgow Tourism"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            A beautiful View of Glassgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://timewise.co.uk/wp-content/uploads/2017/11/Manchester-Town-Hall-380x290.jpg"
          alt="Manchester Powerhouse"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Visit Manchester Today{" "}
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
          alt="London Towr Bridge"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            London, the heart of United Kingdom{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = (prop) => {
  //["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`
  return (
    <div>
      <ul>
        {prop.footer.map((EachFooter, index) => (
          <li key={index}>{EachFooter}</li>
        ))}
      </ul>
    </div>
  );
};
const SearchResults = (props) => {
 const [profile, setProfile] = useState(null);
 const handleButton = event => {
  let el = event.currentTarget;
  if (el.classList.contains("highlighted")) {
    el.classList.remove("highlighted");
  } else {
    el.classList.add("highlighted");
  }
   const profileId = event.currentTarget.childNodes[0].innerText;
   setProfile(profileId);
 }
  
 const BookingKeys = Object.keys(props.results[0]);
  const Bookings = props.results;

  // console.log(BookingKeys);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {BookingKeys.map((bookingKey, index) => (
              <th key={index} scope="col">
                {bookingKey}
              </th>
            ))}
            <th> number of nights </th>
            <th> customer profile </th>
            <th />
          </tr>
        </thead>

        <tbody>
          {Bookings.map((booking, index) => {
            return (
              <TableRow
                key={index}
                BookingKeys={BookingKeys}
                booking={booking}
                handleButton={handleButton}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile profile={profile} />
    </div>
  );
};

const CustomerProfile = (props) => {
  const [customerProfileId, setCustomerProfileId]= useState(null);
  useEffect (()=>{
    fetch(`https://cyf-react.glitch.me/customers/${props.profile}`)
    
    .then(function(response){
      return response.json()

      .then(function(data){
        console.log(data);
        setCustomerProfileId(data);
      });
    });
  }, [props.profile])
   return props.profile ? (
     <ul>
       <li> {"Customer ID: "  + customerProfileId.id}</li>
       <li> {"Customer Email: " + customerProfileId.email}</li>
       <li> {"Customer Phone Number: " + customerProfileId.phoneNumber}</li>
       <li> {"VIP: " +customerProfileId.vip}</li>
     </ul>
   ) : null;
}

const RestaurantButton = (props) => {
  return (
    <button onClick={props.handleOrder} className="btn btn-primary">
      Add
    </button>
  );
};

const Order = (props) => {
  //const orderType = "Pizzas";
  const [order, setOrder] = useState(0);
  const orderOne = () => {
    setOrder(order + 1);
  };
  return (
    <div>
      <li>
        {props.orderType}: {order}{" "}
        <allFiles.RestaurantButton handleOrder={orderOne} />
      </li>
    </div>
  );
};

const TableRow = (props) => {
  return (
    <tr key={props.index} onClick = {props.handleButton}>
      {props.BookingKeys.map((bookingKey) => (
        <td key={bookingKey}>{props.booking[bookingKey]}</td>
      ))}

      <td>
        {Math.round(Moment.duration(
          Moment(props.booking["checkOutDate"]).diff(
            Moment(props.booking["checkInDate"])
          )
        ).asDays())}
      </td>
      <td><button>Show profile</button></td>
    </tr>
  );
};


export default {
  Heading,
  TouristInfoCards,
  Footer,
  SearchResults,
  RestaurantButton,
  Order,
  CustomerProfile,
};
