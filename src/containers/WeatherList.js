import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/ChartComponent";
import GoogleMap from "../components/GoogleMapComponent";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;
    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
          {name}
        </td>
        <td>
          <Chart color="yellow" data={temps} units="K" />
        </td>
        <td>
          <Chart color="green" data={pressures} units="hPa" />
        </td>
        <td>
          <Chart color="black" data={humidities} units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
