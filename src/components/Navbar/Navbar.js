import React from "react";
import "./Navbar.css"

export default function Navbar(){
  return <nav className="nav">
    <a href="/">
      <img src="https://file.rendit.io/n/M7W7VVAwlb6JnUptn7HT.png"/>
    </a>
    <ul>
      <li className="active">
        <button className="signupButton">
                Sign up
            </button>
      </li>
      <li>
        <button className="loginButton">
                Log in
            </button>
      </li>
    </ul>
  </nav>
}