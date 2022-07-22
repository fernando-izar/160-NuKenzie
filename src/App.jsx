import Form from "./components/Form";
import List from "./components/List";
import logo from "./assets/img/Nu_Kenzie.png";
import InitialPage from "./components/InitialPage";
import TotalMoney from "./components/TotalMoney";

import { useState } from "react";

import "./reset.css";
import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isInitialPage, setIsInitialPage] = useState(true);
  const changePage = () => setIsInitialPage((oldState) => !oldState);

  return isInitialPage ? (
    <>
      <InitialPage
        setIsInitialPage={setIsInitialPage}
        changePage={changePage}
      />
    </>
  ) : (
    <div className="App">
      <header className="header">
        <figure className="header__figure">
          <img className="header__img" src={logo} alt="logo" />
        </figure>
        <button
          className="button-header button-header--start"
          onClick={changePage}
        >
          Inicio
        </button>
      </header>
      <main className="main">
        <div className="container-left-side">
          <section className="section-form">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </section>
          <section
            className="section-total-money"
            style={{ display: listTransactions.length ? "flex" : "none" }}
          >
            <TotalMoney listTransactions={listTransactions} />
          </section>
        </div>

        <section className="section-list">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
