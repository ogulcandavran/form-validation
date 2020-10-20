import React from "react";
const Input = ({ label, onChange }) => {
  return (
    <div className="flex-row margin-btm">
      <label for={label}>{label}</label>

      <input
        id={label}
        name="education"
        type="checkbox"
        onChange={onChange}
        value={label}
        className="checkbox"
      />
    </div>
  );
};
export default Input;
