import React from "react";
import "./css/base.css";
import FilterOrder from "./components/FilterOrder";
import Header from "./components/layout/Header";
import CardGrid from "./components/card/CardGrid";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <FilterOrder />
          <CardGrid />
        </main>
      </div>
    );
  }
}

export default App;
