import React, { useRef, useEffect, useState } from "react";
import moment from "moment";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Calender from "../../assets/calender.svg";
import DropDown from "../../assets/dropdown.svg";
import Location from "../../assets/location.svg";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import HotelCards from "../../components/HotelCards";
import LocationModal from "../../components/LocationModal";
import DateFilter from "../../components/DateFilter";
import PriceFilter from "../../components/PriceFilter";
import OrderByFilter from "../../components/OrderByFilter";
import NumberFilter from "../../components/NumberFilter";
const hotels = [
  {
    images:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },

  {
    images:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2113&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1574060603747-421196bce3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    images:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80",
  },
];
const Home = () => {
  const [orderByValue, setOrderByValue] = useState("popularity");
  const [data, setData] = useState([]);
  const scollToRef = useRef();
  const [number, setNumber] = useState({
    adults: 1,
    children: 1,
  });
  const [locations] = useState({
    "en-gb": "en-gb",
    "en-us": "en-us",
    "en-ca": "en-ca",
    "en-au": "en-au",
  });
  const [selectedOption, setSelectedOption] = useState("en-us");
  const [data2, setData2] = useState(hotels);
  const [searchTerm, setSearchTerm] = useState("");
  const ourDate = new Date();
  const [pirceOrder, setPirceOrder] = useState("hightolow");
  const [value, setValue] = useState([
    moment(ourDate).add(3, "days").format("YYYY-MM-DD"),
    moment(ourDate).add(9, "days").format("YYYY-MM-DD"),
  ]);
  const [linkActive, setLinkActive] = useState(0);
  const [openModal, setopenModal] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChange1 = (event) => {
    setNumber({ ...number, adults: event.target.value });
  };

  const handleChange2 = (event) => {
    setNumber({ ...number, children: event.target.value });
  };
  const sortarray = (type) => {
    console.log(type);
    const nextList = [...data];
    const nextLis2 = [...data2];

    if (type === "hightolow") {
      nextList.sort((a, b) => b["min_total_price"] - a["min_total_price"]);
      nextLis2.reverse();
    } else if (type === "lowtohigh") {
      nextList.sort((a, b) => a["min_total_price"] - b["min_total_price"]);
    }
    setData(nextList);
    setData2(nextLis2);
  };
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
              <input
                value={searchTerm}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search"
              />
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
                  Buy
                </li>
                <li
                  className={linkActive === 2 ? "active-link" : ""}
                  onClick={() => {
                    setLinkActive(2);
                  }}
                >
                  Contact
                </li>
                <li
                  className={linkActive === 3 ? "active-link" : ""}
                  onClick={() => {
                    setLinkActive(3);
                  }}
                >
                  Help
                </li>
              </ul>
            </div>
          </div>
          <h1>
            Your one stop <br />
            hub to rent a house
          </h1>
          <p>
            Find the perfect vacation destination with our wide selection of
            hotels and resorts
          </p>
        </div>
      </div>
      <div className="filter-component">
        <div className="location-filter | filter">
          <div className="filter-text">
            <h1>Location</h1>
            <p>{selectedOption}</p>
          </div>
          <div
            onClick={() => {
              setopenModal("locationModal");
            }}
            className="filter-icon"
          >
            <img src={Location} alt="" />
          </div>
          {openModal === "locationModal" ? (
            <LocationModal
              selectedOption={selectedOption}
              handleSelectChange={handleSelectChange}
              locations={locations}
              setopenModal={setopenModal}
            />
          ) : null}
        </div>
        <div className="date-filter | filter">
          <div className="filter-text">
            <h1>When</h1>
            <p>Selet Move-in date</p>
          </div>
          <div
            onClick={() => {
              setopenModal("dateModal");
            }}
            className="filter-icon"
          >
            <img src={Calender} alt="" />
          </div>
          {openModal === "dateModal" ? (
            <DateFilter
              setValue={setValue}
              value={value}
              setopenModal={setopenModal}
            />
          ) : null}
        </div>

        <div className="price-filter | filter">
          <div className="filter-text">
            <h1>Price</h1>
            <p>{pirceOrder}</p>
          </div>
          <div
            onClick={() => {
              setopenModal("priceModal");
            }}
            className="filter-icon"
          >
            <img src={DropDown} alt="" />
          </div>
          {openModal === "priceModal" ? (
            <PriceFilter
              pirceOrder={pirceOrder}
              sortarray={sortarray}
              setPirceOrder={setPirceOrder}
              setopenModal={setopenModal}
            />
          ) : null}
        </div>
        <div className="type-filter | filter">
          <div className="filter-text">
            <h1>Order By</h1>
            <p>{orderByValue}</p>
          </div>
          <div
            onClick={() => {
              setopenModal("orderByModal");
            }}
            className="filter-icon"
          >
            <img src={DropDown} alt="" />
          </div>
          {openModal === "orderByModal" ? (
            <OrderByFilter
              orderByValue={orderByValue}
              setOrderByValue={setOrderByValue}
              setopenModal={setopenModal}
            />
          ) : null}
        </div>
        <div className="number-filter | filter">
          <div className="filter-text">
            <h1>Select</h1>
            <p>How many are you</p>
          </div>
          <div
            onClick={() => {
              setopenModal("numberModal");
            }}
            className="filter-icon"
          >
            <img src={Calender} alt="" />
          </div>
          {openModal === "numberModal" ? (
            <NumberFilter
              number={number}
              handleChange2={handleChange2}
              handleChange1={handleChange1}
              setopenModal={setopenModal}
            />
          ) : null}
        </div>
        <div className="search-btn ">
          <button onClick={() => scollToRef.current.scrollIntoView()}>
            Search
          </button>
        </div>
      </div>
      <HotelCards
        scollToRef={scollToRef}
        value={value}
        orderByValue={orderByValue}
        number={number}
        selectedOption={selectedOption}
        searchTerm={searchTerm}
        data2={data2}
        data={data}
        setData={setData}
      />
    </>
  );
};

