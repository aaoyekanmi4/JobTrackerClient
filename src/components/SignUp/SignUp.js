import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
      <form>
        <h1>Sign Up</h1>
        <label for="username">Name</label>
        <input type="text" id="username" name="username"/>
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
        <label for="password">password</label>
        <input type="password" id="password" name="password"/>
        <label for="password2">Confirm password</label>
        <input type="password" id="password2" name="password2"/>
        <div class="button-holder"><input type="submit" value="Sign Up"/></div>
    </form>
    )
}

export default SignUp;