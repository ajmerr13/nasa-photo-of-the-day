import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import Card from "./Components/Card"

function App() {
  const [nasaImg, setNasaImg] = useState([]);
  useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=HeJ9yb3WaxSY1faBvrEJLfH4brmlYkRaYxo3eOPK")
    .then(res => {
      console.log(res.data);
      setNasaImg(res.data);
    });

  }, []);

  return (
    <div className="App">

<header><h1>NASA potd</h1></header>
      <Card title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date} /> 
    </div>
  );
}

export default App;