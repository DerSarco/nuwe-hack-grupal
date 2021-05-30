import React, { useState, createContext } from "react";
import fetchAPI from "../functions/fetchAPI";

export const TeamsContext = createContext();

export const TeamsProvider = (props) => {
  const [users, setUsers] = useState([]);

  const controller = {
    addTeam: async (team) => {
      const addTeamBody = {
        name: team.name,
        description: team.description,
        users: JSON.stringify(team.users)
      };
      let response = await fetchAPI.API.team("/api/equipo", addTeamBody);
      return response
    },
    getUsers: async (token) => {
      let result = await fetchAPI.API.read("/api/user", token);
      if (users.length === 0) {
        setUsers(result.data);
      }
    },
  };
  return (
    <TeamsContext.Provider value={[users, controller]}>
      {props.children}
    </TeamsContext.Provider>
  );
};
