import React from "react";
import { Col, Row } from "react-bootstrap";
import "./LoginRegister.css";
import loginIcon from '../../../images/loginicon.jpg'

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
        <Col  md={6} className="">
          <div className="login-section mt-5 mb-5 ms-5">
            <form onClick={"soo"} method="post">
              <div class="imgcontainer">
                <h1 className="title-1"> New users register with</h1>
                <img className="w-25" src={loginIcon} alt="Avatar" class="avatar" />
              </div>

              <div class="container">
                <label htmlfor="uname">
                  <b>Your Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="uname"
                  required
                />
             

                <label htmlfor="psw">
                  <b>Your Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="psw"
                  required
                />
                <label htmlfor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <button className="fs-3 fw-bold create-btn w-100" type="submit">I agree. Create my account</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember" />{" "}
                  Remember me
                </label>
              </div>

              <div class="container">
                <button type="button" class="cancelbtn">
                  Reset
                </button>
                <span class="psw">
                  Forgot <a>password?</a>
                </span>
              </div>
            </form>
           
          </div>
        </Col>
        <Col className="">
          <div className="login-section mt-5 mb-5 me-5">
            <form onClick={"soo"} method="post">
              <div class="imgcontainer">
                <h1 className="title-1">Existing users login with</h1>
                <img className="w-25" src={loginIcon} alt="Avatar" class="avatar" />
              </div>

              <div class="container">
                <label htmlfor="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />

                <label htmlfor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <button className="fs-4 fw-bold w-100" type="submit">Login</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember" />{" "}
                  Remember me
                </label>
              </div>

              <div class="container">
                <button type="button" class="cancelbtn">
                  Cancel
                </button>
                <span class="psw">
                  Forgot <a>password?</a>
                </span>
              </div>
            </form>
           
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginRegister;
