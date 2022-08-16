import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Membership.css";
import Navigation from "../components/Navigation3";
import Login from "./Login";

function MemberShip() {
  const AuthToken = localStorage.getItem("authoraization");
  if (!AuthToken) {
    window.alert("Need to Login");
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      <>
      <div className="container-fluid mem-bg">
        <Navigation />
        <br />
        <div class="container">
          <div class="row">
            <div className="col-4"></div>

            <div class="col-md-4 ">
              <div class="card text-white card-has-bg click-col bgm1 memcard">
                <img
                  class="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                />
                <div class="card-img-overlay d-flex flex-column">
                  <div class="card-body memcardbody">
                    <h3 class="card-title mt-0 mem-title">Free plan</h3>
                    <hr />
                    <p>Display Untill Sale</p>
                    <br />
                    <p>Seller Data will secure</p>
                    <br />
                    <p>Buyer can Contact Directly</p>
                    <br />
                    <p>No Payment Free To Post</p>
                    <br />
                  </div>
                  <div class="card-footer justify-content-center memfcard">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                      <Link to="/UserData1">
                        <button class="btn btn-danger me-md-2" type="submit">
                          Next
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
export default MemberShip;
