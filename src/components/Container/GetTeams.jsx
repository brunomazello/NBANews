import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

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
        setTeamList([...teamList, ...newTeamList]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Equipes:</h1>
      <ul>
        {teamList.map((team, index) => (
          <li key={index}>{team}</li>
        ))}
      </ul>
    </div>
  );
}
export default GetTeams;
