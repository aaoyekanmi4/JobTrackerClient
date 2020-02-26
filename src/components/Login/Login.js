import React, {useState, useContext} from "react";
import { AuthContext } from '../../context/AuthContext';

import { Link, useHistory } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const {sendLoginCredentials, error, setError }= useContext(AuthContext);
  const history = useHistory();

  const [loginInput, setLoginInput] = useState({
    user_name:"",
    password: ""
  })
  const handleChange = event => {
    //clear error on input 
    setError('');
    
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setLoginInput(prevState =>{
    return {...prevState, [name]:value}
    });
  };
 const handleSubmitCredentials = (event) => {
   event.preventDefault();
   sendLoginCredentials(loginInput);
  
 }
  return (
    <form onSubmit={handleSubmitCredentials}>
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <label htmlFor="username">username</label>
      <input type="text" value={loginInput.user_name}id="username" name="user_name" onChange ={handleChange}/>

      <label htmlFor="password">password</label>
      <input type="password" value={loginInput.password} id="password" name="password" onChange ={handleChange}/>

      <div className="button-holder">
        <input type="submit" value="Login" />
      </div>
      <p className="form-question">New User? Sign up for an account <Link to="/sign-up">here</Link>  </p>
    </form>
  );
};

export default Login;
