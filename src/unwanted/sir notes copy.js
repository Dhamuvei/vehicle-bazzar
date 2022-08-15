// import { Formik, Field, Form, ErrorMessage } from "formik";

// import Joi from "joi";
// import React from "react";

// const userSchema = Joi.object({
//   fname: Joi.string().min(6).max(12).required(),
//   lname: Joi.string().required(),
//   username: Joi.string().alphanum().required(),
//   password: Joi.string().alphanum().min(6).max(10).required(),
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required(),
//   avatar: Joi.string().uri().required(),
// });

// const INTIAL_FORM = {
//   fname: "",
//   lname: "",
//   username: "",
//   password: "",
//   email: "",
//   avatar: "",
// };

// function Users() {
//   const validate = (values) => {
//     const errors = {};

//     const { error } = userSchema.validate(values);
//     if (error) {
//       const [err] = error.details;
//       errors[err.context.key] = err.message;
//     }

//     return errors;
//   };

//   const handleSubmit = (values) => {
//     const { error } = userSchema.validate(values);
//     if (!error) {
//       // API Call
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <Formik
//                 initialValues={INTIAL_FORM}
//                 validate={validate}
//                 onSubmit={handleSubmit}
//               >
//                 {() => {
//                   return (
//                     <Form className="mt-4">
//                       <div className="form-group">
//                         <label htmlFor="fname">
//                           First Name<span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           className="form-control"
//                           name="fname"
//                           placeholder="Enter the first name"
//                         />
//                         <ErrorMessage className="text-danger" name="fname" />
//                       </div>
//                       <br />
//                       <div className="form-group">
//                         <label htmlFor="lname">
//                           Last Name<span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           className="form-control"
//                           name="lname"
//                           placeholder="Enter the last name"
//                         />
//                         <ErrorMessage className="text-danger" name="lname" />
//                       </div>
//                       <br />
//                       <div className="form-group">
//                         <label htmlFor="username">
//                           Username<span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           className="form-control"
//                           name="username"
//                           placeholder="Enter the username"
//                         />
//                         <ErrorMessage className="text-danger" name="username" />
//                       </div>
//                       <br />
//                       <div className="form-group">
//                         <label htmlFor="password">
//                           Password<span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           className="form-control"
//                           type="password"
//                           name="password"
//                           placeholder="Enter the password"
//                         />
//                         <ErrorMessage className="text-danger" name="password" />
//                       </div>
//                       <br />
//                       <div className="form-group">
//                         <label htmlFor="email">
//                           Email<span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           className="form-control"
//                           type="email"
//                           name="email"
//                           placeholder="Enter the email"
//                         />
//                         <ErrorMessage className="text-danger" name="email" />
//                       </div>
//                       <br />
//                       <div className="form-group">
//                         <label htmlFor="avatar">
//                           Avatar URL<span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           className="form-control"
//                           type="url"
//                           name="avatar"
//                           placeholder="Enter the avatar url"
//                         />
//                         <ErrorMessage className="text-danger" name="avatar" />
//                       </div>
//                       <br />
//                       <div className="form-group">
//                         <button type="reset" className="btn btn-secondary">
//                           Reset
//                         </button>
//                         {"  "}
//                         <button type="submit" className="btn btn-success">
//                           Create
//                         </button>
//                       </div>
//                     </Form>
//                   );
//                 }}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default





// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const API_URL = "https://www.mecallapi.com/api/users";
// const INTIAL_FORM = {
//   fname: "",
//   lname: "",
//   username: "",
//   password: "",
//   email: "",
//   avatar: "",
// };

// const MAIL_FORMAT = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
// const URL_FORMAT = new RegExp("/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi");

// function Users() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState(INTIAL_FORM);
//   const [error, setError] = useState(INTIAL_FORM);
//   const [touched, setTouched] = useState(INTIAL_FORM);

//   const handleBlur = ({ target: { name } }) => {
//     setTouched({ ...touched, [name]: true });
//   }

//   const handleChange = ({ target: { name, value } }) => {
//     const err = { ...error };

