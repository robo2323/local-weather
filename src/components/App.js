import React, { PureComponent } from 'react';
import WeatherDisplay from './WeatherDisplay';
import SearchForm from './SearchForm';
import fetchWeather from '../controllers/fetchWeather';

import clearDay from '../img/clear-day.jpg';
import clearNight from '../img/clear-night.jpg';
import cloudy from '../img/cloudy.jpg';
import partlyCloudyDay from '../img/partly-cloudy-day.jpg';
import partlyCloudyNight from '../img/partly-cloudy-night.jpg';
import snow from '../img/snow.jpg';
import sleet from '../img/snow.jpg';
import wind from '../img/wind.jpg';
import fog from '../img/fog.jpg';
import rain from '../img/rain.jpg';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
      address: '',
      bgImages: {
        'clear-day': clearDay,
        'clear-night': clearNight,
        cloudy,
        'partly-cloudy-day': partlyCloudyDay,
        snow,
        sleet,
        wind,
        fog,
        'partly-cloudy-night': partlyCloudyNight,
        rain

      }
    };
    this.setWeather = this.setWeather.bind(this);
  }
  async setWeather(query) {
    this.setState({ weatherData: '', address: '' });

    const data = await fetchWeather(query);
    this.setState({ weatherData: data.weatherData, address: data.formattedAddress });
  }

  componentDidMount() {
    this.setWeather();
  }

  render() {
    let weather;
    let bgURL;
    let containerStyle;
    if (this.state.weatherData) {
      weather = <WeatherDisplay data={this.state} />;
      bgURL = this.state.bgImages[this.state.weatherData.currently.icon];
    

      containerStyle = {
        backgroundImage: `url(${bgURL})`
      };
    } else {
      weather = <h1>Loading...</h1>;
      bgURL = this.state.bgImages['partly-cloudy-day'];
      containerStyle = {

        backgroundImage: `url(${bgURL})`
      
      };
    }

    return (
      <div className="container" style={containerStyle}>
        <h1>Current Weather</h1>
        {weather}
        <SearchForm setWeather={this.setWeather} />
      </div>
    );
  }
}

export default App;
