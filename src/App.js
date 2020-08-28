import React, { Component } from "react";
import Filter from "./components/Filter";
import Records from "./components/Records";
import DATA from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      records: DATA.records,
      format: "",
      sort: "",
    };
  }
  sortRecords = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      records: state.records.slice().sort((a, b) => {
        if (sort === "lowest") {
          return a.price > b.price ? 1 : -1;
        } else if (sort === "highest") {
          return a.price < b.price ? 1 : -1;
        } else {
          return a._id < b._id ? 1 : -1;
        }
      }),
    }));
  };
  filterRecords = (event) => {
    if (event.target.value === "") {
      this.setState({
        format: event.target.value,
        records: DATA.records,
      });
    } else {
      this.setState({
        format: event.target.value,
        records: DATA.records.filter(
          (record) => record.availableFormats.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="#">React Record Store</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.records.length}
                size={this.state.size}
                sort={this.state.sort}
                filterRecords={this.filterRecords}
                sortRecords={this.sortRecords}
              ></Filter>
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
