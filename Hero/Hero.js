import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }
    // Perform login action here
    alert("Login button clicked!");
  };

  const handleSignup = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    // Perform signup action here
    alert("Signup button clicked!");
  };

  return (
    <>
      <div className="maincontainer">
        <div className="innercontainer">
          <div className="leftcontent">
            <img
              style={{ width: "150px", height: "100px" }}
              src="../../../images/birdicon.png"
            />
            <h1>Hash Tech</h1>
            <h3>Powered By C# Ui Academy</h3>
          </div>
          <div className="rightcontent">
            <div className="box">
              <h1>Login</h1>
              <input
                type="text"
                className="inputBox"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User Name"
              ></input>
              <input
                type="password"
                className="inputBox"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></input>
             
              <h2 className="forgetpassword">Forgot Password?</h2>
              <div className="buttons">
                <div className="btnstyle">
                  <button className="loginbtn" onClick={handleLogin}>
                    Login
                  </button>
                </div>
                <div className="btnstyle">
                  <button className="signupbtn" onClick={handleSignup}>
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
