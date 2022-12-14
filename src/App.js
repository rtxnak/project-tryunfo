import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import Filters from './components/CardListFilters';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsDeck: [],
      cardFilterName: '',
      cardRarefilter: 'todas',
      cardTrunfoFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validationOnSaveButton = this.validationOnSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const valueInNumber = (target.type === 'number') ? parseInt(target.value, 10)
      : target.value;
    const value = target.type === 'checkbox' ? target.checked : valueInNumber;

    this.setState({
      [name]: value,
    }, () => {
      this.validationOnSaveButton();
      // console.log(typeof value);
    });
  }

  // Por algum motivo, quando utilizado somente o target.value, o valor é transferido como string.
  // Utilizado parseInt() para conversão em Number

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
      cardTrunfo: false,
      cardsDeck: [...prevState.cardsDeck, newCard],
    }));

    if (cardTrunfo) this.setState({ hasTrunfo: true });
  }

  validationOnSaveButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxOfAttribute = 90;
    const maxOfAttributeSum = 210;

    const formInformationCheck = [
      !cardName,
      !cardDescription,
      !cardImage,
      !cardRare,
      cardAttr1 < 0 || cardAttr1 > maxOfAttribute,
      cardAttr2 < 0 || cardAttr2 > maxOfAttribute,
      cardAttr3 < 0 || cardAttr3 > maxOfAttribute,
      cardAttr1
      + cardAttr2
      + cardAttr3 > maxOfAttributeSum,
    ];
    const validateResult = formInformationCheck.every((result) => result !== true);
    this.setState({
      isSaveButtonDisabled: !validateResult,
    });
  }

  removeCard({ target }) {
    const { id } = target;
    const { cardsDeck } = this.state;
    const card = cardsDeck[id];
    // console.log(card);
    if (card.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    target.parentNode.remove();
  }

  render() {
    const {
      cardsDeck,
      cardFilterName,
      cardRarefilter,
      cardTrunfoFilter,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
        <Filters
          onInputChange={ this.onInputChange }
          cardFilterName={ cardFilterName }
        />
        <CardList
          cardsDeck={ cardsDeck }
          removeCard={ this.removeCard }
          cardFilterName={ cardFilterName }
          cardRarefilter={ cardRarefilter }
          cardTrunfoFilter={ cardTrunfoFilter }
        />
      </div>
    );
  }
}

export default App;

/*
ETAPAS a partir do requisito 4
1- Criar construtor com o state com os campos do card no App.js ;
2 - Criar a funcao onInputChange de manipulacao  do state que relaciona com o Form.jsx;
3 - Relacionar o state do app.js para enviar os values para o Card.jsx
*/
