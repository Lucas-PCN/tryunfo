import React from 'react';
import Card from './Card';
import myDeckCards from '../data/allMyDeckData';

class AllMyDeck extends React.Component {
  render() {
    return (
      <div className="allCards">
        {
          myDeckCards.map((item) => (
            <div className="myCard" key={ item.name }>
              <Card
                cardName={ item.name }
                cardDescription={ item.description }
                cardAttr1={ item.attr1 }
                cardAttr2={ item.attr2 }
                cardAttr3={ item.attr3 }
                cardImage={ item.url }
                cardRare={ item.rare }
                cardTrunfo={ item.trunfo }
              />
              <button
                className="deleteButton"
                type="button"
                data-testid="delete-button"
              >
                carta original
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default AllMyDeck;
