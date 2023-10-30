import { useContext } from "react";
import { ContextSuppliers } from "../useContext/ContextSuppliers";
import { AddToCart } from "./styles";

export const Button = ({ product, color }) => {
  const { selectedSupplier, addToCart, notify } = useContext(ContextSuppliers);
  const { title, id, price } = product;

  const itemToAdd = {
    title: title,
    id: id,
    price: price,
    color: color,
    supplier: selectedSupplier,
  };

  const handleAddToCart = (item) => {
    notify("Product added successfully!", "success");
    addToCart(item);
  };

  return (
    <>
      <AddToCart onClick={() => handleAddToCart(itemToAdd)}>
        Add to cart
      </AddToCart>
    </>
  );
};
