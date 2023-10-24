import React from "react";

export default class Formdata extends React.Component {
  render() {
    return (
      <>
        <div>

          {this.props.value.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="inside-data">
                  Name: {item.name} \\ Department: {item.Department} \\ Rating:{" "}
                  {item.Rating}
                </h3>
              </div>
            );
          })}
          
        </div>
        <button onClick={this.props.value2} className="back"> Back</button>
      </>
    );
  }
}
