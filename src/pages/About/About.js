import React from "react"
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
const About =() =>{
    return(
        <div>
        About
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        </div>
    )
}
export default About