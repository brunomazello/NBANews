import GetGameScorers from "./GetGameScorers";
import GetGames from "./GetGames";
import { useState } from "react";
import styled from "styled-components";

export const Lista = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
`;

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
