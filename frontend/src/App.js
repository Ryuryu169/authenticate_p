import React from 'react';
import Axios from 'axios';
import './App.css';
import {TextField} from "@material-ui/core"

//function App() {
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const textFieldStyles = {
      backgroundColor: 'white',
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1>text parser</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <TextField id="outlined-basic" label="Outlined" variant="filled" value={this.state.value} onChange={this.handleChange} style={textFieldStyles}/>
            </label>
            <br/>ß
            <input type="submit" value="Parse" />
          </form>
        </header>
      </div>
    );
  }

  users_app = text => {
    //console.log("input text >>"+text)
    Axios.get("http://127.0.0.1:5000/"+text)
    .then(function(res) {
      alert(res.data);
    })
    .catch(function(error) {
      alert(error);
    });
  };

  handleSubmit = event => {
    this.users_app(this.state.value)
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
}

export default App;
