import React, { PropTypes } from 'react';


const DateView = props => (
  <span>{props.date}</span>
);

DateView.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateView;
