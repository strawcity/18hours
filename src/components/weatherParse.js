
const logData = data => {
  console.log(data.daily.data[0].time);
  console.log(data.daily.data[0].sunriseTime);
}

const getTempArray = data => {
  var tempArray = []
  for (var hour = 0; hour < 19; hour++) {
    tempArray.push(data.hourly.data[hour].temperature)
  }
  return tempArray;
}

const getForecastArray = data => {
  var forecastArray = []
  for (var hour = 1; hour < 19; hour++) {
     if (hour % 2 !== 0) {
       forecastArray.push({time: data.hourly.data[hour].time * 1000, icon: "/img/" + data.hourly.data[hour].icon + ".svg", precep: "%" + Math.floor(data.hourly.data[hour].precipProbability * 100)})
     }
  }
  return forecastArray;
}

const tempDataPoints = data => {
  var tempDataPoints = [],
      dataPoint = {}
  for (var hour = 0; hour < 19; hour++) {
    dataPoint = {x: hour, y: data[hour]}
    tempDataPoints.push(dataPoint)
  }
  return tempDataPoints;
}

const getHighTemp = tempArray => {
  return Math.round(Math.max(...tempArray))
}

const getLowTemp = tempArray => {
  return Math.round(Math.min(...tempArray))
}



export {
  logData,
  getTempArray,
  getHighTemp,
  getLowTemp,
  tempDataPoints,
  getForecastArray,
}
