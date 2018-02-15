import React, { Component } from 'react'
import logo from './dn.jpg'
import './App.css'
import { featchWeather } from './apiService'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const rssFeed = featchWeather()
    console.log(rssFeed);
    rssFeed.then(feed => {
      this.setState({
        rssFeed: feed,
      })
    }).catch(error => console.log('error:', error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">

          </h1>
        </header>
      </div>
    );
  }
}

export default App;
