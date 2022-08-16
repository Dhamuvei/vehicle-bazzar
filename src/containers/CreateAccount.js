import React from "react";
import { useForm } from "react-hook-form";
import "../components/css/CreateAccount.css";
import { FaUsers } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateAccount(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const URL = "http://localhost:2580/auth/register";

      const res = await axios.post(URL, data);
      console.log(res);
      localStorage.setItem("auth", JSON.stringify(res));
      window.location = "/Login";
      // history.push("/Home");
    } catch {}

    console.log(data);
  };
  return (
    <div>
      <div className="registration-form-ceatAcc">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="creat-acc-icon">
            <FaUsers />
          </div>
          <div className="form-header-crearAcc">
            <p> creat account </p>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              placeholder="Username"
              {...register("username", {
                required: "Name is required",
              })}
            />
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
              placeholder="Password"
              {...register("password", {
                required: "minimum six letters",
              })}
            />
          </div>
          {/* <div className="form-group">
              <input
                type="password"
                className="form-control item"
                id="ConfirmPassword"
                placeholder="Confirm Password"
                {...register("ConfirmPassword", {
                  required: "minimum six letters",
                })}
              />
            </div> */}
          <div className="form-group">
            <button type="subtmit" className="btn btn-block create-account">
              Create Account
            </button>
            <hr />
            <p className="forgot-password text-right">
              Alredy have an account..move
              <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateAccount;
