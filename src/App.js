import React, { Component } from 'react'
import './components/_styles/css/app.css'
import { logData, tempRange, highTemp, lowTemp } from './components/weatherParse'
import BarChart from './components/BarChart'
// import { featchWeather } from './apiService'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      weather: [],
      highTemp: null,
      lowTemp: null,
      tempRange: [],
    };
  }

  componentDidMount() {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    const lat = '42.3601'
    const lon = '-71.0589'
    const key = "c254108b1bb34c0524d145ad1a99d5a2"
    const locationAPI = "https://api.darksky.net/forecast/" + key + "/" + lat + "," + lon
    fetch(corsAnywhere + locationAPI)
      .then(res => res.json())
      .then(
        (result) => {
          logData(result)
          const tempArray = tempRange(result)
          this.setState({
            isLoaded: true,
            tempRange: tempArray,
            highTemp: highTemp(tempArray),
            lowTemp: lowTemp(tempArray),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
      const { error, isLoaded, weather } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className='App'>
            <h1>{this.state.highTemp}</h1>
            <BarChart data={[5,10,1,3]} size={[this.state.lowTemp,this.state.highTemp]} />
          </div>
        );
      }
  }
}

export default App;
