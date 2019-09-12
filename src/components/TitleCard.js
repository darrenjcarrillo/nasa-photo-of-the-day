import React from "react";

const TitleCard = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.photo} alt="Space" />
      <h2>{props.date}</h2>
      <p>{props.description}</p>
    </div>
  );
};
export default TitleCard;
