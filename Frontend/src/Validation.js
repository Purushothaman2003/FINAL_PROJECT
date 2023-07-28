const validation = (values) => {
    let errors = {};
  
    // Validate name
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
  
    // Validate email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
  
    // Validate password
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    // Validate confirm password
    if (!values.confirm_password) {
      errors.confirm_password = 'Confirm Password is required';
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }
  
    return errors;
  };
  
  export default validation;
  