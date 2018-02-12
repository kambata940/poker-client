import React from 'react';
import PropTypes from 'prop-types';

class BoardContainer extends React.Component {
  render () {
    const cardElements = this.props.cards.map(card => {
      const style = {backgroundImage: `url("/images/${this.cardToImageName(card)}.png")`};
      return (<span className="card" style={style} />);
    });

    return (
      <div className="board">
        {cardElements}
      </div>
    );
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

BoardContainer.propTypes = {
  pot: PropTypes.number,
  cards: PropTypes.array.isRequired,
};

export default BoardContainer;
