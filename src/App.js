import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Display from "./components/Display";

function App() {
  const [word, setWord] = React.useState("word");
  return (
    <>
      <Header word={word} setWord={setWord}></Header>
      <Display word={word}></Display>
      <Display word={word}></Display>
      <Display word={word}></Display>
      <Display word={word}></Display>
      <Display word={word}></Display>
      <Display word={word}></Display>
    </>
  );
}

export default App;
