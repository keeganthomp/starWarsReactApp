import React, { Component } from "react";
import "../styles/App.css";

class Vehicle extends Component {
  render() {
    let vehicles = this.props.state.vehicle.map(vehicles => {
      // console.log(":::::::F:SF:SDF", vehicles);
      return (
        <div className="vehicle card col-lg-3 padding">
          <h3 className="card-title">
            Vehicle:{vehicles.name}
            <h3>Specs</h3>
          </h3>
          <h6 className="list-group-item">
            Model: {vehicles.model}
          </h6>
          <h6 className="list-group-item">
            Manufactuerer {vehicles.manufacturer}
          </h6>
          <h6 className="list-group-item">
            Class: {vehicles.vehicle_class}
          </h6>
          <h6 className="list-group-item">
            Passenger: {vehicles.passengers}
          </h6>
          <h6 className="list-group-item">
            Crew: {vehicles.crew}
          </h6>
          <h6 className="list-group-item">
            Length: {vehicles.length}
          </h6>
          <h6 className="list-group-item">
            Cargo Capacity: {vehicles.cargo_capacity}
          </h6>
        </div>
      );
    });
    return (
      <div className="row cardContainer">
        {vehicles}
      </div>
    );
  }
}

export default Vehicle;
