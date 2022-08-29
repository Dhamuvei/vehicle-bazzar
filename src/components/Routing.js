import React from "react";
import { Routes, Route } from "react-router-dom";

//
import MemberShip from "../containers/Membership";
import UserData1 from "../containers/SellerPostData";
import Login from "../containers/Login";
import UserView from "../containers/BuyerView";
import CreaAcc2 from "../containers/CreateAccount";
import BuyerLogin from "../containers/BuyerLogin";
import UserProfile from "../containers/UserProfile";
import BuyerCreateAccount from "../containers/BuyerCreateAccount";
import BuyerNav from "./BuyerNav";
import TandC from "../containers/Terms&Condition";
import BuyerMainpage from "../containers/BuyerMainPage";
import LandingPage from "../containers/Landingpage";
import SellerMainPg from "../containers/SellerMainPg";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact/>
      <Route path="/BuyerLogin" element={<BuyerLogin />} />
      <Route path="/BuyerCreateAccount" element={<BuyerCreateAccount />} />
      <Route path="/SellerMainPg" element={<SellerMainPg />} />
      <Route path="/BuyerMainpage" element={<BuyerMainpage />} />
      <Route path="/BuyerNav" element={<BuyerNav />} />
      <Route path="/TandC" element={<TandC />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CreaAcc2" element={<CreaAcc2 />} />
      <Route path="/MemberShip" element={<MemberShip />} />
      <Route path="/UserData1" element={<UserData1 />} />
      <Route path="/UserView/:id" element={<UserView />} />
      <Route path="*" render={() => <h1>404 PAGE NOT FOUND</h1>} exact />
    </Routes>
  );
}
export default Routing;
