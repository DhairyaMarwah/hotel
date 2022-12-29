import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
const DateFilter = ({ setValue, value, setopenModal }) => {
  return (
    <div className="price-model | modal">
      <DateRangePicker
        minDate={new Date()}
        onChange={setValue}
        format="y-MM-dd"
        value={value}
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

export default DateFilter;
