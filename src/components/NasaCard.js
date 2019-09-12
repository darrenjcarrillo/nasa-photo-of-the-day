import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  margin-top: 7rem;
  font-size: 3rem;
  color: #f23d3d;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

const TextBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  margin: 5rem auto 0;
  color: white;
  width: 900px;
  padding: 2rem;
  margin-bottom: 5rem;
  border-radius: 10px;
`;

const ImageStyle = styled.img`
  border-radius: 1rem;
  border: solid 5px #689775;
`;

const ButtonMars = styled.p`
  width: 100rem;
  height: 100rem;
`;

const NasaCard = props => {
  return (
    <div>
      <Heading1>{props.title}</Heading1>
      <ImageStyle src={props.photo} alt="Space" />
      <TextBackground>
        <h2>{props.date}</h2>
        <p>{props.description}</p>
      </TextBackground>
    </div>
  );
};
export default NasaCard;
