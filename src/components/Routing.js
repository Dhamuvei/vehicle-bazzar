import React from "react";
import { Routes ,Route } from 'react-router-dom';

import CreateAccount from "../containers/CreateAccount";
import Mainpage from "../containers/MainPage";
import MemberShip from "../containers/Membership";
import UserData1 from "../containers/UserData1";
import UserProfile from "../containers/UserProfile";
import Login from "../containers/Login";
import UserView from"../containers/UserView";
import Login2 from "../containers/Login2";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage/>}exact/>
      <Route path="/Mainpage" element={<Mainpage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Login2" element={<Login2/>}/>
      <Route path="/CreateAccount" element={<CreateAccount/>} />
      <Route path="/MemberShip" element={<MemberShip/>} />
      <Route path="/UserData1" element={<UserData1/>} />
      <Route path="/UserProfile" element={<UserProfile/>} />
      <Route path="/UserView/:id" element={<UserView/>}/>
     <Route path="*" render={()=><h1>404 PAGE NOT FOUND</h1>}/>
    </Routes>
  );
}
export default Routing;
