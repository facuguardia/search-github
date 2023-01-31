import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search(porps) {
  const { setInputUser } = porps;
  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = (e) => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        width: "80%",
        marginTop: "30px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: "-50px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default Search;
