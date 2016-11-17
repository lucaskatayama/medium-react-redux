import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DateView from '../components/DateView';
import UserButton from '../components/UserButton';

import { changeDate } from '../actions/date';

function mapStateToProps(state) {
  return {
    date: state.date.date.toString(),
  };
}
function mapDispatchToPros(dispatch) {
  return {
    changeDate: () => dispatch(changeDate()),
  };
}

class UserDateChanger extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    changeDate: PropTypes.func,
  }

  onClick() {
    this.props.changeDate();
  }

  render() {
    return (<div>
      <DateView date={this.props.date} />
      <br />
      <UserButton onClick={() => this.onClick()} />
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(UserDateChanger);
