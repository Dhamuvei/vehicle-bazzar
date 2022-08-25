import React from "react";
import "../components/css/SellerMainPg.css";
import Navigation from "../components/SellerNave";


function SellerMainPg() {
  return (
    <>
      <div className="container-fluid sel-mbg">
        <Navigation/>
        <div
          className="row mt-4
        "
        >
          <div className="col-6"></div>
          <div className="col-6">
            <figure class="snip1568">
              <figcaption  onClick={() => window.location.href="/UserProfile"}>
                <h3>View Your Profile</h3>
                <p>If you already posted ur bike to sell click here</p>
              </figcaption>
              <div class="profile-image">
                <img onClick={() => window.location.href="/UserProfile"}
                  src="https://images.unsplash.com/photo-1526956159426-b7d06370c2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXJ8ZW58MHx8MHx8&w=1000&q=80"
                  alt="profile-sample2" 
                />
              </div>
            </figure>
          </div>
          <br />
          <div className="col-6">
            <figure class="snip1568">
              <figcaption onClick={() => window.location.href="/Membership"}>
                <h3>Click To Sell Your Your Bike</h3>

                <p>Just Click To Sell You'r Bike..🤝</p>
              </figcaption>
              <div class="profile-image">
                <img onClick={() => window.location.href="/Membership"}
                  src="https://wi.wallpapertip.com/wsimgs/13-135158_money-wallpaper-hd-3d-my-iphone-4-wallpaper.jpg"
                  alt="profile-sample7"
                />
                
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerMainPg;
