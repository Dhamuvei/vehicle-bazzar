import { Formik, Field, Form, ErrorMessage } from "formik";
import { FaUsers } from "react-icons/fa";
import "../components/css/CreateAccount.css";
import axios from "axios";
import Joi from "joi";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navigation3 from "../components/buyerNav2";

const userSchema = Joi.object({
  fname: Joi.string().alphanum().required(),
  lname: Joi.string().alphanum().required(),
  number: Joi.number().required(),
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().min(6).max(10).required(),
  cpassword: Joi.any().equal(Joi.ref("password")),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

const INTIAL_FORM = {
  fname: "",
  lname: "",
  number: "",
  username: "",
  password: "",
  email: "",
  cpassword: "",
};

function Users() {
  const validate = (values) => {
    console.log("from validate", values);
    const errors = {};

    const { error } = userSchema.validate(values);
    if (error) {
      const [err] = error.details;
      errors[err.context.key] = err.message;
    }

    return errors;
  };

  return (
    <>
      <div className="card registration-form-ceatAcc buy-bg2">
        <Navigation3 />

        <div className="card-body">
          <Formik
            initialValues={INTIAL_FORM}
            validate={validate}
            onSubmit={async (values) => {
              console.log("onsubtmit", values);
              const { error } = userSchema.validate(values);
              if (!error) {
                try {
                  const URL = "https://bikebazzar.herokuapp.com/Buyerauth/register";
                  // Register api call
                  await axios.post(`${URL}`, values,);
                  // send mail to user api call
                  window.location = "/BuyerLogin";
                  toast.success("Registration Successfull");
                } catch (err) {
                  toast.error("Invalid Entry")

                  
                }
              }
            }}
          >
            {() => {
              return (
                <Form className="mt-4">
                  <div className="creat-acc-icon">
                    <FaUsers />
                  </div>
                  <div className="form-header-crearAcc">
                    <p> Buyer create Account </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Lname">
                      fname<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      name="fname"
                      placeholder="Enter the fname"
                    />
                    <ErrorMessage className="text-danger" name="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Lname">
                      lname<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      name="lname"
                      placeholder="Enter the Lname"
                    />
                    <ErrorMessage className="text-danger" name="lname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">
                      Username<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      name="username"
                      placeholder="Enter the username"
                    />
                    <ErrorMessage className="text-danger" name="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Number">
                      Number<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      name="number"
                      placeholder="Enter the Number"
                    />
                    <ErrorMessage className="text-danger" name="number" />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter the email"
                    />
                    <ErrorMessage className="text-danger" name="email" />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password">
                      Password<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter the password"
                    />
                    <ErrorMessage className="text-danger" name="password" />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="cpassword">
                      Confirm Password<span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      type="password"
                      name="cpassword"
                      placeholder="Enter the password"
                    />
                    <ErrorMessage className="text-danger" name="password" />
                  </div>
                  <br />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-block create-account"
                    >
                      Create Account
                    </button>
                    {"  "}
                    <hr />
                    <p className="forgot-password text-right">
                      Alredy have an account go to...
                      <Link
                        style={{ textDecorationLine: "none" }}
                        to="/BuyerLogin"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Users;
