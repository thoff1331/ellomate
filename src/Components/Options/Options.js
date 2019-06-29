import React, { Component } from "react";
import Calendar from "../Calendar/Calendar";

import "./Options.scss";

export default class Options extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateChosen: null,
      numberOfDays: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Options!</h1>
        <h3>Choose Your Weapons</h3>
        <input
          autoComplete="off"
          type="date"
          name="dateChosen"
          onChange={this.handleChange}
          value={this.state.dateChosen}
        />
        <input
          autoComplete="off"
          placeholder="Number of Days"
          onChange={this.handleChange}
          value={this.state.numberOfDays}
          name="numberOfDays"
        />
        <Calendar
          numberOfDays={this.state.numberOfDays}
          dateChosen={this.state.dateChosen}
        />
      </div>
    );
  }
}
