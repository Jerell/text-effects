import React from "react";
import { Typography, Box, TextField } from "@material-ui/core";

export default function Header(props) {
  function handleChange(e) {
    let text = e.target.value;
    props.setWord(text);
  }
  return (
    <header>
      <Box display="flex" justifyContent="center">
        <TextField label={props.word} onChange={handleChange}></TextField>
      </Box>
    </header>
  );
}
