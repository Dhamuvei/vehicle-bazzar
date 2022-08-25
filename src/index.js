import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.render(<div>
  <App/>
  <ToastContainer/>
</div>,document.getElementById("Root"))

