import React, {useState} from "react";
import AuthService from '../../services/AuthService';

const Login = () => {
  const [error, setError] = useState(null);
  const [loginInput, setLoginInput] = useState({
    user_name:"",
    password: ""
  })
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setLoginInput(prevState =>{
    return {...prevState, [name]:value}
    });
  };
 const handleSubmitCredentials = (event) => {
   event.preventDefault();
   AuthService.sendLoginCredentials(loginInput, setError);
 }
  return (
    <form onSubmit={handleSubmitCredentials}>
      <h1>Login</h1>
      {error}
      <label htmlFor="username">username</label>
      <input type="text" value={loginInput.user_name}id="username" name="user_name" onChange ={handleChange}/>

      <label htmlFor="password">password</label>
      <input type="password" value={loginInput.password} id="password" name="password" onChange ={handleChange}/>

      <div className="button-holder">
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;
