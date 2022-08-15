import React from "react";
import { Link } from "react-router-dom";
import "../components/css/UserData2.css";
import { useState } from "react";
import axios from "axios";
import Navigation2 from "../components/Navigation2";

function UserData2(props) {
  const initialValues = {
    SellinPrice: "",
    MobileNumber: "",
    EmailId: "",
    YourName: "",
    Latitude: "",
    Longitude: "",
  };
  const [user, setuser] = useState(initialValues);

  const handlechange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };

  const handelsubtmit = async (evt) => {
    evt.preventDefault();
    try {
      const url = "http://localhost:5000/UserData2/2";
      const responce = await axios.post(url, user);
      // window.location="/UserProfile";
      props.history.push("/UserProfile");
      console.log(responce);
    } catch (err) {}
  };

  // useEffect(() => {
  //   console.log("uE",user);
  // });
  return (
    <>
      <div>
        <Navigation2 />
      </div>
      <div className="container-fluid cd2">
        <div className="row">
          <div className="col">
            <div class="card  carddata2">
              <div class="card-header bg-secondary text2">Bike Data's</div>
              <div class="card-body bg-dark">
                <form class="row g-3" onSubmit={handelsubtmit}>
                  <div class="col-md-6">
                    <label for=" SellinPrice" class="form-label text2">
                      Sellin Price
                    </label>
                    <input
                      name="SellinPrice"
                      type="number"
                      class="form-control"
                      id="SellinPrice"
                      value={user.SellinPrice}
                      onChange={handlechange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for=" YourName" class="form-label text2">
                      Your Name
                    </label>
                    <input
                      name="YourName"
                      type="text"
                      class="form-control"
                      id="YourName"
                      value={user.YourName}
                      onChange={handlechange}
                    />
                  </div>
                  <div class="col-6">
                    <label for="MobileNumber" class="form-label text2">
                      Mobile Number
                    </label>
                    <input
                      name="MobileNumber"
                      type="number"
                      class="form-control"
                      id="MobileNumber"
                      placeholder="Brand"
                      value={user.MobileNumber}
                      onChange={handlechange}
                    />
                  </div>
                  <div class="col-6">
                    <label for="EmailId" class="form-label text2">
                      Emai Id
                    </label>
                    <input
                      name="EmailId"
                      type="email"
                      class="form-control"
                      id="EmailId"
                      placeholder="Model"
                      value={user.EmailId}
                      onChange={handlechange}
                    />
                  </div>
                  <div class="col-6">
                    <label for="Latitude" class="form-label text2">
                      Latitude
                    </label>
                    <input
                      name="Latitude"
                      type="number"
                      class="form-control"
                      id="Latitude"
                      placeholder="Model"
                      value={user.Latitude}
                      onChange={handlechange}
                    />
                  </div>
                  <div class="col-6">
                    <label for="Longitude" class="form-label text2">
                      Longitude
                    </label>
                    <input
                      name="Longitude"
                      type="number"
                      class="form-control"
                      id="Longitude"
                      placeholder="Model"
                      value={user.Longitude}
                      onChange={handlechange}
                    />
                  </div>
                  <div class="col-6">
                    <label for="ChoosImage" class="form-label text2">
                      Choos Image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="ChoosImage"
                      placeholder="Total Driven Km"
                    />
                  </div>
                  <div className="col-6"></div>
                  <div className="col-4">
                    <img src="../image/1.jpg" alt="img" className="udiimg" />
                  </div>
                  <div className="col-4">
                    <img src="../image/1.jpg" alt="img" className="udiimg" />
                  </div>
                  <div className="col-4">
                    <img src="../image/1.jpg" alt="img" className="udiimg" />
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label text2" for="gridCheck">
                        I Agree a consent to terms and condition
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <Link to="/UserData1">
                      {" "}
                      <button type="submit" class="btn btn-primary ud2btn">
                        Previous
                      </button>
                    </Link>
                  </div>
                  <div className="col-2">
                    <button type="submit" class="btn btn-primary ud2btn">
                      Next
                    </button>
                  </div>
                  <div>
                    <p className="text2">
                      <span className="text-danger">Warning:</span> do not
                      proceed to the website unless u read and understand tearms
                      and condition{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserData2;
