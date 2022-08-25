import React from "react";
import "../components/css/UserData1.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/SellerNave";
import {toast} from "react-toastify"
import "../components/css/img.css";
import "../components/css/UserData2.css";
import { Link } from "react-router-dom";

function UserData1() {

  //AuthToken

  const AuthToken = localStorage.getItem("authoraization");
// parsing the AuthToken



const [user, setuser] = useState({
  userId: "",
  RegistrationNumber: "",
  BikeBrand: "",
  BikeYear: "",
  BikeModel: "",
  KillometerDriven: "",
  OwnerStatus: "",
  City: "",
  inputZip: "",
  state: "",
  SellinPrice: "",
  MobileNumber: "",
  EmailId: "",
  YourName: "",
  Latitude: "",
  Longitude: "",
  PhotoSelected: [],
  addres: "",
});

  const onLoad = fileString => {
    let myImages = [];
    if (user.PhotoSelected != []) {
      myImages = user.PhotoSelected.concat(fileString);
    } else {
      myImages = [fileString];
    }
    setuser({ ...user, PhotoSelected: myImages });
  };
 
  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

useEffect(() => {
  setuser({ ...user, userId: parseJwt(AuthToken)._id });
},[]);

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

  
  const  onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    selectedFilesArray.map((file) => {
      return getBase64(file);
    });

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    let deleteImages = [];
    deleteImages = user.PhotoSelected.filter((e) => e !== image);
    setuser({ ...user, PhotoSelected: deleteImages });

    URL.revokeObjectURL(image);
  }


  const handlechange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };

  const handelsubtmit = async (evt) => {
    evt.preventDefault();
    try {
      const url = "https://bikebazzar.herokuapp.com/SellerData/post";
      const responce = await axios.post(url, user);
      toast.success(`Account Create SuccesFully`)
    } catch (err) {}
  };

  useEffect(() => {
    console.log(user);
  });

  if (!AuthToken) {
    window.alert("Need to Login");
    window.location="/Login"
  } else {
    return (
      <>
      
      
        <div className="container-fluid  cd1 udata1-bg">
        <Navigation />

          <div className="row">
            <div className="col">
              <div class="card  carddata1">
                <div class="card-header bg-secondary text">Bike Data's</div>
                <div class="card-body bg-dark">
                  <form class="row g-3" onSubmit={handelsubtmit}>
                    <div class="col-md-6">
                      <label for=" RegistrationNumber" class="form-label text">
                        Registration Number
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        name="RegistrationNumber"
                        type="text"
                        class="form-control"
                        id="RegistrationNumber"
                        placeholder="TNXXXX234"
                        value={user.RegistrationNumber}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for=" BikeYear" class="form-label text">
                        Bike Year <span className="text-danger">*</span>
                      </label>
                      <input
                        name="BikeYear"
                        type="number"
                        class="form-control"
                        id="BikeYear"
                        value={user.BikeYear}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label name="BikeBrand" class="form-label text">
                        Bike Brand <span className="text-danger">*</span>
                      </label>
                      <input
                        name="BikeBrand"
                        type="text"
                        class="form-control"
                        id="BikeBrand"
                        placeholder="Brand"
                        value={user.BikeBrand}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label for="BikeModel" class="form-label text">
                        Bike Model <span className="text-danger">*</span>
                      </label>
                      <input
                        name="BikeModel"
                        type="text"
                        class="form-control"
                        id="BikeModel"
                        placeholder="Model"
                        value={user.BikeModel}
                        onChange={handlechange}
                        required
                      />
                    </div>

                    <div class="col-6">
                      <label for="KillometerDriven" class="form-label text">
                        Killometer Driven <span className="text-danger">*</span>
                      </label>
                      <input
                        name="KillometerDriven"
                        type="number"
                        class="form-control"
                        id="KillometerDriven"
                        placeholder="Total Driven Km"
                        value={user.KillometerDriven}
                        onChange={handlechange}
                        required
                      />
                    </div>

                    <div class="col-6">
                      <label for="OwnerStatus" class="form-label text">
                        Owner Status <span className="text-danger">*</span>
                      </label>
                      <input
                        name="OwnerStatus"
                        type="text"
                        class="form-control"
                        id="OwnerStatus"
                        placeholder=" First or Second"
                        value={user.OwnerStatus}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-4">
                      <label for="City" class="form-label text">
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        name="City"
                        type="text"
                        class="form-control"
                        id="City"
                        value={user.City}
                        onChange={handlechange}
                        required
                      />
                    </div>

                    <div class="col-4">
                      <label for="inputZip" class="form-label text">
                        Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        name="inputZip"
                        type="text"
                        class="form-control"
                        id="inputZip"
                        value={user.inputZip}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-4">
                      <label for="State" class="form-label text">
                        State <span className="text-danger">*</span>
                      </label>
                      <input
                        name="state"
                        type="text"
                        class="form-control"
                        id="state"
                        value={user.state}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for=" SellinPrice" class="form-label text2">
                        Sellin Price <span className="text-danger">*</span>
                      </label>
                      <input
                        name="SellinPrice"
                        type="number"
                        class="form-control"
                        id="SellinPrice"
                        value={user.SellinPrice}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for=" YourName" class="form-label text2">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="YourName"
                        type="text"
                        class="form-control"
                        id="YourName"
                        value={user.YourName}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label for="MobileNumber" class="form-label text2">
                        Mobile Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="MobileNumber"
                        type="number"
                        class="form-control"
                        id="MobileNumber"
                        placeholder="Brand"
                        value={user.MobileNumber}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label for="EmailId" class="form-label text2">
                        Emai Id <span className="text-danger">*</span>
                      </label>
                      <input
                        name="EmailId"
                        type="email"
                        class="form-control"
                        id="EmailId"
                        placeholder="Model"
                        value={user.EmailId}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label for="Latitude" class="form-label text2">
                        Latitude <span className="text-danger">*</span>
                      </label>
                      <input
                        name="Latitude"
                        type="number"
                        class="form-control"
                        id="Latitude"
                        placeholder="Model"
                        value={user.Latitude}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label for="Longitude" class="form-label text2">
                        Longitude <span className="text-danger">*</span>
                      </label>
                      <input
                        name="Longitude"
                        type="number"
                        class="form-control"
                        id="Longitude"
                        placeholder="Model"
                        value={user.Longitude}
                        onChange={handlechange}
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for=" YourName" class="form-label text2 addres">
                        Full Addres <span className="text-danger">*</span>
                      </label>
                      <input
                        className="addres"
                        name="addres"
                        type="text"
                        class="form-control"
                        id="YourName"
                        value={user.addres}
                        onChange={handlechange}
                        required
                      />
                    </div>

                    <div>
                      {
                        ((user.PhotoSelected.length <= 4) || (user.PhotoSelected == null || undefined)) &&
                        <div>
                        <br />
                        <label className="label-img">
                          <i class="fa-solid fa-camera-retro fa-fade"></i>
                          <br />
                          Add 1 by 1
                          <span>up to 5 images</span>
                          <input
                            type="file"
                            name="images"
                            onChange={onSelectFile}
                            multiple
                            accept="image/png , image/jpeg, image/webp, image/pdf"
                          />
                        </label>
  
                        <br />
                        <br />
  
                        <input type="file" multiple />
                        </div>
                      }
                      {user.PhotoSelected.length > 0 &&
                        (user.PhotoSelected.length <= 4 ? (
                          <button
                          className=" btn btn-outline-success upload-btn"
                          onClick={() => {
                            console.log("images", user.PhotoSelected);
                          }}
                        >
                          {user.PhotoSelected.length} Image's Added.
                        </button>
                        ) : (
                          <p className="">
                           {user.PhotoSelected.length} Images added successfully. Try deleting an image to upload any other image
                          </p>
                        ))}

                      <div className="images">
                        {user.PhotoSelected &&
                          user.PhotoSelected.map((image, index) => {
                            return (
                              <div key={image} className="image">
                                <img src={image} height="200" alt="upload" />
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => {
                                    deleteHandler(image)}}
                                >
                                  delete image
                                </button>
                                <p>{index + 1}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-outline-primary ud1btn "
                    >
                      Submit
                    </button>
                    <Link to="/UserProfile">
                      <button className="btn btn-outline-primary ud1btn">
                        View Profile
                      </button>
                    </Link>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UserData1;

