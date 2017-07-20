import React, { Component } from "react";
import "../styles/App.css";

class Form extends Component {
  render() {
    return (
      <form className="align-content-center">
        <div className="jumbotron align-content-center text-center">
        <h2>What is Your Name, Pilot?</h2>
        <input type="text" name="pilotName" onKeyUp={this.props.inputAction} />
        <br />
        <input type="submit" className="btn btn-primary margin" onClick={this.props.submitAction} />
        <h2>
          {this.props.pilot}
        </h2>
        </div>
      </form>
    );
  }
}

export default Form;
