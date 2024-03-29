import React, { useState, useEffect } from "react";
import CurrLocation from "./FirstPageComponent/CurrLocation";
import Searchbar from "./FirstPageComponent/Searchbar";
import Button from "./Button";
import "./App.css";
import ShowFootage from "./SecondPageComponent/ShowFootage";
import Incidents from "./ThirdPageComponent/Incidents";
import axios from "axios";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div className="mainDiv">
        <h2>Traffic Control System: </h2>
        <CurrLocation />
        <h2>Select Area : </h2>
        <Searchbar />
        <Button content="Check Status" />
      </div>
      <ShowFootage />
      <Incidents />
    </>
  );
}
