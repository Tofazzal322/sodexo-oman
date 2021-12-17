import React from "react";
import { Col, Row } from "react-bootstrap";
import Register from "../Register/Register";
import Login from "./Login";
import "./LoginRegister.css"

const LoginRegister = () => {
  return (
    <div className="">
      <div className="property-banner-bg">
        <div className="food-banner-main">
          <div className="food-banner-title ">
            <h1 className="title-1 fw-bold ">
              Welcome to the Sodexo Careers Centre
            </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>

      <Row className="">
        <Col className="">
          <div className="register-section ">
                      <h1 className="title-1"> New users register with</h1>
                      
            {/* <Register></Register> */}
          </div>
        </Col>
        <Col className="">
          <div className="login-section">
                      
                      
            <form onClick={'soo'} method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    <label htmlfor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label htmlfor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a>password?</a></span>
  </div>
</form>
            {/* <Login></Login> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginRegister;
