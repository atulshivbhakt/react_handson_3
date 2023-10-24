import React, { Component } from "react";
import Formdata from "./Formdata";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Department: "",
      Rating: "",
      Nothing: [],
      condition: true,
    };
  }
  
  handleChange = (Roony) => {
    this.setState({ [Roony.target.name]: Roony.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.name.length > 0 &&
      this.state.Department.length > 0 &&
      this.state.Rating.length > 0
    ) {
      const temporaryobject = { name: this.state.name, Department: this.state.Department, Rating: this.state.Rating,}; 
    // updating empty array
    this.state.Nothing.push(temporaryobject);
    } else {
      alert("Enter Proper Data");
    }
    this.setState({
      Nothing: this.state.Nothing,
      name: "",
      Department: "",
      Rating: "",
      condition: false,
    });
    console.log(this.state.Nothing);
  };

  checkcondition = () => {
    this.setState({
        condition: !this.state.condition,
    });
  };

  render() {
    return (
      <>
       <h1 id="heading" className="top">
       Employer's Feedback Form
          </h1>
        <div className="container">
         
          {this.state.condition ? (
            <form>

              <label htmlFor="name" className="label"> Name: </label>
              <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} className="input" ></input>{" "}
              
              <label className="label" htmlFor="Department">Department:</label>
              <input type="text" name="Department" id="Department" onChange={this.handleChange} value={this.state.Department} className="input" ></input>
            
              <label className="label" htmlFor="Ratings">Rating:</label>
              <input type="number" name="Rating" id="Ratings" className="input" onChange={this.handleChange} value={this.state.Rating}
              ></input>
              <br />
              <br />
              <button onClick={this.handleSubmit} className="submit">
                Submit
              </button>
            </form>
          ) : (
            <Formdata value={this.state.Nothing} value2={this.checkcondition} />
          )}
        </div>
      </>
    );
  }
}

export default Form;