import React, { useState, useEffect } from "react";
import TitleCard from "./TitleCard";
import Axios from "axios";

export default function NasaTitle() {
  const [space, setSpace] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        const space = response.data;
        console.log("the photo", space);
        setSpace(space);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="main-container">
      <TitleCard
        title={space.title}
        photo={space.url}
        date={space.date}
        description={space.explanation}
      />
    </div>
  );
}
