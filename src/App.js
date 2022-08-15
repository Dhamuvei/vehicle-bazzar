import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routing from "./components/Routing";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function App(){
  return(
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
  );
}

export default App;