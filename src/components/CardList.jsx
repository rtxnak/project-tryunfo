import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardsDeck } = this.props;

    return (
      <div>
        {
          cardsDeck.map((card) => (
            <div key={ card.cardName }>
              <Card
                { ...card }
              />
            </div>
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardsDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
