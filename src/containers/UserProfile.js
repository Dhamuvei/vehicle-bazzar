import React, { useEffect, useState } from "react";
import "../components/css/UserProfile.css";
import axios from "axios";
import Navbar3 from "../components/Navbar3";
import MapContainer from "../components/GoogleMap";
import {toast} from "react-toastify"


function UserProfile(props) {
  //authToken
  const AuthToken = localStorage.getItem("authoraization");

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
  let a = parseJwt(AuthToken);
  let userId = a._id;

  //state

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [feed, setfeed] = useState([]);
  const [feeds, setfeeds] = useState({});

  //api to get user data
  const userDataById = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://bikebazzar.herokuapp.com/SellerData/userId/${userId}`
      );
      setData(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  //dlelte user data

  const DeleteUser = async ({ _id }) => {
    if (window.confirm(`Are You Sure ${data.YourName} you Bike got saled`)) {
      try {
        await axios.delete(`https://bikebazzar.herokuapp.com/SellerData/delete/${_id}`);
        window.location.href="/UserProfile"

        toast.warn("Deleted Successfully");
        window.location.href="/UserProfile"
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  //get feedBack

  const feedBackData = async () => {
    try {
      let { data } = await axios.get(
        `https://bikebazzar.herokuapp.com/feedback/feedback/${userId}`
      );
      setfeed(data);
      setfeeds(data);
    } catch (err) {
    }
  };


  const deletefeedback = async (u) => {
    window.confirm(`Are You Sure you want to Delete ${u.BuyerName}feedback`)
try {
      await axios.delete(
        `https://bikebazzar.herokuapp.com/feedback/deletefeedback/${u._id}`
      );
      toast.success("Deleted Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    userDataById();
    feedBackData();
  }, [userId]);

  return (
    <>
      <div className="container">
        <Navbar3 />
        <div className="row">
          {isLoading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          <div className="col-lg-8 col-md-8 col-xs-12">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {data.PhotoSelected &&
                  data.PhotoSelected.map((src) => {
                    return (
                      <div className="carousel-item active">
                        <img src={src} className="d-block w-100 proimg" />
                      </div>
                    );
                  })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            <div className="card user-card">
              <div className="card-header bg-secondary tableheader">
                Detial's
              </div>
              <div className="card-body bg-light user-body">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Brand</th>
                      <th scope="col">Year</th>
                      <th scope="col">Model</th>
                      <th scope="col">Registration Number</th>

                      <th scope="col">KM Driven</th>
                      <th scope="col">Woner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{data.BikeBrand}</th>
                      <td>{data.BikeYear}</td>
                      <td>{data.BikeModel}</td>
                      <td>{data.RegistrationNumber}</td>
                      <td>{data.KillometerDriven}</td>
                      <td>{data.OwnerStatus}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <div>
                  <h4>Description</h4>
                  <p>Well Maintained Bike</p>
                  <p>Company Service Compleated</p>
                </div>
              </div>
            </div>
            <br />
            <div
              className="accordion accordion-flush "
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed bg-warning tableheader"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Notification for you {data.YourName} 
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="card user-card">
                      <div className="card-header bg-info tableheader">
                        Buyer Notification
                      </div>
                      <div className="card-body bg-light user-body">
                        <table className="table">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Number</th>
                              <th scope="col">Mail Id</th>
                              <th scope="col">Comments</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feed.map((u) => {
                              return (
                                <tr>
                                  <th scope="row">{u.BuyerName}</th>
                                  <td>{u.BuyerNumber}</td>
                                  <td>{u.Byeremail}</td>
                                  <td>{u.iptText}</td>
                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => deletefeedback(u)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
          <div className="col-lg-3 col-md-2 col-xs-12">
            <div className="card cardprice user-card">
              <div className="card-body bg-light user-body">
                <h4 className="card-title">Seller Detial</h4>
                <hr />
                <h5 className="card-title">Price ₹ {data.SellinPrice}</h5>
                <hr />
                <h6 className="card-subtitle mb-2 text-muted  texttag">
                  Name: {data.YourName}
                </h6>
                <hr />
                <p className="card-text texttag">
                  Contact No: {data.MobileNumber}{" "}
                </p>
                <hr />
                <p className="card-text texttag">E-mail: {data.EmailId}</p>
                <hr />
                <h6 className="card-subtitle mb-2 text-muted">
                  {data.state}, {data.City}, {data.inputZip}
                </h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-2 col-xs-12 map">
              <div className="card user-card">
                <MapContainer lat={data.Latitude} lng={data.Longitude} />
                <div className="card-body user-body">
                  <p className="card-text">{data.addres}</p>
                </div>
              </div>
            </div>
            <br />
            <div className="col-lg-3 col-md-2 col-xs-12 ">
              <div className="card selldata user-card">
                <div className="card-body bg-light user-body">
                  <h5 className="card-title">Bike Got Saled </h5>
                  <hr />

                  <p className="card-text sellname">Just Click It....🏍</p>

                  <button
                    className="btn btn-danger ml-5"
                    onClick={() => DeleteUser(data)}
                  >
                    Delet My Account⚡
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
