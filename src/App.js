import React from "react";
import DATA from "./data.json";
import Records from "./components/Records";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      records: DATA.records,
      format: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="#test">React Record Store</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Records records={this.state.records} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
