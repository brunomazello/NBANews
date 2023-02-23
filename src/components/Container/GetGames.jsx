import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, List, ScorePoints, Title } from "./Home";
import format from "date-fns/format";
import { YearSelector } from "./YearSelector";

function GetGames() {
  const [gamelist, setGameList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${selectedYear}&page=50`;
    const options = {
      method: "GET",
      url: url,
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        const gameData = data.data.map((teams) => ({
          homeTeam: teams.home_team.full_name,
          homeTeamScore: teams.home_team_score,
          awayTeamScore: teams.visitor_team_score,
          awayTeam: teams.visitor_team.full_name,
          date: format(new Date(teams.date), "dd/MM/yyyy"),
        }));
        setGameList(gameData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedYear]);

  return (
    <div>
      <Title size={1}>Lista de Jogos</Title>
      <YearSelector year={selectedYear} setYear={setSelectedYear} />
      <Container>
        {gamelist.map((game, index) => (
          <List key={index}>
            <Title size={2}>
              {game.homeTeam} x {game.awayTeam}
            </Title>
            <Title size={4}>Data: {game.date}</Title>
            <ScorePoints>
              {game.homeTeamScore} x {game.awayTeamScore}{" "}
            </ScorePoints>
          </List>
        ))}
      </Container>
    </div>
  );
}
export default GetGames;
