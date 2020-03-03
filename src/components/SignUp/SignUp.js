import React, {useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link }from 'react-router-dom'
import './SignUp.css';

const SignUp = () => {
  const { registerUser, error} = useContext(AuthContext);
  const [userInput, setUserInput] = useState({
    "user_name":"",
    "email":"",
    "password":"",
    "password2":""
  })


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
   registerUser(userInput)

  }

    return (
      <form onSubmit = {handleRegisterUser}>
        {error && <p className="error">{error}</p>}
        <h1>Sign Up</h1>
        <label className="form-label" htmlFor="username">Name</label>
        <input className="form-input" type="text" id="username" name="user_name" onChange={handleChange}/>
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input"  type="email" id="email" name="email" onChange={handleChange}/>
        <label  className="form-label" htmlFor="password">password</label>
        <input className="form-input"  type="password" id="password" name="password" onChange={handleChange}/>
        <label className="form-label" htmlFor="password2">Confirm password</label>
        <input className="form-input"  type="password" id="password2" name="password2" onChange={handleChange}/>
        <div className= "form-submit-button button-holder"><input  type="submit" value="Sign Up"/></div>
        <p className="form-question">Already a user? Login <Link to="/login">here</Link></p>
    </form>
    )
}

export default SignUp;