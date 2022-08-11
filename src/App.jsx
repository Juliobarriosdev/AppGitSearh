import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import UserCard from "./container/UserCard";

import { getGithubUser } from "./services/users";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState("false");

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", JSON.stringify(userResponse));
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser("octocat");
      setNotFound("true");
    } else {
      setUserState(userResponse);
    }
  };
  console.log(userState);

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        minWidth: "200px",
        height: "auto",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
