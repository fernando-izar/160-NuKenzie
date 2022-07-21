import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalMoney = listTransactions.reduce(
    (acc, value) => (acc += value.value),
    0
  );

  return (
    <div>
      <div>
        <h2>Valor Total</h2>
        <p>{totalMoney}</p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
