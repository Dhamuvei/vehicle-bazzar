import React from "react";
import { useForm } from "react-hook-form";
import "../components/css/CreateAccount.css";
import { FaUsers } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../components/buyerNav2";
import {toast} from "react-toastify"

function BuyerLogin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    
    axios.post("https://bikebazzar.herokuapp.com/Buyerauth/login",data)
    .then(res=>{
      
      window.localStorage.setItem("authoraization",(res.data))
      window.location="/BuyerMainpage"
      toast.success("Login Successfully");
      console.log(res);
    }).catch(err=>{
      toast.error(err.response.data)
    })
  };
  return (
    <div className=" container-fluid buy-bg">
          <Navigation/>

      <div className="registration-form-ceatAcc ">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="creat-acc-icon"><FaUsers/></div>

          <div className="form-header-crearAcc">
            <p> Buyer-Login </p>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="password"
              placeholder="password"
              {...register("password", {
                required: "minimum six letters",
              })}
            />
          </div>

          <div className="form-group">
            <Link to="/Mainpage"></Link>
            <button type="subtmit" className="btn btn-block create-account">
              submit
            </button>
            <hr />
            <p className="forgot-password text-right">
              New user need to....
               <Link style={{textDecorationLine:"none"}} to="/BuyerCreateAccount">CreateAccount</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BuyerLogin;
