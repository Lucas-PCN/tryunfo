import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="leftBlock">
        <h1 className="leftTitle">
          Adicionar nova carta ao Trunfo das DIVAS do POP
        </h1>
        <form className="form">
          <label htmlFor="cardName" className="nameLabel">
            <p>Nome</p>
            <input
              data-testid="name-input"
              id="cardName"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            <p>Descrição</p>
            <textarea
              data-testid="description-input"
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            <p>Potência vocal 1-100</p>
            <input
              data-testid="attr1-input"
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            <p>Fama 1-100</p>
            <input
              data-testid="attr2-input"
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Clipes com mais de 1 bilhão de views 1-30
            <input
              data-testid="attr3-input"
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="imageUrl">
            URL da imagem
            <input
              data-testid="image-input"
              id="imageUrl"
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="select">
            Raridade
            <select
              data-testid="rare-input"
              id="select"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            {
              hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p> : <input
                data-testid="trunfo-input"
                className="inputCheckbox"
                type="checkbox"
                id="trunfo"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            }
            {!hasTrunfo && '  Super Trybe Tryunfo'}
          </label>

          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
