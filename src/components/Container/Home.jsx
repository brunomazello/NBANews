import GetGameScorers from "./GetGameScorers";
import GetGames from "./GetGames";
import { useState } from "react";
import styled from "styled-components";

export const List = styled.li`
  list-style: none;
  width: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  padding: 5px 25px;
  -webkit-box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
`;

export const Input = styled.input.attrs((props) => ({
  "data-index": props.index,
}))`
  padding: 10px 5px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
  width: 250px;

  ::placeholder {
    text-align: center;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 35px;
  margin-left: 35px;
`;

export const Paragraph = styled.p.attrs((props) => ({
  "data-index": props.index,
}))`
  /* estilos para todos os elementos <p> */
  color: #fff;
  /* estilos apenas para o segundo elemento <p> */
  &[data-index="1"] {
    color: red;
    font-weight: bold;
  }
`;

export const Title = styled.h1.attrs((props) => ({
  "data-titlesize": props.size,
}))`
  /* estilos para todos os elementos <h1> */
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  /* estilos apenas para o segundo elemento <h1> */
  &[data-titlesize="1"] {
    font-size: 35px;
  }
  &[data-titlesize="2"] {
    font-size: 20px;
  }
`;

function Home() {
  const [gameScores, setGameScores] = useState([]);

  return (
    <div>
      <GetGameScorers setGameScores={setGameScores} />
      <GetGames setGameScores={setGameScores} />
      {/* outros componentes */}
    </div>
  );
}

export default Home;
