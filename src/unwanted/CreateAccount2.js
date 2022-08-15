import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React, { useState,useEffect } from "react";
import "../components/css/CreatAcc2.css";
import {FaUsers} from 'react-icons/fa'
import {FcRefresh} from 'react-icons/fc'
import { Link } from "react-router-dom";


const userSchema = Joi.object({
  FName: Joi.string().min(10).max(15).required(),
  lname: Joi.string().required(),
  Username: Joi.string().alphanum().required(),
  Password: Joi.string().alphanum().min(6).max(10).required(),
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

const INTIAL_FORM = {
  FName: "",
  lname: "",
  Username: "",
  Password: "",
  Email: "",
};

function creatAccount2() {
  const validate = (values) => {
    const errors = {};

    const { error } = userSchema.validate(values);
    if (error) {
      const [err] = error.details;
      errors[err.context.key] = err.message;
    }

    return errors;
  };

  const handleSubmit = (values) => {
    const { error } = userSchema.validate(values);
    console.log("After handleSubmit",values);
    // if (!error) {
    //   // API Call
    // }
   
  };
  const onSubmit = (data) => {
    console.log("After onSubmit",data);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card creat-acc2-card">
            <div className="card-body creat-acc2-body">
            <div className="creat-acc-icon2"><FaUsers/></div>
            <div className="form-header-crearAcc2">
             <p> creat account </p>
           </div>
              <Formik
                initialValues={INTIAL_FORM}
                validate={validate}
                onSubmit={handleSubmit(onSubmit)}
              >
                {() => {
                  return (
                    <Form className="mt-4">
                      <div className="form-group">
                        <label htmlFor="FName" className="creat-acc2-lable">
                          First Name<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          name="FName"
                          placeholder="Enter the first name"
                        />
                        <ErrorMessage className="text-danger" name="FName" />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="lname" className="creat-acc2-lable">
                          Last Name<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          name="lname"
                          placeholder="Enter the last name"
                        />
                        <ErrorMessage className="text-danger" name="lname" />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="Username" className="creat-acc2-lable">
                          Username<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          name="Username"
                          placeholder="Enter the Username"
                        />
                        <ErrorMessage className="text-danger" name="Username" />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="Password" className="creat-acc2-lable">
                          Password<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          type="Password"
                          name="Password"
                          placeholder="Enter the Password"
                        />
                        <ErrorMessage className="text-danger" name="Password" />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="Email" className="creat-acc2-lable">
                          Email<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          type="Email"
                          name="Email"
                          placeholder="Enter the Email"
                        />
                        <ErrorMessage className="text-danger" name="Email" />
                      </div>
                      <br />
                      <div className="form-group ">
                        <button type="reset" className="btn">
                        <FcRefresh id="FcRefresh"/>
                        </button>
                        {"  "}
                        <Link to="/ForgorPsw"><button role="button" className="btn btn-success create-account2">
                          Create account
                        </button></Link>
                        <div>
                <button type="submit" class="btn btn-primary ud2btn">
                      subtmit
                    </button>
                </div>
                      </div>
                      <hr/>
              <p id="content2">
                We will send you a text to verify your phone.Message and Data
                rates may apply.
              </p>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default creatAccount2;
