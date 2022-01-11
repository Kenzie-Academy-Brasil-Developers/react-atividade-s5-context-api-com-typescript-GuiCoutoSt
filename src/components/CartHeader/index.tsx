import { useCart } from "../../providers/Cart";
import Container from "./styles";

const CartHeader = () => {
  const { cart } = useCart();

  return (
    <div id="cart">
      {cart.length > 0 && (
        <Container>
          <h2>Cart</h2>
        </Container>
      )}
    </div>
  );
};

export default CartHeader;
