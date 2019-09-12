import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 3rem;
  color: #fff;
`;

const NasaCard = props => {
  return (
    <div>
      <Heading1>{props.title}</Heading1>
      <img src={props.photo} alt="Space" />
      <h2>{props.date}</h2>
      <p>{props.description}</p>
    </div>
  );
};
export default NasaCard;
