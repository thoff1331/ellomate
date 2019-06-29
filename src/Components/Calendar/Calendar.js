import React, { Component } from "react";
import Options from "../Options/Options";

import "./Calendar.scss";

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfDays: 0
    };

    this.handleUpdateCalendar = this.handleUpdateCalendar.bind(this);
  }

  handleUpdateCalendar() {
    this.setState({ numberOfDays: this.props.numberOfDays });
  }

  render() {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    console.log(this.props.dateChosen + 20);
    return (
      <div>
        <button onClick={this.handleUpdateCalendar}>Update Calendar</button>
        <h1>{"number of days: " + this.props.numberOfDays} </h1>
        <h1>{"number of days: " + this.state.numberOfDays} </h1>
        <h1>{"date chosen: " + this.props.dateChosen} </h1>
        <table>
          {days.map((val, index) => {
            return (
              <div>
                <h1>{days[0]}</h1>
              </div>
            );
          })}
          {/* <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr> */}
          <tr>
            <td>{this.state.numberOfDays}</td>
          </tr>
        </table>
      </div>
    );
  }
}
