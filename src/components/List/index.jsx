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
                <div className="card__div-value">
                  <p className="card__value">
                    R$ {Math.abs(element.value).toLocaleString("pt-br")}
                  </p>
                  <button
                    className="button-trash"
                    onClick={() => removeItem(index)}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="container-start-list">
            <h2 className="container-start-list__title">
              Você ainda não possui nenhum lançamento
            </h2>
            <div className="container-start-list__no-content">
              <div className="container-start-list__big-rectangle">
                <svg
                  width="331"
                  height="14"
                  viewBox="0 0 331 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0534668"
                    y="0.722168"
                    width="330.175"
                    height="13.1852"
                    fill="#E9ECEF"
                  />
                </svg>
              </div>
              <div className="container-start-list__small-rectangle">
                <svg
                  width="77"
                  height="14"
                  viewBox="0 0 77 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0534668"
                    y="0.0925293"
                    width="76.2714"
                    height="13.1852"
                    fill="#E9ECEF"
                  />
                </svg>
              </div>
            </div>
            <div className="container-start-list__no-content">
              <div className="container-start-list__big-rectangle">
                <svg
                  width="331"
                  height="14"
                  viewBox="0 0 331 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0534668"
                    y="0.722168"
                    width="330.175"
                    height="13.1852"
                    fill="#E9ECEF"
                  />
                </svg>
              </div>
              <div className="container-start-list__small-rectangle">
                <svg
                  width="77"
                  height="14"
                  viewBox="0 0 77 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0534668"
                    y="0.0925293"
                    width="76.2714"
                    height="13.1852"
                    fill="#E9ECEF"
                  />
                </svg>
              </div>
            </div>
            <div className="container-start-list__no-content">
              <div className="container-start-list__big-rectangle">
                <svg
                  width="331"
                  height="14"
                  viewBox="0 0 331 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0534668"
                    y="0.722168"
                    width="330.175"
                    height="13.1852"
                    fill="#E9ECEF"
                  />
                </svg>
              </div>
              <div className="container-start-list__small-rectangle">
                <svg
                  width="77"
                  height="14"
                  viewBox="0 0 77 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0534668"
                    y="0.0925293"
                    width="76.2714"
                    height="13.1852"
                    fill="#E9ECEF"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default List;
