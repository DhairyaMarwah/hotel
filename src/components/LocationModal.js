import React from "react";

const LocationModal = ({
  selectedOption,
  handleSelectChange,
  locations,
  setopenModal,
}) => {
  return (
    <div className="price-model | modal">
      <select value={selectedOption} onChange={handleSelectChange}>
        {Object.keys(locations).map((key) => (
          <option key={key} value={key}>
            {locations[key]}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div>Selected option: {locations[selectedOption]}</div>
      )}
      <div
        onClick={() => {
          setopenModal("close");
          // console.log(openModal);
        }}
        className="close-model"
      >
        <p>Close </p>
      </div>
    </div>
  );
};

export default LocationModal;