export default Home;

// "en-gb",
//   "en-us",
//   "de",
//   "nl",
//   "fr",
//   "es",
//   "es-ar",
//   "es-mx",
//   "ca",
//   "it",
//   "pt-pt",
//   "pt-br",
//   "no",
//   "fi",
//   "sv",
//   "da",
//   "cs",
//   "hu",
//   "ro",
//   "ja",
//   "zh-cn",
//   "zh-tw",
//   "pl",
//   "el",
//   "ru",
//   "tr",
//   "bg",
//   "ar",
//   "ko",
//   "he",
//   "lv",
//   "uk",
//   "id",
//   "ms",
//   "th",
//   "et",
//   "hr",
//   "lt",
//   "sk",
//   "sr",
//   "sl",
//   "vi",
//   "tl",
//   "is";

// en_GB,en_US,ar_AE,cs_CZ,da_DK,de_AT,de_BE,de_CH,de_DE,el_GR,en_AS,en_AU,en_CA,en_CN,en_HK,en_ID,en_IE,en_IL,en_IN,en_JP,en_KR,en_LA,en_MX,en_MY,en_NZ,en_PH,en_SG,en_TH,en_TW,en_VN,en_ZA,es_AR,es_BO,es_BZ,es_CL,es_CO,es_CR,es_EC,es_ES,es_GT,es_GY,es_HN,es_MX,es_NI,es_PA,es_PE,es_PY,es_SV,es_US,es_UY,es_VE,et_EE,fi_FI,fr_BE,fr_CA,fr_CH,fr_FR,fr_GF,hr_HR,hu_HU,in_ID,is_IS,it_CH,it_IT,iw_IL,ja_JP,ko_KR,lt_LT,lv_LV,ms_MY,nl_BE,nl_NL,nl_SR,no_NO,pl_PL,pt_BR,pt_PT,ru_RU,sk_SK,sv_SE,th_TH,tr_TR,uk_UA,vi_VN,zh_CN,zh_HK,zh_TW
