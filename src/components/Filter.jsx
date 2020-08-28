import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Records</div>
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortRecords}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-format">
          Filter{" "}
          <select value={this.props.size} onChange={this.props.filterRecords}>
            <option value="">ALL</option>
            <option value="WAV">WAV</option>
            <option value="AIFF">AIFF</option>
            <option value="FLAC">FLAC</option>
          </select>
        </div>
      </div>
    );
  }
}
