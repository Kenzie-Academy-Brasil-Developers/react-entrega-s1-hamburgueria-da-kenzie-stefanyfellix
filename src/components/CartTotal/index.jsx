import "./styles.css";
const CartTotal = ({ currentSale, removeAll }) => {
  return (
    <div className="div-total">
      <h3 className="h3-total">Total: </h3>
      <p className="p-total">
        {currentSale
          .reduce((valorAnterior, valorAtual) => {
            const total = valorAtual.price + valorAnterior;
            return total;
          }, 0)
          .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
      <button onClick={removeAll} className="botão-remover-todos">
        Remover todos
      </button>
    </div>
  );
};
export default CartTotal;
