
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
  if (showSunRise > 0) {
    console.log((showSunRise / 61200000) * 525);
  } else {
    return null
  }
}

const sunSetCheck = (sunSet, timeNow) => {
  let showSunSet = sunSet - timeNow;
  if (showSunSet > 0) {
    return 100 + Math.round((showSunSet / 61200000) * 525)
  } else {
    return null
  }
}

const nextSunRiseCheck = (nextSunRise, timeNow) => {
  let showNextSunSet = nextSunRise - timeNow;
  if (showNextSunSet > 0) {
    return 100 + Math.round((showNextSunSet / 61200000) * 525)
  } else {
    return null
  }
}

export {
  getSunRise,
  getSunSet,
  getNextSunRise,
  getNextSunSet,
  sunRiseCheck,
  sunSetCheck,
  nextSunRiseCheck,
}