//     switch (name) {
//       case "fname": {
//         if (!value) {
//           err.fname = "First name is required";
//         } else {
//           err.fname = "";
//         }
//         break;
//       }
//       case "lname": {
//         if (!value) {
//           err.lname = "Last name is required";
//         } else {
//           err.lname = "";
//         }
//         break;
//       }
//       case "username": {
//         if (!value) {
//           err.username = "Username is required";
//         } else {
//           err.username = "";
//         }
//         break;
//       }
//       case "password": {
//         if (!value) {
//           err.password = "Password is required";
//         } else if (value.length < 6) {
//           err.password = "Password should be minimum 6 characters";
//         } else {
//           err.password = "";
//         }
//         break;
//       }
//       case "email": {
//         if (!value) {
//           err.email = "Email is required";
//         } else if (!MAIL_FORMAT.test(value)) {
//           err.email = "Email is invalid";
//         } else {
//           err.email = "";
//         }
//         break;
//       }
//       case "avatar": {
//         if (!value) {
//           err.avatar = "Avatar is required";
//         } else if (!URL_FORMAT.test(value)) {
//           err.avatar = "Avatar URL is invalid";
//         } else {
//           err.avatar = "";
//         }
//         break;
//       }
//     }

//     setError(err);
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
  
//     const isTouched = Object.values(touched).every(t => t === true); // true
//     const isNotError = Object.values(error).every(t => t === ""); // true

//     if (isTouched && isNotError) {
//       if (user.id) {
//         updateUser();
//       } else {
//         createUser();
//       }
//     }
//   };

//   // Get Users
//   const getUsers = async () => {
//     setIsLoading(true);
//     try {
//       const { data } = await axios.get(API_URL);
//       setIsLoading(false);
//       setUsers(data);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // Create User
//   const createUser = async () => {
//     try {
//       await axios.post(`${API_URL}/create`, user);
//       setUser(INTIAL_FORM);
//       getUsers();
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // Update User
//   const updateUser = async () => {
//     try {
//       await axios.put(`${API_URL}/update`, user);
//       setUser(INTIAL_FORM);
//       getUsers();
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // Delete User
//   const deleteUser = async ({ fname, lname, id }) => {
//     if (
//       window.confirm(`Are you sure want to delete user - ${fname} ${lname} ?`)
//     ) {
//       try {
//         await axios.delete(`${API_URL}/delete`, { id });
//         alert("User Deleted Successfully!");
//         getUsers();
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//   };

//   useEffect(() => {
//     console.log("useEffect");
//     getUsers();
//   }, []);

//   console.log("Touched", touched);
//   console.log("Error", error);
//   console.log("User", user);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th># Id</th>
//                     <th>Avatar</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Username</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {isLoading && (
//                     <div className="d-flex justify-content-center">
//                       <div
//                         className="spinner-border text-primary"
//                         role="status"
//                       >
//                         <span className="sr-only">Loading...</span>
//                       </div>
//                     </div>
//                   )}
//                   {users.map((u) => {
//                     return (
//                       <tr key={u.id}>
//                         <td>{u.id}</td>
//                         <td>
//                           <img src={u.avatar} width="50" className="avatar" />
//                         </td>
//                         <td>{u.fname}</td>
//                         <td>{u.lname}</td>
//                         <td>{u.username}</td>
//                         <td>
//                           <i
//                             className="bi bi-pencil-square text-primary fs-4"
//                             onClick={() =>
//                               setUser({ ...u, password: "", email: u.username })
//                             }
//                           ></i>
//                           <i
//                             className="bi bi-trash-fill text-danger fs-4 m-3"
//                             onClick={() => deleteUser(u)}
//                           ></i>
//                           <i className="bi bi-eye text-warning fs-4"></i>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <form className="mt-4" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="fname">
//                     First Name<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="fname"
//                     id="fname"
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter the first name"
//                     value={user.fname}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   <span className="text-danger">{error.fname}</span>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="lname">
//                     Last Name<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="lname"
//                     id="lname"
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter the last name"
//                     value={user.lname}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   <span className="text-danger">{error.lname}</span>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="username">
//                     Username<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="username"
//                     id="username"
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter the user name"
//                     value={user.username}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   <span className="text-danger">{error.username}</span>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="password">
//                     Password<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="password"
//                     id="password"
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter the password"
//                     value={user.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   <span className="text-danger">{error.password}</span>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="email">
//                     Email<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="email"
//                     id="email"
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter the email"
//                     value={user.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   <span className="text-danger">{error.email}</span>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="avatar">
//                     Avatar URL<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="avatar"
//                     id="avatar"
//                     type="url"
//                     className="form-control"
//                     placeholder="Enter the avatar url"
//                     value={user.avatar}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                   />
//                   <span className="text-danger">{error.avatar}</span>
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <button type="reset" className="btn btn-secondary">
//                     Reset
//                   </button>
//                   {"  "}
//                   <button type="submit" className="btn btn-success">
//                     {user.id ? "Update" : "Create"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Users;


