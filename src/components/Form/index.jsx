import { useState } from "react";

import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [newDescription, setNewDescription] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newType, setNewType] = useState("entrada");
  const handleEvent = (event) => {
    event.preventDefault();
    setNewDescription("");
    setNewValue("");
  };
  const addTransaction = (newDescription, newValue, newType) => {
    if (newDescription && newValue) {
      newValue =
        newType === "entrada" ? Math.abs(newValue) : -Math.abs(newValue);
      setListTransactions([
        ...listTransactions,
        {
          description: newDescription,
          type: newType,
          value: newValue,
        },
      ]);
    }
  };

  return (
    <form className="form" onSubmit={handleEvent}>
      <div className="form__div-header">
        <label className="form__description-title" htmlFor="">
          Descrição
        </label>
        <input
          className="form__description-input"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setNewDescription(event.target.value)}
          value={newDescription}
        />
        <span className="form__description-example">Ex: Compra de roupas</span>
      </div>
      <div className="form__container-value">
        <div className="form__value">
          <label className="form__value-title" htmlFor="">
            Valor
          </label>
          <input
            className="form__value-input"
            type="number"
            onChange={(event) => setNewValue(event.target.value)}
            value={newValue}
          />
        </div>
        <div className="form__value">
          <label className="form__value-title" htmlFor="">
            Tipo de valor
          </label>
          <select
            className="form__value-select"
            name="value-type"
            id="value-type"
            onChange={(event) => setNewType(event.target.value)}
            value={newType}
          >
            <option className="form__option-in" value="entrada">
              Entrada
            </option>
            <option className="form__option-out" value="despesa">
              Despesa
            </option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="button button--insert-value"
        onClick={() => addTransaction(newDescription, newValue, newType)}
      >
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
