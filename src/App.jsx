import { useState } from "react";
import GetTeams from "./components/Container/GetTeams";
import GetGames from "./components/Container/GetGames";
import { createGlobalStyle } from "styled-components";
import backgroundImg from './img/basketball-background.jpg'

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Permanent Marker', cursive;
font-family: 'Roboto', sans-serif;
background: url(${backgroundImg});
background-size: cover;
background-position: unset;
color: #000;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <GetGames />
    </>
  );
}

export default App;
