import { useState } from "react";
import Input from "./input";
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
  const passwordIsInvalid = didEdit.password && enteredData.password.trim().length < 6;
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
        <Input 
          label='email'
          id='email' 
          type='email' 
          name='email' 
          error={emailIsInvalid && 'Please enter a valid email address'} 
          onBlur={()=>{handleInputBlur("email")}}
          onChange={(event)=>{handleInputChange("email",event.target.value)}} 
          value={enteredData.email}
          />

        <Input 
          label='password'
          id='password' 
          type='password' 
          name='password' 
          error={passwordIsInvalid && 'Password must be at least 6 characters long'}
          onChange={(event)=>{handleInputChange("password",event.target.value)}}
          onBlur={()=>{handleInputBlur("password")}} 
          value={enteredData.password} 
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
