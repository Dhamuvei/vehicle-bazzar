import { Formik, Field, Form, ErrorMessage } from "formik";

import Joi from "joi";
import React from "react";

const userSchema = Joi.object({
  fname: Joi.string().min(6).max(12).required(),
  lname: Joi.string().required(),
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().min(6).max(10).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  avatar: Joi.string().uri().required(),
});

const INTIAL_FORM = {
  fname: "",
  lname: "",
  username: "",
  password: "",
  email: "",
  avatar: "",
};

function Practice() {
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
    if (!error) {
      // API Call
      
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <Formik
                initialValues={INTIAL_FORM}
                validate={validate}
                onSubmit={handleSubmit}
              >
                {() => {
                  return (
                    <Form className="mt-4">
                      <div className="form-group">
                        <label htmlFor="fname">
                          First Name<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          name="fname"
                          placeholder="Enter the first name"
                        />
                        <ErrorMessage className="text-danger" name="fname" />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="lname">
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
                        <label htmlFor="avatar">
                          Avatar URL<span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          type="url"
                          name="avatar"
                          placeholder="Enter the avatar url"
                        />
                        <ErrorMessage className="text-danger" name="avatar" />
                      </div>
                      <br />
                      <div className="form-group">
                        <button type="reset" className="btn btn-secondary">
                          Reset
                        </button>
                        {"  "}
                        <button type="submit" className="btn btn-success">
                          Create
                        </button>
                      </div>
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

export default Practice