import React from "react";
import CurrLocation from "./FirstPageComponent/CurrLocation";
import Searchbar from "./FirstPageComponent/Searchbar";
import Button from "./Button";
import "./App.css";
import ShowFootage from "./SecondPageComponent/ShowFootage";
import Incidents from "./ThirdPageComponent/Incidents";

export default function App() {
  // const [data, setData] = useState({});
  // const note = "test";
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/data");
  //     const jsonData = await response.json();
  //     setData(jsonData.message);
  //     console.log(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="mainDiv">
        <h2>Traffic Control System</h2>
        <CurrLocation />
        <h2>Select Area :</h2>
        <Searchbar />
        <Button content="Check Status" />
      </div>
      <ShowFootage />
      <Incidents />
    </>
  );
}
