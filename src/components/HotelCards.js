import React from 'react'
import { useEffect, useState } from "react";
import Like from "../assets/like.svg";
import moment from 'moment';
import Location from "../assets/location.svg";
const HotelCards = ({
  value,
  orderByValue,
  number,
  selectedOption,
  searchTerm,
  data2,
  data,
  setData,
  scollToRef,
}) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
  };
  // console.log(data2);
    const fetchData = async () => {
        try {
    const res = await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&checkin_date=${moment(value[0]).format("YYYY-MM-DD")}&checkout_date=${moment(value[1]).format("YYYY-MM-DD")}&units=metric&order_by=${orderByValue}&adults_number=${number.adults}&filter_by_currency=AED&locale=${selectedOption}&dest_id=-553173&dest_type=city&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&children_number=${number.children}&page_number=0&include_adjacency=true`,options)
          var json = await res.json(); 
          setData(json.result); 
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        fetchData();
      }, [orderByValue,value,selectedOption,number]);
  return (
    <div ref={scollToRef}   className="all-hotels">
        {data?.slice(0, 15)?.filter((hotel) => hotel?.hotel_name.toLowerCase().includes(searchTerm.toLowerCase())).map((hotel, index) => (
          <div className="hotel-card">
            <div className="hotel-card-img">
              <img src={data2[index]?.images} alt="" />
            </div>
            <div className="hotel-details">
              <div className="hotel-details-price">
                <p>
                  ${hotel?.min_total_price} <span>/night</span>{" "}
                </p>
                <div className="like-icon">
                  <img src={Like} alt="" />
                </div>
              </div>
              <div className="hotel-details-name">
                <p>{hotel?.hotel_name?.slice(0, 24)}..</p>
              </div>
              <div className="hotel-details-address">
                <p>
                  {" "}
                  <img src={Location} alt="" /> {hotel?.address}
                </p>
              </div>
              <div className="hotel-details-amenities">
                <p
                  dangerouslySetInnerHTML={{
                    __html: hotel?.unit_configuration_label,
                  }}
                >
                  {}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default HotelCards