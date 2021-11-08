import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardsDeck } = this.props;
    const { removeCard } = this.props;
    const { cardFilterName } = this.props;
    return (
      <div>
        {
          cardsDeck
            .filter(({ cardName }) => {
              const cardsFiltered = cardName.includes(cardFilterName);
              return cardsFiltered;
            })
            .map((card, id) => (
              <div key={ card.cardName }>
                <Card
                  { ...card }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ removeCard }
                  id={ id }
                >
                  Excluir
                </button>
              </div>
            ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardsDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired,
  cardFilterName: PropTypes.string.isRequired,
};

export default CardList;
