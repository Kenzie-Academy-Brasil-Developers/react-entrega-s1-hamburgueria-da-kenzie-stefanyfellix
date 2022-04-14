import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList/arquivo";
import BurguerKenzie from "./img/BurguerKenzie.png";
import CartList from "./components/CartList";
import CartTotal from "./components/CartTotal";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products").then(
      (response) => response.json().then((data) => setListProducts(data))
    );
  }, []);

  useEffect(() => {
    setFilteredProducts(listProducts);
  }, [listProducts]);

  const showProducts = () => {
    const produtosFiltrados = listProducts.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        category.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredProducts(produtosFiltrados);
  };

  const removeAll = () => {
    setCurrentSale([]);
  };
  const handleClick = (newProduct) => {
    //maneira ultilizando o find
    //const newProduct = listProducts.find((produto) => produto.id === productId);
    if (currentSale.includes(newProduct) === false) {
      setCurrentSale([...currentSale, newProduct]);
    }
  };
  console.log(currentSale);
  const deleteItem = (item) => {
    const filter = currentSale.filter((produto) => {
      return produto !== item;
    });
    setCurrentSale(filter);
  };

  return (
    <section>
      <header className="cabeçalho-hambugueria">
        <img className="img-cabeçalho" src={BurguerKenzie} />
        <div className="pesquisa-cabeçalho">
          <input
            className="input-cabeçalho"
            placeholder="Digite aqui sua pesquisa"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
          <button onClick={showProducts} className="botão-cabeçalho">
            Pesquisar
          </button>
        </div>
      </header>

      <div className="App">
        <div className="produtos">
          <ProductsList
            apiProducts={filteredProducts}
            handleClick={handleClick}
          />
        </div>

        <div className="Cart">
          <header className="header-carrinho">
            <h2 className="h2-carrinho">Carrinho de compras</h2>
          </header>
          {currentSale.length === 0 ? (
            <div className="itens-carrinho">
              <h3 className="h3-carrinho">Sua sacola está vazia</h3>
              <p className="instruções-carrinho">Adicione itens</p>
            </div>
          ) : (
            <>
              <CartList currentValue={currentSale} deleteItem={deleteItem} />
              <CartTotal currentSale={currentSale} removeAll={removeAll} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
