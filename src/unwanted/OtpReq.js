import React from "react";
import "../components/css/OtpReq.css"


function OtpReq() {
  return (
    <div class="container">
      <div class="row m-5 ">
        <div class="col-2"></div>
      <div class="col-2"></div>
        <div class="col-lg-5 col-md-6 col-xs-12 p-0 ">
          <div class="card bg-light rounded-5">
            <div
              class="card-header bg-warning">
              Verification required
            </div>
            <div class="card-body otpreq-card-body">
              <blockquote class="blockquote mb-0">
                <form>
                  <div
                    class="form-group formgrp-otpreq">
                    <p className="content otp-req">
                      To continue, complete this verification step. We've sent
                      an OTP to the mobile number +91790****3 Please enter it
                      below to complete verification.
                    </p>
                    <label
                      for="otp">
                      OTP
                    </label>
                    <input type="number" class="form-control" id="otp" />
                  </div>
                  <div class="container">
                    <a
                      class="btn btn-primary"
                      href="#"
                      role="button">
                      Continue
                    </a>
                    <a
                      href="#" className="resend-otp">
                      resend otp
                    </a>
                  </div>
                </form>
                <hr />
                <div class="container">
                  <p className="content2-otp-req">
                    OTP will Send to entered mobile number or E-mail
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

export default OtpReq;