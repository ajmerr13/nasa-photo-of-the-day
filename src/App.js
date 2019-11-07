import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import Title from "./Components/Title"
import Date from "./Components/Date"
import Image from "./Components/Image"
import Explanation from "./Components/Explanation"
import SpaceCarousel from "./Components/SpaceCarousel"

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=HeJ9yb3WaxSY1faBvrEJLfH4brmlYkRaYxo3eOPK")
    .then(res => {
      console.log(res.data);
      setNasaData(res.data);
    });

  }, []);

  return (
    <div className="App">

      <Title title={nasaData.title} />
      <Date date={nasaData.date} /> 
      <Explanation explanation={nasaData.explanation} />
      <Image url={nasaData.url} />

      < h1>MORE PHOTOS OF SPAAAACE</h1>
      <SpaceCarousel />
    </div>
  );
}

export default App;