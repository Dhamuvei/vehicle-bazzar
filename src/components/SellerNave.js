import React from "react";
import "../components/css/Navigation2.css"
import { Link } from "react-router-dom";
import {toast} from "react-toastify"


function Navigation2(){
    const logout = () => {
        window.localStorage.clear("authoraization");
        toast.success("Logged Out SuccesFully");
        window.location.href = "/";
      };
    return(
        <>
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
       
                    <Link to="/" className="nav2-link">
                        <h2 className="nav2-title">vehicle bazzar</h2>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <p></p>
                    <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" to="/"><button className="btn btn-outline-dark">Home</button></Link>{" "}
                            <Link class="nav-link active" to="/"><button className="btn btn-outline-warning"onClick={logout} >Log-Out</button></Link>{" "}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navigation2;