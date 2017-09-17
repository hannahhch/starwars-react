import React, { Component } from 'react';

export default class Form extends Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { pilot: "" }
  }

  handleNameChange(e){
    this.setState({pilot: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({pilot: e.target.value});
  }

  render(){
    return(
      <div className = "form">
        <div className = "form-header">
          <h3>What is your name, pilot?</h3>
        </div>
        <form>
          <div className="form-group" onSubmit={this.handleSubmit}>
            <input className="form-control col-md-3" onChange={this.handleNameChange} name="name" value={this.state.pilot} type="text"/>
          </div>
          <div className="form-group pull-right">
            <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}
