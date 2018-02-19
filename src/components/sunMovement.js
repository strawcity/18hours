
const getSunRisePosition = (result, timeNow) => {
  let showSunRise = (result.daily.data[0].sunriseTime * 1000) - timeNow;
  if (showSunRise > 0) {
    return calculateOffset(showSunRise)
  } else {
    return null
  }
}

const getSunSetPosition = (result, timeNow) => {
  let showSunRise = result.daily.data[0].sunsetTime * 1000 - timeNow;
  if (showSunRise > 0) {
    console.log(calculateOffset(showSunRise));
    return calculateOffset(showSunRise)
  } else {
    return null
  }
}

const getNextSunRisePosition = (result, timeNow) => {
  let showNextSunSet = result.daily.data[1].sunriseTime * 1000 - timeNow;
  if (showNextSunSet > 0) {
    console.log(calculateOffset(showNextSunSet)); 
    return calculateOffset(showNextSunSet)
  } else {
    return null
  }
}

const getNextSunSetPosition = (result, timeNow) => {
  let showNextSunSet = result.daily.data[1].sunsetTime * 1000 - timeNow;
  if (showNextSunSet > 0) {
    return calculateOffset(showNextSunSet)
  } else {
    return null
  }
}

const calculateOffset = sunMovement => {
  return 65 + Math.round((sunMovement / 61200000) * 525)
}

export {
  getSunRisePosition,
  getSunSetPosition,
  getNextSunRisePosition,
  getNextSunSetPosition,
}
