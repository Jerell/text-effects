import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function Display(props) {
  const displayStyle = {
    fontWeight: "bold",
  };
  return (
    <Box className="display">
      <Typography
        variant="h1"
        component="p"
        align="center"
        style={displayStyle}
      >
        {props.word}
      </Typography>
    </Box>
  );
}
