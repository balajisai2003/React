import { useRef, useState } from "react";
//REF LOGIC
export default function Login() {

  const [emailInvalid, setEmailInvalid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Login form submitted \nEmail:'+ emailRef.current.value + '\nPassword: ' + passwordRef.current.value);
    const emailIsValid = emailRef.current.value.includes('@');
    if(!emailIsValid){
      setEmailInvalid(true);
      return;
    }
    setEmailInvalid(false);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>RefLogin</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">
            {emailInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
