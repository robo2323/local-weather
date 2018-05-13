import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  componentDidMount() {
    const icons = new Skycons({
      color: 'white',
      resizeClear: true
    });
    icons.set('icon-now', this.props.icon);
    icons.play();
  }
  render() {
    return (
      <div>
        <canvas id="icon-now" />
      </div>
    );
  }
}

export default Icon;
