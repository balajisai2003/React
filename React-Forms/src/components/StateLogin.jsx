import { useState } from "react";

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredData, setEnteredData] = useState({
    email: '',
    password: ''
  });

  const [didEdit,setDidEdit] = useState({
    email:false,
    password:false
  });

  const emailIsInvalid = didEdit.email && !enteredData.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Login form submitted \nData: ');
    console.log(enteredData);
    if(emailIsInvalid){
      return;
    }

  }


  function handleInputChange(identifier, value) {
    setEnteredData((prevData) => ({
        ...prevData,
        [identifier]: value
    }));
    setDidEdit((prevData)=>({
      ...prevData,
      [identifier]:false
    }));
  }

  function handleInputBlur(identifier){
    setDidEdit((prevData)=>({
      ...prevData,
      [identifier]:true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>StateLogin</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email"  name="email" 
            onBlur={()=>{handleInputBlur("email")}}
            onChange={(event)=>{handleInputChange("email",event.target.value)}} 
            value={enteredData.email} 
          />
        <div className="control-error">
          {emailIsInvalid && <p>Please enter Valid Email Address</p>}
        </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
            onChange={(event)=>{handleInputChange("password",event.target.value)}} 
            value={enteredData.password} 
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
