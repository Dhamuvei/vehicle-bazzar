import { Formik, Field, Form, ErrorMessage } from "formik";
import { FaUsers } from "react-icons/fa";
import "../components/css/CreateAccount.css";
import axios from "axios";
import Joi from "joi";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar3 from "../components/Navigation3";

const userSchema = Joi.object({
  password: Joi.string().alphanum().min(6).max(10).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

const INTIAL_FORM = {
  username: "",
  email: "",
};

function Login2() {
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
    <div>
        <Navbar3 />
      <div className="card registration-form-ceatAcc">
        <div className="card-body">
          <Formik
            initialValues={INTIAL_FORM}
            validate={validate}
            onSubmit={async (values) => {
              console.log("onsubtmit", values);
              const { error } = userSchema.validate(values);
              if (!error) {
                try {
                  const URL = "http://localhost:2580/auth/login";
                  // Register api call
                  await axios.post(`${URL}`, values);
                  // send mail to user api call
                  window.location = "/Mainpage";
                  toast.success("Registration Successfull");
                } catch ({ response: { data } }) {
                  toast.error(data.error);
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
                    <p> creat account </p>
                  </div>
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
                    <button
                      type="subtmit"
                      className="btn btn-block create-account"
                    >
                      Create Account
                    </button>
                    <br />
                    <p className="forgot-password text-right">
                      Click to......
                      <Link to="/CreaAcc2">Creat Account</Link>
                    </p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login2;
