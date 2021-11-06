import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardRare: '',
      cardTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...this.state }
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
