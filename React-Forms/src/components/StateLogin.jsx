import { useState } from "react";

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredData, setEnteredData] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Login form submitted \nData: ');
    console.log(enteredData);

  }


  function handleInputChange(identifier, value) {
    setEnteredData((prevData) => {
      return {
        ...prevData,
        [identifier]: value
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
            onChange={(event)=>{handleInputChange("email",event.target.value)}} 
            value={enteredData.email} 
          />
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
