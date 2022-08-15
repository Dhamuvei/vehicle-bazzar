import React from "react";
import { Link } from "react-router-dom";
import "../components/css/card2.css";
import { useNavigate } from "react-router-dom";

function Vehiclecard(props) {

  //navigate
  const navigate = useNavigate();

  return (
    <>
      <div class="col-lg-3 col-md-2 col-xs-12 p-0 mt-2 vehicle_card">
        <div class="a-box vehicle_card">
          <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img
                  alt="Loading..."
                    src={props.PhotoSelected}
                    onClick={() => navigate("/UserView/" +props._id)}
                  />
                </div>
              </div>
          </div>
          <div class="text-container">
            <h3>Bike Bazzar</h3>
            <div>
              <p className="model">{props.BikeBrand}</p>
              <p className="km">KM-Driven:{props.KillometerDriven}</p>
              <p className="price">prize ₹ {props.SellinPrice}</p>
            </div>
            <button className="btn btn-warning" onClick={() => navigate("/UserView/" +props._id)}>click to view</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Vehiclecard;
