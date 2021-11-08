import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange, cardFilterName } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          Filtro de Busca:
          <input
            id="name-filter"
            data-testid="name-filter"
            type="text"
            name="cardFilterName"
            placeholder="Nome da carta"
            value={ cardFilterName }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  cardFilterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
