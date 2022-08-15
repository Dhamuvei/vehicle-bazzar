import { useState } from "react";
import "../components/css/Navigation.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation2";
import {useNavigate} from "react-router-dom"

function NavigationBar() {
  //AuthToken
  const AuthToken = localStorage.getItem("authoraization");
//NAvigation
  const logOut=(props)=>{
    localStorage.clear("authoraization")
    window.location="/Mainpage"

    
}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark nav">
        <h3 className="title">Vehicle Bazzar</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {""}

        <button
          id="contactus"
          type="button"
          className="btn btn btn-outline-info sellbike"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Contact Us <i class="fa-solid fa-paper-plane fa-flip"></i>
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label required">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">
                      Type ypur message here
                    </label>
                    <textarea className="form-control"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/UserProfile"> <button id="User" type="subtmit" className="btn btn-outline-success profilebtn" >
            UserProfile
          </button></Link>
         
        </div>

        <button
          id="sellbike"
          type="button"
          className="btn btn btn-outline-warning"
          data-bs-toggle="modal"
          data-bs-target="#sellbike1"
        >
          <i className="fa-solid fa-scale-unbalanced-flip fa-flip"></i> Sell
          Bike
        </button>
        <div className="modal" id="sellbike1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Before Sell Bike</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Bike Data's
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Needed Bike Data's
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>Registration Number</li>
                            <li>Bike Brand</li>
                            <li>Kilometers Driven</li>
                            <li>Owner Status</li>
                            <li>Bike Model</li>
                            <li>Bike Year</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Membership Plane's
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Payment Process
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>Need to pay ₹50</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Term's And Conditions
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">

                   
                     

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link to="/Membership">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-danger" onClick={logOut}>Log-Out</button>
        {/* <Link to="/Login">  <button
          id="contactus"
          type="button"
          className="btn btn-light"
        >Login</button></Link> */}
      </nav>
    </>
  );
}
export default NavigationBar;
