import React from "react";
import { Link } from "react-router-dom";
import "../components/css/ForgotPsw.css";

function ForgorPsw() {
  return (
    <div class="container">
      <div class="row m-5 ">
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-lg-5 col-md-3 col-xs-12 p-0 ">
          <div class="card bg-light forget-psw-card">
            <div class="card-header bg-warning forgot-psw-card">
              Password Assistance
            </div>
            <div class="card-body forget-psw-card-body">
              <blockquote class="blockquote mb-0">
                <form>
                  <div class="form-group form-group-forgot-psw">
                    <p className="enter-emai">
                      Enter the email address or mobile phone number associated
                      with your Amazon account.
                    </p>
                    <label for="userName">Email or mobile phone number</label><br/>
                    <input type="text" class="form-control" id="userName" />
                  </div><br/>
                  <div class="container">
                    <Link to="//OtpReq">
                    <button className="btn btn-primary btn-forget-psw" role="button">Continue</button></Link>
           
                  </div>
                </form>
                <hr />
                <div class="container">
                  <p className="p-forgot-psw">
                    OTP will Send to enterd mobile number or E-mail
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgorPsw;
