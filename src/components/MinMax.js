import React from 'react';

const MinMax = (props) => {
  return (
    <div>
      <p>
        Min: <span className="min">{props.min}°C</span> / Max: <span className="max">{props.max}°C</span>
      </p>
    </div>
  );
};

export default MinMax;
