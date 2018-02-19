import React, { Component } from 'react'
import Moment from 'react-moment';
import './components/_styles/css/app.css'
import { logData, getTempArray, getForecastArray, tempDataPoints, getHighTemp, getLowTemp } from './components/weatherParse'
import { getSunRisePosition, getSunSetPosition, getNextSunRisePosition, getNextSunSetPosition, } from './components/sunMovement.js'
import LineChart from 'react-linechart';

let timeNow = (new Date()).getTime()
let endTime = (new Date()).getTime() + 61200000

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
      foreCastArray: [],
      timeNow: timeNow,
      endTime: endTime,
      nightLength: null,
      sunRisePosition: null,
      sunSetPosition: null,
      nextSunRisePosition: null,
      nextSunSetPosition: null,
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
          logData(result)
          let tempArray = getTempArray(result)
          this.setState({
            isLoaded: true,
            tempRange: tempDataPoints(tempArray),
            highTemp: getHighTemp(tempArray),
            lowTemp: getLowTemp(tempArray),
            foreCastArray: getForecastArray(result),
            timeNow: timeNow,
            endTime: endTime,
            nightLength: (endTime - timeNow),
            sunRisePosition: getSunRisePosition(result, timeNow),
            sunSetPosition: getSunSetPosition(result, timeNow),
            nextSunRisePosition: getNextSunRisePosition(result, timeNow),
            nextSunSetPosition: getNextSunSetPosition(result, timeNow),
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

      const foreCast = foreCastArray.map((foreCast) =>
        <li id={foreCast.icon}>
          <img src={foreCast.icon}/>
          <p>{foreCast.precep}</p>
          <p><Moment format="H:mm">{foreCast.time}</Moment></p>
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
            <span className="sunrise-line" style={{ left: this.state.sunRisePosition }}/>
            <span className="next-sunrise-line" style={{ left: this.state.nextSunRisePosition }}/>
            <span className="sunset-line" style={{ left: this.state.sunSetPosition }}/>
            <span className="next-sunset-line" style={{ left:this.state.nextSunSetPosition }}/>
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
