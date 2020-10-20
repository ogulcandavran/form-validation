import React from "react";
import { connect } from "react-redux";
const Input = ({
  name,
  type,
  label,
  onChange,
  value,
  onBlur,
  errors,
  placeholder,
  isSubmittable,
}) => {
  const className =
    errors[name] || (!value && !isSubmittable)
      ? `red input-text`
      : `input-text`;
  return (
    <div className="flex-column margin-btm">
      <label for={name} className="margin-btm heading">
        {label}{" "}
      </label>
      <input
        id={name}
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={className}
      />

      {errors[name] && <span className="error-message">{errors[name]}</span>}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { errors: state.errors, isSubmittable: state.isSubmittable };
};
export default connect(mapStateToProps)(Input);
