import Form from "./components/Form";
import List from "./components/List";
import logo from "./img/Nu_Kenzie.png";
import InitialPage from "./components/InitialPage";

import { useState } from "react";

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
        <figure>
          <img src={logo} alt="" />
        </figure>
        <button onClick={changePage}>Inicio</button>
      </header>
      <main className="main">
        <section className="section-form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
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
