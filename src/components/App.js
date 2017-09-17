import React, {Component} from 'react';
import '../styles/App.css';
import Header from '../components/Header.js';
import Form from '../components/Form.js';
import Cards from '../components/Cards.js';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
        <Form/>
        <Cards/>
      </div>
    );
  }
}

export default App;
