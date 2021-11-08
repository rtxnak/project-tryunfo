import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const {
      onInputChange,
      cardFilterName,
      cardRarefilter,
    } = this.props;

    return (
      <div>
        <label htmlFor="name-filter">
          Filtro de Busca por Nome:
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

        <label htmlFor="rare-filter">
          Filtro de Raridade:
          <select
            id="rare-filter"
            data-testid="rare-filter"
            type="text"
            name="cardRarefilter"
            value={ cardRarefilter }
            onChange={ onInputChange }
          >
            <option name="todas" value="todas" selected>Todas</option>
            <option name="normal" value="normal">Normal</option>
            <option name="raro" value="raro">Raro</option>
            <option name="muito-raro" value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  cardFilterName: PropTypes.string.isRequired,
  cardRarefilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
