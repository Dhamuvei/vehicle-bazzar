import React, { useEffect, useState } from "react";
import "../components/css/UserProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar3 from "../components/Navbar3";
import { Link } from "react-router-dom";
import MapContainer from "../components/GoogleMap";

function UserProfile(props) {
  //authToken
  const AuthToken = localStorage.getItem("authoraization");

  // get userId from AuthToken
  function parseJwt(token) {
    console.log("byaj",token)
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
  console.log(userId);

  //state

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //api to get user data
  const userDataById = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:2580/UserData1/userId/${userId}`
      );
      setData(data);

      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  //dlelte user data
  
    const DeleteUser = async ({ _id }) => {
      if (window.confirm(`Are You Sure Delete This order`)) {
        try {
          await axios.delete(`http://localhost:2580/UserData1/delete/${_id}`);
          alert("Deleted Successfully")
        } catch (error) {
          console.log(error.message);
        }
      }
    };

  // useEffect use refresh data
  useEffect(() => {
    userDataById();
  }, [userId]);

  //navigate
  const Navigate = useNavigate();

  const logout = () => {
    localStorage.clear("authoraization");
   
    Navigate("/Mainpage");
    window.alert("Logged out SuccessFully")

  };


    return (
      <>
        <div class="container">
          <Navbar3 />
          <div class="row">
            {isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

            <div class="col-lg-8 col-md-8 col-xs-12">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                {data.PhotoSelected && data.PhotoSelected.map((src)=>{
                  return(                  <div class="carousel-item active">
                  <img src={src} class="d-block w-100 proimg" />
                  </div>);
              })}          
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <br />
              <div class="card user-card">
                <div class="card-header bg-secondary tableheader">Detial's</div>
                <div class="card-body bg-light user-body">
                  <table class="table">
                    <thead class="thead-dark">
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
            </div>
            <div class="col-lg-3 col-md-2 col-xs-12">
              <div class="card cardprice user-card">
                <div class="card-body bg-light user-body">
                  <h4 class="card-title">Seller Detial</h4>
                  <hr />
                  <h5 class="card-title">Price ₹ {data.SellinPrice}</h5>
                  <hr />
                  <h6 class="card-subtitle mb-2 text-muted  texttag">
                    Name: {data.YourName}
                  </h6>
                  <hr />
                  <p class="card-text texttag">
                    Contact No: {data.MobileNumber}{" "}
                  </p>
                  <hr />
                  <p class="card-text texttag">E-mail: {data.EmailId}</p>
                  <hr />
                  <h6 class="card-subtitle mb-2 text-muted">
                    {data.state}, {data.City}, {data.inputZip}
                  </h6>
                </div>
              </div>

              <div class="col-lg-3 col-md-2 col-xs-12 map">
                <div class="card user-card">
                  
                  <MapContainer lat={data.Latitude} lng={data.Longitude} />
                  <div class="card-body user-body">
                    <p class="card-text">{data.addres}</p>
                    
                  </div>
                </div>
              </div>
              <br />
              <div class="col-lg-3 col-md-2 col-xs-12 ">
                <div class="card selldata user-card">
                  <div class="card-body bg-light user-body">
                    <h5 class="card-title">Bike Got Saled </h5>
                    <hr />

                    <p class="card-text sellname">Just Click It....🏍</p>

                    <button class="btn btn-danger ml-5" onClick={() => DeleteUser(data)}>
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
