import React, { Component } from 'react'
import Moment from 'react-moment';
import './components/_styles/css/app.css'
import { logData, getTempArray, getForecastArray, tempDataPoints, getHighTemp, getLowTemp } from './components/weatherParse'
import { getSunRise, getSunSet, getNextSunRise, getNextSunSet, sunRiseCheck, sunSetCheck } from './components/sunMovement.js'
import LineChart from 'react-linechart';


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
      sunRise: null,
      sunSet: null,
      nextSunRise: null,
      nextSunSet: null,
      foreCastArray: [],
      timeNow: (new Date()).getTime(),
      endTime: null,
    };
  }

  componentDidMount() {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    const lat = '55.6050'
    const lon = '13.0038'
    const key = "c254108b1bb34c0524d145ad1a99d5a2"
    const locationAPI = "https://api.darksky.net/forecast/" + key + "/" + lat + "," + lon
    fetch(corsAnywhere + locationAPI)
      .then(res => res.json())
      .then(
        (result) => {
          // logData(result)
          let tempArray = getTempArray(result)
          this.setState({
            isLoaded: true,
            tempRange: tempDataPoints(tempArray),
            highTemp: getHighTemp(tempArray),
            lowTemp: getLowTemp(tempArray),
            sunRise: getSunRise(result),
            sunSet: getSunSet(result),
            nextSunRise: getNextSunRise(result),
            nextSunSet: getNextSunSet(result),
            foreCastArray: getForecastArray(result),
            timeNow: (new Date()).getTime(),
            endTime: ((new Date()).getTime() + 61200000),
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
      const { error, isLoaded, tempRange, foreCastArray } = this.state;

      sunRiseCheck(this.state.sunRise, this.state.timeNow)
      sunSetCheck(this.state.sunSet, this.state.timeNow)

      const foreCast = foreCastArray.map((foreCast) =>
        <li id={foreCast.icon}>
          <img src={foreCast.icon}/>
          <p>{foreCast.precep}</p>
        </li>
      );
      const data = [
            {
                color: "white",
                points: this.state.tempRange
            }
        ];
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className='App'>
            <div className='weather-graph'>
            <h3 className='high-temp'>{this.state.highTemp}°</h3>
            <div className='line-chart'>
              <LineChart
                  width={600}
                  height={220}
                  hideYAxis={true}
                  hideXAxis={true}
                  hidePoints={false}
                  data={data}
              />
            </div>
            <p className="hour-four"><Moment format="H:mm" add={{ hours: 3 }}>{this.props.timeNow}</Moment></p>
            <p className="hour-eight"><Moment format="H:mm" add={{ hours: 7 }}>{this.props.timeNow}</Moment></p>
            <p className="hour-twelve"><Moment format="H:mm" add={{ hours: 15 }}>{this.props.timeNow}</Moment></p>
            <h3 className='low-temp'>{this.state.lowTemp}°</h3>
            <div className='weather-forecast'>
              <ul className='forecast-container'>
                {foreCast}
              </ul>
            </div>
            </div>
          </div>
        );
      }
  }
}

export default App;
