import React from "react";
import Moment from "moment";

const Heading = ()=>{
      return(
    <header className="App-header"> <h1>CYF Hotel</h1>
    <img className = "App-logo" src ="https://image.flaticon.com/icons/svg/139/139899.svg" alt="Office Building"/>
   </header>
      ); 
      
}

const TouristInfoCards = () =>{
      return (
 <div className = "cardContainer">
    <div className="card">
	    <img src="https://glasgowtourismandvisitorplan.com/media/1031/glasgowlife_58440115402.jpg" alt="Glassgow Tourism" className="card-img-top" />
	    <div className="card-body">
	    <a href="http://peoplemakeglasgow.com" className="btn btn-primary">A beautiful View of Glassgow</a>
	    </div>
    </div>

    <div className="card">
	    <img src="https://timewise.co.uk/wp-content/uploads/2017/11/Manchester-Town-Hall-380x290.jpg" alt="Manchester Powerhouse" className="card-img-top" />
	    <div className="card-body">
	    <a href="http://visitmanchester.com" className="btn btn-primary">Visit Manchester Today </a>
	    </div>
    </div>

     <div className="card">
	    <img src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg" alt="London Towr Bridge" className="card-img-top" />
	    <div className="card-body">
	    <a href="http://visitlondon.com" className="btn btn-primary">London, the heart of United Kingdom </a>
	    </div>
    </div>
</div>

);
    
}

const Footer = (prop) =>{
      //["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`
    return(
        <div>
          <ul>
        {prop.footer.map((EachFooter,index) => (
          <li key={index}>{EachFooter}</li>
        ))}
      </ul>
        </div>
    )
}
const SearchResults = (prop) =>{
  console.log(prop.results)
  //id`, `title`, `first name`, `surname`, `email`, `room id`, `check in date` and `check out date`
  const BookingKeys = Object.keys(prop.results[0])
  const Bookings = prop.results;

  console.log(BookingKeys)
  return (
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            {BookingKeys.map(function(bookingKey) {
              return <th scope="col">{bookingKey}</th>;
            })}
            <th> number of nights </th>
          </tr>
        </thead>

        <tbody>
          {Bookings.map((booking, index) => {
            return (
              <tr key={index}>
                {BookingKeys.map((bookingKey) => (
                  <td key={bookingKey}>{booking[bookingKey]}</td>
                ))}

                <td>
                  {Moment.duration(
                    Moment(booking["checkOutDate"]).diff(
                      Moment(booking["checkInDate"])
                    )
                  ).asDays()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  };
  


export default {Heading, TouristInfoCards, Footer, SearchResults};