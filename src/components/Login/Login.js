import React from "react";

const Login = () => {
  return (
    <form>
      <h1>Login</h1>
      <label for="username">username</label>
      <input type="text" id="username" name="username" />

      <label for="password">password</label>
      <input type="password" id="password" name="password" />

      <div class="button-holder">
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;
