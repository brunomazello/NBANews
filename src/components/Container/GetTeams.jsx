import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import index from "./Home";

const Lista = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
`;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function GetTeams() {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://www.balldontlie.io/api/v1/teams",
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        const newTeamList = data.data.map((team) => team.full_name);
        setTeamList((prevList) => [...prevList, ...newTeamList]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Equipes:</h1>
      <Container>
        {teamList.map((team, index) => (
          <Lista key={index}>{team}</Lista>
        ))}
      </Container>
    </div>
  );
}
export default GetTeams;
