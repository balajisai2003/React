import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import Input from "./input";
import { useInput } from "../hooks/useInput";
export default function Login() {

  const {
    value:emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid
  } = useInput('',(value)=>isEmail(value)&&isNotEmpty(value));


  const {
    value:PasswordValue,
    handleInputChange: handlePaswordChange,
    handleInputBlur: handlePasswoedBlur,
    hasError: passwordIsInvalid
  } = useInput('',(value)=>hasMinLength(value,6) );
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Login form submitted \nData: ');
    if(emailIsInvalid || passwordIsInvalid){
      return;
    }

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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange} 
          value={emailValue}
          />

        <Input 
          label='password'
          id='password' 
          type='password' 
          name='password' 
          error={passwordIsInvalid && 'Password must be at least 6 characters long'}
          onChange={handlePaswordChange}
          onBlur={handlePasswoedBlur} 
          value={PasswordValue} 
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
