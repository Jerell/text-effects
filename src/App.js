import React from "react";
import "./App.css";

import Header from "./components/Header";
import Display from "./components/Display";

function App() {
  const [word, setWord] = React.useState("word");
  return (
    <>
      <Header word={word} setWord={setWord}></Header>
      <main>
        <Display word={word}></Display>
        <Display word={word}></Display>
        <Display word={word}></Display>
        <Display word={word}></Display>
        <Display word={word}></Display>
        <Display word={word}></Display>
      </main>
    </>
  );
}

export default App;
