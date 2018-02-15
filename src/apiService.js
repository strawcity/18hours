import $ from 'jquery';
//
const featchWeather = async () => {
  const lat = '42.3601'
  const lon = '-71.0589'
  const key = "c254108b1bb34c0524d145ad1a99d5a2"
  const locationAPI = "https://api.darksky.net/forecast/" + key + "/" + lat + "," + lon
  let weather = {}
    $.ajax({
       type: "GET",
       dataType: "jsonp",
       jsonp: "callback", jsonpCallback: "callback",
       url: locationAPI,
       cache: false,
       success: function (data) {
         console.log(data);
        }
    });
}

const mapDate = date => {
  return new Date(date).toLocaleString('sv-SE')
}

export {
  featchWeather,
}
