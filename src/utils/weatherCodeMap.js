export const weatherCodeMap = {
  0: '☀️',  // Clear sky
  1: '🌤️',  // Partly cloudy
  2: '☁️',  // Cloudy
  3: '🌧️',  // Rain
  4: '⛈️',  // Thunderstorm
  5: '🌨️',  // Snow
  6: '🌫️',  // Fog
};


export const getWeatherEmoji = (code) => {
  return weatherCodeMap[code] || '❓'; 
};