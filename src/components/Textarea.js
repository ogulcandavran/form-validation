import React from "react";
const Textarea = ({ name, onChange, placeholder }) => {
  return (
    <textarea
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="textarea margin-btm"
    />
  );
};
export default Textarea;