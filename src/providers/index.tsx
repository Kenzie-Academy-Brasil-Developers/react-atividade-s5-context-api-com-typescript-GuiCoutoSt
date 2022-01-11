import { CartProvider } from "./Cart";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
