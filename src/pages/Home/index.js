import React, { useState } from "react";
import LandingBg from "../../assets/landingbg2.png";
import Like from "../../assets/like.svg";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Calender from "../../assets/calender.svg";
import DropDown from "../../assets/dropdown.svg";
import Location from "../../assets/location.svg";
const hotels = [
  {
    name: "The Grand Hotel",
    location: "New York, NY",
    rating: 4.5,
    numReviews: 1234,
    price: 249.99,
    amenities: ["3 Beds", "1 Washroom", "5x7 m2"],
    //   "images":require('../../assets/landingbg2.png'),
    images:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "The Grand Hotel",
    location: "New York, NY",
    rating: 4.5,
    numReviews: 1234,
    price: 249.99,
    amenities: ["3 Beds", "1 Washroom", "5x7 m2"],
    //   "images":require('../../assets/landingbg2.png'),
    images:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },

  {
    name: "The Grand Hotel",
    location: "New York, NY",
    rating: 4.5,
    numReviews: 1234,
    price: 249.99,
    amenities: ["3 Beds", "1 Washroom", "5x7 m2"],
    //   "images":require('../../assets/landingbg2.png'),
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "The Grand Hotel",
    location: "New York, NY",
    rating: 4.5,
    numReviews: 1234,
    price: 249.99,
    amenities: ["3 Beds", "1 Washroom", "5x7 m2"],
    //   "images":require('../../assets/landingbg2.png'),
    images:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];
const Home = () => {
  const [linkActive, setLinkActive] = useState(0);
  return (
    <> 
      <div className="home-page">
        <div className="home-page-bg"> 
          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="search">
              <img src={Search} alt="" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="navlinks">
              <ul>
                <li
                  className={linkActive === 0 ? "active-link" : ""}
                  onClick={() => {
                    setLinkActive(0);
                  }}
                >
                  Rent
                </li>
                <li
                  className={linkActive === 1 ? "active-link" : ""}
                  onClick={() => {
                    setLinkActive(1);
                  }}
                >
                  Rent
                </li>
                <li
                  className={linkActive === 2 ? "active-link" : ""}
                  onClick={() => {
                    setLinkActive(2);
                  }}
                >
                  Rent
                </li>
                <li
                  className={linkActive === 3 ? "active-link" : ""}
                  onClick={() => {
                    setLinkActive(3);
                  }}
                >
                  Rent
                </li>
              </ul>
            </div>
          </div>
          <h1>
            Your one stop <br />
            hub to rent a house
          </h1>
          <p>
            Random demo text which will be repeated Random demo text which will
            be repeated Random demo text which will be repeated
          </p>
        </div>
      </div>
      <div className="filter-component">
        <div className="location-filter | filter">
          <div className="filter-text">
            <h1>Location</h1>
            <p>Dehradun,India</p>
          </div>
          <div className="filter-icon">
            <img src={Location} alt="" />
          </div>
        </div>
        <div className="date-filter | filter">
          <div className="filter-text">
            <h1>When</h1>
            <p>Selet Move-in date</p>
          </div>
          <div className="filter-icon">
            <img src={Calender} alt="" />
          </div>
        </div>
        <div className="price-filter | filter">
          <div className="filter-text">
            <h1>Price</h1>
            <p>$500-$600</p>
          </div>
          <div className="filter-icon">
            <img src={DropDown} alt="" />
          </div>
        </div>
        <div className="type-filter | filter">
          <div className="filter-text">
            <h1>Property Type</h1>
            <p>Apartments</p>
          </div>
          <div className="filter-icon">
            <img src={DropDown} alt="" />
          </div>
        </div>
        <div className="search-btn ">
          <button>Search</button>
        </div>
      </div>
      <div className="all-hotels">
        {hotels.map((hotel) => (
          <div className="hotel-card">
            {/* <img src={hotel.images} alt="" /> */}
            <div className="hotel-card-img">
              <img src={hotel.images} alt="" />
            </div>
            <div className="hotel-details">
              <div className="hotel-details-price">
                <p>
                  {hotel.price} <span>/night</span>{" "}
                </p>
                <div className="like-icon">
                  <img src={Like} alt="" />
                </div>
              </div>
              <div className="hotel-details-name">
                <p>{hotel.name}</p>
              </div>
              <div className="hotel-details-address">
                <p>{hotel.location}</p>
              </div>
              <div className="hotel-details-amenities">
                {/* <p>{hotel.amenities}</p> */}
                {hotel.amenities.map((amenity) => (
                  <div className="amenity">
                    <p>{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
