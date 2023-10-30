import { useContext } from "react";
import { CartContainer } from "./styles";
import { ContextSuppliers } from "../useContext/ContextSuppliers";

export const Cart = () => {
  const { cart, notify } = useContext(ContextSuppliers);

  return (
    <CartContainer
      onClick={() =>
        notify(<img src="/cart-details.jpg" alt="Turner Dad" width={250} />)
      }
    >
      <img src="/cart.png" alt="cart" width={70} />
      <div className="indicator">{cart.length}</div>
    </CartContainer>
  );
};
