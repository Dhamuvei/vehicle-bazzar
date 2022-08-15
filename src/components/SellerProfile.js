import axios from "axios";
import React, { useState, useEffect } from "react";
import UserProfile from "../containers/UserProfile";
import Vehiclecard from "../components/Vehiclecard";
import { useNavigate, } from "react-router-dom";


function UserMap() {
  //navigation
  
    // authToken get form localStorage
    const authToken = window.localStorage.getItem("authToken");
    // navigate to page
    // state management
    const { id } = useParams();
    const [data, setData] = useState({});
  
    // get product function & api call
    const getBikeDataById = async () => {
      try {
        setIsLoading(true);

        const authToken = window.localStorage.getItem("authoraization");
        const { data } = await axios.get(`http://localhost:2580/UserData1/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setIsLoading(false);

        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    // useEffect use refresh data
    useEffect(() => {
      getBikeDataById();
    }, [id]);
  return (
    
      <></>
  );
}

export default UserMap;
