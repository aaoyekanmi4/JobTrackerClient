import React, {useState} from 'react';
import AuthService from '../../services/AuthService';
import { useHistory }from 'react-router-dom'
import './SignUp.css';

const SignUp = () => {
  const history = useHistory();
  const [userInput, setUserInput] = useState({
    "user_name":"",
    "email":"",
    "password":"",
    "password2":""
  })
  const [error, setError] = useState('');

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserInput(prevState =>{
    return {...prevState, [name]:value}
    });
  };
  const handleRegisterUser = (event) => {
    event.preventDefault();
    AuthService.registerUser({
      user_name:userInput.user_name,
      email:userInput.email,
      password:userInput.password
    }, setError)
    history.push('/jobs')
  }

    return (
      <form onSubmit = {handleRegisterUser}>
        {error}
        <h1>Sign Up</h1>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" name="user_name" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange}/>
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" onChange={handleChange}/>
        <label htmlFor="password2">Confirm password</label>
        <input type="password" id="password2" name="password2" onChange={handleChange}/>
        <div className="button-holder"><input type="submit" value="Sign Up"/></div>
    </form>
    )
}

export default SignUp;