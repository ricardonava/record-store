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
          return a._id > b._id ? 1 : -1;
        }
      }),
    }));
  };
  filterRecords = (event) => {
    if (event.target.value === "") {
      this.setState({
        format: event.target.value,
        records: DATA.records.slice().sort((a, b) => {
          if (this.state.sort === "lowest") {
            return a.price > b.price ? 1 : -1;
          } else if (this.state.sort === "highest") {
            return a.price < b.price ? 1 : -1;
          } else {
            return a._id > b._id ? 1 : -1;
          }
        }),
      });
    } else {
      const filteredRecords = DATA.records.filter(
        (record) => record.availableFormats.indexOf(event.target.value) >= 0
      );
      this.setState({
        format: event.target.value,
        records: filteredRecords.sort((a, b) => {
          if (this.state.sort === "lowest") {
            return a.price > b.price ? 1 : -1;
          } else if (this.state.sort === "highest") {
            return a.price < b.price ? 1 : -1;
          } else {
            return a._id > b._id ? 1 : -1;
          }
        }),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <header>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <a href="#home">React Record Store</a>
=======
>>>>>>> 2f8107c00cb52203d2e611f53621c43b4df71b5a
<<<<<<< HEAD
          <a href="#">React Record Store</a>
=======
          <a href="#home">React Record Store</a>
>>>>>>> 0.0.1
<<<<<<< HEAD
=======
>>>>>>> 7998da71fc509032ef0a52b4d0827223aeb151d9
>>>>>>> 2f8107c00cb52203d2e611f53621c43b4df71b5a
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
