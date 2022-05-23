import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AllMyDeck from './components/AllMyDeck';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      listOfSavedCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateButton());
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);

    const arrayOfFields = [cardName, cardDescription, cardImage, cardRare];
    const fieldsContainInfo = arrayOfFields.every((field) => field !== '');

    const SUM = 230;
    const MAX = 100;
    const MIN = 0;

    const attrSum = (attr1 + attr2 + attr3) <= SUM;

    const arrayOfAttrs = [attr1, attr2, attr3];
    const maxAttr = arrayOfAttrs.every((element) => element <= MAX);
    const minAttr = arrayOfAttrs.every((element) => element >= MIN);

    if (fieldsContainInfo && attrSum && maxAttr && minAttr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { isSaveButtonDisabled, listOfSavedCards, ...cardStates } = this.state;

    this.setState((prevState) => ({
      listOfSavedCards: [...prevState.listOfSavedCards, cardStates],
      hasTrunfo: cardStates.cardTrunfo,
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
      });
    });
  }

  deleteButtonClick = (item) => {
    const { listOfSavedCards } = this.state;
    const remainingCards = listOfSavedCards
      .filter((element) => element.cardName !== item.cardName);
    const theTrunfo = item.cardTrunfo;
    this.setState({
      hasTrunfo: !theTrunfo,
      listOfSavedCards: remainingCards,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      listOfSavedCards,
    } = this.state;

    return (
      <div>
        <div className="mainContent">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <div className="rightBlock">
            <h1 className="rightTitle">
              Pré-visualização
            </h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
        </div>

        <div className="allCardsSection">
          <h1 className="titleCardSection">
            Todas as cartas
          </h1>
          <div className="allCards">
            {
              listOfSavedCards.map((item) => (
                <div className="myCard" key={ item.cardName }>
                  <Card
                    cardName={ item.cardName }
                    cardDescription={ item.cardDescription }
                    cardAttr1={ item.cardAttr1 }
                    cardAttr2={ item.cardAttr2 }
                    cardAttr3={ item.cardAttr3 }
                    cardImage={ item.cardImage }
                    cardRare={ item.cardRare }
                    cardTrunfo={ item.cardTrunfo }
                  />
                  <button
                    className="deleteButton"
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.deleteButtonClick(item) }
                  >
                    Excluir
                  </button>
                </div>
              ))
            }
          </div>
          <AllMyDeck />
        </div>
      </div>
    );
  }
}

export default App;
