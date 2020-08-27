import React from "react";
import formatCurrency from "../utils";

export default class Records extends React.Component {
  render() {
    return (
      <div>
        <ul className="records">
          {this.props.records.map((record) => (
            <li key={record._id}>
              <div className="record">
                <a href={"#" + record._id}>
                  <img src={record.image} alt={record.title}></img>
                  <p>{record.title}</p>
                </a>
                <div className="record-price">
                  <div>{formatCurrency(record.price)}</div>
                  <button className="button primary">Add To Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
