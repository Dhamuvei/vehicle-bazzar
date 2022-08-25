import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/css/Membership.css";
import Navigation from "../components/SellerNave";
import Login from "./Login";
import {toast} from "react-toastify"


function MemberShip() {
  const [paymentStatus, setPaymentStatus] = useState('');
  const AuthToken = localStorage.getItem("authoraization");
  const [amount, setamount] = useState(500);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_0TbEyizdAyu6ZF",
        key_secret:"MWAXenR0oTS0kgM3EJTslEIU",
        amount: amount *100,
        currency:"INR",
        name:"Bike Bazzar",
        description:"for testing purpose",
        handler: function(response){
          setPaymentStatus(response.razorpay_payment_id);
          toast.success("payment sent to BikeBazzar")
        },
        prefill: {
          name:"Dhamodharan.c",
          email:"dhamoeee2@gmail.com",
          contact:"7092758683"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  if (!AuthToken) {
    toast.error("Need to Login");
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
                    <h3 class="card-title mt-0 mem-title">Subscribe for following features!</h3>
                    <hr />
                    <p>Your Ad will be displayed until Sale</p>
                    <br />
                    <p>Your Data will be secure</p>
                    <br />
                    <p>Buyer will be able to contact seller's Directly</p>
                    <br />
                  </div>
                  <div class="card-footer justify-content-center memfcard">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                      {
                        (paymentStatus == '') ? <button class="btn btn-danger me-md-2" type="submit" onClick={handleSubmit}>Pay ₹{amount}</button> : <Link to="/UserData1">
                        <button class="btn btn-danger me-md-2" type="submit">
                          Proceed To upload data!
                        </button>
                      </Link>
                      }
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
