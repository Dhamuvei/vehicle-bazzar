import { Link } from "react-router-dom";
import "../components/css/Buyernav.css";
import {toast} from "react-toastify"



function BuyerNav() {
  //Get Auth
  const AuthToken = localStorage.getItem("authoraization");

  // get userId from AuthToken
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }
  let a = parseJwt(AuthToken);
  let userId = a.email;

  const logout = () => {
    window.localStorage.clear("authoraization");
    toast.success("Logged Out SuccesFully");
    window.location.href = "/";
  };
  return (
    <>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <div class="container-fluid">
            <Link to="" class="navbar-brand area">
              BikeBazzar
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <form class="d-flex ms-3">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
              <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <button
                    class="nav-link dropdown-toggle btn btn-outline-warning"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userId}
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* <li>
                      <Link to="/BuyerLogin" class="dropdown-item">
                        Log-In
                      </Link>
                    </li> */}
                    <li>
                      <Link to="" class="dropdown-item" onClick={logout}>
                        Log-Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default BuyerNav;
