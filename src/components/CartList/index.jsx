import "./styles.css";
import CartTotal from "../CartTotal";
const CartList = ({ currentValue, deleteItem }) => {
  return (
    <ul className="lista-carrinho">
      {currentValue &&
        currentValue.map((produto) => {
          return (
            <li className="produto-carrinho">
              <figcaption className="img">
                <img
                  className="carrinho-img"
                  title={produto.name}
                  src={produto.img}
                />
              </figcaption>
              <h4 className="carrinho-nome">{produto.name}</h4>
              <p className="carrinho-categoria">{produto.category}</p>
              <button
                onClick={() => deleteItem(produto)}
                className="botão-remover-carrinho"
              >
                Remover
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default CartList;
