import React from 'react';
import PropTypes from 'prop-types';
import {SEATS_POSITIONS_CSS_MAPPING} from '../constants';

class EmptySeat extends React.Component {
  render() {
    return (
      <div className={"seat " + this.positionCssClass()} data={JSON.stringify(this.props)} >
        <div className="playerBox">
        </div>
      </div>
    );
  }

  positionCssClass() {
    return SEATS_POSITIONS_CSS_MAPPING[this.props.seatPosition];
  }
}

EmptySeat.propTypes = {
  seatPosition: PropTypes.string.isRequired,
}

export default EmptySeat;
