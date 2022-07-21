import { useState } from "react";

import "./style.css";

function List({ listTransactions, setListTransactions }) {
  const [view, setView] = useState("todos");

  const removeItem = (indexSelected) =>
    setListTransactions(
      listTransactions.filter((element, index) => index !== indexSelected)
    );

  return (
    <>
      <header className="list-header">
        <h3 className="list-header__title">Resumo financeiro</h3>
        <div className="list-header__buttons">
          <button
            className="button button--all"
            onClick={() => setView("todos")}
          >
            Todos
          </button>
          <button
            className="button button--in"
            onClick={() => setView("entrada")}
          >
            Entradas
          </button>
          <button
            className="button button--out"
            onClick={() => setView("despesa")}
          >
            Despesas
          </button>
        </div>
      </header>
      <>
        {listTransactions.length ? (
          <ul className="cards">
            {listTransactions.map((element, index) => (
              <li
                key={index}
                className="card"
                style={{
                  display:
                    view === "todos"
                      ? "flex"
                      : view === element.type
                      ? "flex"
                      : "none",
                }}
              >
                <div className="card__div-texts">
                  <h3 className="card__description">{element.description}</h3>
                  <p className="card__type">{element.type}</p>
                </div>
                <p className="card__value">{element.value}</p>
                <button
                  className="button-trash"
                  onClick={() => removeItem(index)}
                >
                  Del
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="container-start-list">
            <h2 className="container-start-list__title">
              Você ainda não possui nenhum lançamento
            </h2>
            <div className="container-start-list__no-content">
              <div className="container-start-list__big-rectangle"></div>
              <div className="container-start-list__small-rectangle"></div>
            </div>
            <div className="container-start-list__no-content">
              <div className="container-start-list__big-rectangle"></div>
              <div className="container-start-list__small-rectangle"></div>
            </div>
            <div className="container-start-list__no-content">
              <div className="container-start-list__big-rectangle"></div>
              <div className="container-start-list__small-rectangle"></div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default List;
