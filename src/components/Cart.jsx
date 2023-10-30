import { useContext } from "react";
import { CartContainer } from "./styles";
import { ContextSuppliers } from "../useContext/ContextSuppliers";

export const Cart = () => {
  const { cart } = useContext(ContextSuppliers);

  return (
    <CartContainer>
      <img src="/cart.png" alt="cart" width={70} />
      <div className="indicator">{cart.length}</div>
    </CartContainer>
  );
};
