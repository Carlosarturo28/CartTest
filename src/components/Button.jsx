import { useContext } from "react";
import { ContextSuppliers } from "../useContext/ContextSuppliers";
import { AddToCart } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Button = ({ product, color }) => {
  const { selectedSupplier, addToCart } = useContext(ContextSuppliers);
  const { title, id, price } = product;

  const itemToAdd = {
    title: title,
    id: id,
    price: price,
    color: color,
    supplier: selectedSupplier
  };

  const handleAddToCart = (item) => {
    console.log("entro");
    toast.success("Product added successfully!", {
      position: toast.POSITION.TOP_RIGHT
    });
    addToCart(item);
  };

  return (
    <>
      <AddToCart onClick={() => handleAddToCart(itemToAdd)}>
        Add to cart
      </AddToCart>
      <ToastContainer />
    </>
  );
};
