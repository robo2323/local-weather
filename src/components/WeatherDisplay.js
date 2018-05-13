import React, { PureComponent } from 'react';
import WeatherDesc from './WeatherDesc';
import CurrDate from './CurrDate';
import Location from './Location';
import Icon from './Icon';
import Temp from './Temp';
import MinMax from './MinMax';
import FeelsLike from './FeelsLike';

class WeatherDisplay extends PureComponent {
  render() {
    const weatherData = this.props.data.weatherData;
    const dateNow = new Date(weatherData.daily.data[0].time * 1000).toDateString().split(' ');
    const temp = `${Math.round(weatherData.currently.temperature)}°C`;   
    const feelsLike=`Feels like: ${Math.round(weatherData.currently.apparentTemperature)}°C`;

    const min = Math.round(weatherData.daily.data[0].temperatureMin);
    const max= Math.round(weatherData.daily.data[0].temperatureMax);

    return (
      <div className="weather">
        <CurrDate date={dateNow} />
        <Location address={this.props.data.address} />
        <WeatherDesc currently={weatherData.currently.summary} />
        <Icon icon={weatherData.currently.icon}/>
        <Temp temp={temp} />
        <MinMax min={min} max={max} />
        <FeelsLike feelsLike={feelsLike}/>
      </div>
    );
  }
}

export default WeatherDisplay;
