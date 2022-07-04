import {useState, useEffect} from "react";
import './App.css';


function App() {
const initialValues={username:"", password:""};
const[formValue,setFormValue]=useState(initialValues);
const[formErrors,setFormErrors]=useState({});

const[isSubmit,setIsSubmit]=useState(false);

const handleChange=(e)=>{
  // console.log(e.target);
  const{name,value}=e.target;
  setFormValue({...formValue,[name]:value});
  console.log(formValue);
};

const handleSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(validate(formValue));
  setIsSubmit(true);
};

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length===0 && isSubmit){
    console.log(formValue);
  }

},[formErrors])

// validate function to validate the form values
const validate=(values)=>{
  const errors={}
  // const regex= /^[^\s@]+S[^\s@]+\.[^\s@]{2,}$/i;
  const regex='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
  if(!values.username){
    errors.username="username is required";
  }else if(values.username.length < 7){
    errors.username="User name should be minimum 7 characters long."}

  if(!values.password){
    errors.password="password is required";
  } else if(values.password.length < 8){
    errors.password="Password should be minimum 8 characters long."
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
            <input type="text" name="username" placeholder="Username" value={formValue.username} onChange={handleChange}/>

          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange}></input>
          </div >
          <p>{formErrors.password}</p>
          <div className="submit-button"></div>
          <button className="fluid ui button blue">Submit</button>
        </div>

      </form>
      </div>
    </div>

</>




  );
  }

export default App;
