import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalMoney = listTransactions.reduce((acc, value) => {
    acc += value.value;
    return Math.round(acc * 100) / 100;
  }, 0);

  return (
    <div className="total-money">
      <div className="total-money__totals">
        <h2 className="total-money__text">Valor Total</h2>
        <p className="total-money__value">R$ {totalMoney}</p>
      </div>
      <p className="total-money__explanation">O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
