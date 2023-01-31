import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getGitHubUser } from "./services/users";
import Search from "./components/Search";
import UserCard from "./containers/UserCard";

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };

  console.log(userState);

  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        backgroundColor: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Search inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
