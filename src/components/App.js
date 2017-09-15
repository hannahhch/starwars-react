import React, {Component} from 'react';
import '../styles/App.css';

class Header extends Component{
  render(){
    return(
      <div className = "header">
        <h1>Star Wars</h1>
        <h4>The Vehicles of Star Wars</h4>
      </div>
    )
  }
}

class Form extends Component{
  render(){
    return(
      <div className = "form">
        <div className = "form-header">
          <h3>What is your name, pilot?</h3>
        </div>
        <form>
    
          <div className="form-group">
            <input className="form-control col-md-3" name="name"  type="text"/>
          </div>
          <div className="form-group pull-right">
            <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

class Cards extends Component{
  render(){
    return(
      <div className = "cards">
        <div className = "vehicle-card">

        </div>
      </div>
    )
  }
}

class App extends Component {


  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props);

    this.state ={
      vehicles: [],
      value: '',
      pilot: '',
      swapi: '',
      swapiResults: [],
    };



    // FORM: HANDLE INPUT CHANGES
    // handleNameChange below:
    // See form lesson for details.
    // Enter your code below:

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleNameChange(event){
    this.setState({
      pilot: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault()
    const newPilot = {
      pilot: this.state.pilot
    }
    const mainPilot = this.state.mainPilot
    mainPilot.push(newPilot)

    this.setState({
      pilot: ""
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentWillMount(){
    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then((json) =>{
      console.log("API FETCHED!!", json)
      this.setState({swapiResults: json.results})
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    let swapi = this.state.swapi;
    return (
      <div key={swapi.id}>
        <h1>Vehicle: {swapi.results[0].name}</h1>
      </div>
    )
    */
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    console.log('swapiResults', this.state.swapiResults)

    return(
      <div className="App">
        <Header/>
        <Form/>
        {this.state.swapiResults.map(vehicle =>(
          <div className = "cards card">
            <h4>Vehicle: {vehicle.name}</h4>
            <h5>Model: {vehicle.model}</h5>
            <div className = "specs">
              <h6>Specs</h6>
              <p>Manufacturer: {vehicle.manufacturer}</p>
              <p>Class: {vehicle.vehicle_class}</p>
              <p>Passengers: {vehicle.passengers}</p>
              <p>Crew: {vehicle.crew}</p>
              <p>Length: {vehicle.length}</p>
              <p>Max Speed: {vehicle.max_atmosphering_speed}</p>
              <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default App;
