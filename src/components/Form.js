import React from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Checkbox from "./Checkbox";
import Select from "./Select";
import Radio from "./Radio";
import validate from "../validate";
import Textarea from "./Textarea";
import {
  formAction,
  checkboxAction,
  validateAction,
  submitAction,
} from "../actions";

class Form extends React.Component {
  handleChange = (e) => {
    this.props.formAction(e.target.value, e.target.name);
  };
  handleCheckbox = (e) => {
    this.props.checkboxAction(e.target.value, e.target.checked);
  };
  handleValidate = (e) => {
    this.handleChange(e);
    this.props.validateAction(validate(e));
  };
  submitValidation = (e) => {
    const { submitAction, formValues } = this.props;
    const isSubmit =
      formValues.firstName !== "" &&
      formValues.lastName !== "" &&
      formValues.age !== "" &&
      formValues.email !== "" &&
      formValues.phone !== "";
    submitAction(isSubmit);
    return isSubmit;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.submitValidation(e);
    if (
      Object.keys(this.props.errors).length === 0 &&
      this.submitValidation(e)
    ) {
      alert(JSON.stringify(this.props.formValues));
    }
  };

  formRendering = () => {
    const { formValues } = this.props;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className="form wrapper">
        <Input
          name="firstName"
          label="First Name *"
          onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleValidate(e)}
          value={formValues["firstName"]}
          placeholder="First Name"
        />
        <Input
          name="lastName"
          label="Last Name *"
          onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleValidate(e)}
          value={formValues["lastName"]}
          placeholder="Last Name"
        />
        <Input
          name="email"
          label="Email *"
          onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleValidate(e)}
          value={formValues["email"]}
          placeholder="Email"
        />
        <Input
          name="age"
          label="Age *"
          onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleValidate(e)}
          value={formValues["age"]}
          placeholder="Age"
        />
        <Input
          name="phone"
          label="Phone Number *"
          onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleValidate(e)}
          value={formValues["phone"]}
          placeholder="Phone Number"
        />
        <p className="margin-btm heading">Gender</p>
        <div className="flex-space margin-btm">
          <Radio
            name="gender"
            value="female"
            label="Female"
            onChange={(e) => this.handleChange(e)}
          />
          <Radio
            name="gender"
            value="male"
            label="Male"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <p className="margin-btm heading">Education</p>
        <div className="margin-btm">
          <Checkbox label="Primary" onChange={(e) => this.handleCheckbox(e)} />
          <Checkbox
            label="High School"
            onChange={(e) => this.handleCheckbox(e)}
          />
          <Checkbox label="College" onChange={(e) => this.handleCheckbox(e)} />
          <Checkbox label="Master" onChange={(e) => this.handleCheckbox(e)} />
        </div>

        <div className="flex-space margin-btm">
          <p className="margin-btm heading">Nationality</p>
          <Select
            name="nationality"
            onChange={(e) => this.handleChange(e)}
            options={["", "Turkey", "Other"]}
          />
        </div>
        <div className="flex-column margin-btm">
          <p className="margin-btm heading">Additional Info</p>
          <Textarea
            name="info"
            onChange={(e) => this.handleChange(e)}
            placeholder="Please contact us if you have any information"
          />
        </div>
        <button className="button">Submit</button>
      </form>
    );
  };
  render() {
    return <div>{this.formRendering()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    formValues: state.formValues,
    errors: state.errors,
    isSubmittable: state.isSubmittable,
  };
};
export default connect(mapStateToProps, {
  formAction,
  checkboxAction,
  validateAction,
  submitAction,
})(Form);
