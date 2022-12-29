import React from "react";

const OrderByFilter = ({ orderByValue, setOrderByValue, setopenModal }) => {
  return (
    <div className="price-model | modal">
      <ul>
        <li
          className={orderByValue === "popularity" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("popularity");
          }}
        >
          Popularity
        </li>
        <li
          className={orderByValue === "class_ascending" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("class_ascending");
          }}
        >
          class Ascending
        </li>
        <li
          className={orderByValue === "class_descending" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("class_descending");
          }}
        >
          class_descending
        </li>
        <li
          className={orderByValue === "distance" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("distance");
          }}
        >
          distance
        </li>
        <li
          className={orderByValue === "upsort_bh" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("upsort_bh");
          }}
        >
          upsort_bh
        </li>
        <li
          className={orderByValue === "review_score" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("review_score");
          }}
        >
          review_score
        </li>
        <li
          className={orderByValue === "price" ? "activeSort" : null}
          onClick={() => {
            setOrderByValue("price");
          }}
        >
          price
        </li>
      </ul>
      <div
        onClick={() => {
          setopenModal("close");
        }}
        className="close-model"
      >
        <p>Close </p>
      </div>
      {/* <Model />/ */}
    </div>
  );
};

export default OrderByFilter;
