import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function Display(props) {
  const { word } = props;
  const displayStyle = {
    fontWeight: "bold",
  };
  return (
    <Box className="display">
      <Typography data-before={word} variant="h1" component="p" align="center">
        {word}
      </Typography>
    </Box>
  );
}
