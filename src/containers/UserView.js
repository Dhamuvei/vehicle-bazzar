import React from "react";
import "../components/css/UserProfile.css";
import Navigation from "../components/Navigation3";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MapContainer from "../components/GoogleMap";


function UserProfile() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // get product function & api call
  const getBikeDataById = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:2580/UserData1/${id}`);
      setData(data);

      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    getBikeDataById();
  }, [id]);
  return (
    <>
      <div class="container">
        <Navigation />
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
                    {console.log("byaj",data,"data")}
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

          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

// RegistrationNumber: "",
// BikeBrand: "",
// BikeYear: "",
// BikeModel: "",
// KillometerDriven: "",
// OwnerStatus: "",
// City: "",
// inputZip: "",
// state: "",
// SellinPrice: "",
// MobileNumber: "",
// EmailId: "",
// YourName: "",
// Latitude: "",
// Longitude: "",
// PhotoSelected: "",
// addres: "",
