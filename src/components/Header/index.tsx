import { useCart } from "../../providers/Cart";
import Container from "./styles";

const Header = () => {
  const { cart } = useCart();
  return (
    <Container>
      <h1>Our Store</h1>
      <a href="#cart">
        🛒
        <span> {cart.length} </span>
      </a>
    </Container>
  );
};

export default Header;
