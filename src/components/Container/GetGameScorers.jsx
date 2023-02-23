import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Lista = styled.li`
  list-style: none;
`;

function GetGameScorers(props) {
  const [gameScoreList, setGameScoreList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://www.balldontlie.io/api/v1/games",
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        const scoreData = data.data.map(
          (game_points) => game_points.home_team_score
        );
        setGameScoreList(scoreData);
        props.setGameScores(scoreData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Container>
        {gameScoreList.map((game, index) => (
          <Lista key={index}>{game}</Lista>
        ))}
      </Container>
    </div>
  );
}
export default GetGameScorers;
