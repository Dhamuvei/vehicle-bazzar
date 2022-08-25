import React from "react";
import "../components/css/UserProfile.css";
import Navigation from "../components/BuyerNav3";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MapContainer from "../components/GoogleMap";
import {toast} from "react-toastify"


function UserProfile() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [Seller, SellerData] = useState({});
  const [iptText, setIptText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Authtoken
  const AuthToken = localStorage.getItem("authoraization");

  // get Buyer Id Form auth Token for FeedBack collection
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
  let BuyerId = a._id;

  //Send Notification to Bike Owner
  const Notification = async () => {
 
    try {
      const url = "https://bikebazzar.herokuapp.com/feedback/post";
      const responce = await axios.post(url, {
        SellerId: data.userId,
        BuyerName: Seller.username,
        BuyerNumber: Seller.number,
        Byeremail: Seller.email,
        iptText: iptText,
      });
     toast.success(`Notification Send to ${data.YourName}`);
    } catch (err) {}
  };

  // get Buyer data by id

  const getSeller = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://bikebazzar.herokuapp.com/BuyerData/getById/${BuyerId}`
      );
      setIsLoading(false);
      SellerData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Post Notification To Owner   Post seller{_id}&& Post Buyer{data} in new collection

  useEffect(() => {
    getSeller();
  }, []);

  // get bike info by  
  const getBikeDataById = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://bikebazzar.herokuapp.com/SellerData/${id}`
      );
      setData(data);

      setIsLoading(false);
    } catch (error) {
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    getBikeDataById();
  }, [id]);


  //send mail
  const sendMail = async () => {
    toast.success(`Mail Send to ${data.YourName}`);
    try {
      const url = "https://bikebazzar.herokuapp.com/BuyerMail/BuyerMail";
      const responce = await axios.post(url, {
        BuyerName: Seller.username,
        BuyerNumber: Seller.number,
        Byeremail: Seller.email,
        sellerName:data.YourName,
        sellerEmail:data.EmailId,
        iptText: `Hai ${data.YourName} I Would Like to Buy your ${data.BikeBrand} Bike Sir`,
      }

);
      toast.success(`Mail Send to ${data.YourName}`);
    } catch (err) {}
  };



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
              {console.log("byaj", data, "data")}
              <div class="carousel-inner">
                {data.PhotoSelected &&
                  data.PhotoSelected.map((src) => {
                    return (
                      <div class="carousel-item active">
                        <img src={src} class="d-block w-100 proimg" />
                      </div>
                    );
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
                  <h5 class="card-title">Comment Or Email</h5>
                  <hr />
                  {/* <p class="card-text sellname">Just Post to {data.YourName}</p> */}
                 
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                    Hai {Seller.username} Hit Some Msg to {" "}
                     {data.YourName}
                    </label>
                    <textarea
                      class="form-control"
                      value={iptText}
                      name="iptText"
                      onChange={(e) => {
                        setIptText(e.target.value);
                      }}
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    class="btn btn-info
                     ml-5"
                    onClick={() => Notification()}
                  >
                   Hit Comment
                  </button><p>(&)</p>
                  <button
                    class="btn btn-info
                     ml-5"
                    onClick={() => sendMail()}
                  >
                   Hit Mail
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



