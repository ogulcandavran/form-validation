import React from "react";
const Select = ({ name, onChange, options }) => {
  return (
    <select name={name} onChange={onChange} className="fifty margin-btm">
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};
export default Select;