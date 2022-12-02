import React from "react";
import "./css/base.css";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <CardGrid />
        </main>
      </div>
    );
  }
}

export default App;
