import { useCart } from "../../providers/Cart";
import { success } from "../../utils/notifications";

import { Container, Product } from "./styles";

const Cart = () => {
  const { cart, deleteProduct } = useCart();

  return (
    <Container>
      {cart.map((product) => (
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
                  deleteProduct(product);
                  success("removed from cart");
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </Product>
      ))}
    </Container>
  );
};

export default Cart;
