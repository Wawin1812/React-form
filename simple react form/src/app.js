import React, { Component } from "react";
import ReactDOM from "react-dom";

class app extends Component {
  constructor() {
    super();
    this.state = {
      firstName: " ",
      lastName: " ",
      age: " ",
      gender: " ",
      destination: " ",
      dietary: {
        Vegan: false,
        Veg: false,
        NonVeg: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type == "checkbox"
      ? this.setState(prevState => {
          return {
            dietary: {
              ...prevState.dietary,
              [name]: checked
            }
          };
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First name"
          />
          <br />

          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <label>
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>

          <br />

          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option>--Choose the Options--</option>
            <option> ACT </option>
            <option> VIC </option>
            <option> NSW </option>
            <option> QLD </option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="Vegan"
              onChange={this.handleChange}
              checked={this.state.dietary.Vegan}
            />
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Veg"
              onChange={this.handleChange}
              checked={this.state.dietary.Veg}
            />
            Veg
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="NonVeg"
              onChange={this.handleChange}
              checked={this.state.dietary.NonVeg}
            />
            NonVeg
          </label>
        </form>

        <br />

        <button> Submit </button>
        <hr />
        <h1> Entered information on the form </h1>
        <p>
          First and Last Name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Age: {this.state.age}</p>
        <p>Gender : {this.state.gender}</p>
        <p> Destination : {this.state.destination}</p>
        <p>--dietary--</p>
        <p>Vegan : {this.state.dietary.Vegan ? "yes" : ""} </p>
        <p>Veg : {this.state.dietary.Veg ? "yes" : " "}</p>
        <p>NonVeg : {this.state.dietary.NonVeg ? "yes" : " "}</p>
      </main>
    );
  }
}

export default app;
