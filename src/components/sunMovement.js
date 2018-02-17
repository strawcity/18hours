
const getSunRise = result => {
  return (result.daily.data[0].sunriseTime * 1000);
}

const getSunSet = result => {
  return result.daily.data[0].sunsetTime * 1000
}

const getNextSunRise = result => {
  return (result.daily.data[1].sunriseTime * 1000);
}

const getNextSunSet = result => {
  return result.daily.data[1].sunsetTime * 1000
}

const sunRiseCheck = (sunRise, timeNow) => {
  let showSunRise = sunRise - timeNow;
  if (showSunRise) {
    console.log((showSunRise / 61200000) * 525);
  }
}

const sunSetCheck = (sunSet, timeNow) => {
  let showSunSet = sunSet - timeNow;
  if (showSunSet) {
    console.log((showSunSet / 61200000) * 525);
  }
}

export {
  getSunRise,
  getSunSet,
  getNextSunRise,
  getNextSunSet,
  sunRiseCheck,
  sunSetCheck,
}
