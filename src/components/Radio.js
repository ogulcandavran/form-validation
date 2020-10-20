import React from "react";

const Radio = ({ name, label, onChange, value }) => {
  return (
    <div className="flex-row margin-btm">
      <label for={label}>{label}</label>
      <input
        id={label}
        name={name}
        type="radio"
        onChange={onChange}
        value={value}
        className="radio-button"
      />
    </div>
  );
};

export default Radio;
