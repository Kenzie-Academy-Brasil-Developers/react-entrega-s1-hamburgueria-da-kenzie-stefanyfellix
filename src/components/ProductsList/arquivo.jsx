import "./styles.css";

const ProductsList = ({ apiProducts, handleClick }) => {
  return (
    <ul className="list-itens">
      {apiProducts &&
        apiProducts.map((item) => {
          const price = item.price.toFixed(2);
          return (
            <li className="item">
              <figcaption className="background-img">
                <img className="img-item" src={item.img} />
              </figcaption>

              <h2 className="nome-item">{item.name}</h2>
              <span className="categoria-item">{item.category}</span>
              <p className="preço-item">R${price}</p>
              <button
                onClick={() => {
                  handleClick(item);
                }}
                className="botão-adicionar"
              >
                Adicionar
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default ProductsList;
