import React from "react";

const NumberFilter = ({
  number,
  handleChange2,
  handleChange1,
  setopenModal,
}) => {
  return (
    <div className="price-model | modal">
      <p className="adult-text">Adults</p>
      <input
        className="number-input"
        type="number"
        value={number.adults}
        onChange={handleChange1}
      />
      <p>Children</p>
      <input
        className="number-input"
        type="number"
        value={number.children}
        onChange={handleChange2}
      />
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

export default NumberFilter;