// import React, { useState, useEffect } from "react";

// const formInitial = {
//   fname: "",
//   lname: "",
//   username: "",
//   password: "",
//   email: "",
//   avatar: "",
// };

// function Users() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState(formInitial);

//   const handleChange = ({ target: { name, value } }) => {
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     createUser();
//   };

//   // Get Users
//   const getUsers = async () => {
//     setIsLoading(true);
//     try {
//       let response = await fetch("https://www.mecallapi.com/api/users");
//       if (!response.ok) {
//         throw new Error("Request failed");
//       }
//       response = await response.json();
//       setIsLoading(false);
//       setUsers(response);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // Create User
//   const createUser = async () => {
//     try {
//       let response = await fetch("https://www.mecallapi.com/api/users/create", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) {
//         throw new Error("Request failed");
//       }
//       setUser(formInitial);
//       getUsers();
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // Update User
//   const updateUser = async () => {};

//   // Delete User
//   const deleteUser = async ({ fname, lname, id }) => {
//     if (
//       window.confirm(`Are you sure want to delete user - ${fname} ${lname} ?`)
//     ) {
//       try {
//         let response = await fetch(
//           "https://www.mecallapi.com/api/users/delete",
//           {
//             method: "DELETE",
//             body: JSON.stringify({ id }),
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         if (!response.ok) {
//           throw new Error("Request failed");
//         }
//         alert("User Deleted Successfully!");
//         getUsers();
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//   };

//   useEffect(() => {
//     console.log("useEffect");
//     getUsers();
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th># Id</th>
//                     <th>Avatar</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Username</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {isLoading && (
//                     <div className="d-flex justify-content-center">
//                       <div
//                         className="spinner-border text-primary"
//                         role="status"
//                       >
//                         <span className="sr-only">Loading...</span>
//                       </div>
//                     </div>
//                   )}
//                   {users.map((user) => {
//                     return (
//                       <tr key={user.id}>
//                         <td>{user.id}</td>
//                         <td>
//                           <img
//                             src={user.avatar}
//                             width="50"
//                             className="avatar"
//                           />
//                         </td>
//                         <td>{user.fname}</td>
//                         <td>{user.lname}</td>
//                         <td>{user.username}</td>
//                         <td>
//                           <i className="bi bi-pencil-square text-primary fs-4"></i>
//                           <i
//                             className="bi bi-trash-fill text-danger fs-4 m-3"
//                             onClick={() => deleteUser(user)}
//                           ></i>
//                           <i className="bi bi-eye text-warning fs-4"></i>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <form className="mt-4" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="fname">
//                     First Name<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="fname"
//                     id="fname"
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter the first name"
//                     value={user.fname}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="lname">
//                     Last Name<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="lname"
//                     id="lname"
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter the last name"
//                     value={user.lname}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="username">
//                     Username<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="username"
//                     id="username"
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter the user name"
//                     value={user.username}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="password">
//                     Password<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="password"
//                     id="password"
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter the password"
//                     value={user.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="email">
//                     Email<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="email"
//                     id="email"
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter the email"
//                     value={user.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label htmlFor="avatar">
//                     Avatar URL<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     name="avatar"
//                     id="avatar"
//                     type="url"
//                     className="form-control"
//                     placeholder="Enter the avatar url"
//                     value={user.avatar}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <button type="reset" className="btn btn-secondary">
//                     Reset
//                   </button>
//                   {"  "}
//                   <button type="submit" className="btn btn-success">
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Users;