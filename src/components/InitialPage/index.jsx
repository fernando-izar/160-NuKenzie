import "./style.css";

function InitialPage({ setInitialPage, changePage }) {
  return (
    <>
      <div>Página Inicial</div>
      <button onClick={changePage}>Iniciar</button>
    </>
  );
}

export default InitialPage;
