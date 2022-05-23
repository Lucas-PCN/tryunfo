import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="card">
        <div>
          <h1 data-testid="name-card" className="cardTitle">
            { cardName }
          </h1>
        </div>
        <img
          className="cardImage"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div className="textDescription">
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </div>
        <div>
          <div className="attr" data-testid="attr1-card">
            <div>Potência vocal:</div>
            <div className="attrNumber">{ cardAttr1 }</div>
          </div>
          <div className="attr" data-testid="attr2-card">
            <div>Fama:</div>
            <div className="attrNumber">{ cardAttr2 }</div>
          </div>
          <div className="attr" data-testid="attr3-card">
            <div>Clipes com mais de 1 bilhão de views:</div>
            <div className="attrNumber">{ cardAttr3 }</div>
          </div>
        </div>
        <div>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
