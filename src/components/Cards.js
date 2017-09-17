import React, { Component } from 'react';
import SingleCard from '../components/SingleCard.js';

export default class Cards extends Component {
  constructor(props){
    super(props);

    this.state = {
      vehicles: []
    }
  }


  componentDidMount(){
    fetch('https://swapi.co/api/vehicles/').then(results => {
      return results.json();
    }).then(data => {
      this.setState({vehicles: data.results});
    })
  }

  render(){
    console.log(this.state.vehicles);
    return(

      <div className = "vehicle-holder">
        {this.state.vehicles.map(vehicle => <SingleCard vehicle={ vehicle } key={ vehicle.url}/>)}
      </div>
    )
  }
};
