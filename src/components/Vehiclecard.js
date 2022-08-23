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
                    onClick={() => window.location.href="/UserView/" +props._id}
                  />
                </div>
              </div>
          </div>
          <div class="text-container">
            <div>
              <p style= {{fontStyle: 'italic'}}className="model">Seller: {props.YourName}</p>
              <p style={{color: "red"}} className="model">{props.BikeBrand}</p>
              <p style= {{fontStyle: 'italic'}} className="model">{props.BikeYear} :Model</p>
              <p style={{color: "blue",textDecorationLine:"underline"}} className="model">prize ₹ {props.SellinPrice}</p>
            </div>
            {/* <button className="btn btn-warning" onClick={() => navigate("/UserView/" +props._id)}>click to view</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Vehiclecard;
