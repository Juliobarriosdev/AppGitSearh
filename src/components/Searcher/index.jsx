import React, { useState, useRef } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState("");
  const input = useRef('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput((prev) => inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
    console.log(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        onKeyPress={event => event.key === 'Enter' && handleSubmit()}
        ref={input}
        id="outlined-basic"
        label="GitHub User"
        placeholder="Find GitHub user"
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
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
