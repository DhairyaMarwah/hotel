import React from "react";

const PriceFilter = ({
  pirceOrder,
  sortarray,
  setPirceOrder,
  setopenModal,
}) => {
  return (
    <div className="price-model | modal">
      <ul>
        <li
          className={pirceOrder === "hightolow" ? "activeSort" : null}
          onClick={() => {
            sortarray("hightolow");
            setPirceOrder("hightolow");
          }}
        >
          High to Low
        </li>
        <li
          className={pirceOrder === "lowtohigh" ? "activeSort" : null}
          onClick={() => {
            sortarray("lowtohigh");
            setPirceOrder("lowtohigh");
          }}
        >
          Low to high
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
    </div>
  );
};

export default PriceFilter;
