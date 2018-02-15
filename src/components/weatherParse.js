
const logData = data => {
  console.log(data);
}

const tempRange = data => {
  var tempArray = [];
  for (var hour = 0; hour < 18; hour++) {
    tempArray.push(data.hourly.data[hour].temperature)
  }
  return tempArray;
}

const highTemp = tempArray => {
  return Math.max(...tempArray)
}

const lowTemp = tempArray => {
  return Math.min(...tempArray)
}

export {
  logData,
  highTemp,
  lowTemp,
  tempRange,
}
