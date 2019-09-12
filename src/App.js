import React from "react";
import "./App.css";
import NasaGrid from "./components/NasaGrid";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  background: black;
  width: 100%;
  height: 5rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.primary ? "#fff" : "#000")};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in;
  &:hover {
    color: #c7493a;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        <Link primary href="#">
          PLANETS
        </Link>
        <Link primary href="#">
          SOLAR SYSTEM
        </Link>
        <Link primary href="#">
          GALAXY
        </Link>
        <Link primary href="#">
          STARS
        </Link>
      </Header>
      <h1>NASA PICTURE OF THE DAY</h1>
      <NasaGrid />
    </div>
  );
}

export default App;
