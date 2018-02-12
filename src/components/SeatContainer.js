import React from 'react';
import PropTypes from 'prop-types';
import {SEATS_POSITIONS_CSS_MAPPING} from '../constants';

class SeatContainer extends React.Component {
  render() {
    return this.isEmpty() ? this.renderEmptySeat(this.props.player) : this.renderSeat(this.props.player);
  }

  renderEmptySeat(player) {
    return (
      <div className={"seat " + this.positionCssClass()} >
        <span className="playerBox" />
      </div>
    )
  }

  renderSeat({cards, imageURL, }) {
    let avatarStyle, firstCardStyle, secondCardStyle;
    if (imageURL) {
      avatarStyle = {backgroundImage: `url(${imageURL})`};
    }

    if (cards.length > 0) {
      firstCardStyle = {backgroundImage: `url("/images/${this.cardToImageName(cards[0])}.png")`};
      secondCardStyle = {backgroundImage: `url("/images/${this.cardToImageName(cards[1])}.png")`}
    }

    return (
      <div className={"seat " + this.positionCssClass()} >
        <div className="avatar" style={avatarStyle} />
        <div>
          <span className="card" style={firstCardStyle} />
          <span className="card" style={secondCardStyle} />
          <div className="playerBox">
            <span> {this.props.player.name} </span>
            <hr />
            <span>$ {this.props.player.balance}</span>
          </div>
        </div>
      </div>
    )
  }

  positionCssClass() {
    return SEATS_POSITIONS_CSS_MAPPING[this.props.seatPosition];
  }

  isEmpty() {
    return !this.props.player;
  }

  cardToImageName(card) {
    return `${card[1]}${this.cardFaceToNumber(card[0])}`;
  }

  cardFaceToNumber(face) {
    switch (face) {
      case 'J': return 11;
      case 'Q': return 12;
      case 'K': return 13;
      case 'A': return 1;
      default: return parseInt(face, 10);
    }
  }
}

SeatContainer.propTypes = {
  seatPosition: PropTypes.string.isRequired,
  player: PropTypes.object,
  current: PropTypes.bool,
}

export default SeatContainer;
