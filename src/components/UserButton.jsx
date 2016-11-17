import React, { PropTypes } from 'react';

const UserButton = props => (
  <button onClick={props.onClick}>Click Me!</button>
);

UserButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserButton;
