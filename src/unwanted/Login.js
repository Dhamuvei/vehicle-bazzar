import React from "react";
import "../components/css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios"
import{useEffect,useState} from "react"

function Login() {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const handlechange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };
  
  const handelsubtmit = async (evt) => {
    evt.preventDefault();
    try {
        const url = "http://localhost:5000/auth/login";
        const res = await axios.post(url, user);
        console.log(res);
        localStorage.setItem("auth", JSON.stringify(res));
        // history.push("/Home");
      } catch(err) {
       console.log(err.message);
      }
  };
  
  useEffect(() => {
    console.log(user);
  });



  return (
    <div class="container">
      <div class="row m-5 ">
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-lg-5 col-md-3 col-xs-12 p-0 ">
          <div class="card bg-light logincard">
            <div class="card-header bg-warning login">Log-In</div>
            <div class="card-body loginbody">
              <blockquote class="blockquote mb-0">
                <form onSubmit={handelsubtmit}>
                  <div class="form-group fg">
                    <label for="userName">User Name</label>
                    <input
                      name="username"
                      type="text"
                      class="form-control mt-2 mb-2"
                      id="userName"
                      placeholder="User Name"
                      value={user.username}
                      onChange={handlechange}
                    />
                    <p className="eorp">Email or mobile phone number</p>
                  </div>
                  <div class="form-group p">
                    <label for="exampleInputPassword1 mt-2 mb-2">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={user.password}
                      onChange={handlechange}
                    />
                  </div>
                  <Link id="forgetpassword" to="/forgetpsw">
                    Forget password
                  </Link>
                  <br />
                  <div class="container">
                    <a class="btn btn-primary sb" href="#" role="button">
                      Subtmit
                    </a>
                  </div>
                </form>
                <hr />
                <div class="container">
                  <p className="ifon">------New to Vehicle Bazzar ?------</p>
                  <Link to="/CreateAccount">
                    <button className="btn btn-primary cab" role="button">
                      Creat New Account
                    </button>
                  </Link>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;





