import { Container, Product } from "./styles";

import { useCart } from "../../providers/Cart";

import { success, error } from "../../utils/notifications";

const Inventory = () => {
  const products = [
    {
      id: 11,
      title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
      description:
        "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
      price: 699.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp",
    },
    {
      id: 12,
      title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 799.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp",
    },
    {
      id: 13,
      title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 859.1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp",
    },
  ];

  const { cart, addProduct } = useCart();

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id}>
          <div className="product__image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product__info">
            <p className="product__title">{product.title}</p>
            <p>
              <small>{product.description}</small>
            </p>
            <p className="product__price">R${product.price.toFixed(2)}</p>
            <div className="product__button">
              <button
                onClick={() => {
                  if (cart.some((item) => item.id === product.id)) {
                    error("already in cart");
                  } else {
                    addProduct(product);
                    success("added to cart");
                  }
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </Product>
      ))}
    </Container>
  );
};

export default Inventory;
