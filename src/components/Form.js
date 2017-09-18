import React, { Component } from 'react';

export default class Form extends Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      pilot: "",
      newPilot: ""
    }
  }

  handleNameChange(e){
    this.setState({pilot: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      newPilot: this.state.pilot,
      pilot: ""
    });
  }

  render(){
    return(
      <div className = "form">
        <div className = "form-header">
          <h3>What is your name, pilot?</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <input className="form-control col-md-3" onChange={this.handleNameChange} name="name" value={this.state.pilot} placeholder="Enter your name" type="text"/>
          </div>
          <div className="form-group pull-right">
            <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
          </div>
        </form>
        <h4>{this.state.newPilot}</h4>
      </div>
    )
  }
}
