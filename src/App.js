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

const Footer = styled.header`
  display: flex;
  background: black;
  width: 100%;
  height: 5rem;
`;

const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto;
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

const SpaceButton = styled.button`
  width: 20rem;
  height: 5rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 2.5rem;
  transition: 0.2s ease-in;
  font-weight: 600;
  background: ${props => (props.primary ? "#fff" : "#689775")};
  color: ${props => (props.primary ? "#689775" : "#fff")};
  &:hover {
    background: ${props => (props.primary ? "#689775" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#689775")};
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
      <NasaGrid />
      <SpaceButton>BOOK YOUR TRIP TO MARS</SpaceButton>
      <Footer>
        <ContainerFooter>
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
        </ContainerFooter>
      </Footer>
    </div>
  );
}

export default App;
