import { useState, useEffect } from "react";
import './App.css';


function App() {
  const initialValues = { username: "", password: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
    // alert("data submitted");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }

  }, [formErrors])

  // validate function to validate the form values
  const validate = (values) => {
    let errors = {}
    // const regexForUsername = new RegExp('');
    // const regexForUsername = /(?=.{7,}$)(?=.*[a-zA-Z])(?=.*[0-9]).*$/;
    const regexForUsername = /^[A-Za-z0-9 ]+$/;
    if (!values.username) {
      errors.username = "username is required";
    } else if (values.username.length < 7) {
      errors.username = "User name should be minimum 7 characters long."}
    
else if(!values.username.match(regexForUsername)){
  errors.username = "Username should not have any special characters."
}
// console.log(values.username);
// console.log(typeof values.username);

  
    const regexForPassword = /(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
       
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be minimum 8 characters long."}
   else if(!values.password.match(regexForPassword)){
    errors.password = "Password should have at least 1 special character, 1 numeric character and and one capital alphabet"
  }


  return errors;
};



return (
  <>

    <div className="container">
      {/* {Object.keys(formErrors).length===0 && isSubmit ? (<div className="ui message success">signed in successfully</div>) */}
      <div className='sub-container'>


        {/* <pre>{JSON.stringify(formValue,undefined,2)}</pre> */}

        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" value={formValue.username} onChange={handleChange} />

            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange}></input>
            </div >
            <p>{formErrors.password}</p>
            <div className="submit-button"></div>
            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    </div>

  </>




);
  }

export default App;
