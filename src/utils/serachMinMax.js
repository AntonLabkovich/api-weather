export const searchMinTemp = (monitoredCity) => {
  let min = Math.round(monitoredCity[0].main.temp)
  for (let i = 1; i < monitoredCity.length; ++i) {
    if (Math.round(monitoredCity[i].main.temp) < min) min = Math.round(monitoredCity[i].main.temp);
  }
  return min
}

export const searchMaxTemp = (monitoredCity) => {
  let max = Math.round(monitoredCity[0].main.temp)
  for (let i = 1; i < monitoredCity.length; ++i) {
    if (Math.round(monitoredCity[i].main.temp) > max) max = Math.round(monitoredCity[i].main.temp);
  }
  return max
}

