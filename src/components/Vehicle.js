import { useState, useEffect } from "react";
import Vehiclecard from "../components/Vehiclecard";
import "../components/css/card2.css";
import Carosel from "./Carosel";
import axios from "axios";
import Footer from "../components/footer";


function Vehicle() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("https://bikebazzar.herokuapp.com/SellerData/get");
      setIsLoading(false);
      setUser(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [Query, SetQuery] = useState("");
  return (
    <>
      <div className="main-page-color">
        <div>
          <Carosel />
        </div>
        <div>
          <form class="row domain-search bg-pblue bg-secondary">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <h2 class="form-title">
                    Find Your <strong>Dream Bike..</strong>
                  </h2>
                </div>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="search"
                      class="form-control"
                      onChange={(e) => SetQuery(e.target.value)}
                    />
                  </div>
                  <p>
                    {" "}
                    <strong>Searh by....</strong>
                    <strong>KTM</strong>
                    <strong>HONDA</strong>
                    <strong>BAJAJ</strong>
                    <strong>ROYAL ENFIELD</strong>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div class="container">
            <div class="row">
              {isLoading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">
                      Loading...
                      <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
                    </span>
                  </div>
                </div>
              )}
              {user
                .filter((data) =>
                  data.BikeBrand.toLocaleLowerCase().includes(Query)
                )
                .map((data) => (
                  <Vehiclecard 
                  _id={data._id} 
                   key={data.id}
                   PhotoSelected={data.PhotoSelected[0]}
                   BikeBrand={data.BikeBrand}
                   KillometerDriven={data.KillometerDriven}
                   SellinPrice={data.SellinPrice}
                   BikeYear={data.BikeYear}
                   YourName={data.YourName}/>
                ))}
                
            </div>
          </div>
        </div>
        <br/>
        <Footer/>
      </div>
    </>
  );
}
export default Vehicle;

