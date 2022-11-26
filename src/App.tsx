import React from "react";
import "./css/base.css";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
