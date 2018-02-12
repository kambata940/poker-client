import React from 'react';
import PropTypes from 'prop-types';
import {SEATS_POSITIONS} from '../constants';
import SeatContainer from './SeatContainer';
import BoardContainer from './BoardContainer';

//Table
//  SeatContainer
//  BoardContainer
//
//
//

class Table extends React.Component {
  render() {
    console.log(this.props.gameState);

    const {players, pot, board} = this.props.gameState;
    const currentPlayerID = this.props.currentPlayerID

    return (
      <div className="Table">
        <BoardContainer pot={pot} cards={board} />
        {this.seatComponents(Object.values(players), currentPlayerID)}
      </div>
    );
  }

  seatComponents(players, currentPlayerID) {
    return SEATS_POSITIONS.map((position, index) => {
      const player = players.find(({seatPosition}) => seatPosition === position);

      if (player) {
        return <SeatContainer key={index} seatPosition={position} player={player} current={player.id === currentPlayerID} />
      } else {
        return <SeatContainer key={index} seatPosition={position} />
      }
    })
  }
}

Table.propTypes = {
  gameState: PropTypes.object.isRequired,
  currentPlayerID: PropTypes.number.isRequired,
}

export default Table;
