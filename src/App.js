import React, { useState, useEffect } from "react";
import "./App.css";
// import NasaApod from "./components/NasaApod";
import axios from "axios";

function App(props) {
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();

  // Use Effect

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        const spaceImage = response.data.hdurl;
        // console.log("Nasa Image", spaceImage);
        setImage(spaceImage);

        const date = response.data.date;
        // console.log("The date is:", date);
        setDate(date);

        const title = response.data.title;
        console.log("the Title:", title);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
