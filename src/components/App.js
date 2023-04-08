import React, { useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [visible,setVisible] = useState(false);

  const singupHandler = () => {
    if(pass === confirm){
      setVisible(true);

    }

  };
  const loginHandler = () => {
    if (email === loginMail && pass === loginPassword) {
      setBtn(true);
    }
  };
  const logoutHandler = () => {
    setBtn(false);
  };

  return (
    <div id="main">
      <table id="all-users">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
              {visible ?<tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{pass}</td>
              </tr> : null}
            </tbody>
          </table>
      {btn === false ? (
        <>
      
          
          

          <div>
            <form className="signup-form">
              <label htmlFor="name">Name</label>
              <input type="text" name="signupName" id="signupName" onChange={(e)=> setName(e.target.value)}/>
              <label htmlFor="email">Email</label>
              <input type="email" name="signupEmail" id="signupEmail" onChange={(e)=>setEmail(e.target.value)}/>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="signupPassword"
                id="signupPassword"
                onChange={(e)=>setPass(e.target.value)}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="signupConfirmPassword"
                id="signupConfirmPassword"
                onChange={(e)=>setConfirm(e.target.value)}
              />
            </form>
            <button id="signup-button" onClick={singupHandler}>
              Signup
            </button>
            <form className="login-styles">
              <label htmlFor="loginEmail">Email</label>
              <input id="loginEmail" name="loginEmail" type="email" onChange={(e)=>setLoginMail(e.target.value)}/>
              <label htmlFor="loginPassword">Password</label>
              <input id="loginPassword" name="loginPassword" type="password" onChange={(e)=>setLoginPassword(e.target.value)}/>
            </form>
            <button id="login-button" onClick={loginHandler}>
              Login
            </button>
          </div>
        </>
      ) : (
        <div>
          <h3 id="username">{name}</h3>
          <h3 id="email">{email}</h3>
          <button id="logout-button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
