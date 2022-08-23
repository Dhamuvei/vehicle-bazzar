import { useState, useEffect } from "react";
import "../components/css/Navigation.css";
import { Link } from "react-router-dom";
import axios from "axios";

function NavigationBar() {
  //AuthToken
  const AuthToken = localStorage.getItem("authoraization");
  //NAvigation

  //navigat

  const navigat = () => {
    if (!AuthToken) {
      window.alert("Seller Need To Login");
      window.location = "/Login";
    } else {
      window.location = "/UserProfile";
    }
  };

  const logout = () => {
    window.localStorage.clear("authoraization");
    window.alert("Logged Out SuccesFully");
    window.location.href="/";
  };
  const login = () => {
    if (!AuthToken) {
      window.location = "/Login";
    } else {
      window.alert("Seller logined");
      // window.location = "/Mainpage";
    }
  };

  const [dataCheck, setDataCheck] = useState({});
  //api to get user data
  const userDataById = async (userId) => {
    try {
      console.log(dataCheck, "dataCheck");
      const { dataCheckResp } = await axios.get(
        `http://localhost:2580/SellerData/userId/${userId}`
      );
      if (dataCheckResp) {
        console.log("true",dataCheck, "dataCheck", dataCheckResp, "dataCheckResp");
        setDataCheck(dataCheckResp);
        return true;
      }else
      { console.log("false",dataCheck, "dataCheck", dataCheckResp, "dataCheckResp");
      return false};
    } catch (error) {
      console.log(error.message);
    }
  };

  // get userId from AuthToken
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }

  function getUserStatus() {
    if (!AuthToken) {
      // window.alert("Seller Need To Login");
      return false;
    } else {
      let a = parseJwt(AuthToken);
      let userId = a._id;
      if (userId){return userDataById(userId)}
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark nav">
        <h3 className="title">Vehicle Bazzar</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
          <button
                  id="User"
                  class="btn btn-outline-success profilebtn"
                  onClick={navigat}
                >
                  Seller Profile
                </button>
                <button
                  id="sellbike"
                  type="button"
                  className="btn btn btn-outline-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#sellbike1"
                >
                  <i className="fa-solid fa-scale-unbalanced-flip fa-flip"></i>{" "}
                  Sale Bike
                </button>
            {/* {console.log("insidehtml", getUserStatus())}
            {AuthToken &&
              (getUserStatus() ? (
                <button
                  id="User"
                  class="btn btn-outline-success profilebtn"
                  onClick={navigat}
                >
                  Seller Profile
                </button>
              ) : (
                <button
                  id="sellbike"
                  type="button"
                  className="btn btn btn-outline-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#sellbike1"
                >
                  <i className="fa-solid fa-scale-unbalanced-flip fa-flip"></i>{" "}
                  Sale Bike
                </button>
              ))} */}
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
                                <li>Your Lat Lng</li>
                                <li>Your Contact Detial's</li>
                                <li>Bike Images</li>
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
                                <li>Free To Post Bike</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 
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
                            <button
                              id="contactus"
                              type="button"
                              className="btn btn btn-outline-info sellbike"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                              Contact Us{" "}
                              <i class="fa-solid fa-paper-plane fa-flip"></i>
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
                                        <label className="form-label required">
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <label className="form-label required">
                                          Email
                                        </label>
                                        <input
                                          type="email"
                                          className="form-control"
                                        />
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
                          </div>
                        </div>
                      </div> */}
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
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seller Login
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Login" onClick={login}>
                    Sign-In
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="#" onClick={logout}>
                    Sign-Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavigationBar;
