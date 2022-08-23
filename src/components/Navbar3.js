import React from "react";
import "../components/css/Navigation2.css";
import { Link } from "react-router-dom";

function Navbar3() {
 const Logout=()=>{
window.localStorage.clear("authoraization")
window.location.href="/"
 }

  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <Link to="/"><img className="nav2-logo" src="../image/logo (1).ico" /> </Link>
         
          <Link to="/" className="nav2-link">
            <h2 className="nav2-title">vehicle bazzar</h2>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <p></p>
          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <button className="btn btn-outline-warning" onClick={Logout} >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar3;
