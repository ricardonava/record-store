import React, { Component } from "react";
import Filter from "./components/Filter";
import Records from "./components/Records";
import DATA from "./data.json";
import Cart from "./components/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      records: DATA.records,
      cartItems: [],
      format: "",
      sort: "",
    };
  }

  removeFromCart = (record) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter((x) => x._id !== record._id) });
  };

  addToCart = (record) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === record._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...record, count: 1 });
    }
    this.setState({ cartItems });
  };

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
              <Records
                records={this.state.records}
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />
            </div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
