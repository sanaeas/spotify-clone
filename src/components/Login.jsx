import React from "react";
import "./Login.css";
import { accessUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <a className="login__btn" href={accessUrl}>
        Login With Spotify
      </a>
    </div>
  );
}

export default Login;
