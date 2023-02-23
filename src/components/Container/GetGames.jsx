import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Lista } from "./Home";

function GetGames() {
  const [gamelist, setGameList] = useState([]);
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
        const gameData = data.data.map((teams) => ({
          homeTeam: teams.home_team.full_name,
          score: teams.home_team_score,
          awayTeam: teams.visitor_team.full_name,
          date: teams.date,
        }));
        setGameList(gameData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Lista de Jogos:</h1>
      <ul>
        {gamelist.map((game, index) => (
          <Lista key={index}>
            <p>Date: {game.date}</p>
            <p>
              Game:{game.homeTeam} x {game.awayTeam}
            </p>
            <p>Scorer: {game.score}</p>
          </Lista>
        ))}
      </ul>
    </div>
  );
}
export default GetGames;
