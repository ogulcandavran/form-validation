let errors = {};
export default e => {
  const {
    target: { name, value }
  } = e;
  Object.keys(validateObj[name]).map(validationMethod => {
    if (!validateObj[name][validationMethod](value) && !errors[name]) {
      console.log("adding errors");
      errors[name] = validateMessages[name][validationMethod];
    } else if (
      validateObj[e.target.name][validationMethod](e.target.value) &&
      errors[e.target.name]
    ) {
      console.log("deleting errors");
      delete errors[e.target.name];
      return errors;
    }
    return errors;
  });
  return errors;
};
const validateObj = {
  firstName: {
    missing: value => value,
    text: value => /^[A-Za-z]+([A-Za-z]+)*/.test(value),
    minLength: value => value.length > 2
  },
  lastName: {
    missing: value => value,
    text: value => /^[A-Za-z]+([A-Za-z]+)*/.test(value),
    minLength: value => value.length > 2
  },
  age: {
    missing: value => value,
    number: value => /^[1-9][0-9]?$|^100$/.test(value)
  },
  email: {
    missing: value => value,
    valid: value =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
  },
  phone: {
    missing: value => value,
    valid: value =>
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)
  }
};
const validateMessages = {
  firstName: {
    missing: "Please enter name",
    text: "Please enter valid first name",
    minLength: "Name cannot be shorther than 3 characters"
  },
  lastName: {
    missing: "Please enter name",
    text: "Please enter valid last name",
    minLength: "Name cannot be shorther than 3 characters"
  },
  age: {
    missing: "Please enter age",
    number: "Please enter valid age"
  },
  email: {
    missing: "Please enter email",
    valid: "Please enter valid email"
  },
  phone: {
    missing: "Please enter phone number",
    valid: "Please enter valid phone number"
  }
};