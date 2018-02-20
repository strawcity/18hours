
const getSunRisePosition = (result, timeNow) => {
  let showSunRise = result.daily.data[0].sunriseTime * 1000 - timeNow
  if (showSunRise > 0) {
    return calculateOffset(showSunRise)
  } else {
    return null
  }
}

const getSunSetPosition = (result, timeNow) => {
  console.log(result.daily.data[0].sunsetTime);
  let showSunRise = result.daily.data[0].sunsetTime * 1000 - timeNow
  if (showSunRise > 0) {
    return calculateOffset(showSunRise)
  } else {
    return null
  }
}

const getNextSunRisePosition = (result, timeNow) => {
  let showNextSunSet = result.daily.data[1].sunriseTime * 1000 - timeNow
  if (showNextSunSet > 0) {
    return calculateOffset(showNextSunSet)
  } else {
    return null
  }
}

const getNextSunSetPosition = (result, timeNow) => {
  let showNextSunSet = result.daily.data[1].sunsetTime * 1000 - timeNow
  if (showNextSunSet > 0) {
    return calculateOffset(showNextSunSet)
  } else {
    return null
  }
}

const getNightLength = (result, timeNow) => {
  let nightLength = result.daily.data[0].sunsetTime * 1000 - timeNow
  let nextSunSet = result.daily.data[1].sunriseTime * 1000 - timeNow;
  if (nightLength > 0 && nextSunSet > 61200000) {
    console.log(10 + Math.round(((61200000 - nightLength) / 61200000) * 525));
    return 10 + Math.round(((61200000 - nightLength) / 61200000) * 525);
  } else if (nightLength > 0 && nextSunSet < 61200000) {
    console.log('redfine night length');
    return 10 + Math.round((((61200000 - nightLength) - nextSunSet) / 61200000) * 525);
  } {
    return null
  }
}

const calculateOffset = sunMovement => {
  return 90 + Math.round((sunMovement / 61200000) * 525)
}

export {
  getSunRisePosition,
  getSunSetPosition,
  getNextSunRisePosition,
  getNextSunSetPosition,
  getNightLength,
}
