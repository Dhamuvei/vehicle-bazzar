import react from "react";
import Vehicle from "../components/Vehicle";
import Carosel from "../components/Carosel";
import NavigationBar from "../components/Navigation";
import Footer from "../components/footer";

function Mainpage() {
  return (
    <>
      <NavigationBar />
      <Vehicle />
      <Footer/>
    </>
  );
}
export default Mainpage;
