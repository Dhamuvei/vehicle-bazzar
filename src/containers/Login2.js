// import React from "react";
// import { useForm } from "react-hook-form";
// import "../components/css/CreateAccount.css";
// import { FaUsers } from "react-icons/fa";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navigation from "../components/Navigation3";
// import {toast} from "react-toastify"

// function Login2(props) {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//     // try {
//     //   const URL = "http://localhost:5000/auth/login";

//     //   const res = await axios.post(URL, data);
//     //   console.log(res);
//     //   localStorage.setItem("auth", JSON.stringify(res));
//     //   // window.location="/Mainpage"
//     //   // props.history.push("/UserData1");
//     // } catch {}

//     // console.log(data);

//     axios.post("http://localhost:5000/auth/login",data)
//     .then(res=>{
//       localStorage.setItem("authoraization",JSON.stringify(res.data))
//     window.location="/UserData1"

//       console.log(res);
//     }).catch(err=>{
//       toast.error(err.response.data)
//     })
//   };
//   return (
//     <div>
//           <Navigation/>

//       <div className="registration-form-ceatAcc">
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="creat-acc-icon"><FaUsers/></div>

//           <div className="form-header-crearAcc">
//             <p> User-Login </p>
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control item"
//               id="email"
//               placeholder="Email"
//               {...register("email", {
//                 required: "Email is required",
//               })}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control item"
//               id="password"
//               placeholder="password"
//               {...register("password", {
//                 required: "minimum six letters",
//               })}
//             />
//           </div>

//           <div className="form-group">
//             <Link to="/Mainpage"></Link>
//             <button type="subtmit" className="btn btn-block create-account">
//               subtmit
//             </button>
//             <hr />
//             <p className="forgot-password text-right">
//               New user need to
//                <Link to="/CreateAccount">CreateAccount</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login2;
