import React from "react";
import "./css/base.css";
import Button from "./components/Button";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Button label="Order" />
          <Button label="Filter" />
          <CardGrid />
        </main>
      </div>
    );
  }
}

export default App;
