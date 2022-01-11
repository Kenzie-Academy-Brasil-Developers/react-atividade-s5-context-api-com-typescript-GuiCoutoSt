import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import CartHeader from "./components/CartHeader";
import Cart from "./components/Cart";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Inventory />
      <CartHeader />
      <Cart />
      <GlobalStyle />
      <Toaster />
    </div>
  );
}

export default App;
