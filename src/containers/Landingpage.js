import React from "react";
import "../components/css/LandingPage.css"
import "../components/css/Buyernav.css";


function LandingPage() {
  return (
    <>
      <html>
        <body className="cbody">
          <div class="container landing-container">
            <div className="row">
                <div className="col"></div>
            </div>
            <p className="area">Seller👉</p>
            <img
              className="l-img" 
              onClick={() => window.location.href="/Login"}
              src="https://i.pinimg.com/736x/ec/05/3b/ec053b36dc4b89555df69baf3d389dee.jpg"
              alt="img Loading...."
            />{"   "}
            <img
              className="l-img"
              onClick={() => window.location.href="/BuyerLogin"}
              src="https://i.pinimg.com/originals/9f/40/2f/9f402f4ab91d61d57f7690f129bf9a4f.jpg"
              alt="img Loading...."
            />
            <p className="area">👈Buyer</p>
          </div>
        </body>
      </html>
    </>
  );
}

export default LandingPage;
